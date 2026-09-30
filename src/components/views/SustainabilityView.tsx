"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Leaf, ChevronRight, ArrowRight, ShieldCheck, HeartHandshake, 
  Sprout, CheckCircle2, Trees, Droplets, Sun, Award, 
  BarChart3, Users, Globe2, PhoneCall, Sparkles
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function SustainabilityView() {
  const { openQuoteModal } = useQuoteModal();
  const [activePillar, setActivePillar] = useState<number>(0);

  const esgMetrics = [
    { value: "1,200+", label: "Smallholder Families", desc: "Supported with guaranteed minimum purchase prices" },
    { value: "12,500+ Ha", label: "Agroforestry Land", desc: "Under sustainable shade-grown canopy practices" },
    { value: "100%", label: "Batch Traceability", desc: "GPS origin verified from farm gate to discharge port" },
    { value: "0%", label: "Synthetic Residues", desc: "Zero chemical pesticides on certified organic parcels" }
  ];

  const pillars = [
    {
      id: "agroforestry",
      title: "Regenerative Agroforestry & Soil Conservation",
      subtitle: "Ecological Biodiversity Preservation",
      icon: Trees,
      desc: "In Maluku and Sulawesi, we champion multi-story agroforestry where nutmeg and clove trees grow naturally beneath protective rainforest canopies. This preserves vital root structures, retains natural soil moisture, prevents topsoil erosion, and fosters biodiversity without artificial chemical fertilizers.",
      highlights: [
        "Shade-grown cultivation protecting native tropical bird and pollinator populations.",
        "Natural organic composting utilizing recycled crop husks and agricultural biomass.",
        "Zero slash-and-burn land clearing enforcement across all supplier cooperative contracts."
      ],
      img: "/images/vegetables.jpg"
    },
    {
      id: "fair-trade",
      title: "Direct Farmer Fair Compensation & Livelihoods",
      subtitle: "Equitable Economic Partnerships",
      icon: HeartHandshake,
      desc: "We bypass multi-tiered intermediary broker chains to deal directly with farming cooperatives. DUSON guarantees purchase price floors 15% to 25% above volatile local spot markets, shielding smallholders from global market downturns and providing upfront harvest financing.",
      highlights: [
        "Pre-harvest zero-interest micro-financing for farming inputs and post-harvest tools.",
        "Direct bank transfers and prompt payment settlement within 24 hours of farm-gate delivery.",
        "Multi-year purchase contracts giving farming families predictable financial stability."
      ],
      img: "/images/nutmeg-spices.jpg"
    },
    {
      id: "traceability",
      title: "Purity Assurance & Organic Certification",
      subtitle: "Scientific Verification & Chemical-Free Integrity",
      icon: Sprout,
      desc: "We actively assist regional farmer groups in transitioning to and maintaining international organic certifications. Through regular soil testing, water purity assays, and rigorous laboratory screening, we ensure commodities meet strict EU BIO and USDA Organic standards.",
      highlights: [
        "Continuous field training on organic pest management and natural microbial pest deterrents.",
        "Zero-Aflatoxin solar drying raised-bed technology preventing mould contamination during monsoons.",
        "Independent third-party laboratory verification for 450+ chemical pesticide residues."
      ],
      img: "/images/olive-oil.jpg"
    },
    {
      id: "packaging",
      title: "Eco-Conscious Logistics & Zero Food Waste",
      subtitle: "Sustainable Packaging & Cold-Chain Efficiency",
      icon: Droplets,
      desc: "From farm aggregation to containerized maritime shipping, we implement packaging solutions that protect food safety while minimizing environmental footprints. We utilize recyclable multi-layer barrier liners and reusable industrial bulk totes.",
      highlights: [
        "100% recyclable poly-lined Kraft paper bags and biodegradable hermetic barrier liners.",
        "Reusable food-grade stainless steel & HDPE intermediate bulk containers (IBC) for olive oils.",
        "Optimized container space load planning reducing carbon emissions per metric ton shipped."
      ],
      img: "/images/campaign-creators-gMsnXqILjp4-workers meeting conference.jpg"
    }
  ];

  const communityPrograms = [
    {
      title: "Clean Water & Sanitation Wells",
      region: "Central Maluku & South Sulawesi",
      impact: "Constructed 18 deep-bore clean water wells providing reliable, potable drinking water to rural spice harvesting villages."
    },
    {
      title: "Solar Drying Infrastructure Grants",
      region: "North Maluku & West Sumatra",
      impact: "Funded 35 elevated UV-shielded solar drying domes, reducing post-harvest crop loss from 18% down to less than 1.5%."
    },
    {
      title: "Farmer Agronomy Masterclasses",
      region: "Banda Islands, Lampung, & Java",
      impact: "Trained over 850 farmers in calibrated pruning techniques, natural composting, and digital grain moisture measurement."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7f1b59]/5 via-transparent to-[#B52F81]/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/about" className="hover:underline">Company</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Sustainability</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Leaf className="w-4 h-4" />
                <span>Environmental & Social Governance (ESG)</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
                Sustainable Trade for <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Future Generations</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                DUSON TRADING GROUP PT. integrates regenerative agroforestry, fair farmer compensation, and zero-chemical integrity across our agricultural supply networks.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => openQuoteModal()} 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Request ESG Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="https://wa.me/6282223000688" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-[#220819] border border-[#7f1b59]/30 dark:border-[#B52F81]/30 text-[#1A0614] dark:text-[#F9F6F0] text-xs font-bold uppercase tracking-widest hover:bg-[#F8EDF4] dark:hover:bg-[#2D0B22] transition-all shadow-md"
                >
                  <PhoneCall className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" />
                  <span>Sustainability Liaison</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/vegetables.jpg" 
                  alt="Sustainable Agriculture and Regenerative Farming" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#1A0614]/90 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Ethical Origin</span>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">Banda Islands • Maluku • Java</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUANTITATIVE ESG METRICS */}
      <section className="py-16 bg-white dark:bg-[#15040F] border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {esgMetrics.map((m, i) => (
              <div 
                key={i} 
                className="p-6 rounded-3xl bg-[#FCF9FB] dark:bg-[#220819] border border-[#7f1b59]/15 dark:border-[#B52F81]/15 space-y-2 hover:border-[#7f1b59] transition-all"
              >
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#7f1b59] dark:text-[#B52F81]">
                  {m.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1A0614] dark:text-[#F9F6F0]">
                  {m.label}
                </div>
                <div className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-light">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUR ESG PILLARS */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-widest">
            <Sprout className="w-4 h-4" />
            <span>Strategic Framework</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
            The Four Pillars of DUSON Sustainability
          </h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">
            Our multi-dimensional approach ensures that every metric ton of agricultural commodities sourced creates positive ecological and social impact.
          </p>
        </div>

        {/* Pillar Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillar(idx)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                  activePillar === idx
                    ? "bg-[#7f1b59] dark:bg-[#B52F81] text-white dark:text-[#0D0209] border-transparent shadow-lg scale-105"
                    : "bg-white dark:bg-[#220819] text-[#5C3D52] dark:text-[#DFC8D6]/80 border-[#7f1b59]/20 dark:border-[#B52F81]/20 hover:border-[#7f1b59]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{p.title.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        <div className="bg-white dark:bg-[#220819] rounded-3xl p-8 lg:p-12 border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8EDF4] dark:bg-[#15040F] text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-wider">
                <span>{pillars[activePillar].subtitle}</span>
              </div>

              <h3 className="font-serif text-3xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">
                {pillars[activePillar].title}
              </h3>

              <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                {pillars[activePillar].desc}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">
                  Key Action Directives:
                </div>
                <div className="space-y-2.5">
                  {pillars[activePillar].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#1A0614] dark:text-[#F9F6F0] font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-lg border border-[#7f1b59]/20">
                <Image 
                  src={pillars[activePillar].img} 
                  alt={pillars[activePillar].title} 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMUNITY EMPOWERMENT INITIATIVES */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-widest">
            <Users className="w-4 h-4" />
            <span>Social Stewardship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
            Community Development at Indonesian Farm Origins
          </h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">
            We invest 3% of our annual operational trading margins into rural infrastructure, farmer education, and post-harvest technology grants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityPrograms.map((prog, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 space-y-4 shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] bg-[#F8EDF4] dark:bg-[#15040F] px-3 py-1 rounded-full inline-block">
                {prog.region}
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">
                {prog.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light leading-relaxed">
                {prog.impact}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1A0614] via-[#350A27] to-[#1A0614] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-[#7f1b59]/30">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B52F81]/20 border border-[#B52F81]/40 text-[#B52F81] text-xs font-bold uppercase tracking-wider">
              <span>Partner With Us</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
              Source Responsibly With Full Origin Integrity
            </h2>
            <p className="text-sm sm:text-base text-[#DFC8D6]/85 font-light leading-relaxed">
              Require certified organic lots, ESG audit documentation, or custom regenerative crop supply contracts? Contact our sustainability department today.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button 
                onClick={() => openQuoteModal()} 
                className="px-8 py-4 rounded-full bg-[#B52F81] text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#D94B9F] transition-all shadow-xl"
              >
                Inquire for Sustainable Commodities
              </button>
              <Link 
                href="/our-approach" 
                className="px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                Review Our Quality Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}