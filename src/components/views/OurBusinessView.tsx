"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe2, ChevronRight, ArrowRight, ShieldCheck, Scale, Layers, TrendingUp, Building2, Anchor, CheckCircle2, PhoneCall } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function OurBusinessView() {
  const { openQuoteModal } = useQuoteModal();

  const businessDivisions = [
    {
      title: "Direct Origin Commodity Sourcing",
      subtitle: "Upstream Aggregation",
      desc: "Operating direct procurement partnerships across Indonesia's major agricultural belts and certified European groves. We eliminate intermediary margin layers to deliver superior pricing and complete lot traceability.",
      points: ["Farmer cooperative partnerships in Maluku & Sumatra", "Multi-region aggregation centers in Java", "Strict pre-harvest quality vetting & moisture benchmarking"]
    },
    {
      title: "Quality Grading & Phytosanitary Assurance",
      subtitle: "Laboratory Validation",
      desc: "Every metric ton of food commodities handled by DUSON undergoes stringent physical sorting, moisture analysis, volatile oil testing, and microbiological screening under ISO 22000 standards.",
      points: ["Certified SGS pre-shipment inspections", "Full phytosanitary quarantine clearance", "Custom packaging: vacuum bricks, kraft liners, and flexitanks"]
    },
    {
      title: "International Maritime & Cold-Chain Logistics",
      subtitle: "Global Freight Dispatch",
      desc: "From bonded warehousing at Port Tanjung Priok (Jakarta) to international container carrier bookings, we handle complete multimodal transit, customs declarations, and temperature-controlled freight.",
      points: ["Direct liner contracts with top tier maritime carriers", "Active reefer and dry container tracking", "Flexible Incoterms: CIF, FOB, CFR, and DAP delivery"]
    },
    {
      title: "Trade Finance & Institutional Contracting",
      subtitle: "Commercial Structuring",
      desc: "We provide global importers and industrial processors with structured commodity supply agreements, seasonal hedging mechanisms, and flexible payment terms backed by premier international banks.",
      points: ["Irrevocable Letters of Credit (LC) & TT terms", "Quarterly and annual forward volume contracts", "Price risk management and currency hedging support"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span>Company</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Our Business</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Globe2 className="w-4 h-4" />
                <span>Enterprise B2B Trading Infrastructure</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
                An Integrated Model for <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Global Commodity Trade</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                DUSON TRADING GROUP PT. integrates primary farm aggregation, certified laboratory grading, bonded port logistics, and international trade finance into a seamless corporate merchant structure.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button onClick={() => openQuoteModal()} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Inquire for Supply Contracts</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image src="/images/charles-forerunner-3fPXt37X6UQ.jpg" alt="DUSON Trading Group Business Operations" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0209]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0D0209]/80 backdrop-blur-md border border-[#B52F81]/30 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#B52F81]">Operating Mandate</div>
                  <div className="font-serif text-lg">Scalable, Traceable & Compliant Trade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight">Four Core Business Units</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">From soil to maritime terminal, our synchronized operations guarantee consistency at scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessDivisions.map((div, i) => (
            <motion.div key={div.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm hover:shadow-xl transition-all">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#7f1b59] dark:text-[#B52F81] block mb-2">{div.subtitle}</span>
              <h3 className="font-serif text-2xl font-medium mb-4">{div.title}</h3>
              <p className="text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75 font-light leading-relaxed mb-6">{div.desc}</p>
              <ul className="space-y-2 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15 pt-6">
                {div.points.map((pt, pIdx) => (
                  <li key={pIdx} className="text-xs text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A0614] text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl">Partner with Indonesia&apos;s Leading Trade House</h2>
          <p className="text-sm text-white/70 font-light">Contact our commercial trade desk in Jakarta to discuss volume agreements and specifications.</p>
          <button onClick={() => openQuoteModal()} className="px-8 py-4 rounded-full bg-[#B52F81] text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#D94B9F] transition-all">
            Request Trade Proposal
          </button>
        </div>
      </section>
    </div>
  );
}