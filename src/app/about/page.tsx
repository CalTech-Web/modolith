import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowRight,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";

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

const timeline = [
  {
    year: "2021",
    title: "Founded",
    description:
      "Modolith was established as a construction consulting firm specializing in risk management and quality control, laying the groundwork for our commitment to construction excellence.",
  },
  {
    year: "2023",
    title: "Expansion",
    description:
      "Added self-performing structural steel and metal building capabilities, becoming a full-service construction firm with design, build, fabrication, and self-perform capabilities.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Safety",
    description: "Rigorous protocols protecting workers, property, and build integrity.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Expert execution with accuracy and attention to detail on every project.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Close partnership with clients, engineers, and architects at every stage.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Modern techniques and technologies that keep projects efficient and effective.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Modolith"
        subtitle="With a commitment to quality and excellence, Modolith focuses on providing enduring value to clients through expert construction solutions."
        image="/images/services/Modolith-Image-102-1024x1024.jpg"
      />

      {/* Our Company */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                  Our Company
                </p>
                <h2 className="font-[family-name:var(--font-heading)] mb-6 text-3xl font-bold text-dark md:text-4xl">
                  More Than Building -
                  <br />
                  Creating Lasting Value
                </h2>
                <div className="section-divider mb-8" />
                <p className="mb-6 leading-relaxed text-gray-600">
                  At Modolith, we view construction as more than building - it&apos;s
                  about creating lasting value. We are committed to quality,
                  safety, and innovation, delivering robust structural solutions
                  that redefine what&apos;s achievable.
                </p>
                <p className="mb-6 leading-relaxed text-gray-600">
                  Our services span structural steel erection, pre-engineered
                  metal building installation, general contracting, and
                  construction consulting - all built on skilled craftsmanship.
                </p>
                <p className="leading-relaxed text-gray-600">
                  Guided by dedication and accuracy, Modolith provides complete
                  construction solutions that fulfill expectations and deliver
                  lasting value to every project.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative h-[450px] overflow-hidden rounded-xl">
                <Image
                  src="/images/projects/fort-bend-skills-tower/DJI_0502.jpg"
                  alt="Modolith Construction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                Our Values
              </p>
              <h2 className="font-[family-name:var(--font-heading)] mb-4 text-3xl font-bold text-dark md:text-4xl">
                What Drives Us
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="card-hover rounded-xl bg-white p-8 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] mb-2 text-lg font-bold text-dark">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                Our History
              </p>
              <h2 className="font-[family-name:var(--font-heading)] mb-6 text-3xl font-bold text-dark md:text-4xl">
                Strong Structural Founding
              </h2>
              <div className="section-divider mx-auto mb-16" />
            </div>
          </ScrollReveal>

          {/* Vertical timeline */}
          <div className="relative mx-auto max-w-3xl">
            {/* Gold timeline line */}
            <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-accent/30 max-md:left-6" />

            {timeline.map((item, i) => (
              <ScrollReveal
                key={item.year}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative mb-12 flex items-start gap-8 last:mb-0 max-md:ml-12 ${
                    i % 2 === 0
                      ? "md:flex-row md:text-right"
                      : "md:flex-row-reverse md:text-left"
                  }`}
                >
                  <div className="flex-1">
                    <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
                      <div className="font-[family-name:var(--font-heading)] mb-2 text-3xl font-bold text-accent">
                        {item.year}
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-dark">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  {/* Dot on the line */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 max-md:left-[-18px]">
                    <div className="h-4 w-4 rounded-full border-4 border-accent bg-white" />
                  </div>
                  <div className="hidden flex-1 md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="glass rounded-xl p-10">
                <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                  Our Mission
                </p>
                <h3 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-bold">
                  Building Trust Through Excellence
                </h3>
                <p className="leading-relaxed text-white/70">
                  Position ourselves as a trusted full-service construction firm
                  by incorporating design, build, fabrication, and self-perform
                  capabilities.
                </p>
              </div>
              <div className="glass rounded-xl p-10">
                <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                  Our Vision
                </p>
                <h3 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-bold">
                  Leading with Innovation
                </h3>
                <p className="leading-relaxed text-white/70">
                  Lead the construction industry with innovation, expertise, and
                  steadfast commitment, earning trust as a reliable partner who
                  delivers outstanding results and fosters enduring client
                  relationships.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                Our Team
              </p>
              <h2 className="font-[family-name:var(--font-heading)] mb-4 text-3xl font-bold text-dark md:text-4xl">
                Experience, Expertise, Excellence
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="card-hover group overflow-hidden rounded-xl bg-light"
                >
                  <div className="img-zoom relative h-72 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* Hover overlay with bio */}
                    <div className="absolute inset-0 flex items-end bg-primary/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-sm leading-relaxed text-white/90">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  <div className="border-b-3 border-transparent p-6 transition-colors group-hover:border-accent">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-dark">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-accent">
                      {member.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <Image
          src="/images/projects/colorado-millwork/Millwork-Project-Image-103.jpg"
          alt="Construction"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] mb-6 text-3xl font-bold md:text-4xl">
              Let&apos;s Build Something That Lasts
            </h2>
            <p className="mb-10 text-lg text-white/75">
              Whether you&apos;re planning a complex steel structure or seeking
              expert guidance for your next project, Modolith is here to deliver.
            </p>
            <Link
              href="/contact"
              className="btn-interact group inline-flex items-center gap-2 rounded bg-accent px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Contact Us <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
