"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe2, ChevronRight, ArrowRight, ShieldCheck, Scale, Award, FileCheck, CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function OurApproachView() {
  const { openQuoteModal } = useQuoteModal();

  const pillars = [
    { title: "Direct Producer Engagement", desc: "We eliminate multi-tiered broker channels by maintaining direct aggregation contracts with vetted farming clusters and processing mills." },
    { title: "Rigid Multi-Stage Lab Testing", desc: "Every commodity lot is tested for moisture levels, pesticide residues, aflatoxins, and microbiological purity before shipment." },
    { title: "Real-Time Supply Chain Tracking", desc: "Our logistics architecture provides end-to-end container visibility from port departure to final destination docking." },
    { title: "Disciplined Trade Finance", desc: "Flexible contracting structures, transparent pricing indices, and secure documentary credit mechanisms for institutional buyers." }
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
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Our Approach</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <ShieldCheck className="w-4 h-4" />
                <span>Precision & Transparency</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
                Disciplined Execution in <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Agricultural Trade</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                We combine regional Indonesian agricultural roots with international risk management to ensure uncompromised quality and exact shipment timelines.
              </p>
              <div className="pt-2">
                <button onClick={() => openQuoteModal()} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Start Procurement Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image src="/images/campaign-creators-gMsnXqILjp4-workers meeting conference.jpg" alt="DUSON Strategy Session" fill priority className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div key={p.title} className="p-8 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 space-y-4">
              <div className="font-serif text-3xl font-bold text-[#7f1b59] dark:text-[#B52F81]">0{i + 1}</div>
              <h3 className="font-serif text-xl font-medium">{p.title}</h3>
              <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}