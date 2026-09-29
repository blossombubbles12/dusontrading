"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Anchor, ArrowRight } from "lucide-react";

interface GlobalReachProps {
  onOpenTradeModal: () => void;
}

export default function GlobalReach({ onOpenTradeModal }: GlobalReachProps) {
  return (
    <section id="global-reach" className="relative py-28 bg-[#F8EDF4] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 overflow-hidden">
      
      {/* Background World Map Graphic Accent */}
      <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-[#7f1b59]/30 dark:border-[#B52F81]/30 flex items-center justify-center animate-spin-slow">
          <div className="w-[600px] h-[600px] rounded-full border border-[#7f1b59]/20 dark:border-[#B52F81]/20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81] font-semibold">
              <span className="w-8 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
              <span>International Trade Corridors</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
              Headquartered in Jakarta, <br />
              <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Serving Global Buyers</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal dark:font-light leading-relaxed">
              Indonesia stands as one of the world's primary origin points for nutmeg, high-grade spices, and agricultural produce. Positioned in Jakarta, DUSON TRADING GROUP connects local origin cultivation with international commercial buyers through transparent trade agreements and reliable shipping routes.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1A0614] dark:bg-[#220819] border border-[#7f1b59]/30 dark:border-[#B52F81]/30 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-[#B52F81]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#1A0614] dark:text-[#F9F6F0]">Jakarta Corporate HQ & Export Desk</h4>
                  <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/60 font-normal dark:font-light">
                    Direct oversight of commercial contracts, export documentation, and client trade inquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1A0614] dark:bg-[#220819] border border-[#7f1b59]/30 dark:border-[#B52F81]/30 flex items-center justify-center shrink-0 mt-1">
                  <Anchor className="w-4 h-4 text-[#B52F81]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#1A0614] dark:text-[#F9F6F0]">Maritime Port Operations</h4>
                  <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/60 font-normal dark:font-light">
                    Primary container vessel loading handled through Port Tanjung Priok with worldwide ocean carrier bookings.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenTradeModal}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-[#F9F6F0] dark:text-[#0D0209] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all duration-300 shadow-xl"
              >
                <span>Initiate Global Procurement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Editorial Visual Map Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] dark:bg-[#220819]/70 border border-[#7f1b59]/25 dark:border-[#B52F81]/25 shadow-xl space-y-8 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#7f1b59]/20 dark:border-[#B52F81]/20 pb-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81] font-semibold flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  JAKARTA GATEWAY MATRIX
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#5C3D52]/70 dark:text-[#DFC8D6]/50 font-mono">
                  06° 12' S / 106° 49' E
                </span>
              </div>

              {/* Trade Corridors Matrix */}
              <div className="space-y-4">
                {[
                  { region: "SE Asian Regional Trade Hubs", focus: "Spices & Fresh Vegetables", status: "Active Maritime Route" },
                  { region: "Middle East Trade Corridor", focus: "Nutmeg, Spices & Olive Oils", status: "Active Maritime Route" },
                  { region: "European Importer Corridors", focus: "Organic Spices & Raw Commodities", status: "Active Maritime Route" },
                  { region: "Americas Supply Channel", focus: "Bulk Nutmeg & Essential Spices", status: "Active Maritime Route" },
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-xl bg-[#F8EDF4] dark:bg-[#0D0209]/80 border border-[#7f1b59]/15 dark:border-[#B52F81]/15 flex items-center justify-between gap-4">
                    <div>
                      <h5 className="font-serif text-sm font-medium text-[#1A0614] dark:text-[#F9F6F0]">{item.region}</h5>
                      <span className="text-[11px] text-[#5C3D52] dark:text-[#DFC8D6]/60 font-normal dark:font-light block">{item.focus}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#7f1b59] dark:text-[#B52F81] bg-[#7f1b59]/10 dark:bg-[#B52F81]/10 px-2.5 py-1 rounded-md border border-[#7f1b59]/20 dark:border-[#B52F81]/20 shrink-0 font-semibold">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#1A0614] text-[#F9F6F0] border border-[#7f1b59]/20 text-center text-xs font-light">
                All commodities originate under strict Indonesian agricultural inspection and international shipping guidelines.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
