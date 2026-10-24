import { siteConfig } from "./site-config";

export type AreaPlaceType = "City" | "AdministrativeArea" | "Country";

export type ServiceAreaImage = {
  src: string;
  alt: string;
};

export type ServiceAreaStep = {
  title: string;
  description: string;
};

export type ServiceAreaFaq = {
  question: string;
  answer: string;
};

export type ServiceArea = {
  slug: string;
  name: string;
  placeName: string;
  placeType: AreaPlaceType;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lede: string;
  /** One sentence for cards on the hub and homepage. */
  summary: string;
  heroImage: ServiceAreaImage;
  overview: string[];
  fabricationTitle: string;
  fabrication: string[];
  constructionTitle: string;
  construction: string[];
  localContext: string;
  points: string[];
  steps: ServiceAreaStep[];
  gallery: ServiceAreaImage[];
  faqs: ServiceAreaFaq[];
  mapQuery: string;
  mapEmbed?: string;
  mapTitle: string;
};

const workshopMap = {
  mapQuery: siteConfig.workshopMapQuery,
  mapEmbed: siteConfig.workshopMapEmbed,
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "ifo",
    name: "Ifo",
    placeName: "Ifo",
    placeType: "City",
    metaTitle: "Steel Fabrication Company in Ifo",
    metaDescription:
      "Madlas Global is a steel fabrication company in Ifo, Ogun State. We cut, weld, and paint steel at Ilepa, then handle steel construction on Ifo sites.",
    keywords: [
      "steel fabrication company in Ifo",
      "steel construction company in Ifo",
      "steel construction in Ifo",
      "steel fabricators in Ifo",
      "metal fabrication Ifo",
      "steel fabrication Ilepa",
    ],
    eyebrow: "Workshop in Ilepa",
    h1: "Steel Fabrication Company in Ifo",
    lede:
      "Madlas Global is a steel fabrication company in Ifo. The office and workshop are at Km 30 on the Abeokuta–Lagos Expressway, Ilepa. Steel construction for Ifo sites starts in that same yard.",
    summary:
      "The workshop is in Ilepa, Ifo. Tankers, tanks, frames, canopies, and towers are built here and erected on Ifo sites.",
    heroImage: {
      src: "/images/tanker-trailer-red-front-ladder.jpg",
      alt: "Red fuel tanker trailer with a front ladder, fabricated at the Madlas workshop in Ifo",
    },
    overview: [
      "A search for a steel fabrication company in Ifo should land on a yard you can visit. Madlas Global Investment Company Limited cuts, rolls, welds, and paints steel at Ilepa, Ifo, Ogun State. The company has done this work since 1994.",
      "Ifo clients do not send a tanker, tank, or frame to a fabricator in another state and wait on a long haul. Fuel tanker trailers, storage tanks, portal frames, roof trusses, filling-station canopies, truck bodies, and water-tank towers are built on the expressway, then erected by the same company.",
      "Steel construction in Ifo is the site half of that job. Columns go up on a cleared plot, a canopy is lifted over a forecourt, a tower is stood for a water tank, or trusses are fixed over a block building. If you need a steel construction company in Ifo, it is this crew, working from the yard at kilometre 30.",
    ],
    fabricationTitle: "What this steel fabrication company in Ifo builds",
    fabrication: [
      "The Ilepa yard works plate for tanker shells and storage tanks, sections for frames and trusses, and sheet for truck bodies. Ladders, walkways, landing legs, nozzles, and a workshop paint finish are completed before anything leaves.",
      "Companies in Ifo use that capacity for haulage trailers, depot tanks, warehouse frames, station canopies, and elevated towers. You agree the job at the office on the same yard. Bring drawings, the site address, and the span, height, or capacity you need.",
    ],
    constructionTitle: "Steel construction in Ifo",
    construction: [
      "Steel construction in Ifo means erection after the workshop work is finished. Crews from Ilepa set columns, lift trusses and portal frames, stand canopy steel over a forecourt, and erect tower platforms with cage ladders. The crew stays through handover.",
      "A warehouse frame in Ifo, a roof near Pakoto, or a canopy along the expressway is built at Km 30 and put up in the same town. The steel does not sit on a trailer for a trip across the country before the site crew sees it.",
    ],
    localContext:
      "Ilepa is the part of Ifo where the workshop sits, at kilometre 30 on the Abeokuta–Lagos Expressway. Pakoto and Ifo town are on that road. Companies toward Sango-Ota and toward Owode also start jobs at this yard. Use the Google listing for the workshop when you come to the gate.",
    points: [
      "Office and workshop at Km 30, Abeokuta / Lagos Expressway, Ilepa, Ifo",
      "Steel fabrication for Ifo is done on that yard",
      "Steel construction crews erect frames, canopies, tanks, and towers on Ifo sites",
      "Open Monday to Saturday, 8:00am to 6:00pm",
    ],
    steps: [
      {
        title: "Visit or call the Ilepa office",
        description:
          "Bring drawings, the site address in Ifo, and the capacity, span, or height the steel has to meet.",
      },
      {
        title: "Agree the steel",
        description:
          "We confirm plate, sections, fittings, paint, and how the crew will reach the site.",
      },
      {
        title: "Fabricate in Ifo",
        description:
          "Cutting, rolling, welding, and painting happen in the workshop on the same yard.",
      },
      {
        title: "Erect and hand over",
        description:
          "The crew puts the steel up on the Ifo site and stays until that steel is complete.",
      },
    ],
    gallery: [
      {
        src: "/images/tanker-trailer-red-side-landing-legs.jpg",
        alt: "Red tanker trailer with landing legs, built at the steel fabrication workshop in Ilepa, Ifo",
      },
      {
        src: "/images/steel-storage-tank-red-workshop.jpg",
        alt: "Red steel storage tank lying in the Ifo workshop before dispatch",
      },
      {
        src: "/images/steel-portal-frame-site-erection.jpg",
        alt: "Red steel portal frame during site erection for a steel construction job",
      },
    ],
    faqs: [
      {
        question: "Where is the steel fabrication company in Ifo?",
        answer:
          "Madlas Global’s office and workshop are at Km 30, Abeokuta / Lagos Expressway, Ilepa, Ifo, Ogun State. Plate is cut, rolled, and welded on that yard, and the job is agreed at the office there.",
      },
      {
        question: "Do you do steel construction in Ifo, or only workshop fabrication?",
        answer:
          "Both. Steel is fabricated at the Ilepa workshop, and our crews erect frames, canopies, roof trusses, and towers on sites in Ifo. One company handles the workshop and the site.",
      },
      {
        question: "Can I visit the workshop before I place an order?",
        answer:
          "Yes. The office is on the workshop yard in Ilepa. We are open Monday to Saturday, 8:00am to 6:00pm. Call or WhatsApp if you want someone to walk the yard with you.",
      },
      {
        question: "What can you fabricate for a company in Ifo?",
        answer:
          "Fuel tanker trailers, vertical and horizontal storage tanks, warehouse portal frames, roof trusses, filling-station canopies, truck bodies, and elevated water-tank towers. The steel is built in Ifo and erected on the site you name.",
      },
      {
        question: "How do I request a quote from a steel fabricator in Ifo?",
        answer:
          "Send the drawings, the site address, and the span, capacity, or height on WhatsApp, or visit the Ilepa office. We quote the fabrication and the erection together.",
      },
    ],
    ...workshopMap,
    mapTitle: "Map of the Madlas Global steel fabrication workshop in Ilepa, Ifo",
  },
  {
    slug: "lagos",
    name: "Lagos",
    placeName: "Lagos",
    placeType: "City",
    metaTitle: "Steel Fabrication Company in Lagos",
    metaDescription:
      "Steel fabrication company for Lagos. Madlas Global builds tankers, frames, canopies, and tanks in Ifo, then handles steel construction on Lagos sites.",
    keywords: [
      "steel fabrication company in Lagos",
      "steel construction company in Lagos",
      "steel construction in Lagos",
      "steel fabricators in Lagos",
      "metal fabrication Lagos",
      "steel construction company Lagos",
    ],
    eyebrow: "Lagos clients",
    h1: "Steel Fabrication Company in Lagos",
    lede:
      "Madlas Global is a steel fabrication company for Lagos. The workshop is in Ilepa, Ifo, on the Ogun side of the Lagos boundary. Steel construction is erected on the Lagos site after that.",
    summary:
      "Lagos companies fabricate at the Ilepa workshop and have frames, canopies, tanks, and towers erected on Lagos sites.",
    heroImage: {
      src: "/images/northwest-filling-station-completed-1.jpg",
      alt: "Completed filling station canopy, the kind of steel construction Madlas erects for Lagos clients",
    },
    overview: [
      "Lagos companies looking for a steel fabrication company in Lagos use the Madlas yard at Km 30, Abeokuta–Lagos Expressway, Ilepa, Ifo. There is no second factory inside Lagos. The steel is built on that yard, a short run from the northern Lagos corridor.",
      "Haulage firms, station developers, warehouse builders, and contractors in Lagos bring tanker, tank, frame, canopy, and tower jobs to that office. Metal fabrication — cutting, rolling, welding, and painting — happens in Ifo. The finished steel comes back into Lagos for erection.",
      "A steel construction company in Lagos, for this work, is the same crew. Portal frames, roof trusses, forecourt canopies, and elevated towers are put up on the Lagos address you give us. The workshop does not hand the steel to an unknown erection gang.",
    ],
    fabricationTitle: "Steel fabrication for Lagos companies",
    fabrication: [
      "Lagos orders are cut and welded in Ilepa. Tanker shells, chassis, ladders, and landing legs are finished in the workshop. Storage tanks are rolled, fitted, and painted before they move. Truck bodies are built onto the chassis in the same yard.",
      "Structural steel for a Lagos warehouse or a multi-storey roof is fabricated to the span and pitch on the drawings, then loaded for the site. Filling-station canopy steel is built to the forecourt layout, including renovation work where an old canopy has to come down first.",
    ],
    constructionTitle: "Steel construction in Lagos",
    construction: [
      "Steel construction in Lagos is site erection. Columns are set, trusses and portal frames are lifted, canopy steel goes over the pumps, and tower platforms go up with the cage ladder fitted. The crew stays until that steel is complete.",
      "The closest Lagos sites are Agege, Abule Egba, Alagbado, Iyana Ipaja, Ikeja, and Ogba. Crews also erect on sites elsewhere in Lagos. Tell us the address when you send the drawings so we can plan the haul from Ilepa.",
    ],
    localContext:
      "The yard sits on the Ogun side of the Lagos boundary, at Ilepa, Ifo. Lagos clients visit that office or send drawings there. Agege and Abule Egba are the nearest large Lagos districts on the expressway. Wider Lagos erection still starts from this one workshop.",
    points: [
      "One workshop, in Ilepa, Ifo, serving Lagos companies",
      "Steel fabrication and metal fabrication are booked and built at that yard",
      "Steel construction crews erect frames, canopies, and towers on Lagos sites",
      "Nearest Lagos districts: Agege, Abule Egba, Alagbado, Iyana Ipaja, Ikeja, Ogba",
    ],
    steps: [
      {
        title: "Send the Lagos site address",
        description:
          "Drawings, the address in Lagos, and the span, capacity, or height are enough to open the job.",
      },
      {
        title: "Confirm the haul",
        description:
          "We agree the steel and how the load will move from Ilepa to the Lagos site.",
      },
      {
        title: "Fabricate at the workshop",
        description:
          "Cutting, welding, fittings, and paint are finished in Ifo before the steel travels.",
      },
      {
        title: "Erect in Lagos",
        description:
          "The crew puts the steel up on the Lagos site and hands the completed steel over.",
      },
    ],
    gallery: [
      {
        src: "/images/steel-roof-trusses-two-storey-building.jpg",
        alt: "Steel roof trusses on a two-storey building, the kind of steel construction used on Lagos sites",
      },
      {
        src: "/images/filling-station-canopy-construction.jpg",
        alt: "Filling station canopy steel going up, fabricated for erection on a client site",
      },
      {
        src: "/images/steel-columns-roof-trusses-red.jpg",
        alt: "Red steel columns and roof trusses erected on site",
      },
    ],
    faqs: [
      {
        question: "Is Madlas a steel fabrication company in Lagos?",
        answer:
          "Yes. Lagos companies fabricate with us at the office and workshop in Ilepa, Ifo, on the Ogun side of the Lagos boundary. The yard is at Km 30 on the Abeokuta–Lagos Expressway.",
      },
      {
        question: "Do you handle steel construction on sites in Lagos?",
        answer:
          "Yes. After the steel is built in the workshop, our crews erect it on the Lagos site. That includes portal frames, roof trusses, filling-station canopies, and elevated towers.",
      },
      {
        question: "Which parts of Lagos do you serve?",
        answer:
          "The shortest runs are to Agege, Abule Egba, Alagbado, Iyana Ipaja, Ikeja, and Ogba. Erection crews also work on sites elsewhere in Lagos. Fabrication stays at the Ifo workshop for every one of those jobs.",
      },
      {
        question: "Do you have a fabrication workshop inside Lagos?",
        answer:
          "No. There is one workshop, in Ilepa, Ifo. Lagos clients visit that yard or send drawings there. We do not run a second factory in Lagos.",
      },
      {
        question: "What do Lagos companies usually order?",
        answer:
          "Tanker trailers and truck bodies for haulage, storage tanks for depots and stations, steel frames and roofs for warehouses and buildings, and canopies for filling stations.",
      },
    ],
    ...workshopMap,
    mapTitle: "Map of the Ilepa workshop that fabricates steel for Lagos",
  },
  {
    slug: "ogun",
    name: "Ogun",
    placeName: "Ogun State",
    placeType: "AdministrativeArea",
    metaTitle: "Steel Fabrication Company in Ogun State",
    metaDescription:
      "Steel fabrication company in Ogun State. The Madlas Global workshop is in Ilepa, Ifo. We also handle steel construction on Ogun sites.",
    keywords: [
      "steel fabrication company in Ogun State",
      "steel construction company in Ogun State",
      "steel construction in Ogun State",
      "steel fabricators in Ogun",
      "metal fabrication Ogun State",
      "steel fabrication company Ogun",
    ],
    eyebrow: "Ogun State workshop",
    h1: "Steel Fabrication Company in Ogun State",
    lede:
      "Madlas Global is a steel fabrication company in Ogun State. The office and workshop are in Ilepa, Ifo. Steel construction for Ogun sites is erected by the same company.",
    summary:
      "The Ogun workshop is in Ilepa, Ifo. Steel for Ifo, Sango-Ota, and the expressway is fabricated there and erected on site.",
    heroImage: {
      src: "/images/steel-truss-warehouse-frame-grey.jpg",
      alt: "Grey steel warehouse frame under construction, fabricated for erection on site",
    },
    overview: [
      "The steel fabrication company in Ogun State is on the Abeokuta–Lagos Expressway, not in a rented office away from the tools. Madlas Global’s workshop is at Km 30, Ilepa, Ifo, in Ifo Local Government. Tankers, tanks, frames, bodies, and tower steel are cut, welded, and painted there.",
      "Ogun companies in Ifo, Sango-Ota, and along the expressway use that yard because the steel and the office are in the state. You can stand in the workshop and see the shell, the frame, or the canopy before it moves.",
      "Steel construction in Ogun State is what happens after that. A steel construction company in Ogun State, for Madlas work, means our crew on your site: columns, trusses, canopies, and towers, handed over when the steel is up.",
    ],
    fabricationTitle: "Metal fabrication at the Ogun workshop",
    fabrication: [
      "Metal fabrication in Ogun is a workshop process at Ilepa. Plate is rolled for tanker shells and for vertical and horizontal storage tanks. Sections are cut for portal frames and roof trusses. Sheet is formed for truck bodies. Canopy steel for filling stations is built to the forecourt.",
      "Fittings are part of the fabrication, not an afterthought. Ladders, walkways, landing legs, nozzles, purlins, and paint are finished in Ifo before the load is booked for a site in the state.",
    ],
    constructionTitle: "Steel construction in Ogun State",
    construction: [
      "Steel construction in Ogun State covers erection in Ifo, in Sango-Ota, and on sites along the expressway toward Owode and Abeokuta, and back toward the Lagos boundary. The crew sets the steel and stays through handover.",
      "We do not run a second workshop in Abeokuta or in Sango. Those towns are served from Ilepa. If the site is in Ogun, the fabrication address is still Km 30, Ilepa, Ifo.",
    ],
    localContext:
      "Ifo is an Ogun town on the expressway between Sango-Ota and Abeokuta. Ilepa is the stretch where the workshop gate is, at Km 30 on the Abeokuta–Lagos Expressway. Sango-Ota, in Ado-Odo/Ota, is the next major commercial town toward Lagos on that road.",
    points: [
      "Office and workshop at Km 30, Abeokuta / Lagos Expressway, Ilepa, Ifo, Ogun State",
      "Fuel tanker shells, storage tanks, frames, and truck bodies are fabricated here",
      "Steel construction crews erect on Ogun sites from this yard",
      "Sango-Ota and the Abeokuta corridor are served from Ifo, not from a second factory",
    ],
    steps: [
      {
        title: "Agree the job at the workshop",
        description:
          "The office at Ilepa takes the drawings and the Ogun site address.",
      },
      {
        title: "Cut and weld in Ifo",
        description:
          "Plate, sections, and sheet are fabricated in the Ogun workshop.",
      },
      {
        title: "Finish fittings and paint",
        description:
          "Ladders, nozzles, braces, and paint are completed before the steel moves.",
      },
      {
        title: "Erect on the Ogun site",
        description:
          "The crew puts the steel up and stays until handover.",
      },
    ],
    gallery: [
      {
        src: "/images/tanker-trailer-white-blue-stripe-chassis.jpg",
        alt: "White tanker trailer on its chassis in the Ogun State workshop at Ilepa, Ifo",
      },
      {
        src: "/images/steel-storage-tank-black-horizontal.jpg",
        alt: "Black horizontal steel storage tank under the workshop roof in Ifo",
      },
      {
        src: "/images/steel-portal-frame-hall-construction.jpg",
        alt: "Portal frame erected on a cleared site for a steel construction job",
      },
    ],
    faqs: [
      {
        question: "Who is the steel fabrication company in Ogun State?",
        answer:
          "Madlas Global. The workshop is in Ilepa, Ifo, Ogun State, at Km 30 on the Abeokuta–Lagos Expressway. Steel for Ogun jobs is cut and welded there.",
      },
      {
        question: "Is steel construction in Ogun State part of the same job?",
        answer:
          "Yes. We erect the steel on Ogun sites after fabrication. A warehouse frame in the state, a canopy in Sango-Ota, or a tower along the expressway is put up by our own crew.",
      },
      {
        question: "Which Ogun towns do you cover from the Ifo workshop?",
        answer:
          "Ifo and Ilepa are where the yard is. We also fabricate for companies in Sango-Ota and erect steel along the expressway toward Owode and Abeokuta, and back toward Lagos. There is no second workshop in Abeokuta.",
      },
      {
        question: "Can an Ogun company visit the workshop?",
        answer:
          "Yes. The office is on the yard in Ilepa, Ifo. We are open Monday to Saturday, 8:00am to 6:00pm.",
      },
      {
        question: "What steelwork is fabricated in Ogun State at Madlas?",
        answer:
          "Tanker shells and chassis, vertical and horizontal storage tanks, structural frames and roof trusses, filling-station canopies, truck bodies, and elevated water-tank towers.",
      },
    ],
    ...workshopMap,
    mapTitle: "Map of the Madlas Global workshop in Ilepa, Ifo, Ogun State",
  },
  {
    slug: "sango",
    name: "Sango",
    placeName: "Sango-Ota",
    placeType: "City",
    metaTitle: "Steel Fabrication Company in Sango",
    metaDescription:
      "Steel fabrication company for Sango-Ota. Madlas Global fabricates steel in nearby Ifo and handles steel construction on Sango and Ota sites.",
    keywords: [
      "steel fabrication company in Sango",
      "steel construction company in Sango",
      "steel construction in Sango",
      "steel fabricators in Sango Ota",
      "steel fabrication company in Sango-Ota",
      "metal fabrication Sango",
    ],
    eyebrow: "Sango-Ota",
    h1: "Steel Fabrication Company in Sango",
    lede:
      "Madlas Global is a steel fabrication company for Sango-Ota. The workshop is up the expressway in Ilepa, Ifo. Steel construction is erected on sites in Sango and Ota.",
    summary:
      "Sango-Ota jobs are fabricated in nearby Ifo and erected on sites in Sango, Ota, Joju, and Iyana Iyesi.",
    heroImage: {
      src: "/images/filling-station-canopy-construction.jpg",
      alt: "Filling station canopy under construction, typical steel construction for the Sango-Ota corridor",
    },
    overview: [
      "Sango-Ota and Ifo sit on the same Abeokuta–Lagos Expressway. A steel fabrication company in Sango, for companies that want the steel built nearby, is the Madlas workshop at Km 30, Ilepa — the next major yard up that road, not a fabricator on the far side of Lagos.",
      "Sango is a commercial and haulage town. Filling stations, warehouses, shops, and truck yards along Sango, Ota, Joju, and Iyana Iyesi need canopies, frames, tanks, bodies, and trailers. Those jobs are agreed for fabrication in Ifo and brought back down the expressway.",
      "If the search is for a steel construction company in Sango, the erection happens on the Sango site. Canopy steel, portal frames, roof trusses, and towers are put up by the Madlas crew after the workshop in Ifo has finished the steel.",
    ],
    fabricationTitle: "Steel fabrication for Sango-Ota",
    fabrication: [
      "Fabrication for Sango does not happen in a Sango side street. It happens in Ilepa, where the plate rolls, the welding bays, and the paint bay already are. Sango clients visit that yard or send drawings there.",
      "The work Sango companies usually need is practical: tanker trailers and truck bodies for yards on the corridor, storage tanks for stations and depots, canopy steel for forecourts, and frames for warehouses and shops. Each of those is cut and welded in Ifo to the drawing for the Sango site.",
    ],
    constructionTitle: "Steel construction in Sango",
    construction: [
      "Steel construction in Sango is the lift on site. A canopy goes over the pumps in Sango or Ota. A frame goes up on a commercial plot. Trusses go over a block of shops. A tower goes up where a water tank has to sit above the yard.",
      "Because Sango-Ota is down the expressway from Ilepa, the load is a corridor move, not an interstate project. The crew that knows the steel from the workshop is the crew that bolts it on the Sango site.",
    ],
    localContext:
      "Sango-Ota is in Ado-Odo/Ota Local Government, Ogun State, between Lagos and Ifo on the Abeokuta–Lagos Expressway. Joju and Iyana Iyesi are on that same Ota stretch. The Madlas gate is further toward Abeokuta, at Ilepa, Ifo. There is no Madlas workshop inside Sango itself.",
    points: [
      "Fabrication for Sango is done at the Ilepa, Ifo workshop",
      "Steel construction is erected in Sango, Ota, Joju, and Iyana Iyesi",
      "Same expressway: Sango-Ota toward Ifo, then the yard at Km 30",
      "Canopies, frames, tanks, bodies, and tankers for the Sango commercial corridor",
    ],
    steps: [
      {
        title: "Send the Sango site",
        description:
          "Drawings and the address in Sango, Ota, Joju, or Iyana Iyesi open the quote.",
      },
      {
        title: "Agree the steel in Ifo",
        description:
          "We confirm sections, plate, fittings, and how the load will come down the expressway.",
      },
      {
        title: "Fabricate at Ilepa",
        description:
          "The workshop in Ifo cuts, welds, and paints the steel.",
      },
      {
        title: "Erect in Sango",
        description:
          "The crew puts the steel up on the Sango-Ota site and hands it over.",
      },
    ],
    gallery: [
      {
        src: "/images/filling-station-canopy-renovation.jpg",
        alt: "Filling station canopy stripped for renovation before new steel construction",
      },
      {
        src: "/images/box-truck-body-white-side.jpg",
        alt: "White box truck body fabricated in the workshop for a haulage client",
      },
      {
        src: "/images/steel-portal-frame-warehouse-erection.jpg",
        alt: "Steel portal frame erected on site for a warehouse",
      },
    ],
    faqs: [
      {
        question: "Is there a steel fabrication company that serves Sango-Ota?",
        answer:
          "Madlas Global fabricates for Sango-Ota from the workshop in Ilepa, Ifo. Sango sits further down the Abeokuta–Lagos Expressway, so the steel is built in Ifo and brought to Sango for erection.",
      },
      {
        question: "Do you do steel construction in Sango?",
        answer:
          "Yes. Canopies, warehouse frames, roof trusses, and towers for Sango and Ota sites are erected by our crew after the workshop work in Ifo is finished.",
      },
      {
        question: "Why use a fabricator in Ifo for a Sango job?",
        answer:
          "Sango-Ota and Ifo are neighbouring towns on one expressway. Drawings are agreed at Ilepa, and the finished steel comes back down the road to the Sango site.",
      },
      {
        question: "What work is common for companies in Sango?",
        answer:
          "Filling-station canopies, warehouse and shop frames, storage tanks, truck bodies, and tanker trailers. Haulage yards and commercial plots in Sango-Ota use that mix.",
      },
      {
        question: "Do you have a workshop inside Sango?",
        answer:
          "No. The only workshop is at Km 30, Ilepa, Ifo. Sango jobs are fabricated there and erected in Sango, Ota, Joju, and Iyana Iyesi.",
      },
    ],
    ...workshopMap,
    mapTitle: "Map of the Ilepa workshop that fabricates steel for Sango-Ota",
  },
  {
    slug: "agege",
    name: "Agege",
    placeName: "Agege",
    placeType: "City",
    metaTitle: "Steel Fabrication Company in Agege",
    metaDescription:
      "Steel fabrication company for Agege, Lagos. Madlas builds tankers, frames, and canopies in Ifo, then handles steel construction on Agege sites.",
    keywords: [
      "steel fabrication company in Agege",
      "steel construction company in Agege",
      "steel construction in Agege",
      "steel fabricators in Agege",
      "metal fabrication Agege",
      "steel construction company Agege Lagos",
    ],
    eyebrow: "Agege, Lagos",
    h1: "Steel Fabrication Company in Agege",
    lede:
      "Madlas Global is a steel fabrication company for Agege. The workshop is in Ilepa, Ifo, along the Abeokuta–Lagos Expressway. Steel construction is erected on the Agege site.",
    summary:
      "Agege companies fabricate steel in nearby Ifo and have roofs, frames, canopies, and towers erected in Agege.",
    heroImage: {
      src: "/images/steel-roof-trusses-two-storey-building.jpg",
      alt: "Steel roof trusses on a two-storey block building, typical of steel construction in built-up Agege",
    },
    overview: [
      "Agege is one of the closest Lagos districts to the Madlas workshop. A steel fabrication company in Agege, in practice, is the yard at Ilepa, Ifo: you leave Agege on the Abeokuta road, pass through the boundary, and the workshop is on that expressway.",
      "Agege plots are tight. The steel people ask for is often a roof over an existing block, a frame for a warehouse or plaza, a canopy, or a water-tank tower, not only a haulage trailer. Those members are still fabricated in Ifo, where there is room to cut and weld them, then brought back to Agege.",
      "A steel construction company in Agege is the erection crew on that site. Steel construction in Agege means trusses over the building, columns on the plot, a canopy where the forecourt is, or a tower with a cage ladder and platform. The same company that built the steel puts it up.",
    ],
    fabricationTitle: "Steel fabrication for Agege",
    fabrication: [
      "Agege clients do not need a fabricator hidden inside the district. The workshop in Ilepa takes the drawings, fabricates the trusses, frames, tanks, canopies, bodies, or towers, and paints them before the load returns to Lagos.",
      "Roof steel is a common Agege job: trusses and purlins sized for a building that is already standing, including two-storey blocks. Portal frames are for plots that can take a hall. Tanks and towers are for yards and stations that need storage above or beside the building.",
    ],
    constructionTitle: "Steel construction in Agege",
    construction: [
      "Steel construction in Agege has to respect a built-up street. We plan the lift for the address you send: Dopemu, Oko-Oba, Pen Cinema, Iyana Ipaja, Abule Egba, or Agege itself. Access, span, and the existing building decide how the crew erects the steel.",
      "The crew comes from the Ifo workshop. They set the members, bolt the frame or the trusses, and stay until the steel is ready for roofing sheets, the tank, or the station fascia. We do not fabricate in Agege and we do not leave erection to a gang that never saw the workshop.",
    ],
    localContext:
      "Agege is in Lagos State, on the northern corridor that feeds the Abeokuta–Lagos Expressway. The Madlas office is not in Agege. It is at Km 30, Ilepa, Ifo, Ogun State. That is the address for visits, drawings, and collection of finished steel that is not erected by our crew.",
    points: [
      "Agege fabrication is done at the Ilepa, Ifo workshop",
      "Steel construction covers Agege, Dopemu, Oko-Oba, Pen Cinema, Iyana Ipaja, and Abule Egba",
      "Roof trusses for existing buildings are a common Agege job",
      "Frames, canopies, tanks, and towers are erected by the workshop crew",
    ],
    steps: [
      {
        title: "Send the Agege address",
        description:
          "Drawings or a clear description, plus the site in Agege or the nearby districts.",
      },
      {
        title: "Size the steel",
        description:
          "We confirm span, pitch, height, and how the crew will get onto the plot.",
      },
      {
        title: "Build it in Ifo",
        description:
          "The workshop fabricates and paints the steel at Ilepa.",
      },
      {
        title: "Erect in Agege",
        description:
          "The crew installs the steel on the Agege site and hands it over.",
      },
    ],
    gallery: [
      {
        src: "/images/steel-columns-roof-purlins-dark.jpg",
        alt: "Steel columns and roof purlins erected with a building behind them",
      },
      {
        src: "/images/elevated-steel-tower-platform-cage-ladder-1.jpg",
        alt: "Elevated steel tower with a platform and cage ladder, erected on site",
      },
      {
        src: "/images/steel-truss-roof-warehouse-installation.jpg",
        alt: "Steel truss roof going up over a concrete slab",
      },
    ],
    faqs: [
      {
        question: "Who fabricates steel for companies in Agege?",
        answer:
          "Madlas Global. The workshop is in Ilepa, Ifo, along the Abeokuta–Lagos Expressway from Agege. Agege companies start the job at that yard.",
      },
      {
        question: "Do you handle steel construction in Agege?",
        answer:
          "Yes. We erect roof trusses, portal frames, canopies, and water-tank towers on Agege sites after fabrication in Ifo. The same company does the workshop and the site.",
      },
      {
        question: "Which Agege areas can you erect steel in?",
        answer:
          "Agege itself, and nearby Dopemu, Oko-Oba, Pen Cinema, Iyana Ipaja, and Abule Egba. If the site is elsewhere on that Lagos corridor, send the address with the drawings.",
      },
      {
        question: "Is the fabricator based in Agege?",
        answer:
          "The company serves Agege. The office and workshop are in Ilepa, Ifo, Ogun State, not inside Agege. You visit Ilepa to see the steel being built, and we erect it on the Agege site.",
      },
      {
        question: "What should an Agege client send for a quote?",
        answer:
          "Drawings or a clear description, the site address in Agege, and the span, height, or tank capacity. WhatsApp or a visit to the Ilepa office both work.",
      },
    ],
    ...workshopMap,
    mapTitle: "Map of the Ilepa workshop that fabricates steel for Agege",
  },
  {
    slug: "nigeria",
    name: "Nigeria",
    placeName: "Nigeria",
    placeType: "Country",
    metaTitle: "Steel Fabrication Company in Nigeria",
    metaDescription:
      "Madlas Global is a steel fabrication company in Nigeria, with the workshop in Ifo. Steel construction crews erect frames, canopies, and towers in 20+ states.",
    keywords: [
      "steel fabrication company in Nigeria",
      "steel construction company in Nigeria",
      "steel construction in Nigeria",
      "steel fabricators in Nigeria",
      "metal fabrication Nigeria",
      "steel construction company Nigeria",
    ],
    eyebrow: "Nigeria",
    h1: "Steel Fabrication Company in Nigeria",
    lede:
      "Madlas Global is a steel fabrication company in Nigeria. The workshop is in Ilepa, Ifo, Ogun State. Steel construction crews erect that steel for companies in more than 20 states.",
    summary:
      "One Nigerian workshop, in Ilepa, Ifo. Fabrication there, and steel construction on sites in more than 20 states.",
    heroImage: {
      src: "/images/steel-truss-roof-warehouse-installation.jpg",
      alt: "Workers erecting a steel truss roof, the site half of Madlas steel construction in Nigeria",
    },
    overview: [
      "Madlas Global Investment Company Limited is a steel fabrication company in Nigeria. The company was established in 1994. The registered name on our documents is Madlas Global Investment Company Limited, RC 630568, an affiliate of Adelak Sho. Ent. The tools are in one place: Km 30, Abeokuta / Lagos Expressway, Ilepa, Ifo, Ogun State.",
      "Nigerian clients searching for a steel fabrication company in Nigeria often need both the workshop and a crew that will travel. We fabricate tankers, storage tanks, structural frames, roof trusses, filling-station canopies, truck bodies, and elevated towers in Ifo. We have erected steel for companies across more than 20 states.",
      "A steel construction company in Nigeria, on our jobs, is not a different firm. Steel construction in Nigeria means the Madlas crew on the client’s site after the Ifo workshop has finished the members. We do not pretend to own a factory in every state. The steel is built in Ifo and put up where the project is.",
    ],
    fabricationTitle: "What the Nigerian workshop fabricates",
    fabrication: [
      "The Ifo workshop is the fabrication address for every Nigerian job. Fuel tanker trailers are rolled, chassis-mounted, fitted with ladders and landing legs, and painted. Vertical and horizontal storage tanks are built to the capacity on the drawing. Portal frames and roof trusses are cut for the span and pitch.",
      "Filling-station canopies are fabricated for new forecourts and for stations we strip and rebuild. Truck bodies are built onto chassis. Elevated water-tank towers are fabricated with the cage ladder and platform. That is the metal fabrication list. It leaves from Ilepa.",
    ],
    constructionTitle: "Steel construction in Nigeria",
    construction: [
      "Steel construction in Nigeria starts when the load leaves Ifo. Crews erect warehouse frames, roofs over block buildings, station canopies, and towers, then stay through handover. The states nearest the yard — Ogun and Lagos, including Sango-Ota and Agege — are the short runs. Sites farther out are planned around the haul.",
      "If your project is outside Lagos and Ogun, send the site address with the drawings. We will say how the steel moves and how the crew will erect it. Companies that only need a fabricator near Ifo, Lagos, Sango, or Agege should read those location pages. They describe the same workshop from the place the site actually is.",
    ],
    localContext:
      "The office, the factory address, and the Google listing are all the Ilepa workshop. Phone +234 802 320 1933, landline +234 702 504 3686, WhatsApp +234 810 479 1139, email madlasglobal@yahoo.com. Monday to Saturday, 8:00am to 6:00pm.",
    points: [
      "Steel fabrication company in Nigeria, workshop in Ilepa, Ifo since 1994",
      "RC 630568, Madlas Global Investment Company Limited",
      "Steel construction erected for companies in more than 20 states",
      "Nearest coverage: Ifo, Ogun State, Sango-Ota, Lagos, and Agege",
    ],
    steps: [
      {
        title: "Send drawings and the state",
        description:
          "The office needs the steel, the site address, and when the site can take the crew.",
      },
      {
        title: "Fabricate in Ifo",
        description:
          "All cutting, welding, fittings, and paint happen at the Ilepa workshop.",
      },
      {
        title: "Move the steel",
        description:
          "The load leaves the yard for the Nigerian site named on the job.",
      },
      {
        title: "Erect and hand over",
        description:
          "The crew installs the steel and stays until that steel is complete.",
      },
    ],
    gallery: [
      {
        src: "/images/tanker-trailer-red-rear-ladder.jpg",
        alt: "Red fuel tanker trailer with a rear ladder, fabricated in Nigeria at the Ifo workshop",
      },
      {
        src: "/images/northwest-filling-station-completed-2.jpg",
        alt: "Completed Northwest filling station canopy after steel construction",
      },
      {
        src: "/images/elevated-steel-tower-platform-cage-ladder-2.jpg",
        alt: "Elevated steel water-tank tower with platform and cage ladder",
      },
    ],
    faqs: [
      {
        question: "Is Madlas Global a steel fabrication company in Nigeria?",
        answer:
          "Yes. Madlas Global Investment Company Limited fabricates steel in Nigeria from its workshop in Ilepa, Ifo, Ogun State. The company was established in 1994 and is registered as RC 630568.",
      },
      {
        question: "Do you carry out steel construction across Nigeria?",
        answer:
          "Yes. Fabrication is done in Ifo. Our crews erect frames, canopies, trusses, and towers for companies in more than 20 states. The steel is built in one yard and erected on the client’s site.",
      },
      {
        question: "What does the company fabricate?",
        answer:
          "Fuel tanker trailers, storage tanks, structural steel and roof trusses, filling-station canopies, truck bodies, and elevated water-tank towers.",
      },
      {
        question: "Where should a company outside Lagos and Ogun start?",
        answer:
          "Send drawings and the site address to the Ifo office. We confirm the steel, the haul, and the erection crew. The Ifo, Lagos, Ogun, Sango, and Agege pages explain the nearer jobs.",
      },
      {
        question: "How is a Nigerian steel construction job handed over?",
        answer:
          "The workshop finishes cutting, welding, fittings, and paint. The crew erects the steel on site and stays until that steel is complete.",
      },
    ],
    ...workshopMap,
    mapTitle: "Map of the Madlas Global workshop in Ilepa, Ifo, Nigeria",
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
