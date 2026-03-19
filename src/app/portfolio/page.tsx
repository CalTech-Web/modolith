import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectFilter from "@/components/ProjectFilter";

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

      {/* Projects Grid with Filter */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ProjectFilter />
        </div>
      </section>
    </>
  );
}
