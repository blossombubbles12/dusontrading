"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Calendar, Sparkles, Building2, Globe2 } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function NewsView() {
  const { openQuoteModal } = useQuoteModal();

  const newsItems = [
    {
      title: "DUSON TRADING GROUP PT. Expands Cold-Chain Terminal Capacity at Port Tanjung Priok",
      date: "September 2026",
      tag: "Infrastructure Expansion",
      desc: "Commissioning of a new 3,500 sq meter temperature-controlled bonded handling facility, doubling reefer pre-cooling speed and pallet staging throughput for export agricultural produce.",
      img: "/images/sean-pollock-PhYq704ffdA-contact us building.jpg"
    },
    {
      title: "Participation Announced for Gulfood 2027 (Dubai World Trade Centre)",
      date: "August 2026",
      tag: "Global Trade Exhibitions",
      desc: "DUSON trade directors will host bilateral procurement sessions at the Indonesian National Pavilion, showcasing certified Maluku nutmeg, ASTA black pepper, and bulk Extra Virgin Olive Oils.",
      img: "/images/campaign-creators-gMsnXqILjp4-workers meeting conference.jpg"
    },
    {
      title: "ISO 22000:2018 & HACCP Recertification Successfully Concluded with Zero Non-Conformances",
      date: "July 2026",
      tag: "Quality Audit",
      desc: "Comprehensive third-party audit confirms total adherence to international food safety management and microbiological pathogen controls across all Jakarta central processing lines.",
      img: "/images/mario-gogh-VBLHICVh-lI-workers-in the office.jpg"
    },
    {
      title: "Direct Farmers Agreement Signed with 400 Additional Spice Cooperatives in Banda Islands",
      date: "May 2026",
      tag: "Upstream Sustainability",
      desc: "Expanding direct-from-farm procurement to over 1,200 total smallholder farming families, offering long-term advance harvest financing and soil fertility technical support.",
      img: "/images/nutmeg-spices.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <Link href="/insights" className="hover:underline">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Corporate News</span>
        </div>

        <div className="space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
            <Globe2 className="w-4 h-4" />
            <span>Corporate Announcements</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">Corporate News & Press Releases</h1>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal max-w-2xl">
            Official press announcements, terminal expansions, trade fair attendance, and sustainability milestones from DUSON TRADING GROUP PT.
          </p>
        </div>

        <div className="space-y-8">
          {newsItems.map(item => (
            <div key={item.title} className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 shadow-sm flex flex-col md:flex-row items-center gap-8 hover:border-[#7f1b59] transition-all">
              <div className="relative w-full md:w-64 h-48 rounded-2xl overflow-hidden shrink-0 border border-[#7f1b59]/15">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1A0614]/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#F9F6F0]">
                  {item.tag}
                </div>
              </div>

              <div className="space-y-3 flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {item.date}
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] leading-snug">{item.title}</h2>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{item.desc}</p>
                <div className="pt-2">
                  <button
                    onClick={() => openQuoteModal(`Press Release Info: ${item.title}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] hover:underline"
                  >
                    <span>Contact Media Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}