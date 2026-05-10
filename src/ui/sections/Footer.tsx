import { SentiumMark } from "@/ui/components";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-12 border-t"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="container-prose flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <SentiumMark size={22} />
            <span className="font-display text-base tracking-tight">Sentium</span>
          </div>

          <a
            href="https://sentium.app/"
            className="group flex items-center gap-3 rounded-2xl p-2 -m-2 transition-colors hover:bg-[var(--color-card)]"
            aria-label="QR code linking to sentium.app"
          >
            <span
              className="block rounded-md"
              style={{
                background: "white",
                padding: "4px",
                border: "1px solid var(--color-line)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/branding/qr-sentium.svg"
                alt=""
                width={52}
                height={52}
                className="block"
              />
            </span>
            <span className="text-xs leading-tight">
              <span
                className="block font-medium"
                style={{ color: "var(--color-fg)" }}
              >
                Scan to share
              </span>
              <span
                className="block"
                style={{ color: "var(--color-muted)" }}
              >
                sentium.app
              </span>
            </span>
          </a>
        </div>

        <p
          className="text-xs leading-relaxed border-t pt-6"
          style={{
            color: "var(--color-muted)",
            borderColor: "var(--color-line)",
          }}
        >
          © {year} Sentium Ltd · Company number 16512683 · Registered in
          England &amp; Wales ·{" "}
          <a
            href="mailto:support@sentium.app"
            className="underline underline-offset-2"
          >
            support@sentium.app
          </a>
        </p>
      </div>
    </footer>
  );
}
