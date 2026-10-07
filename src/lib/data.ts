export type WorkImage = {
  src: string;
  alt: string;
};

export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceSpec = {
  label: string;
  value: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  /** Main SEO target keyword for this service's dedicated page. */
  primaryKeyword: string;
  /** Supporting long-tail keywords targeted on the service page. */
  secondaryKeywords: string[];
  /** Optimized <title> for the dedicated service page. */
  metaTitle: string;
  /** Optimized meta description for the dedicated service page. */
  metaDescription: string;
  shortDescription: string;
  description: string;
  /** Longer-form paragraphs for the dedicated service page. */
  overview: string[];
  icon: string;
  points: string[];
  /** Detailed feature cards for the dedicated service page. */
  features: ServiceFeature[];
  /** Industries / use cases this service serves. */
  applications: string[];
  /** Quick-reference spec sheet shown on the dedicated service page. */
  specifications: ServiceSpec[];
  /** Fabrication/erection process specific to this service. */
  process: ServiceProcessStep[];
  /** Service-specific FAQs (also rendered as FAQPage structured data). */
  faqs: Faq[];
  images: WorkImage[];
};

export const services: Service[] = [
  {
    slug: "fuel-tanker-fabrication",
    title: "Fuel Tanker & Tanker Trailer Fabrication",
    shortDescription:
      "New semi-trailer tankers, with ladders, chassis, and workshop painting.",
    description:
      "We build new fuel tanker trailers in the workshop: tank shells, ladders, chassis, landing legs, and painted finishes, ready to couple to a truck head.",
    icon: "truck",
    primaryKeyword: "fuel tanker fabrication",
    secondaryKeywords: [
      "tanker trailer manufacturer",
      "petroleum tanker trailer",
      "semi-trailer tanker fabrication Nigeria",
      "tanker chassis and ladder fabrication",
    ],
    metaTitle:
      "Fuel Tanker Fabrication & Tanker Trailer Manufacturer | Madlas Global",
    metaDescription:
      "Madlas Global fabricates fuel tanker trailers in our Ogun State workshop — tank shells, chassis, ladders, landing legs, and painted finishes, ready to couple to a truck head.",
    overview: [
      "Madlas Global fabricates new semi-trailer fuel tankers from the ground up in our Ogun State workshop. Every tank shell is cut, rolled, and welded in-house, then mounted onto a heavy-duty chassis built to carry petroleum products, diesel, and other bulk liquids across Nigerian roads.",
      "Each trailer leaves our yard with ladders and walkways for safe top access, landing legs for stand-alone parking, and a full workshop paint finish. We build to the axle configuration, compartment layout, and capacity your haulage operation needs, then quality-check the completed unit before it is coupled to a truck head.",
    ],
    points: [
      "New semi-trailer tankers",
      "Ladders and walkways",
      "Chassis and landing legs",
      "Workshop painting",
    ],
    features: [
      {
        title: "Rolled & Welded Tank Shells",
        description:
          "Steel plate is cut, rolled, and seam-welded in-house to form single or multi-compartment tanker shells built for petroleum and bulk liquid haulage.",
      },
      {
        title: "Heavy-Duty Chassis Fabrication",
        description:
          "Tandem and tri-axle semi-trailer chassis engineered to carry a full tanker load on Nigerian depot and highway routes.",
      },
      {
        title: "Ladders, Walkways & Landing Legs",
        description:
          "Top-mount ladders, catwalks, and landing legs are fitted for safe loading access and stand-alone parking without a truck head.",
      },
      {
        title: "Workshop Painting & Finishing",
        description:
          "Degreasing, priming, and a full painted finish are completed before the trailer leaves our workshop.",
      },
    ],
    applications: [
      "Petroleum (PMS/AGO/DPK) distribution",
      "Depot-to-retail fuel haulage",
      "Lubricant & bulk liquid transport",
      "Filling station fuel supply",
    ],
    specifications: [
      { label: "Build Type", value: "New semi-trailer tanker, built to order" },
      { label: "Compartments", value: "Single or multi-compartment tank shell" },
      { label: "Chassis", value: "Tandem/tri-axle chassis with landing legs" },
      { label: "Access", value: "Top ladder, walkway, and handrails" },
      { label: "Finish", value: "Degreased, primed, and workshop-painted" },
    ],
    process: [
      {
        title: "Shell Rolling & Welding",
        description:
          "Steel plate is rolled to the tank diameter and seam-welded into the tanker shell and end caps.",
      },
      {
        title: "Chassis Fabrication",
        description:
          "The semi-trailer chassis is built and matched to the tank shell and axle configuration.",
      },
      {
        title: "Fittings & Access",
        description:
          "Ladders, walkways, landing legs, and handrails are welded and bolted into place.",
      },
      {
        title: "Painting & Quality Check",
        description:
          "The trailer is degreased, primed, painted, and inspected before it is coupled to a truck head.",
      },
    ],
    faqs: [
      {
        question: "Can you build a tanker trailer to a specific capacity?",
        answer:
          "Yes. We build the tank shell, compartment layout, and chassis to the capacity and axle configuration your haulage operation requires.",
      },
      {
        question:
          "Do your tanker trailers come with ladders and landing legs fitted?",
        answer:
          "Every tanker trailer we fabricate leaves the workshop with ladders, walkways, and landing legs fitted, plus a full painted finish.",
      },
      {
        question: "Can you supply a trailer without a truck head?",
        answer:
          "Yes, we fabricate the semi-trailer tanker on its own. We can also assist with coupling and servicing when the trailer is paired with a truck head.",
      },
    ],
    images: [
      {
        src: "/images/tanker-trailer-red-rear-ladder.jpg",
        alt: "Red tanker trailer, rear view with a ladder",
      },
      {
        src: "/images/tanker-trailer-white-blue-stripe-chassis.jpg",
        alt: "White tanker trailer with a blue stripe, axles not yet fitted",
      },
      {
        src: "/images/tanker-trailer-red-side-landing-legs.jpg",
        alt: "Red tanker trailer, side view with landing legs",
      },
      {
        src: "/images/tanker-trailer-red-front-ladder.jpg",
        alt: "Red tanker trailer, front view with a ladder",
      },
      {
        src: "/images/tanker-trailer-truck-head-servicing.jpg",
        alt: "White tanker trailer coupled to a blue truck head while mechanics work",
      },
      {
        src: "/images/tanker-trailer-white-blue-stripe-chassis-2.jpg",
        alt: "Second view of a white tanker trailer with a blue stripe on its chassis",
      },
    ],
  },
  {
    slug: "storage-tank-fabrication",
    title: "Storage Tank Fabrication",
    shortDescription:
      "Vertical and horizontal steel tanks fabricated and painted in the workshop.",
    description:
      "We fabricate vertical and horizontal steel storage tanks, from shell and end fabrication through to painted tanks ready to leave the workshop.",
    icon: "pipe",
    points: [
      "Vertical steel tanks",
      "Horizontal steel tanks",
      "Ladders and fittings",
      "Workshop painting",
    ],
    images: [
      {
        src: "/images/steel-storage-tank-red-workshop.jpg",
        alt: "Red storage tank lying on its side in the workshop, with a tyre in front",
      },
      {
        src: "/images/vertical-storage-tank-red-ladder.jpg",
        alt: "Tall red storage tank with a ladder",
      },
      {
        src: "/images/steel-storage-tank-red-horizontal.jpg",
        alt: "Red horizontal storage tank in the workshop",
      },
      {
        src: "/images/steel-storage-tank-black-horizontal.jpg",
        alt: "Black horizontal steel storage tank under a workshop roof",
      },
      {
        src: "/images/steel-storage-tank-red-end-cap.jpg",
        alt: "End view of a red steel storage tank",
      },
    ],
  },
  {
    slug: "steel-structures-and-roof-trusses",
    title: "Steel Structures & Roof Trusses",
    shortDescription:
      "Warehouses, portal frames, and building roofs in structural steel.",
    description:
      "We fabricate and erect warehouse portal frames, roof trusses, and steel roofs for halls and multi-storey buildings, from columns on a cleared site to trusses going up over a slab.",
    icon: "beam",
    points: [
      "Warehouse portal frames",
      "Roof trusses",
      "Building steel roofs",
      "Site erection",
    ],
    images: [
      {
        src: "/images/steel-roof-trusses-two-storey-building.jpg",
        alt: "Two-storey block building with red steel roof trusses",
      },
      {
        src: "/images/steel-portal-frame-warehouse-erection.jpg",
        alt: "Red steel portal frame standing in tall grass",
      },
      {
        src: "/images/steel-truss-roof-warehouse-installation.jpg",
        alt: "Grey steel truss roof going up, with workers on a concrete slab",
      },
      {
        src: "/images/steel-columns-roof-trusses-red.jpg",
        alt: "Red steel columns with roof trusses and a building behind",
      },
      {
        src: "/images/steel-portal-frame-hall-construction.jpg",
        alt: "Red-brown portal frame on a cleared site",
      },
      {
        src: "/images/steel-portal-frame-site-erection.jpg",
        alt: "Red steel portal frame during site erection",
      },
      {
        src: "/images/steel-truss-warehouse-frame-grey.jpg",
        alt: "Grey steel warehouse frame under construction",
      },
      {
        src: "/images/steel-columns-roof-purlins-dark.jpg",
        alt: "Steel columns and roof purlins with a building behind",
      },
    ],
  },
  {
    slug: "filling-station-construction",
    title: "Filling Station Construction & Renovation",
    shortDescription:
      "Canopies and station works, from stripped forecourts to completed stations.",
    description:
      "We build and renovate filling stations: stripping old canopies, fabricating new canopy steel, and completing forecourt stations ready for use.",
    icon: "flame",
    points: [
      "Canopy fabrication",
      "Station renovation",
      "Forecourt steelwork",
      "Completed station canopies",
    ],
    images: [
      {
        src: "/images/filling-station-canopy-renovation.jpg",
        alt: "Old filling station canopy stripped for renovation",
      },
      {
        src: "/images/northwest-filling-station-completed-1.jpg",
        alt: "Completed green Northwest filling station",
      },
      {
        src: "/images/northwest-filling-station-completed-2.jpg",
        alt: "Northwest filling station from a second angle",
      },
      {
        src: "/images/filling-station-canopy-renovation-2.jpg",
        alt: "Stripped filling station canopy from the front during renovation",
      },
      {
        src: "/images/filling-station-canopy-construction.jpg",
        alt: "New steel filling station canopy under construction",
      },
    ],
  },
  {
    slug: "truck-body-building",
    title: "Truck Body & Box Van Building",
    shortDescription:
      "Enclosed cargo bodies and box vans built onto truck chassis.",
    description:
      "We build enclosed cargo bodies and box vans, including white box bodies with rear double doors, fitted to light truck chassis in the workshop.",
    icon: "layers",
    points: [
      "Enclosed cargo bodies",
      "Box van bodies",
      "Rear double doors",
      "Bodies fitted to chassis",
    ],
    images: [
      {
        src: "/images/box-truck-body-white-rear-doors.jpg",
        alt: "White box truck, rear double doors",
      },
      {
        src: "/images/box-truck-body-white-cab-front.jpg",
        alt: "White box truck, cab front",
      },
      {
        src: "/images/box-truck-body-white-side.jpg",
        alt: "White box truck body seen from the cab side",
      },
      {
        src: "/images/cargo-trailer-body-grey.jpg",
        alt: "Grey enclosed cargo trailer body",
      },
    ],
  },
  {
    slug: "elevated-water-tank-towers",
    title: "Elevated Water Tank Towers & Platforms",
    shortDescription:
      "Steel tower stands with cage ladders and top platforms.",
    description:
      "We fabricate and erect elevated steel tower stands for water tanks, with caged ladders and railed platforms at the top.",
    icon: "building",
    points: [
      "Steel tower stands",
      "Cage ladders",
      "Top platforms and railings",
      "Site erection",
    ],
    images: [
      {
        src: "/images/elevated-steel-tower-platform-cage-ladder-1.jpg",
        alt: "Red steel tower with a caged ladder and top platform",
      },
      {
        src: "/images/elevated-steel-tower-platform-cage-ladder-2.jpg",
        alt: "The same red steel tower from another angle",
      },
    ],
  },
];

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export const stats: Stat[] = [
  { label: "Years of Excellence", value: 30, suffix: "+" },
  { label: "Skilled Professionals", value: 120, suffix: "+" },
  { label: "Projects Delivered", value: 850, suffix: "+" },
  { label: "Countries Served", value: 25, suffix: "+" },
];

