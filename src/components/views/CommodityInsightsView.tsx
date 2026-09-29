"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Calendar, User, Clock, Share2, Tag, TrendingUp } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function CommodityInsightsView() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <article className="max-w-4xl mx-auto px-6 sm:px-8 py-16 lg:py-24">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <Link href="/insights" className="hover:underline">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Commodity Briefing</span>
        </div>

        <div className="space-y-4 mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7f1b59] bg-[#F8EDF4] dark:bg-[#220819] px-3.5 py-1.5 rounded-full border border-[#7f1b59]/20">
            Agricultural Outlook 2026 / 2027
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight leading-tight text-[#1A0614] dark:text-[#F9F6F0]">
            Indonesian Nutmeg Crop Outlook & Changing Global Import Regulations
          </h1>
          <div className="flex items-center gap-6 text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 border-y border-[#7f1b59]/15 dark:border-[#B52F81]/15 py-3">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#7f1b59]" /> September 2026</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-[#7f1b59]" /> Agronomy & Research Desk</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#7f1b59]" /> 6 Min Read</span>
          </div>
        </div>

        <div className="relative h-[440px] rounded-3xl overflow-hidden mb-12 shadow-xl border border-[#7f1b59]/20">
          <Image src="/images/nutmeg-spices.jpg" alt="Indonesian Nutmeg Harvest Field" fill priority className="object-cover" />
        </div>

        <div className="space-y-6 text-base text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
          <p className="text-lg text-[#1A0614] dark:text-[#F9F6F0] font-normal leading-relaxed">
            As the 2026 secondary harvest concludes across the volcanic archipelagos of Banda and Siaul (North Sulawesi), early field aggregation data indicates a 14% increase in ABCD-grade whole nutmeg yields, accompanied by tighter international testing protocols.
          </p>
          
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A0614] dark:text-[#F9F6F0] pt-4">
            1. Volcanic Soil Mineral Density & Yield Quality
          </h2>
          <p>
            Favorable rainfall distribution during the Q2 flowering window supported high volatile oil synthesis (averaging 7.8% v/w across prime Banda lots). Importers in Northern Europe and North America are focusing heavily on lot segregation to ensure total aflatoxin levels remain strictly under 10 ppb (with B1 under 5 ppb).
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A0614] dark:text-[#F9F6F0] pt-4">
            2. Shifting European and US Regulatory Landscapes
          </h2>
          <p>
            With the implementation of stricter phytosanitary and mycotoxin screening at EU entry ports (Rotterdam and Hamburg), traditional open-market broker sourcing is proving increasingly vulnerable to container rejections. Industrial food processors are actively transitioning to institutional contracts backed by verified pre-shipment SGS laboratory assays.
          </p>

          <div className="p-8 rounded-3xl bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 my-8 space-y-3">
            <h3 className="font-serif text-xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">Key Procurement Recommendations for Q4 2026</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2"><span>•</span><span>Lock in quarterly forward volumes to insulate against year-end ocean container rate adjustments.</span></li>
              <li className="flex items-start gap-2"><span>•</span><span>Specify double-layered vacuum brick packaging for ground nutmeg to preserve volatile terpene profiles during transit.</span></li>
              <li className="flex items-start gap-2"><span>•</span><span>Verify sovereign Certificate of Origin (Form D / Form ICO) for preferential tariff treatments.</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15 mt-12 flex items-center justify-between">
          <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7f1b59]">
            ← Back to All Briefings
          </Link>
          <button onClick={() => openQuoteModal("Nutmeg Supply Program")} className="px-6 py-3 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] transition-all">
            Inquire for Nutmeg Supply
          </button>
        </div>
      </article>
    </div>
  );
}