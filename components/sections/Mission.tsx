import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WorkflowDiagram } from "./WorkflowDiagram";
import { copy, type Locale } from "@/lib/i18n";

export function Mission({ locale }: { locale: Locale }) {
  const content = copy[locale].mission;

  return (
    <section
      id="mission-method"
      aria-labelledby="mission-title"
      className="section section-rule"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
          <SectionHeading
            id="mission-title"
            eyebrow={content.eyebrow}
            title={content.title}
          />

          <Reveal className="max-w-2xl lg:pt-14">
            <div className="space-y-5 text-base leading-8 text-[#b6bbcd] md:text-lg">
              <p>{content.paragraphs[0]}</p>
              <p>{content.paragraphs[1]}</p>
              <p className="font-display text-xl leading-8 tracking-[-0.025em] text-[#e9e5dc] md:text-2xl">
                {content.paragraphs[2]}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-y border-white/10 bg-[#080b19]/65 px-4 py-7 sm:px-8">
          <WorkflowDiagram locale={locale} />
        </Reveal>

        <div className="mt-12">
          <p className="eyebrow mb-6">{content.guides}</p>
          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            {content.values.map(([title, body], index) => (
              <Reveal
                key={title}
                delay={index * 0.06}
                className="bg-[#050713] p-6"
              >
                <p className="font-mono text-[0.65rem] text-[#626b84]">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-display text-xl tracking-[-0.035em]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#8f97ae]">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
