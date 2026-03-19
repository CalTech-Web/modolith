import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover animate-ken-burns"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] mb-4 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up-delay">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
