import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("contact");

export default function ContactPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact Desk", path: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={[getOrganizationSchema(), breadcrumbs]} />
      <ContactView />
    </>
  );
}