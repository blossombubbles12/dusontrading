import type { Metadata } from "next";
import DownloadsView from "@/components/views/DownloadsView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("downloads");

export default function DownloadsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Documentation", path: "/downloads" },
    { name: "Technical Downloads", path: "/downloads" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <DownloadsView />
    </>
  );
}