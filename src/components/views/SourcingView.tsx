"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, ShieldCheck, Scale, Anchor, CheckCircle2, MapPin, Users, Sprout } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function SourcingView() {
  const { openQuoteModal } = useQuoteModal();

  const sourcingHubs = [
    {
      region: "Maluku Archipelago (Banda & Ambon)",
      commodity: "Nutmeg, Mace & Whole Cloves",
      hectares: "4,500+ Ha Cooperative Network",
      features: "Volcanic shade-grown agroforestry, zero chemical herbicides, traditional sun-drying on raised wooden racks."
    },
    {
      region: "Lampung & Southern Sumatra",
      commodity: "ASTA Grade Black Pepper",
      hectares: "3,200+ Ha Partner Estates",
      features: "High piperine density clusters, mechanical air-cleaning, and optical destoning facilities."
    },
    {
      region: "Bangka Belitung",
      commodity: "Muntok White Pepper",
      hectares: "1,800+ Ha Riverbank Farms",
      features: "Natural mountain spring-water de-pulping ensuring clean creamy color and zero musty off-flavors."
    },
    {
      region: "Highland Java (Dieng & Wonosobo)",
      commodity: "Commercial Ginger, Shallots & Highland Vegetables",
      hectares: "2,400+ Ha Cold-Climate Loam Fields",
      features: "Global GAP farming clusters with rapid 4-hour post-harvest hydro-cooling infrastructure."
    }
  ];

  const methodology = [
    { title: "Direct Farmer Contracts", desc: "Long-term purchase agreements with over 1,200 smallholder farming families, providing fair advance financing and harvest price security." },
    { title: "Agronomic Technical Support", desc: "On-the-ground agronomists providing soil fertility testing, organic compost techniques, and harvest timing optimization." },
    { title: "Origin Pre-Sorting & Grading", desc: "Primary sorting stations located at farm-gate to eliminate immature berries and foreign organic debris before transport to Jakarta central packing mills." },
    { title: "Digital Batch Traceability", desc: "Every dispatched batch receives a unique Origin Lot ID tracking province, farm cooperative, harvest week, and initial moisture assay." }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/trading" className="hover:underline">Trading</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Origin Sourcing</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Sprout className="w-4 h-4" />
                <span>Upstream Aggregation Network</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Direct Origin Sourcing Across the <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Indonesian Archipelago</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                We bridge smallholder farming cooperatives across Sumatra, Java, Sulawesi, and the Maluku Islands with international commodity processors, eliminating multi-layered intermediaries for total purity and transparency.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button onClick={() => openQuoteModal("Sourcing Contract")} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                  <span>Inquire for Sourcing Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image src="/images/sean-pollock-PhYq704ffdA-contact us building.jpg" alt="DUSON Origin Commodity Hub" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59]">1,200+ Partner Farm Families</div>
                  <div className="font-serif text-base text-[#1A0614] dark:text-[#F9F6F0]">Direct Lot Traceability & Fair Trade Principles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Hubs */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Primary Indonesian Cultivation Hubs</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">Direct aggregation centers positioned adjacent to historical growing epicenters.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sourcingHubs.map(hub => (
            <div key={hub.region} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">
                <MapPin className="w-4 h-4" />
                <span>{hub.region}</span>
              </div>
              <h3 className="font-serif text-2xl font-medium">{hub.commodity}</h3>
              <div className="text-xs font-semibold text-[#1A0614] dark:text-[#F9F6F0] bg-[#FCF9FB] dark:bg-[#15040F] p-3 rounded-xl border border-[#7f1b59]/15">
                {hub.hectares}
              </div>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75 font-light leading-relaxed">{hub.features}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">Upstream Procurement Methodology</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75">How DUSON guarantees steady supply volumes and consistent physical grades.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m, i) => (
              <div key={m.title} className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3">
                <div className="font-serif text-3xl font-bold text-[#7f1b59] dark:text-[#B52F81]">0{i + 1}</div>
                <h3 className="font-serif text-lg font-medium">{m.title}</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-light leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}