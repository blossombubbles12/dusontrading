import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getOrganizationSchema, getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("about");

export default function AboutPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Company", path: "/about" },
    { name: "About DUSON", path: "/about" },
  ]);

  return (
    <>
      <JsonLd data={[getOrganizationSchema(), breadcrumbs]} />
      <AboutView />
    </>
  );
}