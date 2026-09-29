"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Sparkles, PackageCheck } from "lucide-react";

interface CommoditiesShowcaseProps {
  onOpenTradeModal: (commodityName?: string) => void;
}

export default function CommoditiesShowcase({ onOpenTradeModal }: CommoditiesShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const commodities = [
    {
      id: "nutmeg",
      category: "spices",
      name: "Indonesian Nutmeg & Mace",
      subtitle: "Myristica Fragrans · Whole & Cracked Grades",
      image: "/images/nutmeg-spices.jpg",
      origin: "Banda Islands & Maluku, Indonesia",
      specs: [
        "A-Grade Whole Nutmeg (ABCD Grades)",
        "Premium Mace Flower (Whole & Ground)",
        "Sun-dried & Moisture-Controlled (<10%)",
        "Bulk Jute Bags & Vacuum Container Packaging",
      ],
      description:
        "World-renowned Indonesian nutmeg harvested directly from endemic spice island groves. Hand-sorted for oil density, shell integrity, and aromatic purity, ideal for international food processors and botanical spice distributors.",
    },
    {
      id: "spices",
      category: "spices",
      name: "Aromatic Spice Portfolio",
      subtitle: "Cloves · Black & White Pepper · Cassia Cinnamon",
      image: "/images/nutmeg-spices.jpg",
      origin: "Sulawesi, Sumatra & Java, Indonesia",
      specs: [
        "Lal Pari Grade Cloves (High Volatile Oil)",
        "Lampung Black Pepper & Muntok White Pepper",
        "Korintje Cassia Cinnamon Sticks & Powder",
        "Steam Sterilized Export Packaging",
      ],
      description:
        "Comprehensive B2B bulk supply of tropical Indonesian spices. Sourced through direct producer networks and processed under strict phytosanitary standards to preserve essential oil profiles and shelf stability.",
    },
    {
      id: "vegetables",
      category: "vegetables",
      name: "Export Produce & Vegetables",
      subtitle: "Fresh Agricultural Harvest · Cold-Chain Logistics",
      image: "/images/vegetables.jpg",
      origin: "Highland Agro-zones, Indonesia",
      specs: [
        "Class 1 Export Grade Vegetables",
        "Temperature-Controlled Reefer Containers",
        "GAP (Good Agricultural Practice) Certified Farms",
        "Custom Wholesale Crating & Bulk Packaging",
      ],
      description:
        "Premium agricultural produce cultivated in mineral-rich highland soil. Rapid post-harvest sorting and continuous cold-chain dispatch ensure maximum freshness for regional and international wholesale importers.",
    },
    {
      id: "olive-oil",
      category: "oils",
      name: "Pure Virgin & Extra Virgin Olive Oils",
      subtitle: "Cold-Pressed · Commercial & Culinary Grades",
      image: "/images/olive-oil.jpg",
      origin: "Mediterranean Partner Orchards",
      specs: [
        "Cold-Pressed Extra Virgin (Acidity < 0.8%)",
        "Refined & Pomace Olive Oils for Industrial Use",
        "ISO Food Safety Compliant Supply",
        "Flexitank, IBC Totes & Dark Glass Bottling",
      ],
      description:
        "Superior quality olive oils selected for global trade and distribution. Available in flexible commercial volumes ranging from retail-ready dark amber bottles to industrial bulk flexitanks for food manufacturing.",
    },
  ];

  const filteredCommodities =
    activeCategory === "all"
      ? commodities
      : commodities.filter((item) => item.category === activeCategory);

  return (
    <section id="commodities" className="relative py-28 bg-[#F8EDF4] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81] font-semibold">
              <span className="w-8 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
              <span>Commercial Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0]">
              Our Core Food <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Commodities</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/70 font-normal dark:font-light">
              Supplying international markets with verified quality, origin transparency, and tailored bulk shipping solutions.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2 p-1.5 rounded-full bg-[#FFFFFF] dark:bg-[#220819]/80 border border-[#7f1b59]/20 dark:border-[#B52F81]/20 shadow-md self-start md:self-auto"
          >
            {[
              { id: "all", label: "All Portfolio" },
              { id: "spices", label: "Nutmeg & Spices" },
              { id: "vegetables", label: "Vegetables" },
              { id: "oils", label: "Olive Oils" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                  activeCategory === tab.id
                    ? "bg-[#1A0614] dark:bg-[#B52F81] text-[#F9F6F0] dark:text-[#0D0209] shadow-md"
                    : "text-[#5C3D52] dark:text-[#DFC8D6]/70 hover:text-[#1A0614] dark:hover:text-[#F9F6F0]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Commodity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredCommodities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-[#FFFFFF] dark:bg-[#220819]/60 border border-[#7f1b59]/20 dark:border-[#B52F81]/20 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image & Header */}
              <div>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#10030B]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/40 dark:from-[#220819] via-transparent to-transparent" />
                  
                  {/* Origin Badge */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#1A0614]/80 dark:bg-[#0D0209]/80 backdrop-blur-md border border-[#7f1b59]/40 dark:border-[#B52F81]/30 text-[11px] uppercase tracking-wider text-[#F9F6F0] dark:text-[#B52F81] font-medium flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-[#B52F81]" />
                    {item.origin}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] font-bold block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A0614] dark:text-[#F9F6F0] group-hover:text-[#7f1b59] dark:group-hover:text-[#B52F81] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal dark:font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Specifications List */}
                  <div className="space-y-2.5 pt-2 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#5C3D52]/70 dark:text-[#DFC8D6]/50 font-bold block mb-2">
                      Commercial Specifications
                    </span>
                    {item.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1A0614] dark:text-[#F9F6F0]/90 font-normal dark:font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                <button
                  onClick={() => onOpenTradeModal(item.name)}
                  className="w-full flex items-center justify-between px-6 py-3.5 rounded-xl border border-[#7f1b59]/30 dark:border-[#B52F81]/30 bg-[#F8EDF4] dark:bg-[#0D0209]/60 hover:bg-[#1A0614] dark:hover:bg-[#B52F81] text-[#1A0614] dark:text-[#F9F6F0] hover:text-[#F9F6F0] dark:hover:text-[#0D0209] text-xs uppercase tracking-widest font-semibold transition-all duration-300 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <PackageCheck className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] group-hover/btn:text-[#F9F6F0] dark:group-hover/btn:text-[#0D0209]" />
                    Inquire Commodity Logistics
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] group-hover/btn:text-[#F9F6F0] dark:group-hover/btn:text-[#0D0209] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
