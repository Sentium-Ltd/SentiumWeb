/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/ui/components";
import { Footer, Header } from "@/ui/sections";

const SITE_URL = "https://www.sentium.app";
const SUPPORT_EMAIL = "support@sentium.app";

export const metadata: Metadata = {
  title: "Vello — Support",
  description: "Help, contact, and data-export requests for the Vello holistic health app by Sentium Ltd.",
  alternates: { canonical: `${SITE_URL}/vello/support/` },
};

export default function VelloSupport() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28 grain relative overflow-hidden">
        <div className="container-prose relative">
          <Reveal>
            <nav className="flex items-center gap-2 text-sm mb-10" aria-label="Breadcrumb" style={{ color: "var(--color-muted)" }}>
              <Link href="/" className="hover:underline underline-offset-4">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/vello/" className="hover:underline underline-offset-4">Vello</Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: "var(--color-fg)" }}>Support</span>
            </nav>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">Vello — Support</h1>
            <p className="mt-5 text-lg" style={{ color: "var(--color-muted)" }}>
              Sentium is a small team in London. You'll talk to a person, not a chatbot.
            </p>
          </Reveal>

          <article className="legal mt-10 space-y-8">
            <Reveal>
              <section>
                <h2>Contact</h2>
                <p>
                  Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. We reply within two working days, usually
                  same-day Mon–Fri (UK time).
                </p>
                <p>When emailing about a specific issue, please include:</p>
                <ul>
                  <li>Your registered email address (so we can find your account).</li>
                  <li>iOS or Android, the device model, and the OS version.</li>
                  <li>The Vello app version (in Settings).</li>
                  <li>What you did, what you expected, and what actually happened.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>Common questions</h2>

                <h3>How do I delete my account and data?</h3>
                <p>
                  In the app: <strong>Me → Settings → Delete account & all data</strong>. Deletion is immediate and
                  irreversible.
                </p>

                <h3>How do I export my data?</h3>
                <p>
                  Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from your registered address asking for a
                  data export. We'll send you a JSON bundle within 30 days, per UK GDPR Article 20 (right to data portability).
                </p>

                <h3>I forgot which email I signed up with</h3>
                <p>Email us with any clues you have (approximate sign-up date, the OTP email subject line, etc.) and we'll help.</p>

                <h3>Care AI gave me something concerning — is it accurate?</h3>
                <p>
                  Care AI outputs are <strong>educational, not diagnostic</strong>. Bring them to your GP or specialist
                  as discussion prompts. If you may be experiencing a medical emergency, call 999 (UK), 911 (US), or 112 (EU).
                </p>

                <h3>Why won't the app sync my Apple Watch / Fitbit / Oura?</h3>
                <p>
                  Wearable integration is being polished and isn't generally available in this release. We'll announce
                  in-app when it ships.
                </p>

                <h3>Push notifications aren't arriving</h3>
                <p>
                  On the simulator, push doesn't work — Apple only delivers pushes to physical devices. On device,
                  check Settings → Notifications → Vello is enabled.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>Reporting a security issue</h2>
                <p>
                  If you've discovered a vulnerability, please email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>{" "}
                  rather than posting publicly. We'll acknowledge within 48 hours and work with you on disclosure timing.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>About Sentium</h2>
                <p>
                  Sentium Ltd is a UK-based studio building everyday consumer software. Registered in England and Wales,
                  company number 16512683, registered office in London E17 3NU.
                </p>
                <p>
                  See also: <Link href="/vello/privacy/" className="underline">Privacy policy</Link> ·{" "}
                  <Link href="/vello/terms/" className="underline">Terms of use</Link>
                </p>
              </section>
            </Reveal>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
