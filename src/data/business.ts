// ⚠️ PLACEHOLDER CONTACT DETAILS — swap phone/email before launch.
export const business = {
  businessName: "Glasgow Solar Panel Cleaning",
  alternateName: "Glasgow Solar Panel Cleaning",
  tagline:
    "Professional solar panel cleaning in Glasgow — pure water cleaning, bird proofing and solar panel checks for homes and businesses.",
  gbpCategory: "Solar Energy Equipment Supplier",
  phone: "+44 7000 000000",
  phoneDisplay: "+44 7000 000000",
  phoneLocal: "07000 000000",
  trackingPhone: null as string | null,
  trackingPhoneLocal: null as string | null,
  email: "hello@solarpanelcleaningglasgow.co.uk",
  siteUrl: "https://solarpanelcleaningglasgow.co.uk",
  facebookUrl: "",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Solar+Panel+Cleaning+Glasgow",
  whatsappUrl: "https://wa.me/447000000000",
  primaryCity: "Glasgow",
  secondaryCity: "Lanarkshire",
  region: "Greater Glasgow",
  geoRegion: "GB-GLG",
  address: {
    addressLocality: "Glasgow",
    addressRegion: "Glasgow City",
    addressCountry: "GB",
  },
  mapCenter: [55.8642, -4.2518] as [number, number],
  serviceAreaPolygon: [
    [55.72, -4.6],
    [55.72, -3.95],
    [56.0, -3.95],
    [56.0, -4.6],
    [55.72, -4.6],
  ] as [number, number][],
  assets: {
    hero: "/hero.jpg",
    logo: "/logo.png",
    about: "/about.jpg",
    gallery: [
      "/gal_01.jpg",
      "/gal_02.jpg",
      "/gal_03.jpg",
      "/gal_04.jpg",
      "/gal_05.jpg",
      "/gal_06.jpg",
    ],
  },
  serviceTypes: [
    "Solar panel cleaning",
    "Domestic solar panel cleaning",
    "Commercial solar panel cleaning",
    "Ground-mounted and farm solar panel cleaning",
    "Solar panel maintenance plans",
    "Solar panel bird proofing",
    "Solar panel inspections",
  ],
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  googleAnalyticsId: "",
  googleAdsId: "",
};

export const brandName = () => business.alternateName;
export const fullBusinessName = () => business.businessName;
export const citiesLabel = () => business.primaryCity;

export const homepageTitle = () =>
  `Solar Panel Cleaning Glasgow | ${business.businessName}`;

export const homepageDescription = () =>
  `Solar panel cleaning in Glasgow using pure water and soft brushes. Domestic and commercial panels, bird proofing and checks across Greater Glasgow. Free quotes.`;

export const absoluteUrl = (path = ""): string => {
  if (!path) return `${business.siteUrl}/`;
  return `${business.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

export const truncateMeta = (text: string, maxLength = 155): string => {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).replace(/[\s,.;:-]+$/, "")}…`;
};

export const SITE_URL = business.siteUrl;
