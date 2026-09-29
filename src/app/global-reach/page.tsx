import type { Metadata } from "next";
import GlobalReachView from "@/components/views/GlobalReachView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("globalReach");

export default function GlobalReachPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Company", path: "/about" },
    { name: "Global Reach", path: "/global-reach" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <GlobalReachView />
    </>
  );
}