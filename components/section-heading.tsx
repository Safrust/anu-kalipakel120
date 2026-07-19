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
    <div className={`flex max-w-3xl flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <span className="inline-flex w-fit items-center rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent-strong shadow-sm backdrop-blur">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
