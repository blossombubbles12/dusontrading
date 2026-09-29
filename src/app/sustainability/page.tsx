import type { Metadata } from "next";
import SustainabilityView from "@/components/views/SustainabilityView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("sustainability");

export default function SustainabilityPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Company", path: "/about" },
    { name: "Sustainability", path: "/sustainability" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <SustainabilityView />
    </>
  );
}