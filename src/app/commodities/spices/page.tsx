import type { Metadata } from "next";
import SpicesView from "@/components/views/SpicesView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getProductSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("spices");

export default function SpicesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Commodities", path: "/commodities" },
    { name: "Aromatic Spices & Pepper", path: "/commodities/spices" },
  ]);

  const productSchema = getProductSchema({
    name: "Indonesian Black Pepper (ASTA), Muntok White Pepper, Cloves & Cassia",
    description: "Steam-sterilized, density-sorted Indonesian whole spices for industrial food processors, spice grinders, and extractors.",
    image: "/images/nutmeg-spices.jpg",
    sku: "DUSON-SPICES-ASTA",
    category: "Agricultural Food Commodities > Spices > Pepper & Cloves",
    path: "/commodities/spices",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, productSchema]} />
      <SpicesView />
    </>
  );
}