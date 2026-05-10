import { SentiumMark } from "@/ui/components";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-12 border-t"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="container-prose flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <SentiumMark size={22} />
          <span className="font-display text-base tracking-tight">Sentium</span>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
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
