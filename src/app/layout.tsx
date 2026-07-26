import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import { StructuredData } from "@/ui/components/StructuredData";
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

const SITE_URL = "https://www.sentium.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sentium - Where AI becomes apps, agents, and automation",
    template: "%s · Sentium",
  },
  description:
    "Sentium is a UK technology startup designing and shipping AI-native apps, agents, and automation. We turn real problems into shipped software. You ask, we plan, we build, we ship.",
  applicationName: "Sentium",
  keywords: [
    "Sentium",
    "Sentium Ltd",
    "AI native",
    "AI agents",
    "AI automation",
    "consumer apps",
    "Azure",
    "education apps",
    "health apps",
    "finance apps",
    "iOS apps",
    "bettr.now",
    "Alfie Colouring",
    "Alfie Puzzles",
    "KidWise",
    "MakeMyCard",
    "Treso",
  ],
  authors: [{ name: "Sentium Ltd", url: SITE_URL }],
  creator: "Sentium Ltd",
  publisher: "Sentium Ltd",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Sentium - Where AI becomes apps, agents, and automation",
    description:
      "We design, build, and ship AI-native apps, agents, and automation. Our goal is to fix real life problems. You ask, we plan, we build, we ship.",
    siteName: "Sentium",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sentium - A studio for everyday software. We plan. We build. We ship.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentium - A studio for everyday software",
    description: "You ask. We plan. We build. We ship.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/branding/favicon.ico", sizes: "any" },
      { url: "/branding/symbol.svg", type: "image/svg+xml" },
    ],
    apple: "/branding/apple-touch-icon.png",
  },
  // Replace the empty strings below with verification tokens once obtained:
  //   Google: https://search.google.com/search-console
  //   Bing:   https://www.bing.com/webmasters
  verification: {
    google: "",
    other: {
      "msvalidate.01": "",
    },
  },
  category: "technology",
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
    <html lang="en-GB">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <StructuredData />
        {children}
        <Script
          id="cf-web-analytics"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "be9e72bff2ce4d2094c2d7242dd927c8"}'
        />
      </body>
    </html>
  );
}
