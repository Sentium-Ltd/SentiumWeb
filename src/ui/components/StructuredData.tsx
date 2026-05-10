import { structuredDataPayload } from "@/lib/structured-data";

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD per Google guidance
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredDataPayload()),
      }}
    />
  );
}
