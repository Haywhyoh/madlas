export const siteConfig = {
  name: "Madlas Global",
  legalName: "Madlas Global Investment Company Limited",
  shortName: "Madlas",
  /** CAC (Corporate Affairs Commission) registration number, per company letterhead. */
  registrationNumber: "RC 630568",
  /** Parent/affiliate company, per company letterhead. */
  affiliateOf: "Adelak Sho. Ent.",
  tagline: "Steel Fabrication in Lagos",
  /** Homepage <title>. Kept under 60 characters so it is not cut off in search results. */
  title: "Steel Fabrication & Construction in Lagos | Madlas Global",
  /** Meta description. Kept under 155 characters so it is not cut off in search results. */
  description:
    "Madlas Global is a Lagos company for steel fabrication, metal fabrication, steel construction, and metal construction. Office in Agege, workshop in Ogun.",
  /** Visible on the fabrication guide and in Article schema. */
  contentUpdated: "2026-10-16",
  url: "https://www.madlasglobal.com",
  /** Primary brand mark (header, footer, schema.org logo). */
  logo: "/images/mgil_logo.jpeg",
  /** Square padded mark for PWA / apple touch / schema fallbacks. */
  logoSquare: "/images/logo.png",
  /** Open Graph / Twitter share image (1200×630). */
  ogImage: "/images/og-cover.jpg",
  locale: "en_NG",
  themeColor: "#0B0B0D",
  /** Mobile line, per company letterhead. */
  phone: "+234 802 320 1933",
  phoneHref: "+2348023201933",
  /** WhatsApp line for quotes and inquiries. */
  whatsapp: "+234 810 479 1139",
  whatsappHref: "2348104791139",
  /** Office landline, per company letterhead. */
  phoneSecondary: "+234 702 504 3686",
  phoneSecondaryHref: "+2347025043686",
  email: "madlasglobal@yahoo.com",
  /** Registered office address, per company letterhead. */
  address: {
    street: "6 Ifelodun Street, Off Yusuff Drive, Kollington, Alagbado",
    city: "Agege",
    region: "Lagos",
    postalCode: "P.O. Box 4547",
    country: "Nigeria",
  },
  /** Factory / plant address, per company letterhead. */
  factoryAddress: {
    street: "Km. 30, Abeokuta / Lagos Expressway, Ilepa",
    city: "Ifo",
    region: "Ogun State",
    country: "Nigeria",
  },
  /** Exact query for the workshop map pin. */
  workshopMapQuery:
    "Klm 30 Lagos-Abeokuta Expy, Way, Ilepa 112104, Ogun State",
  founded: "1994",
  social: {
    facebook: "https://facebook.com/madlasglobal",
    twitter: "https://twitter.com/madlasglobal",
    linkedin: "https://linkedin.com/company/madlasglobal",
    instagram: "https://instagram.com/madlasglobal",
    youtube: "https://youtube.com/@madlasglobal",
  },
  keywords: [
    "Madlas",
    "Madlas Global",
    "Madlas Global Investment Company",
    "Madlas Global Investment Company Limited",
    "steel fabrication",
    "metal fabrication",
    "steel construction",
    "metal construction",
    "steel fabrication Lagos",
    "metal fabrication Lagos",
    "steel construction Nigeria",
    "metal construction Nigeria",
    "steel fabrication company Nigeria",
    "steel fabricators Nigeria",
  ],
} as const;

export function placeQuery(place: {
  street: string;
  city: string;
  region: string;
  country: string;
}) {
  return `${place.street}, ${place.city}, ${place.region}, ${place.country}`;
}

/** Opens a Google Maps search for a published address. */
export function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsEmbedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
}

export const quoteWhatsappMessage =
  "Hello Madlas Global, I would like to request a quote.";

/** Opens a WhatsApp chat. Pass a message to prefill the composer. */
export function whatsappUrl(message: string = quoteWhatsappMessage) {
  const base = `https://wa.me/${siteConfig.whatsappHref}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
] as const;
