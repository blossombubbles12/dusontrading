"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  ChevronRight, ArrowRight, Ship, Truck, ShieldCheck, MapPin, 
  Anchor, Thermometer, Clock, Globe2, Layers, Search
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function LogisticsView() {
  const { openQuoteModal } = useQuoteModal();
  const [originPort, setOriginPort] = useState("Tanjung Priok (Jakarta)");
  const [destPort, setDestPort] = useState("Rotterdam");

  const services = [
    { 
      title: "Ocean Container Freight", 
      link: "/logistics/shipping", 
      badge: "Liner Contracts",
      desc: "Guaranteed container space allocations with Tier-1 ocean liners (Maersk, MSC, ONE) operating weekly services from Indonesian ports.", 
      metrics: "30+ Ports Served • 100% On-Time Allocation",
      img: "/images/charles-forerunner-3fPXt37X6UQ.jpg"
    },
    { 
      title: "Inland & Port Transportation", 
      link: "/logistics/transportation", 
      badge: "Heavy Haulage",
      desc: "GPS-monitored refrigerated and dry container trucking connecting origin farm cooperatives directly with bonded container terminals.", 
      metrics: "GPS Telematics • 24/7 Dispatch Monitoring",
      img: "/images/sean-pollock-PhYq704ffdA-contact us building.jpg"
    },
    { 
      title: "Cold-Chain Supply Architecture", 
      link: "/logistics/supply-chain", 
      badge: "Climate Control",
      desc: "End-to-end temperature and humidity data logging from post-harvest pre-cooling units to final destination bonded warehouses.", 
      metrics: "2°C to 15°C Range • Real-Time Logger Data",
      img: "/images/mario-gogh-VBLHICVh-lI-workers-in the office.jpg"
    }
  ];

  const transitMatrix: Record<string, Record<string, string>> = {
    "Tanjung Priok (Jakarta)": {
      "Rotterdam": "24 - 26 Days (Direct Liner)",
      "Hamburg": "26 - 28 Days (North Europe Service)",
      "Jebel Ali (Dubai)": "12 - 14 Days (GCC Express)",
      "Qingdao": "8 - 10 Days (East Asia Corridor)",
      "Valencia": "22 - 24 Days (Med Service)"
    },
    "Tanjung Perak (Surabaya)": {
      "Rotterdam": "26 - 28 Days",
      "Hamburg": "28 - 30 Days",
      "Jebel Ali (Dubai)": "14 - 16 Days",
      "Qingdao": "7 - 9 Days",
      "Valencia": "24 - 26 Days"
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Logistics & Freight</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Ship className="w-4 h-4" />
                <span>Intermodal Freight Network</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                International Maritime & <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Cold-Chain Logistics</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                Operating dedicated freight management desks in Jakarta with bonded port logistics, DUSON ensures seamless container dispatch and temperature-monitored transit across 30+ international destination sea ports.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => openQuoteModal("Logistics Freight Request")} 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Request Custom Freight Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/logistics-bg.jpg" 
                  alt="DUSON Global Ocean Shipping Operations" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Port Tanjung Priok Hub</div>
                  <div className="font-serif text-base font-medium text-[#1A0614] dark:text-[#F9F6F0]">Bonded Container Terminal Loading & Seal Verification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Divisions */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Integrated Infrastructure</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Logistics Divisions & Freight Services</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            Specialized intermodal transport networks connecting origin farm cooperatives directly with destination sea ports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(s => (
            <div key={s.title} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 hover:border-[#7f1b59] transition-all group space-y-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-[#7f1b59]/15">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1A0614]/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#F9F6F0]">
                    {s.badge}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-medium group-hover:text-[#7f1b59] dark:group-hover:text-[#B52F81] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#7f1b59]/15 space-y-3">
                <div className="text-[11px] font-bold text-[#7f1b59] dark:text-[#B52F81]">
                  {s.metrics}
                </div>
                <Link 
                  href={s.link} 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A0614] dark:text-[#F9F6F0] group-hover:text-[#7f1b59]"
                >
                  <span>Explore Division</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Freight Transit Time Calculator */}
      <section className="py-20 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Corridor Estimator</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">Ocean Freight Transit Estimator</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
              Select origin loading port and destination port to view expected port-to-port vessel transit times.
            </p>
          </div>

          <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 shadow-xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Origin Port (Indonesia):</label>
                <select
                  value={originPort}
                  onChange={(e) => setOriginPort(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/30 text-xs text-[#1A0614] dark:text-[#F9F6F0] font-bold focus:outline-none"
                >
                  <option value="Tanjung Priok (Jakarta)">Tanjung Priok (Jakarta)</option>
                  <option value="Tanjung Perak (Surabaya)">Tanjung Perak (Surabaya)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Destination Sea Port:</label>
                <select
                  value={destPort}
                  onChange={(e) => setDestPort(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/30 text-xs text-[#1A0614] dark:text-[#F9F6F0] font-bold focus:outline-none"
                >
                  <option value="Rotterdam">Rotterdam (Netherlands)</option>
                  <option value="Hamburg">Hamburg (Germany)</option>
                  <option value="Jebel Ali (Dubai)">Jebel Ali (Dubai, UAE)</option>
                  <option value="Qingdao">Qingdao (China)</option>
                  <option value="Valencia">Valencia (Spain)</option>
                </select>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Estimated Ocean Transit Duration</span>
                <div className="font-serif text-2xl font-bold text-[#1A0614] dark:text-[#F9F6F0]">
                  {transitMatrix[originPort]?.[destPort] || "22 - 25 Days"}
                </div>
              </div>
              <button
                onClick={() => openQuoteModal(`Freight Booking: ${originPort} to ${destPort}`)}
                className="px-6 py-3 rounded-full bg-[#7f1b59] dark:bg-[#B52F81] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#9E2370] transition-all shadow-md shrink-0"
              >
                Lock Freight Space
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}