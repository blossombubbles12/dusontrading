"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Award, ShieldCheck, FileText, CheckCircle2, Droplets, Layers, Anchor } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function OliveOilsView() {
  const { openQuoteModal } = useQuoteModal();

  const oilGrades = [
    {
      grade: "Extra Virgin Olive Oil (EVOO - Premium Ultra Low Acidity)",
      acidity: "Max 0.3% Free Fatty Acid",
      peroxide: "< 10 meq O2/kg",
      extraction: "First Cold-Pressed under 27°C within 12 hours of harvest",
      packaging: "Bulk Flexitank (21,500L), 1000L Food-Grade IBC Totes, 200L Steel Drums",
      tasteProfile: "Intense fruity aroma with green almond, fresh artichoke, and subtle peppery finish. Full IOC panel certified.",
      applications: "High-end retail bottling, premium culinary finishing oils, organic cosmetic formulations."
    },
    {
      grade: "Extra Virgin Olive Oil (EVOO - Standard Commercial)",
      acidity: "Max 0.8% Free Fatty Acid",
      peroxide: "< 15 meq O2/kg",
      extraction: "Mechanical Cold Extraction",
      packaging: "24,000L Flexitank containers, IBC Totes, Steel Drums",
      tasteProfile: "Balanced mild fruitiness, golden-yellow hue with green reflections.",
      applications: "Commercial foodservice, private label retail packing, gourmet food canning."
    },
    {
      grade: "Pure Virgin Olive Oil",
      acidity: "Max 1.5% - 2.0% Free Fatty Acid",
      peroxide: "< 20 meq O2/kg",
      extraction: "Mechanical Centrifugal Separation",
      packaging: "Bulk ISO Flexitanks & Steel Drums",
      tasteProfile: "Clean, light olive aroma, high smoke point stability.",
      applications: "Industrial food manufacturing, canned seafood processing (tuna & sardines), baking blends."
    },
    {
      grade: "Olive Pomace Oil (Refined Blend)",
      acidity: "Max 1.0% Free Fatty Acid",
      peroxide: "< 15 meq O2/kg",
      extraction: "Solvent Extraction & High-Vacuum Steam Refining",
      packaging: "Flexitanks & Commercial Drums",
      tasteProfile: "Neutral flavor, exceptional heat tolerance for high-temperature frying.",
      applications: "High-volume frying, snack food production, bakery fats."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
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
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Bulk Virgin & Extra Virgin <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Olive Oils</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                Directly sourced from certified Mediterranean cooperative mills. Supplied in high-volume food-grade flexitanks, 1000L IBC totes, and steel drums for international food processors, bottlers, and culinary brands.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button onClick={() => openQuoteModal("Olive Oils")} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Request Bulk Oil Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image src="/images/olive-oil.jpg" alt="Pure Extra Virgin Olive Oil" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59]">Certified IOC Standards</div>
                  <div className="font-serif text-base text-[#1A0614] dark:text-[#F9F6F0]">Full Organoleptic & Gas Chromatography Assay</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oil Specifications Cards */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Bulk Grade Classifications</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">Compliant with International Olive Council (IOC) and Codex Alimentarius standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {oilGrades.map(g => (
            <div key={g.grade} className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] block mb-1">Specification Profile</span>
                <h3 className="font-serif text-2xl font-medium">{g.grade}</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light leading-relaxed">{g.tasteProfile}</p>
              
              <div className="space-y-2 p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 text-xs">
                <div><strong className="text-[#1A0614] dark:text-[#F9F6F0]">Free Acidity:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">{g.acidity}</span></div>
                <div><strong className="text-[#1A0614] dark:text-[#F9F6F0]">Peroxide Value:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">{g.peroxide}</span></div>
                <div><strong className="text-[#1A0614] dark:text-[#F9F6F0]">Extraction Method:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">{g.extraction}</span></div>
                <div><strong className="text-[#1A0614] dark:text-[#F9F6F0]">Packaging:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">{g.packaging}</span></div>
                <div><strong className="text-[#1A0614] dark:text-[#F9F6F0]">Industrial Applications:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">{g.applications}</span></div>
              </div>

              <div className="pt-2 flex items-center justify-end border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15">
                <button onClick={() => openQuoteModal(g.grade)} className="px-5 py-2.5 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-wider hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-colors">
                  Inquire for Contract Pricing
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}