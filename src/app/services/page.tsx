import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import VideoSection from "@/components/VideoSection";
import { services } from "@/data/services";
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  Award,
  Zap,
  Wrench,
  Target,
  BarChart3,
  CheckCircle,
  Building2,
  Truck,
  DollarSign,
  Settings,
  FileCheck,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Modolith offers structural steel erection, pre-engineered metal buildings, general contracting, and construction consulting. Built to Last. Designed to Lead.",
};

const featureIcons: Record<string, LucideIcon> = {
  "Safety First": Shield,
  "Accurate Installation": Target,
  "Experienced Craftsmanship": Wrench,
  "On-Time Delivery": Clock,
  "Fast-Track Construction": Zap,
  "Cost-Efficient Builds": DollarSign,
  "Flexible Design Options": Settings,
  "Durable Performance": Award,
  "Complete Project Oversight": BarChart3,
  "Trusted Subcontractor Network": Users,
  "Budget-Conscious Management": TrendingUp,
  "Quality at Every Step": CheckCircle,
  "Risk Mitigation": AlertTriangle,
  "Resource Optimization": Truck,
  "Quality Assurance": FileCheck,
  "Project Efficiency": Building2,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="At Modolith, we do more than construct buildings - we create trust and deliver excellence."
        image="/images/services/Modolith-Image-106-1024x576.jpg"
      />

      {/* Video Section */}
      <VideoSection
        headline="Precision in Action"
        subtext="From structural steel erection to full-service general contracting, watch how our team brings expertise to every project."
      />

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-light"}`}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div
              className={`grid grid-cols-1 items-center gap-16 lg:grid-cols-2`}
            >
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                    {service.shortTitle}
                  </p>
                  <h2 className="font-[family-name:var(--font-heading)] mb-3 text-3xl font-bold text-dark md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mb-6 font-medium text-gray-500">
                    {service.subtitle}
                  </p>
                  <div className="section-divider mb-8" />
                  <p className="mb-8 leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  <div className="mb-8 space-y-4">
                    {service.features.map((feature) => {
                      const Icon = featureIcons[feature.title] || CheckCircle;
                      return (
                        <div
                          key={feature.title}
                          className="group/feat flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-accent/5"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover/feat:bg-accent/20">
                            <Icon className="h-4 w-4 text-accent" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-dark">
                              {feature.title}
                            </p>
                            <p className="text-sm text-gray-600">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <Link
                    href="/contact"
                    className="btn-interact group inline-flex items-center gap-2 rounded bg-accent px-7 py-3.5 font-semibold text-white transition-colors hover:bg-accent-dark"
                  >
                    Request a Quote{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"}>
                <div
                  className={`img-zoom relative h-[450px] overflow-hidden rounded-xl shadow-xl ${
                    i % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-primary py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
              Let&apos;s Build Together
            </p>
            <h2 className="font-[family-name:var(--font-heading)] mb-6 text-3xl font-bold md:text-4xl">
              Every Great Structure Begins with a Conversation
            </h2>
            <p className="mb-10 text-white/70">
              Ready to bring bold ideas to life? Let&apos;s connect and create
              something extraordinary.
            </p>
            <Link
              href="/contact"
              className="btn-interact group inline-flex items-center gap-2 rounded bg-accent px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Let&apos;s Talk{" "}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
