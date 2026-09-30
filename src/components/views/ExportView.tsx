"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  ChevronRight, ArrowRight, ShieldCheck, FileCheck2, Anchor, CheckCircle2, 
  Globe2, CheckSquare, Download, Layers, ShieldAlert
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function ExportView() {
  const { openQuoteModal } = useQuoteModal();
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    "Certificate of Origin (Form D / E / AK / RCEP)": true,
    "Phytosanitary Quarantine Certificate": true,
    "SGS / Sucofindo Certificate of Analysis": true,
    "Phosphine Fumigation Certificate": true,
    "Commercial Invoice & Packing List": true,
    "Clean Bill of Lading (B/L)": true,
  });

  const exportDocs = [
    { 
      title: "Certificate of Origin (COO)", 
      form: "Form D, E, AK, ICO & RCEP",
      desc: "Issued directly by the Indonesian Ministry of Trade, granting preferential tariff treatment under bilateral free trade agreements." 
    },
    { 
      title: "Phytosanitary Certificate", 
      form: "Agricultural Quarantine Agency",
      desc: "Official sovereign certificate confirming that raw spices or vegetables have undergone rigorous quarantine inspection and are free from regulated pests." 
    },
    { 
      title: "Certificate of Analysis (COA)", 
      form: "SGS & Sucofindo Accredited Lab",
      desc: "Independent batch assay reporting exact moisture percentage, volatile essential oil content, pesticide residue analysis, and heavy metal testing." 
    },
    { 
      title: "Phosphine Fumigation Certificate", 
      form: "AFAS / Sovereign Standard",
      desc: "Treatment confirmation documenting Phosphine (PH3) or Methyl Bromide (CH3Br) application inside sealed container units prior to port gate-in." 
    },
    { 
      title: "Commercial Invoice & Packing List", 
      form: "Customs Valuation Dossier",
      desc: "Fully itemized commercial invoice specifying HS codes, container numbers, tare/gross weights, and agreed Incoterms 2020 terms." 
    },
    { 
      title: "Ocean Bill of Lading (Clean on Board)", 
      form: "Tier-1 Carrier B/L",
      desc: "Original ocean bills of lading issued by Maersk, MSC, ONE, or CMA CGM for swift presentation under bank Letters of Credit." 
    }
  ];

  const exportSteps = [
    {
      step: "01",
      title: "Contract Confirmation & PEB Filing",
      desc: "Upon trade agreement execution, our customs team files the Export Declaration (PEB) directly into the Indonesian Directorate General of Customs portal."
    },
    {
      step: "02",
      title: "Quarantine & Pre-Shipment Inspection",
      desc: "Indonesian Agricultural Quarantine officers and SGS inspectors sample container lots at bonded warehouse facilities prior to sealing."
    },
    {
      step: "03",
      title: "Fumigation & Port Gate-In",
      desc: "Containers are sealed and subjected to certified gas fumigation, then transferred directly to Tanjung Priok or Surabaya container terminals."
    },
    {
      step: "04",
      title: "Document Dispatch & Banking Presentation",
      desc: "Original COO, Phytosanitary, COA, and Bills of Lading are dispatched via courier or presented directly under bank L/C terms."
    }
  ];

  const toggleDoc = (title: string) => {
    setCheckedDocs(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/trading" className="hover:underline">Trading</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Export Management</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <FileCheck2 className="w-4 h-4" />
                <span>Customs & Sovereign Clearance Desk</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Flawless Sovereign <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Export Clearance</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                Navigating cross-border trade requires institutional precision. DUSON manages every tier of Indonesian customs export declarations, phytosanitary quarantine permits, and preferential COO certification.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => openQuoteModal("Export Clearance Service")} 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Request Full Export Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/docusign-7RWBSYA9Rro-workers looking at computer.jpg" 
                  alt="DUSON Export Documentation Desk" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Sovereign Export Protocol</div>
                  <div className="font-serif text-base font-medium text-[#1A0614] dark:text-[#F9F6F0]">100% Customs Pass-Through Rate Across Global Ports</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Documentation Suite */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Regulatory Suite</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Standard Export Documentation Suite</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            Supplied with every shipment to ensure seamless tariff treatment and zero customs detention at destination sea ports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exportDocs.map(doc => (
            <div key={doc.title} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8EDF4] dark:bg-[#2D0C22] flex items-center justify-center text-[#7f1b59] dark:text-[#B52F81]">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">
                  {doc.form}
                </div>
                <h3 className="font-serif text-xl font-bold">{doc.title}</h3>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">
                  {doc.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#7f1b59]/15 text-[11px] font-bold text-green-600 dark:text-green-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Standard Inclusions for All FCL Shipments</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Export Step-by-Step Procedure */}
      <section className="py-20 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Execution Timeline</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">Sovereign Export Execution Workflow</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
              From contract signing to vessel departure from Tanjung Priok or Surabaya sea terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportSteps.map(s => (
              <div key={s.step} className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3 shadow-sm">
                <span className="font-serif text-3xl font-bold text-[#7f1b59] dark:text-[#B52F81]">{s.step}</span>
                <h3 className="font-serif text-lg font-bold">{s.title}</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Export Document Checklist Tool */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#7f1b59]/15 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Buyer Verification Tool</span>
              <h3 className="font-serif text-2xl font-bold">Custom Export Document Packager</h3>
            </div>
            <button 
              onClick={() => openQuoteModal("Custom Export Document Bundle")}
              className="px-6 py-2.5 rounded-full bg-[#7f1b59] dark:bg-[#B52F81] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#9E2370] transition-all shrink-0"
            >
              Request Document Pack
            </button>
          </div>

          <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal">
            Select the specific compliance certificates required by your destination port authority (e.g., FDA, EFSA, GACC):
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.keys(checkedDocs).map(doc => (
              <div 
                key={doc}
                onClick={() => toggleDoc(doc)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                  checkedDocs[doc]
                    ? "bg-[#F8EDF4] dark:bg-[#2D0C22] border-[#7f1b59] text-[#1A0614] dark:text-[#F9F6F0]"
                    : "bg-white dark:bg-[#15040F] border-[#7f1b59]/20 text-[#5C3D52] dark:text-[#DFC8D6]/60"
                }`}
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                  checkedDocs[doc] ? "bg-[#7f1b59] dark:bg-[#B52F81] border-transparent text-white" : "border-[#7f1b59]/30"
                }`}>
                  {checkedDocs[doc] && <CheckSquare className="w-3.5 h-3.5" />}
                </div>
                <span className="text-xs font-bold">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}