/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/ui/components";
import { Footer, Header } from "@/ui/sections";

const SITE_URL = "https://www.sentium.app";
const LAST_UPDATED = "14 September 2026";
const SUPPORT_EMAIL = "support@sentium.app";
const DELETE_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Delete my My Area Score account")}`;

export const metadata: Metadata = {
  title: "My Area Score — Deleting your data",
  description:
    "How to delete your My Area Score account and everything we hold about you, including accounts created with Google or Facebook.",
  alternates: { canonical: `${SITE_URL}/myareascore/data-deletion/` },
};

export default function MyAreaScoreDataDeletion() {
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
              <span style={{ color: "var(--color-fg)" }}>Deleting your data</span>
            </nav>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              My Area Score &mdash; Deleting your data
            </h1>
            <p className="mt-4 text-sm" style={{ color: "var(--color-muted)" }}>
              Last updated: {LAST_UPDATED}
            </p>
          </Reveal>

          <article className="legal mt-10 space-y-8">
            <Reveal>
              <section>
                <h2>How to ask</h2>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Email <a href={DELETE_MAILTO}>{SUPPORT_EMAIL}</a> with the subject{" "}
                    <strong>&ldquo;Delete my My Area Score account&rdquo;</strong>.
                  </li>
                  <li>
                    Send it from the email address on the account. If you signed up with Google or
                    Facebook, that is the email address of your Google or Facebook account.
                  </li>
                  <li>
                    We reply to that address to confirm the request really came from you &mdash; so
                    nobody can delete someone else's account by naming it.
                  </li>
                  <li>
                    Once you confirm, we delete the account within 30 days, usually within a few working
                    days, and email you when it is done.
                  </li>
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>What gets deleted</h2>
                <ul>
                  <li>Your account: email address, sign-in methods, password hash and subscription status.</li>
                  <li>Any sign-in, confirmation or reset links still outstanding.</li>
                  <li>
                    Your customer record at Stripe. If you have an active subscription it is cancelled
                    first, so you are not charged again.
                  </li>
                </ul>
                <p>
                  Records of sign-in attempts are already deleted automatically, normally within a day,
                  so there is nothing further to remove there.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>What we have to keep</h2>
                <p>
                  Records of payments you made &mdash; the amount, the date and the email address they
                  were charged to &mdash; are kept for as long as UK tax law requires, normally six
                  years. They are used for nothing else.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>If you signed in with Facebook or Google</h2>
                <p>
                  Removing My Area Score from your Facebook or Google account stops them sharing your
                  email address with us in future, but it does not delete the account you hold with us.
                  Do both:
                </p>
                <ul>
                  <li>
                    <strong>Facebook:</strong> Settings &amp; privacy &rarr; Settings &rarr; Apps and
                    websites &rarr; My Area Score &rarr; Remove.
                  </li>
                  <li>
                    <strong>Google:</strong>{" "}
                    <a href="https://myaccount.google.com/connections" rel="noopener noreferrer">
                      myaccount.google.com/connections
                    </a>{" "}
                    &rarr; My Area Score &rarr; Delete all connections.
                  </li>
                  <li>
                    Then email us as above to delete the account itself.
                  </li>
                </ul>
                <p>
                  From Facebook we only ever received your email address, so that is all there is to
                  delete.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>If you never created an account</h2>
                <p>
                  We hold nothing about you. Using the map without signing in leaves no record with us.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2>More detail</h2>
                <p>
                  Everything we hold, and why, is in the{" "}
                  <Link href="/myareascore/privacy/">privacy policy</Link>. Questions to{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
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
