/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/ui/components";
import { Footer, Header } from "@/ui/sections";

const SITE_URL = "https://www.sentium.app";
const SUPPORT_EMAIL = "support@sentium.app";

export const metadata: Metadata = {
  title: "My Area Score — Support",
  description:
    "Help with signing in, subscriptions, cancelling, where the figures come from, and deleting your data — My Area Score by Sentium Ltd.",
  alternates: { canonical: `${SITE_URL}/myareascore/support/` },
};

export default function MyAreaScoreSupport() {
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
              <Link href="/myareascore/" className="hover:underline underline-offset-4">
                My Area Score
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: "var(--color-fg)" }}>Support</span>
            </nav>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              My Area Score &mdash; Support
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
                  working days, usually the same day Monday to Friday, UK time. Writing from the address
                  on your account lets us find it straight away.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>Common questions</h2>

                <h3>My sign-in or confirmation email hasn't arrived</h3>
                <p>
                  Give it a couple of minutes and check your spam or junk folder. Links work once and
                  expire, so if an old one fails, ask for a new one. After several requests in a short
                  time we pause sending for 15 minutes to protect your inbox.
                </p>

                <h3>Why do I have to confirm my email before my password works?</h3>
                <p>
                  So nobody can create an account in your name. Without it, someone could register your
                  address with a password of their choosing before you ever arrived. Signing in with
                  Google or Facebook confirms the address automatically.
                </p>

                <h3>I've forgotten my password</h3>
                <p>
                  Choose <strong>Forgotten password</strong> on the sign-in panel. Resetting it signs out
                  every device that was signed in with the old one.
                </p>

                <h3>It says &ldquo;Too many attempts&rdquo;</h3>
                <p>Wait 15 minutes and try again. It is there to stop anyone guessing passwords.</p>

                <h3>What does a subscription add?</h3>
                <p>
                  The whole map is free to explore. A subscription shows exact figures &mdash; prices,
                  percentages and scores &mdash; where free use shows a range.
                </p>

                <h3>How do I cancel, change my card or get an invoice?</h3>
                <p>
                  Sign in and choose <strong>Manage subscription</strong>, under the search box. It opens
                  Stripe's secure billing page, where you can cancel, update your card and download
                  invoices. You won't be charged again and you keep access to the end of the month
                  you've paid for.
                </p>
                <p>
                  Cancel within 14 days of first subscribing and we refund that first payment in full
                  &mdash; email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we'll
                  process it. If you can't sign in, email us and we'll cancel for you.
                </p>

                <h3>Where do the figures come from?</h3>
                <ul>
                  <li>Community and households: the 2021 census (ONS).</li>
                  <li>Homes: HM Land Registry sale prices over the last two years.</li>
                  <li>Safety: crime recorded by the police, published on police.uk.</li>
                  <li>Schools: Department for Education results and Ofsted inspections.</li>
                  <li>
                    Commute: TfL's timetabled weekday journeys arriving by 09:00, with the walk to the
                    station estimated from distance.
                  </li>
                </ul>

                <h3>My commute looks different from my journey planner</h3>
                <p>
                  The map uses timetabled journeys rather than live running, and estimates the walk to
                  the station from distance, so it is a fair comparison between areas rather than a
                  prediction of your own door-to-door time.
                </p>

                <h3>Which areas are covered?</h3>
                <p>Greater London and the commuter belt within about 80km (50 miles) of central London.</p>

                <h3>A figure looks wrong</h3>
                <p>
                  Tell us the area or postcode and what you expected. Sources do contain errors, and so
                  can we; we check every report.
                </p>

                <h3>How do I delete my account?</h3>
                <p>
                  See <Link href="/myareascore/data-deletion/">Deleting your data</Link>.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>Legal</h2>
                <p>
                  <Link href="/myareascore/privacy/">Privacy policy</Link> &middot;{" "}
                  <Link href="/myareascore/terms/">Terms of use</Link> &middot;{" "}
                  <Link href="/myareascore/data-deletion/">Deleting your data</Link>
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
