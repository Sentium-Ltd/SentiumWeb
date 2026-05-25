import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/ui/components";
import { Footer, Header } from "@/ui/sections";

const SITE_URL = "https://www.sentium.app";
const LAST_UPDATED = "25 May 2026";
const SUPPORT_EMAIL = "support@sentium.app";

export const metadata: Metadata = {
  title: "Vello — Privacy policy",
  description: "How Vello collects, stores, and uses your health data. UK GDPR / DPA 2018 compliant.",
  alternates: { canonical: `${SITE_URL}/vello/privacy/` },
};

export default function VelloPrivacy() {
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
              <span style={{ color: "var(--color-fg)" }}>Privacy</span>
            </nav>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">Vello — Privacy policy</h1>
            <p className="mt-4 text-sm" style={{ color: "var(--color-muted)" }}>Last updated: {LAST_UPDATED}</p>
          </Reveal>

          <article className="legal mt-10 space-y-8">
            <Reveal>
              <section>
                <h2>1. Who we are</h2>
                <p>
                  Vello is operated by <strong>Sentium Ltd</strong>, a company registered in England and Wales
                  (company number 16512683), with registered address in London E17 3NU, United Kingdom.
                </p>
                <p>
                  For all data protection questions write to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
                  We are the data controller for the personal data Vello processes.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>2. What Vello is</h2>
                <p>
                  Vello is a wellness and education tool that synthesises self-reported health data, wearable
                  telemetry, and lab results into discussion prompts for your clinician.
                  <strong> Vello is not a medical device.</strong> We do not diagnose, treat, cure, or prevent any disease.
                  Outputs from Vello are educational and never replace professional medical advice.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>3. What we collect and why</h2>
                <ul>
                  <li><strong>Account identity</strong> — email address, via Microsoft Entra External ID. Used to sign you in.</li>
                  <li><strong>Bio</strong> — age, biological sex, blood type, height, weight, allergies. Used to personalise the AI's analysis. You decide what to share.</li>
                  <li><strong>Baselines, meds, lab results</strong> — long-term conditions, prescriptions, supplements, and self-entered blood marker values. Used as context for the AI.</li>
                  <li><strong>Daily logs</strong> — meals, hydration, mood, sleep, gut markers, cycle data, blood-pressure / glucose readings. Used to surface patterns.</li>
                  <li><strong>Wearable data (when enabled)</strong> — steps, heart rate, HRV, sleep, active calories from Apple Health / Google Health Connect. Used to enrich the picture.</li>
                  <li><strong>Care AI conversations</strong> — prompts you submit and the AI's responses. Used to give continuity across visits.</li>
                  <li><strong>Push token (if enabled)</strong> — to send reminders you've opted into. No marketing pushes.</li>
                </ul>
                <p>
                  Health data is treated as <strong>special category data</strong> under UK GDPR Article 9. Our lawful
                  basis for processing it is your <strong>explicit consent</strong> (Article 9(2)(a)), given at sign-up.
                  Identity data uses the <strong>contract</strong> basis (Article 6(1)(b)).
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>4. What we do NOT collect</h2>
                <ul>
                  <li>We never sell your data.</li>
                  <li>We do not use your data to train third-party AI models. The Azure OpenAI service Vello uses is contractually prohibited from training on your inputs.</li>
                  <li>We do not show ads inside Vello.</li>
                  <li>We do not track you across third-party apps or websites.</li>
                  <li>We do not collect device identifiers beyond what Apple/Google require for the platform itself.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>5. Where your data lives</h2>
                <p>
                  All Vello data is stored in <strong>Microsoft Azure</strong>, in the <strong>UK South</strong> region
                  (London datacentres). Data is encrypted in transit (TLS 1.3) and at rest (AES-256). Identity is
                  managed by a separate Microsoft Entra External ID tenant, isolated from Sentium's internal systems.
                </p>
                <p>
                  The only category that leaves Azure is your typed prompt + a redacted summary of your profile when
                  you use the Care AI — these are sent to the Azure OpenAI service (also UK-based) for synthesis.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>6. How long we keep it</h2>
                <p>
                  Your data is kept as long as your account exists. You can delete your account from the app at any
                  time (Settings → Delete account & all data). Deletion is immediate and irreversible — we do not keep
                  shadow copies. Backups in Azure are kept for 30 days for disaster recovery only and are not human-readable.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>7. Who we share with</h2>
                <p>We share data only with the processors strictly required to run Vello:</p>
                <ul>
                  <li><strong>Microsoft Azure</strong> — hosting, storage, AI inference. UK datacentres. Data Processing Agreement in place.</li>
                  <li><strong>Microsoft Entra External ID</strong> — identity provider. Email + display name only.</li>
                  <li><strong>Expo</strong> (Expo Inc.) — push-notification delivery via Apple/Google push services. Only an opaque device token, no health data.</li>
                </ul>
                <p>We do not share with advertising networks, brokers, insurers, employers, or anyone else.</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>8. Your rights under UK GDPR</h2>
                <p>You have the right to:</p>
                <ul>
                  <li><strong>Access</strong> a copy of the personal data we hold about you.</li>
                  <li><strong>Rectify</strong> inaccurate data (edit it directly in the app, or email us).</li>
                  <li><strong>Erase</strong> all your data (the in-app delete button does this; or email us).</li>
                  <li><strong>Restrict</strong> processing in specific circumstances.</li>
                  <li><strong>Object</strong> to specific processing on legitimate-interest grounds.</li>
                  <li><strong>Data portability</strong> — receive your data in a machine-readable format. Email us and we'll send you a JSON export within 30 days.</li>
                  <li><strong>Withdraw consent</strong> at any time — sign out and delete your account.</li>
                </ul>
                <p>
                  To exercise any of these rights, contact <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
                  You also have the right to lodge a complaint with the UK Information Commissioner's Office at{" "}
                  <a href="https://ico.org.uk/" rel="noopener noreferrer" target="_blank">ico.org.uk</a>.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>9. Children</h2>
                <p>
                  Vello is intended for adults. We do not knowingly collect data from anyone under 18. If you believe a
                  child has created an account, email us and we will delete it.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>10. Changes to this policy</h2>
                <p>
                  We will update this policy as Vello evolves. Material changes will be announced inside the app and via
                  email if you've given us one. The "last updated" date at the top of this page always reflects the
                  current revision.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>11. Contact</h2>
                <p>
                  Data protection queries: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                  <br />
                  Sentium Ltd · London E17 3NU · United Kingdom · Company no. 16512683
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
