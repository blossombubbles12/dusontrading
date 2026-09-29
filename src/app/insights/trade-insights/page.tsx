import type { Metadata } from "next";
import TradeInsightsView from "@/components/views/TradeInsightsView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("tradeInsights");

export default function TradeInsightsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: "Olive Oil Harvest Briefing", path: "/insights/trade-insights" },
  ]);

  const articleSchema = getArticleSchema({
    title: "Mediterranean Olive Oil Harvest Yields & Bulk Flexitank Shipping Optimization",
    description: "Evaluating cold-pressed extra virgin availability and flexitank logistics for international buyers.",
    path: "/insights/trade-insights",
    datePublished: "2026-08-10T08:00:00+07:00",
    authorName: "DUSON Mediterranean Desk",
    image: "/images/olive-oil.jpg",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, articleSchema]} />
      <TradeInsightsView />
    </>
  );
}