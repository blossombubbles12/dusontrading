"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  ChevronRight, ArrowRight, TrendingUp, Calendar, User, 
  FileText, Globe2, Sparkles, BookOpen, Search, Filter
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function InsightsView() {
  const { openQuoteModal } = useQuoteModal();
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const articles = [
    { 
      title: "Indonesian Nutmeg Harvest Yields & European Aflatoxin Compliance", 
      category: "Commodity Insights", 
      date: "September 2026", 
      desc: "Comprehensive crop analysis across North Maluku and Banda Islands, examining shifting European Union Maximum Residue Limits (MRL) and volatile essential oil preservation.", 
      link: "/insights/commodity-insights",
      readTime: "6 Min Read",
      img: "/images/nutmeg-spices.jpg"
    },
    { 
      title: "Navigating Maritime Container Freight Surcharges & Port Capacity", 
      category: "Market Insights", 
      date: "August 2026", 
      desc: "Evaluating ocean liner carrier alliances, peak season container surcharges, and direct liner charter schedules from Tanjung Priok and Surabaya to Rotterdam.", 
      link: "/insights/market-insights",
      readTime: "5 Min Read",
      img: "/images/charles-forerunner-3fPXt37X6UQ.jpg"
    },
    { 
      title: "Mediterranean Olive Oil Reserve Stocks & Bulk Flexitank Logistics", 
      category: "Trade Insights", 
      date: "August 2026", 
      desc: "Analyzing Extra Virgin Olive Oil free fatty acid (FFA) parameters, harvest yields in Tunisia and Spain, and bulk ISO flexitank export shipping.", 
      link: "/insights/trade-insights",
      readTime: "7 Min Read",
      img: "/images/olive-oil.jpg"
    },
    { 
      title: "ASTA Black Pepper & Muntok White Pepper Export Grade Benchmark", 
      category: "Commodity Insights", 
      date: "July 2026", 
      desc: "Comparative analysis of piperine density, steam sterilization techniques, and mechanical destoning for industrial spice extractors.", 
      link: "/insights/commodity-insights",
      readTime: "4 Min Read",
      img: "/images/microsoft-365-bWL-c09Ys80-.jpg"
    },
    { 
      title: "Sovereign Customs PEB & Certificate of Origin (COO) Tariff Digest", 
      category: "Trade Insights", 
      date: "June 2026", 
      desc: "Step-by-step documentation guide for Form D, Form E, Form AK, and Form RCEP preferential duty optimization.", 
      link: "/insights/trade-insights",
      readTime: "8 Min Read",
      img: "/images/docusign-7RWBSYA9Rro-workers looking at computer.jpg"
    }
  ];

  const filteredArticles = filterCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === filterCategory);

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Trade Insights</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <TrendingUp className="w-4 h-4" />
                <span>Proprietary Market Intelligence Desk</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Market Intelligence & <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Commodity Briefings</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                Stay informed with proprietary crop yield forecasts, international trade policy updates, ocean freight rate trends, and technical specifications directly from DUSON&apos;s commercial desk.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => openQuoteModal("Subscribe to Monthly Intelligence")}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Subscribe to Market Briefings</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/microsoft-365-bWL-c09Ys80-.jpg" 
                  alt="DUSON Market Analytics Desk" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Institutional Trade Reports</div>
                  <div className="font-serif text-base font-medium text-[#1A0614] dark:text-[#F9F6F0]">Quarterly Crop Forecasting & Maritime Freight Digest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Briefings List */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Knowledge Hub</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">Latest Commercial Briefings</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", "Commodity Insights", "Market Insights", "Trade Insights"].map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filterCategory === cat
                    ? "bg-[#7f1b59] dark:bg-[#B52F81] text-white shadow-md"
                    : "bg-white dark:bg-[#220819] text-[#1A0614] dark:text-[#F9F6F0] border border-[#7f1b59]/20 hover:border-[#7f1b59]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(a => (
            <Link 
              key={a.title} 
              href={a.link} 
              className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 hover:border-[#7f1b59] transition-all group flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-[#7f1b59]/15">
                  <Image src={a.img} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1A0614]/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#F9F6F0]">
                    {a.category}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-bold text-[#7f1b59] dark:text-[#B52F81]">
                  <span>{a.date}</span>
                  <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 font-normal">{a.readTime}</span>
                </div>

                <h3 className="font-serif text-xl font-bold group-hover:text-[#7f1b59] dark:group-hover:text-[#B52F81] transition-colors leading-snug">
                  {a.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">
                  {a.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#7f1b59]/15 mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A0614] dark:text-[#F9F6F0] group-hover:text-[#7f1b59]">
                <span>Read Full Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}