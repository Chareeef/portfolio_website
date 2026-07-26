"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Database,
  Filter,
  RadioTower,
  Search,
  ServerCog,
  Waypoints,
} from "lucide-react";
import { copy, type Locale } from "@/lib/i18n";

const icons = [RadioTower, ServerCog, Waypoints, Filter, Database, Search] as const;

export function PipelineDiagram({ locale }: { locale: Locale }) {
  const reducedMotion = useReducedMotion();
  const content = copy[locale].remoteOtter.pipeline;
  const steps = content.steps.map(([name, detail], index) => ({
    name,
    detail,
    icon: icons[index],
  }));

  return (
    <figure aria-labelledby="pipeline-caption">
      <figcaption
        id="pipeline-caption"
        className="mb-5 flex items-center justify-between gap-4"
      >
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#a8afc6]">
          {content.caption}
        </span>
        <span className="hidden font-mono text-[0.64rem] text-[#69718b] sm:block">
          {content.refresh}
        </span>
      </figcaption>

      <div className="relative grid gap-2 md:grid-cols-6 md:gap-1">
        <div
          aria-hidden="true"
          className="absolute left-[8%] right-[8%] top-[2.15rem] hidden h-px bg-white/10 md:block"
        >
          <motion.span
            className="block h-px origin-left bg-gradient-to-r from-[#8e8be6] to-[#e7c98d]"
            initial={reducedMotion ? false : { scaleX: 0 }}
            whileInView={reducedMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {steps.map((step, index) => (
          <motion.div
            key={step.name}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.45, delay: index * 0.09 }}
            className="relative grid grid-cols-[3rem_1fr] items-center gap-3 border-l border-white/10 py-3 pl-3 md:block md:border-0 md:px-1 md:py-0 md:text-center"
          >
            <span className="relative z-10 grid size-11 place-items-center rounded-full border border-white/15 bg-[#0b1023] text-[#b8b5f4] md:mx-auto">
              <step.icon aria-hidden="true" size={18} />
            </span>
            <div className="md:mt-4">
              <p className="text-sm font-semibold text-[#e5e4ec]">
                {step.name}
              </p>
              <p className="mt-1 text-xs leading-5 text-[#858da6]">
                {step.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </figure>
  );
}