export type Industry = {
  title: string;
  description: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    title: "Construction & Infrastructure",
    description: "Structural frames, rebar, and cladding for landmark builds.",
    icon: "building",
  },
  {
    title: "Oil & Gas",
    description: "Pressure-rated piping and platforms for demanding sites.",
    icon: "flame",
  },
  {
    title: "Automotive & Transport",
    description: "High-tolerance stamped components at production scale.",
    icon: "truck",
  },
  {
    title: "Energy & Power",
    description: "Towers, brackets, and enclosures for energy infrastructure.",
    icon: "bolt",
  },
  {
    title: "Marine & Shipbuilding",
    description: "Corrosion-resistant steel engineered for harsh marine use.",
    icon: "anchor",
  },
  {
    title: "Manufacturing & OEM",
    description: "Custom components integrated into client production lines.",
    icon: "gear",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Raw Material Sourcing",
    description:
      "We source certified, high-grade steel billet and coil from vetted global mills to guarantee consistent quality from day one.",
  },
  {
    step: "02",
    title: "Precision Engineering",
    description:
      "Our engineers translate specifications into production-ready designs using CAD/CAM modelling and simulation.",
  },
  {
    step: "03",
    title: "Fabrication & Finishing",
    description:
      "Advanced cutting, welding, forming, and coating lines shape raw steel into finished, protected components.",
  },
  {
    step: "04",
    title: "Testing & Delivery",
    description:
      "Every batch is lab-tested and certified before secure packaging and on-time delivery to your site or port.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  /** Optional headshot path under /public (e.g. "/team/afeez.jpg"). Falls back to initials. */
  image?: string;
  /** Shown in the homepage leadership strip. */
  featured?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Alhaji A.O. Shorunke",
    role: "CEO / Project Director",
    initials: "AOS",
    image: "/images/CEO_madlasglobal.jpeg",
    featured: true,
  },
  {
    name: "Saheed Raheem",
    role: "Head of Design and Detailing",
    initials: "SR",
    image: "/images/raheem_saheed.jpeg",
    featured: true,
  },
  {
    name: "Monsuru Shorunke",
    role: "Admin / Workshop Manager",
    initials: "MS",
    image: "/images/monsuru.jpeg",
    featured: true,
  },
  {
    name: "Afeez Ogunbunmi",
    role: "Head of Contractor",
    initials: "AO",
    image: "/images/ogunbumi_afeez.jpeg",
    featured: true,
  },
  {
    name: "Rafiu Moshood",
    role: "Procurement / Purchasing Manager",
    initials: "RM",
    image: "/images/rafiu_moshood.jpeg",
  },
  {
    name: "Abiola Shorunke",
    role: "Assistant to Admin / Workshop Manager",
    initials: "AS",
    image: "/images/afeez_shorunke.jpeg",
  },
  {
    name: "Isiaka Bolaji",
    role: "Secretary",
    initials: "IB",
    image: "/images/bolajii-secretary.jpeg",
  },
  {
    name: "Alao Cyprian",
    role: "Workshop Coordinator",
    initials: "AC",
  },
];

