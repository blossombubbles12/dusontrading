import type { Metadata } from "next";
import TransportationView from "@/components/views/TransportationView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("transportation");

export default function TransportationPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Logistics", path: "/logistics" },
    { name: "Transportation", path: "/logistics/transportation" },
  ]);

  const serviceSchema = getServiceSchema({
    name: "Inland Heavy Haulage & Port Drayage Fleet",
    description: "GPS-monitored fleet connecting Indonesian farm clusters with export terminal bonded warehouses.",
    serviceType: "Inland Transportation",
    path: "/logistics/transportation",
  });

  return (
    <>
      <JsonLd data={[breadcrumbs, serviceSchema]} />
      <TransportationView />
    </>
  );
}