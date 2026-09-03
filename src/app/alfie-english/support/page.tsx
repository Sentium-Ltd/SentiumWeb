/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/ui/components";
import { Footer, Header } from "@/ui/sections";

const SITE_URL = "https://www.sentium.app";
const SUPPORT_EMAIL = "support@sentium.app";

export const metadata: Metadata = {
  title: "Learn English with Alfie — Support",
  description:
    "Help, contact, subscription questions and data requests for Learn English with Alfie by Sentium Ltd.",
  alternates: { canonical: `${SITE_URL}/alfie-english/support/` },
};

export default function AlfieEnglishSupport() {
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
              <span style={{ color: "var(--color-fg)" }}>Support</span>
            </nav>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              Learn English with Alfie &mdash; Support
            </h1>
            <p className="mt-5 text-lg" style={{ color: "var(--color-muted)" }}>
              Sentium is a small team in London. You'll talk to a person, not a chatbot.
            </p>
          </Reveal>

          <article className="legal mt-10 space-y-8">
            <Reveal>
              <section>
                <h2>Contact</h2>
                <p>
                  Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. We reply within two
                  working days, usually the same day Monday to Friday, UK time.
                </p>
                <p>When writing about a specific problem, it helps to include:</p>
                <ul>
                  <li>The Apple ID email the account was created with.</li>
                  <li>The device model and iOS version.</li>
                  <li>The app version, shown at the bottom of Settings.</li>
                  <li>What you did, what you expected, and what happened instead.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>Common questions</h2>

                <h3>How do I reach the parent area?</h3>
                <p>
                  Tap the settings icon on the Forest Path and answer the arithmetic question. That gate
                  stands in front of settings, the Parent Dashboard and anything involving payment, so a
                  child can't wander into them.
                </p>

                <h3>What's free, and what does the subscription add?</h3>
                <p>
                  The first five lessons of each level plus three conversation practices &mdash; sixteen
                  units &mdash; are free and fully usable. <strong>Alfie Premium</strong> (£1.99/month,
                  family shareable) unlocks the full catalogue: 401 lessons and 110 conversation
                  practices across Building Blocks, Storyteller and Wordsmith, with native-language audio
                  in your child's first language.
                </p>

                <h3>How do I cancel?</h3>
                <p>
                  In iOS Settings &rarr; your name &rarr; Subscriptions. Cancelling stops the next
                  renewal; access continues to the end of the period you've paid for. Refunds are handled
                  by Apple.
                </p>

                <h3>How do I delete my child's data?</h3>
                <p>
                  Parent Dashboard &rarr; select the child &rarr; Delete. It is immediate, and it is the
                  whole story: everything about your child &mdash; name, age, progress, pronunciation
                  history and voice journal recordings &mdash; lives on the device and nowhere else.
                  Deleting the app removes all of it too. We hold no copy to delete.
                </p>

                <h3>Can I get a copy of what you hold about my child?</h3>
                <p>
                  You can ask, and we will answer, but the honest expectation is that we hold nothing.
                  There is no account on our servers and no cloud profile. Email{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we will confirm in writing
                  within 30 days.
                </p>

                <h3>Is my child talking to an AI?</h3>
                <p>
                  No. Every lesson and every line Alfie speaks was written and reviewed by us in advance.
                  Nothing your child says is sent to an AI model. Speech recognition is used only to score
                  pronunciation, and never to train anything.
                </p>

                <h3>Alfie didn't understand my child</h3>
                <p>
                  Speech scoring is harder for younger children and for strong accents, and Alfie is
                  deliberately gentle about it &mdash; he never says a child is wrong. If it's
                  consistently failing to hear a particular child, tell us the age and first language and
                  we'll look at it; that feedback genuinely shapes the scoring.
                </p>

                <h3>Which languages does it support?</h3>
                <p>
                  The app interface and every lesson translation are available in Arabic, French, German,
                  Italian, Japanese, Korean, Mandarin (Simplified), Polish, Portuguese (Brazil), Romanian,
                  Spanish, Spanish (Latin America) and Turkish, alongside British and American English.
                </p>

                <h3>Reporting content you're unhappy with</h3>
                <p>
                  Email us the lesson or chat title and what troubled you. We change content on this basis
                  &mdash; it's a small catalogue written by people, and it can be edited.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>Legal</h2>
                <p>
                  <Link href="/alfie-english/privacy/">Privacy policy</Link> &middot;{" "}
                  <Link href="/alfie-english/terms/">Terms of use</Link>
                </p>
                <p>
                  Sentium Ltd, company number 16512683, registered in England and Wales. Suite Ra01,
                  195&ndash;197 Wood Street, London E17 3NU, United Kingdom.
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
