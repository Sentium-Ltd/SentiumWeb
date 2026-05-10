import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://www.sentium.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
