/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/ui/components";
import { Footer, Header } from "@/ui/sections";

const SITE_URL = "https://www.sentium.app";
const LAST_UPDATED = "14 September 2026";
const SUPPORT_EMAIL = "support@sentium.app";

export const metadata: Metadata = {
  title: "My Area Score — Privacy policy",
  description:
    "What My Area Score holds about you, who processes it, how long it is kept and how to delete it. No ads, no analytics, no tracking. UK GDPR.",
  alternates: { canonical: `${SITE_URL}/myareascore/privacy/` },
};

export default function MyAreaScorePrivacy() {
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
              <span style={{ color: "var(--color-fg)" }}>Privacy</span>
            </nav>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              My Area Score &mdash; Privacy policy
            </h1>
            <p className="mt-4 text-sm" style={{ color: "var(--color-muted)" }}>
              Last updated: {LAST_UPDATED}
            </p>
          </Reveal>

          <article className="legal mt-10 space-y-8">
            <Reveal>
              <section>
                <h2>The short version</h2>
                <ul>
                  <li><strong>No ads, no analytics, no tracking cookies.</strong></li>
                  <li>
                    <strong>You can use the map without an account,</strong> and when you do we don't
                    know who you are.
                  </li>
                  <li>
                    <strong>If you create an account,</strong> we hold your email address, how you sign
                    in, and whether you subscribe. That is the whole account.
                  </li>
                  <li><strong>Your card details go to Stripe,</strong> never to us.</li>
                  <li><strong>We never sell data,</strong> to anyone.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>1. Who we are</h2>
                <p>
                  My Area Score (myareascore.co.uk) is operated by <strong>Sentium Ltd</strong>, a
                  company registered in England and Wales (company number 16512683), with its registered
                  office at Suite Ra01, 195&ndash;197 Wood Street, London E17 3NU, United Kingdom.
                  Sentium Ltd is the data controller for the personal data described here.
                </p>
                <p>
                  For any data protection question, write to{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>2. The map is about places, not people</h2>
                <p>
                  My Area Score compares neighbourhoods in London and the surrounding commuter belt. Its
                  figures come from official published statistics and are shown only as totals,
                  percentages and medians for whole areas. Nothing on the map identifies an individual.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>3. Using the map without an account</h2>
                <ul>
                  <li>
                    Your browser downloads the map and its figures from our servers. We don't record
                    which areas you look at or which filters you choose; that stays in your browser.
                  </li>
                  <li>
                    <strong>Postcode and place search</strong> is sent from your browser directly to{" "}
                    <a href="https://postcodes.io/" rel="noopener noreferrer">postcodes.io</a>, a free
                    lookup service run by Ideal Postcodes Ltd, to find where it is on the map. They
                    receive what you typed and your IP address, and nothing that tells them who you are.
                  </li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>4. What we hold if you create an account</h2>
                <ul>
                  <li>
                    <strong>Your email address</strong> &mdash; it identifies the account, and we use it
                    to send sign-in links, address confirmations and password resets.
                  </li>
                  <li>
                    <strong>How you sign in</strong> &mdash; which of a password, an emailed link, Google
                    or Facebook you have used.
                  </li>
                  <li>
                    <strong>Your password, as a hash only.</strong> We store a salted scrypt hash, never
                    the password itself. A new password is held unused until you confirm your email
                    address.
                  </li>
                  <li>
                    <strong>Account housekeeping</strong> &mdash; whether your email address is confirmed,
                    when the account was created, and a timestamp that signs out every device after a
                    password reset.
                  </li>
                  <li>
                    <strong>Your subscription</strong> &mdash; whether you subscribe, the customer and
                    subscription references Stripe gives us, and when the current period ends.
                  </li>
                </ul>
                <p>
                  We do not store your name, photo, postal address, phone number or payment card, and we
                  keep no history of what you do on the map.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>5. Signing in with Google or Facebook</h2>
                <p>
                  If you choose to, Google or Meta tells us your email address and confirms it is
                  verified. Google also sends your basic profile, which we discard. We never post on
                  your behalf, and we don't see your contacts, friends or anything else in those
                  accounts. How Google and Meta handle your data is set out in their own privacy
                  policies.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>6. Payments</h2>
                <p>
                  Subscriptions are processed by <strong>Stripe</strong>. You enter your card details on
                  Stripe's own checkout page; they never reach us. Stripe tells us whether a subscription
                  is active, and keeps its own records of payments to meet its legal and anti-fraud
                  obligations, as described in{" "}
                  <a href="https://stripe.com/gb/privacy" rel="noopener noreferrer">Stripe's privacy policy</a>.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>7. Security records</h2>
                <ul>
                  <li>
                    <strong>Attempt counts.</strong> To stop password guessing and email abuse, we count
                    sign-in and email requests per IP address and per email address over 15-minute or
                    one-hour windows. These counts are deleted automatically once their window has closed,
                    normally within a day.
                  </li>
                  <li>
                    <strong>Emailed links.</strong> Each sign-in, confirmation or reset link is a random,
                    single-use code stored with the email address it was sent to. Links expire within 24
                    hours and the record is deleted automatically within two days.
                  </li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>8. Cookies</h2>
                <p>We use only the cookies needed to sign you in:</p>
                <ul>
                  <li>A sign-in cookie, lasting up to 30 days, set only once you sign in.</li>
                  <li>A short-lived cookie, lasting 10 minutes, while you sign in with Google or Facebook.</li>
                </ul>
                <p>
                  There are no analytics, advertising or third-party tracking cookies, which is why the
                  site doesn't ask you to accept any.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>9. Who processes data for us</h2>
                <ul>
                  <li>
                    <strong>Microsoft Azure</strong> &mdash; hosts the website and sign-in service (West
                    Europe region, the Netherlands), stores accounts and map data (UK South region,
                    London), and sends our emails (Azure Communication Services, data held in the UK).
                  </li>
                  <li><strong>Stripe</strong> &mdash; payments and subscriptions.</li>
                  <li><strong>Google and Meta</strong> &mdash; only if you choose to sign in with them.</li>
                  <li><strong>postcodes.io</strong> &mdash; postcode and place search, as described above.</li>
                </ul>
                <p>We never sell data and we never share it with advertisers.</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>10. Why we are allowed to process it</h2>
                <ul>
                  <li>
                    <strong>Contract</strong> &mdash; running your account and subscription, and sending
                    the emails that make sign-in work.
                  </li>
                  <li>
                    <strong>Legitimate interests</strong> &mdash; the security records in section 7, which
                    protect your account and the service.
                  </li>
                  <li>
                    <strong>Legal obligation</strong> &mdash; keeping payment records for tax purposes.
                  </li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>11. How long we keep things</h2>
                <ul>
                  <li>Your account: for as long as it exists. When you ask us to delete it, we do so within 30 days.</li>
                  <li>Attempt counts: normally deleted within a day.</li>
                  <li>Emailed-link records: deleted within two days.</li>
                  <li>
                    Payment records: kept by Stripe and by us for as long as UK tax law requires,
                    normally six years, even after an account is deleted.
                  </li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>12. International transfers</h2>
                <p>
                  The website and sign-in service run in the Netherlands, which the UK recognises as
                  providing adequate protection. Stripe, Google and Meta may process data in the United
                  States; where they do, the transfer is covered by the UK Extension to the EU&ndash;US
                  Data Privacy Framework or the UK International Data Transfer Addendum.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>13. Your rights</h2>
                <p>
                  Under the UK GDPR you have the right to access, correct, erase, restrict and port your
                  personal data, and to object to its processing. To exercise any of them, email{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from the address on your
                  account. We respond within 30 days.
                </p>
                <p>
                  To delete your account, follow{" "}
                  <Link href="/myareascore/data-deletion/">Deleting your data</Link>.
                </p>
                <p>
                  If you are unhappy with how we have handled your data, you can complain to the
                  Information Commissioner's Office at{" "}
                  <a href="https://ico.org.uk/make-a-complaint/" rel="noopener noreferrer">ico.org.uk</a>{" "}
                  or on 0303 123 1113. We would appreciate the chance to put it right first.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>14. Children</h2>
                <p>
                  My Area Score is for adults. Accounts are not intended for anyone under 18, and we do
                  not knowingly hold personal data about children. Figures about schools describe
                  schools, never individual pupils.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>15. Changes to this policy</h2>
                <p>
                  We will update this page when anything changes, and email account holders at least 30
                  days before any material change takes effect.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>16. Contact</h2>
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
