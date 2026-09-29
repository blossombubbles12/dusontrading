"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, ShieldCheck, Award, FileText, CheckCircle2, Download } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function NutmegView() {
  const { openQuoteModal } = useQuoteModal();

  const specs = [
    { label: "Botanical Name", value: "Myristica fragrans" },
    { label: "Available Grades", value: "ABCD (80-110 pcs/lb), Sound / Whole, BWP (Broken, Wormy, Punky), SS (Sound Shriveled)" },
    { label: "Origin Region", value: "Banda Islands, Siaul / North Sulawesi, Ambon (Maluku, Indonesia)" },
    { label: "Moisture Content", value: "Max 10.0% (Oven Dry Assay)" },
    { label: "Volatile Oil Content", value: "6.5% - 9.0% v/w (Steam Distillation)" },
    { label: "Aflatoxin (B1 + Total)", value: "B1 < 5 ppb, Total < 10 ppb (EU & US FDA Compliant)" },
    { label: "Foreign Matter", value: "< 0.5% max (Machine & Hand-Picked)" },
    { label: "Packaging Options", value: "25kg / 50kg Double Jute Bags with Poly-Inner Liner, Vacuum Bricks" },
    { label: "Minimum Order Qty (MOQ)", value: "1 x 20ft FCL (~14 Metric Tons)" },
    { label: "Shipping Terms", value: "FOB Jakarta / Surabaya, CIF Worldwide Discharge Ports" }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/commodities" className="hover:underline">Commodities</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Nutmeg & Mace</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Award className="w-4 h-4" />
                <span>Indonesian Origin Benchmark</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Premium Indonesian <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Nutmeg & Mace</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                Directly harvested from the volcanic islands of Maluku and Sulawesi. Machine sorted, hand-inspected, and laboratory tested for aflatoxins and maximum essential oil concentration.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button onClick={() => openQuoteModal("Nutmeg & Mace")} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Request Nutmeg Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image src="/images/nutmeg-spices.jpg" alt="Indonesian Nutmeg Whole & Mace" fill priority className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-24 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium">Technical Export Specifications</h2>
          <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/70">Certificate of Analysis (COA) supplied with every dispatched ocean container.</p>
        </div>

        <div className="rounded-2xl border border-[#7f1b59]/20 dark:border-[#B52F81]/15 overflow-hidden bg-white dark:bg-[#220819]">
          <table className="w-full text-left text-xs sm:text-sm">
            <tbody>
              {specs.map((s, idx) => (
                <tr key={s.label} className={idx % 2 === 0 ? "bg-[#FCF9FB] dark:bg-[#15040F]" : "bg-white dark:bg-[#220819]"}>
                  <td className="py-4 px-6 font-semibold text-[#1A0614] dark:text-[#F9F6F0] w-1/3 border-b border-[#7f1b59]/10">{s.label}</td>
                  <td className="py-4 px-6 text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light border-b border-[#7f1b59]/10">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}