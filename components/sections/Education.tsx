import { Award, BookOpen, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Education() {
  return (
    <section
      aria-labelledby="education-title"
      className="section section-rule bg-[#070916]"
    >
      <div className="shell">
        <SectionHeading
          id="education-title"
          eyebrow="Education & recognition"
          title="Foundations for the work ahead."
          description="Systems thinking, backend depth and the habit of learning by building."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.18fr_.82fr]">
          <Reveal className="border-t border-white/10 pt-7">
            <div className="grid gap-5 sm:grid-cols-[3.5rem_1fr_auto]">
              <span className="grid size-12 place-items-center rounded-full border border-white/[.12] text-[#aaa5ef]">
                <GraduationCap aria-hidden="true" size={21} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#858da5]">
                  June 2024 · 12 months
                </p>
                <h3 className="mt-3 font-display text-3xl tracking-[-0.045em]">
                  ALX Software Engineering
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#9da5bc]">
                  Completed a 12-month programme spanning systems programming,
                  backend development, databases, algorithms, Linux and DevOps.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Systems programming",
                    "Backend development",
                    "Databases",
                    "Algorithms",
                    "Linux",
                    "DevOps",
                  ].map((item) => (
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
                  145.52%
                </p>
                <p className="mt-1 text-xs text-[#7f879f]">
                  final performance score
                </p>
              </div>
            </div>

            <div className="mt-9 grid gap-3 border-l border-[#9992ef]/35 pl-5 sm:ml-[4.75rem] sm:grid-cols-[auto_1fr] sm:items-start">
              <Award aria-hidden="true" size={20} className="text-[#e7c98d]" />
              <p className="text-sm leading-7 text-[#b6bbcc]">
                Recognised as an{" "}
                <strong className="text-[#ece8de]">
                  ALX Community Champion
                </strong>{" "}
                for advancing disability inclusion in technology.
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
                  June 2022
                </p>
                <h3 className="mt-3 font-display text-3xl tracking-[-0.045em]">
                  Baccalauréat
                </h3>
                <p className="mt-4 text-base text-[#b2b8ca]">
                  Sciences Mathématiques
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
