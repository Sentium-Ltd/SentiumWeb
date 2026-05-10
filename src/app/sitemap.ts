import type { MetadataRoute } from "next";
import { projects } from "@/domain/projects";

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
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.id}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
