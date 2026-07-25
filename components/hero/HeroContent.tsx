import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { links } from "@/data/portfolio";

export function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-[100svh] items-end pb-14 pt-32 md:items-center md:pb-20">
      <div className="shell">
        <div className="max-w-[48rem]">
          <p className="eyebrow">Beyond the Horizon · Software Engineer</p>
          <h1
            id="hero-heading"
            className="mt-6 text-balance font-display text-[clamp(3.2rem,8.2vw,7.7rem)] font-medium leading-[0.88] tracking-[-0.065em]"
          >
            I build software that{" "}
            <span className="text-[#b8b5f4]">expands what people can do.</span>
          </h1>
          <p className="mt-7 max-w-[42rem] text-base leading-7 text-[#c0c5d8] sm:text-lg sm:leading-8 md:text-xl">
            I design and ship production web and mobile applications—from a
            remote-job platform used by hundreds every day to an accessible
            mathematics editor published on Google Play.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button-primary" href="#work">
              Explore my work <ArrowDownRight aria-hidden="true" size={18} />
            </a>
            <a className="button-secondary" href={links.resume} download>
              Download résumé <Download aria-hidden="true" size={17} />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#aeb5ca]">
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
              href={links.email}
            >
              <Mail aria-hidden="true" size={17} /> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
