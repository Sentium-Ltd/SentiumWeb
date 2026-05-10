import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// AI / LLM crawlers are explicitly welcome. The wildcard rule already
// allows them; the named rules below are documentation-only so anyone
// auditing the policy can see the intent at a glance. See /llms.txt for
// a structured summary intended for LLM ingestion.
export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Google-Extended",
    "Applebot",
    "Applebot-Extended",
    "CCBot",
    "Bytespider",
    "Amazonbot",
    "DuckAssistBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: "https://www.sentium.app/sitemap.xml",
    host: "https://www.sentium.app",
  };
}
