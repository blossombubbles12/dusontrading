import type { Metadata } from "next";
import NutmegView from "@/components/views/NutmegView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getProductSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("nutmeg");

export default function NutmegPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Commodities", path: "/commodities" },
    { name: "Indonesian Nutmeg & Mace", path: "/commodities/nutmeg" },
  ]);

  const productSchema = getProductSchema({
    name: "Indonesian Nutmeg & Mace (ABCD, Sound, BWP Grades)",
    description: "Export-grade Indonesian nutmeg (Myristica fragrans) and whole mace blades from Banda and Sulawesi. Moisture <10%, aflatoxin tested.",
    image: "/images/nutmeg-spices.jpg",
    sku: "DUSON-NUTMEG-ABCD",
    category: "Agricultural Food Commodities > Spices > Nutmeg",
    path: "/commodities/nutmeg",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, productSchema]} />
      <NutmegView />
    </>
  );
}