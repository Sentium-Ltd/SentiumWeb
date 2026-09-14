import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/ui/components";
import { Footer, Header } from "@/ui/sections";

const SITE_URL = "https://www.sentium.app";

export const metadata: Metadata = {
  title: "My Area Score — support & legal",
  description:
    "Privacy policy, terms of use, data deletion and support for My Area Score, the neighbourhood comparison map for London and the commuter belt by Sentium Ltd.",
  alternates: { canonical: `${SITE_URL}/myareascore/` },
};

const cards = [
  {
    href: "/myareascore/privacy/",
    title: "Privacy policy",
    body: "What we hold if you create an account, who processes it, and for how long.",
  },
  {
    href: "/myareascore/terms/",
    title: "Terms of use",
    body: "What the figures are and aren't, subscriptions, cancellation and your rights.",
  },
  {
    href: "/myareascore/support/",
    title: "Support",
    body: "Signing in, subscriptions, where the figures come from, and how to reach us.",
  },
  {
    href: "/myareascore/data-deletion/",
    title: "Deleting your data",
    body: "How to delete your account, including one created with Google or Facebook.",
  },
];

export default function MyAreaScoreIndex() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28 grain relative overflow-hidden">
        <div className="container-prose relative">
          <Reveal>
            <nav
              className="flex items-center gap-2 text-sm mb-10"
              aria-label="Breadcrumb"
              style={{ color: "var(--color-muted)" }}
            >
              <Link href="/" className="hover:underline underline-offset-4">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: "var(--color-fg)" }}>My Area Score</span>
            </nav>
          </Reveal>

          <Reveal>
            <header className="mb-14">
              <h1 className="font-display text-5xl sm:text-6xl tracking-tight leading-[0.98]">
                My Area Score
              </h1>
              <p
                className="mt-5 text-xl sm:text-2xl leading-snug"
                style={{ color: "var(--color-muted)" }}
              >
                Find the neighbourhoods in London and the commuter belt that fit your life &mdash;
                community, homes, commute, schools and safety on one map.
              </p>
              <p className="mt-5">
                <a
                  href="https://myareascore.co.uk/"
                  className="text-sm underline underline-offset-4"
                  style={{ color: "var(--brand-sky)" }}
                >
                  Open myareascore.co.uk &rarr;
                </a>
              </p>
            </header>
          </Reveal>

          <Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {cards.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "color-mix(in srgb, var(--color-fg) 4%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--color-fg) 8%, transparent)",
                  }}
                >
                  <h2 className="font-display text-2xl tracking-tight">{c.title}</h2>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {c.body}
                  </p>
                  <span className="mt-4 inline-block text-sm" style={{ color: "var(--brand-sky)" }}>
                    Read &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
