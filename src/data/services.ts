export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  image: string;
  features: { title: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: "structural-steel-erection",
    title: "Structural Steel Erection",
    shortTitle: "Steel Erection",
    subtitle: "Building Strong, Reliable Structures with Expertise",
    description:
      "Modolith's Structural Steel Erection services bring unmatched precision, speed, and expertise to every project. We collaborate closely with clients, engineers, and architects to create steel frameworks that are strong, efficient, and built to last.",
    image: "/images/services/Modolith-Image-108.jpg",
    features: [
      {
        title: "Safety First",
        description:
          "Safety drives every decision on our sites. We maintain strict protocols to protect our workers, your property, and the integrity of the build.",
      },
      {
        title: "Accurate Installation",
        description:
          "Every component is placed with care to ensure maximum strength, stability, and longevity for your structure.",
      },
      {
        title: "Experienced Craftsmanship",
        description:
          "We rely on proven methods and skilled expertise, allowing us to complete steel frameworks efficiently with outstanding results.",
      },
      {
        title: "On-Time Delivery",
        description:
          "Our team is committed to meeting project schedules without compromising quality, ensuring your project moves seamlessly to the next phase.",
      },
    ],
  },
  {
    slug: "pre-engineered-metal-buildings",
    title: "Pre-Engineered Metal Building Erection",
    shortTitle: "Metal Buildings",
    subtitle: "Efficient Solutions for Strong, Reliable Structures",
    description:
      "Modolith excels in the erection of Pre-Engineered Metal Buildings, offering durability, flexibility, and speed without sacrificing quality. As an approved builder with Varco Pruden, our experienced team ensures reliable assembly, cost-effective solutions, and smooth project integration.",
    image: "/images/services/Modolith-Image-107.jpg",
    features: [
      {
        title: "Fast-Track Construction",
        description:
          "Our established methods speed up the building process, allowing you to complete projects quicker and start operations sooner.",
      },
      {
        title: "Cost-Efficient Builds",
        description:
          "We make the most of materials and labor, delivering significant savings while upholding the highest standards of structural integrity.",
      },
      {
        title: "Flexible Design Options",
        description:
          "Pre-engineered buildings don't mean one-size-fits-all - our team customizes layouts and finishes to meet your specific needs.",
      },
      {
        title: "Durable Performance",
        description:
          "Built to endure tough conditions, our pre-engineered structures offer lasting value, minimal maintenance, and dependable strength.",
      },
    ],
  },
  {
    slug: "general-contracting",
    title: "General Contracting",
    shortTitle: "General Contracting",
    subtitle: "Building with Integrity and Expertise",
    description:
      "Modolith provides full-service General Contracting for industrial and commercial projects, overseeing every aspect of construction with transparency and a commitment to quality. From project initiation to final inspection, we manage all phases to ensure smooth execution, budget control, and excellent results.",
    image: "/images/services/Modolith-Image-110.jpg",
    features: [
      {
        title: "Complete Project Oversight",
        description:
          "We handle scheduling, coordination, and supervision, ensuring every milestone is met with accuracy and care.",
      },
      {
        title: "Trusted Subcontractor Network",
        description:
          "Our partnerships with skilled subcontractors mean you benefit from top-tier craftsmanship and seamless collaboration.",
      },
      {
        title: "Budget-Conscious Management",
        description:
          "We closely monitor costs and resources, keeping your project on track without unexpected expenses or delays.",
      },
      {
        title: "Quality at Every Step",
        description:
          "Through rigorous inspections and attention to detail, we deliver a final product that meets and exceeds industry standards.",
      },
    ],
  },
  {
    slug: "construction-consulting",
    title: "Construction Consulting",
    shortTitle: "Consulting",
    subtitle: "Expert Guidance for Every Stage of Your Project",
    description:
      "At Modolith, our Construction Consulting services are designed to support your project from start to finish. We offer strategic guidance, risk management, and efficient planning to ensure every stage progresses smoothly.",
    image: "/images/services/Modolith-Image-111.jpg",
    features: [
      {
        title: "Risk Mitigation",
        description:
          "We identify potential risks early and develop proactive strategies, minimizing disruptions and ensuring project stability.",
      },
      {
        title: "Resource Optimization",
        description:
          "We help you maximize the value of every resource, from manpower to materials, ensuring efficiency without compromising quality.",
      },
      {
        title: "Quality Assurance",
        description:
          "With a focus on stringent quality control, we safeguard the integrity of your construction project, delivering structures that last.",
      },
      {
        title: "Project Efficiency",
        description:
          "Our consulting services are structured to reduce delays, eliminate bottlenecks, and keep your timeline and budget firmly on track.",
      },
    ],
  },
];
