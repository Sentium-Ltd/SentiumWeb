import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/domain/projects";
import { Reveal, SentiumMark } from "@/ui/components";
import { About, Footer, Header } from "@/ui/sections";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};

  const title = `${project.name} - ${project.tagline}`;
  const path = `/projects/${project.id}/`;

  return {
    title: `${project.name} - ${project.platform} app by Sentium`,
    description: project.metaDescription,
    alternates: { canonical: `https://www.sentium.app${path}` },
    openGraph: {
      type: "article",
      url: `https://www.sentium.app${path}`,
      title,
      description: project.metaDescription,
      siteName: "Sentium",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.metaDescription,
    },
  };
}

const accentVar: Record<string, string> = {
  "brand-coral": "var(--brand-coral)",
  "brand-orange": "var(--brand-orange)",
  "brand-mint": "var(--brand-mint)",
  "brand-sky": "var(--brand-sky)",
  "brand-blue": "var(--brand-blue)",
  "brand-purple": "var(--brand-purple)",
  "brand-pink": "var(--brand-pink)",
  "brand-gold": "var(--brand-gold)",
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  const accent = accentVar[project.accent];
  const others = projects.filter((p) => p.id !== project.id);

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28 grain relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-32 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(closest-side, ${accent}99, transparent 70%)`,
          }}
        />

        <div className="container-prose relative">
          <Reveal>
            <nav
              className="flex items-center gap-2 text-sm mb-10"
              aria-label="Breadcrumb"
              style={{ color: "var(--color-muted)" }}
            >
              <Link
                href="/"
                className="hover:underline underline-offset-4"
              >
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/#projects"
                className="hover:underline underline-offset-4"
              >
                Projects
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: "var(--color-fg)" }}>{project.name}</span>
            </nav>
          </Reveal>

          <Reveal>
            <header className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="inline-flex h-7 items-center rounded-full px-3 text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{
                      background: `color-mix(in srgb, ${accent} 14%, transparent)`,
                      color: accent,
                    }}
                  >
                    {project.platform === "iOS" ? "iOS app" : "Web app"}
                  </span>
                  {project.releaseYear && (
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-muted)" }}
                    >
                      Shipped {project.releaseYear}
                    </span>
                  )}
                </div>

                <h1 className="font-display text-5xl sm:text-6xl tracking-tight leading-[0.98]">
                  {project.name}
                </h1>
                <p
                  className="mt-5 text-xl sm:text-2xl leading-snug"
                  style={{ color: accent }}
                >
                  {project.tagline}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-medium tracking-tight transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: accent,
                      color: "white",
                    }}
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
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full px-5 h-12 text-sm font-medium hover:opacity-70 transition-opacity"
                    style={{ color: "var(--color-fg)" }}
                  >
                    Want something like this?
                  </Link>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <SentiumMark size={240} />
              </div>
            </header>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="mt-20 grid lg:grid-cols-[1fr_1.3fr] gap-12">
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
                What it is
              </h2>
              <div
                className="text-lg leading-relaxed space-y-5"
                style={{ color: "var(--color-fg)" }}
              >
                <p>{project.longDescription}</p>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="mt-20 grid lg:grid-cols-[1fr_1.3fr] gap-12">
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
                Why we built it
              </h2>
              <div
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                <p>{project.whyWeBuiltIt}</p>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="mt-20 grid lg:grid-cols-[1fr_1.3fr] gap-12">
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
                What makes it
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-lg">
                    <span
                      className="mt-2 inline-block h-2 w-2 rounded-full flex-shrink-0"
                      style={{ background: accent }}
                      aria-hidden="true"
                    />
                    <span style={{ color: "var(--color-fg)" }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section
              className="mt-20 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-line)",
              }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: accent }}
              />
              <div className="grid sm:grid-cols-[1fr_auto] items-center gap-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl tracking-tight">
                    Try {project.name}
                  </h2>
                  <p
                    className="mt-2 text-base"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {project.platform === "iOS"
                      ? "Free on the App Store - no sign-up to start."
                      : "Free in your browser - no install."}
                  </p>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-medium hover:-translate-y-0.5 transition-all duration-300"
                  style={{ background: accent, color: "white" }}
                >
                  {project.ctaLabel}
                </a>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="mt-20">
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-8">
                More from Sentium
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {others.map((other) => (
                  <Link
                    key={other.id}
                    href={`/projects/${other.id}/`}
                    className="group block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-line)",
                    }}
                  >
                    <span
                      className="inline-flex h-6 items-center rounded-full px-2.5 text-[10px] font-bold uppercase tracking-[0.14em] mb-3"
                      style={{
                        background: `color-mix(in srgb, ${accentVar[other.accent]} 14%, transparent)`,
                        color: accentVar[other.accent],
                      }}
                    >
                      {other.platform === "iOS" ? "iOS app" : "Web app"}
                    </span>
                    <h3 className="font-display text-xl tracking-tight mb-2">
                      {other.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {other.tagline}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </Reveal>
        </div>
      </main>
      <About />
      <Footer />
    </>
  );
}
