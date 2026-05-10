import type { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from "react";

interface FieldShellProps {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}

export function FieldShell({ label, htmlFor, error, hint, children }: FieldShellProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium tracking-tight"
        style={{ color: "var(--color-fg)" }}
      >
        {label}
      </label>
      {children}
      <div className="min-h-[1.25rem] text-xs" aria-live="polite">
        {error ? (
          <span style={{ color: "var(--brand-coral)" }}>{error}</span>
        ) : hint ? (
          <span style={{ color: "var(--color-muted)" }}>{hint}</span>
        ) : null}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none border";

const inputStyle: React.CSSProperties = {
  background: "var(--color-card)",
  borderColor: "var(--color-line)",
  color: "var(--color-fg)",
};

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function TextInput({ invalid, className, ...rest }: TextInputProps) {
  return (
    <input
      {...rest}
      className={`${inputClass} ${className ?? ""}`}
      style={{
        ...inputStyle,
        borderColor: invalid ? "var(--brand-coral)" : "var(--color-line)",
        ...(rest.style ?? {}),
      }}
      aria-invalid={invalid || undefined}
    />
  );
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export function TextArea({ invalid, className, ...rest }: TextAreaProps) {
  return (
    <textarea
      {...rest}
      className={`${inputClass} resize-y min-h-[8rem] ${className ?? ""}`}
      style={{
        ...inputStyle,
        borderColor: invalid ? "var(--brand-coral)" : "var(--color-line)",
        ...(rest.style ?? {}),
      }}
      aria-invalid={invalid || undefined}
    />
  );
}
