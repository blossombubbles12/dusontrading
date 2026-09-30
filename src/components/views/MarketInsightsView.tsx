"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Calendar, User, Clock, TrendingUp, Ship, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function MarketInsightsView() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <article className="max-w-4xl mx-auto px-6 sm:px-8 py-16 lg:py-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <Link href="/insights" className="hover:underline">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Market Analysis</span>
        </div>

        <div className="space-y-4 mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] bg-[#F8EDF4] dark:bg-[#220819] px-3.5 py-1.5 rounded-full border border-[#7f1b59]/20">
            Maritime Logistics Briefing
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight leading-tight text-[#1A0614] dark:text-[#F9F6F0]">
            Navigating Southeast Asian Maritime Freight Fluctuations & Reefer Capacities
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 border-y border-[#7f1b59]/15 py-3 font-semibold">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" /> August 2026</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" /> Global Logistics Desk</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" /> 5 Min Read</span>
          </div>
        </div>

        <div className="relative h-[440px] rounded-3xl overflow-hidden mb-12 shadow-xl border border-[#7f1b59]/20">
          <Image src="/images/logistics-bg.jpg" alt="Port Tanjung Priok Container Terminal" fill priority className="object-cover" />
        </div>

        <div className="space-y-6 text-base text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
          <p className="text-lg text-[#1A0614] dark:text-[#F9F6F0] font-medium leading-relaxed">
            Global maritime liner consolidations, Red Sea routing adjustments, and fluctuating bunker fuel surcharges have underscored the critical value of securing dedicated liner contract allocations from Port Tanjung Priok (Jakarta) and Belawan (Medan).
          </p>
          <p>
            Importers securing long-term freight parity agreements through DUSON benefit from locked container space allocations, preventing seasonal rollover delays at transshipment ports in Singapore and Tanjung Pelepas during peak agricultural harvest cycles.
          </p>

          {/* Key Executive Takeaways */}
          <div className="p-8 rounded-3xl bg-[#F8EDF4] dark:bg-[#15040F] border border-[#7f1b59]/20 space-y-4 my-8">
            <h3 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0]">Executive Freight Summary</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/90">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] shrink-0 mt-0.5" />
                <span><strong>Direct Europe Express:</strong> Tanjung Priok to Rotterdam transit averages 24–26 days via Tier-1 ocean liner contracts.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] shrink-0 mt-0.5" />
                <span><strong>Reefer Availability:</strong> High-cube refrigerated container units locked for Q3/Q4 fresh produce harvests.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] shrink-0 mt-0.5" />
                <span><strong>Demurrage Buffer:</strong> DUSON trade contracts include 14 days free-time detention at major discharge ports.</span>
              </li>
            </ul>
          </div>

          <p>
            For institutional spice millers and vegetable distributors, maintaining inventory buffer stocks at European discharge ports (Rotterdam / Hamburg) provides a critical hedge against unexpected maritime transit bottlenecks.
          </p>
        </div>

        <div className="pt-12 border-t border-[#7f1b59]/15 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] hover:underline">
            ← Back to All Briefings
          </Link>
          <button 
            onClick={() => openQuoteModal("Logistics Advisory Consultation")} 
            className="px-8 py-3.5 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-md"
          >
            Consult Freight Desk
          </button>
        </div>
      </article>
    </div>
  );
}