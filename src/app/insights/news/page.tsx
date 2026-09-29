import type { Metadata } from "next";
import NewsView from "@/components/views/NewsView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("news");

export default function NewsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: "Corporate News", path: "/insights/news" },
  ]);

  const articleSchema = getArticleSchema({
    title: "Corporate News & Announcements | DUSON TRADING GROUP PT.",
    description: "Official company news, terminal capacity expansions, and international trade fair participation announcements.",
    path: "/insights/news",
    datePublished: "2026-09-15T08:00:00+07:00",
    authorName: "DUSON Corporate Communications",
    image: "/images/campaign-creators-gMsnXqILjp4-workers meeting conference.jpg",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, articleSchema]} />
      <NewsView />
    </>
  );
}