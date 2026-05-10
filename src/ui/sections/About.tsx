import { Reveal } from "@/ui/components";
import { SectionHeading } from "@/ui/primitives";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-prose">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                A small team, building things <br className="hidden sm:block" />
                <span className="gradient-text">we&apos;d want to use ourselves.</span>
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
              Sentium is a small, focused technology studio building consumer
              products for everyday life. We design and ship our own apps
              end-to-end - product, engineering, content - with a bias toward
              privacy-first design and experiences families and individuals
              can trust.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              We work in tight iterations, ship to real people, and learn from
              what they tell us. Less ceremony, more shipping. Most of what we
              make is for the people we know - kids, parents, friends - and
              that keeps the bar honest.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
