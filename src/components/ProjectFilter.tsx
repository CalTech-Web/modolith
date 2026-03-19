"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ScrollReveal from "./ScrollReveal";

const filterTypes = [
  "All",
  "Design-Build",
  "Structural Steel",
  "PEMB",
  "Consulting",
  "Emergency Repairs",
  "Job Order Contracting",
];

export default function ProjectFilter() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.type.includes(active));

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filterTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActive(type)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              active === type
                ? "bg-accent text-white shadow-lg shadow-accent/25"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ScrollReveal key={project.slug} direction="scale">
            <Link
              href={`/portfolio/${project.slug}`}
              className="card-hover gold-border-top img-zoom group block overflow-hidden rounded-lg bg-white shadow-md"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-accent/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                    {project.type}
                  </span>
                  <span className="mt-3 text-sm font-medium text-white">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-primary">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {project.location}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="py-12 text-center text-gray-500">
          No projects found for this category.
        </p>
      )}
    </>
  );
}
