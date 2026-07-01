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
    .map((p) => {
      const link = p.href ? `External link: ${p.href}` : "External link: (coming soon)";
      return `- [${p.name}](${SITE}/projects/${p.id}/) (${p.platform} app, ${p.status.replace(/-/g, " ")}): ${p.tagline} ${link}`;
    })
    .join("\n");

  const body = `# Sentium

> Sentium is a UK technology startup where AI becomes apps, agents, and automation. We design, build, and ship AI-native software that turns real problems into shipped software - our own consumer products, and partnerships with people who come to us with a problem to solve.

Positioning: Where AI becomes apps, agents, and automation.
Catchphrase: You ask. We plan. We build. We ship.

## About
- Legal name: Sentium Ltd
- Registration: Companies House 16512683 (England & Wales)
- Website: ${SITE}
- Contact: support@sentium.app
- Direct: hello@sentium.app
- Repository org: https://github.com/Sentium-Ltd
- Founded and led by an ex-Microsoft Cloud Solution Architect. Azure-native by default, cloud-agnostic by capability.

## What we build
- **Apps** - Consumer health, education, fintech, and more. Products people use daily.
- **Agents** - Autonomous, context-aware AI that acts, not just answers.
- **Automation** - Workflows, payroll, pipelines. Zero manual loops.

## For business
Most teams don't have an AI problem - they have a "where do we even start" problem. Common asks:
- Still doing it by hand? We automate it.
- Data everywhere, answers nowhere? We turn it into decisions.
- Know you need AI, no clue where to start? We map it, then build it.
- Tools that don't talk to each other? We connect the stack.
- Growing fast, breaking faster? We make it scale.

Four service pillars: Automate, Build, Transform, Advise.

## Focus areas
- Education - apps for kids: puzzles, drawing, stories, maths
- Health - a world where every person owns their health, catches what matters early
- Travel - software for how people actually plan and remember trips
- Finance - day-to-day money, without making it feel like homework

## Projects
${projectLines}

## How we work
1. You ask - send a brief, an idea, or just a problem you're noticing
2. We plan - product strategy, design, scope, timeline
3. We build - end-to-end engineering, content, and polish
4. We ship - to the App Store, the open web, and into your users' hands

## Pages
- [Home](${SITE}/): studio overview, projects, contact form
${projects.map((p) => `- [${p.name}](${SITE}/projects/${p.id}/): ${p.metaDescription}`).join("\n")}
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
