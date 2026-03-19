export interface Project {
  slug: string;
  title: string;
  location: string;
  client: string;
  type: string;
  description: string;
  scope: string[];
  details: string;
  image: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "fort-bend-county-skills-tower",
    title: "Fort Bend County Skills Tower",
    location: "Fort Bend County, TX",
    client: "Fort Bend County Sheriff's Office",
    type: "Design-Build",
    description:
      "Modolith constructed a specialized training facility featuring a structural steel tower designed for law enforcement skill development. The facility enables the sheriff's department to conduct rappelling and scaling training exercises.",
    scope: [
      "Engineering and design",
      "Procurement of materials",
      "Structural steel erection (self-performed)",
      "Concrete work",
      "Masonry work",
      "Electrical and lighting systems",
    ],
    details:
      "Modolith delivered a comprehensive design-build solution, managing all trades coordination while maintaining quality and safety standards throughout execution.",
    image: "/images/projects/fort-bend-skills-tower/DJI_0445.jpg",
    images: [
      "/images/projects/fort-bend-skills-tower/DJI_0502.jpg",
      "/images/projects/fort-bend-skills-tower/DJI_0445.jpg",
      "/images/projects/fort-bend-skills-tower/DJI_0433.jpg",
    ],
  },
  {
    slug: "port-of-freeport-entrance-canopy",
    title: "Port of Freeport Entrance Canopy",
    location: "Freeport, TX",
    client: "Port of Freeport",
    type: "Structural Steel Erection",
    description:
      "Constructed a canted galvanized steel canopy, equipped with PBR roof panels, fascia, and accessories to serve as an entrance gateway for an industrial port facility.",
    scope: [
      "Galvanized steel construction with anti-corrosion coatings",
      "PBR roof panel installation",
      "Integrated drainage channels",
      "Impact-resistant connections and engineered fasteners",
      "Marine-environment durability specifications",
    ],
    details:
      "Steel erection with precise alignment requirements and efficient installation sequencing under tight timeline. Real-time collaboration with general contractor while minimizing operational disruption.",
    image: "/images/projects/port-of-freeport/PFP-Modolith-108.jpg",
    images: [
      "/images/projects/port-of-freeport/PFP-Modolith-108.jpg",
      "/images/projects/port-of-freeport/PFP-Modolith-103.jpg",
    ],
  },
  {
    slug: "brazoria-county-service-centers",
    title: "Brazoria County Service Centers Improvements",
    location: "West Columbia, TX",
    client: "METCO Engineering / Brazoria County",
    type: "PEMB Erection & Consulting",
    description:
      "Modolith provided dual services combining project management consulting with hands-on construction, seamlessly integrating consulting and construction services.",
    scope: [
      "Construction of two new maintenance buildings (PEMB)",
      "Installation of four backup generators",
      "Project management and coordination",
      "Subcontractor management for sitework, foundations, electrical",
      "Submittal reviews and budget analysis",
      "Schedule updates and client meetings",
    ],
    details:
      "The maintenance buildings were designed for durability and flexibility, providing ample space to support future expansion while using cost-effective PEMB construction methods.",
    image: "/images/projects/brazoria-county/BCSC-Image-112.jpg",
    images: [
      "/images/projects/brazoria-county/BCSC-Image-101.jpg",
      "/images/projects/brazoria-county/BCSC-Image-104.jpg",
      "/images/projects/brazoria-county/BCSC-Image-106.jpg",
      "/images/projects/brazoria-county/BCSC-Image-114.jpg",
    ],
  },
  {
    slug: "zachry-jvic-facility-repairs",
    title: "Zachry JVIC Facility Repairs",
    location: "Freeport, TX",
    client: "Zachry JVIC Facility",
    type: "Emergency Repairs",
    description:
      "Following Hurricane Beryl's impact on the industrial facility, Modolith executed urgent structural repairs to restore operational capacity.",
    scope: [
      "Metal panel and framing replacement",
      "Structural restoration of compromised elements",
      "Overhead door installation and replacement",
      "Storm damage assessment and remediation",
    ],
    details:
      "Fast response, strategic execution with immediate mobilization for assessment and material procurement. Replacement materials were selected to improve resilience for future storms, providing greater long-term protection.",
    image: "/images/projects/zachry-jvic/Zachry-JVIC-Image-101.jpg",
    images: [
      "/images/projects/zachry-jvic/Zachry-JVIC-Image-103.jpg",
      "/images/projects/zachry-jvic/Zachry-JVIC-Image-102.jpg",
      "/images/projects/zachry-jvic/Zachry-JVIC-Image-101.jpg",
    ],
  },
  {
    slug: "fort-bend-epicenter-fall-protection",
    title: "Fort Bend Epicenter Fall Protection Modifications",
    location: "Rosenberg, TX",
    client: "Fort Bend Epicenter",
    type: "Structural Steel",
    description:
      "The Fort Bend Epicenter, a state-of-the-art venue for concerts, sporting events, exhibitions, and community gatherings, required enhanced safety upgrades after initial construction.",
    scope: [
      "Installation of additional steel members for fall protection",
      "Elevated walkways reinforcement",
      "Rigging zones support enhancements",
      "Maintenance access point upgrades",
      "Custom steel fabrication and field-welded components",
    ],
    details:
      "Work was performed within the completed structure without disrupting architectural aesthetics or scheduled programming. OSHA and venue-specific compliance standards exceeded with zero impact to public use.",
    image: "/images/projects/fort-bend-epicenter/Fort-Bend-Image-101.jpg",
    images: [
      "/images/projects/fort-bend-epicenter/modolith-image-001.jpg",
      "/images/projects/fort-bend-epicenter/modolith-image-002.jpg",
      "/images/projects/fort-bend-epicenter/Fort-Bend-Image-101.jpg",
    ],
  },
  {
    slug: "metro-transit-authority-energy-efficiency",
    title: "METRO Transit Authority Energy Efficiency Upgrades",
    location: "Houston, TX",
    client: "METRO Transit Authority",
    type: "Project Management Consulting",
    description:
      "Comprehensive energy efficiency upgrade initiative across Houston-based transit facilities focused on reducing operational costs and advancing sustainability.",
    scope: [
      "Chiller replacements with high-efficiency models",
      "Cooling tower refurbishments",
      "Control systems integration and automation",
      "LED lighting retrofits",
      "Plumbing upgrades with water-saving systems",
      "Air handler enhancements",
    ],
    details:
      "Modolith provided hands-on project management consulting that bridged the technical gap between contractors, engineers, and stakeholders. Services included procurement verification, milestone tracking, and issue resolution.",
    image: "/images/projects/metro/Metro-Project-Image-102.jpg",
    images: [
      "/images/projects/metro/Metro-Project-Image-102.jpg",
      "/images/projects/metro/modolith-image-003.jpg",
    ],
  },
  {
    slug: "colorado-custom-millwork-building",
    title: "Colorado Custom Millwork Building",
    location: "Buda, TX",
    client: "Colorado Custom Millwork",
    type: "PEMB Erection",
    description:
      "Complete erection services for a 36,000 square foot industrial metal building facility, delivered with a commitment to craftsmanship, structural integrity, and on-time delivery.",
    scope: [
      "Steel erection and structural member installation",
      "Full framing system and exterior wall panel installation",
      "Energy-efficient insulation in wall and roof assemblies",
      "Personnel doors and interior metal liner systems",
      "Flashing, closures, and architectural trim work",
      "Standing seam roof system installation",
    ],
    details:
      "Modolith's hands-on approach rather than outsourcing phases improves timeline control and quality assurance throughout construction.",
    image: "/images/projects/colorado-millwork/Millwork-Project-Image-103.jpg",
    images: [
      "/images/projects/colorado-millwork/Millwork-Project-Image-101.jpg",
      "/images/projects/colorado-millwork/Millwork-Project-Image-102.jpg",
      "/images/projects/colorado-millwork/Millwork-Project-Image-103.jpg",
    ],
  },
  {
    slug: "wwtp-improvements",
    title: "WWTP Improvements",
    location: "Olive Branch, MS",
    client: "Municipal Water Authority",
    type: "PEMB Erection",
    description:
      "Modolith erected four specialized steel structures to support wastewater treatment operations, engineered to withstand harsh, moisture-heavy environments while maintaining regulatory compliance.",
    scope: [
      "Laboratory building - climate-controlled with precision framing",
      "Lime feeder building - corrosion-resistant with ventilation",
      "Two tank covers - weather-sealed metal enclosures",
      "Coordination around existing infrastructure",
    ],
    details:
      "Self-performed steel erection executed with exacting tolerances across all four PEMB structures. Zero disruption to active utility operations during construction.",
    image: "/images/projects/wwtp/WWTP-Image-102.jpg",
    images: [
      "/images/projects/wwtp/WWTP-Image-102.jpg",
      "/images/projects/wwtp/modolith-image-004.jpg",
    ],
  },
  {
    slug: "va-garage-expansion",
    title: "VA Garage Expansion",
    location: "Johnson City, TN",
    client: "Veterans Affairs",
    type: "Project Management Consulting",
    description:
      "Multi-phase infrastructure improvement at a VA medical campus addressing growing facility needs through three primary construction components.",
    scope: [
      "Pedestrian bridge construction with foundation coordination",
      "Parking garage vertical expansion with staged sequencing",
      "Courtyard development with ADA-compliant walkways",
      "Contractor coordination across three active construction areas",
    ],
    details:
      "Modolith aligned construction sequencing, contractor coordination, materials delivery, and site safety while ensuring compliance with VA safety standards and ADA requirements.",
    image: "/images/projects/va-garage/VA-Garage-103.jpg",
    images: [
      "/images/projects/va-garage/VA-Garage-102.jpg",
      "/images/projects/va-garage/VA-Garage-103.jpg",
    ],
  },
  {
    slug: "brazosport-college-joc",
    title: "Brazosport College JOC",
    location: "Lake Jackson, TX",
    client: "Brazosport College",
    type: "Job Order Contracting",
    description:
      "Modolith serves as an approved JOC vendor for Brazosport College, functioning as an on-call contracting partner for facility maintenance, repairs, and small-scale construction.",
    scope: [
      "Classroom and laboratory improvements",
      "Roofing repairs and waterproofing",
      "ADA accessibility upgrades",
      "Interior finish refurbishment",
      "Mechanical and electrical system updates",
      "Emergency facility repairs",
    ],
    details:
      "The JOC model allows rapid response to campus needs with focus on budget control, scheduling precision, and code compliance. Partnership since 2021.",
    image: "/images/projects/brazosport-college/BrazosportCollege-SecondaryLogo.jpg",
    images: [
      "/images/projects/brazosport-college/BrazosportCollege-SecondaryLogo.jpg",
    ],
  },
];
