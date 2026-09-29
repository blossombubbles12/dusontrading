"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Globe, ShieldCheck, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    commodity: "Indonesian Nutmeg & Mace",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#FCF9FB] dark:bg-[#10030B] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 overflow-hidden border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Details Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81] font-semibold">
                <span className="w-8 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
                <span>Trade Desk & Procurement</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0]">
                Work With <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">DUSON</span>
              </h2>
              <p className="text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal dark:font-light leading-relaxed">
                Connect with our Jakarta commercial desk for commodity specifications, contract pricing, and international export schedules.
              </p>
            </div>

            {/* Location & Details Card */}
            <div className="p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#220819]/70 border border-[#7f1b59]/20 dark:border-[#B52F81]/20 space-y-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F8EDF4] dark:bg-[#15040F] border border-[#7f1b59]/30 dark:border-[#B52F81]/30 flex items-center justify-center shrink-0 text-[#7f1b59] dark:text-[#B52F81]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#7f1b59] dark:text-[#B52F81] font-bold block">Headquarters</span>
                  <h4 className="font-serif text-xl text-[#1A0614] dark:text-[#F9F6F0]">Jakarta, Indonesia</h4>
                  <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/60 font-normal dark:font-light mt-1">
                    Central Business District, Jakarta · PT. Corporate Register
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15">
                <div className="w-10 h-10 rounded-full bg-[#F8EDF4] dark:bg-[#15040F] border border-[#7f1b59]/30 dark:border-[#B52F81]/30 flex items-center justify-center shrink-0 text-[#7f1b59] dark:text-[#B52F81]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#7f1b59] dark:text-[#B52F81] font-bold block">Export Operations</span>
                  <h4 className="font-serif text-xl text-[#1A0614] dark:text-[#F9F6F0]">Food Commodity Export</h4>
                  <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/60 font-normal dark:font-light mt-1">
                    Direct Ocean Freight Dispatch from Port Tanjung Priok
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8EDF4] dark:bg-[#0D0209]/80 border border-[#7f1b59]/20 dark:border-[#B52F81]/20 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#7f1b59] dark:text-[#B52F81] shrink-0" />
                <span className="text-[11px] text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal dark:font-light">
                  Direct B2B Contracting under International Trade Standards
                </span>
              </div>
            </div>
          </motion.div>

          {/* Direct Form Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] dark:bg-[#220819]/50 border border-[#7f1b59]/20 dark:border-[#B52F81]/20 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#7f1b59] dark:text-[#B52F81] mx-auto" />
                  <h3 className="font-serif text-2xl text-[#1A0614] dark:text-[#F9F6F0]">Quotation Inquiry Transmitted</h3>
                  <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-normal dark:font-light max-w-sm mx-auto">
                    Thank you. Our commercial desk in Jakarta will contact your team shortly with commodity specifications.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl text-[#1A0614] dark:text-[#F9F6F0]">Direct Commercial Inquiry</h3>
                    <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/60 font-normal dark:font-light mt-1">
                      Fill out your company requirements to receive trade terms.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] font-semibold mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Company Ltd."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8EDF4] dark:bg-[#0D0209] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0] placeholder-[#5C3D52]/50 dark:placeholder-[#DFC8D6]/30 focus:outline-none focus:border-[#7f1b59] dark:focus:border-[#B52F81]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] font-semibold mb-1.5">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8EDF4] dark:bg-[#0D0209] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0] placeholder-[#5C3D52]/50 dark:placeholder-[#DFC8D6]/30 focus:outline-none focus:border-[#7f1b59] dark:focus:border-[#B52F81]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] font-semibold mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8EDF4] dark:bg-[#0D0209] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0] placeholder-[#5C3D52]/50 dark:placeholder-[#DFC8D6]/30 focus:outline-none focus:border-[#7f1b59] dark:focus:border-[#B52F81]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] font-semibold mb-1.5">
                        Primary Commodity Focus *
                      </label>
                      <select
                        value={formData.commodity}
                        onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8EDF4] dark:bg-[#0D0209] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0] focus:outline-none focus:border-[#7f1b59] dark:focus:border-[#B52F81]"
                      >
                        <option value="Indonesian Nutmeg & Mace">Nutmeg & Mace</option>
                        <option value="Aromatic Spices (Cloves/Pepper/Cassia)">Aromatic Spices</option>
                        <option value="Export Vegetables & Fresh Produce">Vegetables & Produce</option>
                        <option value="Virgin & Extra Virgin Olive Oils">Olive Oils</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] font-semibold mb-1.5">
                      Procurement Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Detail expected shipment volume, destination port, packaging requirements, or commercial timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8EDF4] dark:bg-[#0D0209] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0] placeholder-[#5C3D52]/50 dark:placeholder-[#DFC8D6]/30 focus:outline-none focus:border-[#7f1b59] dark:focus:border-[#B52F81] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#1A0614] dark:bg-[#B52F81] text-[#F9F6F0] dark:text-[#0D0209] text-xs uppercase tracking-widest font-bold hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all duration-300 shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Commercial Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
