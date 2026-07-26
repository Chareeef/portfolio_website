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
          description="A working map of the systems I have built and the technologies used to make them real, not a claim of equal mastery across every tool."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Reveal
              key={capability.title}
              delay={index * 0.05}
              className="bg-[#080b19] p-5 sm:p-8 lg:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.17em] text-[#737c96]">
                    Field 0{index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-2xl tracking-[-0.04em] md:text-3xl">
                    {capability.title}
                  </h3>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1 size-3 rounded-full border border-[#9992ef]/50 bg-[#9992ef]/10 shadow-[0_0_25px_rgba(153,146,239,.32)]"
                />
              </div>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#8e96ad]">
                {capability.description}
              </p>
              <dl className="mt-8 divide-y divide-white/[.08] border-y border-white/[.08]">
                {capability.items.map(([term, evidence]) => (
                  <div
                    key={term}
                    className="grid gap-1 py-3.5 text-sm sm:grid-cols-[10rem_1fr]"
                  >
                    <dt className="font-semibold text-[#d8d9e2]">{term}</dt>
                    <dd className="leading-6 text-[#858da5]">{evidence}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
