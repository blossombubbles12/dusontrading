"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, ChevronRight, ArrowRight, ShieldCheck, HeartHandshake, Sprout, CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function SustainabilityView() {
  const { openQuoteModal } = useQuoteModal();

  const initiatives = [
    { icon: Sprout, title: "Regenerative Agroforestry", desc: "Supporting shade-grown nutmeg and multi-crop farming in Maluku and Sulawesi to preserve virgin rainforest soils and biodiversity." },
    { icon: HeartHandshake, title: "Direct Farmer Fair Compensation", desc: "Establishing long-term procurement pricing models that guarantee sustainable livelihoods for over 1,200 smallholder spice farming families." },
    { icon: Leaf, title: "Traceable & Organic Certification", desc: "Assisting agricultural clusters in achieving EU BIO and USDA Organic certifications with full chemical-free cultivation verification." },
    { icon: ShieldCheck, title: "Zero Food Waste Packaging", desc: "Utilizing 100% recyclable multi-layer barrier bags, reusable food-grade IBC totes, and eco-certified packaging materials." }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span>Company</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Sustainability</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Leaf className="w-4 h-4" />
                <span>Responsible Stewardship</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
                Sustainable Trade for <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Future Generations</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                DUSON TRADING GROUP PT. believes high-volume commodity trade must preserve the ecological fertility of Indonesian soils and empower origin producers.
              </p>
              <div className="pt-2">
                <button onClick={() => openQuoteModal()} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Request Sustainability Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image src="/images/vegetables.jpg" alt="Sustainable Agricultural Fields" fill priority className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((init, i) => {
            const Icon = init.icon;
            return (
              <div key={init.title} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-[#F8EDF4] dark:bg-[#15040F] text-[#7f1b59] dark:text-[#B52F81] flex-shrink-0 border border-[#7f1b59]/20">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-medium">{init.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75 font-light leading-relaxed">{init.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}