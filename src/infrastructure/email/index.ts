// Server-only Resend wrapper. Imported by the Azure Function in /api,
// never by UI code (the static export does not bundle this module).
//
// Kept here as a placeholder for type sharing — the Function itself
// instantiates Resend directly with its own dependency tree under /api.

export interface ContactEmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const formatContactEmailBody = (payload: ContactEmailPayload): string =>
  [
    `From: ${payload.name} <${payload.email}>`,
    "",
    `Subject: ${payload.subject}`,
    "",
    "Message:",
    payload.message,
    "",
    "—",
    "Sent via the contact form on sentium.app",
  ].join("\n");
