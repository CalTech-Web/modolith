import Link from "next/link";
import { HardHat, Home, Briefcase, Phone, Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-dark px-6 pt-20">
      <div className="max-w-lg text-center">
        {/* Construction icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
          <HardHat className="h-10 w-10 text-accent" />
        </div>

        {/* Caution stripes */}
        <div className="mx-auto mb-8 h-2 w-48 rounded-full" style={{
          background: "repeating-linear-gradient(45deg, #C8A350, #C8A350 10px, #1A1A1A 10px, #1A1A1A 20px)",
        }} />

        <p className="font-[family-name:var(--font-heading)] mb-2 text-7xl font-bold text-accent md:text-8xl">
          404
        </p>
        <h1 className="font-[family-name:var(--font-heading)] mb-3 text-2xl font-bold text-white">
          Page Under Construction
        </h1>
        <p className="mx-auto mb-10 max-w-md text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="btn-interact mb-8 inline-flex items-center gap-2 rounded bg-accent px-8 py-3.5 font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Quick links */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="mb-4 text-xs font-semibold tracking-widest text-white/40 uppercase">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:text-accent"
            >
              <Wrench className="h-3.5 w-3.5" /> Services
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:text-accent"
            >
              <Briefcase className="h-3.5 w-3.5" /> Portfolio
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5" /> Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