export const featuredTeam = team.filter((member) => member.featured);

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Madlas Global delivered our structural steel order two weeks ahead of schedule without compromising an inch of tolerance. Their QA reports gave our engineers complete confidence.",
    name: "Robert Hayes",
    role: "Procurement Director, Hayes Construction Group",
    initials: "RH",
  },
  {
    quote:
      "We switched our pipe supply to Madlas three years ago and haven't looked back. Certifications are always in order and the surface coatings have held up beautifully offshore.",
    name: "Linda Osei",
    role: "Operations Manager, Osei Energy Ltd.",
    initials: "LO",
  },
  {
    quote:
      "Their engineering team helped us redesign a bracket assembly that cut our material cost by 18% while improving strength. That's a true manufacturing partner.",
    name: "Marcus Chen",
    role: "Plant Manager, Chen Industrial Works",
    initials: "MC",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  summary: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "fuel-tanker-trailers",
    title: "Fuel Tanker Trailers",
    category: "Tanker Fabrication",
    location: "Workshop, Ogun State",
    year: "2026",
    summary:
      "New semi-trailer tankers with ladders, chassis, landing legs, and workshop painting.",
    image: "/images/tanker-trailer-red-side-landing-legs.jpg",
  },
  {
    slug: "northwest-filling-station",
    title: "Northwest Filling Station",
    category: "Filling Station",
    location: "Nigeria",
    year: "2026",
    summary:
      "Station canopy works taken from a stripped forecourt through to the completed Northwest canopy.",
    image: "/images/northwest-filling-station-completed-1.jpg",
  },
  {
    slug: "warehouse-portal-frames",
    title: "Warehouse Portal Frames",
    category: "Steel Structures",
    location: "Nigeria",
    year: "2026",
    summary:
      "Portal frames and roof trusses erected for warehouse and hall structures.",
    image: "/images/steel-portal-frame-warehouse-erection.jpg",
  },
  {
    slug: "two-storey-roof-trusses",
    title: "Two-Storey Roof Trusses",
    category: "Steel Structures",
    location: "Nigeria",
    year: "2026",
    summary:
      "Red steel roof trusses set over a two-storey block building.",
    image: "/images/steel-roof-trusses-two-storey-building.jpg",
  },
  {
    slug: "steel-storage-tanks",
    title: "Steel Storage Tanks",
    category: "Storage Tanks",
    location: "Workshop, Ogun State",
    year: "2026",
    summary:
      "Vertical and horizontal steel storage tanks fabricated and painted in the workshop.",
    image: "/images/steel-storage-tank-red-workshop.jpg",
  },
  {
    slug: "box-van-bodies",
    title: "Box Van Bodies",
    category: "Truck Body",
    location: "Workshop, Ogun State",
    year: "2026",
    summary:
      "Enclosed white cargo bodies with rear double doors, built onto light truck chassis.",
    image: "/images/box-truck-body-white-rear-doors.jpg",
  },
  {
    slug: "elevated-tower-platforms",
    title: "Elevated Tower Platforms",
    category: "Water Tower",
    location: "Nigeria",
    year: "2026",
    summary:
      "Steel tower stands with caged ladders and top platforms.",
    image: "/images/elevated-steel-tower-platform-cage-ladder-1.jpg",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "guide-to-choosing-structural-steel-grades",
    title: "A Practical Guide to Choosing Structural Steel Grades",
    excerpt:
      "Understanding yield strength, ductility, and cost trade-offs is essential before specifying steel for your next build. Here's how our engineers approach grade selection.",
    category: "Engineering",
    date: "2026-08-18",
    readTime: "6 min read",
    author: "Amara Chukwu",
  },
  {
    slug: "why-mill-certification-matters",
    title: "Why Mill Test Certification Matters More Than Ever",
    excerpt:
      "Certified mill test reports protect your project from liability and downtime. We break down what to look for and how Madlas ensures full traceability.",
    category: "Quality & Compliance",
    date: "2026-07-02",
    readTime: "5 min read",
    author: "Grace Adeyemi",
  },
  {
    slug: "future-of-sustainable-steel-manufacturing",
    title: "The Future of Sustainable Steel Manufacturing",
    excerpt:
      "Electric arc furnaces, recycled feedstock, and energy-efficient rolling lines are reshaping the industry. Here's how Madlas is investing in a lower-carbon future.",
    category: "Industry Insights",
    date: "2026-05-27",
    readTime: "7 min read",
    author: "Daniel Okafor",
  },
  {
    slug: "steel-vs-aluminum-industrial-projects",
    title: "Steel vs. Aluminum: Choosing the Right Metal for Industrial Projects",
    excerpt:
      "Weight, cost, corrosion resistance, and strength all factor into the steel-versus-aluminum decision. We compare the two for common industrial use cases.",
    category: "Engineering",
    date: "2026-04-11",
    readTime: "5 min read",
    author: "Femi Balogun",
  },
  {
    slug: "logistics-of-exporting-steel-globally",
    title: "The Logistics Behind Exporting Steel to 25+ Countries",
    excerpt:
      "Moving thousands of tons of steel across borders requires precision logistics. A behind-the-scenes look at how Madlas ships globally without delays.",
    category: "Operations",
    date: "2026-03-03",
    readTime: "4 min read",
    author: "Daniel Okafor",
  },
  {
    slug: "top-5-signs-you-need-a-new-steel-supplier",
    title: "Top 5 Signs It's Time to Switch Steel Suppliers",
    excerpt:
      "Missed deadlines, inconsistent certifications, and poor communication are red flags. Here's a checklist for evaluating whether your current supplier is holding you back.",
    category: "Industry Insights",
    date: "2026-01-20",
    readTime: "4 min read",
    author: "Grace Adeyemi",
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  specs: string[];
  icon: string;
};

