"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Ship, Anchor, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function ShippingView() {
  const { openQuoteModal } = useQuoteModal();

  const routes = [
    { destination: "Northern Europe (Rotterdam, Hamburg, Felixstowe)", transitTime: "24 – 28 Days", frequency: "Weekly Liner Services", carrier: "Direct Ocean Tier-1 Lines" },
    { destination: "Mediterranean (Genoa, Valencia, Piraeus)", transitTime: "21 – 25 Days", frequency: "Weekly Liner Services", carrier: "Direct Ocean Tier-1 Lines" },
    { destination: "Middle East / GCC (Jebel Ali, Jeddah, Dammam)", transitTime: "12 – 16 Days", frequency: "Bi-Weekly Fast Corridor", carrier: "Direct Ocean Tier-1 Lines" },
    { destination: "East Asia (Singapore, Hong Kong, Shanghai, Tokyo)", transitTime: "5 – 12 Days", frequency: "Multiple Weekly Sailings", carrier: "Express Regional Feeders" }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
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
                <span>Maritime Ocean Freight</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Global Ocean Freight & <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Container Dispatch</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                Operating direct liner contracts from Port Tanjung Priok (Jakarta) and Belawan (Medan) to major international commercial discharge ports.
              </p>
              <div className="pt-2">
                <button onClick={() => openQuoteModal("Ocean Shipping")} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Request Freight Rate Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
              <Image src="/images/logistics-bg.jpg" alt="DUSON Ocean Freight Operations" fill priority className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Primary Ocean Shipping Corridors</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">Guaranteed vessel allocation and seasonal container availability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {routes.map(r => (
            <div key={r.destination} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7f1b59]">
                <Anchor className="w-4 h-4" />
                <span>{r.frequency}</span>
              </div>
              <h3 className="font-serif text-2xl font-medium">{r.destination}</h3>
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 text-xs">
                <div><span className="text-[#5C3D52] block text-[10px] uppercase">Transit Time</span><strong>{r.transitTime}</strong></div>
                <div><span className="text-[#5C3D52] block text-[10px] uppercase">Carrier Class</span><strong>{r.carrier}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}