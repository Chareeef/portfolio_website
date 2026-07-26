import Image from "next/image";
import {
  ArrowUpRight,
  Braces,
  FileDown,
  Keyboard,
  Languages,
  ShieldCheck,
} from "lucide-react";
import { links } from "@/data/portfolio";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ShortcutTransformationDiagram } from "./ShortcutTransformationDiagram";

const engineering = [
  {
    icon: Braces,
    title: "Expression engine",
    body: "A structured-expression model, interactive renderer, nested cursor and selection system, and layout engine.",
  },
  {
    icon: Keyboard,
    title: "Keyboard-first editing",
    body: "A custom mathematical keyboard and configurable parser for fast, reusable shortcuts.",
  },
  {
    icon: FileDown,
    title: "Export pipeline",
    body: "Accurate LaTeX conversion and vector PDF generation for high-quality mathematical notes.",
  },
  {
    icon: ShieldCheck,
    title: "Independent by design",
    body: "Offline persistence, auto-save and privacy-first local processing with no connection required.",
  },
  {
    icon: Languages,
    title: "Adaptable interface",
    body: "Custom shortcuts and multilingual support for different writing and learning workflows.",
  },
] as const;

const screenshots = [
  {
    src: "/mathvellum-editor.png",
    alt: "MathVellum structured editor with a custom mathematics keyboard and nested expression cursor",
    label: "Nested editing",
  },
  {
    src: "/mathvellum-export.png",
    alt: "MathVellum vector PDF export settings over a page of mathematical notation",
    label: "Vector PDF export",
  },
  {
    src: "/mathvellum-shortcuts.png",
    alt: "MathVellum default mathematical shortcuts for fractions, roots, powers and integrals",
    label: "Default shortcuts",
  },
] as const;

export function MathVellumCaseStudy() {
  return (
    <section
      aria-labelledby="mathvellum-title"
      className="section section-rule overflow-hidden bg-[#080a18]"
    >
      <div className="absolute -left-56 top-48 size-[35rem] rounded-full bg-[#5d4dbe]/10 blur-[120px]" />
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <SectionHeading
            id="mathvellum-title"
            eyebrow="Flagship case study · 02"
            title="MathVellum"
            description="A structured mathematics editor built to make complex mathematical writing fast, accessible and independent."
          />
          <Reveal className="border-l border-[#9992ef]/30 pl-6 sm:pl-9">
            <p className="max-w-2xl font-display text-2xl leading-[1.3] tracking-[-0.035em] text-[#e9e6ef] md:text-3xl">
              MathVellum was originally designed to help people with motor
              disabilities, who cannot rely on pen and paper, write mathematics
              independently.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                className="button-primary"
                href={links.mathVellum}
                target="_blank"
                rel="noreferrer"
              >
                View on Google Play{" "}
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
              <span className="font-mono text-xs text-[#858da5]">
                Flutter · Dart · LaTeX
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <ShortcutTransformationDiagram />
        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-[.76fr_1.24fr]">
          <div>
            <p className="eyebrow">Engineering the editor</p>
            <h3 className="mt-5 text-balance font-display text-3xl tracking-[-0.045em] md:text-5xl">
              Mathematics behaves like a structure, not a string.
            </h3>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#aab1c7]">
              Every fraction, root and exponent has shape. The editor had to
              understand those relationships while keeping navigation, selection
              and rendering immediate.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {engineering.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.04}
                className="grid gap-4 py-6 sm:grid-cols-[3rem_11rem_1fr] sm:items-start"
              >
                <span className="grid size-10 place-items-center rounded-full border border-[#9992ef]/20 bg-[#9992ef]/[.08] text-[#aaa5f1]">
                  <item.icon aria-hidden="true" size={18} />
                </span>
                <h4 className="font-display text-lg tracking-[-0.025em]">
                  {item.title}
                </h4>
                <p className="text-sm leading-7 text-[#969eb6]">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-7 flex items-end justify-between gap-5">
            <div>
              <p className="eyebrow">The product in use</p>
              <h3 className="mt-4 font-display text-3xl tracking-[-0.045em] md:text-4xl">
                A closer look at the editor.
              </h3>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {screenshots.map((screenshot, index) => (
              <Reveal
                key={screenshot.src}
                delay={index * 0.08}
                className={`relative overflow-hidden border border-white/10 bg-[#0e1122] p-2 ${
                  index === 1 ? "sm:translate-y-8" : ""
                }`}
              >
                <div className="relative aspect-[9/20] overflow-hidden">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 31vw"
                    className="object-cover"
                  />
                </div>
                <p className="px-2 pb-2 pt-4 font-mono text-[0.67rem] uppercase tracking-[0.14em] text-[#9ca4bc]">
                  0{index + 1} · {screenshot.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
