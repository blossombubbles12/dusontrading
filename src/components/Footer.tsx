"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import EmailProtected from "./EmailProtected";

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  return (
    <footer className="bg-[#1A0614] dark:bg-[#0D0209] text-[#F9F6F0] pt-20 pb-12 border-t border-[#7f1b59]/30 dark:border-[#B52F81]/30 transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-16 border-b border-white/15 dark:border-[#B52F81]/20 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="DUSON"
                width={240}
                height={52}
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
              />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F9F6F0] leading-tight">
              CONNECTING QUALITY <br />
              <span className="font-extrabold text-[#F294CE]">WITH GLOBAL MARKETS.</span>
            </h2>
          </div>

          <div>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#7f1b59] hover:bg-[#9c2870] text-white text-xs uppercase tracking-[0.2em] font-extrabold transition-all duration-300 shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 py-16 border-b border-white/15 dark:border-[#B52F81]/20">
          
          {/* COMPANY */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#F294CE] font-extrabold block">
              COMPANY
            </span>
            <ul className="space-y-3 font-semibold text-sm sm:text-base">
              <li>
                <Link href="/about" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  About DUSON
                </Link>
              </li>
              <li>
                <Link href="/our-business" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Our Business
                </Link>
              </li>
              <li>
                <Link href="/our-approach" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/global-reach" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Global Reach
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* COMMODITIES */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#F294CE] font-extrabold block">
              COMMODITIES
            </span>
            <ul className="space-y-3 font-semibold text-sm sm:text-base">
              <li>
                <Link href="/commodities" className="text-[#F294CE] hover:underline transition-colors font-extrabold">
                  All Commodities
                </Link>
              </li>
              <li>
                <Link href="/commodities/nutmeg" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Nutmeg & Mace
                </Link>
              </li>
              <li>
                <Link href="/commodities/spices" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Aromatic Spices
                </Link>
              </li>
              <li>
                <Link href="/commodities/vegetables" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Fresh Vegetables
                </Link>
              </li>
              <li>
                <Link href="/commodities/olive-oils" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Virgin Olive Oils
                </Link>
              </li>
            </ul>
          </div>

          {/* TRADING */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#F294CE] font-extrabold block">
              TRADING
            </span>
            <ul className="space-y-3 font-semibold text-sm sm:text-base">
              <li>
                <Link href="/trading" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Trading Overview
                </Link>
              </li>
              <li>
                <Link href="/trading/sourcing" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Direct Sourcing
                </Link>
              </li>
              <li>
                <Link href="/trading/export" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Export Operations
                </Link>
              </li>
              <li>
                <Link href="/trading/quality-standards" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Quality & Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* LOGISTICS */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#F294CE] font-extrabold block">
              LOGISTICS
            </span>
            <ul className="space-y-3 font-semibold text-sm sm:text-base">
              <li>
                <Link href="/logistics" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Logistics Desk
                </Link>
              </li>
              <li>
                <Link href="/logistics/shipping" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Ocean Shipping
                </Link>
              </li>
              <li>
                <Link href="/logistics/transportation" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="/logistics/supply-chain" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Supply Chain
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#F294CE] font-extrabold block">
              RESOURCES
            </span>
            <ul className="space-y-3 font-semibold text-sm sm:text-base">
              <li>
                <Link href="/insights" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link href="/insights/news" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  News & Press
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Trade FAQ
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-[#F9F6F0] hover:text-[#F294CE] transition-colors">
                  Catalog Downloads
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Contact Information */}
        <div className="py-12 border-b border-white/15 dark:border-[#B52F81]/20 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#F294CE] font-extrabold block">
              CORPORATE HEADQUARTERS
            </span>
            <h4 className="font-serif text-xl font-bold text-[#F9F6F0]">
              DUSON TRADING GROUP PT.
            </h4>
            <div className="flex items-start gap-3 text-sm text-[#F9F6F0]/90 font-medium leading-relaxed">
              <MapPin className="w-4 h-4 text-[#F294CE] shrink-0 mt-1" />
              <span>
                Jalan Ks. Tubun No. 30, RT.5/RW.2, Kota Bambu Selatan, Palmerah, <br />
                RT.5, RT.8/RW.2, Kota Bambu Sel., Kec. Palmerah, <br />
                Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11420, <br />
                Indonesia
              </span>
            </div>
          </div>

          <div className="space-y-3 md:text-right">
            <span className="text-xs uppercase tracking-[0.25em] text-[#F294CE] font-extrabold block">
              DIRECT INQUIRIES & CONTACT
            </span>
            <div className="flex items-center gap-3 text-base text-[#F9F6F0] md:justify-end font-bold">
              <Phone className="w-4 h-4 text-[#F294CE]" />
              <a href="tel:+6282223000688" className="font-mono hover:text-[#F294CE] transition-colors">+62 8222 3000 688</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#F9F6F0] md:justify-end font-semibold">
              <Mail className="w-4 h-4 text-[#F294CE]" />
              <EmailProtected user="contact" domain="dusontrading.com" className="text-[#F9F6F0] hover:text-[#F294CE]" />
            </div>
            <p className="text-xs text-[#DFC8D6]/80 font-medium pt-1">
              International Trade & Commercial Logistics Desk · Jakarta (UTC+7)
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#DFC8D6]">
          <p>© 2026 DUSON TRADING GROUP PT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#F294CE] transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms-and-conditions" className="hover:text-[#F294CE] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
