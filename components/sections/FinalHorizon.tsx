import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { links } from "@/data/portfolio";
import { SceneFallback } from "@/components/hero/SceneFallback";
import { OpenChannelScene } from "./OpenChannelScene";

export function FinalHorizon() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative min-h-[88svh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <SceneFallback />
        <OpenChannelScene />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,19,.98)_0%,rgba(5,7,19,.84)_48%,rgba(5,7,19,.25)_78%,rgba(5,7,19,.44)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#070916] to-transparent" />
      </div>

      <p className="sr-only">
        A small asteroid carrying a seated fox drifts gently through a field of
        stars.
      </p>
      <div className="shell relative z-10 flex min-h-[88svh] items-center py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">Open channel</p>
          <h2
            id="contact-title"
            className="mt-6 text-balance font-display text-[clamp(3rem,7.2vw,7rem)] font-medium leading-[0.91] tracking-[-0.065em]"
          >
            The next meaningful product is still ahead.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#b8bed0] md:text-lg">
            I am open to software engineering opportunities, ambitious product
            work and collaborations that create meaningful impact.
          </p>

          <a
            href={links.email}
            className="mt-6 inline-flex min-h-12 items-center gap-3 text-base font-semibold text-[#f0d59f] underline decoration-white/20 underline-offset-8 hover:text-white"
          >
            <Mail aria-hidden="true" size={18} />
            youssef.charif.h@gmail.com
          </a>

          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button-primary" href={links.email}>
              Email me <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a
              className="button-secondary"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-hidden="true" size={17} /> LinkedIn
            </a>
            <a
              className="button-secondary"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-hidden="true" size={17} /> GitHub
            </a>
            <a className="button-secondary" href={links.resume} download>
              <Download aria-hidden="true" size={17} /> Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
