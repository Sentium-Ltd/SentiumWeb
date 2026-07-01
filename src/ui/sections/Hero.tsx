import Link from "next/link";
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
              Where AI becomes{" "}
              <span style={{ color: "var(--brand-coral)" }}>
                apps, agents, and automation
              </span>
              .
            </h1>

            <p
              className="mt-7 max-w-xl text-lg sm:text-xl leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              We design, build, and ship AI-native Apps, Agents, and Automation.
              Our goal is to fix real life problems. Got something in mind?
              Let&apos;s make it real.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="/#contact">
                Work with us
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
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full px-5 h-11 text-sm font-medium tracking-tight transition-colors hover:opacity-70"
                style={{ color: "var(--color-fg)" }}
              >
                See what we&apos;ve built
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <Constellation className="w-[240px] sm:w-[320px] md:w-[400px] lg:w-[520px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
