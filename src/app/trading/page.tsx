import type { Metadata } from "next";
import TradingView from "@/components/views/TradingView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("trading");

export default function TradingPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Trading", path: "/trading" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "International B2B Commodity Trading Desk",
    description: "Transparent trade execution, structured commodity supply contracts, and risk management.",
    serviceType: "Commodity Trading",
    path: "/trading",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, serviceSchema]} />
      <TradingView />
    </>
  );
}