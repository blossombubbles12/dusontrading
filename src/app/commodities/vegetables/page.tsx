import type { Metadata } from "next";
import VegetablesView from "@/components/views/VegetablesView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getProductSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("vegetables");

export default function VegetablesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Commodities", path: "/commodities" },
    { name: "Commercial Vegetables", path: "/commodities/vegetables" },
  ]);

  const productSchema = getProductSchema({
    name: "Export-Grade Commercial Vegetables (Shallots, Fresh Ginger, Highland Produce)",
    description: "Cold-chain managed Indonesian shallots (Bima Brebes), ginger (Jahe Gajah), cabbage, and chili peppers.",
    image: "/images/vegetables.jpg",
    sku: "DUSON-VEG-EXPORT",
    category: "Agricultural Food Commodities > Fresh Produce",
    path: "/commodities/vegetables",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, productSchema]} />
      <VegetablesView />
    </>
  );
}