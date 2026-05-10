// /llms.txt -- emerging convention proposed by Jeremy Howard at Answer.AI,
// adopted by Anthropic, Stripe, Cloudflare and others. A markdown summary
// of the site optimised for LLM ingestion: stable URLs, plain text,
// terse fact-first prose. Helps tools like ChatGPT / Perplexity / Claude
// build accurate, citeable answers about Sentium and its products.
//
// Spec: https://llmstxt.org/

import { projects } from "@/domain/projects";

export const dynamic = "force-static";

const SITE = "https://www.sentium.app";

export async function GET() {
  const projectLines = projects
    .map(
      (p) =>
        `- [${p.name}](${p.href}): ${p.tagline} ${p.platform} app.`
    )
    .join("\n");

  const body = `# Sentium

> Sentium is a small UK technology studio designing and building consumer mobile and web apps across learning, wellbeing, travel, and personal finance. We work on our own products and partner with founders and teams who bring us a good idea.

Catchphrase: You ask. We plan. We build. We ship.

## About
- Legal name: Sentium Ltd
- Registration: Companies House 16512683 (England & Wales)
- Website: ${SITE}
- Contact: support@sentium.app
- Direct: hello@sentium.app
- Repository org: https://github.com/Sentium-Ltd

## What we build
- Native iOS apps (Swift / SwiftUI)
- Web apps (TypeScript, modern frameworks)
- AI-augmented consumer products
- Privacy-first design - clear data handling, no tracking-for-tracking's-sake

## Focus areas
- Education - apps that meet kids where their curiosity lives
- Health - quiet, well-designed tools for everyday wellbeing
- Travel - software for how people actually plan and remember trips
- Personal finance - calm, clear money tools that don't feel like spreadsheets

## Projects
${projectLines}

## How we work
1. You ask - send a brief, an idea, or just a problem you're noticing
2. We plan - product strategy, design, scope, timeline
3. We build - end-to-end engineering, content, and polish
4. We ship - to the App Store, the open web, and into your users' hands

## Pages
- [Home](${SITE}/): studio overview, projects carousel, contact form
- [Sitemap](${SITE}/sitemap.xml)
- [robots.txt](${SITE}/robots.txt)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
