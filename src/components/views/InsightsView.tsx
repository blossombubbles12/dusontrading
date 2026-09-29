"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, TrendingUp, Calendar, User } from "lucide-react";

export default function InsightsView() {
  const articles = [
    { title: "Indonesian Nutmeg Crop Outlook & Global Export Trends", category: "Commodity Insights", date: "September 2026", desc: "Analysis of seasonal yields across North Maluku and shifting European import regulations.", link: "/insights/commodity-insights" },
    { title: "Navigating Southeast Asian Maritime Freight Fluctuations", category: "Market Insights", date: "August 2026", desc: "How container carrier consolidation and port automation at Tanjung Priok impact transit times.", link: "/insights/market-insights" },
    { title: "Mediterranean Olive Oil Harvest Yields & Bulk Pricing", category: "Trade Insights", date: "August 2026", desc: "Evaluating cold-pressed extra virgin availability and flexitank logistics for international buyers.", link: "/insights/trade-insights" }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Trade Insights</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
              <TrendingUp className="w-4 h-4" />
              <span>Intelligence Desk</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight leading-tight">
              Market Intelligence & <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Commodity Analysis</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
              Proprietary trade reports, harvest forecasting, and regulatory updates from DUSON&apos;s Jakarta analytical desk.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map(a => (
            <Link key={a.title} href={a.link} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 hover:border-[#7f1b59] transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#7f1b59]">
                  <span>{a.category}</span>
                  <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 font-normal">{a.date}</span>
                </div>
                <h3 className="font-serif text-2xl font-medium group-hover:text-[#7f1b59] transition-colors">{a.title}</h3>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75 font-light leading-relaxed">{a.desc}</p>
              </div>
              <div className="pt-6 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15 mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A0614] dark:text-[#F9F6F0] group-hover:text-[#7f1b59]">
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