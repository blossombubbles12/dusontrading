"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, ChevronRight, ArrowRight, ShieldCheck, Award, FileText, CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function CommoditiesView() {
  const { openQuoteModal } = useQuoteModal();

  const commodities = [
    {
      title: "Indonesian Nutmeg & Mace",
      tag: "Flagship Spices",
      image: "/images/nutmeg-spices.jpg",
      link: "/commodities/nutmeg",
      grades: "ABCD, Sound, BWP & Whole Mace",
      origin: "Banda Islands & North Maluku",
      desc: "World-renowned high volatile oil content Indonesian nutmeg. Screened for moisture (<10%), zero chemical fumigants, aflatoxin certified."
    },
    {
      title: "Aromatic Spices & Pepper",
      tag: "Export Bulk",
      image: "/images/nutmeg-spices.jpg",
      link: "/commodities/spices",
      grades: "Lampung Black Pepper, Muntok White, Cloves Lalpari, Cassia",
      origin: "Sumatra, Java & Sulawesi",
      desc: "Machine cleaned, steam-sterilized, density-sorted whole spices for industrial food manufacturers, spice grinders, and extractors."
    },
    {
      title: "Commercial & Organic Vegetables",
      tag: "Fresh & Chilled",
      image: "/images/vegetables.jpg",
      link: "/commodities/vegetables",
      grades: "Export Grade A / Global GAP Certified",
      origin: "Highland Java & North Sumatra",
      desc: "Chilled agricultural produce pre-cooled within 4 hours of harvest. Rapid air and cold-chain reefer ocean dispatch."
    },
    {
      title: "Virgin & Extra Virgin Olive Oils",
      tag: "Mediterranean Sourcing",
      image: "/images/olive-oil.jpg",
      link: "/commodities/olive-oils",
      grades: "Extra Virgin (<0.3% & <0.8% Acidity), Pure Virgin",
      origin: "Mediterranean Cooperative Groves",
      desc: "Cold extracted within 24 hours of harvest. Supplied in bulk ISO flexitanks, food-grade 1000L IBC totes, and steel drums."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">All Commodities</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
              <Layers className="w-4 h-4" />
              <span>Certified Agricultural Portfolio</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight leading-tight">
              Essential Food Commodities for <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Global Processors</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
              Every commodity lot is sourced directly from origin clusters, lab-tested under ISO 22000 guidelines, and packaged to meet stringent global food safety standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commodities.map((c, i) => (
            <div key={c.title} className="group rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 overflow-hidden shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-64 w-full">
                  <Image src={c.image} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0D0209]/80 backdrop-blur-md text-[#B52F81] text-[10px] font-bold uppercase tracking-widest border border-[#B52F81]/30">
                    {c.tag}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light leading-relaxed">{c.desc}</p>
                  <div className="space-y-1.5 pt-2 text-xs">
                    <div><strong className="text-[#7f1b59] dark:text-[#B52F81]">Available Grades:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">{c.grades}</span></div>
                    <div><strong className="text-[#7f1b59] dark:text-[#B52F81]">Origin Regions:</strong> <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">{c.origin}</span></div>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-0 flex items-center justify-between border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15">
                <Link href={c.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A0614] dark:text-[#F9F6F0] group-hover:text-[#7f1b59] dark:group-hover:text-[#B52F81] transition-colors">
                  <span>Full Technical Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button onClick={() => openQuoteModal(c.title)} className="px-4 py-2 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-[11px] font-bold uppercase tracking-wider hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-colors">
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}