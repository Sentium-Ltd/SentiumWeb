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
    "Almost nothing about your child leaves the device. What Learn English with Alfie collects, what it deliberately doesn't, and how to erase it. UK GDPR, ICO Age Appropriate Design Code and COPPA aligned.",
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
                  <li>
                    <strong>Almost nothing about your child ever leaves the device.</strong> There is no
                    account on our servers, no cloud profile, and no progress database with your child's
                    name in it.
                  </li>
                  <li><strong>We do not know who your child is.</strong> We could not produce a file about them if we tried.</li>
                  <li><strong>Nothing leaves the United Kingdom.</strong></li>
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
                <h2>2. What stays on the device</h2>
                <p>
                  All of the following is stored on your child's iPhone or iPad and is never transmitted
                  to us:
                </p>
                <ul>
                  <li>Your child's first name, age and chosen native language.</li>
                  <li>Learning progress, stars, gems and badges.</li>
                  <li>Pronunciation scores and history.</li>
                  <li>Voice journal recordings.</li>
                  <li>The Sign in with Apple identifier, held in the device Keychain.</li>
                </ul>
                <p>Deleting the app removes all of it.</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>3. What actually leaves the device</h2>
                <p>Three things, and only three:</p>
                <ul>
                  <li>
                    <strong>Lesson content requests.</strong> The app asks our servers for lessons,
                    illustrations and audio. These requests carry no information about your child &mdash;
                    they name a lesson, not a person.
                  </li>
                  <li>
                    <strong>Pronunciation scoring.</strong> When your child practises speaking, a short
                    recording of the phrase is sent to our server, which forwards it to Microsoft Azure's
                    speech-scoring service and returns a score. The recording carries{" "}
                    <strong>no name, no account, no device identifier and no profile ID</strong> &mdash;
                    nothing that could connect it to your child. We do not write it to any database or
                    storage, and it is discarded once the score comes back. Neither we nor Microsoft use
                    it to train anything.
                  </li>
                  <li>
                    <strong>Subscription checks.</strong> If you subscribe, the App Store receipt is sent
                    to our server so we can confirm the subscription is genuine. It contains Apple's
                    transaction identifiers and no information about your child.
                  </li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>4. What we never collect</h2>
                <ul>
                  <li>IP addresses in logs</li>
                  <li>The device advertising identifier (IDFA)</li>
                  <li>Device fingerprints</li>
                  <li>Precise or approximate location</li>
                  <li>Contacts, photos or camera access</li>
                  <li>Your email address</li>
                  <li>Anything at all for advertising or marketing profiling</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>5. Sign in with Apple</h2>
                <p>
                  Signing in is optional &mdash; the app works without it. When you do sign in, Apple
                  gives the app an identifier for you, and that identifier is stored in the device
                  Keychain. <strong>It is never sent to us.</strong> We do not receive your name or
                  email, we hold no account record for you, and we cannot identify you from anything in
                  the app.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>6. Speech, and what happens to your child's voice</h2>
                <p>
                  Pronunciation recordings are used to produce a score and nothing else, as described
                  above. They are never used to train any model, by us or by anyone else.
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
                <h2>7. Who we share data with</h2>
                <p>Only the following processors, each under a data processing agreement:</p>
                <ul>
                  <li><strong>Apple</strong> &mdash; payments and subscription management.</li>
                  <li>
                    <strong>Microsoft Azure</strong> &mdash; hosting for lesson content, in UK data
                    centres, and the speech-scoring service described above.
                  </li>
                </ul>
                <p>
                  We never sell data and we never share data with advertisers. There are no analytics
                  SDKs, advertising SDKs or third-party trackers of any kind in this app.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>8. How long we keep things</h2>
                <p>
                  We do not retain personal data, because we do not receive any. Pronunciation recordings
                  exist only for the seconds it takes to score them, and are never stored.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>9. Your rights</h2>
                <p>
                  Under the UK GDPR you have the right to access, correct, erase, restrict and port your
                  personal data, and to object to its processing. In practice, for this app:
                </p>
                <ul>
                  <li>
                    <strong>Erasure and access are immediate and in your hands.</strong> Everything about
                    your child lives on the device. Delete a child profile in the Parent Dashboard, or
                    delete the app, and it is gone. We hold no copy.
                  </li>
                  <li>
                    <strong>If you make an access request to us,</strong> we will almost certainly have
                    nothing to give you, because we hold nothing tied to your child. We will confirm that
                    in writing.
                  </li>
                  <li>
                    <strong>To exercise any right, or to ask us anything at all,</strong> email{" "}
                    <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. We respond within 30 days,
                    usually far sooner.
                  </li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>10. Parental consent</h2>
                <p>
                  We rely on your Apple ID to establish that an adult set the app up, and a parental gate
                  &mdash; a short arithmetic problem &mdash; stands in front of settings, the Parent
                  Dashboard and anything involving payment. We do not use birthday-entry gates, which
                  children quickly learn to defeat.
                </p>
                <p>
                  Because we collect no personal data from children, we do not rely on parental consent
                  as a lawful basis for processing children's data &mdash; there is none to process.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>11. Children's rights</h2>
                <p>
                  Under the UK GDPR, the ICO's Age Appropriate Design Code and COPPA, your child has the
                  right to privacy, to data minimisation, and to freedom from commercial exploitation.
                  This app was designed around those rights rather than retrofitted to comply with them:
                  the local-first default, the absence of any advertising or analytics SDK, and a consent
                  gate compiled into every outbound network call all follow from that starting point.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>12. Security</h2>
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
                <h2>13. International transfers</h2>
                <p>
                  There are none. All processing happens in the United Kingdom, in Azure's UK South
                  region.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>14. Features that do not exist yet</h2>
                <p>
                  Stated for transparency, because the app contains the consent scaffolding for them: we
                  have built the machinery for optional cloud progress sync, cloud backup of voice
                  recordings, practice reminders, and anonymous usage analytics.{" "}
                  <strong>None of these are implemented, and none of them run.</strong> No such data is
                  collected today.
                </p>
                <p>
                  If we ever switch one on, it will be off by default, will require you to opt in, and we
                  will update this policy and tell you at least 30 days beforehand.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>15. Changes to this policy</h2>
                <p>
                  We will tell you in the app and by email at least 30 days before any material change
                  takes effect.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>16. Contact</h2>
                <p>
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                </p>
                <p style={{ opacity: 0.75 }}>
                  <em>
                    In one line: your child's data stays on your child's device. We don't advertise, we
                    don't track, and we don't have a file on anyone.
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
