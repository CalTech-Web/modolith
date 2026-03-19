import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, MapPin, Users, Wrench } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Modolith Structures`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pb-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/70 hover:text-accent text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] mb-3">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              {project.location}
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              {project.client}
            </span>
            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-accent" />
              {project.type}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-dark mb-4">
                  Project Overview
                </h2>
                <div className="section-divider mb-6" />
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {project.description}
                </p>
                <p className="text-gray-600 leading-relaxed mb-10">
                  {project.details}
                </p>

                {/* Gallery */}
                {project.images.length > 1 && (
                  <>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-dark mb-4">
                      Project Gallery
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.images.map((img, i) => (
                        <div
                          key={i}
                          className="relative h-64 rounded-lg overflow-hidden"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} - Image ${i + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-light rounded-xl p-8 sticky top-28">
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-dark mb-4">
                    Scope of Work
                  </h3>
                  <ul className="space-y-3">
                    {project.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="w-full block text-center bg-accent text-white px-6 py-3 font-semibold rounded hover:bg-accent-dark transition-colors btn-interact"
                    >
                      Start Your Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="py-12 bg-light border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {prev ? (
              <Link
                href={`/portfolio/${prev.slug}`}
                className="flex items-center gap-3 text-dark hover:text-accent transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Previous
                  </p>
                  <p className="font-semibold text-sm">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/portfolio/${next.slug}`}
                className="flex items-center gap-3 text-dark hover:text-accent transition-colors text-right group"
              >
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Next
                  </p>
                  <p className="font-semibold text-sm">{next.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
