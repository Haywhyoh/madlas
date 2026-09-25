export const siteConfig = {
  name: "Madlas Global",
  legalName: "Madlas Global Investment Company Limited",
  shortName: "Madlas",
  /** CAC (Corporate Affairs Commission) registration number, per company letterhead. */
  registrationNumber: "RC 630568",
  /** Parent/affiliate company, per company letterhead. */
  affiliateOf: "Adelak Sho. Ent.",
  tagline: "The Material of Choice for Toughness & Reliability",
  description:
    "Madlas Global Investment Company Limited (RC 630568), an affiliate of Adelak Sho. Ent., is a Nigerian steel structural fabrication, tanks & trucks, and construction engineering company operating from Lagos and Ogun State.",
  url: "https://www.madlasglobal.com",
  ogImage: "/images/og-cover.jpg",
  locale: "en_NG",
  themeColor: "#0B0B0D",
  /** Mobile line, per company letterhead. */
  phone: "+234 802 320 1933",
  phoneHref: "+2348023201933",
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
  founded: "1994",
  social: {
    facebook: "https://facebook.com/madlasglobal",
    twitter: "https://twitter.com/madlasglobal",
    linkedin: "https://linkedin.com/company/madlasglobal",
    instagram: "https://instagram.com/madlasglobal",
    youtube: "https://youtube.com/@madlasglobal",
  },
  keywords: [
    "steel structural fabricators",
    "tanks and trucks",
    "construction engineers",
    "structural steel Nigeria",
    "steel fabrication company Lagos",
    "steel plant Ogun State",
    "Madlas Global",
    "Madlas Global Investment Company Limited",
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
