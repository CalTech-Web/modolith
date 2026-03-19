import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import {
  ArrowRight,
  ChevronDown,
  Hammer,
  Building2,
  HardHat,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Modolith Structures | Houston General Contractor",
  description:
    "Standing Structures. Setting Standards. Expert structural steel erection, pre-engineered metal buildings, general contracting, and construction consulting in Houston, TX.",
};

const serviceIcons = [Hammer, Building2, HardHat, ClipboardCheck];

const partners = [
  "Metco Engineering",
  "Zachry Group",
  "Varco Pruden",
  "Brazosport College",
  "Americus Holdings",
  "Advon Construction",
  "SSP Engineering",
  "BP",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-screen min-h-[600px] items-center overflow-hidden">
        <Image
          src="/images/projects/fort-bend-skills-tower/DJI_0445.jpg"
          alt="Modolith Structures - Steel Construction"
          fill
          className="animate-ken-burns object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />

        {/* Geometric accent lines */}
        <div className="absolute top-20 left-8 z-10 hidden lg:block">
          <div className="h-24 w-px bg-accent/40" />
          <div className="mt-1 h-px w-24 bg-accent/40" />
        </div>
        <div className="absolute right-8 bottom-32 z-10 hidden lg:block">
          <div className="ml-auto h-px w-24 bg-accent/40" />
          <div className="ml-auto mt-1 h-24 w-px bg-accent/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="animate-fade-in-up mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
              Design. Build. Inspire.
            </p>
            <h1 className="font-[family-name:var(--font-heading)] animate-fade-in-up-delay mb-6 text-5xl leading-tight font-bold text-white md:text-6xl lg:text-7xl">
              Standing Structures.
              <br />
              <span className="gold-gradient-text">Setting Standards.</span>
            </h1>
            <p className="animate-fade-in-up-delay-2 mb-10 max-w-xl text-lg text-white/80 md:text-xl">
              Expert structural steel erection, pre-engineered metal buildings,
              general contracting, and construction consulting in Houston, TX.
            </p>
            <div className="animate-fade-in-up-delay-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-interact group inline-flex items-center gap-2 rounded bg-accent px-8 py-4 font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="rounded border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/20"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-scroll-bounce absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <ChevronDown className="h-6 w-6 text-white/50" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                What We Do
              </p>
              <h2 className="font-[family-name:var(--font-heading)] mb-4 text-4xl font-bold text-white md:text-5xl">
                Our Services
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="mx-auto max-w-2xl text-white/60">
                At Modolith, we do more than construct buildings - we create
                trust and deliver excellence.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, idx) => {
                const Icon = serviceIcons[idx];
                return (
                  <Link
                    key={service.slug}
                    href={`/services#${service.slug}`}
                    className="card-hover gold-border-top group overflow-hidden rounded-xl bg-primary"
                  >
                    <div className="img-zoom relative h-52">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-[family-name:var(--font-heading)] mb-2 text-lg font-bold text-white transition-colors group-hover:text-accent">
                        {service.shortTitle}
                      </h3>
                      <p className="line-clamp-3 text-sm text-white/60">
                        {service.description.split(".")[0]}.
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Preview - Mission & Vision */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                Who We Are
              </p>
              <h2 className="font-[family-name:var(--font-heading)] mb-4 text-4xl font-bold text-white md:text-5xl">
                More Than Building -
                <br />
                Creating Lasting Value
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="mx-auto max-w-3xl text-lg text-white/60">
                At Modolith, we view construction as more than building - it&apos;s
                about creating lasting value. We are committed to quality,
                safety, and innovation, delivering robust structural solutions
                that redefine what&apos;s achievable.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="glass rounded-xl p-10">
                <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                  Our Mission
                </p>
                <h3 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-bold text-white">
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
                <h3 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-bold text-white">
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

          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="btn-interact group inline-flex items-center gap-2 rounded border border-accent px-8 py-3.5 font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                Our Work
              </p>
              <h2 className="font-[family-name:var(--font-heading)] mb-4 text-4xl font-bold text-white md:text-5xl">
                Delivering Excellence Across Every Build
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.slice(0, 8).map((project, i) => (
              <ScrollReveal key={project.slug} direction="scale">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="img-zoom group relative block h-72 overflow-hidden rounded-xl"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-accent/90 px-5 py-2 text-xs font-semibold tracking-wide text-white uppercase">
                      View Project
                    </span>
                  </div>
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <span className="mb-2 inline-block rounded-full bg-accent/20 px-3 py-0.5 text-xs font-semibold tracking-wider text-accent uppercase backdrop-blur-sm">
                      {project.type}
                    </span>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/60">{project.location}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="btn-interact group inline-flex items-center gap-2 rounded bg-accent px-8 py-3.5 font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                Trusted By
              </p>
              <h2 className="font-[family-name:var(--font-heading)] mb-4 text-4xl font-bold text-white md:text-5xl">
                Our Partners
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {partners.map((name) => (
                <span
                  key={name}
                  className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-wide text-white/40 transition-colors hover:text-accent md:text-xl"
                >
                  {name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <Image
          src="/images/services/Modolith-Image-106-1024x576.jpg"
          alt="Construction"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
              Strategic. Reliable. Built to Perform.
            </p>
            <h2 className="font-[family-name:var(--font-heading)] mb-6 text-4xl font-bold md:text-5xl">
              Let&apos;s Build Something That Lasts
            </h2>
            <p className="mb-10 text-lg text-white/75">
              Whether you&apos;re planning a complex steel structure or seeking
              expert guidance for your next project, Modolith is here to deliver.
            </p>
            <Link
              href="/contact"
              className="btn-interact group inline-flex items-center gap-2 rounded border-2 border-accent bg-accent px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-dark hover:border-accent-dark"
            >
              Contact Us
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
