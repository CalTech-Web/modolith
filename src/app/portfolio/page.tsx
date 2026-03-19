import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Modolith's portfolio of construction projects - structural steel erection, pre-engineered metal buildings, and general contracting across Texas and beyond.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="Delivering Excellence Across Every Build"
        image="/images/projects/brazoria-county/BCSC-Image-106.jpg"
      />

      {/* Projects Grid */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="font-[family-name:var(--font-heading)] mb-4 text-4xl font-bold text-white md:text-5xl">
                Our Projects
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
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
                    sizes="(max-width: 768px) 100vw, 33vw"
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
        </div>
      </section>
    </>
  );
}
