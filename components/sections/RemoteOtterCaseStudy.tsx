import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { links } from "@/data/portfolio";
import { copy, type Locale } from "@/lib/i18n";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { PipelineDiagram } from "./PipelineDiagram";

const technologies = [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "NextAuth",
  "Python",
  "Linux",
] as const;

export function RemoteOtterCaseStudy({ locale }: { locale: Locale }) {
  const content = copy[locale].remoteOtter;

  return (
    <section
      id="work"
      aria-labelledby="remoteotter-title"
      className="section overflow-hidden"
    >
      <div className="absolute right-0 top-1/4 h-[38rem] w-[38rem] rounded-full bg-[#6a4a37]/10 blur-[120px]" />
      <div className="shell relative">
        <SectionHeading
          id="remoteotter-title"
          eyebrow={content.eyebrow}
          title="RemoteOtter"
          description={content.description}
        />

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-white/10 py-4 text-sm">
          <p className="font-semibold text-[#ebe9e2]">
            {content.role}
          </p>
          <p className="text-[#8e96ae]">{content.dates}</p>
          <a
            href={links.remoteOtter}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex min-h-11 items-center gap-2 text-[#dfc78f] hover:text-white"
          >
            {content.visit} <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <div className="screen-frame">
              <Image
                src="/remoteotter1.jpg"
                alt={content.imageAlt}
                width={1920}
                height={1142}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-auto w-full"
                priority={false}
              />
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#858da5]">
              {content.imageCaption}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:pt-8">
            <p className="font-display text-2xl leading-tight tracking-[-0.035em] text-[#e9e6df] md:text-3xl">
              {content.summary}
            </p>

            <div className="mt-9 grid grid-cols-3 gap-px overflow-hidden border-y border-white/10 bg-white/10">
              {content.stats.map(([value, label, period]) => (
                <div key={label} className="bg-[#070a17] px-3 py-5">
                  <p className="font-display text-2xl tracking-[-0.05em] text-[#edcfa0] sm:text-3xl">
                    {value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#9098af]">
                    {label}
                    <br />
                    {period}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-8 flex flex-wrap gap-2"
              aria-label={content.technologyLabel}
            >
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/[.12] px-3 py-1.5 font-mono text-[0.67rem] text-[#afb6cb]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-y border-white/10 bg-[#0a0e20]/70 px-4 py-7 sm:px-7 lg:px-9">
          <PipelineDiagram locale={locale} />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow">{content.owned}</p>
            <h3 className="mt-5 text-balance font-display text-3xl leading-tight tracking-[-0.045em] md:text-5xl">
              {content.ownedTitle}
            </h3>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {content.ownership.map(([title, body], index) => (
              <Reveal
                key={title}
                delay={index * 0.05}
                className="bg-[#070a17] p-6 sm:p-7"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="text-[#9690e7]"
                  size={19}
                />
                <h4 className="mt-5 font-display text-xl tracking-[-0.03em]">
                  {title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-[#9ca4bc]">
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
