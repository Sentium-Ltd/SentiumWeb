import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/ui/components";
import { Footer, Header } from "@/ui/sections";

const SITE_URL = "https://www.sentium.app";

export const metadata: Metadata = {
  title: "Vello — support & legal",
  description: "Privacy policy, terms of use and support contact for the Vello holistic health app by Sentium Ltd.",
  alternates: { canonical: `${SITE_URL}/vello/` },
};

const cards = [
  {
    href: "/vello/privacy/",
    title: "Privacy policy",
    body: "How Vello handles your health data — what we collect, why, where it lives, and how to delete it.",
  },
  {
    href: "/vello/terms/",
    title: "Terms of use",
    body: "The rules of the road — what Vello is, what it isn't, and the limits of what we promise.",
  },
  {
    href: "/vello/support/",
    title: "Support",
    body: "How to reach a human at Sentium when something doesn't work, and how to request a data export.",
  },
];

export default function VelloIndex() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28 grain relative overflow-hidden">
        <div className="container-prose relative">
          <Reveal>
            <nav className="flex items-center gap-2 text-sm mb-10" aria-label="Breadcrumb" style={{ color: "var(--color-muted)" }}>
              <Link href="/" className="hover:underline underline-offset-4">Home</Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: "var(--color-fg)" }}>Vello</span>
            </nav>
          </Reveal>

          <Reveal>
            <header className="mb-14">
              <h1 className="font-display text-5xl sm:text-6xl tracking-tight leading-[0.98]">Vello</h1>
              <p className="mt-5 text-xl sm:text-2xl leading-snug" style={{ color: "var(--color-muted)" }}>
                The whole-body view your doctor never sees. A wellness and education tool — not a medical device.
              </p>
            </header>
          </Reveal>

          <Reveal>
            <div className="grid sm:grid-cols-3 gap-5">
              {cards.map((c) => (
                <Link key={c.href} href={c.href} className="block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "color-mix(in srgb, var(--color-fg) 4%, transparent)", border: "1px solid color-mix(in srgb, var(--color-fg) 8%, transparent)" }}>
                  <h2 className="font-display text-2xl tracking-tight">{c.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{c.body}</p>
                  <span className="mt-4 inline-block text-sm" style={{ color: "var(--brand-sky)" }}>Read →</span>
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
