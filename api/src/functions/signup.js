const { app } = require("@azure/functions");
const { z } = require("zod");
const { TableClient } = require("@azure/data-tables");

const SignupSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(200),
  product: z.enum(["treso", "makemycard"]),
});

// Per-IP rate limit: 5 requests / 10 minutes (same shape as /api/contact)
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const RATE_BUCKET_CAP = 1024;
const buckets = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const entry = buckets.get(ip);
  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    buckets.set(ip, { count: 1, windowStart: now });
    if (buckets.size > RATE_BUCKET_CAP) {
      for (const [k, v] of buckets) {
        if (now - v.windowStart > RATE_WINDOW_MS) buckets.delete(k);
      }
    }
    return true;
  }
  if (entry.count >= RATE_MAX) return false;
  entry.count += 1;
  return true;
}

function clientIp(request) {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

// RowKey must not contain / \ # ? and must be under 1KB. Email allows all of
// these in principle; sanitise just in case.
function safeRowKey(email) {
  return email
    .toLowerCase()
    .replace(/[\\/#?]/g, "-")
    .slice(0, 200);
}

// Non-cryptographic IP hash - only used to spot spam bursts in the table,
// never displayed to end users.
function hashIp(ip) {
  let h = 5381;
  for (let i = 0; i < ip.length; i += 1) {
    h = (h * 33) ^ ip.charCodeAt(i);
  }
  return (h >>> 0).toString(16);
}

// Cache the TableClient at module level. fromConnectionString is synchronous,
// so there's no race condition when the Function App instance is cold and
// two requests arrive simultaneously. The old caching pattern awaited
// createTable() inside a shared promise and could wedge every subsequent
// request if the first init hung on a slow Storage response - that's the
// 30-second timeout we saw in the wild.
let cachedClient = null;
function getTableClient(connectionString) {
  if (!cachedClient) {
    cachedClient = TableClient.fromConnectionString(connectionString, "signups");
  }
  return cachedClient;
}

// Node 17+; falls back to a manual controller if the runtime is older
function timeoutSignal(ms) {
  if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
    return AbortSignal.timeout(ms);
  }
  const ctrl = new AbortController();
  setTimeout(() => ctrl.abort(), ms).unref?.();
  return ctrl.signal;
}

app.http("signup", {
  methods: ["POST"],
  route: "signup",
  authLevel: "anonymous",
  handler: async (request, context) => {
    let body;
    try {
      body = await request.json();
    } catch {
      return { status: 400, jsonBody: { ok: false, error: "invalid_json" } };
    }

    const parsed = SignupSchema.safeParse(body);
    if (!parsed.success) {
      return { status: 400, jsonBody: { ok: false, error: "validation_failed" } };
    }

    const ip = clientIp(request);
    if (!rateLimit(ip)) {
      return { status: 429, jsonBody: { ok: false, error: "rate_limited" } };
    }

    const conn = process.env.STORAGE_CONNECTION_STRING;
    if (!conn) {
      context.error("signup: STORAGE_CONNECTION_STRING is not set");
      return { status: 500, jsonBody: { ok: false } };
    }

    const entity = {
      partitionKey: parsed.data.product,
      rowKey: safeRowKey(parsed.data.email),
      email: parsed.data.email,
      product: parsed.data.product,
      createdAt: new Date().toISOString(),
      source: "sentium.app",
      ipHash: hashIp(ip),
    };

    try {
      const client = getTableClient(conn);
      // Hard 10s timeout so a slow / hung Storage connection can't wedge
      // the Function beyond a reasonable window. Prevents the 30s+ hangs
      // that were catching users on the previous implementation.
      const opts = { abortSignal: timeoutSignal(10_000) };
      try {
        await client.upsertEntity(entity, "Merge", opts);
      } catch (err) {
        // Table might not exist yet on a fresh environment. Create it and
        // retry once - the createTable call is idempotent.
        if (err?.statusCode === 404) {
          await client.createTable();
          await client.upsertEntity(entity, "Merge", opts);
        } else {
          throw err;
        }
      }
      context.log(`signup: stored ${parsed.data.email} for ${parsed.data.product}`);
      return { status: 200, jsonBody: { ok: true } };
    } catch (err) {
      if (err?.name === "AbortError" || err?.name === "TimeoutError") {
        context.error("signup: storage call timed out after 10s");
        return { status: 504, jsonBody: { ok: false, error: "storage_timeout" } };
      }
      context.error("signup: table upsert failed", err);
      return { status: 500, jsonBody: { ok: false } };
    }
  },
});
