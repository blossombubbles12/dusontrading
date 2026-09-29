import type { Metadata } from "next";
import PrivacyPolicyView from "@/components/views/PrivacyPolicyView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("privacyPolicy");

export default function PrivacyPolicyPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Legal", path: "/privacy-policy" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PrivacyPolicyView />
    </>
  );
}