"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  ChevronRight, ArrowRight, Truck, MapPin, CheckCircle2, ShieldCheck, 
  Navigation, Cpu, Radio, ShieldAlert
} from "lucide-react";
import { useQuoteModal } from "@/components/GlobalLayout";

export default function TransportationView() {
  const { openQuoteModal } = useQuoteModal();

  const corridors = [
    {
      name: "Sumatra Spice Corridor (Lampung / Medan → Tanjung Priok)",
      distance: "650 km - 1,200 km Inland Highway",
      fleet: "Heavy 3-Axle Container Chassis & Air-Suspension Reefer Trucks",
      sla: "24-Hour Express Port Delivery"
    },
    {
      name: "Java Highland Corridor (Dieng / Wonosobo → Tanjung Perak)",
      distance: "320 km Mountain Cold-Chain Highway",
      fleet: "Temperature-Controlled Hydro-Cooling Reefer Vans (2°C - 8°C)",
      sla: "12-Hour Farm-Gate to Port Gate-In"
    },
    {
      name: "Maluku Island Inter-Island Barge Corridor",
      distance: "Archipelago Maritime Freight Feeder",
      fleet: "Ro-Ro Feeder Barges & Sealed Bonded Containers",
      sla: "Bi-Weekly Feeder Dispatch to Central Java Mills"
    },
    {
      name: "Mediterranean Port Drayage Corridor (Valencia / Piraeus)",
      distance: "European Union Bonded Drayage Corridor",
      fleet: "Euro-6 Compliant Transport Fleet",
      sla: "Direct Warehouse Door-to-Door Delivery"
    }
  ];

  const fleetFeatures = [
    { title: "24/7 Satellite GPS Telematics", desc: "Real-time location, speed monitoring, and geofenced route tracking to prevent unauthorized stops." },
    { title: "Continuous Temperature Recording", desc: "Digital data loggers mounted inside reefer trailers recording temperature every 15 minutes for COA compliance." },
    { title: "Bonded Port Gate-In Permits", desc: "Pre-cleared customs transport permits granting priority terminal access at Tanjung Priok and Surabaya sea ports." },
    { title: "Comprehensive Cargo Liability", desc: "100% full replacement value insurance coverage on all inland transit shipments from farm to port." }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81] mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/logistics" className="hover:underline">Logistics</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#1A0614] dark:text-[#F9F6F0]">Transportation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] text-xs font-bold uppercase tracking-[0.2em]">
                <Truck className="w-4 h-4" />
                <span>Heavy Haulage & Drayage Fleet</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                Inland Haulage & <span className="font-medium text-[#7f1b59] dark:text-[#B52F81]">Port Drayage Fleet</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3D52] dark:text-[#DFC8D6]/85 font-normal leading-relaxed">
                GPS-monitored heavy transportation fleet linking regional harvest stations across Sumatra, Java, and the Maluku Islands with our bonded export facilities at Port Tanjung Priok and Tanjung Perak.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={() => openQuoteModal("Inland Transport Service")} 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
                >
                  <span>Inquire for Haulage Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-[#7f1b59]/20">
                <Image 
                  src="/images/sean-pollock-PhYq704ffdA-contact us building.jpg" 
                  alt="DUSON Inland Fleet Terminal" 
                  fill 
                  priority 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0614]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#15040F]/90 backdrop-blur-md border border-[#7f1b59]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">Telematics Monitored Fleet</div>
                  <div className="font-serif text-base font-medium text-[#1A0614] dark:text-[#F9F6F0]">Direct Farm-to-Port Container Drayage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inland Corridors */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Arterial Routes</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium">Primary Inland Transport Corridors</h2>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
            Fixed arterial haulage routes guaranteeing rapid gate-in times prior to ocean liner vessel cut-offs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {corridors.map(c => (
            <div key={c.name} className="p-8 rounded-3xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7f1b59] dark:text-[#B52F81]">
                  <Navigation className="w-4 h-4" />
                  <span>{c.sla}</span>
                </div>
                <h3 className="font-serif text-xl font-bold">{c.name}</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">{c.distance}</p>
                <div className="p-4 rounded-2xl bg-[#FCF9FB] dark:bg-[#15040F] border border-[#7f1b59]/15 text-xs">
                  <strong className="text-[#7f1b59] dark:text-[#B52F81] block text-[10px] uppercase font-bold">Assigned Fleet:</strong>
                  <span className="text-[#1A0614] dark:text-[#F9F6F0]">{c.fleet}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Standards */}
      <section className="py-20 bg-[#F8EDF4] dark:bg-[#15040F] border-y border-[#7f1b59]/15 dark:border-[#B52F81]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7f1b59] dark:text-[#B52F81]">Safety & Assurance</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">Haulage Fleet Safety Standards</h2>
            <p className="text-xs sm:text-sm text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal">
              Every container movement is safeguarded by strict GPS telematics and cargo insurance policies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetFeatures.map((f, i) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white dark:bg-[#220819] border border-[#7f1b59]/20 space-y-3 shadow-sm">
                <span className="font-serif text-3xl font-bold text-[#7f1b59] dark:text-[#B52F81]">0{i + 1}</span>
                <h3 className="font-serif text-lg font-bold">{f.title}</h3>
                <p className="text-xs text-[#5C3D52] dark:text-[#DFC8D6]/80 font-normal leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}