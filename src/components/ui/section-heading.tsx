type Align = "left" | "center";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  dark?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <div
          className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold ${
            align === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </div>
      )}
      <Heading
        className={`text-3xl font-bold leading-tight sm:text-4xl md:text-[2.6rem] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-cream/70" : "text-ink/65"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
