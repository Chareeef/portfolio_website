import { ArrowRight, FileText } from "lucide-react";

const steps = [
  {
    label: "Expression",
    content: "√(2x + 3) = (x + 1) / 2",
    code: false,
  },
  {
    label: "LaTeX",
    content: String.raw`\sqrt{2x+3}=\frac{x+1}{2}`,
    code: true,
  },
] as const;

export function MathExpressionDemo() {
  return (
    <figure
      aria-labelledby="expression-flow-caption"
      className="border-y border-white/10 bg-[#0c0e20] px-5 py-7 sm:px-8"
    >
      <figcaption
        id="expression-flow-caption"
        className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-[#929ab2]"
      >
        One expression, three useful forms
      </figcaption>

      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
        {steps.map((step) => (
          <div key={step.label} className="contents">
            <div className="min-w-0 border border-white/[.12] bg-[#080a17] p-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#858da5]">
                {step.label}
              </p>
              {step.code ? (
                <code className="mt-4 block break-words font-mono text-sm leading-7 text-[#d9d4f4]">
                  {step.content}
                </code>
              ) : (
                <p className="mt-4 font-display text-xl leading-8 text-[#eeebe4]">
                  {step.content}
                </p>
              )}
            </div>
            <ArrowRight
              aria-hidden="true"
              className="mx-auto rotate-90 text-[#656d86] md:rotate-0"
              size={18}
            />
          </div>
        ))}

        <div className="min-w-0 border border-white/[.12] bg-[#080a17] p-5">
          <div className="flex items-center gap-3">
            <FileText aria-hidden="true" size={18} className="text-[#dfc78f]" />
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#858da5]">
              Vector PDF
            </p>
          </div>
          <p className="mt-4 text-sm leading-7 text-[#cbcdda]">
            Ready to export on device.
          </p>
        </div>
      </div>
    </figure>
  );
}
