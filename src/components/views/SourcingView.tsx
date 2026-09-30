"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  ChevronRight, ArrowRight, ShieldCheck, Scale, Anchor, CheckCircle2, 
  MapPin, Users, Sprout, Search, FileText, QrCode, Sparkles
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function SourcingView() {
  const { openQuoteModal } = useQuoteModal();
  const [lotSearchQuery, setLotSearchQuery] = useState("");
  const [lotSearchResult, setLotSearchResult] = useState<any | null>(null);

  const sourcingHubs = [
    {
      region: "Maluku Archipelago (Banda & Ambon)",
      commodity: "Nutmeg ABCD / BWP, Whole Cloves & Mace",
      hectares: "4,500+ Ha Cooperative Estate Network",
      features: "Volcanic shade-grown agroforestry, zero chemical pesticides, traditional sun-drying on raised bamboo racks.",
      capacity: "120 Metric Tons / Month",
      img: "/images/nutmeg-spices.jpg"
    },
    {
      region: "Lampung & Southern Sumatra",
      commodity: "ASTA 550g/l Black Pepper & Cassia Vera",
      hectares: "3,200+ Ha Partner Estates",
      features: "High piperine density clusters, mechanical air-cleaning, optical color sorting, and destoning.",
      capacity: "250 Metric Tons / Month",
      img: "/images/charles-forerunner-3fPXt37X6UQ.jpg"
    },
    {
      region: "Bangka Belitung Islands",
      commodity: "Muntok White Pepper 630g/l",
      hectares: "1,800+ Ha Riverbank Farms",
      features: "Natural mountain spring-water de-pulping ensuring clean creamy color and zero off-odors.",
      capacity: "95 Metric Tons / Month",
      img: "/images/mario-gogh-VBLHICVh-lI-workers-in the office.jpg"
    },
    {
      region: "Highland Java (Dieng & Wonosobo)",
      commodity: "Commercial Ginger, Fresh Shallots & Garlic",
      hectares: "2,400+ Ha Cold-Climate Loam Fields",
      features: "Global GAP farming clusters with rapid 4-hour post-harvest hydro-cooling and mesh bagging infrastructure.",
      capacity: "400 Metric Tons / Month",
      img: "/images/vegetables.jpg"
    }
  ];

  const methodology = [
    { 
      title: "Direct Smallholder Contracts", 
      desc: "Long-term purchase agreements with over 1,200 smallholder farming families, providing fair advance financing, seed inputs, and harvest price guarantees." 
    },
    { 
      title: "Agronomic Technical Support", 
      desc: "On-the-ground agronomists providing soil moisture testing, organic composting methods, and optimal maturity harvest timing." 
    },
    { 
      title: "Farm-Gate Pre-Sorting & Grading", 
      desc: "Primary sorting stations positioned directly at harvest hubs to remove light/immature berries and foreign matter before transport." 
    },
    { 
      title: "Digital Lot Traceability", 
      desc: "Every dispatched container receives a unique Origin Lot ID tracking province, farm cooperative, harvest week, and initial assay." 
    }
  ];

  const handleLotSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lotSearchQuery.trim()) return;
    setLotSearchResult({
      lotId: lotSearchQuery.toUpperCase(),
      origin: "Maluku Islands - Banda Neira Cluster B",
      harvestDate: "August 2026",
      moisture: "9.4% (Assay Verified)",
      purity: "99.8% ASTA Grade",
      cooperative: "Koperasi Tani Pala Banda",
      certificate: "ISO 22000 / SGS Clearance #ID-88291"
    });
  };

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
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
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                We bridge smallholder farming cooperatives across Sumatra, Java, Sulawesi, and the Maluku Islands directly with global commodity processors, eliminating multi-layered middleman markups while ensuring 100% batch purity.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => openQuoteModal("Direct Sourcing Program")}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Inquire for Custom Sourcing Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/nutmeg-spices.jpg" 
                  alt="DUSON Origin Farm Network" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30 space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">1,200+ Partner Farm Families</div>
                  <div className="font-serif text-base font-medium text-[#1A0614] dark:text-[#F9F6F0]">Ethical Upstream Contracts & Fair Trade Principles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Hubs Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Regional Infrastructure</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Primary Indonesian Cultivation Hubs</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            Direct aggregation facilities situated adjacent to historical agricultural harvesting epicenters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sourcingHubs.map(hub => (
            <div key={hub.region} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-52 rounded-2xl overflow-hidden border border-[#7f1b59]/15">
                  <Image src={hub.img} alt={hub.region} fill className="object-cover" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1A0614]/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#F9F6F0] flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#B52F81]" />
                    <span>{hub.region}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-medium">{hub.commodity}</h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#1A0614] dark:text-[#F9F6F0]">
                  <span className="px-3 py-1.5 rounded-lg bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15">
                    {hub.hectares}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#F8EDF4] dark:bg-[#2D0C22] text-[#7f1b59] dark:text-[#B52F81]">
                    Cap: {hub.capacity}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">
                  {hub.features}
                </p>
              </div>

              <div className="pt-4 border-t border-[#7f1b59]/15 flex items-center justify-between">
                <button
                  onClick={() => openQuoteModal(`Sourcing Contract - ${hub.region}`)}
                  className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Request Specific Origin Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Batch Traceability Verification */}
      <section className="py-20 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-widest">
                <QrCode className="w-3.5 h-3.5" />
                <span>Digital Lot Verification</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium">Trace Any Container Back to Its Origin Farm</h2>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                Enter your DUSON Origin Lot Reference Number below to simulate real-time lot inspection, moisture level assay results, and cooperative harvesting timestamps.
              </p>

              <form onSubmit={handleLotSearch} className="flex gap-2 max-w-md">
                <input
                  type="text"
                  placeholder="e.g., LOT-2026-NMG-889"
                  value={lotSearchQuery}
                  onChange={(e) => setLotSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full bg-white dark:bg-[#220819] border border-[#7f1b59]/30 text-xs text-[#1A0614] dark:text-[#F9F6F0] focus:outline-none focus:border-[#7f1b59]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#7f1b59] dark:bg-[#B52F81] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#9E2370] transition-all shrink-0"
                >
                  Verify Lot
                </button>
              </form>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-[#7f1b59]/15">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#7f1b59] dark:text-[#B52F81]">
                    <Sparkles className="w-4 h-4" />
                    <span>Sample Origin Passport Certificate</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-green-600 dark:text-green-400 font-bold px-2 py-0.5 rounded bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800">
                    VERIFIED ACTIVE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 block font-normal">Lot Identifier:</span>
                    <strong className="text-[#1A0614] dark:text-[#F9F6F0] font-bold">{lotSearchResult?.lotId || "LOT-2026-NMG-889"}</strong>
                  </div>
                  <div>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 block font-normal">Cultivation Zone:</span>
                    <strong className="text-[#1A0614] dark:text-[#F9F6F0] font-bold">{lotSearchResult?.origin || "Banda Islands, Maluku"}</strong>
                  </div>
                  <div>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 block font-normal">Moisture Content:</span>
                    <strong className="text-[#1A0614] dark:text-[#F9F6F0] font-bold">{lotSearchResult?.moisture || "9.4% (Volatile Oil Safe)"}</strong>
                  </div>
                  <div>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/60 block font-normal">Physical Assay:</span>
                    <strong className="text-[#1A0614] dark:text-[#F9F6F0] font-bold">{lotSearchResult?.purity || "99.8% ASTA Grade"}</strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 text-[11px] text-[#5C3D52] dark:text-[#DFC8D6]/80 flex items-center justify-between">
                  <span>Inspection Body: SGS Sucofindo Joint Laboratory</span>
                  <FileText className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement Methodology */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Quality Protocol</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium">Upstream Procurement Methodology</h2>
          <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            How DUSON guarantees steady export volumes and non-variegated product specifications year-round.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((m, i) => (
            <div key={m.title} className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3 shadow-sm">
              <div className="font-serif text-3xl font-bold text-[#7f1b59] dark:text-[#B52F81]">0{i + 1}</div>
              <h3 className="font-serif text-lg font-bold">{m.title}</h3>
              <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}