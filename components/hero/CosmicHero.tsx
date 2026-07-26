import { HeroContent } from "./HeroContent";
import { copy, type Locale } from "@/lib/i18n";

export function CosmicHero({ locale }: { locale: Locale }) {
  const content = copy[locale].hero;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden bg-[#050713]"
    >
      <picture className="hero-artwork">
        <source
          media="(max-width: 767px)"
          srcSet="/portfolio_hero_mobile.png"
          width="1086"
          height="1448"
        />
        <img
          src="/portfolio_hero_desktop.png"
          width="1981"
          height="793"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-text-stars" aria-hidden="true" />
      <div className="hero-bottom-fade" aria-hidden="true" />
      <div className="noise" />

      <div className="sr-only">
        <p>{content.scene}</p>
      </div>
      <HeroContent locale={locale} />
    </section>
  );
}
