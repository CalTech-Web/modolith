"use client";

const partners = [
  "Metco Engineering",
  "Zachry Group",
  "Varco Pruden",
  "Brazosport College",
  "Americus Holdings",
  "Advon Construction",
  "SSP Engineering",
  "BP",
];

export default function PartnerMarquee() {
  return (
    <section className="overflow-hidden bg-light py-16 lg:py-20">
      <div className="mx-auto mb-10 max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          Trusted By
        </p>
        <h2 className="font-[family-name:var(--font-heading)] mt-2 text-3xl font-bold text-primary md:text-4xl">
          Our Partners
        </h2>
        <div className="section-divider mx-auto mt-4" />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-light to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-light to-transparent" />
        <div className="animate-marquee flex w-max items-center gap-16">
          {[...partners, ...partners].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-[family-name:var(--font-heading)] whitespace-nowrap text-xl font-semibold text-primary/60 transition-colors hover:text-accent md:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
