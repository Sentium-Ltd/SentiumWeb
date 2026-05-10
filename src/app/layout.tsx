import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sentium.app"),
  title: {
    default: "Sentium - A studio for everyday software",
    template: "%s · Sentium",
  },
  description:
    "Sentium is a small, focused technology studio designing and building consumer apps across learning, wellbeing, travel, and personal finance. We plan, we build, we ship.",
  applicationName: "Sentium",
  keywords: [
    "Sentium",
    "consumer apps",
    "education apps",
    "kids apps",
    "wellbeing",
    "travel",
    "personal finance",
    "iOS apps",
    "Alfie Colouring",
    "Alfie Puzzles",
    "KidWise",
    "MakeMyCard",
  ],
  authors: [{ name: "Sentium Ltd" }],
  creator: "Sentium Ltd",
  openGraph: {
    type: "website",
    url: "https://sentium.app",
    title: "Sentium - A studio for everyday software",
    description:
      "We design and build consumer apps across learning, wellbeing, travel, and personal finance. We plan, we build, we ship.",
    siteName: "Sentium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentium",
    description: "A studio for everyday software.",
  },
  icons: {
    icon: [
      { url: "/branding/favicon.ico", sizes: "any" },
      { url: "/branding/symbol.svg", type: "image/svg+xml" },
    ],
    apple: "/branding/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1014" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
