"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  ChevronRight, ArrowRight, Ship, Anchor, CheckCircle2, ShieldCheck, 
  MapPin, Box, Thermometer, Clock, Layers
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function ShippingView() {
  const { openQuoteModal } = useQuoteModal();

  const routes = [
    { 
      destination: "Northern Europe (Rotterdam, Hamburg, Felixstowe)", 
      transitTime: "24 – 28 Days", 
      frequency: "Weekly Fixed-Day Sailings", 
      carrier: "Maersk / MSC / Hapag-Lloyd Direct Service",
      ports: "Loading: Tanjung Priok (IDTPP) / Tanjung Perak (IDSUB)"
    },
    { 
      destination: "Mediterranean (Genoa, Valencia, Piraeus, Marseilles)", 
      transitTime: "21 – 25 Days", 
      frequency: "Weekly Liner Direct", 
      carrier: "CMA CGM / Ocean Network Express (ONE)",
      ports: "Loading: Tanjung Priok (IDTPP)"
    },
    { 
      destination: "Middle East / GCC (Jebel Ali, Jeddah, Dammam, Sohar)", 
      transitTime: "12 – 16 Days", 
      frequency: "Bi-Weekly Fast Express", 
      carrier: "Emirates Shipping / Wan Hai Lines",
      ports: "Loading: Tanjung Priok (IDTPP) / Belawan (IDBLW)"
    },
    { 
      destination: "East Asia (Singapore, Hong Kong, Shanghai, Ningbo, Tokyo)", 
      transitTime: "5 – 12 Days", 
      frequency: "Multiple Daily Regional Feeders", 
      carrier: "Regional Feeder Consortium",
      ports: "Loading: All Indonesian Major Ports"
    }
  ];

  const containerSpecs = [
    {
      type: "20ft Heavy Dry Van (FCL)",
      payload: "24,000 kg Net Weight",
      capacity: "33.2 Cubic Meters (CBM)",
      idealFor: "Whole Nutmeg, ASTA Black Pepper, Cloves, Cassia Vera"
    },
    {
      type: "40ft High Cube Dry (FCL)",
      payload: "26,500 kg Net Weight",
      capacity: "76.4 Cubic Meters (CBM)",
      idealFor: "Volumetric Spice Sacks, Dehydrated Vegetables, Mesh Bagged Goods"
    },
    {
      type: "40ft Reefer Climate Container",
      payload: "27,000 kg Net Weight",
      capacity: "67.3 Cubic Meters (CBM)",
      idealFor: "Fresh Ginger Roots, Fresh Shallots, Garlic, Cold-Chain Produce (2°C to 12°C)"
    },
    {
      type: "Flexitank Bulk Fluid Container",
      payload: "24,000 Liters / 22 Metric Tons",
      capacity: "Food-Grade Flexitank Bladder",
      idealFor: "Bulk Olive Oils, Crude Nutmeg Butter Oils, Liquid Agricultural Extracts"
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
            <Link href="/logistics" className="hover:underline">Logistics</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Ocean Shipping</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Ship className="w-4 h-4" />
                <span>Ocean Liner Contracts</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Global Ocean Freight & <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Container Dispatch</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                Operating direct liner contracts from Port Tanjung Priok (Jakarta) and Tanjung Perak (Surabaya) to major international discharge ports, securing priority space allocation year-round.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => openQuoteModal("Ocean Shipping Contract")} 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Request Liner Freight Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/charles-forerunner-3fPXt37X6UQ.jpg" 
                  alt="DUSON Ocean Shipping Vessel" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Tier-1 Liner Partners</div>
                  <div className="font-serif text-base font-medium text-[#1A0614] dark:text-[#F9F6F0]">Guaranteed FCL Space & Peak Season Equipment Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maritime Corridors Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Global Corridors</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Primary Ocean Shipping Corridors</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            Weekly container sailings with fixed transit schedules to major global discharge hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {routes.map(r => (
            <div key={r.destination} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">
                    <Anchor className="w-4 h-4" />
                    <span>{r.frequency}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400 px-2 py-0.5 rounded bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800">
                    ACTIVE ROUTE
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold">{r.destination}</h3>
                
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 text-xs">
                  <div>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 block text-[10px] uppercase font-bold">Ocean Transit</span>
                    <strong className="text-[#1A0614] dark:text-[#F9F6F0]">{r.transitTime}</strong>
                  </div>
                  <div>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 block text-[10px] uppercase font-bold">Carrier Contract</span>
                    <strong className="text-[#1A0614] dark:text-[#F9F6F0]">{r.carrier}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#7f1b59]/15 text-[11px] text-[#5C3D52] dark:text-[#DFC8D6]/80 flex items-center justify-between">
                <span>{r.ports}</span>
                <button 
                  onClick={() => openQuoteModal(`Route Booking: ${r.destination}`)}
                  className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] hover:underline"
                >
                  Book Space
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Container Fleet Specifications */}
      <section className="py-20 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Fleet Technical Specifications</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">Export Container Specifications</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
              Selecting the appropriate container unit based on commodity volume, density, and thermal control needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {containerSpecs.map(c => (
              <div key={c.type} className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F8EDF4] dark:bg-[#2D0C22] flex items-center justify-center text-[#7f1b59] dark:text-[#B52F81]">
                    <Box className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold">{c.type}</h3>
                  <div className="space-y-1 text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
                    <div><strong>Payload:</strong> {c.payload}</div>
                    <div><strong>Volume:</strong> {c.capacity}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#7f1b59]/15 text-[11px] text-[#5C3D52] dark:text-[#DFC8D6]/80">
                  <strong className="text-[#7f1b59] dark:text-[#B52F81] block uppercase text-[10px]">Best Suited For:</strong>
                  {c.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}