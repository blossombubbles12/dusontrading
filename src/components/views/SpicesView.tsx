"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, ShieldCheck, Award, FileText, CheckCircle2, Layers, Package, Sparkles, Scale } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function SpicesView() {
  const { openQuoteModal } = useQuoteModal();

  const spiceCatalog = [
    {
      name: "Lampung Black Pepper (ASTA Quality)",
      origin: "Lampung, Southern Sumatra",
      density: "550 - 580 g/L",
      moisture: "Max 12.0%",
      volatileOil: "Min 2.0% v/w",
      piperine: "4.5% - 6.0%",
      desc: "World-renowned for its bold pungent heat and deep aromatic notes. Machine-cleaned, density-sorted, and steam-sterilized to comply with US FDA and European microbiological limits.",
      packaging: "25kg / 50kg multi-wall paper bags with poly liner or bulk polypropylene bags."
    },
    {
      name: "Muntok White Pepper (100% Double Washed)",
      origin: "Bangka Belitung Archipelago",
      density: "600 - 630 g/L",
      moisture: "Max 13.0%",
      volatileOil: "Min 1.5% v/w",
      piperine: "5.0% - 7.0%",
      desc: "Harvested from fully ripened berries, naturally de-pulped in fresh running stream waters, and solar-dried. Characterized by ivory cream color and refined sharp heat without sour fermentation off-notes.",
      packaging: "25kg woven PP bags with internal humidity-barrier liners."
    },
    {
      name: "Indonesian Whole Cloves (Lalpari / FAQ Grade)",
      origin: "Zanzibar & Ambon Varieties (Java & Maluku)",
      density: "Uniform reddish-brown heads",
      moisture: "Max 11.0%",
      volatileOil: "Min 19.0% - 21.0% (High Eugenol)",
      piperine: "Headless < 2%, Stems < 1%",
      desc: "Selected hand-picked cloves with unbroken flower buds. Renowned globally for exceptionally high eugenol oil content, utilized widely in seasoning blends, pharmaceutical extraction, and essential oil distillation.",
      packaging: "10kg / 25kg vacuum-sealed master cartons or 50kg jute bags."
    },
    {
      name: "Indonesian Cassia Cinnamon (Korintje Vera)",
      origin: "Kerinci Highland, Sumatra",
      density: "Vera Sticks, Split & Broken Cuts",
      moisture: "Max 13.5%",
      volatileOil: "2.5% - 4.5% (High Cinnamaldehyde)",
      piperine: "Scraped / Unscraped AA & A Grades",
      desc: "Harvested from 15-to-20-year-old Cinnamomum burmannii trees. Features thick sweet aromatic bark, intense fragrance, and smooth quilling. Available in 8cm, 10cm, 15cm quills, or broken chips for grinding.",
      packaging: "10kg / 25kg corrugated master export cartons."
    }
  ];

  const qualitySteps = [
    { step: "01", title: "Direct Farm Procurement", desc: "Harvested at peak maturity by partner farmer clusters across Sumatra, Java, and Maluku." },
    { step: "02", title: "Mechanical Cleaning & Sorting", desc: "Air-screen separation, destoning, gravity tables, and optical sorting to remove foreign matter (<0.5%)." },
    { step: "03", title: "Continuous Steam Sterilization", desc: "Chemical-free heat treatment reducing total plate count (TPC < 50,000 CFU/g, E.coli negative, Salmonella absent in 2x375g)." },
    { step: "04", title: "Laboratory COA Assay", desc: "Multi-stage testing for moisture, volatile oils, heavy metals, and pesticide residues prior to loading." }
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
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Aromatic Spices</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Sparkles className="w-4 h-4" />
                <span>Export-Certified Bulk Spices</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Indonesian Black & White Pepper, <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Cloves & Cassia</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                Aggregated directly from Indonesia&apos;s most historic cultivation regions. Cleaned, graded, steam-treated, and packaged in bulk to supply industrial food manufacturers, spice extractors, and wholesale importers worldwide.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button onClick={() => openQuoteModal("Spices")} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Request Spice Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image src="/images/nutmeg-spices.jpg" alt="Indonesian Spices and Pepper Collection" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59]">Direct Maluku & Sumatra Origin</div>
                  <div className="font-serif text-base text-[#1A0614] dark:text-[#F9F6F0]">High Essential Volatile Oil Concentration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Cards */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Export Grade Specifications</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">Every shipment is backed by third-party SGS / Sucofindo inspection and official Indonesian Phytosanitary Certificates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spiceCatalog.map((s, idx) => (
            <div key={s.name} className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] block mb-1">Origin: {s.origin}</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium">{s.name}</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light leading-relaxed">{s.desc}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 text-xs">
                <div><span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 block text-[10px] uppercase">Density / Spec</span><strong className="text-[#1A0614] dark:text-[#F9F6F0]">{s.density}</strong></div>
                <div><span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 block text-[10px] uppercase">Max Moisture</span><strong className="text-[#1A0614] dark:text-[#F9F6F0]">{s.moisture}</strong></div>
                <div><span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 block text-[10px] uppercase">Volatile Oil</span><strong className="text-[#1A0614] dark:text-[#F9F6F0]">{s.volatileOil}</strong></div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15">
                <span className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-light">{s.packaging}</span>
                <button onClick={() => openQuoteModal(s.name)} className="px-5 py-2.5 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-wider hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-colors">
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">Quality Assurance Protocol</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">Standardized Four-Stage Export Conditioning</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualitySteps.map(q => (
              <div key={q.step} className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3">
                <div className="font-serif text-3xl font-bold text-[#7f1b59] dark:text-[#B52F81]">{q.step}</div>
                <h3 className="font-serif text-lg font-medium">{q.title}</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-light leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Container Loading Specs */}
      <section className="py-24 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <h3 className="font-serif text-3xl font-medium">Container Freight & Loading Capacities</h3>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light leading-relaxed">
              <strong>20ft FCL:</strong> approx. 14 – 16 Metric Tons (bagged pepper / whole cloves).<br />
              <strong>40ft FCL:</strong> approx. 26 – 28 Metric Tons.<br />
              All containers are desiccant-lined with moisture absorption poles to prevent condensation during equatorial ocean transit.
            </p>
          </div>
          <button onClick={() => openQuoteModal("Bulk Spices")} className="px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-lg flex-shrink-0">
            Request Full Specs & Pricing
          </button>
        </div>
      </section>
    </div>
  );
}