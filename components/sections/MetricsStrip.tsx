import { proofMetrics } from "@/data/portfolio";
import { Reveal } from "@/components/shared/Reveal";

export function MetricsStrip() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="relative z-10 bg-[#050713]"
    >
      <div className="shell">
        <h2 id="proof-heading" className="sr-only">
          Verified product outcomes
        </h2>
        <div className="grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {proofMetrics.map((metric, index) => (
            <Reveal
              key={metric.value + metric.label}
              delay={index * 0.06}
              className="relative min-h-44 border-b border-white/10 px-4 py-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 sm:[&:nth-child(odd)]:border-r"
            >
              <span className="font-display text-[clamp(2.15rem,4vw,4rem)] font-medium tracking-[-0.06em] text-[#f3efe4]">
                {metric.value}
              </span>
              <p className="mt-4 max-w-[14rem] text-sm font-semibold leading-6 text-[#d7d9e5]">
                {metric.label}
              </p>
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#7f879f]">
                {metric.context}
              </p>
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 font-mono text-[0.62rem] text-[#545d77]"
              >
                0{index + 1}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
