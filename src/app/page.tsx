import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { ArrowRight, Shield, Target, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Modolith Structures | Houston General Contractor",
  description:
    "Standing Structures. Setting Standards. Expert structural steel erection, pre-engineered metal buildings, general contracting, and construction consulting in Houston, TX.",
};

const partners = [
  { name: "Metco Engineering", url: "https://www.metcoengineering.com/" },
  { name: "Zachry Group", url: "https://zachrygroup.com/" },
  { name: "Varco Pruden", url: "https://varcopruden.com/" },
  { name: "Brazosport College", url: "https://www.brazosport.edu/" },
  { name: "Americus Holdings", url: "https://www.americusholdings.com/" },
  { name: "Advon Construction", url: "https://advonconstruction.com/" },
  { name: "SSP Engineering", url: "https://sspeng.com/" },
  { name: "BP", url: "https://www.bp.com/" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <Image
          src="/images/projects/fort-bend-skills-tower/DJI_0445.jpg"
          alt="Modolith Structures - Steel Construction"
          fill
          className="object-cover animate-ken-burns"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
              Design. Build. Inspire.
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight mb-6 animate-fade-in-up-delay">
              Standing Structures.
              <br />
              <span className="gold-gradient-text">Setting Standards.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl animate-fade-in-up-delay-2">
              Expert structural steel erection, pre-engineered metal buildings,
              general contracting, and construction consulting in Houston, TX.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-2">
              <Link
                href="/contact"
                className="bg-accent text-white px-8 py-4 font-semibold rounded hover:bg-accent-dark transition-colors btn-interact"
              >
                Get a Quote
              </Link>
              <Link
                href="/portfolio"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-semibold rounded border border-white/20 hover:bg-white/20 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-dark mb-4">
                Our Services
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                At Modolith, we do more than construct buildings - we create
                trust and deliver excellence.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="group bg-light rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-dark mb-2 group-hover:text-accent transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {service.description.split(".")[0]}.
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                  About Modolith
                </p>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-6">
                  Built to Last.
                  <br />
                  Designed to Lead.
                </h2>
                <div className="section-divider mb-8" />
                <p className="text-white/75 leading-relaxed mb-6">
                  At Modolith, we view construction as more than building - it&apos;s
                  about creating lasting value. We are committed to quality,
                  safety, and innovation, delivering robust structural solutions
                  that redefine what&apos;s achievable.
                </p>
                <p className="text-white/75 leading-relaxed mb-8">
                  Founded in 2021 as a construction consulting firm specializing
                  in risk management and quality control, we expanded in 2023 to
                  include self-performing structural steel and metal building
                  capabilities.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Safety First</p>
                      <p className="text-white/50 text-sm">Rigorous protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Precision</p>
                      <p className="text-white/50 text-sm">Expert execution</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">On-Time</p>
                      <p className="text-white/50 text-sm">Reliable delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Quality</p>
                      <p className="text-white/50 text-sm">Exceeding standards</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 font-semibold rounded hover:bg-accent-dark transition-colors btn-interact"
                >
                  About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative">
                <div className="relative h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/services/Modolith-Image-108.jpg"
                    alt="Modolith - Structural Steel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-xl">
                  <p className="text-3xl font-bold font-[family-name:var(--font-heading)]">5+</p>
                  <p className="text-sm text-white/80">Years of Excellence</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                Our Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-dark mb-4">
                Delivering Excellence Across Every Build
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 6).map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group relative h-72 rounded-xl overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-1">
                      {project.type}
                    </p>
                    <h3 className="text-white font-bold text-lg font-[family-name:var(--font-heading)]">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm">{project.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 font-semibold rounded hover:bg-primary-light transition-colors btn-interact"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-center text-sm text-gray-500 font-semibold tracking-widest uppercase mb-10">
              Trusted By Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors text-sm font-bold tracking-wider uppercase"
                >
                  {partner.name}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/services/Modolith-Image-106-1024x576.jpg"
          alt="Construction"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Strategic. Reliable. Built to Perform.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-6">
            Let&apos;s Build Something That Lasts
          </h2>
          <p className="text-white/75 mb-10 text-lg">
            Whether you&apos;re planning a complex steel structure or seeking
            expert guidance for your next project, Modolith is here to deliver.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-10 py-4 font-semibold rounded text-lg hover:bg-accent-dark transition-colors btn-interact"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
