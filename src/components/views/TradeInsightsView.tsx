"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Calendar, User, Clock } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function TradeInsightsView() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <article className="max-w-4xl mx-auto px-6 sm:px-8 py-16 lg:py-24">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <Link href="/insights" className="hover:underline">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Trade Analysis</span>
        </div>

        <div className="space-y-4 mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7f1b59] bg-[#F8EDF4] dark:bg-[#220819] px-3.5 py-1.5 rounded-full border border-[#7f1b59]/20">
            Mediterranean Supply Report
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight leading-tight text-[#1A0614] dark:text-[#F9F6F0]">
            Mediterranean Olive Oil Harvest Yields & Bulk Flexitank Shipping Optimization
          </h1>
          <div className="flex items-center gap-6 text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 border-y border-[#7f1b59]/15 py-3">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#7f1b59]" /> August 2026</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-[#7f1b59]" /> Mediterranean Desk</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#7f1b59]" /> 4 Min Read</span>
          </div>
        </div>

        <div className="relative h-[440px] rounded-3xl overflow-hidden mb-12 shadow-xl border border-[#7f1b59]/20">
          <Image src="/images/olive-oil.jpg" alt="Mediterranean Olive Grove Harvest" fill priority className="object-cover" />
        </div>

        <div className="space-y-6 text-base text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
          <p className="text-lg text-[#1A0614] dark:text-[#F9F6F0] font-normal leading-relaxed">
            Stable summer temperatures across partner cooperative groves in Southern Europe have produced high-stability EVOO with free acidity levels consistently testing below 0.3%.
          </p>
          <p>
            Industrial repackers in Asia and the Middle East are leveraging 21,500-liter food-grade flexitanks to minimize shipping tare weights and preserve natural antioxidant polyphenol stability during transit.
          </p>
        </div>

        <div className="pt-12 border-t border-[#7f1b59]/15 mt-12 flex items-center justify-between">
          <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7f1b59]">
            ← Back to All Briefings
          </Link>
          <button onClick={() => openQuoteModal("Bulk Olive Oil")} className="px-6 py-3 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] transition-all">
            Inquire for Bulk EVOO
          </button>
        </div>
      </article>
    </div>
  );
}