import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { links } from "@/data/portfolio";

export function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-[100svh] items-end pb-16 pt-32 md:items-center md:pb-20">
      <div className="shell">
        <div className="max-w-[42rem]">
          <div className="hero-status">
            <span className="hero-status__pulse" />
            <span>Available for ambitious missions</span>
          </div>
          <h1
            id="hero-heading"
            className="mt-7 text-balance font-display text-[clamp(3.35rem,7vw,6.9rem)] font-medium leading-[0.86] tracking-[-0.068em]"
          >
            Engineering{" "}
            <span className="hero-title-accent">beyond limits.</span>
          </h1>
          <p className="mt-7 max-w-[36rem] text-base leading-7 text-[#bfc6d9] sm:text-lg sm:leading-8">
            I&apos;m Youssef, a software engineer building resilient web and
            mobile products that expand what people can do.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button-primary" href="#work">
              Enter the work <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a className="button-secondary" href={links.email}>
              Start a conversation <Mail aria-hidden="true" size={17} />
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
              href={links.resume}
              download
            >
              Résumé <ArrowUpRight aria-hidden="true" size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
