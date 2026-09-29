"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown, HelpCircle, ArrowRight, PhoneCall } from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function FAQView() {
  const { openQuoteModal } = useQuoteModal();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What international payment terms does DUSON accept for commodity export contracts?",
      a: "We accommodate standard institutional international trade instruments: (1) Irrevocable, Confirmed Letters of Credit (LC at Sight) issued by prime tier-1 international banks; (2) Telegraphic Transfer (TT) with a 30% advance deposit and the 70% balance payable upon electronic presentation of clean on-board Ocean Bill of Lading, Phytosanitary Certificate, and SGS Inspection Assay."
    },
    {
      q: "What is the standard Minimum Order Quantity (MOQ) per commodity group?",
      a: "Our standard export MOQ is one 20-foot Full Container Load (FCL), which represents approximately 14 to 16 Metric Tons for whole nutmeg and black/white pepper, 12 MT for whole cloves, and approx. 21,500 Liters in ISO Flexitanks for virgin olive oils. Mixed commodity container consolidation is available upon prior review with our trade desk."
    },
    {
      q: "Which official export and quality certificates accompany each dispatched container?",
      a: "Every export shipment includes: (1) Official Indonesian Phytosanitary Certificate issued by the Ministry of Agriculture; (2) Certificate of Origin (Form D, Form E, Form AK, Form ICO); (3) Third-party Pre-Shipment Inspection & Analysis Report by SGS or Sucofindo; (4) Certificate of Fumigation; (5) Halal MUI Certificate; (6) Detailed Commercial Invoice & Packing List."
    },
    {
      q: "What Incoterms 2020 delivery options do you offer?",
      a: "We routinely contract under FOB (Free on Board - Port Tanjung Priok / Belawan / Surabaya), CFR (Cost and Freight), and CIF (Cost, Insurance & Freight) delivering to over 30+ major international discharge ports across Europe, the Middle East, Asia, and the Americas. DAP terms can be structured for select destination hubs."
    },
    {
      q: "How does DUSON control moisture and prevent aflatoxin contamination during ocean transit?",
      a: "All Indonesian nutmeg and spice lots are mechanically conditioned to &lt;10.0% moisture content prior to bagging. Dispatched containers are fitted with desiccating poles and heavy-duty multi-layer poly-liners to prevent container sweat and condensation during equatorial maritime voyages."
    },
    {
      q: "Can global buyers request pre-shipment sample testing before placing commercial volume contracts?",
      a: "Yes. Our commercial desk dispatches courier sample packs (250g – 500g) via DHL Express with full laboratory Certificate of Analysis (COA) to qualified institutional buyers, processors, and importers worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Support</span>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Frequently Asked Questions</span>
        </div>

        <div className="space-y-4 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
            <HelpCircle className="w-4 h-4" />
            <span>Institutional Trade Advisory</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">Frequently Asked Questions</h1>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light max-w-xl mx-auto">
            Clear guidelines on contracting, documentary letters of credit, container loading capacities, and phytosanitary compliance.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 overflow-hidden transition-all shadow-sm">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#7f1b59] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed border-t border-[#7f1b59]/10">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-[#F8EDF4] dark:bg-[#15040F] border border-[#7f1b59]/20 text-center space-y-4">
          <h3 className="font-serif text-2xl font-medium">Have a Specific Custom Inquiry?</h3>
          <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75 max-w-md mx-auto">
            Our trade specialists in Jakarta are available to review your target volume, discharge port requirements, and custom packaging specs.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button onClick={() => openQuoteModal()} className="px-8 py-3.5 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] transition-all">
              Request Instant Quote
            </button>
            <Link href="/contact" className="px-8 py-3.5 rounded-full border border-[#7f1b59]/40 text-xs font-bold uppercase tracking-widest hover:border-[#7f1b59] transition-all">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}