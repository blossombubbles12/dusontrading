"use client";

import Link from "next/link";
import Image from "next/image";
import { Anchor, ArrowRight, MapPin, Phone } from "lucide-react";

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  return (
    <footer className="bg-[#1A0614] dark:bg-[#0D0209] text-[#F9F6F0] pt-24 pb-12 border-t border-[#7f1b59]/20 dark:border-[#B52F81]/20 transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-16 border-b border-white/10 dark:border-[#B52F81]/15 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="DUSON"
                width={240}
                height={52}
                className="h-10 sm:h-11 w-auto object-contain brightness-0 invert"
              />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#F9F6F0] leading-tight">
              CONNECTING QUALITY <br />
              <span className="font-medium text-[#B52F81]">WITH GLOBAL MARKETS.</span>
            </h2>
          </div>

          <div>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#B52F81] text-[#0D0209] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#D94B9F] transition-all duration-300 shadow-xl"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 py-16 border-b border-white/10 dark:border-[#B52F81]/15 text-xs">
          
          {/* COMPANY */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B52F81] font-bold block">
              COMPANY
            </span>
            <ul className="space-y-2.5 text-[#DFC8D6]/80 font-light">
              <li>
                <Link href="/about" className="hover:text-[#B52F81] transition-colors">
                  About DUSON
                </Link>
              </li>
              <li>
                <Link href="/our-business" className="hover:text-[#B52F81] transition-colors">
                  Our Business
                </Link>
              </li>
              <li>
                <Link href="/our-approach" className="hover:text-[#B52F81] transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/global-reach" className="hover:text-[#B52F81] transition-colors">
                  Global Reach
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-[#B52F81] transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* COMMODITIES */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B52F81] font-bold block">
              COMMODITIES
            </span>
            <ul className="space-y-2.5 text-[#DFC8D6]/80 font-light">
              <li>
                <Link href="/commodities" className="hover:text-[#B52F81] transition-colors font-medium text-[#F9F6F0]">
                  All Commodities
                </Link>
              </li>
              <li>
                <Link href="/commodities/nutmeg" className="hover:text-[#B52F81] transition-colors">
                  Nutmeg
                </Link>
              </li>
              <li>
                <Link href="/commodities/spices" className="hover:text-[#B52F81] transition-colors">
                  Spices
                </Link>
              </li>
              <li>
                <Link href="/commodities/vegetables" className="hover:text-[#B52F81] transition-colors">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link href="/commodities/olive-oils" className="hover:text-[#B52F81] transition-colors">
                  Olive Oils
                </Link>
              </li>
            </ul>
          </div>

          {/* TRADING */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B52F81] font-bold block">
              TRADING
            </span>
            <ul className="space-y-2.5 text-[#DFC8D6]/80 font-light">
              <li>
                <Link href="/trading" className="hover:text-[#B52F81] transition-colors">
                  Trading
                </Link>
              </li>
              <li>
                <Link href="/trading/sourcing" className="hover:text-[#B52F81] transition-colors">
                  Sourcing
                </Link>
              </li>
              <li>
                <Link href="/trading/export" className="hover:text-[#B52F81] transition-colors">
                  Export
                </Link>
              </li>
              <li>
                <Link href="/trading/quality-standards" className="hover:text-[#B52F81] transition-colors">
                  Quality & Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* LOGISTICS */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B52F81] font-bold block">
              LOGISTICS
            </span>
            <ul className="space-y-2.5 text-[#DFC8D6]/80 font-light">
              <li>
                <Link href="/logistics" className="hover:text-[#B52F81] transition-colors">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/logistics/shipping" className="hover:text-[#B52F81] transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/logistics/transportation" className="hover:text-[#B52F81] transition-colors">
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="/logistics/supply-chain" className="hover:text-[#B52F81] transition-colors">
                  Supply Chain
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B52F81] font-bold block">
              RESOURCES
            </span>
            <ul className="space-y-2.5 text-[#DFC8D6]/80 font-light">
              <li>
                <Link href="/insights" className="hover:text-[#B52F81] transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/insights/news" className="hover:text-[#B52F81] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#B52F81] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-[#B52F81] transition-colors">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Contact Information */}
        <div className="py-12 border-b border-white/10 dark:border-[#B52F81]/15 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B52F81] font-bold block">
              CORPORATE HEADQUARTERS
            </span>
            <h4 className="font-serif text-xl font-medium text-[#F9F6F0]">
              DUSON TRADING GROUP PT.
            </h4>
            <div className="flex items-start gap-3 text-xs text-[#DFC8D6]/80 font-light leading-relaxed">
              <MapPin className="w-4 h-4 text-[#B52F81] shrink-0 mt-0.5" />
              <span>
                Jalan Ks. Tubun No. 30, RT.5/RW.2, <br />
                Kota Bambu Selatan, Palmerah, <br />
                Jakarta Barat, DKI Jakarta 11420, <br />
                Indonesia
              </span>
            </div>
          </div>

          <div className="space-y-3 md:text-right">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B52F81] font-bold block">
              DIRECT TELEPHONE INQUIRIES
            </span>
            <div className="flex items-center gap-3 text-sm text-[#F9F6F0] md:justify-end">
              <Phone className="w-4 h-4 text-[#B52F81]" />
              <span className="font-mono font-semibold">+62 815-6523-505</span>
            </div>
            <p className="text-[11px] text-[#DFC8D6]/60 font-light">
              International Trade & Commercial Logistics Desk · Jakarta (UTC+7)
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#DFC8D6]/60 font-light">
          <p>© 2026 DUSON TRADING GROUP PT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#B52F81] transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms-and-conditions" className="hover:text-[#B52F81] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
