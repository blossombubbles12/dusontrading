"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  ChevronRight, ArrowRight, Layers, Thermometer, ShieldCheck, 
  Warehouse, ShieldAlert, Cpu, Activity, Snowflake
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function SupplyChainView() {
  const { openQuoteModal } = useQuoteModal();

  const coldChainPillars = [
    {
      title: "Pre-Cooling & Farm-Gate Hydro-Cooling",
      temp: "2°C – 6°C Target",
      desc: "Fresh highland produce (ginger, shallots, garlic) is hydro-cooled within 4 hours of field harvest to halt moisture transpiration and preserve cellular turgor."
    },
    {
      title: "Climate-Controlled Processing Mills",
      temp: "18°C – 22°C (RH < 55%)",
      desc: "Indonesian spice sorting and sifting mills operate under strict relative humidity controls to prevent mold growth or volatile essential oil degradation."
    },
    {
      title: "Active Reefer Container Ocean Transit",
      temp: "Precision Digital Thermostat",
      desc: "Microprocessor-controlled Genset power units continuously monitor container interior airflow, humidity, and ventilation gas exchanges during 20+ day ocean transits."
    },
    {
      title: "Bonded Destination Warehouse Buffering",
      temp: "Dual Temp Cold Stores",
      desc: "Strategic inventory buffer stocks maintained in Rotterdam and Dubai for rapid B2B vendor-managed inventory (VMI) order fulfillment."
    }
  ];

  const warehouses = [
    { location: "Bonded Zone Tanjung Priok, Jakarta", capacity: "12,500 Sqm Bonded Facility", features: "Customs bonded warehouse, optical sifting, ISO 22000 cleanroom packing." },
    { location: "Port Tanjung Perak Hub, Surabaya", capacity: "8,000 Sqm Cold & Dry Storage", features: "Direct rail spur access, 4,000 MT spice pallet rack capacity." },
    { location: "Port of Rotterdam Logistics Park", capacity: "5,000 Sqm EU Distribution Hub", features: "EU duty-unpaid bonded storage, rapid onward truck dispatch to Benelux/DACH." },
    { location: "Jebel Ali Free Zone (JAFZA), Dubai", capacity: "4,500 Sqm Middle East Hub", features: "GCC Halal certified climate control, re-export processing center." }
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
            <Link href="/logistics" className="hover:underline">Logistics</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Cold-Chain Architecture</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Snowflake className="w-4 h-4" />
                <span>Climate-Controlled Supply Integration</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                End-to-End Cold-Chain & <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Supply Integration</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                Active temperature management from origin packing houses to destination discharge terminals, ensuring uncompromised shelf life and zero essential oil dissipation for premium agricultural commodities.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => openQuoteModal("Supply Chain Audit Dossier")} 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Request Supply Chain Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/mario-gogh-VBLHICVh-lI-workers-in the office.jpg" 
                  alt="DUSON Supply Chain Control Center" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Real-Time Telemetry Control</div>
                  <div className="font-serif text-base font-medium text-[#1A0614] dark:text-[#F9F6F0]">Active Relative Humidity & Temperature Regulation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cold Chain Pillars */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Thermal Safeguards</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">4-Tier Cold-Chain Architecture</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            Continuous temperature monitoring from field harvest to buyer warehouse delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coldChainPillars.map(p => (
            <div key={p.title} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">
                    <Thermometer className="w-4 h-4" />
                    <span>{p.temp}</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Warehousing Network */}
      <section className="py-20 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Global Buffers</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">Bonded Warehousing Infrastructure</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
              Strategic storage hubs maintaining ready-to-ship commodity reserves for key import markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {warehouses.map(w => (
              <div key={w.location} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">
                  <Warehouse className="w-4 h-4" />
                  <span>{w.location}</span>
                </div>
                <div className="font-serif text-xl font-bold">{w.capacity}</div>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{w.features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}