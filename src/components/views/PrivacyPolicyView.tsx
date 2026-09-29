"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PrivacyPolicyView() {
  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] py-20 px-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59]">
        <Link href="/">Home</Link> <ChevronRight className="w-3.5 h-3.5" /> <span>Privacy Policy</span>
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl font-medium">Privacy Policy</h1>
      <div className="space-y-4 text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
        <p>DUSON TRADING GROUP PT. respects your privacy and is committed to protecting corporate and personal data submitted through our electronic trade portals.</p>
        <p>All information provided in quotation requests is used exclusively for contract formulation, KYC verification, and direct trade correspondence under Indonesian and international data protection laws.</p>
      </div>
    </div>
  );
}