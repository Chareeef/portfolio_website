import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { links } from "@/data/portfolio";
import { SceneFallback } from "@/components/hero/SceneFallback";
import { OpenChannelScene } from "./OpenChannelScene";
import { copy, type Locale } from "@/lib/i18n";

export function FinalHorizon({ locale }: { locale: Locale }) {
  const content = copy[locale].contact;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="final-horizon relative min-h-[88svh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <SceneFallback />
        <OpenChannelScene />
        <div className="final-horizon__shade absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,19,.98)_0%,rgba(5,7,19,.84)_48%,rgba(5,7,19,.25)_78%,rgba(5,7,19,.44)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#070916] to-transparent" />
      </div>

      <p className="sr-only">
        {content.scene}
      </p>
      <div className="final-horizon__shell shell relative z-10 flex min-h-[88svh] items-center py-28">
        <div className="final-horizon__content max-w-3xl">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2
            id="contact-title"
            className="mt-6 text-balance font-display text-[clamp(3rem,7.2vw,7rem)] font-medium leading-[0.91] tracking-[-0.065em]"
          >
            {content.title}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#b8bed0] md:text-lg">
            {content.description}
          </p>

          <a
            href={links.email}
            className="mt-6 inline-flex min-h-12 items-center gap-3 text-base font-semibold text-[#f0d59f] underline decoration-white/20 underline-offset-8 hover:text-white"
          >
            <Mail aria-hidden="true" size={18} />
            youssef.charif.h@gmail.com
          </a>

          <div className="final-horizon__actions mt-9 flex flex-wrap gap-3">
            <a className="button-primary" href={links.email}>
              {content.email} <ArrowUpRight aria-hidden="true" size={17} />
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
              <Download aria-hidden="true" size={17} /> {content.resume}
            </a>
          </div>
        </div>
      </div>
      <div
        className="telemetry-card final-horizon__telemetry"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between">
          <span>OBJECT / YC-01</span>
          <span className="hero-signal">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="telemetry-card__line" />
        <div className="telemetry-card__readout flex justify-between text-[#d9f7ff]">
          <span>DISTANCE 4.24 LY</span>
          <span>VEL 0.18 LY/YR</span>
        </div>
      </div>
    </section>
  );
}
