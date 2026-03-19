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
        title="About Modolith"
        subtitle="With a commitment to quality and excellence, Modolith focuses on providing enduring value to clients through expert construction solutions."
        image="/images/services/Modolith-Image-102-1024x1024.jpg"
      />

      {/* Our Company */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                  Our Company
                </p>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-dark mb-6">
                  More Than Building -
                  <br />
                  Creating Lasting Value
                </h2>
                <div className="section-divider mb-8" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  At Modolith, we view construction as more than building - it&apos;s
                  about creating lasting value. We are committed to quality,
                  safety, and innovation, delivering robust structural solutions
                  that redefine what&apos;s achievable.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our services span structural steel erection, pre-engineered
                  metal building installation, general contracting, and
                  construction consulting - all built on skilled craftsmanship.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Guided by dedication and accuracy, Modolith provides complete
                  construction solutions that fulfill expectations and deliver
                  lasting value to every project.
                </p>
              </div>
              <div className="relative h-[450px] rounded-xl overflow-hidden">
                <Image
                  src="/images/projects/fort-bend-skills-tower/DJI_0502.jpg"
                  alt="Modolith Construction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                Our History
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-dark mb-6">
                Strong Structural Founding
              </h2>
              <div className="section-divider mx-auto mb-10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="text-accent text-3xl font-bold font-[family-name:var(--font-heading)] mb-3">
                  2021
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Founded</h3>
                <p className="text-gray-600">
                  Modolith was established as a construction consulting firm
                  specializing in risk management and quality control, laying the
                  groundwork for our commitment to construction excellence.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="text-accent text-3xl font-bold font-[family-name:var(--font-heading)] mb-3">
                  2023
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">Expansion</h3>
                <p className="text-gray-600">
                  Added self-performing structural steel and metal building
                  capabilities, becoming a full-service construction firm with
                  design, build, fabrication, and self-perform capabilities.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                  Our Mission
                </p>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
                  Building Trust Through Excellence
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Position ourselves as a trusted full-service construction firm
                  by incorporating design, build, fabrication, and self-perform
                  capabilities.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                  Our Vision
                </p>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
                  Leading with Innovation
                </h3>
                <p className="text-white/70 leading-relaxed">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                Our Team
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-dark mb-4">
                Experience, Expertise, Excellence
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-light rounded-xl overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-dark">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold text-sm mb-3">
                      {member.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/projects/colorado-millwork/Millwork-Project-Image-103.jpg"
          alt="Construction"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-6">
            Let&apos;s Build Something That Lasts
          </h2>
          <p className="text-white/75 mb-10 text-lg">
            Whether you&apos;re planning a complex steel structure or seeking
            expert guidance for your next project, Modolith is here to deliver.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 font-semibold rounded text-lg hover:bg-accent-dark transition-colors btn-interact"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
