"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Globe2,
  ShieldCheck,
  Leaf,
  Handshake,
  TrendingUp,
  Award,
  Users,
  ArrowRight,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Building2,
  Anchor,
  Scale,
  Sparkles,
  Layers,
  FileCheck2,
  PhoneCall
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

function AnimatedCounter({ target, suffix = "", duration = 2000, start = false }: { target: number; suffix?: string; duration?: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutView() {
  const { openQuoteModal } = useQuoteModal();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const corePillars = [
    {
      icon: ShieldCheck,
      title: "Institutional Integrity",
      subtitle: "Transparency & Compliance",
      desc: "Every contract, shipment, and physical grade assay is executed under strict international trade law, binding quality commitments, and full financial transparency."
    },
    {
      icon: Anchor,
      title: "Direct Origin Sourcing",
      subtitle: "Zero Intermediary Loss",
      desc: "We operate direct procurement agreements with vetted Indonesian farmer cooperatives, spice growers in Maluku, and European olive groves for total traceability."
    },
    {
      icon: Award,
      title: "Stringent Quality Assurance",
      subtitle: "Lab-Verified Standards",
      desc: "Multi-point laboratory verification for moisture levels, volatile oil purity, aflatoxin screening, and phytosanitary compliance before container dispatch."
    },
    {
      icon: Layers,
      title: "Integrated Cold-Chain & Freight",
      subtitle: "End-to-End Logistics",
      desc: "From temperature-controlled bonded warehouses in Jakarta to global ocean liner bookings, we guarantee freshness, speed, and continuous tracking."
    },
    {
      icon: Leaf,
      title: "Sustainable Agriculture",
      subtitle: "Fair Trade & Ecology",
      desc: "Championing environmentally regenerative cultivation practices, fair grower compensation, and certified organic production across our supply footprint."
    },
    {
      icon: TrendingUp,
      title: "Commodity Intelligence",
      subtitle: "Market Risk Hedging",
      desc: "Proprietary market insights, harvest forecasting, and flexible contracting models to insulate our global buyers from seasonal price volatility."
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Foundation in Jakarta",
      location: "Jakarta, Indonesia",
      desc: "DUSON TRADING GROUP PT. was established with a focus on domestic agricultural aggregation and spice procurement across the Indonesian archipelago."
    },
    {
      year: "2012",
      title: "International Export Expansion",
      location: "ASEAN & Middle East",
      desc: "Secured institutional export licenses and established primary shipping corridors to Singapore, Malaysia, UAE, and Saudi Arabia for premium Indonesian nutmeg."
    },
    {
      year: "2016",
      title: "European Trade Desk & Compliance",
      location: "Rotterdam & Hamburg Network",
      desc: "Achieved full EU compliance certification (ISO 22000, HACCP) and formed long-term supply partnerships with prominent European food processors and distributors."
    },
    {
      year: "2019",
      title: "Commodity Portfolio Diversification",
      location: "Mediterranean & Southeast Asia",
      desc: "Expanded operations into Mediterranean virgin olive oils and export-grade commercial vegetables, establishing high-capacity bonded cold-storage infrastructure."
    },
    {
      year: "2024+",
      title: "Global Integrated Trading Network",
      location: "30+ Export Destinations",
      desc: "Now managing over 50,000 metric tons of certified commodities annually with trade desks in Jakarta, handling ocean freight, customs, and bespoke supply programs."
    }
  ];

  const commodityHighlights = [
    {
      title: "Indonesian Nutmeg & Mace",
      subtitle: "ABCD & Sound Quality Grades",
      image: "/images/nutmeg-spices.jpg",
      link: "/commodities/nutmeg",
      features: ["Direct Maluku & Sulawesi harvest", "Strict moisture (<10%) & aflatoxin control", "Available whole, cracked, or ground"]
    },
    {
      title: "Aromatic Spices & Pepper",
      subtitle: "Black & White Pepper, Cloves, Cinnamon",
      image: "/images/nutmeg-spices.jpg",
      link: "/commodities/spices",
      features: ["High volatile oil concentration", "Steam-sterilized & sorted", "Bulk jute bag & vacuum packaging"]
    },
    {
      title: "Commercial & Organic Vegetables",
      subtitle: "Export-Grade Fresh & Chilled",
      image: "/images/vegetables.jpg",
      link: "/commodities/vegetables",
      features: ["GAP certified farming clusters", "Rapid cold-chain pre-cooling", "Air and refrigerated sea freight"]
    },
    {
      title: "Virgin & Extra Virgin Olive Oils",
      subtitle: "Cold-Pressed Mediterranean Harvest",
      image: "/images/olive-oil.jpg",
      link: "/commodities/olive-oils",
      features: ["Ultra-low acidity (<0.8% & <0.3%)", "IBC totes, flexitanks, and food-grade drums", "Full organoleptic certification"]
    }
  ];

  const certifications = [
    { code: "ISO 22000", title: "Food Safety Management System", authority: "TÜV SÜD International Standard" },
    { code: "HACCP", title: "Hazard Analysis & Critical Control Points", authority: "Global Food Safety Standard" },
    { code: "HALAL MUI", title: "Official Halal Certification", authority: "Majelis Ulama Indonesia" },
    { code: "GACC", title: "General Administration of Customs China", authority: "Approved Enterprise Registry" },
    { code: "EU BIO / GAP", title: "Good Agricultural Practices Compliance", authority: "European Import Approved" },
    { code: "PHYTOSANITARY", title: "Agricultural Quarantine Clearance", authority: "Ministry of Agriculture Republic of Indonesia" }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500 selection:bg-[#7f1b59]/30">
      
      {/* 1. HERO SECTION WITH ELEGANT EDITORIAL LAYOUT */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10 overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#7f1b59]/5 dark:bg-[#B52F81]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-[#1A0614]/5 dark:bg-[#220819] rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8"
          >
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span>Company</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">About DUSON</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Narrative & Positioning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 dark:border-[#B52F81]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Globe2 className="w-4 h-4" />
                <span>Established 2008 · Jakarta, Indonesia</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-[1.12]">
                A Premier International Merchant of <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Agricultural Commodities</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed max-w-2xl">
                <strong className="font-semibold text-[#1A0614] dark:text-[#F9F6F0]">DUSON TRADING GROUP PT.</strong> bridges high-yield agricultural origin harvests across Southeast Asia and the Mediterranean with institutional buyers, processors, and food manufacturers worldwide.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  id="about-hero-quote-btn"
                  onClick={() => openQuoteModal()}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all duration-300 shadow-xl hover:-translate-y-0.5"
                >
                  <span>Request Procurement Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-[#7f1b59]/40 dark:border-[#B52F81]/40 text-[#1A0614] dark:text-[#F9F6F0] text-xs font-bold uppercase tracking-widest hover:border-[#7f1b59] dark:hover:border-[#B52F81] bg-white/50 dark:bg-transparent transition-all duration-300"
                >
                  <Building2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" />
                  <span>Trade Desk Contact</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Origin Hub</div>
                  <div className="text-sm font-serif font-medium text-[#1A0614] dark:text-[#F9F6F0] mt-0.5">Jakarta & Maluku</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Standard</div>
                  <div className="text-sm font-serif font-medium text-[#1A0614] dark:text-[#F9F6F0] mt-0.5">ISO 22000 & HACCP</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Dispatch</div>
                  <div className="text-sm font-serif font-medium text-[#1A0614] dark:text-[#F9F6F0] mt-0.5">Global Ocean Freight</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Layered Asymmetric Image Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Image */}
                <div className="relative h-[440px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                  <Image
                    src="/images/charles-forerunner-3fPXt37X6UQ.jpg"
                    alt="DUSON Trading Group International Operations"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0209]/80 via-transparent to-transparent" />
                  
                  {/* Overlay Bottom Tag */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0D0209]/80 backdrop-blur-md border border-[#B52F81]/30 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-widest text-[#B52F81]">Strategic Gateway</div>
                        <div className="font-serif text-lg font-medium text-white">Southeast Asian Export Terminal</div>
                      </div>
                      <MapPin className="w-6 h-6 text-[#B52F81] flex-shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Floating Inset Badge */}
                <div className="absolute -top-6 -right-4 sm:-right-6 w-36 sm:w-44 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#15040F] hidden sm:block">
                  <Image
                    src="/images/nutmeg-spices.jpg"
                    alt="Indonesian Nutmeg Harvest"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1A0614]/30" />
                  <div className="absolute bottom-2 left-2 right-2 text-center text-[10px] uppercase tracking-widest font-bold text-white bg-black/60 py-1 rounded backdrop-blur-sm">
                    Origin Commodity
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 2. EXECUTIVE NUMBERS & AUDITED PERFORMANCE */}
      <section ref={statsRef} className="py-16 bg-[#1A0614] dark:bg-[#10030B] border-y border-[#B52F81]/25 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-[#B52F81]/20">
            
            <div className="pt-6 lg:pt-0 lg:px-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                <AnimatedCounter target={16} suffix="+" start={statsInView} />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#B52F81] mt-2">Years of Trade Excellence</div>
              <div className="text-xs text-white/70 font-light mt-1 max-w-xs">Continuous trading operations since 2008 headquartered in Jakarta.</div>
            </div>

            <div className="pt-6 lg:pt-0 lg:px-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                <AnimatedCounter target={30} suffix="+" start={statsInView} />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#B52F81] mt-2">Global Destination Ports</div>
              <div className="text-xs text-white/70 font-light mt-1 max-w-xs">Active ocean container routes to Europe, Asia, and Middle Eastern ports.</div>
            </div>

            <div className="pt-6 lg:pt-0 lg:px-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                <AnimatedCounter target={50} suffix="k+" start={statsInView} />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#B52F81] mt-2">Metric Tons Handled Annually</div>
              <div className="text-xs text-white/70 font-light mt-1 max-w-xs">High-volume aggregation across spices, produce, and virgin olive oils.</div>
            </div>

            <div className="pt-6 lg:pt-0 lg:px-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                <AnimatedCounter target={100} suffix="%" start={statsInView} />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#B52F81] mt-2">Contract Fulfillment Rate</div>
              <div className="text-xs text-white/70 font-light mt-1 max-w-xs">Unblemished track record in phytosanitary & delivery commitments.</div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. CORPORATE HERITAGE & INSTITUTIONAL NARRATIVE */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Mosaic Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[#7f1b59]/20">
                <Image
                  src="/images/sean-pollock-PhYq704ffdA-contact us building.jpg"
                  alt="DUSON Head Office & Commercial Trading Tower"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209]">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Corporate Mandate</div>
                      <div className="text-sm text-[#1A0614] dark:text-[#F9F6F0] font-serif font-medium mt-0.5">
                        Delivering reliable trade execution without compromise on agricultural origin purity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Narrative Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81] font-semibold">
                <span className="w-8 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
                <span>Our Heritage & Purpose</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
                Built on Trust, Precision, and an <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Unbroken Supply Chain</span>
              </h2>

              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                DUSON TRADING GROUP PT. was founded on a simple yet vital premise: international agricultural trade demands absolute dependability. In an industry frequently hampered by opaque broker layers, fluctuating harvest grades, and logistical bottlenecks, DUSON provides an enterprise-grade trading partnership.
              </p>

              <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/75 font-light leading-relaxed">
                By integrating agricultural aggregation directly at Indonesian cultivation epicenters with international maritime forwarding and lab-backed quality validation, we give global buyers the certainty they need for their production cycles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7f1b59] dark:text-[#B52F81] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A0614] dark:text-[#F9F6F0] block">Direct Farm Partnerships</span>
                    <span className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70">Transparent farmer grower networks across Java, Sumatra & Maluku.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7f1b59] dark:text-[#B52F81] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A0614] dark:text-[#F9F6F0] block">Custom Clearance & Port Ops</span>
                    <span className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70">Tanjung Priok bonded operations with expedited phytosanitary processing.</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 4. STRATEGIC PILLARS / WHY CHOOSE DUSON */}
      <section className="py-24 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81] font-semibold">
              <span className="w-6 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
              <span>Core Operational Pillars</span>
              <span className="w-6 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0]">
              The Architecture of Reliable Commodity Trade
            </h2>
            <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">
              Our trading capabilities are engineered to mitigate volatility, ensure sanitary compliance, and deliver consistent grade specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group p-8 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 hover:border-[#7f1b59] dark:hover:border-[#B52F81] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F8EDF4] dark:bg-[#15040F] border border-[#7f1b59]/20 dark:border-[#B52F81]/20 flex items-center justify-center mb-6 group-hover:bg-[#7f1b59] group-hover:text-white dark:group-hover:bg-[#B52F81] dark:group-hover:text-[#0D0209] text-[#7f1b59] dark:text-[#B52F81] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] mb-1.5">
                    {pillar.subtitle}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#1A0614] dark:text-[#F9F6F0] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/70 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 5. COMMODITY PORTFOLIO INTEGRATION */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81] font-semibold mb-3">
                <span className="w-8 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
                <span>Specialized Lines</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0]">
                Four Core Commodity Portfolios
              </h2>
            </div>
            <Link
              href="/commodities"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7f1b59] dark:text-[#B52F81] hover:underline"
            >
              <span>Explore All Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commodityHighlights.map((com, idx) => (
              <motion.div
                key={com.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={com.image}
                      alt={com.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#0D0209]/80 text-[#B52F81] border border-[#B52F81]/30 backdrop-blur-sm">
                      {com.subtitle}
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">
                      {com.title}
                    </h3>
                    <ul className="space-y-1.5 pt-1">
                      {com.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#7f1b59] dark:bg-[#B52F81]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={com.link}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15 text-xs font-bold uppercase tracking-wider text-[#1A0614] dark:text-[#F9F6F0] group-hover:text-[#7f1b59] dark:group-hover:text-[#B52F81] transition-colors"
                  >
                    <span>View Product Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 6. LEADERSHIP & CORPORATE TEAM CULTURE */}
      <section className="py-24 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Multi-Photo Mosaic */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 grid grid-cols-2 gap-4"
            >
              <div className="relative h-60 rounded-2xl overflow-hidden shadow-lg border border-[#7f1b59]/20">
                <Image
                  src="/images/mario-gogh-VBLHICVh-lI-workers-in the office.jpg"
                  alt="DUSON Trading Floor Specialists"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-60 rounded-2xl overflow-hidden shadow-lg border border-[#7f1b59]/20 mt-6">
                <Image
                  src="/images/campaign-creators-gMsnXqILjp4-workers meeting conference.jpg"
                  alt="Executive Strategy Conference"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg border border-[#7f1b59]/20 -mt-6">
                <Image
                  src="/images/docusign-7RWBSYA9Rro-workers looking at computer.jpg"
                  alt="Commodity Sourcing Quality Control"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg border border-[#7f1b59]/20">
                <Image
                  src="/images/microsoft-365-bWL-c09Ys80-.jpg"
                  alt="Global Trade Desk Communication"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Team Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81] font-semibold">
                <span className="w-8 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
                <span>Our People & Governance</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
                Specialized Trade Desks, Agronomists, and Logistics Engineers
              </h2>

              <p className="text-base text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                Behind every container dispatched from Tanjung Priok is a dedicated team of 80+ professionals operating across our headquarters in Jakarta and international desk representatives.
              </p>

              <p className="text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75 font-light leading-relaxed">
                Our team blends decades of deep agricultural harvest knowledge with maritime law, commercial hedging, and stringent customs compliance, ensuring smooth cross-border execution.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A0614] dark:text-[#F9F6F0]">80+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] mt-1">Staff Members</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A0614] dark:text-[#F9F6F0]">24/7</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] mt-1">Freight Desk</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1A0614] dark:text-[#F9F6F0]">98.5%</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] mt-1">Client Retention</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 7. CHRONOLOGICAL MILESTONES & GROWTH JOURNEY */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81] font-semibold">
              <span className="w-6 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
              <span>Historical Milestones</span>
              <span className="w-6 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0]">
              Over a Decade and a Half of Measured Expansion
            </h2>
            <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">
              Tracing our path from regional Indonesian spice aggregator to institutional global merchant house.
            </p>
          </div>

          {/* Timeline Vertical Track */}
          <div className="relative border-l-2 border-[#7f1b59]/30 dark:border-[#B52F81]/25 ml-4 sm:ml-32 md:ml-48 space-y-12">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-12 group"
              >
                {/* Year Marker Badge on the left */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#1A0614] dark:bg-[#B52F81] border-4 border-white dark:border-[#0D0209] shadow-md flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#B52F81] dark:bg-[#0D0209]" />
                </div>

                <div className="hidden sm:block absolute -left-32 md:-left-48 top-1.5 text-right w-24 md:w-36 font-serif text-2xl font-bold text-[#7f1b59] dark:text-[#B52F81]">
                  {m.year}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-sm group-hover:border-[#7f1b59] dark:group-hover:border-[#B52F81] transition-all">
                  <div className="sm:hidden font-serif text-xl font-bold text-[#7f1b59] dark:text-[#B52F81] mb-1">
                    {m.year}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#5C3D52] dark:text-[#DFC8D6]/70 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#7f1b59] dark:text-[#B52F81]" />
                    <span>{m.location}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1A0614] dark:text-[#F9F6F0] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/75 font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 8. CERTIFICATIONS, COMPLIANCE & LAB STANDARDS */}
      <section className="py-24 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81] font-semibold">
              <span className="w-6 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
              <span>International Accreditation</span>
              <span className="w-6 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0]">
              Uncompromising Quality & Compliance Standards
            </h2>
            <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">
              Every export cargo is certified under global food safety protocols, guaranteed phytosanitary certificates, and sovereign customs registrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="p-3 rounded-xl bg-[#F8EDF4] dark:bg-[#15040F] text-[#7f1b59] dark:text-[#B52F81] flex-shrink-0 border border-[#7f1b59]/20">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] block">
                    {cert.code}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-[#1A0614] dark:text-[#F9F6F0] mt-0.5">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70 mt-1 font-light">
                    {cert.authority}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 9. EXECUTIVE PHILOSOPHY BANNER */}
      <section className="relative py-28 bg-[#1A0614] dark:bg-[#0D0209] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <Image
            src="/images/mike-kononov-lFv0V3_2H6s-bulding night view.jpg"
            alt="Global Corporate Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#B52F81] font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Executive Governance Statement</span>
          </div>

          <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium leading-tight text-white/95">
            &ldquo;In agricultural commodity trade, reputation is founded on consistency. Our global partners rely on DUSON not merely for price competitiveness, but for absolute certainty of physical grade, regulatory clearance, and delivery execution.&rdquo;
          </blockquote>

          <div className="pt-4">
            <div className="font-serif text-lg font-medium text-[#B52F81]">Board of Directors</div>
            <div className="text-xs uppercase tracking-widest text-white/60 mt-1">DUSON TRADING GROUP PT. · Jakarta, Indonesia</div>
          </div>
        </div>
      </section>


      {/* 10. PROCUREMENT INQUIRY & CTA SECTION */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81] font-semibold">
            <span className="w-6 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
            <span>Initiate Trade Relationship</span>
            <span className="w-6 h-[1px] bg-[#7f1b59] dark:bg-[#B52F81]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0]">
            Ready to Structure Your Commodity Procurement?
          </h2>

          <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Contact our commercial desk in Jakarta for current contract pricing, ocean freight schedules, and technical laboratory specification sheets.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              id="about-cta-quote-btn"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all duration-300 shadow-xl hover:-translate-y-0.5"
            >
              <span>Request Instant Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/contact"
              id="about-cta-contact-btn"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#7f1b59]/40 dark:border-[#B52F81]/40 text-[#1A0614] dark:text-[#F9F6F0] text-xs font-bold uppercase tracking-widest hover:border-[#7f1b59] dark:hover:border-[#B52F81] bg-white/40 dark:bg-transparent transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" />
              <span>Contact Commercial Desk</span>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-[#5C3D52] dark:text-[#DFC8D6]/60 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15 mt-12">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" />
              <span>Full CIF / FOB / CFR Delivery Options</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" />
              <span>Third-Party SGS Pre-Shipment Inspection</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" />
              <span>Irrevocable LC & TT Terms Accepted</span>
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}