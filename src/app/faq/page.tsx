import type { Metadata } from "next";
import FAQView from "@/components/views/FAQView";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = constructMetadata("faq");

export default function FAQPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Support", path: "/faq" },
    { name: "Frequently Asked Questions", path: "/faq" },
  ]);

  const faqs = [
    {
      question: "What international payment terms does DUSON accept for commodity export contracts?",
      answer: "We accept Irrevocable Letters of Credit (LC at Sight) confirmed by prime tier-1 international banks, as well as structured Telegraphic Transfer (TT) with advance deposit and balance upon Bill of Lading copy.",
    },
    {
      question: "What is the standard Minimum Order Quantity (MOQ) per commodity group?",
      answer: "Standard export MOQ is one 20-foot Full Container Load (FCL), approx. 14 to 16 Metric Tons for nutmeg and pepper, and approx. 21,500L in ISO Flexitanks for olive oils.",
    },
    {
      question: "Which official export and quality certificates accompany each dispatched container?",
      answer: "Indonesian Phytosanitary Certificate, Certificate of Origin (Form D, E, AK, ICO), SGS/Sucofindo COA, Fumigation Certificate, Halal MUI Certificate, and clean Ocean Bill of Lading.",
    },
    {
      question: "What Incoterms 2020 delivery options do you offer?",
      answer: "We contract under FOB (Port Tanjung Priok / Belawan), CFR, and CIF delivering to over 30+ international discharge ports worldwide.",
    },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbs, getFAQSchema(faqs)]} />
      <FAQView />
    </>
  );
}