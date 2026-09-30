"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Globe2, ChevronRight, ArrowRight, ShieldCheck, Scale, Award, 
  FileCheck, CheckCircle2, FlaskConical, Target, ShieldAlert, 
  Cpu, Users2, Lock, Sparkles, Anchor
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function OurApproachView() {
  const { openQuoteModal } = useQuoteModal();

  const pillars = [
    { 
      number: "01",
      title: "Direct Producer Disintermediation", 
      badge: "Upstream Transparency",
      desc: "We eliminate multi-tiered broker channels by maintaining direct aggregation agreements with 1,200+ smallholder farming families and cooperative estates across Sumatra, Java, Sulawesi, and the Maluku Islands.",
      points: [
        "Elimination of 3-4 middleman price markups.",
        "Guaranteed advance harvest price security for farming families.",
        "Direct farm-level oversight on pesticide-free cultivation practices."
      ]
    },
    { 
      number: "02",
      title: "Dual-Stage Laboratory Assay Vetting", 
      badge: "Scientific Quality Control",
      desc: "Quality control begins at regional aggregation hubs and concludes with independent accredited laboratory analysis (SGS / Sucofindo) prior to bonded port container gate-in.",
      points: [
        "Origin moisture benchmarking (<10.0% safe threshold).",
        "European Union MRL compliance for aflatoxins (< 5 ppb B1).",
        "Volatile essential oil potency verification via gas chromatography."
      ]
    },
    { 
      number: "03",
      title: "Active Cold-Chain & Maritime Telematics", 
      badge: "Logistical Precision",
      desc: "Our logistics architecture provides continuous GPS tracking and digital data loggers, recording container temperature and relative humidity from mill departure to destination discharge port.",
      points: [
        "Hydro-cooling within 4 hours for perishable highland produce.",
        "Genset reefer monitoring during 20+ day ocean voyages.",
        "Dessicant dry-bagging preventing equatorial container sweat."
      ]
    },
    { 
      number: "04",
      title: "Institutional Trade Finance & Risk Hedging", 
      badge: "Commercial Security",
      desc: "We provide global processors and distributors with structured supply agreements, forward volume pricing, and documentary credit terms backed by top-tier international banks.",
      points: [
        "Irrevocable Letters of Credit (L/C at Sight) and T/T settlement.",
        "Multi-quarter forward supply contracts with fixed price caps.",
        "14-day demurrage buffer included at key discharge ports."
      ]
    }
  ];

  const qualityStages = [
    {
      stage: "Stage 01",
      title: "Farm-Gate Intake & Moisture Testing",
      desc: "Digital moisture meters verify raw crop moisture at village buying hubs; only lots meeting baseline parameters are accepted."
    },
    {
      stage: "Stage 02",
      title: "Mechanical Destoning & Optical Sifting",
      desc: "Jakarta central processing mills remove dust, extraneous botanical debris, and defective berries using vibratory gravity tables."
    },
    {
      stage: "Stage 03",
      title: "Accredited Third-Party Sampling",
      desc: "SGS / Sucofindo inspectors independently sample container lots according to ISO 2859 international statistical standards."
    },
    {
      stage: "Stage 04",
      title: "Hermetic Packaging & Vacuum Sealing",
      desc: "Finished commodities are packed in multi-layer Kraft bags with poly-liners or vacuum-sealed bricks with oxygen scavengers."
    },
    {
      stage: "Stage 05",
      title: "Phosphine Fumigation & Container Seal",
      desc: "Containers are gas-fumigated to prevent live insect activity and locked with tamper-evident sovereign customs bolt seals."
    }
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
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Our Approach</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <ShieldCheck className="w-4 h-4" />
                <span>Precision, Transparency & Risk Mitigation</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
                Disciplined Execution in <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Agricultural Trade</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                We combine deep on-the-ground agronomic roots in the Indonesian archipelago with rigorous international risk management, ensuring physical grade integrity, strict sovereign compliance, and punctual ocean container delivery.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => openQuoteModal("Our Approach Consultation")} 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Start Procurement Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/campaign-creators-gMsnXqILjp4-workers meeting conference.jpg" 
                  alt="DUSON Strategy Session" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Operational Philosophy</div>
                  <div className="font-serif text-base font-medium text-[#1A0614] dark:text-[#F9F6F0]">Zero Intermediaries • 100% Verified Quality • Fixed Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Strategic Pillars */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Core Principles</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight">Four Methodological Pillars</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            How DUSON delivers commercial certainty and risk mitigation for international food processors and wholesale importers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p) => (
            <div 
              key={p.title} 
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm hover:border-[#7f1b59] transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-[#7f1b59] dark:text-[#B52F81]">{p.number}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#F8EDF4] dark:bg-[#15040F] text-[#7f1b59] dark:text-[#B52F81] border border-[#7f1b59]/20">
                    {p.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{p.desc}</p>
              </div>

              <div className="pt-4 border-t border-[#7f1b59]/15 space-y-2">
                {p.points.map((pt, idx) => (
                  <div key={idx} className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/90 font-normal flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Verification Stages */}
      <section className="py-20 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Quality Protocol</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">5-Stage Quality Assurance Lifecycle</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
              Every dispatched container lot undergoes rigorous multi-tier physical and analytical checks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {qualityStages.map((qs) => (
              <div key={qs.stage} className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#7f1b59] dark:text-[#B52F81] block">{qs.stage}</span>
                <h3 className="font-serif text-base font-bold">{qs.title}</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{qs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-widest">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Risk Management Architecture</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">Insulating Buyers Against Volatility</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
              Commodity markets are subject to seasonal weather anomalies, freight rate spikes, and fluctuating import tariffs. DUSON shields your procurement pipeline through strategic inventory buffers, forward hedging contracts, and guaranteed vessel allocations.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#7f1b59] dark:text-[#B52F81] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#1A0614] dark:text-[#F9F6F0] block font-bold">Fixed-Price Forward Supply Agreements</strong>
                  <span className="text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">Lock in quarterly commodity prices up to 6 months in advance to protect against origin harvest deficits.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 flex items-start gap-3">
                <Anchor className="w-5 h-5 text-[#7f1b59] dark:text-[#B52F81] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#1A0614] dark:text-[#F9F6F0] block font-bold">Priority Ocean Freight Allocations</strong>
                  <span className="text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">Direct carrier contracts preventing seasonal container roll-overs at Singapore and Tanjung Pelepas transshipment hubs.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
              <Image 
                src="/images/docusign-7RWBSYA9Rro-workers looking at computer.jpg" 
                alt="DUSON Trade Risk Desk" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Institutional Trade Desk</div>
                <div className="font-serif text-base font-medium text-[#1A0614] dark:text-[#F9F6F0]">Complete Documentary Credit & Delivery Security</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}