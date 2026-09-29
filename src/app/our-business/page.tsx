import type { Metadata } from "next";
import OurBusinessView from "@/components/views/OurBusinessView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("ourBusiness");

export default function OurBusinessPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Company", path: "/about" },
    { name: "Our Business", path: "/our-business" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Integrated Agricultural Commodity Trading & Logistics",
    description: "End-to-end commodity procurement, quality assay, ocean freight, and trade finance.",
    serviceType: "Commodity Trading & Logistics",
    path: "/our-business",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, serviceSchema]} />
      <OurBusinessView />
    </>
  );
}