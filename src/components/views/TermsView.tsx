"use client";

import Link from "next/link";
import { ChevronRight, ShieldCheck, Scale, FileText, Lock, Globe2, AlertCircle, Building2, PhoneCall } from "lucide-react";
import EmailProtected from "@/components/EmailProtected";

export default function TermsView() {
  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Legal</span>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span className="text-[#1A0614] dark:text-[#F9F6F0]">Terms & Conditions</span>
        </div>

        {/* Document Header */}
        <div className="space-y-4 pb-8 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/15">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
            <Scale className="w-4 h-4" />
            <span>Commercial Governance</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0]">
            Commercial Terms & Conditions of Trade
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-semibold">
            <span><strong>Effective Date:</strong> September 30, 2026</span>
            <span><strong>Entity:</strong> DUSON TRADING GROUP PT.</span>
            <span><strong>Incoterms Revision:</strong> Incoterms® 2020 Standard</span>
          </div>
        </div>

        {/* Terms Content Body */}
        <div className="space-y-10 text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">1.</span> Scope & Binding Agreement
            </h2>
            <p>
              These Commercial Terms and Conditions (&quot;Terms&quot;) govern all commercial transactions, quotation requests, purchase orders, proforma invoices, sales contracts, and digital services provided by <strong>DUSON TRADING GROUP PT.</strong> (&quot;DUSON&quot;, &quot;Company&quot;, &quot;Seller&quot;), registered under the laws of the Republic of Indonesia.
            </p>
            <p>
              By issuing a purchase order, requesting a formal commodity quotation, or executing a Sales Agreement with DUSON, the institutional buyer (&quot;Buyer&quot;) agrees unconditionally to be bound by these Terms. Any conflicting or supplementary terms issued in Buyer purchase documentation are explicitly rejected unless executed in writing by an authorized Director of DUSON.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">2.</span> Commodity Contracting & Incoterms 2020 Rules
            </h2>
            <p>
              All international sales agreements executed by DUSON are structured under <strong>ICC Incoterms® 2020</strong> rules. Primary commercial delivery basis includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>FOB (Free On Board):</strong> Seller delivers goods across the ship&apos;s rail at designated Indonesian loading ports (Port Tanjung Priok, Jakarta / Port Tanjung Perak, Surabaya / Port Belawan, Medan). Risk transfers upon loading aboard the chartered vessel.</li>
              <li><strong>CIF (Cost, Insurance & Freight):</strong> Seller pays ocean freight and marine cargo insurance (Institute Cargo Clauses A 110% value) to designated main destination sea ports. Risk transfers upon loading at origin port.</li>
              <li><strong>CFR (Cost & Freight):</strong> Seller pays freight to destination sea port; Buyer maintains ocean marine cargo insurance coverage.</li>
              <li><strong>FCA (Free Carrier):</strong> Seller delivers customs-cleared goods to designated carrier facility at DUSON bonded warehouses.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">3.</span> Quality Assays, Laboratory Testing & Weight Verification
            </h2>
            <p>
              Product specifications (moisture content %, essential volatile oil %, size grading, mesh size, free fatty acid FFA limits, and aflatoxin thresholds) are explicitly agreed upon in individual contract specifications.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Pre-Shipment Inspection (PSI):</strong> Quality, condition, and container seal verification are conducted at port of loading by independent accredited surveyors (SGS / Sucofindo).</li>
              <li><strong>Certificate of Analysis (COA):</strong> The SGS / Sucofindo Inspection Certificate issued at loading port is final regarding moisture, weight, and assay parameters.</li>
              <li><strong>Weight Determination:</strong> Gross, tare, and net weights established by origin port weighbridge and certified weighmaster control sheets govern invoice finality. Tolerances within ±0.5% net weight are recognized under standard maritime bulk trade practice.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">4.</span> Payment Instruments & Financial Settlement
            </h2>
            <p>
              Unless otherwise agreed in a formal credit contract signed by DUSON executive management, standard trade payment terms require:
            </p>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3">
              <div className="font-bold text-[#1A0614] dark:text-[#F9F6F0]">Approved Banking Settlement Methods:</div>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Irrevocable Letter of Credit (L/C at Sight):</strong> Opened via prime international banks (top 50 tier-1 global rating), payable against presentation of clean ocean Bill of Lading, Phytosanitary Certificate, COO, and SGS COA.</li>
                <li><strong>Telegraphic Transfer (T/T):</strong> 30% advance deposit upon contract signing, 70% balance payable within 5 business days upon electronic presentation of scanned shipping documents & B/L.</li>
              </ul>
            </div>
            <p>
              All payments must be remitted in United States Dollars (USD) or Euros (EUR) to DUSON designated corporate banking accounts in Jakarta. Any bank intermediary charges are for the Buyer&apos;s account.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">5.</span> Sovereign Documentation, Phytosanitary & Customs Clearance
            </h2>
            <p>
              DUSON guarantees issuance of sovereign Indonesian export documentation, including Export Declaration (PEB), Phytosanitary Quarantine Certificate (Indonesian Agricultural Quarantine Agency), Certificate of Origin (Form D, Form E, Form AK, Form ICO, Form RCEP), and Phosphine Gas Fumigation Certificates.
            </p>
            <p>
              The Buyer remains exclusively responsible for obtaining destination import permits, paying destination customs duties/tariffs, and executing import clearance at discharge ports.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">6.</span> Force Majeure & Freight Disruptions
            </h2>
            <p>
              Neither party shall be held liable for failure or delay in performance caused by circumstances beyond reasonable control (&quot;Force Majeure&quot;), including natural disasters, volcanic eruptions, severe typhoons, acts of war, sovereign trade blockades, port closures, or sea lane embargoes.
            </p>
            <p>
              The affected party must notify the other in writing within seven (7) business days of occurrence with official certification from a recognized Chamber of Commerce or port authority.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">7.</span> Claims, Defect Notice & Arbitration
            </h2>
            <p>
              Any claims regarding physical quality, grade variance, or packaging damage at destination port must be submitted to DUSON in writing within fourteen (14) calendar days of vessel discharge. Claims must be accompanied by an independent survey report issued by SGS, Bureau Veritas, or Lloyd&apos;s agents.
            </p>
            <p>
              Any unresolved commercial disputes shall be finally settled under the Rules of Arbitration of the <strong>Singapore International Arbitration Centre (SIAC)</strong> or the <strong>Badan Arbitrase Nasional Indonesia (BANI)</strong>.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">8.</span> Corporate Governance & Legal Contact
            </h2>
            <div className="p-6 rounded-2xl bg-[#F8EDF4] dark:bg-[#15040F] border border-[#7f1b59]/20 space-y-2">
              <div className="font-bold text-[#1A0614] dark:text-[#F9F6F0]">DUSON TRADING GROUP PT. Legal & Commercial Department</div>
              <p>Jalan Ks. Tubun No. 30, RT.5/RW.2, Kota Bambu Selatan, Kec. Palmerah, Kota Jakarta Barat, DKI Jakarta 11420, Indonesia</p>
              <p>Direct Telephone: <a href="tel:+6282223000688" className="font-bold text-[#7f1b59] dark:text-[#B52F81] hover:underline">+62 8222 3000 688</a></p>
              <p>Official Commercial Email: <EmailProtected className="font-bold text-[#7f1b59] dark:text-[#B52F81]" /></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}