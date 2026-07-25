type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header
      className={`max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-5 text-balance font-display text-[clamp(2.4rem,6vw,5.8rem)] font-medium leading-[0.95] tracking-[-0.055em]"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-7 max-w-2xl text-base leading-8 text-[#b2b9d0] md:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
