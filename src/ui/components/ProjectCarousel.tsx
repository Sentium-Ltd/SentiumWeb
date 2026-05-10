"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { Project } from "@/domain/projects";

const accentVar: Record<Project["accent"], string> = {
  "brand-coral": "var(--brand-coral)",
  "brand-orange": "var(--brand-orange)",
  "brand-mint": "var(--brand-mint)",
  "brand-sky": "var(--brand-sky)",
  "brand-blue": "var(--brand-blue)",
  "brand-purple": "var(--brand-purple)",
  "brand-pink": "var(--brand-pink)",
  "brand-gold": "var(--brand-gold)",
};

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!emblaApi) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        emblaApi.scrollNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        emblaApi.scrollPrev();
      }
    },
    [emblaApi]
  );

  return (
    <div className="relative">
      <div
        className="overflow-hidden"
        ref={emblaRef}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Sentium projects"
      >
        <div className="flex gap-6 -ml-3 pr-3">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_48%] pl-3"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${projects.length}: ${project.name}`}
            >
              <article
                className="group relative h-full overflow-hidden rounded-3xl p-7 sm:p-9 transition-all duration-500"
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-line)",
                }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: accentVar[project.accent] }}
                  aria-hidden="true"
                />
                <span
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: accentVar[project.accent] }}
                  aria-hidden="true"
                />

                <div className="relative flex h-full flex-col gap-5 sm:gap-7">
                  <div
                    className="inline-flex h-7 w-fit items-center rounded-full px-3 text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{
                      background: `color-mix(in srgb, ${accentVar[project.accent]} 14%, transparent)`,
                      color: accentVar[project.accent],
                    }}
                  >
                    {project.platform === "iOS" ? "iOS app" : "Web app"}
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl tracking-tight leading-tight">
                      {project.name}
                    </h3>
                    <p
                      className="mt-1 text-sm font-medium"
                      style={{ color: accentVar[project.accent] }}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {project.description}
                  </p>

                  <div className="mt-auto pt-2">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 transition-all hover:underline"
                      style={{ color: "var(--color-fg)" }}
                    >
                      Visit {project.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed enabled:hover:-translate-y-0.5"
          style={{
            border: "1px solid var(--color-line)",
            background: "var(--color-card)",
            color: "var(--color-fg)",
          }}
        >
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
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed enabled:hover:-translate-y-0.5"
          style={{
            border: "1px solid var(--color-line)",
            background: "var(--color-card)",
            color: "var(--color-fg)",
          }}
        >
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <div className="ml-auto flex items-center gap-1.5">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to project ${i + 1}`}
              aria-current={i === selected ? "true" : undefined}
              onClick={() => emblaApi?.scrollTo(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === selected ? "1.5rem" : "0.375rem",
                background:
                  i === selected ? "var(--brand-gold)" : "var(--color-line)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
