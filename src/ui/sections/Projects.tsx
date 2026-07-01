"use client";

import { useState } from "react";
import Link from "next/link";
import { flagshipProject, gridProjects, type Project, type ProjectAccent } from "@/domain/projects";
import { Reveal } from "@/ui/components";
import { SignupModal } from "@/ui/components/SignupModal";

const accentVar: Record<ProjectAccent, string> = {
  "brand-coral": "var(--brand-coral)",
  "brand-orange": "var(--brand-orange)",
  "brand-mint": "var(--brand-mint)",
  "brand-sky": "var(--brand-sky)",
  "brand-blue": "var(--brand-blue)",
  "brand-purple": "var(--brand-purple)",
  "brand-pink": "var(--brand-pink)",
  "brand-gold": "var(--brand-gold)",
};

const statusBadge: Record<Project["status"], { label: string; live: boolean }> = {
  live: { label: "LIVE", live: true },
  "coming-soon": { label: "COMING SOON", live: false },
  "coming-soon-relaunch": { label: "COMING SOON · RELAUNCH", live: false },
};

export function Projects() {
  const [signupFor, setSignupFor] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32"
      style={{ background: "var(--color-card)" }}
    >
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
            WHAT WE&apos;VE BUILT
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] mb-12 max-w-3xl">
            Products we&apos;re proud to{" "}
            <span style={{ color: "var(--brand-coral)" }}>put our name on.</span>
          </h2>
        </Reveal>

        {flagshipProject && (
          <Reveal delay={0.05}>
            <FlagshipCard project={flagshipProject} />
          </Reveal>
        )}

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridProjects.map((project, i) => (
            <Reveal key={project.id} delay={0.05 + i * 0.05}>
              <ProjectCard project={project} onSignup={setSignupFor} />
            </Reveal>
          ))}
        </div>
      </div>

      {signupFor && (
        <SignupModal
          open={signupFor !== null}
          onClose={() => setSignupFor(null)}
          productId={signupFor.id}
          productName={signupFor.name}
          accent={accentVar[signupFor.accent]}
          tagLabel={`${signupFor.name} · ${signupFor.ctaLabel}`}
        />
      )}
    </section>
  );
}

function FlagshipCard({ project }: { project: Project }) {
  const accent = accentVar[project.accent];
  return (
    <article
      className="rounded-3xl p-8 sm:p-10 relative overflow-hidden"
      style={{
        background: "var(--color-bg)",
        border: "1px solid var(--color-line)",
        borderLeft: `4px solid ${accent}`,
      }}
    >
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: accent }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: accent }}
              />
              {project.category}
            </span>
            <span
              className="ml-auto inline-flex items-center px-3 h-7 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{
                background: `color-mix(in srgb, ${accent} 14%, transparent)`,
                color: `color-mix(in srgb, ${accent} 70%, #0e1014)`,
              }}
            >
              FLAGSHIP
            </span>
          </div>
          <h3 className="font-display text-4xl sm:text-5xl mb-5 tracking-tight">
            {project.name}
          </h3>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl mb-7"
            style={{ color: "var(--color-muted)" }}
          >
            {project.description.split(/(bettr age)/i).map((part, i) =>
              part.toLowerCase() === "bettr age" ? (
                <span key={i} style={{ color: accent, fontWeight: 600 }}>
                  {part}
                </span>
              ) : (
                <span key={i}>{part}</span>
              ),
            )}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/projects/${project.id}/`}
              className="font-semibold inline-flex items-center gap-1 hover:opacity-70"
              style={{ color: accent }}
            >
              Explore {project.name} <span aria-hidden="true">→</span>
            </Link>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline-offset-4 hover:underline"
                style={{ color: "var(--color-muted)" }}
              >
                {project.ctaLabel}
              </a>
            )}
          </div>
        </div>

        {project.flagshipHighlights && (
          <div className="space-y-3">
            {project.flagshipHighlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl p-5"
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-line)",
                }}
              >
                <p
                  className="font-display text-xl mb-1"
                  style={{ color: accentVar[h.accent] }}
                >
                  {h.title}
                </p>
                <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function ProjectCard({
  project,
  onSignup,
}: {
  project: Project;
  onSignup: (project: Project) => void;
}) {
  const accent = accentVar[project.accent];
  const status = statusBadge[project.status];
  const showSignup = project.signupEnabled;

  return (
    <article
      className="h-full rounded-3xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{
        background: "var(--color-bg)",
        border: "1px solid var(--color-line)",
        borderLeft: `4px solid ${accent}`,
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <span
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]"
          style={{ color: accent }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: accent }}
          />
          {project.category}
        </span>
        <span
          className="inline-flex items-center px-3 h-6 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={
            status.live
              ? {
                  background: "color-mix(in srgb, var(--brand-mint) 14%, transparent)",
                  color: "color-mix(in srgb, var(--brand-mint) 60%, #0e1014)",
                }
              : {
                  background: "rgba(14,16,20,0.07)",
                  color: "var(--color-muted)",
                }
          }
        >
          {status.label}
        </span>
      </div>
      <h3 className="font-display text-2xl mb-3">{project.name}</h3>
      <p
        className="text-sm leading-relaxed mb-5 flex-1"
        style={{ color: "var(--color-muted)" }}
      >
        {project.description}
      </p>
      {showSignup ? (
        <button
          type="button"
          onClick={() => onSignup(project)}
          className="text-sm font-semibold inline-flex items-center gap-1 hover:opacity-70 self-start"
          style={{ color: accent }}
        >
          {project.ctaLabel} <span aria-hidden="true">→</span>
        </button>
      ) : project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold inline-flex items-center gap-1 hover:opacity-70 self-start"
          style={{ color: accent }}
        >
          {project.platform === "iOS" ? "On the App Store" : project.ctaLabel}{" "}
          <span aria-hidden="true">→</span>
        </a>
      ) : (
        <Link
          href={`/projects/${project.id}/`}
          className="text-sm font-semibold inline-flex items-center gap-1 hover:opacity-70 self-start"
          style={{ color: accent }}
        >
          Read the story <span aria-hidden="true">→</span>
        </Link>
      )}
    </article>
  );
}
