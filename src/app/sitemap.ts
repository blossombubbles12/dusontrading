import { MetadataRoute } from "next";
import { SITE_CONFIG, PAGES_SEO } from "@/lib/seo/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Route priorities and frequencies
  const getPriorityAndFrequency = (path: string): { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] } => {
    if (path === "/") return { priority: 1.0, changeFrequency: "daily" };
    if (path.startsWith("/commodities")) return { priority: 0.9, changeFrequency: "weekly" };
    if (path.startsWith("/trading") || path.startsWith("/logistics")) return { priority: 0.8, changeFrequency: "weekly" };
    if (path.startsWith("/insights")) return { priority: 0.8, changeFrequency: "weekly" };
    if (path === "/about" || path.startsWith("/our-") || path === "/global-reach" || path === "/sustainability") {
      return { priority: 0.85, changeFrequency: "monthly" };
    }
    if (path === "/contact" || path === "/faq" || path === "/downloads") {
      return { priority: 0.75, changeFrequency: "monthly" };
    }
    return { priority: 0.5, changeFrequency: "yearly" };
  };

  return Object.values(PAGES_SEO).map((page) => {
    const { priority, changeFrequency } = getPriorityAndFrequency(page.path);
    return {
      url: `${SITE_CONFIG.url}${page.path === "/" ? "" : page.path}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });
}