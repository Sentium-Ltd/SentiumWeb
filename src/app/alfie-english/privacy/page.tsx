/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/ui/components";
import { Footer, Header } from "@/ui/sections";

const SITE_URL = "https://www.sentium.app";
const LAST_UPDATED = "3 September 2026";
const SUPPORT_EMAIL = "support@sentium.app";

export const metadata: Metadata = {
  title: "Learn English with Alfie — Privacy policy",
  description:
    "What Learn English with Alfie collects about your child, what it deliberately doesn't, and how to delete it. UK GDPR, ICO Age Appropriate Design Code and COPPA aligned.",
  alternates: { canonical: `${SITE_URL}/alfie-english/privacy/` },
};

export default function AlfieEnglishPrivacy() {
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
              <Link href="/" className="hover:underline underline-offset-4">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/alfie-english/" className="hover:underline underline-offset-4">
                Learn English with Alfie
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: "var(--color-fg)" }}>Privacy</span>
            </nav>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              Learn English with Alfie &mdash; Privacy policy
            </h1>
            <p className="mt-4 text-sm" style={{ color: "var(--color-muted)" }}>
              Last updated: {LAST_UPDATED}
            </p>
          </Reveal>

          <article className="legal mt-10 space-y-8">
            <Reveal>
              <section>
                <p>
                  This app is built for children aged 4&ndash;11 and for the parents and guardians who
                  set it up for them. This policy explains, in plain English, what we collect, what we
                  don't, and how you stay in control.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>The short version</h2>
                <ul>
                  <li><strong>We do not show ads.</strong> Ever.</li>
                  <li><strong>We do not track your child</strong> across apps or the web.</li>
                  <li><strong>By default, everything stays on your child's device.</strong> Cloud features are off until you turn them on.</li>
                  <li><strong>Nothing leaves the United Kingdom.</strong></li>
                  <li><strong>You can export or delete everything</strong> at any time from the Parent Dashboard.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>1. Who we are</h2>
                <p>
                  Learn English with Alfie is operated by <strong>Sentium Ltd</strong>, a company
                  registered in England and Wales (company number 16512683), with its registered office
                  at Suite Ra01, 195&ndash;197 Wood Street, London E17 3NU, United Kingdom. Sentium Ltd
                  operates the Alfie Owl suite of children's apps and is the data controller for the
                  personal data this app processes.
                </p>
                <p>
                  For any data protection question, write to{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>2. What we collect, and why</h2>

                <h3>On your child's device only &mdash; never sent to our servers</h3>
                <ul>
                  <li>Your child's first name, age and chosen native language, to personalise the experience.</li>
                  <li>Learning progress and pronunciation scores, to choose the right next lesson.</li>
                  <li>Voice journal recordings, stored on the device unless you opt in to cloud backup.</li>
                </ul>

                <h3>Sent to our servers only if you opt in</h3>
                <ul>
                  <li><strong>Progress sync</strong> &mdash; so progress survives a change of device.</li>
                  <li><strong>Voice journal cloud backup</strong> &mdash; so recordings can be replayed across devices.</li>
                  <li><strong>Practice reminders</strong> &mdash; your child's profile ID is stored so a notification can be delivered.</li>
                  <li><strong>Crash reports</strong> &mdash; standard diagnostics via Azure Application Insights. No IP address is stored and no behavioural profile is built.</li>
                </ul>

                <h3>Always collected</h3>
                <ul>
                  <li>Your Apple ID, through Sign in with Apple, so you can reach your account and we can email a data export if you ask for one.</li>
                  <li>Your subscription status, which is managed by Apple.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>3. What we never collect</h2>
                <ul>
                  <li>IP addresses in logs</li>
                  <li>The device advertising identifier (IDFA)</li>
                  <li>Device fingerprints</li>
                  <li>Precise or approximate location</li>
                  <li>Contacts, photos or camera access</li>
                  <li>Anything at all for advertising or marketing profiling</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>4. Speech, and what happens to your child's voice</h2>
                <p>
                  Pronunciation practice runs on the device. Where a recording is sent to our servers to
                  be scored, it is used for that single purpose and then discarded. Recordings are never
                  used to train any model, by us or by anyone else.
                </p>
                <p>
                  Every line Alfie speaks was written and reviewed by us in advance.{" "}
                  <strong>
                    Your child is not talking to an AI model, and nothing your child says is sent to one.
                  </strong>
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>5. Who we share data with</h2>
                <p>Only the following processors, each under a data processing agreement:</p>
                <ul>
                  <li><strong>Apple</strong> &mdash; identity, payments and notifications.</li>
                  <li><strong>Microsoft Azure</strong> &mdash; backend hosting, in UK data centres.</li>
                </ul>
                <p>We never sell data, and we never share data with advertisers.</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>6. How long we keep things</h2>
                <ul>
                  <li><strong>Voice recordings in the cloud</strong> &mdash; 90 days, unless you archive them.</li>
                  <li><strong>Progress data in the cloud</strong> &mdash; kept while your account is active, and deleted within 30 days of account deletion.</li>
                  <li><strong>Crash reports</strong> &mdash; 90 days.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>7. Your rights</h2>
                <p>At any time, from the Parent Dashboard, you can:</p>
                <ul>
                  <li>Export everything we hold about your child, as JSON plus audio files, emailed to you.</li>
                  <li>Delete an individual child profile.</li>
                  <li>Delete your entire account, which erases everything within 30 days.</li>
                  <li>Change which categories of data sync to the cloud.</li>
                </ul>
                <p>
                  Withdrawing consent takes effect immediately. If you turn off voice cloud backup, any
                  voice data we hold is deleted within 24 hours.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>8. Parental consent</h2>
                <p>
                  We rely on your Apple ID to establish that an adult set the account up, and a parental
                  gate &mdash; a short arithmetic problem &mdash; stands in front of settings, the Parent
                  Dashboard and anything involving payment. We do not use birthday-entry gates, which
                  children learn to defeat.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>9. Children's rights</h2>
                <p>
                  Under the UK GDPR, the ICO's Age Appropriate Design Code and COPPA, your child has the
                  right to privacy, to data minimisation, and to freedom from commercial exploitation.
                  This app was designed around those rights rather than retrofitted to comply with them:
                  the local-first default, the absence of any advertising or analytics SDK, and the
                  consent gate on every outbound network call all come from that starting point.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>10. Security</h2>
                <ul>
                  <li>All data in transit uses TLS 1.3.</li>
                  <li>All data at rest in Azure is encrypted.</li>
                  <li>API keys live in Azure Key Vault, never in the app binary.</li>
                  <li>We review our security posture quarterly.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>11. International transfers</h2>
                <p>
                  There are none. All processing happens in the United Kingdom, in Azure's UK South
                  region. No personal data leaves the UK.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>12. Changes to this policy</h2>
                <p>
                  We will tell you in the app and by email at least 30 days before any material change
                  takes effect.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>13. Contact</h2>
                <p>
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                </p>
                <p style={{ opacity: 0.75 }}>
                  <em>
                    In one line: we collect as little as we can, we don't advertise, nothing leaves the
                    UK, and you control all of it.
                  </em>
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
