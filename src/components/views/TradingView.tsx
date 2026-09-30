"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  ChevronRight, ArrowRight, ShieldCheck, Scale, Globe2, FileCheck2, 
  Coins, Lock, Truck, CheckCircle2, Building2, HelpCircle, ArrowUpRight
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function TradingView() {
  const { openQuoteModal } = useQuoteModal();
  const [activeIncoterm, setActiveIncoterm] = useState<"FOB" | "CIF" | "CFR" | "FCA">("FOB");

  const tradingServices = [
    {
      title: "Direct Origin Sourcing",
      link: "/trading/sourcing",
      badge: "Upstream Supply",
      desc: "Direct farm-gate aggregation across Indonesian cooperative networks in Sumatra, Java, and the Maluku Islands.",
      metrics: "1,200+ Partner Farms • 100% Traceable Lots",
      img: "/images/nutmeg-spices.jpg"
    },
    {
      title: "Export & Custom Clearance",
      link: "/trading/export",
      badge: "Sovereign Compliance",
      desc: "Full execution of Indonesian customs export declarations (PEB), Agricultural Quarantine clearance, and COO Form D/E/AK issuance.",
      metrics: "Zero Custom Delays • Sovereign COO Suite",
      img: "/images/charles-forerunner-3fPXt37X6UQ.jpg"
    },
    {
      title: "Quality Standards & Lab Testing",
      link: "/trading/quality-standards",
      badge: "Assay Assurance",
      desc: "Pre-shipment inspection and laboratory testing accredited under ISO 22000, HACCP, and third-party SGS/Sucofindo verification.",
      metrics: "ISO 22000:2018 • SGS Pre-Shipment Seal",
      img: "/images/mario-gogh-VBLHICVh-lI-workers-in the office.jpg"
    }
  ];

  const incotermDetails = {
    FOB: {
      fullname: "Free On Board (Tanjung Priok / Surabaya / Belawan Port)",
      seller承担: "Local farm aggregation, sorting/grading, export customs clearance, port handling, and loading aboard the vessel.",
      buyer承担: "Ocean freight chartering, marine cargo insurance, destination import duties, and port clearance.",
      recommendedFor: "Buyers with existing global ocean carrier service contracts seeking maximum freight rate control."
    },
    CIF: {
      fullname: "Cost, Insurance & Freight (Main Destination Ports Worldwide)",
      seller承担: "All origin charges, export clearance, ocean vessel chartering, and comprehensive Institute Cargo Clauses (A) marine insurance.",
      buyer承担: "Destination port unloading, import clearance, tariff payment, and final inland drayage.",
      recommendedFor: "Institutional buyers desiring turn-key delivery risk coverage to their primary sea port."
    },
    CFR: {
      fullname: "Cost & Freight (Destination Sea Ports)",
      seller承担: "Origin export clearance, packaging, container loading, and ocean freight costs to destination port.",
      buyer承担: "Marine insurance coverage during transit, destination import customs, and port charges.",
      recommendedFor: "Commodity buyers maintaining global marine insurance policies across fleet shipments."
    },
    FCA: {
      fullname: "Free Carrier (DUSON Bonded Warehouse, Jakarta / Surabaya)",
      seller承担: "Goods aggregation, export packaging, quality certificate issuance, and delivery to designated carrier in Indonesia.",
      buyer承担: "Export customs clearance coordination, ocean freight booking, and transit insurance.",
      recommendedFor: "Consortium buyers combining multi-commodity LCL orders into single charter containers."
    }
  };

  const paymentTerms = [
    {
      title: "Irrevocable Letter of Credit (L/C at Sight)",
      icon: Lock,
      desc: "Issued by prime tier-1 international banks. Payments released upon presentation of clean ocean Bill of Lading, Phytosanitary Certificate, and SGS COA."
    },
    {
      title: "Telegraphic Transfer (T/T Deposit & Balance)",
      icon: Coins,
      desc: "Standard 30% advance deposit upon trade contract execution, with the remaining 70% balance payable against scanned original Shipping Documents & B/L."
    },
    {
      title: "Structured Escrow & Deferred Credit",
      icon: ShieldCheck,
      desc: "Available for established high-volume enterprise buyer accounts operating under multi-year volume purchase agreements."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* Hero Section with Real Image */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Trading Architecture</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Globe2 className="w-4 h-4" />
                <span>Global Commodity Execution</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                International B2B Commodity <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Trading Desk</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                DUSON provides international spice processors, oil bottlers, and agricultural importers with end-to-end commercial contracting, risk mitigation, and guaranteed export execution from Indonesia and the Mediterranean.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => openQuoteModal("Trading Desk Contract")}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Initiate Commercial Trade Contract</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-[#7f1b59]/15">
                <div>
                  <div className="font-serif text-2xl font-bold text-[#7f1b59] dark:text-[#B52F81]">Incoterms 2020</div>
                  <div className="text-xs font-medium text-[#5C3D52] dark:text-[#DFC8D6]/70">FOB, CIF, CFR, FCA</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#7f1b59] dark:text-[#B52F81]">L/C & T/T</div>
                  <div className="text-xs font-medium text-[#5C3D52] dark:text-[#DFC8D6]/70">Secure Bank Credits</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#7f1b59] dark:text-[#B52F81]">100% Verified</div>
                  <div className="text-xs font-medium text-[#5C3D52] dark:text-[#DFC8D6]/70">SGS Pre-Shipment</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/campaign-creators-gMsnXqILjp4-workers meeting conference.jpg" 
                  alt="DUSON Trading Desk Team" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Institutional Trade Desk</div>
                  <div className="font-serif text-base font-medium text-[#1A0614] dark:text-[#F9F6F0]">Structured Forward Contracts & Fixed-Price Hedging</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Trading Pillars */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Commercial Operations</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Core Trading Divisions</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            Specialized trade departments handling origin aggregation, sovereign export clearance, and laboratory assay verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tradingServices.map(s => (
            <div key={s.title} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 hover:border-[#7f1b59] transition-all group space-y-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-[#7f1b59]/15">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1A0614]/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#F9F6F0]">
                    {s.badge}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-medium group-hover:text-[#7f1b59] dark:group-hover:text-[#B52F81] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#7f1b59]/15 space-y-3">
                <div className="text-[11px] font-bold text-[#7f1b59] dark:text-[#B52F81]">
                  {s.metrics}
                </div>
                <Link 
                  href={s.link} 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A0614] dark:text-[#F9F6F0] group-hover:text-[#7f1b59]"
                >
                  <span>Explore Division</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Incoterms Matrix */}
      <section className="py-20 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Shipping Terms Standard</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">Incoterms 2020 Contract Framework</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
              Select an Incoterm below to inspect risk allocation and seller vs buyer delivery obligations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {(["FOB", "CIF", "CFR", "FCA"] as const).map(term => (
              <button
                key={term}
                onClick={() => setActiveIncoterm(term)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeIncoterm === term
                    ? "bg-[#7f1b59] dark:bg-[#B52F81] text-white shadow-lg"
                    : "bg-white dark:bg-[#220819] text-[#1A0614] dark:text-[#F9F6F0] border border-[#7f1b59]/20 hover:border-[#7f1b59]"
                }`}
              >
                Incoterm {term}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 shadow-xl space-y-6">
            <div className="flex items-center gap-3 text-[#7f1b59] dark:text-[#B52F81]">
              <Truck className="w-6 h-6" />
              <h3 className="font-serif text-2xl font-bold">{incotermDetails[activeIncoterm].fullname}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#7f1b59]/15">
              <div className="space-y-2 p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">DUSON Seller Responsibilities:</span>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                  {incotermDetails[activeIncoterm].seller承担}
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Buyer Responsibilities:</span>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                  {incotermDetails[activeIncoterm].buyer承担}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F8EDF4] dark:bg-[#2D0C22] text-xs text-[#1A0614] dark:text-[#F9F6F0] font-medium flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] shrink-0 mt-0.5" />
              <span><strong>Best Suited For:</strong> {incotermDetails[activeIncoterm].recommendedFor}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Financial Security */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Commercial Settlement</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Documentary Credit & Payment Terms</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            Transparent banking instruments designed to provide security for both buy-side and sell-side contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paymentTerms.map(p => (
            <div key={p.title} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#F8EDF4] dark:bg-[#2D0C22] flex items-center justify-center text-[#7f1b59] dark:text-[#B52F81]">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold">{p.title}</h3>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trade Consultation CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1A0614] to-[#3D0A2A] dark:from-[#220819] dark:to-[#4A1038] text-white border border-[#7f1b59]/30 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">Ready to Draft Your Trade Contract?</h3>
            <p className="text-xs sm:text-sm text-[#DFC8D6]/80 font-normal max-w-xl">
              Connect with our commercial desk specialists to receive custom container pricing, freight schedules, and lot samples.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal("Commercial Contract Consultation")}
            className="px-8 py-4 rounded-full bg-[#7f1b59] dark:bg-[#B52F81] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#9E2370] dark:hover:bg-[#D94B9F] transition-all shrink-0 shadow-lg"
          >
            Contact Trading Desk
          </button>
        </div>
      </section>
    </div>
  );
}