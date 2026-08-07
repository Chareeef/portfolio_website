import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { archiveProjects, supportingProjects } from "@/data/portfolio";
import { copy, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function SupportingProjects({ locale }: { locale: Locale }) {
  const content = copy[locale].projects;

  return (
    <section
      aria-labelledby="supporting-title"
      className="section section-rule"
    >
      <div className="shell">
        <SectionHeading
          id="supporting-title"
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {supportingProjects.map((project, index) => (
            <article
              key={project.name}
              className="py-12 md:py-20"
            >
              <div className="grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:gap-14 lg:gap-20">
                <Reveal>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.17em] text-[#7f879f]">
                      {project.index} · {content.system}
                    </p>
                    <h3 className="mt-4 font-display text-4xl tracking-[-0.05em] md:text-6xl">
                      {project.name}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[#b0b6ca]">
                      {content.items[index].description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-5">
                      <a
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#e5cf9c] hover:text-white"
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {content.live}{" "}
                        <ArrowUpRight aria-hidden="true" size={16} />
                      </a>
                      <a
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#adb3c7] hover:text-white"
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github aria-hidden="true" size={16} /> {content.source}
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <div>
                    <ul className="grid gap-3 text-sm text-[#d4d6e0] sm:grid-cols-2">
                      {content.items[index].highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="border-l border-[#9992ef]/35 pl-3 leading-6"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technology.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[0.68rem] text-[#858da5]"
                        >
                          {item}
                          <span className="ml-2 text-[#3e455d]">/</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.12} className="mt-10 md:mt-14">
                <div className="screen-frame">
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8.5]">
                    <Image
                      src={project.images[0].src}
                      alt={content.items[index].imageAlts[0]}
                      fill
                      sizes="(max-width: 1400px) 100vw, 1376px"
                      className="object-cover"
                      style={{ objectPosition: project.images[0].position }}
                    />
                  </div>
                </div>
              </Reveal>

              <div className="mt-3 grid gap-3 sm:grid-cols-2 md:mt-4 md:gap-4">
                {project.images.slice(1).map((image, imageIndex) => (
                  <Reveal key={image.src} delay={0.06 * imageIndex}>
                    <div className="screen-frame">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={image.src}
                          alt={content.items[index].imageAlts[imageIndex + 1]}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1400px) 50vw, 680px"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="grid gap-5 md:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="eyebrow">{content.archiveEyebrow}</p>
              <h3 className="mt-5 font-display text-3xl tracking-[-0.045em] md:text-4xl">
                {content.archiveTitle}
              </h3>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {archiveProjects.map((project, index) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid min-h-20 grid-cols-[2.4rem_1fr_auto] items-center gap-3 text-sm"
                >
                  <span className="font-mono text-[0.66rem] text-[#626b84]">
                    0{index + 1}
                  </span>
                  <span>
                    <span className="font-semibold text-[#e5e4eb]">
                      {project.name}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#7f879f] sm:inline sm:pl-4">
                      {content.archiveTypes[index]}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={17}
                    className="text-[#687089] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#e7c98d]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
