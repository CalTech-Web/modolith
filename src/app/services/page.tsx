import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/services";
import { ArrowRight, CheckCircle } from "lucide-react";

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
        subtitle="At Modolith, we do more than construct buildings - we create trust and deliver excellence."
        image="/images/services/Modolith-Image-106-1024x576.jpg"
      />

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-light"}`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                    {service.shortTitle}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-dark mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 font-medium mb-6">
                    {service.subtitle}
                  </p>
                  <div className="section-divider mb-8" />
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature.title} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-dark text-sm">
                            {feature.title}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 font-semibold rounded hover:bg-accent-dark transition-colors btn-interact"
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`relative h-[450px] rounded-xl overflow-hidden ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Let&apos;s Build Together
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-6">
              Every Great Structure Begins with a Conversation
            </h2>
            <p className="text-white/70 mb-10">
              Ready to bring bold ideas to life? Let&apos;s connect and create
              something extraordinary.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 font-semibold rounded text-lg hover:bg-accent-dark transition-colors btn-interact"
            >
              Let&apos;s Talk <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
