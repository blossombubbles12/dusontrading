import type { Metadata } from "next";
import HomeView from "@/components/views/HomeView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("home");

export default function HomePage() {
  const schemas = [getOrganizationSchema(), getWebsiteSchema()];
  return (
    <>
      <JsonLd data={schemas} />
      <HomeView />
    </>
  );
}