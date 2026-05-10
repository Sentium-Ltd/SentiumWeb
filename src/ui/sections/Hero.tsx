import { ButtonLink, Constellation } from "@/ui/components";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden grain"
    >
      {/* Ambient background colour fields */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,199,56,0.6), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(91,192,232,0.55), transparent 70%)",
        }}
      />

      <div className="container-prose relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <div
              className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-[0.05em] mb-7"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-line)",
                color: "var(--color-fg)",
              }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--brand-mint)" }}
              />
              <span style={{ color: "var(--brand-coral)" }}>You ask.</span>
              <span style={{ color: "var(--color-muted)" }}>·</span>
              We plan.
              <span style={{ color: "var(--color-muted)" }}>·</span>
              We build.
              <span style={{ color: "var(--color-muted)" }}>·</span>
              We ship.
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[0.98]">
              A studio for{" "}
              <span className="gradient-text">everyday</span>{" "}
              software.
            </h1>

            <p
              className="mt-7 max-w-xl text-lg sm:text-xl leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              We design and build mobile and web apps across learning,
              wellbeing, travel, and personal finance - for ourselves,
              and for the people who bring us a good idea.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#contact">
                Start a conversation
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
              </ButtonLink>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full px-5 h-11 text-sm font-medium tracking-tight transition-colors hover:opacity-70"
                style={{ color: "var(--color-fg)" }}
              >
                See what we&apos;ve made
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center order-first lg:order-last">
            <Constellation size={520} />
          </div>
        </div>
      </div>
    </section>
  );
}
