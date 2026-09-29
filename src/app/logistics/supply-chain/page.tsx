import type { Metadata } from "next";
import SupplyChainView from "@/components/views/SupplyChainView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("supplyChain");

export default function SupplyChainPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Logistics", path: "/logistics" },
    { name: "Cold-Chain Supply Architecture", path: "/logistics/supply-chain" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "End-to-End Cold-Chain Temperature Architecture",
    description: "Active temperature management for perishable produce and moisture-sensitive agricultural commodities.",
    serviceType: "Cold-Chain Management",
    path: "/logistics/supply-chain",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, serviceSchema]} />
      <SupplyChainView />
    </>
  );
}