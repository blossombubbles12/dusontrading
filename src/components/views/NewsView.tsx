"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function NewsView() {
  const { openQuoteModal } = useQuoteModal();

  const newsItems = [
    {
      title: "DUSON TRADING GROUP PT. Expands Cold-Chain Terminal Capacity at Port Tanjung Priok",
      date: "September 2026",
      desc: "Commissioning of a new 3,500 sq meter temperature-controlled bonded handling facility, doubling reefer pre-cooling speed for export produce."
    },
    {
      title: "Participation Announced for Gulfood 2027 (Dubai World Trade Centre)",
      date: "August 2026",
      desc: "DUSON trade directors will host bilateral procurement sessions at the Indonesian National Pavilion, showcasing certified Maluku nutmeg and Lampung pepper."
    },
    {
      title: "ISO 22000:2018 & HACCP Recertification Successfully Concluded with Zero Non-Conformances",
      date: "July 2026",
      desc: "TÜV SÜD audit confirms total adherence to international food safety and microbiological management protocols across all Jakarta packaging lines."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <Link href="/insights" className="hover:underline">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Corporate News</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight mb-4">Corporate News & Announcements</h1>
        <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light mb-12">Official press releases and operational updates from DUSON TRADING GROUP PT.</p>

        <div className="space-y-6">
          {newsItems.map(item => (
            <div key={item.title} className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {item.date}
              </span>
              <h2 className="font-serif text-2xl font-medium">{item.title}</h2>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}