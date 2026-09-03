/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/ui/components";
import { Footer, Header } from "@/ui/sections";

const SITE_URL = "https://www.sentium.app";
const LAST_UPDATED = "3 September 2026";
const SUPPORT_EMAIL = "support@sentium.app";

export const metadata: Metadata = {
  title: "Learn English with Alfie — Terms of use",
  description:
    "The agreement between parents and Sentium Ltd for Learn English with Alfie: subscriptions, acceptable use, safety disclosures and consumer rights.",
  alternates: { canonical: `${SITE_URL}/alfie-english/terms/` },
};

export default function AlfieEnglishTerms() {
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
              <span style={{ color: "var(--color-fg)" }}>Terms</span>
            </nav>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              Learn English with Alfie &mdash; Terms of use
            </h1>
            <p className="mt-4 text-sm" style={{ color: "var(--color-muted)" }}>
              Last updated: {LAST_UPDATED}
            </p>
          </Reveal>

          <article className="legal mt-10 space-y-8">
            <Reveal>
              <section>
                <h2>1. Who this agreement is between</h2>
                <p>
                  This agreement is between you &mdash; the parent or legal guardian setting up an
                  account &mdash; and <strong>Sentium Ltd</strong>, a company registered in England and
                  Wales under company number 16512683, with its registered office at Suite Ra01,
                  195&ndash;197 Wood Street, London E17 3NU, United Kingdom.
                </p>
                <p>
                  Because the app is designed for children, only adults may create accounts and accept
                  these terms. Children use the app under the account you create and supervise.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>2. Using the app</h2>
                <p>You agree to:</p>
                <ul>
                  <li>Set the account up yourself, rather than letting a child create it.</li>
                  <li>Supervise your child's use.</li>
                  <li>Not reverse engineer, resell or redistribute the app or its content.</li>
                </ul>
                <p>We agree to:</p>
                <ul>
                  <li>Provide the app as described.</li>
                  <li>Keep your child's data private, as set out in our privacy policy.</li>
                  <li>Never advertise to your child.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>3. Subscriptions and payments</h2>
                <ul>
                  <li>
                    Subscriptions are sold through Apple's App Store using StoreKit. Apple handles
                    billing; we never see your card details.
                  </li>
                  <li>
                    A free tier is available without any subscription: the first five lessons of each
                    level plus three conversation practices &mdash; sixteen units in total.
                  </li>
                  <li>
                    <strong>Alfie Premium</strong> unlocks the full catalogue and costs £1.99 per month,
                    subject to Apple's regional pricing. It is family shareable.
                  </li>
                  <li>
                    Cancel at any time in iOS Settings &rarr; Apple ID &rarr; Subscriptions. Cancellation
                    takes effect at the end of the current billing period.
                  </li>
                  <li>Refunds are handled by Apple, under Apple's refund policy.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>4. Content</h2>
                <ul>
                  <li>
                    The characters, audio, illustrations and written material are our intellectual
                    property or licensed to us.
                  </li>
                  <li>
                    Voice journal recordings your child makes belong to you. We claim no right to them.
                  </li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>5. Acceptable use</h2>
                <p>
                  Because this is a children's app, the acceptable-use line is unusually strict. You
                  agree not to:
                </p>
                <ul>
                  <li>Use the app for anything other than supervised child education.</li>
                  <li>Extract audio, content or data for republication.</li>
                  <li>Use automated systems to generate load against our servers.</li>
                  <li>Misrepresent a child's age to reach age-gated content.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>6. Safety disclosures</h2>
                <ul>
                  <li>
                    Every lesson, conversation and line of Alfie's dialogue is written and reviewed by us
                    in advance. Your child is never talking to a live AI model, and nothing your child
                    says is sent to one.
                  </li>
                  <li>
                    Speech recognition runs on the device to score pronunciation. Where a recording
                    reaches our servers for scoring, it is used for that purpose only and never to train
                    any model.
                  </li>
                  <li>
                    If any content strikes you as inappropriate, email{" "}
                    <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we will change it.
                  </li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>7. Warranties and limits</h2>
                <p>
                  The app is provided "as is". We do not warrant that it is error-free, or that speech
                  recognition will score every child's pronunciation correctly.
                </p>
                <p>To the extent permitted by law:</p>
                <ul>
                  <li>
                    Our total liability is limited to the amount you paid us in the twelve months before
                    the claim.
                  </li>
                  <li>We are not liable for indirect or consequential losses.</li>
                  <li>
                    Nothing here limits liability for gross negligence, wilful misconduct, or anything
                    that cannot be limited under UK consumer law.
                  </li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>8. Consumer rights</h2>
                <p>
                  If you are a UK or EU consumer you have statutory rights that these terms do not
                  override. This section preserves them explicitly.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>9. Termination</h2>
                <p>
                  You can delete your account at any time from the Parent Dashboard, and we erase the
                  data as described in the privacy policy.
                </p>
                <p>
                  We may suspend or terminate accounts that violate these terms, with notice unless the
                  violation is serious &mdash; an attempted security attack, for example.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>10. Governing law</h2>
                <p>
                  These terms are governed by the laws of England and Wales, and disputes go to the
                  courts of England and Wales &mdash; without prejudice to any mandatory consumer
                  protection law in your country of residence.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>11. Changes</h2>
                <p>We will tell you about material changes at least 30 days before they take effect.</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>12. Contact</h2>
                <p>
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
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
