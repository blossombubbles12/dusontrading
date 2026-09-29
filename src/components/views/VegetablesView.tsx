"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, ShieldCheck, Award, FileText, CheckCircle2, Thermometer, Wind, Truck } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function VegetablesView() {
  const { openQuoteModal } = useQuoteModal();

  const produceItems = [
    {
      name: "Fresh Indonesian Shallots (Bawang Merah Bima)",
      region: "Brebes & Probolinggo, Java",
      specs: "Diameter 2.5 - 3.5 cm, dry outer skin, deep violet red, moisture <14%",
      shelfLife: "60 - 90 days in ventilated cold storage (0-4°C, 65-70% RH)",
      packing: "10kg / 20kg red mesh master bags",
      desc: "Distinctive intense aromatic pungency preferred across Southeast Asian culinary markets. Naturally cured and cleaned."
    },
    {
      name: "Export-Grade Ginger (Jahe Gajah & Jahe Emprit)",
      region: "Highland Wonosobo & North Sumatra",
      specs: "150g - 350g+ hand size, fresh washed/air-dried, skin intact, zero soft rot",
      shelfLife: "45 - 60 days in temperature-controlled reefer (12-14°C, 85% RH)",
      packing: "10kg / 13.6kg PVC ventilated export crates or cardboard cartons",
      desc: "Plump, fibrous, high-gingerol rhizomes suitable for fresh produce retailers, commercial juice processing, and culinary distribution."
    },
    {
      name: "Highland Fresh Cabbage & Carrots",
      region: "Berastagi Plateau, North Sumatra",
      specs: "Cabbage 1.2 - 2.5 kg/head, compact tight leaf; Carrots 15-20cm, washed, uncurved",
      shelfLife: "30 - 45 days in reefer storage (0-2°C, 95% RH)",
      packing: "10kg / 15kg mesh bags or export cartons",
      desc: "Cultivated in fertile volcanic loam soils above 1,200m altitude. Pre-cooled within 4 hours of harvest to ensure crisp texture."
    },
    {
      name: "Fresh Chili Peppers (Bird’s Eye & Large Red)",
      region: "East Java Highland Clusters",
      specs: "Length 3-5cm (Bird's eye) / 12-15cm (Large red), bright uniform color, calyx intact",
      shelfLife: "21 - 28 days in active cold-chain (7-10°C, 90% RH)",
      packing: "5kg / 10kg ventilated carton boxes with absorbent pads",
      desc: "Rigidly sorted for color uniformity, firmness, and absence of physical blemishes. Available for rapid air cargo or ocean reefer dispatch."
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
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Commercial Vegetables</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Thermometer className="w-4 h-4" />
                <span>Cold-Chain Managed Harvests</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Export-Grade Commercial <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Produce & Vegetables</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                Cultivated across Indonesia&apos;s highland volcanic plateaus. Pre-cooled, graded to international phytosanitary standards, and dispatched in refrigerated ocean containers and chartered air cargo.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button onClick={() => openQuoteModal("Vegetables")} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Inquire for Produce Contracts</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image src="/images/vegetables.jpg" alt="Commercial Agricultural Vegetables" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59]">Highland Volcanic Harvests</div>
                  <div className="font-serif text-base text-[#1A0614] dark:text-[#F9F6F0]">Hydro-Cooled & Reefer Temperature Monitored</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produce Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Export Catalog & Specifications</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">Global GAP compliant farming clusters ensuring maximum freshness and international pesticide residue compliance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {produceItems.map(p => (
            <div key={p.name} className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] block mb-1">Region: {p.region}</span>
                <h3 className="font-serif text-2xl font-medium">{p.name}</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light leading-relaxed">{p.desc}</p>
              
              <div className="space-y-2 p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 text-xs">
                <div><strong className="text-[#1A0614] dark:text-[#F9F6F0]">Grading:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">{p.specs}</span></div>
                <div><strong className="text-[#1A0614] dark:text-[#F9F6F0]">Storage Regime:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">{p.shelfLife}</span></div>
                <div><strong className="text-[#1A0614] dark:text-[#F9F6F0]">Packaging:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">{p.packing}</span></div>
              </div>

              <div className="pt-2 flex items-center justify-end border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15">
                <button onClick={() => openQuoteModal(p.name)} className="px-5 py-2.5 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-wider hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-colors">
                  Request Produce Pricing
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}