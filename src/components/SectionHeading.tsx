import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  action?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  action,
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={`mb-10 flex flex-col gap-4 md:mb-14 ${center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}>
      <div className={center ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
        )}
        <h2 className={`text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${onDark ? "text-gold" : "text-midnight"}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-base md:text-lg ${onDark ? "text-gold/80" : "text-midnight/70"}`}>{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}