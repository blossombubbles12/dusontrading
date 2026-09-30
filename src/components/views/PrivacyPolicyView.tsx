"use client";

import Link from "next/link";
import { ChevronRight, ShieldCheck, Lock, Eye, FileText, Globe2, Server, UserCheck, PhoneCall } from "lucide-react";
import EmailProtected from "@/components/EmailProtected";

export default function PrivacyPolicyView() {
  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span>Legal</span>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span className="text-[#1A0614] dark:text-[#F9F6F0]">Privacy Policy</span>
        </div>

        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/15">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-4 h-4" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0]">
            Global Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-semibold">
            <span><strong>Effective Date:</strong> September 30, 2026</span>
            <span><strong>Compliance Standards:</strong> Indonesian PDP Law (UU 27/2022) & EU GDPR</span>
            <span><strong>Data Controller:</strong> DUSON TRADING GROUP PT.</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">1.</span> Overview & Data Controller Identity
            </h2>
            <p>
              This Privacy Policy details how <strong>DUSON TRADING GROUP PT.</strong> (&quot;DUSON&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, processes, protects, and stores personal and corporate data collected through our trade portals, quote forms, lot verification tools, and trade desk correspondence.
            </p>
            <p>
              As an international B2B agricultural commodity exporter, DUSON adheres strictly to the <strong>Indonesian Personal Data Protection Law (UU No. 27 Tahun 2022)</strong> and international frameworks, including the <strong>European Union General Data Protection Regulation (GDPR)</strong>.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">2.</span> Information We Collect
            </h2>
            <p>We collect information necessary to facilitate international commercial trading and customs compliance:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Corporate Identity & Contact Data:</strong> Company name, registered commercial address, tax identification numbers (NPWP/VAT), contact representative full name, business email address, telephone numbers, and destination discharge port details.</li>
              <li><strong>Commercial Transaction & Billing Data:</strong> Trade contract history, Letter of Credit (L/C) issuing bank details, proforma invoices, Certificate of Analysis (COA) history, and container shipping instructions.</li>
              <li><strong>Technical Data:</strong> IP addresses, browser user-agent strings, session preferences (light/dark mode choices), lot verification query logs, and security telemetry.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">3.</span> Purpose & Legal Basis of Data Processing
            </h2>
            <p>We process your data exclusively under legal processing grounds:</p>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3">
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Contractual Execution:</strong> Formulating commercial trade quotes, issuing proforma invoices, booking ocean container freight, and executing Sales Contracts.</li>
                <li><strong>Legal & Sovereign Compliance:</strong> Filing Indonesian export customs declarations (PEB), obtaining Phytosanitary Quarantine clearance, and verifying Know-Your-Customer (KYC/AML) protocols.</li>
                <li><strong>Legitimate Business Interests:</strong> Responding to buyer inquiries, managing container logistics dispatch, and optimizing trade desk response speeds.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">4.</span> Email Protection & Anti-Scraping Safeguards
            </h2>
            <p>
              DUSON employs active anti-scraping technology and obfuscated client-side rendering (<EmailProtected className="font-bold text-[#7f1b59] dark:text-[#B52F81]" />) across all digital channels to prevent automated web crawlers and harvesting bots from scraping corporate email addresses for unauthorized marketing or spam.
            </p>
            <p>
              We do not sell, rent, monetize, or trade corporate or personal contact databases to third-party marketing brokers under any circumstances.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">5.</span> Authorized Third-Party Disclosures & International Transfers
            </h2>
            <p>Data is shared strictly on a need-to-know basis with authorized trade partners:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Sovereign & Regulatory Bodies:</strong> Indonesian Customs (Directorate General of Customs), Indonesian Agricultural Quarantine Agency, and Ministry of Trade for COO issuance.</li>
              <li><strong>Maritime & Inspection Partners:</strong> Tier-1 ocean shipping lines (Maersk, MSC, ONE), inland drayage transport fleets, and accredited independent laboratories (SGS / Sucofindo).</li>
              <li><strong>Financial Institutions:</strong> Prime tier-1 international banks handling documentary Letters of Credit (L/C) and wire settlements.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">6.</span> Data Retention & Statutory Archiving
            </h2>
            <p>
              Commercial transaction records, phytosanitary clearance archives, and export declarations are retained for a minimum period of <strong>ten (10) years</strong> in accordance with Indonesian commercial law, tax regulations, and customs audit requirements.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0] flex items-center gap-2">
              <span className="text-[#7f1b59] dark:text-[#B52F81]">7.</span> Data Subject Rights & Contacting Our DPO
            </h2>
            <p>
              Under Indonesian PDP Law and GDPR, authorized commercial representatives have the right to request access to, rectification of, or erasure of their personal contact data held by DUSON.
            </p>
            <div className="p-6 rounded-2xl bg-[#F8EDF4] dark:bg-[#15040F] border border-[#7f1b59]/20 space-y-2">
              <div className="font-bold text-[#1A0614] dark:text-[#F9F6F0]">DUSON Data Protection Officer (DPO) Contact Desk:</div>
              <p>Jalan Ks. Tubun No. 30, RT.5/RW.2, Kota Bambu Selatan, Kec. Palmerah, Kota Jakarta Barat, DKI Jakarta 11420, Indonesia</p>
              <p>Telephone Hotline: <a href="tel:+6282223000688" className="font-bold text-[#7f1b59] dark:text-[#B52F81] hover:underline">+62 8222 3000 688</a></p>
              <p>Official DPO Email: <EmailProtected className="font-bold text-[#7f1b59] dark:text-[#B52F81]" /></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}