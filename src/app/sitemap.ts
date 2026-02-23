export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { artPieces } from "@/data/art";

const BASE_URL = "https://sabrinafeld.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/art`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const artRoutes: MetadataRoute.Sitemap = artPieces.map((p) => ({
    url: `${BASE_URL}/art/${p.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...artRoutes];
}
