"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Globe2, ChevronRight, ArrowRight, MapPin, Anchor, Ship, 
  CheckCircle2, Clock, ShieldCheck, Container, Compass, 
  Boxes, PhoneCall, Building2, ExternalLink
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function GlobalReachView() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedRegion, setSelectedRegion] = useState<number>(0);

  const globalRegions = [
    {
      id: "europe",
      region: "European Union & United Kingdom",
      status: "High-Volume Direct Liner Route",
      annualVolume: "18,000+ MT / Year",
      gatewayPorts: ["Rotterdam (Netherlands)", "Hamburg (Germany)", "Antwerp (Belgium)", "Felixstowe (UK)"],
      leadTime: "24 – 28 Days",
      keyProducts: "Nutmeg (ABCD, Sound Shrivelled), Mace Siftings, Black & White Pepper, EV Olive Oil",
      regulatoryCompliance: "EU Regulation (EC) No 396/2005 on MRLs, EFSA Microbiological Standards, EU BIO Organic Certification",
      tradeDesks: "Rotterdam Partner Hub & London Commercial Desk",
      description: "Our European trade corridor operates weekly scheduled sailings from Port Tanjung Priok and Tanjung Perak, feeding central European food manufacturing, pharmaceutical extraction, and gourmet retail distribution networks.",
      img: "/images/sean-pollock-PhYq704ffdA-contact us building.jpg"
    },
    {
      id: "middle-east",
      region: "Middle East & GCC Region",
      status: "Express Maritime Corridor",
      annualVolume: "14,000+ MT / Year",
      gatewayPorts: ["Jebel Ali (Dubai, UAE)", "Jeddah Islamic Port (Saudi Arabia)", "Dammam (Saudi Arabia)", "Hamad Port (Qatar)"],
      leadTime: "12 – 16 Days",
      keyProducts: "Whole Nutmeg with Shell, Cloves, Cassia Cinnamon Sticks, Fresh Farm Produce, Extra Virgin Olive Oil",
      regulatoryCompliance: "BPJPH Indonesian Halal Authority, SFDA Saudi Food & Drug Authority, GSO Conformity Certificates",
      tradeDesks: "Dubai Distribution Logistics Nexus",
      description: "Direct liner services connect Indonesian deepwater ports to the Arabian Gulf within two weeks, ensuring optimal botanical freshness, high volatile essential oil preservation, and strict Halal assurance.",
      img: "/images/charles-forerunner-3fPXt37X6UQ.jpg"
    },
    {
      id: "east-asia",
      region: "East Asia & Pacific Rim",
      status: "Short-Sea High Frequency",
      annualVolume: "12,000+ MT / Year",
      gatewayPorts: ["Shanghai & Ningbo (China)", "Qingdao (China)", "Tokyo & Yokohama (Japan)", "Busan (South Korea)", "Singapore Hub"],
      leadTime: "8 – 14 Days",
      keyProducts: "Indonesian Cloves (Lal Pari), Muntok White Pepper, Industrial Spice Extract grades, Fresh Vegetables",
      regulatoryCompliance: "GACC China Customs General Administration, Japan Food Sanitation Law, MFDS Korea",
      tradeDesks: "Singapore Transshipment & Regional Sourcing Office",
      description: "Rapid feeder routes and direct container vessels provide high-turnaround supply chains to industrial seasoning manufacturers, cigarette flavoring producers, and wholesale markets across East Asia.",
      img: "/images/microsoft-365-bWL-c09Ys80-.jpg"
    },
    {
      id: "americas",
      region: "North & South America",
      status: "Intermodal Long-Haul Corridors",
      annualVolume: "6,000+ MT / Year",
      gatewayPorts: ["Houston (Texas, USA)", "New York / New Jersey (USA)", "Long Beach (California, USA)", "Santos (Brazil)"],
      leadTime: "30 – 38 Days",
      keyProducts: "Nutmeg Butter, Steam-Sterilized Black Pepper, Certified Organic Botanicals, Virgin Olive Oils",
      regulatoryCompliance: "US FDA Food Facility Registration, FSMA Preventive Controls, USDA NOP Organic Standards",
      tradeDesks: "North American Import Partner Agency",
      description: "Equipped with specialized anti-condensation moisture barriers and continuous electronic temperature logging, our container shipments cross Pacific and Atlantic lanes in pristine condition.",
      img: "/images/docusign-7RWBSYA9Rro-workers looking at computer.jpg"
    }
  ];

  const originPorts = [
    {
      port: "Port Tanjung Priok (Jakarta)",
      code: "IDJKT",
      role: "Primary Headquarters & Container Gateway",
      capabilities: "Bonded CFS Warehouses, Reefer Plug Infrastructure, Direct Deepwater Ocean Berths",
      commodities: "Airfreight Spices, Consolidated Container Loads (FCL/LCL), Processed Spices & Oils"
    },
    {
      port: "Port Tanjung Perak (Surabaya)",
      code: "IDSUB",
      role: "Eastern Java & Spice Archipelago Hub",
      capabilities: "Bulk Agricultural Staging, Sun-Drying Quality Testing, Inter-Island Feeder Consolidation",
      commodities: "Sulawesi & Maluku Nutmeg, East Java Vegetables, Cassia Cinnamon"
    },
    {
      port: "Port Belawan (Medan, North Sumatra)",
      code: "IDBLW",
      role: "Sumatran Agro-Commodity Export Nexus",
      capabilities: "Direct Malacca Strait Shipping Lanes, High-Capacity Dry Container Yards",
      commodities: "Lampung Black Pepper, Korintji Cinnamon, Tropical Agricultural Produce"
    },
    {
      port: "Port Soekarno-Hatta (Makassar, Sulawesi)",
      code: "IDMAK",
      role: "Eastern Outer-Island Aggregation Terminal",
      capabilities: "Direct Coastal Feeder Networks to Siau, Banda, and Ambon spice islands",
      commodities: "Siau Nutmeg (High Oil Content), North Maluku Cloves, Raw Botanical Harvests"
    }
  ];

  const transitMatrix = [
    { route: "Tanjung Priok (IDJKT) → Port of Rotterdam (NLRTM)", oceanTime: "24 – 28 Days", frequency: "2x Weekly", carrier: "Maersk / MSC" },
    { route: "Tanjung Priok (IDJKT) → Jebel Ali, Dubai (AEJEA)", oceanTime: "12 – 16 Days", frequency: "3x Weekly", carrier: "CMA CGM / ONE" },
    { route: "Tanjung Perak (IDSUB) → Shanghai Port (CNSHA)", oceanTime: "8 – 11 Days", frequency: "4x Weekly", carrier: "Evergreen / Cosco" },
    { route: "Tanjung Priok (IDJKT) → Port of Houston (USHOU)", oceanTime: "32 – 38 Days", frequency: "Weekly", carrier: "Hapag-Lloyd / Maersk" },
    { route: "Belawan (IDBLW) → Port of Hamburg (DEHAM)", oceanTime: "26 – 30 Days", frequency: "Weekly", carrier: "ONE / MSC" },
    { route: "Tanjung Priok (IDJKT) → Port of Piraeus (GRPIR)", oceanTime: "22 – 26 Days", frequency: "Weekly", carrier: "CMA CGM / MSC" }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7f1b59]/5 via-transparent to-[#B52F81]/5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/about" className="hover:underline">Company</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Global Reach</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Globe2 className="w-4 h-4" />
                <span>30+ Destination Markets Across 5 Continents</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A0614] dark:text-[#F9F6F0] leading-tight">
                Global Trade Corridors & <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Port Infrastructure</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                Operating high-frequency containerized shipping routes from Indonesia’s major deepwater ports to Europe, the Middle East, East Asia, and the Americas with complete cargo integrity.
              </p>
              
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => openQuoteModal()} 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Request Route Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="https://wa.me/6282223000688" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-[#220819] border border-[#7f1b59]/30 dark:border-[#B52F81]/30 text-[#1A0614] dark:text-[#F9F6F0] text-xs font-bold uppercase tracking-widest hover:bg-[#F8EDF4] dark:hover:bg-[#2D0B22] transition-all shadow-md"
                >
                  <PhoneCall className="w-4 h-4 text-[#7f1b59] dark:text-[#B52F81]" />
                  <span>Maritime Desk: +62 8222 3000 688</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/sean-pollock-PhYq704ffdA-contact us building.jpg" 
                  alt="DUSON Global Trade Network and Headquarters" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-[#1A0614]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#1A0614]/90 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Origin Gateways</span>
                    <span className="text-[#5C3D52] dark:text-[#DFC8D6]/70">Jakarta • Surabaya • Medan • Makassar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGIONAL DESTINATION HUBS (Interactive Selector) */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>Destination Port Infrastructure</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
            Our Primary International Shipping Corridors
          </h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">
            Select a global trading zone to review discharge ports, cargo lead times, regulatory compliance frameworks, and key commodity allocations.
          </p>
        </div>

        {/* Region Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {globalRegions.map((reg, idx) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(idx)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedRegion === idx
                  ? "bg-[#7f1b59] dark:bg-[#B52F81] text-white dark:text-[#0D0209] border-transparent shadow-lg scale-105"
                  : "bg-white dark:bg-[#220819] text-[#5C3D52] dark:text-[#DFC8D6]/80 border-[#7f1b59]/20 dark:border-[#B52F81]/20 hover:border-[#7f1b59]"
              }`}
            >
              {reg.region.split("&")[0].trim()}
            </button>
          ))}
        </div>

        {/* Selected Region Detailed Card */}
        <div className="bg-white dark:bg-[#220819] rounded-3xl p-8 lg:p-12 border border-[#7f1b59]/20 dark:border-[#B52F81]/15 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F8EDF4] dark:bg-[#15040F] text-[#7f1b59] dark:text-[#B52F81] border border-[#7f1b59]/20">
                  {globalRegions[selectedRegion].status}
                </span>
                <span className="text-xs font-semibold text-[#5C3D52] dark:text-[#DFC8D6]/70">
                  Annual Flow: <strong className="text-[#1A0614] dark:text-[#F9F6F0]">{globalRegions[selectedRegion].annualVolume}</strong>
                </span>
              </div>

              <h3 className="font-serif text-3xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">
                {globalRegions[selectedRegion].region}
              </h3>

              <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/85 font-light leading-relaxed">
                {globalRegions[selectedRegion].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/10 dark:border-[#B52F81]/10">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] mb-1 flex items-center gap-1.5">
                    <Anchor className="w-3.5 h-3.5" />
                    <span>Primary Discharge Ports</span>
                  </div>
                  <ul className="text-xs text-[#1A0614] dark:text-[#F9F6F0] space-y-1 font-light">
                    {globalRegions[selectedRegion].gatewayPorts.map((p) => (
                      <li key={p} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#7f1b59] dark:text-[#B52F81] flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/10 dark:border-[#B52F81]/10">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Transit Duration & Desk</span>
                  </div>
                  <div className="text-xs text-[#1A0614] dark:text-[#F9F6F0] space-y-2">
                    <div>Average Port Lead Time: <strong>{globalRegions[selectedRegion].leadTime}</strong></div>
                    <div className="text-[11px] text-[#5C3D52] dark:text-[#DFC8D6]/70">Liaison: {globalRegions[selectedRegion].tradeDesks}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8EDF4]/60 dark:bg-[#15040F]/60 border border-[#7f1b59]/15 space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Regulatory & Quarantine Framework</span>
                </div>
                <div className="text-xs text-[#1A0614] dark:text-[#F9F6F0] font-light">
                  {globalRegions[selectedRegion].regulatoryCompliance}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-lg border border-[#7f1b59]/20">
                <Image 
                  src={globalRegions[selectedRegion].img} 
                  alt={globalRegions[selectedRegion].region} 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDONESIAN ORIGIN GATEWAY PORTS */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-widest">
            <Anchor className="w-4 h-4" />
            <span>Origin Export Terminals</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
            Indonesian Port Gateways & Consolidation Hubs
          </h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">
            We operate bonded staging facilities and verified container freight stations across Indonesia’s most strategic maritime departure points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {originPorts.map((op) => (
            <div 
              key={op.port} 
              className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 dark:border-[#B52F81]/15 space-y-4 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">{op.code}</span>
                  <h3 className="font-serif text-2xl font-medium text-[#1A0614] dark:text-[#F9F6F0]">{op.port}</h3>
                </div>
                <div className="p-3 rounded-2xl bg-[#F8EDF4] dark:bg-[#15040F] text-[#7f1b59] dark:text-[#B52F81]">
                  <Ship className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs font-semibold text-[#7f1b59] dark:text-[#B52F81]">
                Role: {op.role}
              </p>

              <div className="space-y-2 text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">
                <div>
                  <strong className="font-medium text-[#1A0614] dark:text-[#F9F6F0]">Infrastructure & Handling:</strong> {op.capabilities}
                </div>
                <div>
                  <strong className="font-medium text-[#1A0614] dark:text-[#F9F6F0]">Key Staged Cargo:</strong> {op.commodities}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MARITIME TRANSIT DURATION MATRIX */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/20 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-widest">
            <Container className="w-4 h-4" />
            <span>Transit Schedules</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
            Port-to-Port Estimated Ocean Transit Duration
          </h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light">
            Indicative maritime transit times for 20ft & 40ft FCL containerized agricultural shipments.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-[#7f1b59]/20 dark:border-[#B52F81]/15 bg-white dark:bg-[#220819] shadow-lg">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#F8EDF4] dark:bg-[#15040F] border-b border-[#7f1b59]/20 dark:border-[#B52F81]/20 text-[#1A0614] dark:text-[#F9F6F0]">
                <th className="py-4 px-6 font-bold uppercase tracking-wider text-[11px] text-[#7f1b59] dark:text-[#B52F81]">Shipping Lane (Origin → Discharge)</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider text-[11px] text-[#7f1b59] dark:text-[#B52F81]">Est. Ocean Transit</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider text-[11px] text-[#7f1b59] dark:text-[#B52F81]">Sailing Frequency</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider text-[11px] text-[#7f1b59] dark:text-[#B52F81]">Contracted Liners</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#7f1b59]/10 dark:divide-[#B52F81]/10 text-[#5C3D52] dark:text-[#DFC8D6]/85">
              {transitMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8EDF4]/40 dark:hover:bg-[#2D0B22]/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-[#1A0614] dark:text-[#F9F6F0]">{row.route}</td>
                  <td className="py-4 px-6 font-semibold text-[#7f1b59] dark:text-[#B52F81]">{row.oceanTime}</td>
                  <td className="py-4 px-6">{row.frequency}</td>
                  <td className="py-4 px-6 font-light">{row.carrier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1A0614] via-[#350A27] to-[#1A0614] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-[#7f1b59]/30">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B52F81]/20 border border-[#B52F81]/40 text-[#B52F81] text-xs font-bold uppercase tracking-wider">
              <span>Direct Global Contracting</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
              Ready to Secure Container Cargo Allocations to Your Destination Port?
            </h2>
            <p className="text-sm sm:text-base text-[#DFC8D6]/85 font-light leading-relaxed">
              Connect with our maritime logistics desk to structure forward delivery schedules, FOB/CIF contracts, and guaranteed vessel space allocations.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button 
                onClick={() => openQuoteModal()} 
                className="px-8 py-4 rounded-full bg-[#B52F81] text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#D94B9F] transition-all shadow-xl"
              >
                Inquire for CIF / FOB Pricing
              </button>
              <Link 
                href="/trading/export" 
                className="px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                Explore Export Compliance
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}