export const SITE_CONFIG = {
  name: "DUSON TRADING GROUP PT.",
  shortName: "DUSON",
  legalName: "DUSON TRADING GROUP PT.",
  url: "https://www.dusontrading.com",
  defaultTitle: "DUSON TRADING GROUP PT. | Global Food Commodity Trading & Logistics",
  titleTemplate: "%s | DUSON TRADING GROUP PT.",
  description:
    "DUSON TRADING GROUP PT. is a premier international B2B merchant specializing in agricultural commodity sourcing, quality grading, global food exports, and maritime logistics. Headquartered in Jakarta, Indonesia.",
  telephone: "+62 8222 3000 688",
  email: "contact@dusontrading.com",
  exportEmail: "contact@dusontrading.com",
  address: {
    streetAddress: "Jalan Ks. Tubun No. 30, RT.5/RW.2, Kota Bambu Selatan, Palmerah, RT.5, RT.8/RW.2, Kota Bambu Sel., Kec. Palmerah",
    addressLocality: "Kota Jakarta Barat",
    addressRegion: "Daerah Khusus Ibukota Jakarta",
    postalCode: "11420",
    addressCountry: "ID",
  },
  geo: {
    latitude: "-6.1885",
    longitude: "106.8016",
  },
  foundingYear: "2022",
  priceRange: "$$$$",
  currenciesAccepted: "USD, EUR, SGD, IDR",
  paymentAccepted: "Letter of Credit (LC at Sight), Telegraphic Transfer (TT)",
  openingHours: "Mo-Fr 08:00-18:00 UTC+7",
  defaultOgImage: "/images/charles-forerunner-3fPXt37X6UQ.jpg",
  socialProfiles: {
    linkedin: "https://www.linkedin.com/company/duson-trading-group",
  },
  commodities: [
    "Indonesian Nutmeg & Mace (ABCD, Sound, BWP)",
    "Aromatic Spices (Lampung Black Pepper, Muntok White Pepper, Lalpari Cloves, Korintje Cassia)",
    "Export-Grade Commercial Vegetables (Shallots, Ginger, Highland Produce)",
    "Pure Virgin & Extra Virgin Olive Oils (Bulk Flexitank & IBC Totes)",
  ],
  services: [
    "Agricultural Origin Sourcing & Farm Aggregation",
    "Laboratory Quality Assurance & ISO 22000 Grading",
    "Export Management & Phytosanitary Quarantine Clearance",
    "International Ocean Container Freight & Maritime Logistics",
    "Temperature-Controlled Cold-Chain Supply Architecture",
  ],
};

export interface PageSEO {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  ogImage?: string;
  type?: "website" | "article";
}

