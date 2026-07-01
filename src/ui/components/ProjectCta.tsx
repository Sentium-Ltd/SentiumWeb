"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/domain/projects";
import { SignupModal } from "./SignupModal";

interface Props {
  project: Project;
  accent: string;
}

export function ProjectCta({ project, accent }: Props) {
  const [open, setOpen] = useState(false);

  if (project.signupEnabled) {
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-medium tracking-tight transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: accent, color: "white" }}
        >
          {project.ctaLabel}
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
        </button>
        <SignupModal
          open={open}
          onClose={() => setOpen(false)}
          productId={project.id}
          productName={project.name}
          accent={accent}
          tagLabel={`${project.name} · ${project.ctaLabel}`}
        />
      </>
    );
  }

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-medium tracking-tight transition-all duration-300 hover:-translate-y-0.5"
        style={{ background: accent, color: "white" }}
      >
        {project.ctaLabel}
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
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </a>
    );
  }

  return (
    <Link
      href="/#contact"
      className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-medium tracking-tight transition-all duration-300 hover:-translate-y-0.5"
      style={{ background: accent, color: "white" }}
    >
      Get in touch
    </Link>
  );
}