export const products: Product[] = [
  {
    slug: "structural-steel-beams",
    name: "Structural Steel Beams & Columns",
    category: "Structural Steel",
    description:
      "I-beams, H-beams, and columns rolled to precise tolerances for load-bearing construction applications.",
    specs: ["Grades: A36, A572, S355", "Lengths up to 18m", "Custom drilling & cutting"],
    icon: "beam",
  },
  {
    slug: "seamless-welded-pipes",
    name: "Seamless & Welded Steel Pipes",
    category: "Pipes & Tubes",
    description:
      "API 5L and ASTM certified pipe for oil & gas, water transport, and structural piling applications.",
    specs: ["Diameters: 1/2\" - 48\"", "Schedules 10 - XXS", "Anti-corrosion coating available"],
    icon: "pipe",
  },
  {
    slug: "hot-rolled-steel-plates",
    name: "Hot-Rolled Steel Plates & Sheets",
    category: "Sheet & Plate",
    description:
      "Flat-rolled steel in a range of gauges for shipbuilding, cladding, and heavy fabrication.",
    specs: ["Thickness: 1mm - 100mm", "Widths up to 3m", "Mill or custom cut lengths"],
    icon: "layers",
  },
  {
    slug: "reinforcement-bars",
    name: "Reinforcement Bars (Rebar)",
    category: "Structural Steel",
    description:
      "Deformed reinforcement bars engineered for concrete reinforcement in high-load structures.",
    specs: ["Grades: 40, 60, 75", "Diameters: 8mm - 40mm", "Bundled or cut-to-length"],
    icon: "gear",
  },
  {
    slug: "galvanized-coated-coil",
    name: "Galvanized & Coated Steel Coil",
    category: "Coated Products",
    description:
      "Hot-dip galvanized and pre-painted coil for roofing, cladding, and appliance manufacturing.",
    specs: ["Coating: Z100 - Z275", "Custom color matching", "Slit to width on request"],
    icon: "shield",
  },
  {
    slug: "custom-fabricated-assemblies",
    name: "Custom Fabricated Assemblies",
    category: "Custom Manufacturing",
    description:
      "Fully assembled brackets, frames, and enclosures built to your engineering drawings.",
    specs: ["Prototype to production runs", "Multi-alloy capability", "Certified QA documentation"],
    icon: "certificate",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What industries does Madlas Global serve?",
    answer:
      "We supply structural steel, pipes, and custom fabricated components to construction, oil & gas, automotive, energy, marine, and general manufacturing industries across more than 25 countries.",
  },
  {
    question: "Are your products certified?",
    answer:
      "Yes. Madlas Global is ISO 9001:2015 certified and our piping products meet API 5L and ASTM standards. Every shipment includes a certified mill test report for full traceability.",
  },
  {
    question: "Can you manufacture custom steel components?",
    answer:
      "Absolutely. Our in-house engineering team works from your drawings or specifications to design, prototype, and mass-produce custom steel and alloy components at scale.",
  },
  {
    question: "What is your typical lead time for large orders?",
    answer:
      "Lead times vary by product and volume, but most structural and piping orders ship within 4-8 weeks. Contact our team with your specifications for an accurate quote and timeline.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we export to over 25 countries with dedicated logistics partners handling containerized and bulk vessel shipments, full customs documentation, and port-side delivery.",
  },
];
