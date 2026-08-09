import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { links } from "@/data/portfolio";
import { copy, type Locale } from "@/lib/i18n";

export function HeroContent({ locale }: { locale: Locale }) {
  const content = copy[locale].hero;
  const resumeHref = locale === "fr" ? links.resumeFr : links.resume;

  return (
    <div className="relative z-20 flex min-h-[100svh] items-end pb-16 pt-32 md:items-center md:pb-20">
      <div className="shell">
        <div className="max-w-[42rem]">
          <div className="hero-status">
            <span className="hero-status__pulse" />
            <span>{content.status}</span>
          </div>
          <h1
            id="hero-heading"
            className="mt-7 text-balance font-display text-[clamp(3.35rem,7vw,6.9rem)] font-medium leading-[0.86] tracking-[-0.068em]"
          >
            {content.title}{" "}
            <span className="hero-title-accent">{content.titleAccent}</span>
          </h1>
          <p className="mt-7 max-w-[36rem] text-base leading-7 text-[#bfc6d9] sm:text-lg sm:leading-8 md:max-w-[25rem] xl:max-w-[36rem]">
            {content.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button-primary" href="#remoteotter">
              {content.work} <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a className="button-secondary" href={links.email}>
              {content.contact} <Mail aria-hidden="true" size={17} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#aeb5ca]">
            <a
              className="inline-flex min-h-11 items-center gap-2 hover:text-white"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-hidden="true" size={17} /> GitHub
              <ArrowUpRight aria-hidden="true" size={13} />
            </a>
            <a
              className="inline-flex min-h-11 items-center gap-2 hover:text-white"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-hidden="true" size={17} /> LinkedIn
              <ArrowUpRight aria-hidden="true" size={13} />
            </a>
            <a
              className="inline-flex min-h-11 items-center gap-2 hover:text-white"
              href={resumeHref}
              download={
                locale === "fr" ? "CV – Youssef Charif Hamidi.pdf" : true
              }
            >
              {content.resume} <ArrowUpRight aria-hidden="true" size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
