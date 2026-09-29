import type { Metadata } from "next";
import QualityStandardsView from "@/components/views/QualityStandardsView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("qualityStandards");

export default function QualityStandardsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Trading", path: "/trading" },
    { name: "Quality & Standards", path: "/trading/quality-standards" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <QualityStandardsView />
    </>
  );
}