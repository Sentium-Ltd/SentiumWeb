import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/ui/components";
import { Footer, Header } from "@/ui/sections";

const SITE_URL = "https://www.sentium.app";

export const metadata: Metadata = {
  title: "Learn English with Alfie — support & legal",
  description:
    "Privacy policy, terms of use and support contact for Learn English with Alfie, the speech-first English app for children by Sentium Ltd.",
  alternates: { canonical: `${SITE_URL}/alfie-english/` },
};

const cards = [
  {
    href: "/alfie-english/privacy/",
    title: "Privacy policy",
    body: "What we collect about your child, what we deliberately don't, and how you delete any of it.",
  },
  {
    href: "/alfie-english/terms/",
    title: "Terms of use",
    body: "The agreement between you as the parent and Sentium Ltd, including subscriptions and cancellation.",
  },
  {
    href: "/alfie-english/support/",
    title: "Support",
    body: "How to reach a person at Sentium, and how to export or erase your child's data.",
  },
];

export default function AlfieEnglishIndex() {
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
              <span style={{ color: "var(--color-fg)" }}>Learn English with Alfie</span>
            </nav>
          </Reveal>

          <Reveal>
            <header className="mb-14">
              <h1 className="font-display text-5xl sm:text-6xl tracking-tight leading-[0.98]">
                Learn English with Alfie
              </h1>
              <p
                className="mt-5 text-xl sm:text-2xl leading-snug"
                style={{ color: "var(--color-muted)" }}
              >
                Speaking practice for children aged 4&ndash;11. Alfie is a baby owl who is learning
                English alongside your child, not teaching down to them.
              </p>
            </header>
          </Reveal>

          <Reveal>
            <div className="grid sm:grid-cols-3 gap-5">
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
