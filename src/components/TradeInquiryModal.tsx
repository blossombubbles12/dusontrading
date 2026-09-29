"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Send, Building } from "lucide-react";

interface TradeInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCommodity?: string;
}

export default function TradeInquiryModal({
  isOpen,
  onClose,
  preselectedCommodity = "",
}: TradeInquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    country: "",
    commodity: preselectedCommodity || "Indonesian Nutmeg & Mace",
    volume: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-[#0D0209]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/30 dark:border-[#B52F81]/30 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden z-10 text-[#1A0614] dark:text-[#F9F6F0]"
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#5C3D52] dark:text-[#DFC8D6]/70 hover:text-[#7f1b59] dark:hover:text-[#B52F81] hover:bg-[#F8EDF4] dark:hover:bg-[#220819] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#7f1b59]/10 dark:bg-[#B52F81]/10 border border-[#7f1b59] dark:border-[#B52F81] flex items-center justify-center mx-auto text-[#7f1b59] dark:text-[#B52F81]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81] font-bold">Inquiry Received</span>
                  <h3 className="font-serif text-3xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">
                    Thank You for Contacting DUSON
                  </h3>
                  <p className="text-sm text-[#5C3D52] dark:text-[#DFC8D6]/70 font-normal dark:font-light max-w-md mx-auto leading-relaxed">
                    Our international trade desk in Jakarta will review your procurement specifications and prepare a formal quotation.
                  </p>
                </div>
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-[#F9F6F0] dark:text-[#0D0209] text-xs uppercase tracking-widest font-bold hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81] font-bold flex items-center gap-2 mb-1">
                    <Building className="w-3.5 h-3.5" />
                    DUSON B2B TRADE DESK
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">
                    Commodity Procurement Inquiry
                  </h3>
                  <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-normal dark:font-light mt-1">
                    Submit your trade volume and destination port specifications for direct pricing.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] font-semibold mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Global Foods Trading Ltd."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0] placeholder-[#5C3D52]/50 dark:placeholder-[#DFC8D6]/30 focus:outline-none focus:border-[#7f1b59] dark:focus:border-[#B52F81]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] font-semibold mb-1.5">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name / Representative"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0] placeholder-[#5C3D52]/50 dark:placeholder-[#DFC8D6]/30 focus:outline-none focus:border-[#7f1b59] dark:focus:border-[#B52F81]"
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
                        placeholder="procurement@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0] placeholder-[#5C3D52]/50 dark:placeholder-[#DFC8D6]/30 focus:outline-none focus:border-[#7f1b59] dark:focus:border-[#B52F81]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] font-semibold mb-1.5">
                        Country / Destination Port *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rotterdam / Dubai / Hamburg"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0] placeholder-[#5C3D52]/50 dark:placeholder-[#DFC8D6]/30 focus:outline-none focus:border-[#7f1b59] dark:focus:border-[#B52F81]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] font-semibold mb-1.5">
                        Target Commodity *
                      </label>
                      <select
                        value={formData.commodity}
                        onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0] focus:outline-none focus:border-[#7f1b59] dark:focus:border-[#B52F81]"
                      >
                        <option value="Indonesian Nutmeg & Mace">Indonesian Nutmeg & Mace</option>
                        <option value="Aromatic Spice Portfolio (Cloves/Pepper/Cassia)">Aromatic Spice Portfolio (Cloves/Pepper/Cassia)</option>
                        <option value="Export Produce & Fresh Vegetables">Export Produce & Fresh Vegetables</option>
                        <option value="Pure Virgin & Extra Virgin Olive Oils">Pure Virgin & Extra Virgin Olive Oils</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] font-semibold mb-1.5">
                        Estimated Volume
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 1 x 20ft FCL"
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0] placeholder-[#5C3D52]/50 dark:placeholder-[#DFC8D6]/30 focus:outline-none focus:border-[#7f1b59] dark:focus:border-[#B52F81]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] font-semibold mb-1.5">
                      Contract Specifications & Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify required grade, moisture limits, packaging type, or payment terms..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0] placeholder-[#5C3D52]/50 dark:placeholder-[#DFC8D6]/30 focus:outline-none focus:border-[#7f1b59] dark:focus:border-[#B52F81] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#1A0614] dark:bg-[#B52F81] text-[#F9F6F0] dark:text-[#0D0209] text-xs uppercase tracking-widest font-bold hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all duration-300 shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Procurement Quotation Request</span>
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
