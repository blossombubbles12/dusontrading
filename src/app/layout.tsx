import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GlobalLayout from "@/components/GlobalLayout";
import JsonLd from "@/components/seo/JsonLd";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo/schemas";
import { constructMetadata } from "@/lib/seo/metadata";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = constructMetadata("home");

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF9F5" },
    { media: "(prefers-color-scheme: dark)", color: "#0B241B" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/images/dusonicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/dusonicon.png" />
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}