import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="banner-header">
      <Image
        src={image}
        alt={title}
        fill
        className="animate-ken-burns object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 z-[1] bg-black/65" />
      <div className="relative z-10 text-center px-4">
        {subtitle && (
          <h6 className="animate-fade-in-up">{subtitle}</h6>
        )}
        <h1 className="animate-fade-in-up-delay">{title}</h1>
      </div>
    </section>
  );
}
