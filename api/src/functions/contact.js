const { app } = require("@azure/functions");
const { z } = require("zod");
const { Resend } = require("resend");

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(5000),
  hp: z.string().optional(),
});

// Per-IP token bucket: 5 requests per 10 minutes
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const buckets = new Map();
const RATE_BUCKET_CAP = 1024;

function rateLimit(ip) {
  const now = Date.now();
  const entry = buckets.get(ip);

  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    buckets.set(ip, { count: 1, windowStart: now });

    // Opportunistic eviction so the map never grows unbounded
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
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();
  return "unknown";
}

function fieldErrorsFromZod(error) {
  const errors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (key && !errors[key]) errors[key] = issue.message;
  }
  return errors;
}

app.http("contact", {
  methods: ["POST"],
  route: "contact",
  authLevel: "anonymous",
  handler: async (request, context) => {
    let body;
    try {
      body = await request.json();
    } catch {
      return {
        status: 400,
        jsonBody: { ok: false, error: "invalid_json" },
      };
    }

    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return {
        status: 400,
        jsonBody: {
          ok: false,
          errors: fieldErrorsFromZod(parsed.error),
        },
      };
    }

    // Honeypot — silently accept and drop
    if (parsed.data.hp && parsed.data.hp.trim().length > 0) {
      context.log("contact: honeypot triggered, dropping silently");
      return { status: 200, jsonBody: { ok: true } };
    }

    const ip = clientIp(request);
    if (!rateLimit(ip)) {
      return {
        status: 429,
        jsonBody: { ok: false, error: "rate_limited" },
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = process.env.SUPPORT_EMAIL;

    if (!apiKey || !from || !to) {
      context.error("contact: missing RESEND_API_KEY / RESEND_FROM / SUPPORT_EMAIL");
      return { status: 500, jsonBody: { ok: false } };
    }

    const resend = new Resend(apiKey);

    const text = [
      `From: ${parsed.data.name} <${parsed.data.email}>`,
      "",
      `Subject: ${parsed.data.subject}`,
      "",
      "Message:",
      parsed.data.message,
      "",
      "—",
      "Sent via the contact form on sentium.app",
    ].join("\n");

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `[sentium.app contact] ${parsed.data.subject}`,
      text,
    });

    if (error) {
      context.error("contact: resend send failed", error);
      return { status: 500, jsonBody: { ok: false } };
    }

    return { status: 200, jsonBody: { ok: true } };
  },
});
