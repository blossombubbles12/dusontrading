"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Award,
  FileText,
  CheckCircle2,
  Globe2,
  Calendar,
  Box,
  Truck,
  Sparkles,
  HelpCircle,
  FileSpreadsheet,
  Download,
  Search,
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function CommoditiesView() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const commodities = [
    {
      id: "nutmeg",
      category: "spices",
      title: "Indonesian Nutmeg & Mace",
      tag: "Flagship Origin Spice",
      image: "/images/nutmeg-spices.jpg",
      link: "/commodities/nutmeg",
      grades: "ABCD (80-110 pcs/lb), Sound / Whole, BWP, SS & Whole Mace",
      origin: "Banda Islands, Siaul & North Maluku",
      moisture: "< 10.0% Assayed",
      oilContent: "6.5% - 9.0% v/w Essential Volatile Oil",
      moq: "1 x 20ft FCL (~14 Metric Tons)",
      packaging: "25kg / 50kg Double Jute Bags with Poly-Inner Liner",
      certifications: ["ISO 22000", "HACCP", "FDA Registered", "Aflatoxin Tested"],
      desc: "World-renowned high volatile oil content Indonesian nutmeg. Harvested from volcanic origin soils, solar cured, machine sorted, and screened for zero chemical fumigants and aflatoxin compliance.",
    },
    {
      id: "spices",
      category: "spices",
      title: "Aromatic Spices & Pepper",
      tag: "Export Bulk Spices",
      image: "/images/nutmeg-spices.jpg",
      link: "/commodities/spices",
      grades: "Lampung Black (ASTA), Muntok White, Cloves Lalpari, Korintje Cassia",
      origin: "Sumatra, Bangka Belitung, Java & Sulawesi",
      moisture: "11.0% - 13.0% Max",
      oilContent: "1.5% - 21.0% (Eugenol / Piperine High Grades)",
      moq: "1 x 20ft FCL (~14 - 16 Metric Tons)",
      packaging: "25kg / 50kg Multi-Wall Paper Bags & Woven PP Liners",
      certifications: ["Steam Sterilized", "ASTA Compliant", "SGS Inspected", "Halal"],
      desc: "Machine cleaned, density-sorted, and continuous steam-sterilized whole spices processed for industrial food manufacturers, spice extractors, and wholesale importers worldwide.",
    },
    {
      id: "vegetables",
      category: "produce",
      title: "Commercial & Fresh Vegetables",
      tag: "Cold-Chain Chilled Produce",
      image: "/images/vegetables.jpg",
      link: "/commodities/vegetables",
      grades: "Export Grade A / Global GAP Certified",
      origin: "Highland Wonosobo, Brebes & Berastagi Plateau",
      moisture: "Hydro-cooled within 4 hours",
      oilContent: "High Gingerol & Aromatic Pungency",
      moq: "1 x 20ft / 40ft Reefer Container (~10 - 24 MT)",
      packaging: "10kg / 20kg Ventilated Mesh Bags & Export Cardboard Crates",
      certifications: ["Global GAP", "Phytosanitary Clearance", "Pre-Cooled", "Chilled Reefer"],
      desc: "Cultivated in mineral-dense volcanic highland soils above 1,200m. Hydro-cooled post harvest to lock in crisp texture, packed in ventilated crates, and shipped under active temperature control.",
    },
    {
      id: "olive-oils",
      category: "oils",
      title: "Virgin & Extra Virgin Olive Oils",
      tag: "Mediterranean Bulk Oils",
      image: "/images/olive-oil.jpg",
      link: "/commodities/olive-oils",
      grades: "EVOO (<0.3% & <0.8% Acidity), Pure Virgin, Refined Pomace",
      origin: "Mediterranean Cooperative Estate Groves",
      moisture: "Peroxide < 10 meq O2/kg",
      oilContent: "100% First Cold Pressed (<27°C Extraction)",
      moq: "1 x 20ft Flexitank (~21,500 Liters / 20 MT)",
      packaging: "21,500L Bulk Flexitanks, 1,000L IBC Totes, 200L Drums",
      certifications: ["IOC Panel Certified", "Codex Compliant", "Kosher / Halal", "COA Assayed"],
      desc: "Cold extracted within 12 hours of olive harvest. Supplied in food-grade ISO flexitanks and IBC totes for high-volume food processors, retail bottlers, and culinary manufacturers.",
    },
  ];

  const harvestCalendar = [
    { commodity: "Indonesian Nutmeg & Mace", peakMonths: "Mar - May & Sep - Nov", region: "Banda Islands & North Maluku", availability: "Year-Round Stock" },
    { commodity: "Lampung Black Pepper", peakMonths: "Jul - Oct", region: "Lampung, Sumatra", availability: "Year-Round Stock" },
    { commodity: "Muntok White Pepper", peakMonths: "Aug - Nov", region: "Bangka Belitung", availability: "Seasonal / Reserved" },
    { commodity: "Indonesian Cloves (Lalpari)", peakMonths: "Jun - Sep", region: "Java, Sulawesi & Maluku", availability: "Year-Round Stock" },
    { commodity: "Korintje Cassia Cinnamon", peakMonths: "May - Aug & Oct - Dec", region: "Kerinci Highland, Sumatra", availability: "Year-Round Stock" },
    { commodity: "Fresh Shallots & Ginger", peakMonths: "Jan - Apr & Jul - Oct", region: "Java Highlands & Brebes", availability: "Continuous Harvest" },
    { commodity: "Virgin & Extra Virgin Olive Oils", peakMonths: "Nov - Feb", region: "Mediterranean Estates", availability: "Year-Round Flexitanks" },
  ];

  const qualityPillars = [
    {
      icon: ShieldCheck,
      title: "Origin Traceability",
      desc: "Direct farm aggregation with lot-by-lot tracking from plantation clusters to export port loading.",
    },
    {
      icon: Award,
      title: "ISO 22000 Assayed",
      desc: "Multi-parameter laboratory testing covering moisture, volatile oil, total plate count, and heavy metals.",
    },
    {
      icon: CheckCircle2,
      title: "Zero Chemical Residues",
      desc: "Steam sterilization and solar drying methods eliminating chemical fumigants, E.coli, and Salmonella.",
    },
    {
      icon: Truck,
      title: "Ocean Logistics Security",
      desc: "Desiccant-lined ocean containers, reefer temperature monitoring, and flexitank heating pad options.",
    },
  ];

  const faqs = [
    {
      q: "What are the standard Minimum Order Quantities (MOQs) for commodity export orders?",
      a: "Our standard MOQ is one 20-foot Full Container Load (FCL). For whole nutmeg and spices, a 20ft FCL holds approximately 14 to 16 Metric Tons. For bulk virgin olive oil, a 20ft Flexitank holds ~21,500 Liters. Container consolidation for mixed spice items is available upon trade desk review.",
    },
    {
      q: "What international payment terms does DUSON accept for commercial contracts?",
      a: "We accept Irrevocable, Transferable or Non-Transferable Letters of Credit at Sight (L/C at Sight) issued by Top 50 international prime banks, as well as Telegraphic Transfer (T/T) with standard trade deposit structures.",
    },
    {
      q: "Can DUSON provide pre-shipment quality inspection and samples?",
      a: "Yes. Every exported shipment includes an official Certificate of Analysis (COA) and Phytosanitary Certificate. Third-party pre-shipment inspection by SGS or Sucofindo can be arranged at port of loading. Evaluation samples are dispatched worldwide via DHL/FedEx for qualified buyers.",
    },
    {
      q: "How does DUSON protect commodity shipments against moisture damage during ocean freight?",
      a: "All ocean containers are inspected for watertight integrity, lined with heavy-duty Kraft paper, and fitted with high-capacity ocean desiccant poles (moisture absorption > 300%) to eliminate container rain and sweat during equatorial sea transit.",
    },
  ];

  const filteredCommodities =
    selectedCategory === "all"
      ? commodities
      : commodities.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10 bg-gradient-to-b from-[#F8EDF4]/50 to-transparent dark:from-[#15040F]/50 dark:to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">All Commodities</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Layers className="w-4 h-4" />
                <span>Certified Global Commodity Portfolio</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
                Essential Agricultural Commodities for <span className="text-[#7f1b59] dark:text-[#B52F81]">Global Food Processors</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed max-w-3xl">
                DUSON TRADING GROUP PT. aggregates, processes, and exports verified food commodities directly from origin farming clusters. Every batch undergoes strict moisture assay, essential oil quantification, and SGS pre-shipment inspection.
              </p>
              
              {/* Quick stats strip */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15 text-xs">
                <div>
                  <span className="text-[#7f1b59] dark:text-[#B52F81] font-bold block text-sm">ISO 22000 & HACCP</span>
                  <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">Certified Quality Protocols</span>
                </div>
                <div>
                  <span className="text-[#7f1b59] dark:text-[#B52F81] font-bold block text-sm">30+ Global Ports</span>
                  <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">Direct Container Corridors</span>
                </div>
                <div>
                  <span className="text-[#7f1b59] dark:text-[#B52F81] font-bold block text-sm">50,000+ MT</span>
                  <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">Annual Commodity Volume</span>
                </div>
                <div>
                  <span className="text-[#7f1b59] dark:text-[#B52F81] font-bold block text-sm">FOB & CIF Terms</span>
                  <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">Flexible L/C & T/T Contracting</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-6 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 shadow-xl space-y-4">
                <div className="flex items-center gap-3 text-[#7f1b59] dark:text-[#B52F81]">
                  <FileSpreadsheet className="w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-wider">Fast Trade Desk Inquiry</span>
                </div>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 leading-relaxed">
                  Need custom specification analysis, FOB/CIF destination port quotes, or sample evaluation dispatches?
                </p>
                <button
                  onClick={() => openQuoteModal("General Commodities Inquiry")}
                  className="w-full py-3 px-6 rounded-xl bg-[#7f1b59] hover:bg-[#9c2870] text-white text-xs uppercase tracking-wider font-bold transition-all shadow-md"
                >
                  Request Master Catalog Quote
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CATEGORY FILTER & CATALOG GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/15">
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold">Commercial Product Portfolio</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/70 mt-1">Select a commodity classification to review technical parameters and origin grades.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Commodities" },
              { id: "spices", label: "Spices & Pepper" },
              { id: "produce", label: "Fresh Vegetables" },
              { id: "oils", label: "Olive Oils" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === tab.id
                    ? "bg-[#7f1b59] text-white dark:bg-[#B52F81] dark:text-[#0D0209] shadow-md"
                    : "bg-[#F8EDF4] dark:bg-[#220819] text-[#5C3D52] dark:text-[#DFC8D6] hover:bg-[#7f1b59]/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Commodity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredCommodities.map((c) => (
            <div
              key={c.id}
              className="group rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0209]/85 via-[#0D0209]/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0D0209]/80 backdrop-blur-md text-[#F294CE] text-[10px] font-extrabold uppercase tracking-widest border border-[#B52F81]/30">
                    {c.tag}
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <h3 className="font-serif text-2xl sm:text-3xl font-extrabold">{c.title}</h3>
                    <p className="text-xs text-white/80 font-medium flex items-center gap-1.5 mt-1">
                      <Globe2 className="w-3.5 h-3.5 text-[#F294CE]" />
                      <span>{c.origin}</span>
                    </p>
                  </div>
                </div>

                {/* Body Specifications */}
                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/90 font-normal leading-relaxed">
                    {c.desc}
                  </p>

                  {/* Tech specs list */}
                  <div className="space-y-2 p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 dark:border-[#B52F81]/15 text-xs">
                    <div className="flex justify-between border-b border-[#7f1b59]/10 pb-1.5">
                      <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70 font-semibold">Grades:</span>
                      <span className="font-bold text-[#1A0614] dark:text-[#F9F6F0] text-right max-w-[220px]">{c.grades}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#7f1b59]/10 pb-1.5">
                      <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70 font-semibold">Moisture Assay:</span>
                      <span className="font-bold text-[#1A0614] dark:text-[#F9F6F0]">{c.moisture}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#7f1b59]/10 pb-1.5">
                      <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70 font-semibold">Essential Oil / Spec:</span>
                      <span className="font-bold text-[#1A0614] dark:text-[#F9F6F0]">{c.oilContent}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#7f1b59]/10 pb-1.5">
                      <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70 font-semibold">Standard MOQ:</span>
                      <span className="font-bold text-[#7f1b59] dark:text-[#B52F81]">{c.moq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70 font-semibold">Packaging:</span>
                      <span className="font-bold text-[#1A0614] dark:text-[#F9F6F0] text-right max-w-[220px]">{c.packaging}</span>
                    </div>
                  </div>

                  {/* Certification Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {c.certifications.map((badge, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F8EDF4] dark:bg-[#1E0716] border border-[#7f1b59]/20 text-[10px] font-bold text-[#7f1b59] dark:text-[#B52F81]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#7f1b59] dark:text-[#B52F81]" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-4 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15">
                <Link
                  href={c.link}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A0614] dark:text-[#F9F6F0] hover:text-[#7f1b59] dark:hover:text-[#B52F81] transition-colors"
                >
                  <span>Full Spec Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <button
                  onClick={() => openQuoteModal(c.title)}
                  className="px-5 py-2.5 rounded-full bg-[#7f1b59] hover:bg-[#9c2870] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HARVEST CALENDAR & AVAILABILITY TABLE */}
      <section className="py-20 bg-[#F8EDF4]/60 dark:bg-[#15040F]/60 border-y border-[#7f1b59]/15 dark:border-[#B52F81]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
              Origin Harvest Calendar
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold">Peak Cultivation & Harvest Cycles</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
              Align your commercial procurement contracts with origin harvest windows to secure prime physical grades and optimal pricing.
            </p>
          </div>

          <div className="rounded-3xl border border-[#7f1b59]/20 dark:border-[#B52F81]/20 overflow-hidden bg-white dark:bg-[#220819] shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#7f1b59] text-white dark:bg-[#1A0614] dark:text-[#F294CE] uppercase text-[11px] font-extrabold tracking-wider border-b border-[#7f1b59]/30">
                    <th className="py-4 px-6">Commodity Line</th>
                    <th className="py-4 px-6">Peak Harvest Window</th>
                    <th className="py-4 px-6">Origin Region</th>
                    <th className="py-4 px-6">Stock Availability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#7f1b59]/10 dark:divide-[#B52F81]/10 font-medium">
                  {harvestCalendar.map((item, idx) => (
                    <tr
                      key={item.commodity}
                      className={idx % 2 === 0 ? "bg-[#FCF9FB] dark:bg-[#15040F]" : "bg-white dark:bg-[#220819]"}
                    >
                      <td className="py-4 px-6 font-bold text-[#1A0614] dark:text-[#F9F6F0]">{item.commodity}</td>
                      <td className="py-4 px-6 text-[#7f1b59] dark:text-[#B52F81] font-semibold">{item.peakMonths}</td>
                      <td className="py-4 px-6 text-[#5C3D52] dark:text-[#DFC8D6]/80">{item.region}</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7f1b59]/10 text-[#7f1b59] dark:bg-[#B52F81]/15 dark:text-[#F294CE] text-[11px] font-extrabold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {item.availability}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 4. QUALITY ASSURANCE PILLARS */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
            Standardized Quality Protocols
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold">Guaranteed Physical & Microbial Integrity</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            Every export shipment is backed by third-party laboratory assays, phytosanitary quarantine clearance, and sealed ocean container dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 shadow-sm hover:shadow-xl transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F8EDF4] dark:bg-[#15040F] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FREIGHT & B2B FAQ SECTION */}
      <section className="py-20 bg-[#1A0614] dark:bg-[#0D0209] text-white border-t border-[#B52F81]/25">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F294CE]">
              Commercial Procurement FAQ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Frequently Asked Trade Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#220819] border border-[#B52F81]/25 space-y-3"
              >
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F294CE] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#B52F81] shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#DFC8D6]/90 font-normal leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#7f1b59] border border-[#B52F81]/40 text-center space-y-6 shadow-2xl">
            <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Discuss Contract Specifications & Freight Schedules?
            </h3>
            <p className="text-xs sm:text-sm text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
              Connect directly with our Jakarta Senior Trade Officer to request custom moisture assays, sample packages, or FOB/CIF port quotes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => openQuoteModal("Master Commodities Procurement")}
                className="px-8 py-4 rounded-full bg-white text-[#1A0614] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F9F6F0] transition-all shadow-lg"
              >
                Request Contract Quotation
              </button>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border border-white/40 text-white text-xs font-extrabold uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Contact Jakarta Desk
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}