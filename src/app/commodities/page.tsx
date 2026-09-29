import type { Metadata } from "next";
import CommoditiesView from "@/components/views/CommoditiesView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("commodities");

export default function CommoditiesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Commodities", path: "/commodities" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <CommoditiesView />
    </>
  );
}