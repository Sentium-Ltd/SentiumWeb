import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("That doesn't look like a valid email address.")
    .max(120, "Email must be 120 characters or fewer."),
  subject: z
    .string()
    .trim()
    .min(2, "Please add a subject.")
    .max(120, "Subject must be 120 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(10, "Please write a slightly longer message (at least 10 characters).")
    .max(5000, "Message must be 5000 characters or fewer."),
  hp: z.string().optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>;
