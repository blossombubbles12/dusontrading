"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Anchor,
  Sun,
  Moon,
  Globe2,
  Sparkles,
  ShieldCheck,
  Ship,
  Plus,
  Minus,
} from "lucide-react";
import { useTheme } from "./ThemeContext";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  let hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = (menuName: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const toggleMobileCategory = (cat: string) => {
    setExpandedMobileCategory(expandedMobileCategory === cat ? null : cat);
  };

  return (
    <div ref={navRef} className="sticky top-0 left-0 right-0 z-50">
      <header
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-[#15040F]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#7f1b59]/20 dark:border-[#B52F81]/20"
            : "bg-white/90 dark:bg-[#0D0209]/90 backdrop-blur-sm py-4 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/15"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="DUSON"
              width={280}
              height={64}
              priority
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Company Mega Menu Trigger */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
                className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-bold transition-colors ${
                  activeMenu === "company" || pathname.startsWith("/about") || pathname.startsWith("/our-") || pathname.startsWith("/sustainability") || pathname.startsWith("/global-reach")
                    ? "text-[#7f1b59] dark:text-[#B52F81]"
                    : "text-[#2B1423] dark:text-[#DFC8D6] hover:text-[#7f1b59] dark:hover:text-[#B52F81]"
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === "company" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Commodities Mega Menu Trigger */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("commodities")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === "commodities" ? null : "commodities")}
                className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-bold transition-colors ${
                  activeMenu === "commodities" || pathname.startsWith("/commodities")
                    ? "text-[#7f1b59] dark:text-[#B52F81]"
                    : "text-[#2B1423] dark:text-[#DFC8D6] hover:text-[#7f1b59] dark:hover:text-[#B52F81]"
                }`}
              >
                <span>Commodities</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === "commodities" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Trading Mega Menu Trigger */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("trading")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === "trading" ? null : "trading")}
                className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-bold transition-colors ${
                  activeMenu === "trading" || pathname.startsWith("/trading")
                    ? "text-[#7f1b59] dark:text-[#B52F81]"
                    : "text-[#2B1423] dark:text-[#DFC8D6] hover:text-[#7f1b59] dark:hover:text-[#B52F81]"
                }`}
              >
                <span>Trading</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === "trading" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Logistics Mega Menu Trigger */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("logistics")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === "logistics" ? null : "logistics")}
                className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-bold transition-colors ${
                  activeMenu === "logistics" || pathname.startsWith("/logistics")
                    ? "text-[#7f1b59] dark:text-[#B52F81]"
                    : "text-[#2B1423] dark:text-[#DFC8D6] hover:text-[#7f1b59] dark:hover:text-[#B52F81]"
                }`}
              >
                <span>Logistics</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === "logistics" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Insights Dropdown Trigger */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("insights")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveMenu(activeMenu === "insights" ? null : "insights")}
                className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-bold transition-colors ${
                  activeMenu === "insights" || pathname.startsWith("/insights")
                    ? "text-[#7f1b59] dark:text-[#B52F81]"
                    : "text-[#2B1423] dark:text-[#DFC8D6] hover:text-[#7f1b59] dark:hover:text-[#B52F81]"
                }`}
              >
                <span>Insights</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === "insights" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Contact Link */}
            <Link
              href="/contact"
              className={`text-xs uppercase tracking-[0.18em] font-bold transition-colors ${
                pathname === "/contact"
                  ? "text-[#7f1b59] dark:text-[#B52F81]"
                  : "text-[#2B1423] dark:text-[#DFC8D6] hover:text-[#7f1b59] dark:hover:text-[#B52F81]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[#7f1b59]/30 dark:border-[#B52F81]/30 bg-[#F8EDF4] dark:bg-[#220819] text-[#1A0614] dark:text-[#F9F6F0] hover:text-[#7f1b59] dark:hover:text-[#B52F81] transition-colors"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#B52F81]" />}
            </button>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-[#F9F6F0] dark:text-[#0D0209] text-xs uppercase tracking-widest font-bold hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-md group"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[#7f1b59]/30 dark:border-[#B52F81]/30 bg-[#F8EDF4] dark:bg-[#220819] text-[#1A0614] dark:text-[#F9F6F0]"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#B52F81]" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A0614] dark:text-[#F9F6F0] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* DESKTOP MEGA MENUS & DROPDOWNS OVERLAY */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onMouseEnter={() => {
              if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
            }}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full left-0 right-0 w-full bg-white dark:bg-[#15040F] border-b border-[#7f1b59]/25 dark:border-[#B52F81]/25 shadow-2xl z-40 hidden lg:block"
          >
            <div className="max-w-7xl mx-auto px-8 py-10">
              
              {/* 1. COMPANY MEGA MENU */}
              {activeMenu === "company" && (
                <div className="grid grid-cols-12 gap-10 items-start">
                  <div className="col-span-4 space-y-4 pr-6 border-r border-[#7f1b59]/15 dark:border-[#B52F81]/15">
                    <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#7f1b59] dark:text-[#B52F81] font-bold">
                      <Globe2 className="w-3.5 h-3.5" />
                      <span>Corporate Group</span>
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">
                      DUSON Trading Group PT.
                    </h3>
                    <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal dark:font-light leading-relaxed">
                      Discover DUSON Trading Group, our approach to international commerce, and the principles behind our business.
                    </p>
                  </div>

                  <div className="col-span-5 space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81] font-bold block mb-2">
                      Company Overview
                    </span>
                    {[
                      { title: "About DUSON", href: "/about", desc: "Our corporate origin, mission, and leadership." },
                      { title: "Our Business", href: "/our-business", desc: "Core commodity trade and global operational scope." },
                      { title: "Our Approach", href: "/our-approach", desc: "Direct origin sourcing and quality standards." },
                      { title: "Global Reach", href: "/global-reach", desc: "Jakarta maritime gateway & shipping corridors." },
                      { title: "Sustainability", href: "/sustainability", desc: "Ethical agro-sourcing & community partnerships." },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="group flex flex-col p-2.5 rounded-xl hover:bg-[#F8EDF4] dark:hover:bg-[#220819] transition-colors"
                      >
                        <span className="font-serif text-base text-[#1A0614] dark:text-[#F9F6F0] group-hover:text-[#7f1b59] dark:group-hover:text-[#B52F81] font-medium flex items-center justify-between">
                          {item.title}
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#7f1b59] dark:text-[#B52F81]" />
                        </span>
                        <span className="text-[11px] text-[#5C3D52] dark:text-[#DFC8D6]/60 font-light mt-0.5">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="col-span-3">
                    <div className="relative h-52 w-full rounded-2xl overflow-hidden border border-[#7f1b59]/20 dark:border-[#B52F81]/20 shadow-md group">
                      <Image
                        src="/images/hero-bg.jpg"
                        alt="DUSON Global Trade"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614] via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4 text-[#F9F6F0]">
                        <span className="text-[10px] uppercase tracking-widest text-[#B52F81] font-bold block">
                          JAKARTA HEADQUARTERS
                        </span>
                        <p className="font-serif text-sm font-medium">Global Supply Architecture</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. COMMODITIES MEGA MENU */}
              {activeMenu === "commodities" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#7f1b59]/15 dark:border-[#B52F81]/15 pb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81] font-bold block">
                        Commercial Portfolio
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">
                        Food Commodities
                      </h3>
                    </div>
                    <Link
                      href="/commodities"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#7f1b59] dark:text-[#B52F81] hover:underline"
                    >
                      <span>All Commodities</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-4 gap-6">
                    {[
                      {
                        title: "Nutmeg & Mace",
                        href: "/commodities/nutmeg",
                        image: "/images/nutmeg-spices.jpg",
                        origin: "Indonesian Origin",
                        desc: "Whole Grade-A nutmeg seeds & premium mace flowers.",
                      },
                      {
                        title: "Aromatic Spices",
                        href: "/commodities/spices",
                        image: "/images/nutmeg-spices.jpg",
                        origin: "Sulawesi & Maluku",
                        desc: "Cloves, black & white pepper, and cassia cinnamon.",
                      },
                      {
                        title: "Export Produce & Vegetables",
                        href: "/commodities/vegetables",
                        image: "/images/vegetables.jpg",
                        origin: "Highland Harvest",
                        desc: "Class 1 fresh vegetables with cold-chain shipping.",
                      },
                      {
                        title: "Virgin & Extra Virgin Olive Oils",
                        href: "/commodities/olive-oils",
                        image: "/images/olive-oil.jpg",
                        origin: "Commercial Bulk",
                        desc: "Cold-pressed extra virgin oils for industrial B2B trade.",
                      },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="group p-3 rounded-2xl bg-[#F8EDF4] dark:bg-[#220819]/70 border border-[#7f1b59]/20 dark:border-[#B52F81]/20 hover:border-[#7f1b59] dark:hover:border-[#B52F81] transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="relative h-36 w-full rounded-xl overflow-hidden bg-[#10030B]">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#1A0614]/80 text-[9px] uppercase tracking-wider text-[#B52F81] font-medium">
                              {item.origin}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-serif text-lg font-medium text-[#1A0614] dark:text-[#F9F6F0] group-hover:text-[#7f1b59] dark:group-hover:text-[#B52F81]">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-[#5C3D52] dark:text-[#DFC8D6]/70 font-light mt-1">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. TRADING MEGA MENU */}
              {activeMenu === "trading" && (
                <div className="grid grid-cols-12 gap-10 items-start">
                  <div className="col-span-5 space-y-4 pr-6 border-r border-[#7f1b59]/15 dark:border-[#B52F81]/15">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81] font-bold block">
                      Commercial Activities
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">
                      Trading & Export Operations
                    </h3>
                    <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal dark:font-light leading-relaxed">
                      This section covers DUSON's international trading execution, direct origin sourcing, quality grading, and export documentation protocols.
                    </p>
                    <div className="p-4 rounded-xl bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 text-xs text-[#1A0614] dark:text-[#F9F6F0]">
                      <span className="font-bold text-[#7f1b59] dark:text-[#B52F81] block mb-1">Contract Execution</span>
                      Support for FOB, CIF, & CFR international trade agreements.
                    </div>
                  </div>

                  <div className="col-span-7 grid grid-cols-2 gap-4">
                    {[
                      { title: "Trading", href: "/trading", desc: "High-volume commodity B2B trading desk." },
                      { title: "Sourcing", href: "/trading/sourcing", desc: "Direct partnership with Indonesian agro-producers." },
                      { title: "Export", href: "/trading/export", desc: "Customs documentation & port clearance." },
                      { title: "Quality & Standards", href: "/trading/quality-standards", desc: "Lab testing, moisture control, & phytosanitary specs." },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="group p-4 rounded-xl bg-[#F8EDF4] dark:bg-[#220819]/50 border border-[#7f1b59]/15 dark:border-[#B52F81]/15 hover:border-[#7f1b59] dark:hover:border-[#B52F81] transition-colors"
                      >
                        <h4 className="font-serif text-lg font-medium text-[#1A0614] dark:text-[#F9F6F0] group-hover:text-[#7f1b59] dark:group-hover:text-[#B52F81]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-light mt-1">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. LOGISTICS MEGA MENU */}
              {activeMenu === "logistics" && (
                <div className="grid grid-cols-12 gap-10 items-start">
                  <div className="col-span-5 space-y-4 pr-6 border-r border-[#7f1b59]/15 dark:border-[#B52F81]/15">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81] font-bold block">
                      Supply Architecture
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">
                      Global Logistics & Shipping
                    </h3>
                    <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal dark:font-light leading-relaxed">
                      Connecting food commodities from source origin in Indonesia to global destination ports with integrated maritime shipping and cold-chain transport.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[#7f1b59] dark:text-[#B52F81] font-bold">
                      <Ship className="w-4 h-4" />
                      <span>Port Tanjung Priok Gateway · Jakarta</span>
                    </div>
                  </div>

                  <div className="col-span-7 grid grid-cols-2 gap-4">
                    {[
                      { title: "Logistics Overview", href: "/logistics", desc: "End-to-end maritime and overland commodity freight." },
                      { title: "Shipping", href: "/logistics/shipping", desc: "Container vessel bookings & ocean trade lanes." },
                      { title: "Transportation", href: "/logistics/transportation", desc: "Highland agro harvest transport & reefer trucking." },
                      { title: "Supply Chain", href: "/logistics/supply-chain", desc: "Traceable origin-to-port supply architecture." },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="group p-4 rounded-xl bg-[#F8EDF4] dark:bg-[#220819]/50 border border-[#7f1b59]/15 dark:border-[#B52F81]/15 hover:border-[#7f1b59] dark:hover:border-[#B52F81] transition-colors"
                      >
                        <h4 className="font-serif text-lg font-medium text-[#1A0614] dark:text-[#F9F6F0] group-hover:text-[#7f1b59] dark:group-hover:text-[#B52F81]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 font-light mt-1">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. INSIGHTS DROPDOWN */}
              {activeMenu === "insights" && (
                <div className="max-w-md space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81] font-bold block mb-2">
                    Market Intelligence
                  </span>
                  {[
                    { title: "Insights Overview", href: "/insights", desc: "Market updates and commodity analysis." },
                    { title: "Market Insights", href: "/insights/market-insights", desc: "Global supply & demand trends." },
                    { title: "Trade Insights", href: "/insights/trade-insights", desc: "Export regulations & shipping updates." },
                    { title: "Commodity Insights", href: "/insights/commodity-insights", desc: "Harvest forecasts for nutmeg & spices." },
                    { title: "News", href: "/insights/news", desc: "Corporate press releases & trade desk news." },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-[#F8EDF4] dark:hover:bg-[#220819] transition-colors"
                    >
                      <div>
                        <span className="font-serif text-base text-[#1A0614] dark:text-[#F9F6F0] group-hover:text-[#7f1b59] dark:group-hover:text-[#B52F81] font-medium block">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-[#5C3D52] dark:text-[#DFC8D6]/60 font-light">
                          {item.desc}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE FULL-SCREEN ACCORDION NAVIGATION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] lg:hidden pt-24 px-6 pb-12 overflow-y-auto flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[#7f1b59] dark:text-[#B52F81] border-b border-[#7f1b59]/20 pb-4 font-bold">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4" />
                  <span>JAKARTA · INDONESIA</span>
                </div>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#7f1b59]/30 dark:border-[#B52F81]/30 bg-[#F8EDF4] dark:bg-[#220819] text-[#1A0614] dark:text-[#F9F6F0] text-[10px] uppercase font-bold tracking-wider"
                >
                  {theme === "light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5 text-[#B52F81]" />}
                  <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                </button>
              </div>

              {/* Accordion Categories */}
              <div className="space-y-4">
                
                {/* 1. Company Accordion */}
                <div className="border-b border-[#7f1b59]/15 dark:border-[#B52F81]/15 pb-3">
                  <button
                    onClick={() => toggleMobileCategory("company")}
                    className="w-full flex items-center justify-between font-serif text-2xl font-medium text-[#1A0614] dark:text-[#F9F6F0]"
                  >
                    <span>Company</span>
                    {expandedMobileCategory === "company" ? <Minus className="w-5 h-5 text-[#7f1b59]" /> : <Plus className="w-5 h-5 text-[#7f1b59]" />}
                  </button>
                  {expandedMobileCategory === "company" && (
                    <div className="mt-3 pl-4 space-y-2.5">
                      <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">About DUSON</Link>
                      <Link href="/our-business" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Our Business</Link>
                      <Link href="/our-approach" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Our Approach</Link>
                      <Link href="/global-reach" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Global Reach</Link>
                      <Link href="/sustainability" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Sustainability</Link>
                    </div>
                  )}
                </div>

                {/* 2. Commodities Accordion */}
                <div className="border-b border-[#7f1b59]/15 dark:border-[#B52F81]/15 pb-3">
                  <button
                    onClick={() => toggleMobileCategory("commodities")}
                    className="w-full flex items-center justify-between font-serif text-2xl font-medium text-[#1A0614] dark:text-[#F9F6F0]"
                  >
                    <span>Commodities</span>
                    {expandedMobileCategory === "commodities" ? <Minus className="w-5 h-5 text-[#7f1b59]" /> : <Plus className="w-5 h-5 text-[#7f1b59]" />}
                  </button>
                  {expandedMobileCategory === "commodities" && (
                    <div className="mt-3 pl-4 space-y-2.5">
                      <Link href="/commodities" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-[#7f1b59]">All Commodities</Link>
                      <Link href="/commodities/nutmeg" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Nutmeg & Mace</Link>
                      <Link href="/commodities/spices" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Aromatic Spices</Link>
                      <Link href="/commodities/vegetables" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Export Produce & Vegetables</Link>
                      <Link href="/commodities/olive-oils" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Olive Oils</Link>
                    </div>
                  )}
                </div>

                {/* 3. Trading Accordion */}
                <div className="border-b border-[#7f1b59]/15 dark:border-[#B52F81]/15 pb-3">
                  <button
                    onClick={() => toggleMobileCategory("trading")}
                    className="w-full flex items-center justify-between font-serif text-2xl font-medium text-[#1A0614] dark:text-[#F9F6F0]"
                  >
                    <span>Trading</span>
                    {expandedMobileCategory === "trading" ? <Minus className="w-5 h-5 text-[#7f1b59]" /> : <Plus className="w-5 h-5 text-[#7f1b59]" />}
                  </button>
                  {expandedMobileCategory === "trading" && (
                    <div className="mt-3 pl-4 space-y-2.5">
                      <Link href="/trading" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Trading Overview</Link>
                      <Link href="/trading/sourcing" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Sourcing</Link>
                      <Link href="/trading/export" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Export</Link>
                      <Link href="/trading/quality-standards" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Quality & Standards</Link>
                    </div>
                  )}
                </div>

                {/* 4. Logistics Accordion */}
                <div className="border-b border-[#7f1b59]/15 dark:border-[#B52F81]/15 pb-3">
                  <button
                    onClick={() => toggleMobileCategory("logistics")}
                    className="w-full flex items-center justify-between font-serif text-2xl font-medium text-[#1A0614] dark:text-[#F9F6F0]"
                  >
                    <span>Logistics</span>
                    {expandedMobileCategory === "logistics" ? <Minus className="w-5 h-5 text-[#7f1b59]" /> : <Plus className="w-5 h-5 text-[#7f1b59]" />}
                  </button>
                  {expandedMobileCategory === "logistics" && (
                    <div className="mt-3 pl-4 space-y-2.5">
                      <Link href="/logistics" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Logistics Overview</Link>
                      <Link href="/logistics/shipping" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Shipping</Link>
                      <Link href="/logistics/transportation" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Transportation</Link>
                      <Link href="/logistics/supply-chain" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Supply Chain</Link>
                    </div>
                  )}
                </div>

                {/* 5. Insights Accordion */}
                <div className="border-b border-[#7f1b59]/15 dark:border-[#B52F81]/15 pb-3">
                  <button
                    onClick={() => toggleMobileCategory("insights")}
                    className="w-full flex items-center justify-between font-serif text-2xl font-medium text-[#1A0614] dark:text-[#F9F6F0]"
                  >
                    <span>Insights</span>
                    {expandedMobileCategory === "insights" ? <Minus className="w-5 h-5 text-[#7f1b59]" /> : <Plus className="w-5 h-5 text-[#7f1b59]" />}
                  </button>
                  {expandedMobileCategory === "insights" && (
                    <div className="mt-3 pl-4 space-y-2.5">
                      <Link href="/insights" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Insights Overview</Link>
                      <Link href="/insights/market-insights" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Market Insights</Link>
                      <Link href="/insights/trade-insights" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Trade Insights</Link>
                      <Link href="/insights/commodity-insights" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">Commodity Insights</Link>
                      <Link href="/insights/news" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C3D52] dark:text-[#DFC8D6]">News</Link>
                    </div>
                  )}
                </div>

                {/* Contact Direct */}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-serif text-2xl font-medium text-[#1A0614] dark:text-[#F9F6F0]"
                  >
                    Contact
                  </Link>
                </div>

              </div>

            </div>

            {/* Mobile Bottom CTA */}
            <div className="pt-8 border-t border-[#7f1b59]/20 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-[#F9F6F0] dark:text-[#0D0209] text-xs uppercase tracking-widest font-bold shadow-xl"
              >
                <span>Request a Quote →</span>
              </button>
              <p className="text-center text-[10px] uppercase tracking-widest text-[#5C3D52]/70 dark:text-[#DFC8D6]/50 font-medium">
                DUSON TRADING GROUP PT. © 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
