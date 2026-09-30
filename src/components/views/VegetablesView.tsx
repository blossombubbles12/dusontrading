"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Award,
  FileText,
  CheckCircle2,
  Thermometer,
  Wind,
  Truck,
  HelpCircle,
  Globe2,
  Box,
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function VegetablesView() {
  const { openQuoteModal } = useQuoteModal();

  const produceItems = [
    {
      name: "Fresh Indonesian Shallots (Bawang Merah Bima)",
      region: "Brebes & Probolinggo, Java",
      specs: "Diameter 2.5 – 3.5 cm, dry outer skin, deep violet red, moisture <14%",
      shelfLife: "60 – 90 days in ventilated cold storage (0–4°C, 65–70% RH)",
      packing: "10kg / 20kg red mesh master export bags",
      desc: "Distinctive intense aromatic pungency preferred across Southeast Asian culinary markets. Naturally cured, root-trimmed, and density cleaned.",
    },
    {
      name: "Export-Grade Fresh Ginger (Jahe Gajah & Jahe Emprit)",
      region: "Highland Wonosobo & North Sumatra",
      specs: "150g – 350g+ hand size, fresh washed/air-dried, skin intact, zero soft rot",
      shelfLife: "45 – 60 days in temperature-controlled reefer (12–14°C, 85% RH)",
      packing: "10kg / 13.6kg PVC ventilated export crates or cardboard cartons",
      desc: "Plump, fibrous, high-gingerol rhizomes suitable for fresh produce retailers, commercial juice processing, and culinary distribution.",
    },
    {
      name: "Highland Fresh Cabbage & Carrots",
      region: "Berastagi Plateau, North Sumatra",
      specs: "Cabbage 1.2 – 2.5 kg/head, compact tight leaf; Carrots 15–20cm, washed, uncurved",
      shelfLife: "30 – 45 days in reefer storage (0–2°C, 95% RH)",
      packing: "10kg / 15kg mesh bags or export cartons",
      desc: "Cultivated in fertile volcanic loam soils above 1,200m altitude. Pre-cooled within 4 hours of harvest to lock in crisp natural texture.",
    },
    {
      name: "Fresh Chili Peppers (Bird’s Eye & Large Red)",
      region: "East Java Highland Clusters",
      specs: "Length 3–5cm (Bird's eye) / 12–15cm (Large red), bright uniform color, calyx intact",
      shelfLife: "21 – 28 days in active cold-chain (7–10°C, 90% RH)",
      packing: "5kg / 10kg ventilated carton boxes with absorbent pads",
      desc: "Rigidly sorted for color uniformity, firmness, and absence of physical blemishes. Available for rapid air cargo or ocean reefer dispatch.",
    },
    {
      name: "Fresh Turmeric & Galangal Rhizomes (Kunyit & Lengkuas)",
      region: "Central & East Java Agricultural Valleys",
      specs: "Finger length > 8cm, intense deep orange interior (turmeric) / pinkish-white (galangal)",
      shelfLife: "45 – 60 days in reefer (10–12°C, 80% RH)",
      packing: "10kg / 20kg mesh bags or ventilated wooden crates",
      desc: "High curcuminoid content turmeric and aromatic galangal rhizomes harvested for spice grinding, dietary supplements, and Asian culinary distribution.",
    },
  ];

  const coldChainSteps = [
    { step: "01", title: "Highland Volcanic Harvest", desc: "Harvested early morning at altitudes > 1,200m to minimize field heat absorption." },
    { step: "02", title: "Hydro-Cooling & Washing", desc: "Washed in sanitized water baths and hydro-cooled to 4°C within 4 hours of harvest." },
    { step: "03", title: "Grading & Curing", desc: "Sizing sorting, removal of outer damaged leaves, and natural curing for outer skin protection." },
    { step: "04", title: "Reefer Ocean Freight", desc: "Dispatched in active 20ft/40ft Reefer containers with continuous temperature & humidity telemetry." },
  ];

  const faqs = [
    {
      q: "How does DUSON prevent spoilage and soft rot during fresh produce ocean transit?",
      a: "Our fresh produce undergoes rapid hydro-cooling immediately after harvest to strip field heat. Containers are set to precise temperature and humidity regimes (e.g. 12-14°C for ginger, 0-4°C for shallots) with active air exchange (fresh air vent setting 25 m3/h) to prevent moisture buildup.",
    },
    {
      q: "What certifications are provided for fresh vegetable export orders?",
      a: "All fresh produce shipments include an official Phytosanitary Certificate issued by the Indonesian Agricultural Quarantine Agency (IAQA), Certificate of Origin (Form E/Form D), and Global GAP farm compliance documentation.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10 bg-gradient-to-b from-[#F8EDF4]/60 to-transparent dark:from-[#15040F]/60 dark:to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/commodities" className="hover:underline">Commodities</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Fresh Produce</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Thermometer className="w-4 h-4" />
                <span>Cold-Chain Managed Produce</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Export-Grade Commercial <span className="text-[#7f1b59] dark:text-[#B52F81]">Produce & Vegetables</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                Cultivated across Indonesia&apos;s volcanic highland plateaus. Pre-cooled, graded to international phytosanitary standards, and dispatched in refrigerated ocean containers and air cargo.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => openQuoteModal("Fresh Vegetables")}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#7f1b59] hover:bg-[#9c2870] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xl"
                >
                  <span>Inquire for Produce Contracts</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image
                  src="/images/vegetables.jpg"
                  alt="Commercial Agricultural Vegetables"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0209]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0D0209]/80 backdrop-blur-md border border-[#B52F81]/30 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#F294CE]">Highland Volcanic Harvests</div>
                  <div className="font-serif text-base font-bold text-white">Hydro-Cooled & Reefer Monitored</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CATALOG GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
            Export Produce Catalog
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold">Fresh Crop Classifications & Specifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {produceItems.map((p) => (
            <div
              key={p.name}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-md flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] block mb-1">
                    Region: {p.region}
                  </span>
                  <h3 className="font-serif text-2xl font-extrabold">{p.name}</h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">
                  {p.desc}
                </p>

                <div className="space-y-2 p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 text-xs">
                  <div>
                    <strong className="text-[#1A0614] dark:text-[#F9F6F0]">Grading Specs:</strong>{" "}
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/80">{p.specs}</span>
                  </div>
                  <div>
                    <strong className="text-[#1A0614] dark:text-[#F9F6F0]">Storage Regime:</strong>{" "}
                    <span className="text-[#7f1b59] dark:text-[#B52F81] font-semibold">{p.shelfLife}</span>
                  </div>
                  <div>
                    <strong className="text-[#1A0614] dark:text-[#F9F6F0]">Packaging:</strong>{" "}
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/80">{p.packing}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15">
                <button
                  onClick={() => openQuoteModal(p.name)}
                  className="px-5 py-2.5 rounded-full bg-[#7f1b59] hover:bg-[#9c2870] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  Request Produce Pricing
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLD CHAIN WORKFLOW */}
      <section className="py-20 bg-[#F8EDF4]/60 dark:bg-[#15040F]/60 border-y border-[#7f1b59]/15 dark:border-[#B52F81]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
              Cold-Chain Technology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold">Post-Harvest Freshness Preservation</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coldChainSteps.map((c) => (
              <div key={c.step} className="p-6 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3 shadow-sm">
                <div className="font-serif text-3xl font-extrabold text-[#7f1b59] dark:text-[#B52F81]">{c.step}</div>
                <h3 className="font-serif text-lg font-bold">{c.title}</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="py-20 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
            Fresh Produce FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#7f1b59] dark:text-[#B52F81] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 shrink-0" />
                <span>{f.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/90 font-normal leading-relaxed pl-7">
                {f.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#7f1b59] text-white text-center space-y-6 shadow-2xl">
          <h3 className="font-serif text-3xl font-extrabold">Request Fresh Produce Quotation & Reefer Schedules</h3>
          <button
            onClick={() => openQuoteModal("Fresh Produce Contract")}
            className="px-8 py-4 rounded-full bg-white text-[#1A0614] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F9F6F0] transition-all shadow-lg"
          >
            Inquire For Produce Pricing
          </button>
        </div>
      </section>

    </div>
  );
}