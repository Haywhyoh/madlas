import { mapsSearchUrl, placeQuery, siteConfig } from "./site-config";
import { absoluteUrl } from "./seo";

/** Organization structured data used site-wide. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: [
      siteConfig.shortName,
      "Madlas Global Investment Company",
      siteConfig.legalName,
    ],
    slogan: siteConfig.tagline,
    identifier: siteConfig.registrationNumber,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.affiliateOf,
    },
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logoSquare),
    image: [
      absoluteUrl(siteConfig.ogImage),
      absoluteUrl(siteConfig.logo),
    ],
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: Object.values(siteConfig.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "sales",
        email: siteConfig.email,
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneSecondary,
        contactType: "customer service",
        email: siteConfig.email,
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        availableLanguage: ["English"],
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    location: {
      "@type": "Place",
      name: "Madlas Global Workshop",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.factoryAddress.street,
        addressLocality: siteConfig.factoryAddress.city,
        addressRegion: siteConfig.factoryAddress.region,
        addressCountry: siteConfig.factoryAddress.country,
      },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    knowsAbout: [
      "Steel fabrication",
      "Metal fabrication",
      "Steel construction",
      "Metal construction",
      "Fuel tanker fabrication",
      "Storage tank fabrication",
      "Steel structures and roof trusses",
      "Filling station construction",
      "Truck body building",
      "Elevated water tank towers",
    ],
  };
}

/** Standalone LocalBusiness node so location parsers do not miss it inside Organization. */
export function localBusinessJsonLd() {
  const officeQuery = placeQuery(siteConfig.address);
  const workshopQuery = placeQuery(siteConfig.factoryAddress);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    image: [absoluteUrl(siteConfig.ogImage), absoluteUrl(siteConfig.logo)],
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: siteConfig.description,
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    hasMap: mapsSearchUrl(officeQuery),
    areaServed: [
      { "@type": "City", name: "Lagos" },
      { "@type": "AdministrativeArea", name: "Ogun State" },
      { "@type": "Country", name: "Nigeria" },
    ],
    location: [
      {
        "@type": "Place",
        name: "Madlas Global office",
        hasMap: mapsSearchUrl(officeQuery),
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
      },
      {
        "@type": "Place",
        name: "Madlas Global workshop",
        hasMap: mapsSearchUrl(workshopQuery),
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.factoryAddress.street,
          addressLocality: siteConfig.factoryAddress.city,
          addressRegion: siteConfig.factoryAddress.region,
          addressCountry: siteConfig.factoryAddress.country,
        },
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  };
}

export function webPageJsonLd(page: {
  title: string;
  description: string;
  path: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.title,
    description: page.description,
    inLanguage: "en",
    dateModified: page.dateModified,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#localbusiness` },
    primaryImageOfPage: absoluteUrl(siteConfig.ogImage),
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

/** WebSite schema linking the site to the organization. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  authorUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [absoluteUrl(article.image)],
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      "@type": "Person",
      name: article.author ?? siteConfig.name,
      ...(article.authorUrl ? { url: absoluteUrl(article.authorUrl) } : {}),
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: absoluteUrl(article.path),
  };
}

export function serviceJsonLd(service: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    url: absoluteUrl(service.path),
  };
}

/** Small helper component-friendly JSON-LD <script> renderer prop. */
export function jsonLdScriptProps(data: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
