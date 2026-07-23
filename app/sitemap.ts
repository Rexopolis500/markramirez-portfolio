import type { MetadataRoute } from "next";
import { projects } from "./lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mark-ramirez-dev.rexopolis500.chatgpt.site";
  return [
    { url: base, priority: 1 },
    { url: `${base}/architecture`, priority: 0.8 },
    { url: `${base}/about`, priority: 0.7 },
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      priority: 0.9,
    })),
  ];
}
