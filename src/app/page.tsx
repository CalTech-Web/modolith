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
                <div className="section-subtitle">About</div>
                <div className="section-title">Strong Structural Founding</div>
                <p>
                  Guided by dedication and accuracy, Modolith provides complete
                  construction solutions that fulfill expectations and deliver
                  lasting value to every project.
                </p>
                <p>
                  At Modolith, we view construction as more than building - it&apos;s
                  about creating lasting value. We are committed to quality,
                  safety, and innovation, delivering robust structural solutions
                  that redefine what&apos;s achievable.
                </p>
                <div className="butn-dark">
                  <Link href="/about">
                    <span>
                      Learn More <ArrowRight className="inline h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="relative mb-[30px]">
              <div className="section-number">.02</div>
              <div className="section-subtitle">What We Do</div>
              <div className="section-title">Services</div>
              <p className="mt-4 max-w-3xl">
                At Modolith, we don&apos;t just build structures - we build standards.
                Known for delivering reliable construction solutions, our team is
                committed to completing successful projects through careful planning
                and skilled execution.
              </p>
            </div>
          </ScrollReveal>
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

      {/* History / Mission / Vision */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="asymmetric-section">
              <figure>
                <Image
                  src="/images/services/Modolith-Image-107.jpg"
                  alt="Modolith History"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 991px) 100vw, 66vw"
                />
              </figure>
              <div className="asymmetric-caption">
                <div className="section-number">.03</div>
                <div className="section-subtitle">Since 2021</div>
                <div className="section-title">Our Story</div>
                <p>
                  Founded in 2021, Modolith began as a construction consulting
                  firm specializing in risk management and quality control for
                  commercial projects. Over the years, we have solidified
                  relationships with existing clients to strategically grow into
                  a full service firm. In 2023, we expanded our scope to include
                  self-performing structural steel and metal buildings,
                  positioning ourselves as a multi faceted company.
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

      {/* Mission & Vision Cards */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden border border-primary-light p-10">
                {/* Background icon */}
                <svg
                  className="absolute -right-4 -bottom-4 h-40 w-40 text-accent opacity-[0.07]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                <div className="section-subtitle mb-4">Our Mission</div>
                <p>
                  At Modolith, our mission is to position ourselves as a trusted
                  full service construction firm by incorporating design, build,
                  fabrication, and self perform capabilities. We strive to be more
                  than just a service provider; we aim to be a valued partner to
                  our clients, ensuring their visions are realized with precision
                  and care.
                </p>
              </div>
              <div className="relative overflow-hidden border border-primary-light p-10">
                {/* Background icon */}
                <svg
                  className="absolute -right-4 -bottom-4 h-40 w-40 text-accent opacity-[0.07]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                <div className="section-subtitle mb-4">Our Vision</div>
                <p>
                  To lead the construction industry with innovation, expertise,
                  and steadfast commitment, earning trust as a reliable partner
                  who delivers outstanding results and fosters enduring client
                  relationships.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="relative mb-[30px]">
            <div className="section-number">.04</div>
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
                      fill
                      className="object-cover"
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

      {/* CTA - Let's Build Something That Lasts */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="about-section">
              <figure>
                <Image
                  src="/images/projects/brazoria-county/BCSC-Image-112.jpg"
                  alt="Let's Build Something That Lasts"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 991px) 100vw, 66vw"
                />
              </figure>
              <div className="about-caption">
                <div className="section-number">.05</div>
                <div className="section-subtitle">Strategic. Reliable. Built to Perform.</div>
                <div className="section-title">
                  Let&apos;s Build Something That Lasts
                </div>
                <p>
                  Whether you&apos;re planning a complex steel structure or seeking
                  expert guidance for your next project, Modolith is here to
                  deliver. Our team combines skilled construction with insightful
                  consultation to ensure every project meets top standards.
                  Partner with us to bring your vision to life.
                </p>
                <div className="butn-dark">
                  <Link href="/contact">
                    <span>
                      Contact Us <ArrowRight className="inline h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/services/Modolith-Image-110.jpg"
            alt="Collaboration"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1140px] px-4 text-center">
          <ScrollReveal>
            <div className="section-subtitle">Collaboration</div>
            <h2
              className="mx-auto mb-6 max-w-3xl text-[48px] font-500 uppercase leading-tight tracking-[3px] text-white md:text-[60px]"
              style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
            >
              Let&apos;s work together.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-[16px] leading-relaxed text-white/70">
              Your vision is the blueprint - Modolith is here to bring it to
              life. Whether it&apos;s structural steel erection, general
              contracting, or pre-engineered metal building solutions, our team
              is ready to support your project from concept to completion.
            </p>
            <div className="butn-dark">
              <Link href="/contact">
                <span>
                  Let&apos;s Talk <ArrowRight className="inline h-4 w-4" />
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
