import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Modolith's portfolio of construction projects - structural steel erection, pre-engineered metal buildings, and general contracting across Texas and beyond.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Portfolio"
        image="/images/projects/brazoria-county/BCSC-Image-106.jpg"
      />

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
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
        </div>
      </section>
    </>
  );
}
