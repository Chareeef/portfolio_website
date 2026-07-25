import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { archiveProjects, supportingProjects } from "@/data/portfolio";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function SupportingProjects() {
  return (
    <section
      aria-labelledby="supporting-title"
      className="section section-rule"
    >
      <div className="shell">
        <SectionHeading
          id="supporting-title"
          eyebrow="Selected work · 03"
          title="Other systems in orbit"
          description="Focused applications where interface decisions, reliable data and applied AI work together."
        />

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {supportingProjects.map((project, index) => (
            <article
              key={project.name}
              className="grid gap-8 py-10 md:grid-cols-[.9fr_1.1fr] md:items-center md:py-16"
            >
              <Reveal className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="screen-frame">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1920}
                    height={1142}
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="h-auto w-full"
                  />
                </div>
              </Reveal>

              <Reveal
                delay={0.08}
                className={index % 2 === 1 ? "md:order-1 md:pr-10" : "md:pl-10"}
              >
                <p className="font-mono text-xs uppercase tracking-[0.17em] text-[#7f879f]">
                  {project.index} · Supporting system
                </p>
                <h3 className="mt-4 font-display text-4xl tracking-[-0.05em] md:text-6xl">
                  {project.name}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#b0b6ca]">
                  {project.description}
                </p>
                <ul className="mt-7 grid gap-3 text-sm text-[#d4d6e0] sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
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
                <div className="mt-8 flex flex-wrap gap-5">
                  <a
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#e5cf9c] hover:text-white"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live site <ArrowUpRight aria-hidden="true" size={16} />
                  </a>
                  <a
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#adb3c7] hover:text-white"
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github aria-hidden="true" size={16} /> Source repository
                  </a>
                </div>
              </Reveal>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="grid gap-5 md:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="eyebrow">Systems archive</p>
              <h3 className="mt-5 font-display text-3xl tracking-[-0.045em] md:text-4xl">
                Foundations below the surface
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
                      {project.type}
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
