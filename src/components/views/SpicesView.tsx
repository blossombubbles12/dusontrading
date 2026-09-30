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
  Sparkles,
  HelpCircle,
  Box,
  Truck,
  Layers,
  Flame,
  Search,
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function SpicesView() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedSpiceFilter, setSelectedSpiceFilter] = useState("all");

  const spiceCatalog = [
    {
      id: "black-pepper",
      type: "pepper",
      name: "Lampung Black Pepper (ASTA Grade)",
      origin: "Lampung, Southern Sumatra",
      density: "550 – 580 g/L",
      moisture: "Max 12.0%",
      volatileOil: "Min 2.0% – 3.5% v/w",
      activeCompound: "Piperine: 4.5% – 6.0%",
      desc: "World-renowned for its bold pungent heat, deep dark color, and high volatile oil content. Machine-cleaned, gravity-sorted, and steam-sterilized to comply with US FDA and European microbiological limits.",
      packaging: "25kg / 50kg multi-wall paper bags with poly liner or 625kg bulk totes.",
    },
    {
      id: "white-pepper",
      type: "pepper",
      name: "Muntok White Pepper (100% Double Washed)",
      origin: "Bangka Belitung Archipelago",
      density: "600 – 630 g/L",
      moisture: "Max 13.0%",
      volatileOil: "Min 1.5% – 2.5% v/w",
      activeCompound: "Piperine: 5.0% – 7.0%",
      desc: "Harvested from fully ripened berries, naturally de-pulped in fresh running stream waters, and solar-dried. Characterized by clean ivory color, sharp heat, and zero sour fermentation off-notes.",
      packaging: "25kg woven PP bags with internal humidity-barrier liners.",
    },
    {
      id: "cloves",
      type: "cloves",
      name: "Indonesian Whole Cloves (Lalpari / FAQ Grade)",
      origin: "Zanzibar & Ambon Varieties (Java, Sulawesi & Maluku)",
      density: "Uniform reddish-brown flower heads",
      moisture: "Max 11.0%",
      volatileOil: "Min 19.0% – 21.0% v/w (High Eugenol)",
      activeCompound: "Eugenol Content: 80% – 88%",
      desc: "Selected hand-picked cloves with unbroken flower heads. Renowned globally for exceptionally high eugenol oil content, utilized widely in seasoning blends, pharmaceutical extraction, and essential oil distillation.",
      packaging: "10kg / 25kg vacuum-sealed master cartons or 50kg jute bags.",
    },
    {
      id: "cassia",
      type: "cassia",
      name: "Indonesian Cassia Cinnamon (Korintje Vera)",
      origin: "Kerinci Highland, Sumatra",
      density: "Vera Sticks, Split & Broken Cuts",
      moisture: "Max 13.5%",
      volatileOil: "2.5% – 4.5% v/w (High Cinnamaldehyde)",
      activeCompound: "Cinnamaldehyde: >75%",
      desc: "Harvested from 15-to-20-year-old Cinnamomum burmannii trees. Features thick sweet aromatic bark, intense fragrance, and smooth quilling. Available in 8cm, 10cm, 15cm quills, or broken chips for grinding.",
      packaging: "10kg / 25kg corrugated master export cartons.",
    },
    {
      id: "vanilla",
      type: "specialty",
      name: "Indonesian Gourmet Vanilla Beans (Planifolia & Tahitensis)",
      origin: "Bali & Papua Highlands",
      density: "16cm – 20cm Length / Flexible Pods",
      moisture: "25.0% – 32.0%",
      volatileOil: "Vanillin Content: 1.8% – 2.4%",
      activeCompound: "Fragrant oily shine / Caviar rich",
      desc: "Hand-pollinated and cured for 4 months to develop deep woody vanilla aromatics. Plump, oily pods preferred by luxury bakeries, ice cream artisans, and extract manufacturers.",
      packaging: "Vacuum-sealed 1kg / 5kg foil pouches in master wooden crates.",
    },
  ];

  const qualitySteps = [
    { step: "01", title: "Direct Farm Procurement", desc: "Harvested at peak maturity by partner farmer clusters across Sumatra, Java, and Maluku." },
    { step: "02", title: "Mechanical Cleaning & Sorting", desc: "Air-screen separation, destoning, gravity tables, and optical sorting to remove foreign matter (<0.5%)." },
    { step: "03", title: "Continuous Steam Sterilization", desc: "Chemical-free heat treatment reducing total plate count (TPC < 50,000 CFU/g, E.coli negative, Salmonella absent)." },
    { step: "04", title: "Laboratory COA Assay", desc: "Multi-stage testing for moisture, volatile oils, heavy metals, and pesticide residues prior to loading." },
  ];

  const faqs = [
    {
      q: "Does DUSON provide steam-sterilized spices compliant with European (ESA) and US (ASTA) standards?",
      a: "Yes. Our spices undergo continuous steam sterilization (HTST) without ETO or irradiation, achieving TPC < 50,000 CFU/g, zero Salmonella in 2x375g, and E.coli negative results certified by COA.",
    },
    {
      q: "What are the ocean loading capacities for pepper and whole cloves?",
      a: "A 20ft FCL loads approximately 14 to 16 Metric Tons of bagged black/white pepper or whole cloves. A 40ft High Cube container loads up to 26 to 28 Metric Tons.",
    },
    {
      q: "Can we request custom spice cuts or mesh powder grinding?",
      a: "Yes. In addition to whole unground spices, we supply crushed, TBC (Tea Bag Cut), and ground powder meshes (40 to 80 mesh) packed under nitrogen flush.",
    },
  ];

  const filteredSpices =
    selectedSpiceFilter === "all"
      ? spiceCatalog
      : spiceCatalog.filter((s) => s.type === selectedSpiceFilter);

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
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Aromatic Spices</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Sparkles className="w-4 h-4" />
                <span>Export-Certified Bulk Spices</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Indonesian Pepper, <span className="text-[#7f1b59] dark:text-[#B52F81]">Cloves & Cassia</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                Aggregated directly from Indonesia&apos;s historic spice islands. Cleaned, graded, steam-treated, and packaged in bulk to supply industrial food processors, spice extractors, and wholesale importers worldwide.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => openQuoteModal("Aromatic Bulk Spices")}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#7f1b59] hover:bg-[#9c2870] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xl"
                >
                  <span>Request Spice Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image
                  src="/images/nutmeg-spices.jpg"
                  alt="Indonesian Bulk Spices"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0209]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0D0209]/80 backdrop-blur-md border border-[#B52F81]/30 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#F294CE]">Sumatra & Java Origin</div>
                  <div className="font-serif text-base font-bold">High Essential Volatile Oil Concentration</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCT CATALOG GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/15">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold">Aromatic Spice Specifications</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 mt-1">
              Every shipment is backed by Sucofindo / SGS pre-shipment inspections and Phytosanitary certification.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Spices" },
              { id: "pepper", label: "Black & White Pepper" },
              { id: "cloves", label: "Whole Cloves" },
              { id: "cassia", label: "Cassia Cinnamon" },
              { id: "specialty", label: "Vanilla Beans" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedSpiceFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedSpiceFilter === f.id
                    ? "bg-[#7f1b59] text-white dark:bg-[#B52F81] dark:text-[#0D0209]"
                    : "bg-[#F8EDF4] dark:bg-[#220819] text-[#5C3D52] dark:text-[#DFC8D6]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Spice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSpices.map((s) => (
            <div
              key={s.id}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-md flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] block mb-1">
                    Origin: {s.origin}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold">{s.name}</h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">
                  {s.desc}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 text-xs">
                  <div>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 block text-[10px] uppercase font-semibold">Density / Cut</span>
                    <strong className="text-[#1A0614] dark:text-[#F9F6F0]">{s.density}</strong>
                  </div>
                  <div>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 block text-[10px] uppercase font-semibold">Max Moisture</span>
                    <strong className="text-[#1A0614] dark:text-[#F9F6F0]">{s.moisture}</strong>
                  </div>
                  <div>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 block text-[10px] uppercase font-semibold">Volatile Oil</span>
                    <strong className="text-[#7f1b59] dark:text-[#B52F81] font-bold">{s.volatileOil}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15 text-xs">
                <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70 font-medium max-w-[240px]">{s.packaging}</span>
                <button
                  onClick={() => openQuoteModal(s.name)}
                  className="px-5 py-2.5 rounded-full bg-[#7f1b59] hover:bg-[#9c2870] text-white font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* QUALITY PROCESS */}
      <section className="py-20 bg-[#F8EDF4]/60 dark:bg-[#15040F]/60 border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
              Quality Assurance Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold">Standardized Four-Stage Conditioning</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualitySteps.map((q) => (
              <div key={q.step} className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3 shadow-sm">
                <div className="font-serif text-3xl font-extrabold text-[#7f1b59] dark:text-[#B52F81]">{q.step}</div>
                <h3 className="font-serif text-lg font-bold">{q.title}</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-normal leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREIGHT & FAQ */}
      <section className="py-20 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
            Bulk Spice FAQ
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
          <h3 className="font-serif text-3xl font-extrabold">Request Bulk Spice Specification & Quotation</h3>
          <button
            onClick={() => openQuoteModal("Bulk Spices Contract")}
            className="px-8 py-4 rounded-full bg-white text-[#1A0614] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F9F6F0] transition-all shadow-lg"
          >
            Inquire For Spice Pricing
          </button>
        </div>
      </section>

    </div>
  );
}