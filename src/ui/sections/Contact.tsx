import { ContactForm, Reveal } from "@/ui/components";
import { SectionHeading } from "@/ui/primitives";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32"
      style={{ background: "var(--color-card)" }}
    >
      <div className="container-prose">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Get in touch"
                title={
                  <>
                    Tell us what you&apos;re <br className="hidden sm:block" />
                    <span className="gradient-text">working on.</span>
                  </>
                }
                description="Press, partnerships, or just to say hi about something we made — we read everything and reply within a few working days."
              />
              <div className="mt-8 space-y-2 text-sm">
                <p style={{ color: "var(--color-muted)" }}>
                  Or write to us directly:
                </p>
                <a
                  href="mailto:hello@sentium.app"
                  className="inline-flex items-center gap-2 font-medium underline underline-offset-4"
                  style={{ color: "var(--color-fg)" }}
                >
                  hello@sentium.app
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
