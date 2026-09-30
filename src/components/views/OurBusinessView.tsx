"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Globe2, ChevronRight, ArrowRight, ShieldCheck, Scale, Layers, 
  TrendingUp, Building2, Anchor, Ship, CheckCircle2, PhoneCall, Factory, 
  Truck, Award, BarChart3, Database, ShieldAlert
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function OurBusinessView() {
  const { openQuoteModal } = useQuoteModal();
  const [activeTab, setActiveTab] = useState<number>(0);

  const businessDivisions = [
    {
      title: "Direct Origin Commodity Sourcing",
      subtitle: "Upstream Farm Aggregation",
      icon: Factory,
      desc: "We operate direct procurement hubs across Indonesia's historical spice corridors (Maluku, Sumatra, Java, Sulawesi) and partner olive cooperatives in the Mediterranean. By aggregating directly at the farm gate, we eliminate 3 to 4 intermediary broker tiers to ensure competitive pricing, unadulterated botanical purity, and total lot traceability.",
      stats: "1,200+ Partner Farm Families • 4 Key Agronomic Hubs",
      points: [
        "Long-term purchase agreements providing advance harvest financing and price security to smallholder cooperatives.",
        "On-the-ground agronomists providing soil health diagnostics and harvest timing guidance.",
        "Farm-gate sorting stations to eliminate foreign matter and immature crop berries before mill dispatch."
      ],
      img: "/images/nutmeg-spices.jpg"
    },
    {
      title: "Quality Grading & Laboratory Validation",
      subtitle: "Scientific Assay & Phytosanitary Control",
      icon: ShieldCheck,
      desc: "Every metric ton of agricultural commodities handled by DUSON undergoes multi-stage laboratory testing under ISO 22000 and HACCP management frameworks. We verify physical density, moisture limits, volatile essential oil concentration, and microbiological purity before bonded container sealing.",
      stats: "ISO 22000:2018 Certified • SGS / Sucofindo Pre-Shipment Assay",
      points: [
        "Certified SGS and Sucofindo pre-shipment sampling, weighing, and container seal verification.",
        "Strict compliance with European Union MRL pesticide thresholds and US FDA import regulations.",
        "Custom industrial packing: vacuum brick packs, multi-layer Kraft bags with poly-liners, and ISO flexitanks."
      ],
      img: "/images/mario-gogh-VBLHICVh-lI-workers-in the office.jpg"
    },
    {
      title: "International Maritime & Cold-Chain Logistics",
      subtitle: "Intermodal Freight & Port Operations",
      icon: Ship,
      desc: "Operating bonded handling facilities at Port Tanjung Priok (Jakarta) and Tanjung Perak (Surabaya), DUSON secures fixed container space allocations with Tier-1 ocean shipping lines. We manage temperature-controlled inland transport, export customs declarations (PEB), and direct ocean liner chartering.",
      stats: "30+ Global Ports Served • 100% On-Time Allocation",
      points: [
        "Direct liner contracts with Maersk, MSC, ONE, and CMA CGM securing priority peak-season space.",
        "Active GPS telematics and digital data loggers monitoring reefer temperatures from farm to discharge port.",
        "Flexible delivery under Incoterms 2020: FOB Indonesian ports, CIF destination ports, CFR, and FCA."
      ],
      img: "/images/charles-forerunner-3fPXt37X6UQ.jpg"
    },
    {
      title: "Trade Finance & Institutional Contracting",
      subtitle: "Commercial Structuring & Risk Management",
      icon: Scale,
      desc: "We provide global food manufacturers, industrial spice extractors, and wholesale distributors with structured commodity agreements. Our commercial trade desk structures multi-quarter forward supply contracts, fixed-price risk hedges, and secure banking credit instruments.",
      stats: "Irrevocable L/C at Sight • T/T 30/70 Banking Settlement",
      points: [
        "Documentary Letter of Credit (L/C at Sight) structured through top-tier international banking institutions.",
        "Quarterly and annual forward volume purchase agreements protecting buyers against price volatility.",
        "Currency settlement flexibility in United States Dollars (USD) and Euros (EUR)."
      ],
      img: "/images/campaign-creators-gMsnXqILjp4-workers meeting conference.jpg"
    }
  ];

  const operationalMetrics = [
    { label: "Annual Commodity Volume", value: "50,000+ MT", desc: "Aggregated, processed, and exported globally" },
    { label: "Partner Farm Families", value: "1,200+", desc: "Direct smallholder contracts in Maluku & Sumatra" },
    { label: "Bonded Storage Footprint", value: "25,000+ Sqm", desc: "Jakarta, Surabaya, Rotterdam & Dubai facilities" },
    { label: "Destination Sea Ports", value: "30+ Ports", desc: "Across Europe, Middle East, Asia & Americas" }
  ];

  const valueChainSteps = [
    { step: "01", title: "Farm-Gate Aggregation", desc: "Direct procurement from vetted cooperative clusters across Sumatra, Java, and the Maluku Islands." },
    { step: "02", title: "Central Processing & Sifting", desc: "Mechanical destoning, optical color sorting, air-cleaning, and controlled drying in Jakarta mills." },
    { step: "03", title: "Laboratory COA Assay", desc: "Independent pre-shipment sampling by SGS / Sucofindo verifying moisture, volatile oils, and aflatoxins." },
    { step: "04", title: "Sovereign Customs PEB", desc: "Filing export declarations, Phytosanitary Quarantine permits, and preferential COO Form D/E/AK." },
    { step: "05", title: "Ocean Freight Dispatch", desc: "Containerized loading, Phosphine fumigation, and direct liner voyage to destination discharge port." }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
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
                <span>Integrated B2B Commercial Architecture</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
                An Integrated Model for <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Global Commodity Trade</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                DUSON TRADING GROUP PT. integrates primary farm-gate aggregation, certified laboratory assay verification, bonded port logistics, and structured international trade finance into a seamless, institutional merchant model.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => openQuoteModal("Our Business Supply Proposal")} 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Inquire for Supply Contracts</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/charles-forerunner-3fPXt37X6UQ.jpg" 
                  alt="DUSON Global Trade Operations" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Operating Mandate</div>
                  <div className="font-serif text-base font-medium text-[#1A0614] dark:text-[#F9F6F0]">Direct Sourcing, Certified Assays & Maritime Dispatch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Capacity Metrics */}
      <section className="py-16 bg-[#F8EDF4] dark:bg-[#15040F] border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {operationalMetrics.map((m) => (
              <div key={m.label} className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 shadow-sm space-y-2">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#7f1b59] dark:text-[#B52F81]">{m.value}</div>
                <div className="text-xs font-bold text-[#1A0614] dark:text-[#F9F6F0]">{m.label}</div>
                <p className="text-[11px] text-[#5C3D52] dark:text-[#DFC8D6]/70 font-normal">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Core Business Divisions (Interactive Cards) */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Operational Architecture</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight">Four Core Commercial Divisions</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            From volcanic origin soil to destination maritime container terminals, our synchronized business units guarantee quality and contractual reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessDivisions.map((div, i) => {
            const Icon = div.icon;
            return (
              <div 
                key={div.title} 
                className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm hover:border-[#7f1b59] transition-all space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden border border-[#7f1b59]/15">
                    <Image src={div.img} alt={div.title} fill className="object-cover" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1A0614]/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#F9F6F0]">
                      {div.subtitle}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F8EDF4] dark:bg-[#2D0C22] flex items-center justify-center text-[#7f1b59] dark:text-[#B52F81] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0]">{div.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">
                    {div.desc}
                  </p>

                  <div className="p-3 rounded-xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 text-xs font-bold text-[#7f1b59] dark:text-[#B52F81]">
                    {div.stats}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#7f1b59]/15 space-y-2">
                  {div.points.map((pt, pIdx) => (
                    <div key={pIdx} className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/90 font-normal flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Value Chain Lifecycle */}
      <section className="py-20 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">End-to-End Workflow</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">The DUSON Integrated Value Chain</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
              How agricultural commodities move seamlessly from Indonesian harvest fields to global industrial discharge ports.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {valueChainSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3 shadow-sm">
                <span className="font-serif text-3xl font-bold text-[#7f1b59] dark:text-[#B52F81]">{s.step}</span>
                <h3 className="font-serif text-base font-bold">{s.title}</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1A0614] to-[#3D0A2A] dark:from-[#220819] dark:to-[#4A1038] text-white border border-[#7f1b59]/30 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">Partner with Indonesia&apos;s Institutional Trade House</h3>
            <p className="text-xs sm:text-sm text-[#DFC8D6]/80 font-normal max-w-xl">
              Connect with our commercial desk specialists in Jakarta to discuss volume supply agreements, forward hedging, and custom packaging.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal("Enterprise Trade Proposal")}
            className="px-8 py-4 rounded-full bg-[#7f1b59] dark:bg-[#B52F81] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#9E2370] dark:hover:bg-[#D94B9F] transition-all shrink-0 shadow-lg"
          >
            Request Trade Proposal
          </button>
        </div>
      </section>
    </div>
  );
}