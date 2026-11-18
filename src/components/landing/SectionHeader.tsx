import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center"; 
  split?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  split = false,
}: SectionHeaderProps) {
  const center = align === "center";
  return (
    <div
      className={
        split
          ? "mb-10 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end"
          : `mb-10 md:mb-14 ${center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}`
      }
    >
      <div>
        <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.12em] text-champagne-deep">
          {eyebrow}
        </span>
        <h2 className="font-display text-[28px] font-semibold leading-9 tracking-tight text-charcoal md:text-[40px] md:leading-12">
          {title}
        </h2>
        {!split && description && (
          <p className="mt-3 text-base leading-7 text-stone-muted md:text-lg md:leading-7">
            {description}
          </p>
        )}
      </div>
      {split && description && (
        <p className="max-w-md text-[15px] leading-6 text-stone-muted">{description}</p>
      )}
    </div>
  );
}
