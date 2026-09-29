import type { Metadata } from "next";
import { SITE_CONFIG, PAGES_SEO, type PageSEO } from "./config";

export function constructMetadata(
  pageKey: keyof typeof PAGES_SEO,
  overrides?: Partial<PageSEO> & { noIndex?: boolean }
): Metadata {
  const page = { ...PAGES_SEO[pageKey], ...overrides };
  const canonicalUrl = `${SITE_CONFIG.url}${page.path === "/" ? "" : page.path}`;
  const ogImageUrl = page.ogImage
    ? page.ogImage.startsWith("http")
      ? page.ogImage
      : `${SITE_CONFIG.url}${page.ogImage}`
    : `${SITE_CONFIG.url}${SITE_CONFIG.defaultOgImage}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    metadataBase: new URL(SITE_CONFIG.url),
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: "en_US",
      type: page.type || "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImageUrl],
    },
    icons: {
      icon: "/images/dusonicon.png",
      shortcut: "/images/dusonicon.png",
      apple: "/images/dusonicon.png",
    },
    robots: overrides?.noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}