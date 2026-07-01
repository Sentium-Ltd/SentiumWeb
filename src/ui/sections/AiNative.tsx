import { Reveal } from "@/ui/components";

interface Pill {
  label: string;
  bg: string;
  color: string;
}

interface Tile {
  title: string;
  line: string;
  sub: string;
  accent: string;
}

const pills: Pill[] = [
  {
    label: "Agentic AI, Multimodal, Adaptive",
    bg: "rgba(163, 84, 209, 0.14)",
    color: "var(--brand-purple)",
  },
  {
    label: "Azure Native, Serverless, Scalable",
    bg: "rgba(92, 191, 122, 0.16)",
    color: "var(--brand-mint)",
  },
  {
    label: "Scalable, Secure by design, Responsible AI",
    bg: "rgba(239, 143, 69, 0.14)",
    color: "var(--brand-orange)",
  },
];

const tiles: Tile[] = [
  {
    title: "Apps",
    line: "Health. Education. Fintech And More.",
    sub: "Products people use daily.",
    accent: "var(--brand-purple)",
  },
  {
    title: "Agents",
    line: "Autonomous. Context-aware. Always on.",
    sub: "AI that acts, not just answers.",
    accent: "var(--brand-mint)",
  },
  {
    title: "Automation",
    line: "Workflows. Payroll. Pipelines.",
    sub: "Time back. Every time.",
    accent: "var(--brand-orange)",
  },
];

export function AiNative() {
  return (
    <section id="ai-native" className="py-14 sm:py-20">
      <div className="container-prose">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {pills.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center px-4 h-9 rounded-full text-xs font-semibold tracking-wide"
                style={{ background: p.bg, color: p.color }}
              >
                {p.label}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 text-left">
          {tiles.map((tile, i) => (
            <Reveal key={tile.title} delay={i * 0.08}>
              <article
                className="h-full rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: `color-mix(in srgb, ${tile.accent} 7%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${tile.accent} 22%, transparent)`,
                }}
              >
                <h3
                  className="font-display text-3xl font-semibold mb-3"
                  style={{ color: tile.accent }}
                >
                  {tile.title}
                </h3>
                <p
                  className="text-base font-semibold mb-3"
                  style={{ color: "var(--color-fg)" }}
                >
                  {tile.line}
                </p>
                <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                  {tile.sub}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
