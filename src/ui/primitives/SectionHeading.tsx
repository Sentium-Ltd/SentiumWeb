import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p
          className="text-xs font-semibold uppercase tracking-[0.18em] mb-3"
          style={{ color: "var(--brand-coral)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p
          className="mt-5 text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
