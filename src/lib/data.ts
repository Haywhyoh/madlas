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
      "tanker trailer fabricator Nigeria",
      "petroleum tanker trailer",
      "semi-trailer tanker fabrication Nigeria",
      "tanker chassis and ladder fabrication",
    ],
    metaTitle:
      "Fuel Tanker Fabrication in Nigeria",
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
    primaryKeyword: "storage tank fabrication",
    secondaryKeywords: [
      "steel storage tank fabricator Nigeria",
      "vertical storage tank fabrication",
      "horizontal storage tank Nigeria",
      "industrial tank fabrication workshop",
    ],
    metaTitle:
      "Storage Tank Fabrication in Nigeria",
    metaDescription:
      "Madlas Global fabricates vertical and horizontal steel storage tanks in our workshop — shell and end fabrication, ladders and fittings, and a full painted finish.",
    overview: [
      "We fabricate vertical and horizontal steel storage tanks from flat plate through to a finished, painted tank ready to leave the workshop. Shells and end caps are cut, rolled, and welded in-house, with wall thickness and capacity built to the volume and product you need to store.",
      "Every tank is fitted with the ladders, nozzles, and access points your installation requires, then painted to a workshop finish before delivery. Whether it is a tall vertical tank for a filling station or a horizontal tank for a depot or workshop yard, we build it to your layout.",
    ],
    points: [
      "Vertical steel tanks",
      "Horizontal steel tanks",
      "Ladders and fittings",
      "Workshop painting",
    ],
    features: [
      {
        title: "Vertical Tank Fabrication",
        description:
          "Tall vertical steel tanks rolled and welded with ladders for fuel, water, or bulk liquid storage.",
      },
      {
        title: "Horizontal Tank Fabrication",
        description:
          "Horizontal cylindrical tanks with end caps fabricated for depot, workshop, and yard storage.",
      },
      {
        title: "Ladders & Fittings",
        description:
          "Access ladders, nozzles, and fittings are welded on to match your installation and piping layout.",
      },
      {
        title: "Workshop Painting",
        description:
          "Every tank is degreased, primed, and painted to a full workshop finish before it leaves our yard.",
      },
    ],
    applications: [
      "Fuel storage at filling stations",
      "Depot and bulk liquid storage",
      "Water storage for industrial sites",
      "Workshop and yard holding tanks",
    ],
    specifications: [
      { label: "Orientation", value: "Vertical or horizontal, built to order" },
      { label: "Shell & Ends", value: "Rolled plate shell with welded end caps" },
      { label: "Access", value: "Ladders and fittings to your layout" },
      { label: "Finish", value: "Degreased, primed, and workshop-painted" },
    ],
    process: [
      {
        title: "Shell & End Fabrication",
        description:
          "Steel plate is cut and rolled into the tank shell, with end caps formed and fitted.",
      },
      {
        title: "Welding & Pressure Check",
        description:
          "Shell seams and end caps are welded and checked before fittings are added.",
      },
      {
        title: "Ladders & Nozzle Fitting",
        description:
          "Access ladders, nozzles, and fittings are welded on to match your piping and access needs.",
      },
      {
        title: "Painting & Dispatch",
        description:
          "The tank is degreased, primed, painted, and prepared for delivery to site.",
      },
    ],
    faqs: [
      {
        question: "Can you fabricate a tank to a specific capacity?",
        answer:
          "Yes. We size the shell diameter and length to the capacity you need, for both vertical and horizontal tanks.",
      },
      {
        question: "Do you fit ladders and fittings before delivery?",
        answer:
          "Yes, ladders, nozzles, and fittings are welded on in the workshop so the tank arrives ready to install.",
      },
      {
        question: "Can you build tanks for a filling station forecourt?",
        answer:
          "Yes, we fabricate the vertical and horizontal tanks used in our filling station construction and renovation work.",
      },
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
    primaryKeyword: "steel roof trusses",
    secondaryKeywords: [
      "steel structure fabrication Nigeria",
      "warehouse portal frame construction",
      "structural steel erection",
      "steel building roof contractor",
    ],
    metaTitle:
      "Steel Structures & Roof Trusses in Nigeria",
    metaDescription:
      "Madlas Global fabricates and erects warehouse portal frames, roof trusses, and steel roofs for halls and multi-storey buildings, from columns on site to trusses over a slab.",
    overview: [
      "We fabricate and erect structural steel for warehouses, halls, and multi-storey buildings. Columns, portal frames, and roof trusses are built to span and load specifications, then taken to site for erection on a cleared plot or over an existing slab.",
      "Our crews handle the full job: setting columns, running purlins, and lifting trusses into place, whether it is a single-storey warehouse portal frame or a steel roof over a two-storey block building. Each structure is built to carry the roofing sheets and loads your site requires.",
    ],
    points: [
      "Warehouse portal frames",
      "Roof trusses",
      "Building steel roofs",
      "Site erection",
    ],
    features: [
      {
        title: "Warehouse Portal Frames",
        description:
          "Column and rafter portal frames fabricated and erected for warehouse and hall-span buildings.",
      },
      {
        title: "Roof Truss Fabrication",
        description:
          "Roof trusses built to span and pitch specification, fabricated in the workshop and erected on site.",
      },
      {
        title: "Purlins & Roof Steelwork",
        description:
          "Purlins and secondary steelwork are fitted to carry roofing sheets across the full span.",
      },
      {
        title: "Site Erection Crews",
        description:
          "Our own erection crews set columns, lift trusses, and complete the steel frame on site.",
      },
    ],
    applications: [
      "Warehouse & industrial hall construction",
      "Multi-storey building roofs",
      "Factory & workshop steel frames",
      "Agricultural & storage shed structures",
    ],
    specifications: [
      {
        label: "Frame Type",
        value: "Portal frame columns and rafters, or roof trusses",
      },
      { label: "Span", value: "Built to the span and pitch your building requires" },
      {
        label: "Secondary Steel",
        value: "Purlins and bracing fitted for roofing sheets",
      },
      { label: "Erection", value: "Fabricated in workshop, erected on site" },
    ],
    process: [
      {
        title: "Site & Load Assessment",
        description:
          "We assess the site, span, and roofing load before fabrication begins.",
      },
      {
        title: "Column & Frame Fabrication",
        description:
          "Columns, rafters, and trusses are cut, welded, and prepared in the workshop.",
      },
      {
        title: "Site Erection",
        description:
          "Columns are set, and trusses or portal frames are lifted and bolted into place on site.",
      },
      {
        title: "Purlins & Handover",
        description:
          "Purlins and bracing are fitted ready for roofing sheets, and the structure is handed over.",
      },
    ],
    faqs: [
      {
        question: "Do you handle both fabrication and site erection?",
        answer:
          "Yes, we fabricate the steel in our workshop and erect it on site with our own crews.",
      },
      {
        question: "Can you build a roof for an existing building?",
        answer:
          "Yes, we have fitted steel roof trusses over existing block buildings, including multi-storey structures.",
      },
      {
        question: "What span can your portal frames cover?",
        answer:
          "We build portal frames and trusses to the span and pitch your building design requires.",
      },
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
    primaryKeyword: "filling station construction",
    secondaryKeywords: [
      "filling station canopy fabrication",
      "petrol station renovation Nigeria",
      "forecourt steelwork contractor",
      "filling station canopy construction",
    ],
    metaTitle:
      "Filling Station Construction & Canopy Fabrication in Nigeria",
    metaDescription:
      "Madlas Global builds and renovates filling stations — stripping old canopies, fabricating new canopy steel, and completing forecourt stations ready for use.",
    overview: [
      "We take on filling station work from a stripped forecourt through to a completed canopy. For renovations, old canopy structures are stripped back before new steelwork is fabricated and fitted. For new builds, we fabricate the full canopy frame and complete the forecourt steelwork.",
      "Our completed stations, including the Northwest filling station, show the finished result: a painted canopy standing over a ready-to-operate forecourt. We manage the steel side of the job from site strip to final handover.",
    ],
    points: [
      "Canopy fabrication",
      "Station renovation",
      "Forecourt steelwork",
      "Completed station canopies",
    ],
    features: [
      {
        title: "Canopy Fabrication",
        description:
          "New filling station canopy steel is fabricated to span the forecourt and pump islands.",
      },
      {
        title: "Renovation & Strip-Out",
        description:
          "Old canopy structures are stripped back safely before new steelwork goes up.",
      },
      {
        title: "Forecourt Steelwork",
        description:
          "Supporting columns, bracing, and forecourt steel structures are completed alongside the canopy.",
      },
      {
        title: "Completed Station Handover",
        description:
          "Canopies are finished and painted, ready for the station to open for business.",
      },
    ],
    applications: [
      "New filling station canopy construction",
      "Existing filling station renovation",
      "Forecourt steel structure upgrades",
      "Petroleum marketing company station builds",
    ],
    specifications: [
      {
        label: "Scope",
        value: "New canopy construction or renovation of existing stations",
      },
      {
        label: "Canopy Frame",
        value: "Columns, rafters, and fascia steelwork fabricated to span",
      },
      {
        label: "Renovation Work",
        value: "Safe strip-out of existing canopy before new steel is fitted",
      },
      { label: "Finish", value: "Painted canopy steel ready for signage and fascia" },
    ],
    process: [
      {
        title: "Site Survey & Strip-Out",
        description:
          "For renovations, the existing canopy is assessed and stripped back safely.",
      },
      {
        title: "Canopy Fabrication",
        description:
          "New canopy columns, rafters, and fascia steel are fabricated to the forecourt layout.",
      },
      {
        title: "Site Erection",
        description:
          "The canopy frame is erected over the pump islands and forecourt.",
      },
      {
        title: "Finishing & Handover",
        description:
          "The canopy is painted and finished, ready for signage and station handover.",
      },
    ],
    faqs: [
      {
        question: "Can you renovate an existing filling station?",
        answer:
          "Yes, we strip back old canopy structures and fabricate new canopy steel as part of station renovation work.",
      },
      {
        question: "Do you build new filling station canopies from scratch?",
        answer:
          "Yes, we fabricate and erect new canopy steelwork for filling stations being built from the ground up.",
      },
      {
        question: "Can you show examples of completed stations?",
        answer:
          "Yes, our completed Northwest filling station canopy is one example of our finished station work.",
      },
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
    primaryKeyword: "truck body building",
    secondaryKeywords: [
      "box van body builder Nigeria",
      "enclosed cargo body fabrication",
      "box truck body fabricator Nigeria",
      "truck body fabrication workshop",
    ],
    metaTitle:
      "Truck Body & Box Van Building in Nigeria",
    metaDescription:
      "Madlas Global builds enclosed cargo bodies and box vans, including white box bodies with rear double doors, fitted to light truck chassis in the workshop.",
    overview: [
      "We build enclosed cargo bodies and box van bodies in our workshop, fitted directly onto light truck chassis. Each body is framed, panelled, and finished with rear double doors for easy loading and unloading.",
      "Whether it is a grey enclosed cargo trailer body or a white box body mounted on a cab chassis, we build to the dimensions and door configuration your fleet needs, with a workshop-painted finish on every unit.",
    ],
    points: [
      "Enclosed cargo bodies",
      "Box van bodies",
      "Rear double doors",
      "Bodies fitted to chassis",
    ],
    features: [
      {
        title: "Enclosed Cargo Bodies",
        description:
          "Fully enclosed steel-framed and panelled cargo bodies built for secure goods transport.",
      },
      {
        title: "Box Van Bodies",
        description:
          "Box van bodies fitted to light truck chassis, built to your length and height requirements.",
      },
      {
        title: "Rear Double Doors",
        description:
          "Rear double doors are fitted for straightforward loading and unloading at depots and stores.",
      },
      {
        title: "Chassis Fitting & Finishing",
        description:
          "Bodies are fitted directly to the chassis and finished with a full workshop paint job.",
      },
    ],
    applications: [
      "Fleet delivery & distribution vehicles",
      "Enclosed goods haulage",
      "Depot-to-store cargo transport",
      "Light truck body replacement",
    ],
    specifications: [
      { label: "Body Type", value: "Enclosed box van or cargo trailer body" },
      { label: "Doors", value: "Rear double doors, fitted to order" },
      { label: "Chassis Fit", value: "Built and fitted to light truck chassis" },
      { label: "Finish", value: "Workshop-painted body, ready for branding" },
    ],
    process: [
      {
        title: "Frame Fabrication",
        description:
          "The steel body frame is built to the length and height specified for the chassis.",
      },
      {
        title: "Panelling",
        description:
          "Sides, roof, and floor panels are fitted to form the enclosed cargo body.",
      },
      {
        title: "Doors & Chassis Fitting",
        description:
          "Rear double doors are fitted and the body is mounted onto the truck chassis.",
      },
      {
        title: "Painting & Handover",
        description:
          "The body is painted and finished, ready for branding and fleet handover.",
      },
    ],
    faqs: [
      {
        question: "Can you fit a box van body to my existing truck chassis?",
        answer:
          "Yes, we build and fit enclosed cargo and box van bodies directly onto light truck chassis.",
      },
      {
        question: "Do your box bodies come with rear double doors?",
        answer:
          "Yes, rear double doors are a standard fitting, built to your preferred opening width.",
      },
      {
        question: "Can you paint the body to match our fleet colours?",
        answer:
          "Yes, every body is workshop-painted and can be finished ready for your fleet branding.",
      },
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
    primaryKeyword: "elevated water tank tower",
    secondaryKeywords: [
      "steel tower stand fabrication",
      "water tank tower construction Nigeria",
      "elevated platform with cage ladder",
      "steel tower erection",
    ],
    metaTitle:
      "Elevated Water Tank Towers in Nigeria",
    metaDescription:
      "Madlas Global fabricates and erects elevated steel tower stands for water tanks, with caged ladders and railed platforms at the top.",
    overview: [
      "We fabricate elevated steel tower stands that lift water tanks above a site for gravity-fed supply. Each tower is built with a caged ladder for safe climbing and a railed platform at the top to support the tank and allow safe access for maintenance.",
      "Towers are fabricated to the height and load your tank and site require, then erected on site with the ladder and platform already fitted, ready for the tank to be lifted into place.",
    ],
    points: [
      "Steel tower stands",
      "Cage ladders",
      "Top platforms and railings",
      "Site erection",
    ],
    features: [
      {
        title: "Steel Tower Stands",
        description:
          "Elevated steel towers fabricated to lift water tanks to the height your site requires.",
      },
      {
        title: "Cage Ladders",
        description:
          "Caged ladders are fitted for safe climbing access to the top platform.",
      },
      {
        title: "Top Platforms & Railings",
        description:
          "Railed platforms at the top support the tank and give safe access for maintenance.",
      },
      {
        title: "Site Erection",
        description:
          "Towers are erected on site, with ladder and platform fitted ready for the tank.",
      },
    ],
    applications: [
      "Site water supply towers",
      "Industrial & factory water storage",
      "Residential estate water towers",
      "Gravity-fed water distribution",
    ],
    specifications: [
      { label: "Structure", value: "Steel tower stand, built to order height" },
      { label: "Access", value: "Caged ladder for safe climbing" },
      { label: "Top Platform", value: "Railed platform sized to the tank" },
      { label: "Erection", value: "Fabricated and erected on site" },
    ],
    process: [
      {
        title: "Height & Load Assessment",
        description:
          "We assess the tank size and required height before fabrication begins.",
      },
      {
        title: "Tower Fabrication",
        description:
          "Steel legs, bracing, and the top platform frame are fabricated in the workshop.",
      },
      {
        title: "Site Erection",
        description:
          "The tower is erected on site with the cage ladder and platform fitted.",
      },
      {
        title: "Tank Placement",
        description:
          "The platform is prepared ready for the water tank to be lifted into place.",
      },
    ],
    faqs: [
      {
        question: "What height can your water tank towers reach?",
        answer:
          "We fabricate towers to the height your site and tank require, built with appropriate bracing for stability.",
      },
      {
        question: "Do the towers come with a ladder for access?",
        answer:
          "Yes, every tower is fitted with a caged ladder for safe climbing access to the top platform.",
      },
      {
        question: "Can you erect the tower on our site?",
        answer:
          "Yes, we erect the steel tower on site with the ladder and platform fitted, ready for the tank.",
      },
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

export type WorkshopMachine = {
  slug: string;
  name: string;
  /** Capacity shown on the card, as given for this machine. */
  capacity: string;
  description: string;
};

/** Plate machines people can come to the Ilepa workshop and borrow. */
export const workshopMachines: WorkshopMachine[] = [
  {
    slug: "rolling-machine",
    name: "Rolling Machine",
    capacity: "1–6 mm",
    description: "Rolls steel plate from 1 mm to 6 mm.",
  },
  {
    slug: "bending-machine",
    name: "Bending Machine",
    capacity: "1–12 mm",
    description: "Bends steel plate from 1 mm to 12 mm.",
  },
  {
    slug: "dishing-machine",
    name: "Dishing Machine",
    capacity: "All covers",
    description: "Dishes all covers.",
  },
  {
    slug: "cutting-machine",
    name: "Cutting Machine",
    capacity: "1–6 mm",
    description: "Cuts steel plate from 1 mm to 6 mm.",
  },
  {
    slug: "drilling-machine",
    name: "Drilling Machine",
    capacity: "All sizes",
    description: "Drills all sizes.",
  },
  {
    slug: "punching-machine",
    name: "Punching Machine",
    capacity: "All sizes",
    description: "Punches all sizes.",
  },
];

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export const stats: Stat[] = [
  { label: "Years Fabricating Steel", value: 30, suffix: "+" },
  { label: "States Across Nigeria", value: 20, suffix: "+" },
  { label: "Fabrication Services", value: 6, suffix: "" },
  { label: "Founded in Lagos", value: 1994, suffix: "" },
];

export type Industry = {
  title: string;
  description: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    title: "Petroleum & Filling Stations",
    description:
      "Canopies, forecourt steel, and storage tanks for stations we have built and renovated.",
    icon: "flame",
  },
  {
    title: "Haulage & Transport",
    description:
      "Fuel tanker trailers and enclosed truck bodies built onto chassis in our workshop.",
    icon: "truck",
  },
  {
    title: "Construction & Warehouses",
    description:
      "Portal frames, roof trusses, and steel roofs fabricated and erected on site.",
    icon: "building",
  },
  {
    title: "Water Supply",
    description:
      "Elevated steel towers with cage ladders and platforms for water tanks.",
    icon: "bolt",
  },
  {
    title: "Industrial Sites",
    description:
      "Vertical and horizontal storage tanks for depots, yards, and factory compounds.",
    icon: "gear",
  },
  {
    title: "Companies Across Nigeria",
    description:
      "Fabrication and site erection for clients in more than 20 states.",
    icon: "anchor",
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
    title: "Project Brief",
    description:
      "We review the job, the site, and your drawings so the steel is sized for the span, load, and layout you need.",
  },
  {
    step: "02",
    title: "Workshop Fabrication",
    description:
      "Cutting, rolling, and welding happen in our Ogun State workshop — tankers, tanks, frames, canopies, bodies, and towers.",
  },
  {
    step: "03",
    title: "Finishing",
    description:
      "Ladders, fittings, and a workshop paint finish are completed before the steel leaves for site.",
  },
  {
    step: "04",
    title: "Site Erection",
    description:
      "Our crews erect the steel on site and hand the job over, for companies across more than 20 Nigerian states.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  /** Optional headshot path under /public (e.g. "/team/afeez.jpg"). Falls back to initials. */
  image?: string;
  /** CSS object-position for tall portraits that would otherwise crop the face. */
  imagePosition?: string;
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
    image: "/images/alao_cyprian.jpeg",
    imagePosition: "center 18%",
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
      "Madlas Global fabricated our warehouse frame and erected it on site. The columns and trusses went up as agreed, and the crew stayed until the steel was complete.",
    name: "Chinedu Okonkwo",
    role: "Project lead, construction company",
    initials: "CO",
  },
  {
    quote:
      "Madlas stripped our old filling station canopy and put up the new one. That is the fabricator we keep calling.",
    name: "Amina Bello",
    role: "Station development, petroleum marketer",
    initials: "AB",
  },
  {
    quote:
      "Our tanker trailers were built in their Ogun workshop — shells, chassis, ladders, and paint — and they were ready to couple.",
    name: "Tunde Adeyemi",
    role: "Fleet manager, haulage company",
    initials: "TA",
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
    title: "What to Confirm Before a Steel Structure Is Fabricated",
    excerpt:
      "Span, load, and site access decide how Madlas Global fabricates a portal frame or roof truss. Here is what we ask before cutting steel in the workshop.",
    category: "Steel Structures",
    date: "2026-08-18",
    readTime: "6 min read",
    author: "Madlas Global",
  },
  {
    slug: "why-mill-certification-matters",
    title: "Why Fabrication and Site Erection Belong With One Company",
    excerpt:
      "A frame built in the workshop still has to stand on your site. Madlas Global fabricates and erects so the same team owns the job from drawing to handover.",
    category: "How We Work",
    date: "2026-07-02",
    readTime: "5 min read",
    author: "Madlas Global",
  },
  {
    slug: "future-of-sustainable-steel-manufacturing",
    title: "Steel Fabrication for Companies Across 20+ Nigerian States",
    excerpt:
      "Madlas Global Investment Company fabricates steelwork and erects it for companies from the office and workshop in Ilepa, Ifo, Ogun State.",
    category: "Company",
    date: "2026-05-27",
    readTime: "5 min read",
    author: "Madlas Global",
  },
  {
    slug: "steel-vs-aluminum-industrial-projects",
    title: "Fuel Tankers, Storage Tanks, and What We Build in the Workshop",
    excerpt:
      "Tank shells, chassis, ladders, and paint finishes are fabricated in Ogun State before a unit is coupled or delivered. A look at how Madlas Global builds tankers and tanks.",
    category: "Fabrication",
    date: "2026-04-11",
    readTime: "5 min read",
    author: "Madlas Global",
  },
  {
    slug: "logistics-of-exporting-steel-globally",
    title: "Taking Fabricated Steel from Ogun State to Sites Across Nigeria",
    excerpt:
      "Workshop fabrication is only half the job. Our crews erect canopies, frames, and towers for companies in more than 20 states.",
    category: "Site Work",
    date: "2026-03-03",
    readTime: "4 min read",
    author: "Madlas Global",
  },
  {
    slug: "top-5-signs-you-need-a-new-steel-supplier",
    title: "The Steelwork Madlas Global Fabricates and Erects",
    excerpt:
      "Canopies, tankers, roof trusses, and water towers are the jobs Madlas Global fabricates in the workshop and erects on site.",
    category: "Company",
    date: "2026-01-20",
    readTime: "4 min read",
    author: "Madlas Global",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What is Madlas Global?",
    answer:
      "Madlas Global is the trading name of Madlas Global Investment Company Limited, a steel fabrication company in Nigeria. We fabricate steel in our workshop and erect it on site for companies across the country.",
  },
  {
    question: "Who is Madlas Global Investment Company?",
    answer:
      "Madlas Global Investment Company Limited is a steel fabrication company in Nigeria. We fabricate fuel tankers, storage tanks, structures, filling station canopies, truck bodies, and elevated water-tank towers, then erect them on site.",
  },
  {
    question: "Where in Nigeria have you worked?",
    answer:
      "We have worked with companies across more than 20 states. The office and workshop are at Km 30, Abeokuta/Lagos Expressway, Ilepa, Ifo, Ogun State.",
  },
  {
    question: "What steelwork do you fabricate?",
    answer:
      "Fuel tanker trailers, vertical and horizontal storage tanks, warehouse portal frames and roof trusses, filling station canopies, enclosed truck bodies, and elevated water-tank towers.",
  },
  {
    question: "Do you erect the steel on site?",
    answer:
      "Yes. We fabricate in the Ogun State workshop and our crews erect frames, canopies, roofs, and towers on site.",
  },
  {
    question: "Can I borrow a machine for my own project?",
    answer:
      "Yes. Come to the Ilepa workshop and borrow a rolling machine (1–6 mm), bending machine (1–12 mm), dishing machine for all covers, cutting machine (1–6 mm), drilling machine, or punching machine. Photos of the machines are coming soon — message us to arrange a time.",
  },
];
