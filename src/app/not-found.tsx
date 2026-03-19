import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 pt-20">
      <div className="text-center">
        <p className="text-accent text-8xl font-bold font-[family-name:var(--font-heading)] mb-4">
          404
        </p>
        <h1 className="text-2xl font-bold text-dark mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white px-8 py-3.5 font-semibold rounded hover:bg-accent-dark transition-colors btn-interact"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
