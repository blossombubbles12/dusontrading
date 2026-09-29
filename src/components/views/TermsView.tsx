"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TermsView() {
  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] py-20 px-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59]">
        <Link href="/">Home</Link> <ChevronRight className="w-3.5 h-3.5" /> <span>Terms & Conditions</span>
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl font-medium">Commercial Terms & Conditions</h1>
      <div className="space-y-4 text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
        <p>All commodity transactions executed by DUSON TRADING GROUP PT. are subject to definitive written Sales Contracts incorporating Incoterms 2020 rules and applicable international trade arbitrations.</p>
      </div>
    </div>
  );
}