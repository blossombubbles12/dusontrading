"use client";

import { motion } from "framer-motion";
import { Globe, Scale, Truck, Layers } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-[#FCF9FB] dark:bg-[#10030B] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 overflow-hidden border-t border-[#7f1b59]/15 dark:border-[#B52F81]/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#7f1b59]/5 dark:bg-[#B52F81]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Section Header Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81] font-semibold">
              <span className="w-8 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
              <span>Institutional Overview</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
              Bridging Origin Producers & <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Global Importers</span>
            </h2>

            <div className="p-6 rounded-2xl bg-[#F8EDF4] dark:bg-[#220819]/70 border border-[#7f1b59]/20 dark:border-[#B52F81]/20 space-y-3 shadow-sm">
              <span className="text-[11px] uppercase tracking-widest text-[#7f1b59] dark:text-[#B52F81] font-bold block">Headquarters</span>
              <p className="font-serif text-xl text-[#1A0614] dark:text-[#F9F6F0]">Jakarta, Indonesia</p>
              <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-normal dark:font-light leading-relaxed">
                Positioned at the epicenter of Southeast Asian commodity trade corridors, operating direct export channels across international ocean routes.
              </p>
            </div>
          </motion.div>

          {/* Section Narrative Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="text-lg sm:text-xl text-[#2B1423] dark:text-[#DFC8D6]/90 font-light leading-relaxed">
              <strong className="font-semibold text-[#1A0614] dark:text-[#F9F6F0]">DUSON TRADING GROUP PT.</strong> serves as a premier international B2B merchant specializing in the strategic sourcing, quality grading, export compliance, and maritime logistics of essential food commodities.
            </p>

            <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/70 font-normal dark:font-light leading-relaxed">
              We operate at the intersection of agricultural heritage and global supply chain precision. From the spice origins of Maluku and the agricultural valleys of Java to international trade hubs, DUSON oversees every phase of procurement, documentation, and freight distribution.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-xl bg-[#FFFFFF] dark:bg-[#220819]/40 border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm space-y-2 hover:border-[#7f1b59] dark:hover:border-[#B52F81]/40 transition-colors">
                <Globe className="w-5 h-5 text-[#7f1b59] dark:text-[#B52F81]" />
                <h3 className="font-serif text-lg font-medium text-[#1A0614] dark:text-[#F9F6F0]">International Trade</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/60 leading-relaxed">
                  Executing high-volume B2B commodity transactions backed by international trade terms and transparent contracting.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FFFFFF] dark:bg-[#220819]/40 border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm space-y-2 hover:border-[#7f1b59] dark:hover:border-[#B52F81]/40 transition-colors">
                <Layers className="w-5 h-5 text-[#7f1b59] dark:text-[#B52F81]" />
                <h3 className="font-serif text-lg font-medium text-[#1A0614] dark:text-[#F9F6F0]">Food Commodities</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/60 leading-relaxed">
                  Specializing in nutmeg, aromatic spices, export-grade vegetables, and pure virgin olive oil supplies.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FFFFFF] dark:bg-[#220819]/40 border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm space-y-2 hover:border-[#7f1b59] dark:hover:border-[#B52F81]/40 transition-colors">
                <Scale className="w-5 h-5 text-[#7f1b59] dark:text-[#B52F81]" />
                <h3 className="font-serif text-lg font-medium text-[#1A0614] dark:text-[#F9F6F0]">Rigorous Sourcing</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/60 leading-relaxed">
                  Direct engagement with vetted agricultural producers ensuring exact grade, moisture control, and purity specs.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FFFFFF] dark:bg-[#220819]/40 border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm space-y-2 hover:border-[#7f1b59] dark:hover:border-[#B52F81]/40 transition-colors">
                <Truck className="w-5 h-5 text-[#7f1b59] dark:text-[#B52F81]" />
                <h3 className="font-serif text-lg font-medium text-[#1A0614] dark:text-[#F9F6F0]">Integrated Logistics</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/60 leading-relaxed">
                  Comprehensive maritime freight, port handling, phytosanitary clearance, and container shipping dispatch.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
