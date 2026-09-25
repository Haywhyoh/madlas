export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "structural-steel-fabrication",
    title: "Structural Steel Fabrication",
    shortDescription:
      "Precision-engineered beams, columns, and frames built to exact structural specifications.",
    description:
      "From high-rise frameworks to industrial platforms, our structural steel fabrication combines advanced CNC cutting, robotic welding, and rigorous quality control to deliver components that meet the toughest load-bearing demands.",
    icon: "beam",
    points: [
      "CNC plasma & laser cutting",
      "Robotic & manual welding",
      "Third-party quality inspection",
      "On-time site delivery",
    ],
  },
  {
    slug: "steel-pipes-and-tubes",
    title: "Steel Pipes & Tubes",
    shortDescription:
      "Seamless and welded pipes engineered for oil & gas, water, and structural applications.",
    description:
      "Our pipe and tube manufacturing lines produce seamless and welded steel piping in a full range of diameters and wall thicknesses, tested to API and ASTM standards for pressure, corrosion, and structural performance.",
    icon: "pipe",
    points: [
      "API 5L & ASTM certified",
      "Custom diameters & coatings",
      "Anti-corrosion treatment",
      "Bulk export packaging",
    ],
  },
  {
    slug: "custom-metal-manufacturing",
    title: "Custom Metal Manufacturing",
    shortDescription:
      "Bespoke metal components engineered around your drawings, tolerances, and volumes.",
    description:
      "Bring us your specifications and our engineering team will design, prototype, and mass-produce custom steel and alloy components with tight tolerances for OEM and industrial clients.",
    icon: "gear",
    points: [
      "In-house engineering team",
      "Prototype to mass production",
      "Multi-alloy capability",
      "Flexible order volumes",
    ],
  },
  {
    slug: "sheet-metal-processing",
    title: "Sheet Metal Processing",
    shortDescription:
      "Roll-formed, stamped, and laser-cut sheet metal for cladding, panels, and enclosures.",
    description:
      "State-of-the-art roll forming, stamping, and laser cutting lines transform coil steel into precision panels, cladding, and enclosures for construction, automotive, and appliance manufacturers.",
    icon: "layers",
    points: [
      "Roll forming & stamping",
      "Laser & CNC precision cutting",
      "Galvanized & pre-painted coil",
      "Rapid prototyping",
    ],
  },
  {
    slug: "surface-treatment-coating",
    title: "Surface Treatment & Coating",
    shortDescription:
      "Galvanizing, powder coating, and anti-corrosion finishing that extends product life.",
    description:
      "Our finishing division applies hot-dip galvanizing, powder coating, and specialty anti-corrosion treatments so every product leaves the plant ready to withstand harsh environments for decades.",
    icon: "shield",
    points: [
      "Hot-dip galvanizing",
      "Electrostatic powder coating",
      "Salt-spray tested finishes",
      "Custom color matching",
    ],
  },
  {
    slug: "quality-assurance-testing",
    title: "Quality Assurance & Testing",
    shortDescription:
      "In-house metallurgical labs and NDT testing to guarantee certified, compliant steel.",
    description:
      "Every batch passes through our metallurgical laboratory and non-destructive testing suite, covering tensile strength, chemical composition, ultrasonic, and radiographic inspection before it ships.",
    icon: "certificate",
    points: [
      "ISO 9001:2015 certified",
      "Ultrasonic & radiographic testing",
      "Full material traceability",
      "Certified mill test reports",
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
};

export const team: TeamMember[] = [
  { name: "Daniel Okafor", role: "Chief Executive Officer", initials: "DO" },
  { name: "Amara Chukwu", role: "Head of Engineering", initials: "AC" },
  { name: "Femi Balogun", role: "Plant Operations Director", initials: "FB" },
  { name: "Grace Adeyemi", role: "Quality Assurance Lead", initials: "GA" },
];

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
};

export const projects: Project[] = [
  {
    slug: "harbor-bridge-structural-frame",
    title: "Harbor Bridge Structural Frame",
    category: "Structural Steel",
    location: "Houston, TX",
    year: "2024",
    summary:
      "Supplied and fabricated 4,200 tons of structural steel framing for a major harbor bridge expansion.",
  },
  {
    slug: "offshore-pipeline-network",
    title: "Offshore Pipeline Network",
    category: "Pipes & Tubes",
    location: "Gulf of Mexico",
    year: "2023",
    summary:
      "Manufactured API 5L certified seamless pipe for a 60km offshore pipeline network installation.",
  },
  {
    slug: "regional-logistics-warehouse",
    title: "Regional Logistics Warehouse",
    category: "Structural Steel",
    location: "Atlanta, GA",
    year: "2023",
    summary:
      "Delivered pre-engineered steel building components for a 90,000 sq ft logistics warehouse.",
  },
  {
    slug: "wind-farm-tower-brackets",
    title: "Wind Farm Tower Brackets",
    category: "Custom Manufacturing",
    location: "Amarillo, TX",
    year: "2022",
    summary:
      "Engineered and produced custom mounting brackets for a 48-turbine wind energy installation.",
  },
  {
    slug: "automotive-stamping-line",
    title: "Automotive Stamping Line Supply",
    category: "Sheet Metal",
    location: "Detroit, MI",
    year: "2022",
    summary:
      "Ongoing supply of precision-stamped sheet metal components for a tier-one automotive supplier.",
  },
  {
    slug: "coastal-desalination-plant",
    title: "Coastal Desalination Plant Piping",
    category: "Pipes & Tubes",
    location: "Corpus Christi, TX",
    year: "2021",
    summary:
      "Provided corrosion-resistant coated piping systems for a large-scale desalination facility.",
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
