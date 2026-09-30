"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  ChevronRight, ArrowRight, Award, ShieldCheck, CheckCircle2, 
  FlaskConical, Sparkles, FileText, Lock
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function QualityStandardsView() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedCategory, setSelectedCategory] = useState<"spices" | "vegetables" | "olive-oil">("spices");

  const standards = [
    { 
      name: "ISO 22000:2018", 
      category: "Food Safety Management System", 
      desc: "Complete, audited food safety management across raw crop aggregation, processing, sifting, sorting, and export container sealing." 
    },
    { 
      name: "HACCP System", 
      category: "Hazard Analysis & Critical Control Points", 
      desc: "Rigorous physical, biological, and chemical CCP controls preventing foreign debris, mold spore formation, and heavy metal cross-contamination." 
    },
    { 
      name: "Halal MUI Indonesia", 
      category: "Sovereign Religious Purity", 
      desc: "Official certification issued by the Indonesian Council of Ulama (MUI) guaranteeing 100% halal compliance across all handling facilities." 
    },
    { 
      name: "GACC Enterprise Approval", 
      category: "General Administration of Customs China", 
      desc: "Officially registered export facility for direct commercial container shipments into the People's Republic of China ports." 
    },
    { 
      name: "EU Bio & Global GAP", 
      category: "Good Agricultural Practice", 
      desc: "Strict pesticide residue monitoring adhering to European Union Maximum Residue Limit (MRL) and Global GAP standards." 
    },
    { 
      name: "Third-Party SGS / Sucofindo", 
      category: "Pre-Shipment Inspection (PSI)", 
      desc: "Independent pre-shipment sampling, lot weighing, container seal verification, and signed COA verification prior to loading." 
    }
  ];

  const labParameters = {
    spices: [
      { parameter: "Moisture Content (%)", nutmeg: "Max 10.0%", pepper: "Max 12.0%", cloves: "Max 11.0%", status: "Guaranteed Safe" },
      { parameter: "Volatile Essential Oil (% v/w)", nutmeg: "Min 6.5%", pepper: "Min 2.0%", cloves: "Min 17.0%", status: "High Potency" },
      { parameter: "Aflatoxin (B1+B2+G1+G2)", nutmeg: "< 5 ppb", pepper: "< 5 ppb", cloves: "< 2 ppb", status: "EU Compliant" },
      { parameter: "Extraneous Organic Matter", nutmeg: "Max 0.5%", pepper: "Max 0.5%", cloves: "Max 0.5%", status: "Optically Cleaned" },
      { parameter: "Salmonella / E. Coli", nutmeg: "Absent / 25g", pepper: "Absent / 25g", cloves: "Absent / 25g", status: "Steam Sterilized" }
    ],
    vegetables: [
      { parameter: "Moisture Content (%)", ginger: "Max 12.5%", shallots: "Fresh / Grade A", garlic: "Fresh / Grade A", status: "Hydro-Cooled" },
      { parameter: "Pesticide Residue (MRL)", ginger: "< 0.01 mg/kg", shallots: "< 0.01 mg/kg", garlic: "< 0.01 mg/kg", status: "EU / US EPA Safe" },
      { parameter: "Heavy Metals (Lead / Cadmium)", ginger: "< 0.1 ppm", shallots: "< 0.1 ppm", garlic: "< 0.1 ppm", status: "ICP-MS Verified" }
    ],
    "olive-oil": [
      { parameter: "Free Fatty Acid (FFA as Oleic)", evoo: "Max 0.8%", voo: "Max 2.0%", status: "Cold Pressed" },
      { parameter: "Peroxide Value (meq O2/kg)", evoo: "Max 20.0", voo: "Max 20.0", status: "Zero Oxidation" },
      { parameter: "UV Absorbance (K270)", evoo: "Max 0.22", voo: "Max 0.25", status: "Purity Confirmed" }
    ]
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
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Quality & Standards</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <FlaskConical className="w-4 h-4" />
                <span>Assay & Quality Protocol</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Rigorous International <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Quality & Lab Standards</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                In agricultural commodity trading, physical grade integrity is everything. DUSON operates under globally recognized food safety management systems, backed by independent laboratory Certificate of Analysis (COA).
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => openQuoteModal("Quality Specification Dossier")} 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Download Lab Specification Pack</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/mario-gogh-VBLHICVh-lI-workers-in the office.jpg" 
                  alt="DUSON Quality Testing Laboratory" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">ISO 22000 & HACCP Certified</div>
                  <div className="font-serif text-base font-medium text-[#1A0614] dark:text-[#F9F6F0]">Independent SGS Pre-Shipment Assay Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Accreditations</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Global Food Safety & Regulatory Framework</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            Certified compliance meeting European Union, US FDA, Japanese MHLW, and Chinese GACC import thresholds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standards.map(s => (
            <div key={s.name} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <Award className="w-8 h-8 text-[#7f1b59] dark:text-[#B52F81]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#7f1b59] dark:text-[#B52F81] block">{s.category}</span>
                <h3 className="font-serif text-2xl font-bold">{s.name}</h3>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{s.desc}</p>
              </div>
              
              <div className="pt-3 border-t border-[#7f1b59]/15 flex items-center gap-1.5 text-xs font-bold text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Audited & Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Laboratory Testing Parameters Table */}
      <section className="py-20 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Analytical Chemistry</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">Standard Laboratory Testing Parameters</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
              Select a commodity category below to view maximum and minimum allowable assay tolerances.
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-8">
            {(["spices", "vegetables", "olive-oil"] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? "bg-[#7f1b59] dark:bg-[#B52F81] text-white shadow-lg"
                    : "bg-white dark:bg-[#220819] text-[#1A0614] dark:text-[#F9F6F0] border border-[#7f1b59]/20"
                }`}
              >
                {cat.replace("-", " ")}
              </button>
            ))}
          </div>

          <div className="max-w-5xl mx-auto rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FCF9FB] dark:bg-[#15040F] text-[#7f1b59] dark:text-[#B52F81] uppercase font-bold text-[11px] tracking-wider border-b border-[#7f1b59]/15">
                  <tr>
                    <th className="p-4 sm:p-5">Testing Parameter</th>
                    <th className="p-4 sm:p-5">Specification Tolerance</th>
                    <th className="p-4 sm:p-5">Compliance Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#7f1b59]/10">
                  {labParameters[selectedCategory].map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F8EDF4]/50 dark:hover:bg-[#2D0C22]/30 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-[#1A0614] dark:text-[#F9F6F0]">{row.parameter}</td>
                      <td className="p-4 sm:p-5 text-[#5C3D52] dark:text-[#DFC8D6]/90 font-normal">
                        {'nutmeg' in row ? `Nutmeg: ${row.nutmeg} | Pepper: ${row.pepper}` : 'ginger' in row ? `Ginger: ${row.ginger} | Garlic: ${row.garlic}` : `EVOO: ${row.evoo}`}
                      </td>
                      <td className="p-4 sm:p-5">
                        <span className="px-3 py-1 rounded-full bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 text-[10px] font-bold uppercase tracking-wider">
                          {row.status}
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

      {/* Sample Request CTA */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1A0614] to-[#3D0A2A] dark:from-[#220819] dark:to-[#4A1038] text-white border border-[#7f1b59]/30 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">Require Physical Lot Samples & Full COA?</h3>
            <p className="text-xs sm:text-sm text-[#DFC8D6]/80 font-normal max-w-xl">
              We provide accredited 250g laboratory sample pouches via DHL Express along with complete SGS laboratory certificates prior to contract execution.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal("Request 250g Lab Sample Pouch")}
            className="px-8 py-4 rounded-full bg-[#7f1b59] dark:bg-[#B52F81] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#9E2370] dark:hover:bg-[#D94B9F] transition-all shrink-0 shadow-lg"
          >
            Dispatch Sample Express
          </button>
        </div>
      </section>
    </div>
  );
}