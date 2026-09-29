"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function QualityStandardsView() {
  const { openQuoteModal } = useQuoteModal();

  const standards = [
    { name: "ISO 22000:2018", category: "Food Safety Management", desc: "Complete food safety management across aggregation, processing, packaging, and bonded container loading." },
    { name: "HACCP System", category: "Hazard Analysis & Critical Control", desc: "Rigorous biological, chemical, and physical hazard controls preventing contamination at all processing stages." },
    { name: "Halal MUI Indonesia", category: "Religious & Purity Compliance", desc: "Official certification by the Indonesian Council of Ulama guaranteeing 100% halal compliance." },
    { name: "GACC Enterprise Approval", category: "General Administration of Customs China", desc: "Officially registered enterprise for direct commercial exports to the People's Republic of China." },
    { name: "EU Bio & Global GAP", category: "Good Agricultural Practice", desc: "Zero chemical pesticide residue compliance meeting European Union food safety thresholds." },
    { name: "Third-Party SGS / Sucofindo", category: "Pre-Shipment Inspection", desc: "Independent pre-shipment sampling, weighing, container seal verification, and laboratory COA verification." }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/trading" className="hover:underline">Trading</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Quality & Standards</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Rigorous International <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Quality & Lab Standards</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                In agricultural commodity trading, physical grade integrity is everything. DUSON operates under globally recognized food safety management systems, backed by certified laboratory analysis.
              </p>
              <div className="pt-2">
                <button onClick={() => openQuoteModal("Quality Dossier")} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Download Quality Certificates</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
              <Image src="/images/campaign-creators-gMsnXqILjp4-workers meeting conference.jpg" alt="DUSON Quality Inspection Team" fill priority className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standards.map(s => (
            <div key={s.name} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3 shadow-sm">
              <Award className="w-7 h-7 text-[#7f1b59] dark:text-[#B52F81]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#7f1b59] block">{s.category}</span>
              <h3 className="font-serif text-2xl font-medium">{s.name}</h3>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75 font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}