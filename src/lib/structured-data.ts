// JSON-LD generators for sentium.app structured data.
// Rendered as <script type="application/ld+json"> tags so search engines
// (Google, Bing) and AI crawlers (Perplexity, ChatGPT, Claude) can build
// a clean knowledge graph entry for the studio and its products.

import { projects } from "@/domain/projects";

const SITE_URL = "https://www.sentium.app";
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const SERVICE_ID = `${SITE_URL}/#service`;

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
      "A UK technology startup designing and shipping AI-native apps, agents, and automation. We work on our own products and partner with people who come to us with a real problem to solve.",
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
    slogan: "You ask. We plan. We build. We ship.",
    knowsAbout: [
      "AI-native software development",
      "Agentic AI systems",
      "Business process automation",
      "Azure cloud architecture",
      "Mobile app development",
      "iOS app development",
      "Consumer web applications",
      "Health and longevity software",
      "Children's education software",
      "Finance software",
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
      "Where AI becomes apps, agents, and automation. Sentium designs and ships AI-native software for real problems.",
    publisher: {
      "@id": ORG_ID,
    },
    inLanguage: "en-GB",
  };
}

const APPLICATION_CATEGORY: Record<string, string> = {
  "alfie-puzzles": "EducationalApplication",
  "alfie-colouring": "EducationalApplication",
  kidwise: "EducationalApplication",
  "bettr-now": "HealthApplication",
  treso: "FinanceApplication",
  makemycard: "LifestyleApplication",
};

export function projectSchemas(): SchemaThing[] {
  return projects.map((project) => {
    const isMobile = project.platform === "iOS";
    const type = isMobile ? "MobileApplication" : "WebApplication";
    const url = project.href || `${SITE_URL}/projects/${project.id}/`;

    const schema: SchemaThing = {
      "@context": "https://schema.org",
      "@type": type,
      name: project.name,
      url,
      description: `${project.tagline} ${project.description}`,
      applicationCategory: APPLICATION_CATEGORY[project.id] ?? "LifestyleApplication",
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability:
          project.status === "live"
            ? "https://schema.org/InStock"
            : "https://schema.org/PreOrder",
      },
    };
    if (isMobile) schema.operatingSystem = "iOS";
    return schema;
  });
}

export function serviceSchema(): SchemaThing {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": SERVICE_ID,
    name: "AI-native software: apps, agents, and automation",
    description:
      "End-to-end AI-native software development - product strategy, design, engineering, and launch. From consumer apps to agentic systems to enterprise automation. Azure-native by default, cloud-agnostic by capability.",
    provider: { "@id": ORG_ID },
    serviceType: [
      "AI-native application development",
      "Agentic AI systems",
      "Business process automation",
      "Mobile app development",
      "iOS app development",
      "Web app development",
      "Azure cloud architecture",
      "Product strategy",
    ],
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: {
      "@type": "Audience",
      audienceType: "Founders, product teams, and partners",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "GBP",
        description: "Bespoke - scoped per project",
      },
    },
  };
}

export function structuredDataPayload() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      serviceSchema(),
      ...projectSchemas(),
    ],
  };
}
