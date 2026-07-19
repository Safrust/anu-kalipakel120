type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "mx-auto text-center items-center" : "text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-2 sm:gap-3 ${alignClass}`}>
      {eyebrow ? (
        <span className="inline-flex w-fit items-center rounded-full border border-border bg-white/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent-strong shadow-sm backdrop-blur sm:text-xs">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-6 text-muted sm:text-base sm:leading-7">
          {description}
        </p>
      ) : null}
    </div>
  );
}
