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
  Download,
  Flame,
  Globe2,
  Box,
  Truck,
  Layers,
  HelpCircle,
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function NutmegView() {
  const { openQuoteModal } = useQuoteModal();
  const [activeGradeTab, setActiveGradeTab] = useState("abcd");

  const grades = [
    {
      id: "abcd",
      name: "Nutmeg ABCD Grade (Whole Premium)",
      count: "80 – 110 pieces / lb",
      oil: "7.5% – 9.0% v/w Volatile Oil",
      moisture: "Max 10.0%",
      aflatoxin: "B1 < 5 ppb, Total < 10 ppb",
      desc: "Prime hand-picked whole nutmeg kernels with smooth intact pericarp shell and rich dark brown vein marbling. Preferred by premium spice grinders, oleoresin extractors, and gourmet food brands.",
      uses: "Gourmet culinary spice grinding, essential oil distillation, high-grade seasoning blends.",
    },
    {
      id: "sound",
      name: "Nutmeg Sound / SS Grade (Whole Uniform)",
      count: "110 – 130 pieces / lb",
      oil: "6.5% – 8.0% v/w Volatile Oil",
      moisture: "Max 10.0%",
      aflatoxin: "B1 < 5 ppb, Total < 10 ppb",
      desc: "Sound whole nutmegs free from insect infestation, mold, or mechanical fracture. Machine-sorted and gravity separated for uniform density and size.",
      uses: "Industrial meat processing, bakery spice formulations, commercial spice packing.",
    },
    {
      id: "bwp",
      name: "Nutmeg BWP Grade (Distillation & Extraction)",
      count: "Mixed Broken & Punky Cuts",
      oil: "5.5% – 7.5% v/w Volatile Oil",
      moisture: "Max 11.0%",
      aflatoxin: "Tested & Certified per Lot",
      desc: "Broken, wormy, and punky nutmeg pieces selected specifically for essential oil steam distillation, myristicin extraction, and oleoresin processing.",
      uses: "Essential oil steam distillation, myristicin isolation, pharmaceutical extraction.",
    },
    {
      id: "mace",
      name: "Whole Red Mace (Banda Flower Flakes)",
      count: "Hand-Picked Whole Aril Flakes",
      oil: "8.0% – 12.0% v/w Volatile Oil",
      moisture: "Max 10.0%",
      aflatoxin: "B1 < 5 ppb, Total < 10 ppb",
      desc: "Crimson-red aril flower sheath surrounding the nutmeg seed. Sun-dried carefully to retain bright natural color, delicate warm aromatic flavor, and sweet aroma.",
      uses: "High-end charcuterie seasoning, savory sauces, luxury spice blending, cosmetics.",
    },
  ];

  const fullSpecs = [
    { label: "Botanical Name", value: "Myristica fragrans Houtt" },
    { label: "Commercial Grades", value: "ABCD, Sound/SS, BWP, Whole Red Mace, Ground Nutmeg Powder" },
    { label: "Origin Region", value: "Banda Islands, Siaul (North Sulawesi), Ambon (Maluku, Indonesia)" },
    { label: "Moisture Content", value: "Max 10.0% (Oven Dry Assay ASTM Method)" },
    { label: "Volatile Essential Oil", value: "6.5% – 9.0% v/w (Steam Distillation Assay)" },
    { label: "Aflatoxin (B1 + Total)", value: "B1 < 5 ppb, Total < 10 ppb (EU Regulation & US FDA Compliant)" },
    { label: "Myristicin Content", value: "8.0% – 14.0% (Gas Chromatography Assay)" },
    { label: "Foreign Matter", value: "< 0.5% max (Air Screened & Hand Picked)" },
    { label: "Insect Infestation / Mold", value: "0.0% (Zero Active Weevils / Fumigated)" },
    { label: "Packaging Options", value: "25kg / 50kg Double Jute Bags with Poly Liner, 10kg Vacuum Bricks" },
    { label: "Minimum Order Qty (MOQ)", value: "1 x 20ft FCL (~14.0 Metric Tons)" },
    { label: "Shipping Terms", value: "FOB Jakarta / Surabaya, CIF Worldwide Discharge Ports" },
  ];

  const processSteps = [
    { step: "01", title: "Volcanic Island Harvesting", desc: "Harvested at peak maturity by partner smallholders across Banda and North Maluku." },
    { step: "02", title: "Controlled Solar Curing", desc: "Aril mace separated by hand and seed nuts solar dried on bamboo racks for 6 weeks." },
    { step: "03", title: "De-shelling & Gravity Grading", desc: "Pericarp cracked and kernels sorted by density, moisture, and piece count per pound." },
    { step: "04", title: "Aflatoxin & Lab Assay", desc: "HPLC testing for aflatoxins B1/Total and volatile oil assay prior to vacuum packaging." },
  ];

  const faqs = [
    {
      q: "What is the difference between ABCD Nutmeg and BWP Nutmeg?",
      a: "ABCD Nutmeg consists of prime, unbroken whole kernels sorted by size (80-110 pcs/lb), ideal for culinary spice packing and grinding. BWP (Broken, Wormy, Punky) consists of fractured nutmeg pieces, used primarily for essential oil steam distillation and oleoresin extraction.",
    },
    {
      q: "How does DUSON guarantee compliance with European Union Aflatoxin limits?",
      a: "All nutmeg lots undergo strict moisture control (<10%) during solar curing to prevent Aspergillus mold growth. Prior to export container loading, samples from each batch are analyzed via High-Performance Liquid Chromatography (HPLC) to verify Aflatoxin B1 is under 5 ppb and Total under 10 ppb.",
    },
    {
      q: "What is the standard container loading capacity for whole nutmeg?",
      a: "A standard 20-foot Full Container Load (FCL) accommodates approximately 14.0 Metric Tons of whole nutmeg packed in 50kg double jute bags with polyethylene inner liners.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10 bg-gradient-to-b from-[#F8EDF4]/60 to-transparent dark:from-[#15040F]/60 dark:to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Breadcrumb */}
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

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Indonesian Whole <span className="text-[#7f1b59] dark:text-[#B52F81]">Nutmeg & Mace</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                Directly harvested from the volcanic islands of Banda and North Maluku. Machine cleaned, gravity sorted, and HPLC tested for aflatoxin compliance and maximum essential oil concentration.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs font-medium border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15">
                <div>
                  <span className="text-[#7f1b59] dark:text-[#B52F81] font-bold block">Volatile Oil</span>
                  <span className="text-[#5C3D52] dark:text-[#DFC8D6]/80">6.5% – 9.0% v/w</span>
                </div>
                <div>
                  <span className="text-[#7f1b59] dark:text-[#B52F81] font-bold block">Moisture Assay</span>
                  <span className="text-[#5C3D52] dark:text-[#DFC8D6]/80">Max 10.0% Oven Dry</span>
                </div>
                <div>
                  <span className="text-[#7f1b59] dark:text-[#B52F81] font-bold block">EU Aflatoxin</span>
                  <span className="text-[#5C3D52] dark:text-[#DFC8D6]/80">B1 &lt; 5 ppb Certified</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => openQuoteModal("Indonesian Nutmeg & Mace")}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#7f1b59] hover:bg-[#9c2870] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xl"
                >
                  <span>Request Nutmeg Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#specs"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#7f1b59]/30 text-[#1A0614] dark:text-[#F9F6F0] text-xs font-bold uppercase tracking-wider hover:bg-[#7f1b59]/10 transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" />
                  <span>View Tech Specs</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image
                  src="/images/nutmeg-spices.jpg"
                  alt="Indonesian Nutmeg Whole & Mace"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0209]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0D0209]/80 backdrop-blur-md border border-[#B52F81]/30 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#F294CE]">Banda Islands Origin</div>
                  <div className="font-serif text-lg font-bold text-white">High Volatile Oil & Essential Extract</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GRADE CLASSIFICATION INTERACTIVE SELECTOR */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
            Commercial Grade Classifications
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold">Select Physical Nutmeg Grade</h2>
          <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            Review sizing specifications, essential oil content, and industrial applications for each grade.
          </p>
        </div>

        {/* Grade Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {grades.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGradeTab(g.id)}
              className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeGradeTab === g.id
                  ? "bg-[#7f1b59] text-white dark:bg-[#B52F81] dark:text-[#0D0209] shadow-lg"
                  : "bg-[#F8EDF4] dark:bg-[#220819] text-[#5C3D52] dark:text-[#DFC8D6] hover:bg-[#7f1b59]/10"
              }`}
            >
              {g.name.split("(")[0]}
            </button>
          ))}
        </div>

        {/* Active Grade Content Display Card */}
        {grades.map(
          (g) =>
            g.id === activeGradeTab && (
              <div
                key={g.id}
                className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/25 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7f1b59]/10 text-[#7f1b59] dark:bg-[#B52F81]/20 dark:text-[#F294CE] text-[11px] font-extrabold uppercase tracking-wider">
                    {g.count}
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-extrabold">{g.name}</h3>
                  <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/90 font-normal leading-relaxed">
                    {g.desc}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 text-xs">
                    <div>
                      <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70 block font-semibold">Volatile Oil</span>
                      <strong className="text-[#7f1b59] dark:text-[#B52F81] text-sm">{g.oil}</strong>
                    </div>
                    <div>
                      <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70 block font-semibold">Moisture Limit</span>
                      <strong className="text-[#1A0614] dark:text-[#F9F6F0] text-sm">{g.moisture}</strong>
                    </div>
                    <div>
                      <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70 block font-semibold">Aflatoxin Limit</span>
                      <strong className="text-[#1A0614] dark:text-[#F9F6F0] text-sm">{g.aflatoxin}</strong>
                    </div>
                  </div>

                  <div className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80">
                    <strong className="text-[#1A0614] dark:text-[#F9F6F0] font-bold">Primary Industrial Uses:</strong> {g.uses}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center space-y-4 p-6 rounded-2xl bg-[#F8EDF4]/60 dark:bg-[#15040F] border border-[#7f1b59]/15 text-center">
                  <span className="text-xs uppercase tracking-widest text-[#7f1b59] dark:text-[#B52F81] font-bold">
                    Contract Availability
                  </span>
                  <div className="text-sm font-bold text-[#1A0614] dark:text-[#F9F6F0]">
                    20ft & 40ft FCL Direct Container Dispatch
                  </div>
                  <button
                    onClick={() => openQuoteModal(g.name)}
                    className="w-full py-3 rounded-full bg-[#7f1b59] hover:bg-[#9c2870] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    Quote For {g.name.split("(")[0]}
                  </button>
                </div>
              </div>
            )
        )}
      </section>

      {/* SPECIFICATIONS TABLE */}
      <section id="specs" className="py-20 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
            Technical Quality Parameters
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold">Technical Export Specifications</h2>
          <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            Certificate of Analysis (COA) and Phytosanitary Certificate issued for every dispatched container lot.
          </p>
        </div>

        <div className="rounded-3xl border border-[#7f1b59]/20 dark:border-[#B52F81]/20 overflow-hidden bg-white dark:bg-[#220819] shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <tbody>
              {fullSpecs.map((s, idx) => (
                <tr
                  key={s.label}
                  className={idx % 2 === 0 ? "bg-[#FCF9FB] dark:bg-[#15040F]" : "bg-white dark:bg-[#220819]"}
                >
                  <td className="py-4 px-6 font-bold text-[#1A0614] dark:text-[#F9F6F0] w-1/3 border-b border-[#7f1b59]/10">
                    {s.label}
                  </td>
                  <td className="py-4 px-6 text-[#5C3D52] dark:text-[#DFC8D6]/90 font-medium border-b border-[#7f1b59]/10">
                    {s.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FOUR STAGE CONDITIONING WORKFLOW */}
      <section className="py-20 bg-[#F8EDF4]/60 dark:bg-[#15040F]/60 border-y border-[#7f1b59]/15 dark:border-[#B52F81]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
              Harvest & Quality Workflow
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold">From Volcanic Harvest to Ocean Freight</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p) => (
              <div
                key={p.step}
                className="p-6 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3 shadow-sm"
              >
                <div className="font-serif text-3xl font-extrabold text-[#7f1b59] dark:text-[#B52F81]">{p.step}</div>
                <h3 className="font-serif text-lg font-bold">{p.title}</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NUTMEG FAQ SECTION */}
      <section className="py-20 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81]">
            Nutmeg Procurement FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold">Questions About Nutmeg Contracts</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#7f1b59] dark:text-[#B52F81] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/90 font-normal leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#7f1b59] text-white text-center space-y-6 shadow-2xl">
          <h3 className="font-serif text-3xl font-extrabold">Request Nutmeg Samples or Contract Quotation</h3>
          <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto font-normal leading-relaxed">
            Specify your required grade (ABCD, Sound, BWP or Red Mace), quantity, and destination port to receive a formal quotation.
          </p>
          <button
            onClick={() => openQuoteModal("Nutmeg Master Contract")}
            className="px-8 py-4 rounded-full bg-white text-[#1A0614] text-xs font-extrabold uppercase tracking-widest hover:bg-[#F9F6F0] transition-all shadow-lg"
          >
            Inquire For Nutmeg Pricing
          </button>
        </div>
      </section>

    </div>
  );
}