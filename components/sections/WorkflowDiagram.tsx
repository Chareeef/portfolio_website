import {
  Cloud,
  Command,
  ArrowDown,
  MonitorSmartphone,
  Server,
  SquareTerminal,
} from "lucide-react";

const workflow = [
  { name: "Tablet", detail: "Primary interface", icon: MonitorSmartphone },
  { name: "Termux", detail: "Local terminal", icon: SquareTerminal },
  { name: "SSH", detail: "Secure connection", icon: Command },
  { name: "Ubuntu", detail: "Development environment", icon: Server },
  { name: "Vim + tmux", detail: "Focused workspace", icon: SquareTerminal },
  { name: "Production", detail: "Deployed systems", icon: Cloud },
] as const;

export function WorkflowDiagram() {
  return (
    <figure aria-labelledby="workflow-caption">
      <figcaption
        id="workflow-caption"
        className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-[#a8afc6]"
      >
        Development workflow
      </figcaption>
      <ol className="relative grid gap-2 lg:grid-cols-6">
        <span
          aria-hidden="true"
          className="absolute left-[8%] right-[8%] top-6 hidden h-px bg-gradient-to-r from-[#9992ef]/20 via-[#9992ef]/65 to-[#e7c98d]/55 lg:block"
        />
        {workflow.map((step, index) => (
          <li
            key={step.name}
            className="relative grid grid-cols-[3.1rem_1fr] items-center gap-3 border-l border-white/10 py-3 pl-3 lg:block lg:border-0 lg:px-2 lg:py-0 lg:text-center"
          >
            <span className="relative z-10 grid size-12 place-items-center rounded-full border border-white/[.14] bg-[#0a0d1b] text-[#a5a0ed] lg:mx-auto">
              <step.icon aria-hidden="true" size={19} />
            </span>
            <div className="lg:mt-4">
              <p className="text-sm font-semibold text-[#e2e1e8]">
                {step.name}
              </p>
              <p className="mt-1 text-xs leading-5 text-[#7f879f]">
                {step.detail}
              </p>
            </div>
            {index < workflow.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute left-9 top-full z-10 -translate-x-1/2 -translate-y-1/2 text-[#59617a] lg:hidden"
              >
                <ArrowDown size={14} strokeWidth={2.5} />
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
