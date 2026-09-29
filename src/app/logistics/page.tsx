import type { Metadata } from "next";
import LogisticsView from "@/components/views/LogisticsView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("logistics");

export default function LogisticsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Logistics", path: "/logistics" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "International Maritime Freight & Logistics",
    description: "Multimodal ocean container freight, port operations at Tanjung Priok, and temperature-controlled supply chains.",
    serviceType: "Freight & Logistics",
    path: "/logistics",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, serviceSchema]} />
      <LogisticsView />
    </>
  );
}