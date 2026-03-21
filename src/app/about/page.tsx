import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Modolith Structures - founded in 2021, committed to quality, safety, and innovation in construction. Meet our experienced team.",
};

const team = [
  {
    name: "Leandro Morales",
    title: "Owner Operator",
    bio: "Polished construction professional with extensive experience managing diverse projects including high-rise buildings, hospitals, bridges, airports, convention centers, parking structures, and critical NASA infrastructure. Holds a degree in Construction Science from Texas A&M University.",
    image: "/images/services/Modolith-Image-102-1024x1024.jpg",
  },
  {
    name: "Estevan Cantu",
    title: "Field Operations",
    bio: "Over a decade of experience as Ironworker, Foreman, and Superintendent. Specializes in industrial towers, metal buildings, platforms, pipe racks, and superstructures.",
    image: "/images/services/Modolith-Image-108.jpg",
  },
  {
    name: "Daniel Garcia",
    title: "Quality Control & Safety",
    bio: "Specialty Pipefitter, Ironworker, and Quality Control/Safety Manager with experience across heavy industrial, commercial, and critical infrastructure projects.",
    image: "/images/services/Modolith-Image-110.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Get to Know Us"
        image="/images/services/Modolith-Image-102-1024x1024.jpg"
      />

      {/* About Company - Asymmetric layout */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="about-section">
              <figure>
                <Image
                  src="/images/projects/fort-bend-skills-tower/DJI_0502.jpg"
                  alt="Modolith Construction"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 991px) 100vw, 66vw"
                />
              </figure>
              <div className="about-caption">
                <div className="section-number">.01</div>
                <div className="section-subtitle">Our Company</div>
                <div className="section-title">About Modolith</div>
                <p>
                  At Modolith, we view construction as more than building -
                  it&apos;s about creating lasting value. We are committed to
                  quality, safety, and innovation, delivering robust structural
                  solutions that redefine what&apos;s achievable.
                </p>
                <p>
                  Our services span structural steel erection, pre-engineered
                  metal building installation, general contracting, and
                  construction consulting - all built on skilled craftsmanship.
                </p>
                <div className="butn-dark">
                  <Link href="/services">
                    <span>
                      Our services <ArrowRight className="inline h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* History - Asymmetric reversed */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="asymmetric-section">
              <figure>
                <Image
                  src="/images/projects/brazoria-county/BCSC-Image-112.jpg"
                  alt="Company History"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 991px) 100vw, 66vw"
                />
              </figure>
              <div className="asymmetric-caption">
                <div className="section-number">.02</div>
                <div className="section-subtitle">Our History</div>
                <div className="section-title">Strong Founding</div>
                <p>
                  Founded in 2021, Modolith was established as a construction
                  consulting firm specializing in risk management and quality
                  control, laying the groundwork for our commitment to
                  construction excellence.
                </p>
                <p>
                  In 2023, we added self-performing structural steel and metal
                  building capabilities, becoming a full-service construction
                  firm with design, build, fabrication, and self-perform
                  capabilities.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="relative mb-[30px] text-center">
            <div className="section-number">.03</div>
            <div className="section-subtitle">What Drives Us</div>
            <div className="section-title">Mission & Vision</div>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="border border-primary-light border-t-2 border-t-accent p-10 transition-colors hover:bg-primary-light">
                <div className="section-subtitle mb-4">Our Mission</div>
                <h3 className="mb-4 text-[24px] font-normal uppercase tracking-[1px] text-white"
                  style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                >
                  Building Trust Through Excellence
                </h3>
                <p>
                  Position ourselves as a trusted full-service construction firm
                  by incorporating design, build, fabrication, and self-perform
                  capabilities.
                </p>
              </div>
              <div className="border border-primary-light border-t-2 border-t-accent p-10 transition-colors hover:bg-primary-light">
                <div className="section-subtitle mb-4">Our Vision</div>
                <h3 className="mb-4 text-[24px] font-normal uppercase tracking-[1px] text-white"
                  style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                >
                  Leading with Innovation
                </h3>
                <p>
                  Lead the construction industry with innovation, expertise, and
                  steadfast commitment, earning trust as a reliable partner who
                  delivers outstanding results.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="relative mb-[30px] text-center">
            <div className="section-number">.04</div>
            <div className="section-subtitle">Our Experts</div>
            <div className="section-title">Leadership Team</div>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {team.map((member) => (
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
                    <p className="text-accent">{member.title}</p>
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
