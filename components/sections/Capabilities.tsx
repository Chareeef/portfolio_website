import { capabilities } from "@/data/portfolio";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="section section-rule overflow-hidden bg-[#080b19]"
    >
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.035]" />
      <div className="shell relative">
        <SectionHeading
          id="capabilities-title"
          eyebrow="Engineering capabilities"
          title="Tools matter most when connected to outcomes."
          description="I work across product, interface, data and infrastructure, taking ideas from early architecture decisions through production."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Reveal
              key={capability.title}
              delay={index * 0.05}
              className="bg-[#080b19] p-5 sm:p-8 lg:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="font-display text-2xl tracking-[-0.04em] md:text-3xl">
                  {capability.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1 size-3 rounded-full border border-[#9992ef]/50 bg-[#9992ef]/10 shadow-[0_0_25px_rgba(153,146,239,.32)]"
                />
              </div>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#8e96ad]">
                {capability.description}
              </p>
              <ul
                aria-label={`${capability.title} toolkit`}
                className="mt-8 flex flex-wrap gap-2 border-t border-white/[.08] pt-6"
              >
                {capability.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-white/[.1] bg-white/[.025] px-3 py-1.5 font-mono text-[0.68rem] tracking-[0.02em] text-[#aeb4c6]"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
