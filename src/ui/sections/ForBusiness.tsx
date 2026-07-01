import Link from "next/link";
import { Reveal } from "@/ui/components";

interface Pain {
  question: string;
  answer: string;
}

interface Service {
  title: string;
  body: string;
  accent: string;
}

const pains: Pain[] = [
  { question: "Still doing it by hand?", answer: "We automate it" },
  { question: "Data everywhere, answers nowhere?", answer: "We turn it into decisions" },
  { question: "Know you need AI, no clue where to start?", answer: "We map it, then build it" },
  { question: "Tools that don't talk to each other?", answer: "We connect the stack" },
  { question: "Growing fast, breaking faster?", answer: "We make it scale" },
];

const services: Service[] = [
  {
    title: "Automate",
    body: "Agents that do the work, not just chat. Set them loose on the repetitive stuff.",
    accent: "var(--brand-orange)",
  },
  {
    title: "Build",
    body: "Real products, end to end. Azure-native, fast, and yours to keep.",
    accent: "var(--brand-mint)",
  },
  {
    title: "Transform",
    body: "Rethink the workflow. Strip the friction. Ship leaner ops.",
    accent: "var(--brand-purple)",
  },
  {
    title: "Advise",
    body: "An AI strategy that fits your reality. Zero buzzwords, all roadmap.",
    accent: "var(--brand-coral)",
  },
];

export function ForBusiness() {
  return (
    <section id="business" className="py-24 sm:py-32">
      <div className="container-prose">
        <Reveal>
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em] mb-3"
            style={{ color: "var(--brand-coral)" }}
          >
            <span
              className="inline-block w-6 h-px mr-2 align-middle"
              style={{ background: "var(--brand-coral)" }}
            />
            FOR BUSINESS
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] mb-6">
            Your business, but{" "}
            <span style={{ color: "var(--brand-coral)" }}>faster.</span>
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mb-16"
            style={{ color: "var(--color-muted)" }}
          >
            Most teams don&apos;t have an AI problem - they have a &quot;where do we
            even start&quot; problem.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16">
          <Reveal>
            <div style={{ borderTop: "1px solid var(--color-line)" }}>
              {pains.map((pain) => (
                <div
                  key={pain.question}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-2 py-6"
                  style={{ borderBottom: "1px solid var(--color-line)" }}
                >
                  <p className="font-display text-xl sm:text-2xl leading-snug">
                    {pain.question}
                  </p>
                  <a
                    className="font-semibold inline-flex items-center gap-1 text-sm sm:text-base whitespace-nowrap sm:text-right"
                    style={{ color: "var(--brand-coral)" }}
                  >
                    {pain.answer} <span aria-hidden="true">→</span>
                  </a>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl p-7"
                  style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-line)",
                  }}
                >
                  <h3
                    className="font-display text-2xl sm:text-3xl mb-3"
                    style={{ color: service.accent }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {service.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #f5c738 0%, #ef8f45 100%)",
                color: "#0e1014",
                boxShadow: "0 8px 30px rgba(245,199,56,0.4)",
              }}
            >
              Book a call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-sm" style={{ color: "var(--color-muted)" }}>
              Built by an ex-Microsoft Cloud Solution Architect.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
