// JSON-LD generators for sentium.app structured data.
// Rendered as <script type="application/ld+json"> tags so search engines
// (Google, Bing) and AI crawlers (Perplexity, ChatGPT, Claude) can build
// a clean knowledge graph entry for the studio and its products.

import { projects } from "@/domain/projects";

const SITE_URL = "https://www.sentium.app";
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

interface SchemaThing {
  "@context"?: string | string[];
  "@type": string | string[];
  "@id"?: string;
  [key: string]: unknown;
}

export function organizationSchema(): SchemaThing {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Sentium Ltd",
    alternateName: "Sentium",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/branding/symbol.svg`,
    },
    description:
      "A small, focused technology studio designing and building consumer apps across learning, wellbeing, travel, and personal finance.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
        addressRegion: "England",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "England",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "support@sentium.app",
        contactType: "customer support",
        areaServed: "GB",
        availableLanguage: ["English"],
      },
    ],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Companies House",
      value: "16512683",
    },
    legalName: "Sentium Ltd",
    slogan: "We plan. We build. We ship.",
    knowsAbout: [
      "Mobile app development",
      "iOS app development",
      "Children's education software",
      "Personal finance software",
      "Wellbeing apps",
      "Travel software",
    ],
    sameAs: [
      "https://github.com/Sentium-Ltd",
      // Add LinkedIn, Crunchbase, etc. once they exist
    ],
  };
}

export function websiteSchema(): SchemaThing {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE_URL,
    name: "Sentium",
    description:
      "A studio for everyday software. We design and build consumer apps across learning, wellbeing, travel, and personal finance.",
    publisher: {
      "@id": ORG_ID,
    },
    inLanguage: "en-GB",
  };
}

function projectSchemaType(href: string): string {
  return href.includes("apps.apple.com") ? "MobileApplication" : "WebApplication";
}

function projectOperatingSystem(href: string): string | undefined {
  if (href.includes("apps.apple.com")) return "iOS";
  return undefined;
}

export function projectSchemas(): SchemaThing[] {
  return projects.map((project) => {
    const type = projectSchemaType(project.href);
    const os = projectOperatingSystem(project.href);
    const schema: SchemaThing = {
      "@context": "https://schema.org",
      "@type": type,
      name: project.name,
      url: project.href,
      description: `${project.tagline} ${project.description}`,
      applicationCategory:
        project.id.startsWith("alfie") || project.id === "kidwise"
          ? "EducationalApplication"
          : "LifestyleApplication",
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    };
    if (os) schema.operatingSystem = os;
    return schema;
  });
}

export function structuredDataPayload() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      ...projectSchemas(),
    ],
  };
}
