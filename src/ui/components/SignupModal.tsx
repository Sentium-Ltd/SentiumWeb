"use client";

import { useEffect, useState, type FormEvent } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

interface Props {
  open: boolean;
  onClose: () => void;
  productId: string;
  productName: string;
  accent: string;
  tagLabel: string;
}

export function SignupModal({
  open,
  onClose,
  productId,
  productName,
  accent,
  tagLabel,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setEmail("");
      setStatus({ kind: "idle" });
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product: productId }),
      });
      if (res.ok) {
        setStatus({ kind: "success" });
        return;
      }
      if (res.status === 429) {
        setStatus({
          kind: "error",
          message: "You've sent a few already - please wait a moment and try again.",
        });
        return;
      }
      if (res.status === 400) {
        setStatus({
          kind: "error",
          message: "That doesn't look like a valid email. Please check it and try again.",
        });
        return;
      }
      setStatus({
        kind: "error",
        message: "Something went wrong. Please try again in a moment.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Couldn't reach the server. Please check your connection and try again.",
      });
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Sign up for ${productName} updates`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "rgba(10,13,18,0.65)",
        backdropFilter: "blur(4px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8 sm:p-10 shadow-2xl"
        style={{ background: "var(--color-bg)" }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full inline-flex items-center justify-center hover:bg-black/5 transition-colors"
          style={{ color: "var(--color-muted)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {status.kind === "success" ? (
          <div className="text-center py-4">
            <div
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
              style={{ background: "var(--brand-mint)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display text-3xl mb-2">Thank you.</h3>
            <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>
              You&apos;re on the list. We&apos;ll be in touch the moment there&apos;s
              something to show.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center px-6 h-11 rounded-full text-sm font-semibold border hover:bg-black/5"
              style={{ borderColor: "var(--color-line)" }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ color: accent }}
            >
              {tagLabel}
            </p>
            <h3 className="font-display text-3xl mb-3">
              Get on the early-access list.
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--color-muted)" }}
            >
              We&apos;ll drop you a note when it&apos;s ready to try. No spam, no
              sales pitch - just a one-line update when there&apos;s something new.
            </p>
            <form onSubmit={onSubmit} className="space-y-3" noValidate>
              <label className="block">
                <span className="block text-sm font-medium mb-2">
                  Your email
                </span>
                <input
                  type="email"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  disabled={status.kind === "submitting"}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none border"
                  style={{
                    background: "var(--color-card)",
                    borderColor: "var(--color-line)",
                    color: "var(--color-fg)",
                  }}
                />
              </label>
              <button
                type="submit"
                disabled={status.kind === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full h-12 text-sm font-semibold transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background:
                    "linear-gradient(135deg, #f5c738 0%, #ef8f45 100%)",
                  color: "#0e1014",
                }}
              >
                {status.kind === "submitting" ? "Sending…" : "Keep me informed"}
              </button>
              {status.kind === "error" && (
                <p
                  className="text-sm"
                  style={{ color: "var(--brand-coral)" }}
                  role="alert"
                >
                  {status.message}
                </p>
              )}
              <p
                className="text-xs text-center"
                style={{ color: "var(--color-muted)" }}
              >
                We&apos;ll only use this to email you about {productName}.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
