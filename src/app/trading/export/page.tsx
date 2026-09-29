import type { Metadata } from "next";
import ExportView from "@/components/views/ExportView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("export");

export default function ExportPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Trading", path: "/trading" },
    { name: "Export Management", path: "/trading/export" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Export Compliance & Phytosanitary Quarantine Management",
    description: "Indonesian customs clearance, Certificate of Origin filings, and sovereign quarantine certificates.",
    serviceType: "Export Management",
    path: "/trading/export",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, serviceSchema]} />
      <ExportView />
    </>
  );
}