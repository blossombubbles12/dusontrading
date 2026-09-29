import type { Metadata } from "next";
import OliveOilsView from "@/components/views/OliveOilsView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getProductSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("oliveOils");

export default function OliveOilsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Commodities", path: "/commodities" },
    { name: "Virgin & Extra Virgin Olive Oils", path: "/commodities/olive-oils" },
  ]);

  const productSchema = getProductSchema({
    name: "Bulk Extra Virgin Olive Oil (Acidity <0.3% & <0.8%) & Pure Virgin",
    description: "Cold-pressed Mediterranean Extra Virgin Olive Oil in bulk ISO flexitanks (21,500L), 1000L IBC totes, and steel drums.",
    image: "/images/olive-oil.jpg",
    sku: "DUSON-EVOO-BULK",
    category: "Agricultural Food Commodities > Edible Oils > Olive Oil",
    path: "/commodities/olive-oils",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, productSchema]} />
      <OliveOilsView />
    </>
  );
}