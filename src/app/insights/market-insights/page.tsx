import type { Metadata } from "next";
import MarketInsightsView from "@/components/views/MarketInsightsView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("marketInsights");

export default function MarketInsightsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: "Maritime Freight Analysis", path: "/insights/market-insights" },
  ]);

  const articleSchema = getArticleSchema({
    title: "Navigating Southeast Asian Maritime Freight Fluctuations",
    description: "How container carrier consolidation and port automation at Tanjung Priok impact transit times.",
    path: "/insights/market-insights",
    datePublished: "2026-08-15T08:00:00+07:00",
    authorName: "DUSON Global Logistics Desk",
    image: "/images/logistics-bg.jpg",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, articleSchema]} />
      <MarketInsightsView />
    </>
  );
}