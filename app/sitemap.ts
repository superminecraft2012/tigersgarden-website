import type { MetadataRoute } from "next";
import { canonical } from "@/lib/seo";
import { menu } from "@/lib/menu";
import { dishes } from "@/lib/dishes";

/**
 * Generated, never hand-maintained — a hand-written sitemap drifts the moment
 * a dish is added. Every entry derives from the same constants the pages
 * render from, so a new dish in lib/menu.ts appears here automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/menu", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/dishes", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/order-online", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/lao-food-vancouver-wa",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/catering", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: canonical(r.path),
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...dishes.map((d) => ({
      url: canonical(`/dishes/${d.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...menu.map((m) => ({
      url: canonical(`/menu/${m.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
