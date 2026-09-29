import { SITE_CONFIG } from "./config";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}/images/logo.png`,
    },
    image: `${SITE_CONFIG.url}${SITE_CONFIG.defaultOgImage}`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.telephone,
    email: SITE_CONFIG.email,
    foundingDate: SITE_CONFIG.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.streetAddress,
      addressLocality: SITE_CONFIG.address.addressLocality,
      addressRegion: SITE_CONFIG.address.addressRegion,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.telephone,
        contactType: "sales",
        email: SITE_CONFIG.email,
        areaServed: ["ID", "US", "GB", "DE", "NL", "AE", "SA", "SG", "CN", "MY", "IT", "ES"],
        availableLanguage: ["English", "Indonesian"],
      },
    ],
    knowsAbout: SITE_CONFIG.commodities,
    sameAs: [
      SITE_CONFIG.socialProfiles.linkedin,
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}

export function getProductSchema(product: {
  name: string;
  description: string;
  image: string;
  sku: string;
  category: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image.startsWith("http") ? product.image : `${SITE_CONFIG.url}${product.image}`,
    sku: product.sku,
    category: product.category,
    url: `${SITE_CONFIG.url}${product.path}`,
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    manufacturer: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    countryOfOrigin: {
      "@type": "Country",
      name: "Indonesia",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        unitText: "Metric Ton",
      },
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
    },
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    url: `${SITE_CONFIG.url}${service.path}`,
    provider: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  authorName?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE_CONFIG.url}${article.path}`,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    author: {
      "@type": "Organization",
      name: article.authorName || "DUSON Analytical Desk",
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    image: article.image
      ? article.image.startsWith("http")
        ? article.image
        : `${SITE_CONFIG.url}${article.image}`
      : `${SITE_CONFIG.url}${SITE_CONFIG.defaultOgImage}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}${article.path}`,
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}