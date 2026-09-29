"use client";

import Link from "next/link";
import { ArrowLeft, Building2, Globe2 } from "lucide-react";
import { useQuoteModal } from "./GlobalLayout";

interface PlaceholderPageProps {
  title: string;
  category: string;
  description?: string;
}

export default function PlaceholderPage({
  title,
  category,
  description,
}: PlaceholderPageProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-6 sm:px-8 lg:px-12 bg-[#FBF9F5] dark:bg-[#04120D] text-[#0B241B] dark:text-[#F9F6F0] transition-colors duration-500">
      <div className="max-w-3xl mx-auto text-center space-y-8 p-10 sm:p-14 rounded-3xl bg-white dark:bg-[#081C15] border border-[#B88E39]/20 dark:border-[#C5A059]/20 shadow-xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4F0E8] dark:bg-[#0C241B] border border-[#B88E39]/30 dark:border-[#C5A059]/30 text-xs font-semibold uppercase tracking-[0.25em] text-[#B88E39] dark:text-[#C5A059]">
          <Globe2 className="w-3.5 h-3.5" />
          <span>{category}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-[#0B241B] dark:text-[#F9F6F0]">
          {title}
        </h1>

        <p className="text-sm sm:text-base text-[#4A5D54] dark:text-[#D9D2C5]/80 max-w-xl mx-auto font-light leading-relaxed">
          {description ||
            `The ${title} section is part of DUSON Trading Group's global website architecture. Detailed content and commercial specifications will be available here.`}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#B88E39]/30 dark:border-[#C5A059]/30 bg-[#F4F0E8] dark:bg-[#0C241B] text-[#0B241B] dark:text-[#F9F6F0] text-xs uppercase tracking-widest font-semibold hover:border-[#B88E39] dark:hover:border-[#C5A059] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <button
            onClick={() => openQuoteModal()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B241B] dark:bg-[#C5A059] text-[#F9F6F0] dark:text-[#04120D] text-xs uppercase tracking-widest font-bold hover:bg-[#B88E39] dark:hover:bg-[#E5C483] transition-all shadow-md"
          >
            <span>Request a Quote →</span>
          </button>
        </div>

        <div className="pt-8 border-t border-[#B88E39]/15 dark:border-[#C5A059]/15 flex items-center justify-center gap-2 text-[11px] text-[#4A5D54]/70 dark:text-[#D9D2C5]/50 font-mono uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5 text-[#B88E39] dark:text-[#C5A059]" />
          <span>DUSON TRADING GROUP PT. · JAKARTA, INDONESIA</span>
        </div>
      </div>
    </div>
  );
}
