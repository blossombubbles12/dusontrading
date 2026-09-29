"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, ShieldCheck, FileCheck2, Anchor, CheckCircle2, Globe2 } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function ExportView() {
  const { openQuoteModal } = useQuoteModal();

  const exportDocs = [
    { title: "Certificate of Origin (COO)", desc: "Issued by Indonesian Ministry of Trade (Form D, Form E, Form AK, Form ICO, Form RCEP) for preferential duty rates." },
    { title: "Phytosanitary Certificate", desc: "Quarantine clearance issued by Indonesian Agricultural Quarantine Agency confirming freedom from pests and live insects." },
    { title: "Certificate of Analysis (COA)", desc: "Independent lab assay by SGS / Sucofindo documenting moisture, purity, volatile oil content, and aflatoxin levels." },
    { title: "Fumigation Certificate", desc: "Certified Phosphine (PH3) or Methyl Bromide (CH3Br) treatment compliance for pest-free ocean transit." },
    { title: "Commercial Invoice & Packing List", desc: "Full itemized commercial documentation with verified container tare and net weights." },
    { title: "Ocean Bill of Lading (Clean on Board)", desc: "Issued directly by tier-1 shipping lines for rapid documentary credit presentation." }
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
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Export Management</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Flawless International <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Export Compliance</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                Navigating cross-border trade requires institutional precision. DUSON handles every stage of Indonesian customs clearance, phytosanitary quarantine inspection, and sovereign documentation.
              </p>
              <div className="pt-2">
                <button onClick={() => openQuoteModal("Export Services")} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Request Export Procedure Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
              <Image src="/images/docusign-7RWBSYA9Rro-workers looking at computer.jpg" alt="DUSON Export Documentation Team" fill priority className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Standard Export Documentation Suite</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">Supplied with all export shipments to guarantee rapid customs clearance at destination ports.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exportDocs.map(doc => (
            <div key={doc.title} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3 shadow-sm">
              <FileCheck2 className="w-6 h-6 text-[#7f1b59] dark:text-[#B52F81]" />
              <h3 className="font-serif text-xl font-medium">{doc.title}</h3>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75 font-light leading-relaxed">{doc.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}