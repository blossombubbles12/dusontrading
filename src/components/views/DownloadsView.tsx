"use client";

import Link from "next/link";
import { ChevronRight, Download, FileText, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function DownloadsView() {
  const { openQuoteModal } = useQuoteModal();

  const documents = [
    {
      title: "DUSON Corporate Profile & Commodity Master Catalog 2026",
      desc: "Complete institutional overview, origin sourcing hubs, logistics infrastructure, and full commodity specification tables.",
      format: "PDF Document",
      size: "4.8 MB"
    },
    {
      title: "Indonesian Nutmeg Technical Export Specifications (ABCD & Sound)",
      desc: "Detailed botanical assays, volatile oil thresholds, oven-dry moisture parameters, and European aflatoxin compliance thresholds.",
      format: "PDF Document",
      size: "1.2 MB"
    },
    {
      title: "Aromatic Spices & Black/White Pepper Export Grade Dossier",
      desc: "Density tables for Lampung Black Pepper (ASTA), Muntok White, Lalpari Cloves, and Korintje Cassia.",
      format: "PDF Document",
      size: "1.6 MB"
    },
    {
      title: "Bulk Virgin & Extra Virgin Olive Oil Technical Specifications",
      desc: "International Olive Council (IOC) chemical benchmarks, peroxide values, fatty acid profiles, and flexitank loading protocols.",
      format: "PDF Document",
      size: "950 KB"
    },
    {
      title: "ISO 22000:2018 & HACCP Accreditation Certificate Summary",
      desc: "Official certified copies of food safety and processing facility accreditations issued by TÜV SÜD.",
      format: "PDF Document",
      size: "820 KB"
    },
    {
      title: "Standard International Sales Contract Terms & Incoterms 2020 Guide",
      desc: "Documentary LC guidelines, phytosanitary quarantine procedures, SGS inspection clauses, and demurrage schedules.",
      format: "PDF Document",
      size: "1.4 MB"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Documentation</span>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Technical Downloads</span>
        </div>

        <div className="space-y-4 mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">Technical & Corporate Documentation</h1>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light max-w-2xl">
            Download our latest commodity specification sheets, laboratory testing methodologies, corporate profiles, and standard international sales contract guidelines.
          </p>
        </div>

        <div className="space-y-4">
          {documents.map((doc, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#7f1b59] transition-all">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-[#F8EDF4] dark:bg-[#15040F] text-[#7f1b59] dark:text-[#B52F81] flex-shrink-0 border border-[#7f1b59]/20">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#7f1b59]">
                    <span>{doc.format}</span>
                    <span>•</span>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 font-normal">{doc.size}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">{doc.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75 font-light leading-relaxed max-w-2xl">{doc.desc}</p>
                </div>
              </div>

              <button
                onClick={() => openQuoteModal(doc.title)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-wider hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all flex-shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}