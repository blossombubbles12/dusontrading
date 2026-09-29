"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2 } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function ContactView() {
  const { openQuoteModal } = useQuoteModal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Contact Commercial Desk</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81] block">Jakarta Headquarters</span>
                <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
                  Direct Institutional <br />
                  <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Trade Desk</span>
                </h1>
                <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light leading-relaxed">
                  Our commercial trade officers in Jakarta are available for contract specifications, ocean container schedules, and CIF/FOB pricing inquiries.
                </p>
              </div>

              <div className="space-y-6 pt-4 text-xs sm:text-sm">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20">
                  <MapPin className="w-5 h-5 text-[#7f1b59] dark:text-[#B52F81] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-[#1A0614] dark:text-[#F9F6F0]">Corporate Headquarters</strong>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70 font-light leading-relaxed">
                      DUSON TRADING GROUP PT.<br />
                      Jalan Ks. Tubun No. 30, RT.5/RW.2, Kota Bambu Selatan, Palmerah,<br />
                      RT.5, RT.8/RW.2, Kota Bambu Sel., Kec. Palmerah,<br />
                      Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11420, Indonesia
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20">
                  <Mail className="w-5 h-5 text-[#7f1b59] dark:text-[#B52F81] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-[#1A0614] dark:text-[#F9F6F0]">Electronic Inquiries</strong>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70 font-light">trade@dusongroup.com · export@dusongroup.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20">
                  <Phone className="w-5 h-5 text-[#7f1b59] dark:text-[#B52F81] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-[#1A0614] dark:text-[#F9F6F0]">Commercial Switchboard</strong>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70 font-light">+62 815-6523-505 (Jakarta HQ Desk)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-xl">
                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-[#7f1b59] dark:text-[#B52F81] mx-auto" />
                    <h3 className="font-serif text-3xl font-medium">Inquiry Dispatched</h3>
                    <p className="text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75 font-light max-w-md mx-auto">
                      Thank you. Your procurement inquiry has been assigned to our Jakarta senior trade officer. You will receive a response within 4 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-serif text-2xl font-medium mb-2">Direct Procurement Message</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2">Your Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full px-4 py-3.5 rounded-xl border border-[#7f1b59]/20 dark:border-[#B52F81]/20 bg-[#FCF9FB] dark:bg-[#15040F] text-xs focus:outline-none focus:border-[#7f1b59]" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2">Corporate Email</label>
                        <input required type="email" placeholder="john@enterprise.com" className="w-full px-4 py-3.5 rounded-xl border border-[#7f1b59]/20 dark:border-[#B52F81]/20 bg-[#FCF9FB] dark:bg-[#15040F] text-xs focus:outline-none focus:border-[#7f1b59]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2">Company / Organization</label>
                        <input required type="text" placeholder="Global Foods Ltd." className="w-full px-4 py-3.5 rounded-xl border border-[#7f1b59]/20 dark:border-[#B52F81]/20 bg-[#FCF9FB] dark:bg-[#15040F] text-xs focus:outline-none focus:border-[#7f1b59]" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2">Commodity Interest</label>
                        <select className="w-full px-4 py-3.5 rounded-xl border border-[#7f1b59]/20 dark:border-[#B52F81]/20 bg-[#FCF9FB] dark:bg-[#15040F] text-xs focus:outline-none focus:border-[#7f1b59]">
                          <option>Indonesian Nutmeg & Mace</option>
                          <option>Aromatic Spices & Pepper</option>
                          <option>Commercial Vegetables</option>
                          <option>Virgin Olive Oils</option>
                          <option>General Trade & Logistics Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2">Target Volume / Destination Port / Requirements</label>
                      <textarea required rows={4} placeholder="Please detail estimated container volume (e.g., 2x 20ft FCL), required grade, target discharge port, and preferred Incoterm..." className="w-full px-4 py-3.5 rounded-xl border border-[#7f1b59]/20 dark:border-[#B52F81]/20 bg-[#FCF9FB] dark:bg-[#15040F] text-xs focus:outline-none focus:border-[#7f1b59]" />
                    </div>

                    <button type="submit" className="w-full py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl">
                      Submit Trade Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}