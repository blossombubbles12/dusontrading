"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Download, FileText, CheckCircle2, ShieldCheck, ArrowRight, FileCheck, Layers } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function DownloadsView() {
  const { openQuoteModal } = useQuoteModal();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const documents = [
    {
      title: "DUSON Corporate Profile & Commodity Master Catalog 2026",
      category: "Corporate",
      desc: "Complete institutional overview, origin sourcing hubs, logistics infrastructure, and full commodity specification tables.",
      format: "PDF Document",
      size: "4.8 MB"
    },
    {
      title: "Indonesian Nutmeg Technical Export Specifications (ABCD & Sound)",
      category: "Spices & Nutmeg",
      desc: "Detailed botanical assays, volatile oil thresholds, oven-dry moisture parameters, and European aflatoxin compliance thresholds.",
      format: "PDF Document",
      size: "1.2 MB"
    },
    {
      title: "Aromatic Spices & Black/White Pepper Export Grade Dossier",
      category: "Spices & Nutmeg",
      desc: "Density tables for Lampung Black Pepper (ASTA 550g/l), Muntok White (630g/l), Lalpari Cloves, and Korintje Cassia Vera.",
      format: "PDF Document",
      size: "1.6 MB"
    },
    {
      title: "Bulk Virgin & Extra Virgin Olive Oil Technical Specifications",
      category: "Olive Oil",
      desc: "International Olive Council (IOC) chemical benchmarks, peroxide values, fatty acid profiles, and flexitank loading protocols.",
      format: "PDF Document",
      size: "950 KB"
    },
    {
      title: "ISO 22000:2018 & HACCP Accreditation Certificate Summary",
      category: "Certifications",
      desc: "Official certified copies of food safety and processing facility accreditations issued by TÜV SÜD.",
      format: "PDF Document",
      size: "820 KB"
    },
    {
      title: "Standard International Sales Contract Terms & Incoterms 2020 Guide",
      category: "Contracts",
      desc: "Documentary L/C guidelines, phytosanitary quarantine procedures, SGS inspection clauses, and demurrage schedules.",
      format: "PDF Document",
      size: "1.4 MB"
    }
  ];

  const filteredDocs = activeCategory === "All" 
    ? documents 
    : documents.filter(d => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Documentation</span>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Technical Downloads</span>
        </div>

        <div className="space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
            <FileCheck className="w-4 h-4" />
            <span>Institutional Resource Vault</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">Technical & Corporate Documentation</h1>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal max-w-2xl">
            Download our latest commodity specification sheets, laboratory testing methodologies, corporate profiles, and standard international sales contract guidelines.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", "Corporate", "Spices & Nutmeg", "Olive Oil", "Certifications", "Contracts"].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? "bg-[#7f1b59] dark:bg-[#B52F81] text-white shadow-md"
                  : "bg-white dark:bg-[#220819] text-[#1A0614] dark:text-[#F9F6F0] border border-[#7f1b59]/20 hover:border-[#7f1b59]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredDocs.map((doc, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#7f1b59] transition-all">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-[#F8EDF4] dark:bg-[#15040F] text-[#7f1b59] dark:text-[#B52F81] shrink-0 border border-[#7f1b59]/20">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">
                    <span>{doc.format}</span>
                    <span>•</span>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 font-normal">{doc.size}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1A0614] dark:text-[#F9F6F0]">{doc.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed max-w-2xl">{doc.desc}</p>
                </div>
              </div>

              <button
                onClick={() => openQuoteModal(`Download Document: ${doc.title}`)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-wider hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shrink-0 shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Dossier</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}