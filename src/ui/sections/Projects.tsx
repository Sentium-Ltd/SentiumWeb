import { projects } from "@/domain/projects";
import { ProjectCarousel, Reveal, SentiumMark } from "@/ui/components";
import { SectionHeading } from "@/ui/primitives";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle watermark of the Sentium symbol */}
      <div
        aria-hidden="true"
        className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block"
      >
        <SentiumMark size={520} />
      </div>

      <div className="container-prose relative">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Projects"
              title={
                <>
                  Things we&apos;ve <span className="gradient-text">shipped</span>.
                </>
              }
              description="Live in the App Store and on the open web. Each one started as something we wanted to exist."
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ProjectCarousel projects={projects} />
        </Reveal>
      </div>
    </section>
  );
}
