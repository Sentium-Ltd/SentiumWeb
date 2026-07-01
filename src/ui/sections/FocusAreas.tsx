import { GraduationCap, HeartPulse, Plane, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/ui/components";
import { SectionHeading } from "@/ui/primitives";

interface Area {
  title: string;
  description: string;
  Icon: LucideIcon;
  accent: string;
}

const areas: Area[] = [
  {
    title: "Education",
    description:
      "Apps for kids - puzzles, drawing, stories, maths - sneak the learning in around the edges.",
    Icon: GraduationCap,
    accent: "var(--brand-coral)",
  },
  {
    title: "Health",
    description:
      "A world where every person owns their health. Knows their markers. Catches what matters early. Understands their body, and lives longer because of it.",
    Icon: HeartPulse,
    accent: "var(--brand-mint)",
  },
  {
    title: "Travel",
    description:
      "Software for the way people actually plan and remember trips - light on friction, heavy on the bits that turn into stories later.",
    Icon: Plane,
    accent: "var(--brand-orange)",
  },
  {
    title: "Finance",
    description:
      "Software for the day-to-day finance: the bills, the goals, the bits everyone keeps meaning to sort out - without making it feel like homework.",
    Icon: Wallet,
    accent: "var(--brand-purple)",
  },
];

export function FocusAreas() {
  return (
    <section
      id="focus"
      className="py-24 sm:py-32"
      style={{ background: "var(--color-card)" }}
    >
      <div className="container-prose">
        <Reveal>
          <SectionHeading
            eyebrow="What we focus on"
            title="Turn ideas into software"
            description="How we choose what to build is simple: it has to matter to someone, and we have to believe we can do it well. We're not built for half-hearted."
          />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.1}>
              <article
                className="group relative h-full rounded-3xl p-7 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-line)",
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-100"
                  style={{ background: area.accent }}
                />
                <span
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: area.accent }}
                />

                <div className="relative">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl mb-5"
                    style={{
                      background: `${area.accent}1a`,
                      color: area.accent,
                    }}
                  >
                    <area.Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-2xl tracking-tight mb-3">
                    {area.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {area.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
