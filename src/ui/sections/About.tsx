import { Reveal } from "@/ui/components";
import { SectionHeading } from "@/ui/primitives";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-prose">
        <Reveal>
          <SectionHeading
            eyebrow="About us"
            title={
              <>
                We are a startup that makes software possible for the people who{" "}
                <span style={{ color: "var(--brand-coral)" }}>couldn&apos;t build it alone.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-4xl">
          <Reveal delay={0.1}>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              Sentium is a UK technology startup building consumer products and
              AI-native systems. We design and ship end-to-end from product
              strategy, engineering, content with deep cloud expertise, scalable
              architecture, and a bias toward shipping what actually works.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              Built by an ex-Microsoft Cloud Solution Architect, Azure-native by
              default, cloud-agnostic by capability. Whatever you need built, we
              build it. From a simple site to a full AI platform. If it matters
              to you, it matters to us.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
