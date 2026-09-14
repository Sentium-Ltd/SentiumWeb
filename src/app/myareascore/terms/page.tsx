/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/ui/components";
import { Footer, Header } from "@/ui/sections";

const SITE_URL = "https://www.sentium.app";
const LAST_UPDATED = "14 September 2026";
const SUPPORT_EMAIL = "support@sentium.app";

export const metadata: Metadata = {
  title: "My Area Score — Terms of use",
  description:
    "The agreement between you and Sentium Ltd for My Area Score: what the figures are and aren't, subscriptions, cancellation and your consumer rights.",
  alternates: { canonical: `${SITE_URL}/myareascore/terms/` },
};

export default function MyAreaScoreTerms() {
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
              <span style={{ color: "var(--color-fg)" }}>Terms</span>
            </nav>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              My Area Score &mdash; Terms of use
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
                  This agreement is between you and <strong>Sentium Ltd</strong>, a company registered
                  in England and Wales under company number 16512683, with its registered office at Suite
                  Ra01, 195&ndash;197 Wood Street, London E17 3NU, United Kingdom. It covers My Area Score
                  at myareascore.co.uk and myareascore.com.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>2. What My Area Score is &mdash; and isn't</h2>
                <p>
                  My Area Score compares neighbourhoods in London and the surrounding commuter belt using
                  published data: the census, house sales, recorded crime, school performance and
                  inspections, and public transport timetables.
                </p>
                <ul>
                  <li>
                    <strong>It is information, not advice.</strong> Nothing on the site is financial,
                    property, legal or school-admissions advice.
                  </li>
                  <li>
                    <strong>The figures describe areas, not a particular street or home,</strong> and are
                    only as current as their sources. Census figures date from 2021; house prices cover
                    recent sales; school results and inspection grades change.
                  </li>
                  <li>
                    <strong>Commute times are estimates</strong> based on timetabled journeys, with the
                    walk to the station estimated from distance. Your own journey may differ.
                  </li>
                  <li>
                    <strong>Being near a school is not a place at it.</strong> Check each school's
                    admissions criteria with the school or local authority.
                  </li>
                </ul>
                <p>
                  Before a decision that matters &mdash; buying or renting a home, or choosing a school
                  &mdash; check the details that matter to you directly.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>3. Accounts</h2>
                <ul>
                  <li>You can use the map without an account.</li>
                  <li>You must be 18 or over to create an account.</li>
                  <li>
                    One account per email address. You can sign in with a password, an emailed link,
                    Google or Facebook; they all reach the same account when they share an email address.
                  </li>
                  <li>Keep your password to yourself, and don't share your account.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>4. Subscriptions</h2>
                <ul>
                  <li>
                    The map is free to use. A subscription shows exact figures where free use shows a
                    range.
                  </li>
                  <li>
                    The price is shown before you pay. Payment is taken by Stripe, monthly in advance, and
                    the subscription renews each month until you cancel.
                  </li>
                  <li>
                    <strong>Cancel at any time</strong> by emailing{" "}
                    <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from the address on your
                    account. You won't be charged again, and you keep access until the end of the month
                    you have paid for.
                  </li>
                  <li>
                    <strong>14-day right to cancel.</strong> If you cancel within 14 days of first
                    subscribing, we refund that first payment in full.
                  </li>
                  <li>
                    If we change the price, we will email you at least 30 days beforehand, and you can
                    cancel before it applies.
                  </li>
                  <li>
                    If a payment fails and isn't resolved, the subscription ends and the account returns
                    to free use.
                  </li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>5. Acceptable use</h2>
                <p>My Area Score is for your own use. You agree not to:</p>
                <ul>
                  <li>Scrape, bulk-download, republish or resell its figures, including subscriber figures.</li>
                  <li>Access it through automated tools, or put unreasonable load on our servers.</li>
                  <li>Try to get round sign-in, subscription or security controls.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>6. Data sources and ownership</h2>
                <p>
                  The underlying data come from the Office for National Statistics, HM Land Registry,
                  police.uk, the Department for Education, Ofsted, Transport for London and OpenStreetMap
                  contributors, used under their licences &mdash; mostly the Open Government Licence
                  &mdash; and credited in the app. The way we combine, score and present them, and the
                  software, belong to Sentium Ltd.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>7. Changes to the service</h2>
                <p>
                  We improve My Area Score over time and may add, change or remove features. If we stop
                  offering subscriptions altogether, we will refund any part of a month you have paid for
                  and not received.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>8. Our responsibility to you</h2>
                <p>
                  We take care to process the source data accurately, but we can't guarantee that every
                  figure is complete, correct or up to date, or that the site will always be available.
                </p>
                <p>To the extent permitted by law:</p>
                <ul>
                  <li>
                    We are not responsible for decisions made on the basis of the figures, for the reasons
                    in section 2.
                  </li>
                  <li>
                    Our total liability to you is limited to the amount you paid us in the twelve months
                    before the claim.
                  </li>
                  <li>We are not liable for indirect or consequential losses.</li>
                </ul>
                <p>
                  Nothing in these terms limits liability for death or personal injury caused by
                  negligence, for fraud, or for anything else that cannot be limited under UK law.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>9. Consumer rights</h2>
                <p>
                  If you are a consumer, you have statutory rights that these terms do not override,
                  including under the Consumer Rights Act 2015 and the Consumer Contracts Regulations
                  2013.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>10. Ending the agreement</h2>
                <p>
                  You can stop using My Area Score at any time, and ask us to delete your account as
                  described in <Link href="/myareascore/data-deletion/">Deleting your data</Link>.
                </p>
                <p>
                  We may suspend or close an account that breaks these terms, with notice unless the
                  breach is serious &mdash; an attempt to attack the service, for example.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>11. Governing law</h2>
                <p>
                  These terms are governed by the laws of England and Wales, and disputes go to the courts
                  of England and Wales &mdash; without prejudice to mandatory consumer protection law where
                  you live.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>12. Changes to these terms</h2>
                <p>We will email account holders at least 30 days before a material change takes effect.</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>13. Contact</h2>
                <p>
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> &middot;{" "}
                  <Link href="/myareascore/privacy/">Privacy policy</Link>
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
