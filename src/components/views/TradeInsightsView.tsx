"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Calendar, User, Clock, CheckCircle2, ShieldCheck, Container } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function TradeInsightsView() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <article className="max-w-4xl mx-auto px-6 sm:px-8 py-16 lg:py-24">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <Link href="/insights" className="hover:underline">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Trade Analysis</span>
        </div>

        <div className="space-y-4 mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] bg-[#F8EDF4] dark:bg-[#220819] px-3.5 py-1.5 rounded-full border border-[#7f1b59]/20">
            Mediterranean Supply & Bulk Freight Report
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight leading-tight text-[#1A0614] dark:text-[#F9F6F0]">
            Mediterranean Olive Oil Harvest Yields & Bulk Flexitank Shipping Optimization
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 border-y border-[#7f1b59]/15 py-3 font-semibold">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" /> August 2026</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" /> Mediterranean Trade Desk</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" /> 5 Min Read</span>
          </div>
        </div>

        <div className="relative h-[440px] rounded-3xl overflow-hidden mb-12 shadow-xl border border-[#7f1b59]/20">
          <Image src="/images/olive-oil.jpg" alt="Mediterranean Olive Grove Harvest" fill priority className="object-cover" />
        </div>

        <div className="space-y-6 text-base text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
          <p className="text-lg text-[#1A0614] dark:text-[#F9F6F0] font-medium leading-relaxed">
            Stable summer temperatures across partner cooperative groves in Spain, Greece, and Tunisia have produced high-stability Extra Virgin Olive Oil (EVOO) with free fatty acid (FFA) levels consistently testing below 0.3%.
          </p>
          <p>
            Industrial repackers and bottlers in Asia and the Middle East are increasingly leveraging 21,500-liter food-grade ISO flexitanks to minimize shipping tare weights, prevent oxidation, and preserve natural antioxidant polyphenol stability during maritime transit.
          </p>

          <div className="p-8 rounded-3xl bg-[#F8EDF4] dark:bg-[#15040F] border border-[#7f1b59]/20 space-y-4 my-8">
            <h3 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0]">Technical Trade Key Takeaways</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/90">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] shrink-0 mt-0.5" />
                <span><strong>Flexitank Payload:</strong> 21,500 Liters (approx. 19.8 MT) per 20ft container, reducing ocean freight costs by up to 35% compared to IBC totes or drums.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] shrink-0 mt-0.5" />
                <span><strong>Quality Assurance:</strong> Continuous Nitrogen blanket purging during flexitank filling to prevent oxidation.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] shrink-0 mt-0.5" />
                <span><strong>IOC Certification:</strong> Every batch shipped with full International Olive Council accredited laboratory chemical and organoleptic evaluation.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#7f1b59]/15 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] hover:underline">
            ← Back to All Briefings
          </Link>
          <button 
            onClick={() => openQuoteModal("Bulk Olive Oil Contract")} 
            className="px-8 py-3.5 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-md"
          >
            Inquire for Bulk EVOO Contract
          </button>
        </div>
      </article>
    </div>
  );
}