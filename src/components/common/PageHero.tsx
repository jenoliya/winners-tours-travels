import React from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  height?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  image,
  height = "h-80 md:h-96",
}) => {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/40 to-primary/60" />
      </div>
      <div className="relative z-10 text-center px-6">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/90 text-lg max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
