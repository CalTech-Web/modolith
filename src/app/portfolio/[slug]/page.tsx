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
      <section className="relative flex h-[55vh] min-h-[400px] items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12">
          <Link
            href="/portfolio"
            className="mb-4 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
          <h1 className="font-[family-name:var(--font-heading)] mb-3 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              {project.location}
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-accent" />
              {project.client}
            </span>
            <span className="flex items-center gap-2">
              <Wrench className="h-4 w-4 text-accent" />
              {project.type}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-2xl font-bold text-white">
                  Project Overview
                </h2>
                <div className="section-divider mb-6" />
                <p className="mb-8 text-lg leading-relaxed text-white/70">
                  {project.description}
                </p>
                <p className="mb-10 leading-relaxed text-white/60">
                  {project.details}
                </p>
              </ScrollReveal>

              {/* Gallery */}
              {project.images.length > 1 && (
                <ScrollReveal>
                  <h3 className="font-[family-name:var(--font-heading)] mb-6 text-xl font-bold text-white">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.images.map((img, i) => (
                      <div
                        key={i}
                        className={`img-zoom relative overflow-hidden rounded-lg ${
                          i === 0 && project.images.length > 2
                            ? "sm:col-span-2 h-80"
                            : "h-64"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} - Image ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes={
                            i === 0 && project.images.length > 2
                              ? "100vw"
                              : "(max-width: 640px) 100vw, 50vw"
                          }
                        />
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <ScrollReveal direction="right">
                <div className="sticky top-28 overflow-hidden rounded-xl border border-white/10 bg-primary">
                  <div className="border-b border-white/10 p-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                      Scope of Work
                    </h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {project.scope.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-white/60"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 border-t border-white/10 pt-6">
                      <Link
                        href="/contact"
                        className="btn-interact block w-full rounded bg-accent px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-accent-dark"
                      >
                        Start Your Project
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="border-t border-white/10 bg-primary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2">
            {prev ? (
              <Link
                href={`/portfolio/${prev.slug}`}
                className="group flex items-center gap-4 border-r border-white/10 py-8 pr-6 transition-colors hover:bg-dark"
              >
                <ArrowLeft className="h-5 w-5 shrink-0 text-white/40 transition-transform group-hover:-translate-x-1 group-hover:text-accent" />
                <div className="min-w-0">
                  <p className="text-xs tracking-wider text-white/40 uppercase">
                    Previous
                  </p>
                  <p className="truncate text-sm font-semibold text-white group-hover:text-accent">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/portfolio/${next.slug}`}
                className="group flex items-center justify-end gap-4 py-8 pl-6 text-right transition-colors hover:bg-dark"
              >
                <div className="min-w-0">
                  <p className="text-xs tracking-wider text-white/40 uppercase">
                    Next
                  </p>
                  <p className="truncate text-sm font-semibold text-white group-hover:text-accent">
                    {next.title}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
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
