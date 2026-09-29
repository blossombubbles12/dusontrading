"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Anchor, MapPin, ArrowUpRight } from "lucide-react";

interface TradeLogisticsProps {
  onOpenTradeModal: () => void;
}

export default function TradeLogistics({ onOpenTradeModal }: TradeLogisticsProps) {
  const steps = [
    {
      num: "01",
      title: "Direct Harvest & Sourcing",
      desc: "Direct procurement from audited Indonesian agricultural co-ops and partner plantations, enforcing origin traceability and grade sorting.",
    },
    {
      num: "02",
      title: "Phytosanitary & Quality Control",
      desc: "Rigorous lab testing for moisture, purity, and phytosanitary certification adhering to destination country import regulations.",
    },
    {
      num: "03",
      title: "Export Packing & Containerization",
      desc: "Custom bulk packaging including vacuum-sealed liners, jumbo polypropylene bags, and temperature-monitored reefer containers.",
    },
    {
      num: "04",
      title: "Global Maritime Dispatch",
      desc: "Seamless customs documentation, bill of lading issuance, and vessel loading from Tanjung Priok Maritime Terminal in Jakarta.",
    },
  ];

  return (
    <section id="logistics" className="relative py-28 bg-[#FCF9FB] dark:bg-[#10030B] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 overflow-hidden border-t border-[#7f1b59]/15 dark:border-[#B52F81]/10">
      
      {/* Background Logistics Image */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 select-none">
        <Image
          src="/images/logistics-bg.jpg"
          alt="Global Maritime Trade Logistics Container Port"
          fill
          className="object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9FB] via-[#FCF9FB]/90 to-[#FCF9FB] dark:from-[#10030B] dark:via-[#10030B]/90 dark:to-[#10030B]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81] font-semibold">
              <span className="w-8 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
              <span>Trade Architecture & Supply Chain</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0]">
              Seamless Logistics, <br />
              <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">From Jakarta to Global Ports</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 lg:text-right"
          >
            <button
              onClick={onOpenTradeModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#7f1b59]/40 dark:border-[#B52F81]/40 bg-[#1A0614] dark:bg-[#220819] hover:bg-[#7f1b59] dark:hover:bg-[#B52F81] text-[#F9F6F0] dark:text-[#F9F6F0] hover:text-[#0D0209] text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md"
            >
              <span>Request Shipping Quote</span>
              <ArrowUpRight className="w-4 h-4 text-[#B52F81]" />
            </button>
          </motion.div>
        </div>

        {/* Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#220819]/60 border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-lg flex flex-col justify-between hover:border-[#7f1b59] dark:hover:border-[#B52F81]/40 transition-colors group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#7f1b59]/15 dark:border-[#B52F81]/15 pb-4">
                  <span className="font-serif text-3xl font-light text-[#7f1b59] dark:text-[#B52F81] group-hover:gold-gradient-text">
                    {step.num}
                  </span>
                  <Anchor className="w-4 h-4 text-[#7f1b59]/40 dark:text-[#B52F81]/40 group-hover:text-[#7f1b59] dark:group-hover:text-[#B52F81] transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-normal dark:font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 text-[10px] uppercase tracking-widest text-[#7f1b59] dark:text-[#B52F81]/80 font-semibold">
                Standard Protocol
              </div>
            </motion.div>
          ))}
        </div>

        {/* Maritime Gateway Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#1A0614] dark:bg-gradient-to-r dark:from-[#220819] dark:via-[#15040F] dark:to-[#220819] border border-[#7f1b59]/30 dark:border-[#B52F81]/30 text-[#F9F6F0] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B52F81]">
              <MapPin className="w-4 h-4 text-[#B52F81]" />
              <span>Tanjung Priok Port Hub · Jakarta</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F9F6F0]">
              Commercial Terms: FOB, CIF, & CFR
            </h3>
            <p className="text-xs sm:text-sm text-[#DFC8D6]/80 font-light leading-relaxed">
              We execute international sale contracts tailored to buyers' freight preferences, managing export clearance, LC payments, and container vessel bookings with major ocean carriers.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenTradeModal}
              className="px-8 py-4 rounded-full bg-[#B52F81] text-[#0D0209] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#D94B9F] transition-all duration-300 shadow-xl"
            >
              Consult Trade Desk
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
