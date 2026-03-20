import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HeroVideo from "@/components/HeroVideo";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Modolith Structures | Houston General Contractor",
  description:
    "Standing Structures. Setting Standards. Expert structural steel erection, pre-engineered metal buildings, general contracting, and construction consulting in Houston, TX.",
};

const teamMembers = [
  {
    name: "Leandro Morales",
    role: "Owner Operator",
    image: "/images/services/Modolith-Image-108.jpg",
  },
  {
    name: "Estevan Cantu",
    role: "Field Operations",
    image: "/images/services/Modolith-Image-107.jpg",
  },
  {
    name: "Daniel Garcia",
    role: "Quality Control & Safety",
    image: "/images/services/Modolith-Image-110.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Video */}
      <HeroVideo />

      {/* About Section - Asymmetric layout */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="about-section">
              <figure>
                <Image
                  src="/images/services/Modolith-Image-108.jpg"
                  alt="About Modolith Structures"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 991px) 100vw, 66vw"
                />
              </figure>
              <div className="about-caption">
                <div className="section-number">.01</div>
                <div className="section-subtitle">Get to know us</div>
                <div className="section-title">About Company</div>
                <p>
                  Modolith Structures is a Houston-based general contractor
                  founded in 2021, specializing in structural steel erection,
                  pre-engineered metal buildings, general contracting, and
                  construction consulting.
                </p>
                <p>
                  We view construction as more than building - it&apos;s about
                  creating lasting value. We are committed to quality, safety,
                  and innovation, delivering robust structural solutions.
                </p>
                <div className="butn-dark">
                  <Link href="/about">
                    <span>
                      Read more <ArrowRight className="inline h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-[90px]">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="service-card"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                >
                  <div className="service-content">
                    <div className="mb-5 flex justify-center">
                      <Image
                        src="/images/logos/modolith-reduced-logo.png"
                        alt=""
                        width={80}
                        height={80}
                        className="!h-[60px] !w-[60px] object-contain opacity-80"
                      />
                    </div>
                    <h5>{service.shortTitle}</h5>
                    <p>{service.description.split(".")[0]}.</p>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="relative mb-[30px]">
            <div className="section-number">.03</div>
            <div className="section-subtitle">Portfolio</div>
            <div className="section-title">Our Projects</div>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 6).map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="project-card group"
                >
                  <div className="project-card-img">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="project-card-content">
                    <div className="project-card-tagline">{project.type}</div>
                    <div className="project-card-title">{project.title}</div>
                    <div className="project-card-arrow">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-12 text-center">
            <div className="butn-dark">
              <Link href="/portfolio">
                <span>
                  View all projects <ArrowRight className="inline h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Asymmetric layout (reversed) */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="asymmetric-section">
              <figure>
                <Image
                  src="/images/projects/brazoria-county/BCSC-Image-112.jpg"
                  alt="Featured Project"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 991px) 100vw, 66vw"
                />
              </figure>
              <div className="asymmetric-caption">
                <div className="section-number">.04</div>
                <div className="section-subtitle">Take a look at our</div>
                <div className="section-title">Recent Project</div>
                <p>
                  Modolith provided dual services combining project management
                  consulting with hands-on construction for Brazoria County
                  Service Centers, seamlessly integrating consulting and
                  construction services.
                </p>
                <div className="butn-dark">
                  <Link href="/portfolio/brazoria-county-service-centers">
                    <span>
                      See project <ArrowRight className="inline h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="relative mb-[30px] text-center">
            <div className="section-number">.05</div>
            <div className="section-subtitle">Our Experts</div>
            <div className="section-title">Leadership Team</div>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {teamMembers.map((member) => (
                <div key={member.name} className="team-card">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={600}
                      height={700}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="team-info">
                    <h5>{member.name}</h5>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
