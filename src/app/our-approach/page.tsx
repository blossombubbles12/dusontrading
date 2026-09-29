import type { Metadata } from "next";
import OurApproachView from "@/components/views/OurApproachView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("ourApproach");

export default function OurApproachPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Company", path: "/about" },
    { name: "Our Approach", path: "/our-approach" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <OurApproachView />
    </>
  );
}