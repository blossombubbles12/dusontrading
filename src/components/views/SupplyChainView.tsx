"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Layers, Thermometer, ShieldCheck } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function SupplyChainView() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/logistics" className="hover:underline">Logistics</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Cold-Chain Architecture</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                End-to-End Cold-Chain & <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Supply Integration</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                Active temperature management from origin packing houses to destination discharge terminals, ensuring uncompromised shelf life for sensitive agricultural commodities.
              </p>
              <div className="pt-2">
                <button onClick={() => openQuoteModal("Supply Chain Management")} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Request Supply Chain Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
              <Image src="/images/mario-gogh-VBLHICVh-lI-workers-in the office.jpg" alt="DUSON Supply Chain Control" fill priority className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}