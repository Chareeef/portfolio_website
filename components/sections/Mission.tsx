import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WorkflowDiagram } from "./WorkflowDiagram";

export function Mission() {
  return (
    <section
      id="about"
      aria-labelledby="mission-title"
      className="section section-rule"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
          <SectionHeading
            id="mission-title"
            eyebrow="Mission & working method"
            title="Different interface. Same ambition."
          />

          <Reveal className="max-w-2xl lg:pt-14">
            <div className="space-y-5 text-base leading-8 text-[#b6bbcd] md:text-lg">
              <p>
                I live with cerebral palsy and work primarily from a tablet.
                Through Termux and SSH, I connect to an Ubuntu environment and
                build with Vim or Neovim and tmux.
              </p>
              <p>
                That workflow has sharpened my adaptability and my attention to
                efficient interfaces. My experience has also strengthened my
                interest in accessibility and independence, not as an abstract
                feature, but as part of how useful technology should work.
              </p>
              <p className="font-display text-xl leading-8 tracking-[-0.025em] text-[#e9e5dc] md:text-2xl">
                My long-term mission is to build technology that gives people,
                especially people with disabilities, greater independence,
                opportunity and freedom.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-y border-white/10 bg-[#080b19]/65 px-4 py-7 sm:px-8">
          <WorkflowDiagram />
        </Reveal>

        <div className="mt-12">
          <p className="eyebrow mb-6">What guides my work</p>
          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            {[
              ["Adaptability", "Find the workable interface, then keep moving."],
              ["Clarity", "Reduce friction until the important work is visible."],
              [
                "Independence",
                "Build systems that give people meaningful control.",
              ],
            ].map(([title, body], index) => (
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
