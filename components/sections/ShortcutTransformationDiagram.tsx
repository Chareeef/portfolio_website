import { ArrowRight, CornerDownRight, Keyboard, Sparkles } from "lucide-react";

const shortcuts = [
  {
    input: "sq",
    name: "Square root",
    description: "The cursor lands inside the radicand, ready for the value.",
    output: (
      <span
        className="inline-flex items-start font-display text-5xl text-[#f2effc]"
        aria-label="Editable square root"
      >
        <span className="leading-none">√</span>
        <span className="-ml-1 mt-1 inline-flex min-w-20 items-center border-t-2 border-[#d9d5f4] px-4 py-2">
          <span className="h-9 w-[2px] animate-pulse bg-[#70e7f8]" />
        </span>
      </span>
    ),
  },
  {
    input: "fr",
    name: "Fraction",
    description:
      "A numerator and denominator are created as one navigable expression.",
    output: (
      <span
        className="inline-grid min-w-28 grid-rows-2 text-center font-display text-2xl text-[#f2effc]"
        aria-label="Editable fraction"
      >
        <span className="grid min-h-11 place-items-center border-b-2 border-[#d9d5f4]">
          <span className="h-7 w-[2px] animate-pulse bg-[#70e7f8]" />
        </span>
        <span className="grid min-h-11 place-items-center text-[#8992ad]">
          □
        </span>
      </span>
    ),
  },
] as const;

export function ShortcutTransformationDiagram() {
  return (
    <section
      aria-labelledby="shortcut-schema-title"
      className="relative overflow-hidden rounded-[1.75rem] border border-[#9992ef]/20 bg-[#0b0e20]/90 p-5 shadow-[0_2rem_6rem_rgba(0,0,0,.28)] sm:p-8 lg:p-10"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-32 size-80 rounded-full bg-[#7562dd]/15 blur-[90px]"
      />

      <div className="relative flex flex-col justify-between gap-6 border-b border-white/10 pb-7 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Live shortcut expansion</p>
          <h3
            id="shortcut-schema-title"
            className="mt-4 max-w-2xl font-display text-3xl tracking-[-0.045em] sm:text-4xl"
          >
            Type the intent. Get the real structure.
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.13em] text-[#6ee4f5]">
          <span className="size-1.5 rounded-full bg-[#63e7c0] shadow-[0_0_12px_#63e7c0]" />
          Rendered immediately
        </div>
      </div>

      <div className="relative mt-2">
        <div className="hidden grid-cols-[10rem_1fr_1.15fr] gap-5 px-4 py-4 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#626c86] md:grid">
          <span>Keystrokes</span>
          <span>Shortcut parser</span>
          <span>Editable output</span>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {shortcuts.map((shortcut, index) => (
            <article
              key={shortcut.input}
              className="grid gap-5 py-7 md:grid-cols-[10rem_1fr_1.15fr] md:items-center md:gap-5 md:px-4"
            >
              <div>
                <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#626c86] md:hidden">
                  Keystrokes
                </p>
                <div className="flex items-center gap-2">
                  {shortcut.input.split("").map((letter) => (
                    <kbd
                      key={letter}
                      className="grid size-14 place-items-center rounded-xl border border-white/15 bg-[#151a31] font-mono text-xl text-[#f0edf8] shadow-[inset_0_-3px_0_rgba(255,255,255,.05)]"
                    >
                      {letter}
                    </kbd>
                  ))}
                </div>
              </div>

              <div className="relative flex min-h-24 items-center gap-4 rounded-2xl border border-[#9992ef]/15 bg-[#9992ef]/[.055] px-4 py-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#70e7f8]/20 bg-[#70e7f8]/[.07] text-[#70e7f8]">
                  {index === 0 ? (
                    <Keyboard aria-hidden="true" size={17} />
                  ) : (
                    <Sparkles aria-hidden="true" size={17} />
                  )}
                </span>
                <div>
                  <p className="font-display text-lg text-[#e5e3ed]">
                    Recognise “{shortcut.input}”
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#7f89a4]">
                    Match shortcut · replace token
                  </p>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  size={18}
                  className="ml-auto hidden text-[#7770ba] md:block"
                />
                <CornerDownRight
                  aria-hidden="true"
                  size={18}
                  className="ml-auto text-[#7770ba] md:hidden"
                />
              </div>

              <div className="flex min-h-36 items-center gap-6 rounded-2xl border border-[#70e7f8]/15 bg-[#0d1727] px-5 py-5">
                <div className="grid min-w-32 place-items-center">
                  {shortcut.output}
                </div>
                <div>
                  <p className="font-display text-lg text-[#e5e3ed]">
                    {shortcut.name}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#8d97af]">
                    {shortcut.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="relative mt-5 max-w-3xl text-sm leading-7 text-[#8f98b0]">
        These are not visual substitutions. MathVellum inserts structured,
        keyboard-navigable expressions the moment the shortcut is completed.
      </p>
    </section>
  );
}
