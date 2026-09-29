import type { Metadata } from "next";
import TermsView from "@/components/views/TermsView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("termsAndConditions");

export default function TermsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Legal", path: "/terms-and-conditions" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <TermsView />
    </>
  );
}