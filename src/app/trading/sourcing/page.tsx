import type { Metadata } from "next";
import SourcingView from "@/components/views/SourcingView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("sourcing");

export default function SourcingPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Trading", path: "/trading" },
    { name: "Origin Sourcing", path: "/trading/sourcing" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Direct Agricultural Origin Sourcing & Farm Aggregation",
    description: "Direct procurement partnerships with 1,200+ partner farming families across Maluku, Sumatra, Java, and Sulawesi.",
    serviceType: "Agricultural Sourcing",
    path: "/trading/sourcing",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, serviceSchema]} />
      <SourcingView />
    </>
  );
}