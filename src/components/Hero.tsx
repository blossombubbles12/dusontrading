"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Pause,
  Play,
  CheckCircle2,
} from "lucide-react";

interface HeroProps {
  onOpenTradeModal: (commodityName?: string) => void;
}

export default function Hero({ onOpenTradeModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 0,
      badge: "Jakarta, Indonesia · Global Trade Desk",
      headlinePrefix: "GLOBAL COMMERCE,",
      headlineHighlight: "ROOTED IN QUALITY.",
      subtext:
        "Connecting verified food commodities with international markets through trusted origin sourcing, certified grading, and bonded export logistics.",
      image: "/images/hero-bg.jpg",
      primaryCta: "Explore Commodities",
      primaryHref: "/commodities",
      commodityName: "",
      highlights: ["ISO 22000 Certified", "Direct Origin Sourcing", "Global Ocean Freight"],
    },
    {
      id: 1,
      badge: "Indonesian Spice Origin · Banda & Maluku",
      headlinePrefix: "INDONESIAN NUTMEG &",
      headlineHighlight: "AROMATIC SPICES.",
      subtext:
        "Grade-A whole nutmeg (ABCD & Sound), mace flowers, Lampung black pepper, and premium export spices for international food processors.",
      image: "/images/nutmeg-spices.jpg",
      primaryCta: "Explore Nutmeg & Spices",
      primaryHref: "/commodities/nutmeg",
      commodityName: "Indonesian Nutmeg & Mace",
      highlights: ["Aflatoxin Inspected", "Volatile Oil Verified", "Bulk Jute & Vacuum Packs"],
    },
    {
      id: 2,
      badge: "Mediterranean Harvest · Commercial Bulk Supply",
      headlinePrefix: "PURE VIRGIN &",
      headlineHighlight: "EXTRA VIRGIN OLIVE OILS.",
      subtext:
        "Cold-pressed virgin and extra virgin olive oils supplied in 21,000L flexitanks, 1,000L IBC totes, and drums for industrial food manufacturers.",
      image: "/images/olive-oil.jpg",
      primaryCta: "Explore Olive Oils",
      primaryHref: "/commodities/olive-oils",
      commodityName: "Pure Virgin & Extra Virgin Olive Oils",
      highlights: ["Acidity < 0.8%", "Flexitank & IBC Totes", "Full Batch Traceability"],
    },
    {
      id: 3,
      badge: "Highland Harvest · Cold-Chain Agro Logistics",
      headlinePrefix: "EXPORT-GRADE",
      headlineHighlight: "AGRICULTURAL PRODUCE.",
      subtext:
        "Sourced directly from mineral-rich highland farms with rapid post-harvest grading, vacuum sanitization, and continuous reefer container dispatch.",
      image: "/images/vegetables.jpg",
      primaryCta: "Explore Fresh Produce",
      primaryHref: "/commodities/vegetables",
      commodityName: "Export Produce & Fresh Vegetables",
      highlights: ["Reefer Temperature Controlled", "Strict Size & Grade Sorting", "Rapid Transit"],
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const slide = slides[currentSlide];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#0D0209] transition-colors duration-500"
    >
      {/* Background Image Carousel with Rich Contrast Gradients */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 z-0 select-none"
        >
          <Image
            src={slide.image}
            alt={slide.badge}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Rich Directional Gradient: Deep readable contrast on left, natural vibrant photo colors visible on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0209]/95 via-[#0D0209]/80 to-transparent sm:via-[#0D0209]/70 lg:via-[#0D0209]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0209] via-transparent to-[#0D0209]/40" />
        </motion.div>
      </AnimatePresence>

      {/* Main Hero Slider Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl space-y-6">
          
          {/* Category / Origin Pill Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${slide.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-sm"
            >
              <Globe2 className="w-3.5 h-3.5 text-[#E662B0]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-white">
                {slide.badge}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Clean, Non-Italic, High-Impact Title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`headline-${slide.id}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5 }}
              className="space-y-1"
            >
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {slide.headlinePrefix} <br />
                <span className="text-[#F294CE] drop-shadow-sm font-extrabold">
                  {slide.headlineHighlight}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Clear, High-Contrast Subtext */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtext-${slide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-sm sm:text-base lg:text-lg text-white/90 font-normal max-w-2xl leading-relaxed"
            >
              {slide.subtext}
            </motion.p>
          </AnimatePresence>

          {/* Key Feature Highlights */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`highlights-${slide.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-xs sm:text-sm text-white/80"
            >
              {slide.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F294CE] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-3">
            <Link
              href={slide.primaryHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#7f1b59] hover:bg-[#9c2870] text-white text-xs uppercase tracking-wider font-bold transition-all duration-200 shadow-lg shadow-[#7f1b59]/30 transform hover:-translate-y-0.5"
            >
              <span>{slide.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => onOpenTradeModal(slide.commodityName)}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-bold backdrop-blur-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Request a Quote
            </button>
          </div>

        </div>

        {/* Bottom Controls Bar: Progress, Tabs, & Navigation */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Slide Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {slides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(index)}
                className={`text-left px-3 py-1.5 rounded-md transition-all duration-200 text-xs font-semibold ${
                  currentSlide === index
                    ? "bg-white/20 text-white border border-white/30"
                    : "bg-transparent text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>0{index + 1}</span>{" "}
                <span className="hidden md:inline font-normal text-white/80 ml-1">
                  {index === 0 ? "Global Trade" : index === 1 ? "Nutmeg & Spices" : index === 2 ? "Olive Oils" : "Fresh Produce"}
                </span>
              </button>
            ))}
          </div>

          {/* Arrows & Pause Button */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-lg border border-white/20 bg-white/10 text-white hover:bg-[#7f1b59] hover:border-[#7f1b59] transition-all focus:outline-none"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              className="p-2.5 rounded-lg border border-white/20 bg-white/10 text-white hover:bg-[#7f1b59] hover:border-[#7f1b59] transition-all focus:outline-none"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-2.5 py-1.5 rounded-md text-[11px] uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/10 flex items-center gap-1.5 transition-colors"
              title={isPaused ? "Play Autoplay" : "Pause Autoplay"}
            >
              {isPaused ? <Play className="w-3 h-3 text-[#F294CE]" /> : <Pause className="w-3 h-3 text-[#F294CE]" />}
              <span>{isPaused ? "Play" : "Pause"}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
