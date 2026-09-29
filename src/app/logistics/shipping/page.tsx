import type { Metadata } from "next";
import ShippingView from "@/components/views/ShippingView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("shipping");

export default function ShippingPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Logistics", path: "/logistics" },
    { name: "Ocean Shipping", path: "/logistics/shipping" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Ocean Container Shipping & Maritime Corridors",
    description: "Direct ocean liner bookings (20ft FCL, 40ft FCL, Reefer) to Northern Europe, Mediterranean, Middle East, and Asia.",
    serviceType: "Ocean Freight",
    path: "/logistics/shipping",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, serviceSchema]} />
      <ShippingView />
    </>
  );
}