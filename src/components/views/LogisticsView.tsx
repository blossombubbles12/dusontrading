"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Ship, Truck, ShieldCheck, MapPin } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function LogisticsView() {
  const { openQuoteModal } = useQuoteModal();

  const services = [
    { title: "Ocean Container Freight", link: "/logistics/shipping", desc: "Contract liner space with major ocean carriers from Tanjung Priok to major international ports." },
    { title: "Inland & Port Transportation", link: "/logistics/transportation", desc: "GPS-monitored refrigerated and dry container trucking from cultivation hubs to port terminals." },
    { title: "Cold-Chain Supply Architecture", link: "/logistics/supply-chain", desc: "Continuous temperature recording from pre-cooling packing houses to final delivery." }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Logistics & Freight</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight leading-tight">
              International Maritime & <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Cold-Chain Logistics</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
              Operating dedicated freight desks in Jakarta and bonded port facilities to ensure on-time delivery across 30+ international destination ports.
            </p>
            <button onClick={() => openQuoteModal()} className="px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all">
              Request Freight Schedule
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(s => (
            <Link key={s.title} href={s.link} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 hover:border-[#7f1b59] transition-all group space-y-4">
              <h3 className="font-serif text-2xl font-medium group-hover:text-[#7f1b59] transition-colors">{s.title}</h3>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75 font-light leading-relaxed">{s.desc}</p>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7f1b59]">Explore Service <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}