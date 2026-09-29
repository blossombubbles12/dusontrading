"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe2, ChevronRight, ArrowRight, MapPin, Anchor, Ship, CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function GlobalReachView() {
  const { openQuoteModal } = useQuoteModal();

  const regions = [
    { title: "European Union & UK", hub: "Rotterdam & Hamburg", volume: "18,000 MT / yr", commodities: "Nutmeg ABCD, Mace, Virgin Olive Oils, Black Pepper" },
    { title: "Middle East & GCC", hub: "Jebel Ali & Jeddah", volume: "14,000 MT / yr", commodities: "Spices, Whole Nutmeg, Fresh Vegetables, Edible Oils" },
    { title: "East & Southeast Asia", hub: "Singapore & Shanghai", volume: "12,000 MT / yr", commodities: "White Pepper, Cloves, Cassia Cinnamon, Produce" },
    { title: "Americas", hub: "Houston & Santos", volume: "6,000 MT / yr", commodities: "Specialty Nutmeg, Oleoresin Grades, Organic Spices" }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span>Company</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Global Reach</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Globe2 className="w-4 h-4" />
                <span>30+ Destination Markets</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
                Connecting Indonesian Harvests to <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">World Markets</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                Operating high-frequency container shipping corridors from Port Tanjung Priok (Jakarta) and Belawan (Medan) to premier industrial ports across 5 continents.
              </p>
              <div className="pt-2">
                <button onClick={() => openQuoteModal()} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Inquire for Freight Quotes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image src="/images/sean-pollock-PhYq704ffdA-contact us building.jpg" alt="DUSON Global Trade Network" fill priority className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((r, i) => (
            <div key={r.title} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-medium">{r.title}</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] bg-[#F8EDF4] dark:bg-[#15040F] px-3 py-1 rounded-full">{r.volume}</span>
              </div>
              <div className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" />
                <span>Primary Receiving Ports: {r.hub}</span>
              </div>
              <div className="pt-2 text-xs text-[#1A0614] dark:text-[#F9F6F0] font-light">
                <strong className="font-semibold">Key Commodities:</strong> {r.commodities}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}