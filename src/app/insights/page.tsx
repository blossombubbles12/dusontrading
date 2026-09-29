import type { Metadata } from "next";
import InsightsView from "@/components/views/InsightsView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("insights");

export default function InsightsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Trade Insights", path: "/insights" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <InsightsView />
    </>
  );
}