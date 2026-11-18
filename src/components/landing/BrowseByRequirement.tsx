import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "../../data/landing";
import SectionHeader from "./SectionHeader";

export default function BrowseByRequirement() {
  return (
    <section className="w-full border-y border-gray-100 bg-gray-50/70 py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <SectionHeader
          split
          eyebrow="Tailored categories"
          title="Browse by Requirement"
          description="Structured selections curated to match modern family living and long-term capital appreciation in Patna."
        />

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map(({ title, units, description, cta, icon: Icon }) => (
            <li key={title}>
              <Link
                href="#featured-projects"
                className="group flex h-56 flex-col justify-between rounded-xl border border-gray-200/70 bg-white p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-champagne/40 hover:shadow-[0_8px_26px_rgba(0,0,0,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-charcoal transition-colors group-hover:bg-champagne">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <span className="rounded bg-gray-100/70 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-stone-muted">
                    {units}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-[22px] font-semibold leading-7.5 text-charcoal transition-colors group-hover:text-champagne-deep">
                    {title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-5 text-stone-muted">{description}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase text-champagne-deep transition-transform motion-safe:group-hover:translate-x-1">
                  {cta} <ArrowRight aria-hidden className="size-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
