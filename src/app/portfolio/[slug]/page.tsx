import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
      <PageHero
        title={project.title}
        subtitle={project.type}
        image={project.image}
      />

      {/* Project Bar */}
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="relative z-[2] -mt-[30px] mb-[30px] bg-primary-light px-[45px] py-[30px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="border-l-2 border-accent pl-4">
              <h5 className="mb-1 text-[15px] font-light uppercase tracking-[3px] text-white"
                style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
              >
                Location
              </h5>
              <p className="mb-0 text-gray-warm">{project.location}</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <h5 className="mb-1 text-[15px] font-light uppercase tracking-[3px] text-white"
                style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
              >
                Client
              </h5>
              <p className="mb-0 text-gray-warm">{project.client}</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <h5 className="mb-1 text-[15px] font-light uppercase tracking-[3px] text-white"
                style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
              >
                Type
              </h5>
              <p className="mb-0 text-gray-warm">{project.type}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="section-subtitle">Project Overview</div>
                <p className="mb-6 text-[17px] leading-relaxed text-gray-warm">
                  {project.description}
                </p>
                <p className="mb-10 leading-relaxed text-gray-warm">
                  {project.details}
                </p>
              </ScrollReveal>

              {/* Gallery */}
              {project.images.length > 1 && (
                <ScrollReveal>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.images.map((img, i) => (
                      <div
                        key={i}
                        className={`img-zoom relative overflow-hidden ${
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
                <div className="sticky top-28 border border-primary-light border-t-2 border-t-accent bg-primary p-8">
                  <div className="section-subtitle mb-4">Scope of Work</div>
                  <ul className="mb-6 space-y-3">
                    {project.scope.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[15px] text-gray-warm"
                      >
                        <span className="mt-2 text-accent">&#9656;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="butn-dark">
                    <Link href="/contact">
                      <span className="w-full justify-center">
                        Start Your Project <ArrowRight className="inline h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <div className="border-t border-primary-light">
        <div className="mx-auto max-w-[1140px] px-4 py-[40px]">
          <div className="flex items-center justify-between">
            {prev ? (
              <Link
                href={`/portfolio/${prev.slug}`}
                className="group inline-flex items-center gap-2 text-[15px] text-gray-warm transition-colors hover:text-accent"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {prev.title}
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/portfolio/${next.slug}`}
                className="group inline-flex items-center gap-2 text-[15px] text-gray-warm transition-colors hover:text-accent"
              >
                {next.title}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
