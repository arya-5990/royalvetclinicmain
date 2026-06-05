import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://royalvetindore.com";
  const currentDate = new Date();

  const routes = [
    { url: "", changeFrequency: "daily" as const, priority: 1.0 },
    { url: "/services", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/book", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/testimonials", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
    { url: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
