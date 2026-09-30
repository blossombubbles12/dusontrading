"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Award,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Droplets,
  Layers,
  Anchor,
  HelpCircle,
  Box,
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function OliveOilsView() {
  const { openQuoteModal } = useQuoteModal();
  const [activeOilTab, setActiveOilTab] = useState("evoo-ultra");

  const oilGrades = [
    {
      id: "evoo-ultra",
      grade: "Extra Virgin Olive Oil (EVOO – Ultra Low Acidity)",
      acidity: "Max 0.3% Free Fatty Acid (as Oleic Acid)",
      peroxide: "< 10 meq O2 / kg",
      extraction: "First Cold-Pressed under 27°C within 12 hours of harvest",
      packaging: "Bulk Flexitank (21,500L), 1,000L Food-Grade IBC Totes, 200L Steel Drums",
      tasteProfile: "Intense fruity aroma with green almond, fresh artichoke, and subtle peppery finish. Full IOC panel certified.",
      applications: "High-end retail bottling, premium culinary finishing oils, organic cosmetic & pharmaceutical formulations.",
    },
    {
      id: "evoo-std",
      grade: "Extra Virgin Olive Oil (EVOO – Standard Commercial)",
      acidity: "Max 0.8% Free Fatty Acid (as Oleic Acid)",
      peroxide: "< 15 meq O2 / kg",
      extraction: "Mechanical Cold Extraction",
      packaging: "21,500L Flexitank containers, IBC Totes, Steel Drums",
      tasteProfile: "Balanced mild fruitiness, golden-yellow hue with green reflections.",
      applications: "Commercial foodservice, private label retail packing, gourmet food canning (tuna, sardines, antipasti).",
    },
    {
      id: "virgin",
      grade: "Pure Virgin Olive Oil",
      acidity: "Max 1.5% – 2.0% Free Fatty Acid",
      peroxide: "< 20 meq O2 / kg",
      extraction: "Mechanical Centrifugal Separation",
      packaging: "Bulk ISO Flexitanks & Steel Drums",
      tasteProfile: "Clean, light olive aroma, high heat & smoke point stability.",
      applications: "Industrial food manufacturing, canned seafood processing, bakery fat blends.",
    },
    {
      id: "pomace",
      grade: "Olive Pomace Oil (Refined Blend)",
      acidity: "Max 1.0% Free Fatty Acid",
      peroxide: "< 15 meq O2 / kg",
      extraction: "Solvent Extraction & High-Vacuum Steam Refining",
      packaging: "Flexitanks & Commercial Drums",
      tasteProfile: "Neutral flavor, exceptional heat tolerance for high-temperature commercial frying.",
      applications: "High-volume commercial frying, snack food production, industrial bakery fats.",
    },
  ];

  const flexitankSpecs = [
    { title: "Flexitank Payload", desc: "21,500 Liters (~20 Metric Tons) per 20ft ocean container." },
    { title: "Material Safety", desc: "Single-trip food-grade 4-ply Polyethylene (PE) with EVOH oxygen barrier liner." },
    { title: "Temperature Management", desc: "Bottom-discharge heating pads available for smooth unloading at cold discharge ports." },
    { title: "Quality Certification", desc: "COA, IOC Organoleptic Panel, and Gas Chromatography (ECN42) report per batch." },
  ];

  const faqs = [
    {
      q: "How are bulk olive oil flexitanks loaded and unloaded at the port?",
      a: "Our bulk flexitanks are installed inside standard 20ft dry ocean containers lined with protective corrugated board. Oils are pumped directly from cooperative tanks at 20-25°C. Unloading is achieved via bottom-valve gravity or food-grade positive displacement pumps within 2 hours.",
    },
    {
      q: "Does DUSON provide full chemical and organoleptic laboratory test reports?",
      a: "Yes. Every bulk flexitank or IBC shipment includes a comprehensive Certificate of Analysis (COA) detailing Free Fatty Acids (FFA), Peroxide Value, UV Absorbance (K232, K270, Delta K), Fatty Acid Profile (Gas Chromatography), and IOC sensory panel evaluation.",
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
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Olive Oils</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Droplets className="w-4 h-4" />
                <span>Cold-Pressed Mediterranean Harvest</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Bulk Virgin & Extra Virgin <span className="text-[#7f1b59] dark:text-[#B52F81]">Olive Oils</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                Directly sourced from certified Mediterranean cooperative mills. Supplied in high-volume food-grade flexitanks, 1,000L IBC totes, and steel drums for international food processors, bottlers, and culinary brands.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => openQuoteModal("Bulk Olive Oils")}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#7f1b59] hover:bg-[#9c2870] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xl"
                >
                  <span>Request Bulk Oil Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image
                  src="/images/olive-oil.jpg"
                  alt="Pure Extra Virgin Olive Oil"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0209]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0D0209]/80 backdrop-blur-md border border-[#B52F81]/30 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#F294CE]">Certified IOC Standards</div>
                  <div className="font-serif text-base font-bold text-white">Full Organoleptic & Gas Chromatography Assay</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GRADE CLASSIFICATION INTERACTIVE MATRIX */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
            Bulk Grade Classifications
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold">Select Olive Oil Grade</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {oilGrades.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveOilTab(g.id)}
              className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeOilTab === g.id
                  ? "bg-[#7f1b59] text-white dark:bg-[#B52F81] dark:text-[#0D0209] shadow-lg"
                  : "bg-[#F8EDF4] dark:bg-[#220819] text-[#5C3D52] dark:text-[#DFC8D6]"
              }`}
            >
              {g.id === "evoo-ultra" ? "EVOO Ultra (<0.3%)" : g.id === "evoo-std" ? "EVOO Std (<0.8%)" : g.id === "virgin" ? "Virgin Oil" : "Pomace Oil"}
            </button>
          ))}
        </div>

        {oilGrades.map(
          (g) =>
            g.id === activeOilTab && (
              <div
                key={g.id}
                className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/25 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7f1b59]/10 text-[#7f1b59] dark:bg-[#B52F81]/20 dark:text-[#F294CE] text-[11px] font-extrabold uppercase tracking-wider">
                    {g.acidity}
                  </div>
                  <h3 className="font-serif text-3xl font-extrabold">{g.grade}</h3>
                  <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/90 font-normal leading-relaxed">
                    {g.tasteProfile}
                  </p>

                  <div className="space-y-2 p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 text-xs">
                    <div><strong className="text-[#1A0614] dark:text-[#F9F6F0]">Peroxide Value:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/80">{g.peroxide}</span></div>
                    <div><strong className="text-[#1A0614] dark:text-[#F9F6F0]">Extraction Method:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/80">{g.extraction}</span></div>
                    <div><strong className="text-[#1A0614] dark:text-[#F9F6F0]">Bulk Packaging Options:</strong> <span className="text-[#7f1b59] dark:text-[#B52F81] font-semibold">{g.packaging}</span></div>
                    <div><strong className="text-[#1A0614] dark:text-[#F9F6F0]">Industrial Applications:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/80">{g.applications}</span></div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center space-y-4 p-6 rounded-2xl bg-[#F8EDF4]/60 dark:bg-[#15040F] border border-[#7f1b59]/15 text-center">
                  <span className="text-xs uppercase tracking-widest text-[#7f1b59] dark:text-[#B52F81] font-bold">
                    Flexitank & IBC Freight
                  </span>
                  <div className="text-sm font-bold text-[#1A0614] dark:text-[#F9F6F0]">
                    21,500L Single-Trip Flexitanks
                  </div>
                  <button
                    onClick={() => openQuoteModal(g.grade)}
                    className="w-full py-3 rounded-full bg-[#7f1b59] hover:bg-[#9c2870] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    Quote For {g.grade.split("(")[0]}
                  </button>
                </div>
              </div>
            )
        )}
      </section>

      {/* FLEXITANK FREIGHT SPECIFICATIONS */}
      <section className="py-20 bg-[#F8EDF4]/60 dark:bg-[#15040F]/60 border-y border-[#7f1b59]/15 dark:border-[#B52F81]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
              Bulk Liquid Logistics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold">Flexitank & Ocean Freight Standards</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flexitankSpecs.map((f, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#7f1b59] dark:text-[#B52F81]">{f.title}</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="py-20 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
            Olive Oil FAQ
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
          <h3 className="font-serif text-3xl font-extrabold">Request Bulk Olive Oil Contract Pricing</h3>
          <button
            onClick={() => openQuoteModal("Bulk Olive Oils Flexitank")}
            className="px-8 py-4 rounded-full bg-white text-[#1A0614] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F9F6F0] transition-all shadow-lg"
          >
            Inquire For Olive Oil Pricing
          </button>
        </div>
      </section>

    </div>
  );
}