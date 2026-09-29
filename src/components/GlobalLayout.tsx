"use client";

import { useState, createContext, useContext } from "react";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TradeInquiryModal from "./TradeInquiryModal";

interface QuoteModalContextType {
  openQuoteModal: (commodity?: string) => void;
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  openQuoteModal: () => {},
});

export const useQuoteModal = () => useContext(QuoteModalContext);

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCommodity, setSelectedCommodity] = useState("");

  const openQuoteModal = (commodity?: string) => {
    setSelectedCommodity(commodity || "");
    setQuoteModalOpen(true);
  };

  return (
    <ThemeProvider>
      <QuoteModalContext.Provider value={{ openQuoteModal }}>
        <div className="min-h-screen flex flex-col bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] selection:bg-[#7f1b59] selection:text-[#FFFFFF] dark:selection:bg-[#B52F81] dark:selection:text-[#0D0209] transition-colors duration-500">
          <Navbar onOpenQuoteModal={() => openQuoteModal()} />
          <main className="flex-1">{children}</main>
          <Footer onOpenQuoteModal={() => openQuoteModal()} />
          <TradeInquiryModal
            isOpen={quoteModalOpen}
            onClose={() => setQuoteModalOpen(false)}
            preselectedCommodity={selectedCommodity}
          />
        </div>
      </QuoteModalContext.Provider>
    </ThemeProvider>
  );
}
