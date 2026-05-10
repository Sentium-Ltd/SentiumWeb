"use client";

import { useState, type FormEvent } from "react";
import { ContactSchema, type ContactFieldErrors } from "@/domain/contact";
import { Button } from "./Button";
import { FieldShell, TextInput, TextArea } from "./FormField";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const initialValues = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const update = (field: keyof typeof initialValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const honeypot = (formEl.elements.namedItem("hp") as HTMLInputElement)?.value ?? "";

    const parsed = ContactSchema.safeParse({ ...values, hp: honeypot });
    if (!parsed.success) {
      const fieldErrors: ContactFieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFieldErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus({ kind: "submitting" });
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (res.ok) {
        setStatus({ kind: "success" });
        setValues(initialValues);
        return;
      }

      if (res.status === 429) {
        setStatus({
          kind: "error",
          message: "You've sent a few in a row - please wait a moment and try again.",
        });
        return;
      }

      if (res.status === 400) {
        const data = (await res.json().catch(() => null)) as {
          errors?: ContactFieldErrors;
        } | null;
        if (data?.errors) {
          setErrors(data.errors);
          setStatus({ kind: "idle" });
          return;
        }
      }

      setStatus({
        kind: "error",
        message: "Something went wrong sending your message. Please try again.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Couldn't reach the server. Please check your connection and try again.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl p-8 text-center"
        style={{
          background: "var(--color-card)",
          border: "1px solid var(--color-line)",
        }}
      >
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
          style={{ background: "var(--brand-mint)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
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
        <h3 className="font-display text-2xl mb-2">Message received.</h3>
        <p style={{ color: "var(--color-muted)" }}>
          Thanks for getting in touch. We&apos;ll reply within a few working days.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-5 text-sm underline underline-offset-4"
          style={{ color: "var(--color-muted)" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status.kind === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <FieldShell label="Your name" htmlFor="name" error={errors.name}>
          <TextInput
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            invalid={!!errors.name}
            disabled={submitting}
          />
        </FieldShell>
        <FieldShell label="Email" htmlFor="email" error={errors.email}>
          <TextInput
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            invalid={!!errors.email}
            disabled={submitting}
          />
        </FieldShell>
      </div>

      <FieldShell label="Subject" htmlFor="subject" error={errors.subject}>
        <TextInput
          id="subject"
          name="subject"
          value={values.subject}
          onChange={update("subject")}
          invalid={!!errors.subject}
          disabled={submitting}
        />
      </FieldShell>

      <FieldShell
        label="Message"
        htmlFor="message"
        error={errors.message}
        hint={`${values.message.length} / 5000`}
      >
        <TextArea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={update("message")}
          invalid={!!errors.message}
          disabled={submitting}
        />
      </FieldShell>

      {/* Honeypot - visually hidden, off-screen rather than display:none */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="hp">Leave this field empty</label>
        <input id="hp" name="hp" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-center gap-4 mt-2">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Send message"}
          {!submitting && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          )}
        </Button>
        {status.kind === "error" && (
          <p className="text-sm" style={{ color: "var(--brand-coral)" }} role="alert">
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
