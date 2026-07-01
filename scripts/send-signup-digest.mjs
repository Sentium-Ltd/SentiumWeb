// Monthly signup digest.
// Runs on the 1st of each month via .github/workflows/signup-digest.yml
// (or manually via `npm run digest`). Reads the Azure Storage Table where
// /api/signup stores email signups, groups the last 30 days by product,
// and emails the list to SUPPORT_EMAIL via Resend.
//
// Required env vars (set as GitHub Actions repo secrets for the scheduled run):
//   STORAGE_CONNECTION_STRING  Azure Storage account connection string
//   RESEND_API_KEY             Resend API key
//   RESEND_FROM                From address on a verified Resend domain
//   SUPPORT_EMAIL              Where the digest lands

import { TableClient } from "@azure/data-tables";
import { Resend } from "resend";

const {
  STORAGE_CONNECTION_STRING,
  RESEND_API_KEY,
  RESEND_FROM,
  SUPPORT_EMAIL,
  DIGEST_DAYS,
} = process.env;

if (!STORAGE_CONNECTION_STRING) throw new Error("STORAGE_CONNECTION_STRING missing");
if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY missing");
if (!RESEND_FROM) throw new Error("RESEND_FROM missing");
if (!SUPPORT_EMAIL) throw new Error("SUPPORT_EMAIL missing");

const windowDays = Number(DIGEST_DAYS ?? "30");
const cutoff = new Date(Date.now() - windowDays * 24 * 60 * 60 * 1000);
const cutoffIso = cutoff.toISOString();

const PRODUCTS = {
  treso: "Treso (finance)",
  makemycard: "MakeMyCard (creative)",
};

async function main() {
  const client = TableClient.fromConnectionString(
    STORAGE_CONNECTION_STRING,
    "signups",
  );

  // The table might not exist yet (nobody has signed up) - that's fine.
  const byProduct = {};
  for (const key of Object.keys(PRODUCTS)) byProduct[key] = [];

  try {
    const entities = client.listEntities({
      queryOptions: { filter: `createdAt ge '${cutoffIso}'` },
    });
    for await (const entity of entities) {
      const product = entity.partitionKey ?? "unknown";
      if (!byProduct[product]) byProduct[product] = [];
      byProduct[product].push({
        email: entity.email ?? entity.rowKey,
        createdAt: entity.createdAt ?? entity.timestamp,
      });
    }
  } catch (err) {
    if (err?.statusCode === 404) {
      console.log(`Table 'signups' does not exist yet - no signups to report.`);
    } else {
      throw err;
    }
  }

  const totalCount = Object.values(byProduct).reduce((acc, arr) => acc + arr.length, 0);
  const monthLabel = new Date().toLocaleString("en-GB", {
    month: "long",
    year: "numeric",
  });

  const lines = [];
  lines.push(`Sentium signup digest - ${monthLabel}`);
  lines.push("=".repeat(50));
  lines.push("");
  lines.push(`Window: last ${windowDays} days (since ${cutoff.toDateString()})`);
  lines.push(`Total signups: ${totalCount}`);
  lines.push("");

  if (totalCount === 0) {
    lines.push("No new signups this period. Nothing to email out.");
  } else {
    for (const [productKey, productLabel] of Object.entries(PRODUCTS)) {
      const rows = (byProduct[productKey] ?? []).sort((a, b) =>
        String(a.createdAt).localeCompare(String(b.createdAt)),
      );
      lines.push(`## ${productLabel}: ${rows.length} signup${rows.length === 1 ? "" : "s"}`);
      lines.push("");
      if (rows.length === 0) {
        lines.push("  (none)");
      } else {
        for (const row of rows) {
          const ts = row.createdAt
            ? new Date(row.createdAt).toISOString().slice(0, 10)
            : "?";
          lines.push(`  ${ts}  ${row.email}`);
        }
      }
      lines.push("");
    }

    // Handle any surprise product keys not in the PRODUCTS map
    for (const [productKey, rows] of Object.entries(byProduct)) {
      if (PRODUCTS[productKey]) continue;
      if (rows.length === 0) continue;
      lines.push(`## ${productKey} (unrecognised): ${rows.length} signup${rows.length === 1 ? "" : "s"}`);
      for (const row of rows) {
        const ts = row.createdAt
          ? new Date(row.createdAt).toISOString().slice(0, 10)
          : "?";
        lines.push(`  ${ts}  ${row.email}`);
      }
      lines.push("");
    }
  }

  lines.push("--");
  lines.push("Sent by scripts/send-signup-digest.mjs via GitHub Actions.");

  const body = lines.join("\n");

  if (totalCount === 0 && process.env.DIGEST_SKIP_IF_EMPTY === "1") {
    console.log("Empty digest and DIGEST_SKIP_IF_EMPTY=1 - skipping email send.");
    console.log(body);
    return;
  }

  const resend = new Resend(RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: RESEND_FROM,
    to: SUPPORT_EMAIL,
    subject: `[sentium.app] Signup digest - ${monthLabel} (${totalCount})`,
    text: body,
  });
  if (error) {
    console.error("resend send failed:", error);
    process.exit(1);
  }
  console.log(`Digest sent: id=${data?.id}, ${totalCount} signups`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
