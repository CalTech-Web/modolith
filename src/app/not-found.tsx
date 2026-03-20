import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div
          className="mb-4 text-[150px] font-bold leading-none text-transparent"
          style={{
            fontFamily: "var(--font-heading), 'Oswald', sans-serif",
            WebkitTextStroke: "1px #333",
          }}
        >
          404
        </div>
        <div className="section-subtitle mb-4">Page Not Found</div>
        <div className="section-title mb-6">
          Under Construction
        </div>
        <p className="mb-10 text-gray-warm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="butn-dark">
          <Link href="/">
            <span>
              Back to Home <ArrowRight className="inline h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
