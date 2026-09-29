import type { Metadata } from "next";
import CommodityInsightsView from "@/components/views/CommodityInsightsView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("commodityInsights");

export default function CommodityInsightsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: "Nutmeg Crop Outlook 2026", path: "/insights/commodity-insights" },
  ]);

  const articleSchema = getArticleSchema({
    title: "Indonesian Nutmeg Crop Outlook & Global Export Trends",
    description: "Analysis of seasonal yields across North Maluku, volatile oil synthesis, and shifting European import regulations.",
    path: "/insights/commodity-insights",
    datePublished: "2026-09-01T08:00:00+07:00",
    authorName: "DUSON Agronomy Desk",
    image: "/images/nutmeg-spices.jpg",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, articleSchema]} />
      <CommodityInsightsView />
    </>
  );
}