export const PAGES_SEO: Record<string, PageSEO> = {
  home: {
    title: "DUSON TRADING GROUP PT. | Global Food Commodity Trading & Logistics",
    description:
      "Premier international merchant in Jakarta, Indonesia. Specializing in nutmeg, spices, commercial vegetables, olive oils, direct origin sourcing, and maritime ocean freight.",
    path: "/",
    keywords: [
      "food commodity trading",
      "Indonesian commodity export",
      "nutmeg export Jakarta",
      "spice trading company Indonesia",
      "bulk olive oil supplier",
      "agricultural export logistics",
      "B2B food commodities",
      "DUSON TRADING GROUP PT",
    ],
    ogImage: "/images/hero-bg.jpg",
  },
  about: {
    title: "About DUSON | Corporate Overview & Global Trading Heritage",
    description:
      "Learn about DUSON TRADING GROUP PT., established in 2022 in Jakarta. Discover our 4-year journey, 6 operational pillars, leadership governance, and global trade standards.",
    path: "/about",
    keywords: [
      "about DUSON",
      "Indonesian trading house",
      "agricultural trade history",
      "Jakarta export company",
      "ISO 22000 commodity exporter",
      "DUSON heritage",
    ],
    ogImage: "/images/charles-forerunner-3fPXt37X6UQ.jpg",
  },
  ourBusiness: {
    title: "Our Business Model | Integrated Agricultural Trading Architecture",
    description:
      "Explore DUSON's integrated business model: upstream origin sourcing, certified quality grading, bonded port logistics, and institutional trade finance.",
    path: "/our-business",
    keywords: [
      "commodity trading business model",
      "upstream agricultural aggregation",
      "food trade finance",
      "phytosanitary export assurance",
    ],
    ogImage: "/images/charles-forerunner-3fPXt37X6UQ.jpg",
  },
  ourApproach: {
    title: "Our Approach | Precision, Traceability & Trade Execution",
    description:
      "Disciplined execution in agricultural trade. Discover how DUSON combines farmer partnerships, multi-stage lab testing, and real-time container tracking.",
    path: "/our-approach",
    keywords: [
      "agricultural trade methodology",
      "commodity traceability",
      "food quality control Indonesia",
      "trade risk management",
    ],
    ogImage: "/images/campaign-creators-gMsnXqILjp4-workers meeting conference.jpg",
  },
  globalReach: {
    title: "Global Reach | Export Corridors Across 30+ Destination Markets",
    description:
      "Connecting Indonesian agricultural harvests to European, Middle Eastern, Asian, and American markets from Port Tanjung Priok and Belawan.",
    path: "/global-reach",
    keywords: [
      "global commodity export routes",
      "shipping from Jakarta",
      "Indonesian spice export destinations",
      "international food trade network",
    ],
    ogImage: "/images/sean-pollock-PhYq704ffdA-contact us building.jpg",
  },
  sustainability: {
    title: "Sustainability | Responsible Agriculture & Ecological Stewardship",
    description:
      "DUSON's commitment to regenerative agroforestry, fair compensation for 1,200+ partner farming families, and chemical-free cultivation standards.",
    path: "/sustainability",
    keywords: [
      "sustainable spice trading",
      "regenerative agroforestry Indonesia",
      "fair trade nutmeg",
      "organic agricultural exports",
    ],
    ogImage: "/images/vegetables.jpg",
  },
  commodities: {
    title: "Certified Food Commodities | Nutmeg, Spices, Vegetables & Olive Oils",
    description:
      "Browse DUSON's certified commodity portfolio. High-grade Indonesian nutmeg, whole spices, fresh export vegetables, and Mediterranean virgin olive oils.",
    path: "/commodities",
    keywords: [
      "agricultural commodities catalog",
      "buy Indonesian nutmeg bulk",
      "wholesale spices supplier",
      "commercial produce export",
      "bulk extra virgin olive oil",
    ],
    ogImage: "/images/nutmeg-spices.jpg",
  },
  nutmeg: {
    title: "Indonesian Nutmeg & Mace | ABCD, Sound & BWP Export Grades",
    description:
      "Premium Indonesian nutmeg (Myristica fragrans) and whole mace from Banda and Sulawesi. Moisture <10%, aflatoxin tested, supplied in 25kg/50kg jute bags.",
    path: "/commodities/nutmeg",
    keywords: [
      "Indonesian nutmeg export",
      "nutmeg ABCD grade",
      "Banda whole nutmeg",
      "mace blades supplier",
      "Myristica fragrans bulk",
      "aflatoxin certified nutmeg",
    ],
    ogImage: "/images/nutmeg-spices.jpg",
  },
  spices: {
    title: "Aromatic Spices & Pepper | Lampung Black, Muntok White & Cloves",
    description:
      "Export-grade Indonesian black pepper (ASTA), double-washed Muntok white pepper, Lalpari whole cloves, and Korintje Cassia cinnamon.",
    path: "/commodities/spices",
    keywords: [
      "Lampung black pepper ASTA",
      "Muntok white pepper wholesale",
      "Indonesian cloves Lalpari",
      "Korintje cinnamon bulk",
      "steam sterilized spices Indonesia",
    ],
    ogImage: "/images/nutmeg-spices.jpg",
  },
  vegetables: {
    title: "Export-Grade Commercial Vegetables | Fresh & Chilled Produce",
    description:
      "Highland Indonesian shallots (Bima Brebes), fresh ginger (Jahe Gajah), cabbage, and chili peppers dispatched in temperature-controlled reefers.",
    path: "/commodities/vegetables",
    keywords: [
      "Indonesian shallots export",
      "fresh ginger Jahe Gajah bulk",
      "commercial vegetable exporter",
      "chilled produce reefer shipping",
    ],
    ogImage: "/images/vegetables.jpg",
  },
  oliveOils: {
    title: "Bulk Virgin & Extra Virgin Olive Oils | Flexitanks & IBC Totes",
    description:
      "Cold-extracted Mediterranean Extra Virgin Olive Oil (acidity <0.3% & <0.8%) and Pure Virgin Oil for food processors, bottlers, and culinary brands.",
    path: "/commodities/olive-oils",
    keywords: [
      "bulk extra virgin olive oil",
      "EVOO flexitank supplier",
      "industrial olive oil IBC totes",
      "cold pressed olive oil bulk",
    ],
    ogImage: "/images/olive-oil.jpg",
  },
  trading: {
    title: "Trading Architecture | B2B Commodity Desks & Trade Finance",
    description:
      "Institutional commodity trading services: direct origin sourcing, export documentation, sovereign quarantine clearances, and flexible LC payment terms.",
    path: "/trading",
    keywords: [
      "commodity trading desk",
      "B2B food trade contracting",
      "Letter of Credit commodity trade",
      "export trade facilitation",
    ],
    ogImage: "/images/charles-forerunner-3fPXt37X6UQ.jpg",
  },
  sourcing: {
    title: "Direct Origin Sourcing | Indonesian Agricultural Aggregation",
    description:
      "Direct aggregation across 1,200+ partner farm families in Maluku, Sumatra, Java, and Sulawesi. Eliminating broker layers for total quality traceability.",
    path: "/trading/sourcing",
    keywords: [
      "agricultural origin sourcing",
      "Indonesian farm aggregation",
      "direct spice procurement",
      "farm gate commodity trading",
    ],
    ogImage: "/images/sean-pollock-PhYq704ffdA-contact us building.jpg",
  },
  export: {
    title: "Export & Customs Management | Phytosanitary & Sovereign Filings",
    description:
      "End-to-end export compliance: Certificate of Origin (Form D, E, AK, ICO), Indonesian Agricultural Quarantine phytosanitary clearance, and SGS assays.",
    path: "/trading/export",
    keywords: [
      "Indonesian export customs management",
      "phytosanitary certificate Indonesia",
      "Certificate of Origin Form D",
      "SGS pre-shipment inspection",
    ],
    ogImage: "/images/docusign-7RWBSYA9Rro-workers looking at computer.jpg",
  },
  qualityStandards: {
    title: "Quality & Standards | ISO 22000, HACCP, Halal & SGS Assays",
    description:
      "International quality assurance frameworks: ISO 22000:2018, HACCP, Halal MUI, GACC approval, and independent laboratory Certificates of Analysis.",
    path: "/trading/quality-standards",
    keywords: [
      "ISO 22000 commodity certification",
      "HACCP food safety Indonesia",
      "Halal MUI food export",
      "GACC approved enterprise",
    ],
    ogImage: "/images/campaign-creators-gMsnXqILjp4-workers meeting conference.jpg",
  },
  logistics: {
    title: "Logistics & Supply Chain | Ocean Shipping & Cold-Chain Dispatch",
    description:
      "Integrated maritime logistics operating from Port Tanjung Priok (Jakarta). Multimodal freight, reefer container monitoring, and global port delivery.",
    path: "/logistics",
    keywords: [
      "agricultural freight logistics",
      "ocean container shipping Jakarta",
      "Port Tanjung Priok export freight",
      "cold chain commodity shipping",
    ],
    ogImage: "/images/logistics-bg.jpg",
  },
  shipping: {
    title: "Ocean Container Shipping | Global Maritime Freight Corridors",
    description:
      "Contract liner space (20ft FCL, 40ft FCL, 40ft High Cube Reefer) from Jakarta to Northern Europe, Mediterranean, Middle East, and East Asia.",
    path: "/logistics/shipping",
    keywords: [
      "ocean container freight Indonesia",
      "20ft FCL spice container shipping",
      "reefer container shipping Jakarta",
      "Tanjung Priok liner booking",
    ],
    ogImage: "/images/logistics-bg.jpg",
  },
  transportation: {
    title: "Inland Haulage & Drayage Fleet | Port Tanjung Priok Operations",
    description:
      "GPS-monitored heavy transportation fleet linking regional harvest stations in Sumatra and Java with bonded export terminals at Port Tanjung Priok.",
    path: "/logistics/transportation",
    keywords: [
      "port drayage Jakarta",
      "inland agricultural haulage Indonesia",
      "bonded warehouse trucking",
    ],
    ogImage: "/images/sean-pollock-PhYq704ffdA-contact us building.jpg",
  },
  supplyChain: {
    title: "Cold-Chain Supply Architecture | Temperature-Controlled Transit",
    description:
      "Continuous cold-chain temperature management from harvest pre-cooling facilities to ocean reefer containers and destination port offloading.",
    path: "/logistics/supply-chain",
    keywords: [
      "cold chain supply chain Indonesia",
      "temperature controlled produce transit",
      "reefer container monitoring",
    ],
    ogImage: "/images/mario-gogh-VBLHICVh-lI-workers-in the office.jpg",
  },
  insights: {
    title: "Trade Insights & Market Intelligence | DUSON Analytical Desk",
    description:
      "Proprietary commodity briefings, Indonesian harvest outlooks, maritime freight trends, and global regulatory updates from our Jakarta research desk.",
    path: "/insights",
    keywords: [
      "commodity market insights",
      "Indonesian agricultural reports",
      "spice trade market intelligence",
      "ocean freight trends Southeast Asia",
    ],
    ogImage: "/images/mike-kononov-lFv0V3_2H6s-bulding night view.jpg",
  },
  commodityInsights: {
    title: "Indonesian Nutmeg Crop Outlook 2026/2027 | DUSON Agronomy Briefing",
    description:
      "In-depth analysis of 2026 harvest yields in Banda and Siaul, volatile oil synthesis, and stricter European aflatoxin import protocols.",
    path: "/insights/commodity-insights",
    keywords: [
      "nutmeg harvest outlook 2026",
      "Banda nutmeg crop report",
      "European aflatoxin regulations nutmeg",
      "spices export analysis",
    ],
    type: "article",
    ogImage: "/images/nutmeg-spices.jpg",
  },
  marketInsights: {
    title: "Southeast Asian Maritime Freight Fluctuations | Logistics Analysis",
    description:
      "Logistics report on container availability, ocean carrier consolidation, and locking in forward freight parity from Port Tanjung Priok.",
    path: "/insights/market-insights",
    keywords: [
      "Southeast Asia freight rates 2026",
      "Tanjung Priok container availability",
      "ocean shipping rate trends",
    ],
    type: "article",
    ogImage: "/images/logistics-bg.jpg",
  },
  tradeInsights: {
    title: "Mediterranean Olive Oil Harvest Yields & Bulk Flexitank Logistics",
    description:
      "Evaluating EVOO acid levels, early harvest forecasts, and industrial flexitank transportation advantages for international food processors.",
    path: "/insights/trade-insights",
    keywords: [
      "Mediterranean olive oil harvest 2026",
      "bulk EVOO flexitank logistics",
      "olive oil industrial pricing",
    ],
    type: "article",
    ogImage: "/images/olive-oil.jpg",
  },
  news: {
    title: "Corporate News & Announcements | DUSON TRADING GROUP PT.",
    description:
      "Official press releases, terminal capacity expansions, trade fair participations (Gulfood), and ISO 22000 recertification announcements.",
    path: "/insights/news",
    keywords: [
      "DUSON company news",
      "Gulfood trade delegation Indonesia",
      "Tanjung Priok terminal expansion",
    ],
    ogImage: "/images/campaign-creators-gMsnXqILjp4-workers meeting conference.jpg",
  },
  contact: {
    title: "Contact Commercial Desk | Jakarta HQ Trade & Procurement Office",
    description:
      "Contact DUSON TRADING GROUP PT. in Jakarta, Indonesia (+62 8222 3000 688). Request commodity quotations, freight schedules, and technical specifications.",
    path: "/contact",
    keywords: [
      "contact DUSON trading",
      "Jakarta commodity trade desk",
      "request commodity quote Indonesia",
      "DUSON phone number",
    ],
    ogImage: "/images/sean-pollock-PhYq704ffdA-contact us building.jpg",
  },
  faq: {
    title: "Frequently Asked Questions (FAQ) | Trade Terms, MOQs & Inspection",
    description:
      "Answers to common questions regarding Letters of Credit, container loading capacities, SGS pre-shipment inspections, and phytosanitary certificates.",
    path: "/faq",
    keywords: [
      "commodity trading FAQ",
      "Letter of Credit terms Indonesia",
      "nutmeg export MOQ",
      "phytosanitary certification FAQ",
    ],
    ogImage: "/images/charlesdeluvio-rRWiVQzLm7k-16 by 9 image.jpg",
  },
  downloads: {
    title: "Technical Downloads & Catalogs | Product Specs & Certificates",
    description:
      "Download official DUSON commodity specification sheets (PDF), corporate catalog, ISO 22000 certificates, and standard sales contract terms.",
    path: "/downloads",
    keywords: [
      "download commodity catalog",
      "nutmeg specification PDF",
      "ISO 22000 certificate download",
      "Incoterms 2020 trade guide",
    ],
    ogImage: "/images/docusign-7RWBSYA9Rro-workers looking at computer.jpg",
  },
  privacyPolicy: {
    title: "Privacy Policy | DUSON TRADING GROUP PT.",
    description:
      "Official privacy policy and corporate data protection guidelines for international trade inquiries and quotation requests.",
    path: "/privacy-policy",
    keywords: ["privacy policy DUSON", "data protection commodity trade"],
  },
  termsAndConditions: {
    title: "Terms & Conditions | International Sales Contract Framework",
    description:
      "Commercial terms, Incoterms 2020 rules, documentary credit parameters, and arbitration guidelines governing DUSON transactions.",
    path: "/terms-and-conditions",
    keywords: ["terms and conditions", "commodity sales contract terms", "Incoterms 2020"],
  },
};