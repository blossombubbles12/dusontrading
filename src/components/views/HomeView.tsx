"use client";

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CommoditiesShowcase from "@/components/CommoditiesShowcase";
import TradeLogistics from "@/components/TradeLogistics";
import GlobalReach from "@/components/GlobalReach";
import ContactSection from "@/components/ContactSection";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function HomeView() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      {/* Hero Section Slider Carousel */}
      <Hero onOpenTradeModal={(commodity) => openQuoteModal(commodity)} />

      {/* About & Institutional Overview */}
      <AboutSection />

      {/* Food Commodities Showcase (Nutmeg, Spices, Vegetables, Olive Oils) */}
      <CommoditiesShowcase onOpenTradeModal={(commodity) => openQuoteModal(commodity)} />

      {/* Logistics & International Trade Architecture */}
      <TradeLogistics onOpenTradeModal={() => openQuoteModal()} />

      {/* Global Reach & Jakarta Gateway */}
      <GlobalReach onOpenTradeModal={() => openQuoteModal()} />

      {/* Contact & Procurement Inquiry Desk */}
      <ContactSection />
    </>
  );
}