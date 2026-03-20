import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Modolith offers structural steel erection, pre-engineered metal buildings, general contracting, and construction consulting. Built to Last. Designed to Lead.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="What We Do"
        image="/images/services/Modolith-Image-106-1024x576.jpg"
      />

      {/* Services - Alternating asymmetric layouts */}
      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className="section-padding"
        >
          <div className="mx-auto max-w-[1140px] px-4">
            <ScrollReveal>
              <div className={i % 2 === 0 ? "about-section" : "asymmetric-section"}>
                <figure>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                    sizes="(max-width: 991px) 100vw, 66vw"
                  />
                </figure>
                <div className={i % 2 === 0 ? "about-caption" : "asymmetric-caption"}>
                  <div className="section-number">.0{i + 1}</div>
                  <div className="section-subtitle">{service.shortTitle}</div>
                  <div className="section-title text-[35px] lg:text-[45px]">
                    {service.title}
                  </div>
                  <p>{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature.title}
                        className="flex items-center gap-3 text-[15px] text-gray-warm"
                      >
                        <span className="text-accent">&#9656;</span>
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                  <div className="butn-dark">
                    <Link href="/contact">
                      <span>
                        Get a quote <ArrowRight className="inline h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </>
  );
}
