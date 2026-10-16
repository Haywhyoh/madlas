import { siteConfig } from "./site-config";

export type ServiceArea = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lede: string;
  definition: string;
  neighborhoods: string;
  points: string[];
  steps: string[];
  mapQuery: string;
  mapEmbed?: string;
  mapTitle: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "lagos",
    name: "Lagos",
    metaTitle: "Steel Fabrication in Lagos",
    metaDescription:
      "Steel fabrication, metal fabrication, and steel construction for companies in Lagos. The office and workshop are in Ilepa, Ifo.",
    eyebrow: "Lagos clients",
    h1: "Steel Fabrication in Lagos",
    lede:
      "Madlas Global fabricates steel for companies in Lagos from the office and workshop in Ilepa, Ifo. Lagos clients start tanker, tank, frame, canopy, and tower jobs there.",
    definition:
      "Steel fabrication for Lagos is a workshop-and-site service: the steel is built at the Ilepa office and workshop, and steel construction is erected on sites for companies based in Lagos.",
    neighborhoods:
      "The yard is at Km 30 on the Abeokuta–Lagos Expressway, Ilepa, Ifo, on the Ogun side of the Lagos boundary. Companies in Agege, Alagbado, Abule Egba, and the wider Lagos corridor use this office when the job has to be fabricated and put up.",
    points: [
      "Office and workshop at Km 30, Abeokuta / Lagos Expressway, Ilepa, Ifo",
      "Steel fabrication and metal fabrication for Lagos companies are booked and built here",
      "Steel construction crews erect frames, canopies, and towers on Lagos sites",
    ],
    steps: [
      "Call or visit the Ilepa office with drawings and the site address.",
      "We confirm the steel, the span, and how the crew will reach the site.",
      "Fabrication happens in the workshop on the same yard.",
      "The same company erects the steel and hands the job over.",
    ],
    mapQuery: siteConfig.workshopMapQuery,
    mapEmbed: siteConfig.workshopMapEmbed,
    mapTitle: "Map of the Madlas Global office and workshop in Ilepa, Ifo",
  },
  {
    slug: "ogun",
    name: "Ogun",
    metaTitle: "Steel Fabrication in Ogun",
    metaDescription:
      "Metal fabrication and steel construction from the Madlas Global workshop in Ilepa, Ifo, Ogun State, on the Abeokuta–Lagos Expressway.",
    eyebrow: "Ogun workshop",
    h1: "Steel Fabrication in Ogun State",
    lede:
      "The Madlas Global office and workshop are at Km 30 on the Abeokuta–Lagos Expressway, Ilepa, Ifo. This is where tankers, tanks, frames, bodies, and tower steel are cut, welded, and painted.",
    definition:
      "Metal fabrication in Ogun is a workshop process at Ilepa, Ifo. Steel construction is what happens after that steel leaves the workshop and is erected on a site.",
    neighborhoods:
      "Ifo is an Ogun town on the expressway between Lagos and Abeokuta. Ilepa is the stretch where the workshop sits, about 30 kilometres along that road. Haulage from this yard reaches Lagos quickly and continues to sites in other states where we have erected steel.",
    points: [
      "Office and workshop at Km 30, Abeokuta / Lagos Expressway, Ilepa, Ifo",
      "Fuel tanker shells, storage tanks, and truck bodies are fabricated here",
      "Finished steel leaves this yard for erection across Nigeria",
    ],
    steps: [
      "The office at the workshop agrees the job and the drawings.",
      "Plate, sections, and sheet are cut and welded in the Ifo workshop.",
      "Ladders, fittings, and paint are finished before the steel moves.",
      "Crews erect the steel on site and stay through handover.",
    ],
    mapQuery: siteConfig.workshopMapQuery,
    mapEmbed: siteConfig.workshopMapEmbed,
    mapTitle: "Map of the Madlas Global office and workshop in Ilepa, Ifo, Ogun State",
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
