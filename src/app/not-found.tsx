import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Anchor, ArrowRight, Compass, Home } from "lucide-react";

export const metadata = constructMetadata("home", {
  title: "404 - Page Not Found | DUSON TRADING GROUP PT.",
  description: "The requested commodity or trade page could not be located on DUSON TRADING GROUP PT.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FCF9FB] dark:bg-[#0D0209] text-[#1A0614] dark:text-[#F9F6F0] px-6 py-24 transition-colors duration-500">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="w-16 h-16 rounded-full bg-[#F8EDF4] dark:bg-[#220819] border border-[#7f1b59]/30 text-[#7f1b59] dark:text-[#B52F81] flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7f1b59] dark:text-[#B52F81]">
            Error 404 · Destination Unreachable
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight">
            Commodity Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-[#5C3D52] dark:text-[#DFC8D6]/80 font-light max-w-lg mx-auto leading-relaxed">
            The trade page, specification document, or commodity route you requested may have been relocated or updated.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1A0614] dark:bg-[#B52F81] text-white dark:text-[#0D0209] text-xs font-bold uppercase tracking-widest hover:bg-[#7f1b59] dark:hover:bg-[#D94B9F] transition-all shadow-xl"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/commodities"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#7f1b59]/40 text-[#1A0614] dark:text-[#F9F6F0] text-xs font-bold uppercase tracking-widest hover:border-[#7f1b59] transition-all"
          >
            <span>Explore Commodities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quick Links Directory */}
        <div className="pt-8 border-t border-[#7f1b59]/15 dark:border-[#B52F81]/15 flex flex-wrap justify-center gap-6 text-xs text-[#5C3D52] dark:text-[#DFC8D6]/70">
          <Link href="/about" className="hover:text-[#7f1b59]">About DUSON</Link>
          <span>•</span>
          <Link href="/trading" className="hover:text-[#7f1b59]">Trading Desk</Link>
          <span>•</span>
          <Link href="/logistics" className="hover:text-[#7f1b59]">Maritime Freight</Link>
          <span>•</span>
          <Link href="/insights" className="hover:text-[#7f1b59]">Market Insights</Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-[#7f1b59]">Contact Desk</Link>
        </div>
      </div>
    </div>
  );
}