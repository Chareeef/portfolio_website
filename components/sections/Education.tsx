import { Award, BookOpen, ExternalLink, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { copy, type Locale } from "@/lib/i18n";

export function Education({ locale }: { locale: Locale }) {
  const content = copy[locale].education;

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="section section-rule bg-[#070916]"
    >
      <div className="shell">
        <SectionHeading
          id="education-title"
          eyebrow={content.eyebrow}
          title={content.title}
        />

        <div className="mt-16 grid gap-10">
          <Reveal className="border-t border-white/10 pt-7">
            <div className="grid gap-5 sm:grid-cols-[3.5rem_1fr_auto]">
              <span className="grid size-12 place-items-center rounded-full border border-white/[.12] text-[#aaa5ef]">
                <GraduationCap aria-hidden="true" size={21} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#858da5]">
                  {content.alxDate}
                </p>
                <h3 className="mt-3 font-display text-3xl tracking-[-0.045em]">
                  {content.alxTitle}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#9da5bc]">
                  {content.alxDescription}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {content.subjects.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-2.5 py-1.5 font-mono text-[0.65rem] text-[#939bb2]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="sm:text-right">
                <p className="font-display text-4xl tracking-[-0.06em] text-[#e7c98d]">
                  {content.scoreValue}
                </p>
                <p className="mt-1 text-xs text-[#7f879f]">
                  {content.score}
                </p>
              </div>
            </div>

            <div className="mt-9 grid gap-3 border-l border-[#9992ef]/35 pl-5 sm:ml-[4.75rem] sm:grid-cols-[auto_1fr] sm:items-start">
              <Award aria-hidden="true" size={20} className="text-[#e7c98d]" />
              <p className="text-sm leading-7 text-[#b6bbcc]">
                {locale === "en" ? "Recognised as an " : "Reconnu comme "}
                <strong className="text-[#ece8de]">
                  {content.champion}
                </strong>{" "}
                {content.recognition}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="border-t border-white/10 pt-7">
            <div className="grid gap-5 sm:grid-cols-[3.5rem_1fr]">
              <span className="grid size-12 place-items-center rounded-full border border-white/[.12] text-[#aaa5ef]">
                <BookOpen aria-hidden="true" size={20} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#858da5]">
                  {content.baccalaureateDate}
                </p>
                <h3 className="mt-3 font-display text-3xl tracking-[-0.045em]">
                  {content.baccalaureate}
                </h3>
                <p className="mt-4 text-base text-[#b2b8ca]">
                  {content.field}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#9da5bc]">
                  {content.baccalaureateRecognition}
                </p>
                <a
                  href="https://www.hespress.com/يوسف-حاميدي-تلميذ-من-ذوي-الاحتياجات-ا-1015291.html"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-[#aaa5ef] transition-colors hover:text-[#cbc7ff]"
                >
                  {content.baccalaureateArticle}
                  <ExternalLink aria-hidden="true" size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
