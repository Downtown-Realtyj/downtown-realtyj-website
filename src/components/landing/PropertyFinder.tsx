"use client";

import { useId, type ReactNode } from "react";
import { Banknote, ChevronDown, MapPin, Search, SlidersHorizontal } from "lucide-react";
import { BUDGET_OPTIONS, KIND_OPTIONS, LOCALITY_OPTIONS } from "../../data/landing";
import { useFinder, type Filters } from "./FinderContext";

interface FieldProps<T extends string> {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: readonly { value: T; label: string }[];
  icon: ReactNode;
}

function Field<T extends string>({ label, value, onChange, options, icon }: FieldProps<T>) {
  const id = useId();
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 text-[11px] font-bold uppercase tracking-wider text-stone-muted">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value as T)}
          className="h-12 w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-gray-50 px-3.5 pr-10 text-[13px] text-charcoal transition-colors hover:bg-gray-100/70 focus:border-champagne focus:bg-white focus:outline-none focus:ring-2 focus:ring-champagne/20"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span aria-hidden className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-muted">
          {icon}
        </span>
      </div>
    </div>
  );
}

export default function PropertyFinder() {
  const { filters, setFilter } = useFinder();

  const set =
    <K extends keyof Filters>(key: K) =>
    (v: Filters[K]) =>
      setFilter(key, v);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = document.getElementById("featured-projects");
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  return (
    <section aria-label="Property finder" className="w-full bg-white pb-12 lg:pb-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-amber-50 text-champagne-deep">
                <SlidersHorizontal aria-hidden className="size-5" />
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                Patna property filter &amp; match
              </h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 pt-5 sm:grid-cols-2 lg:grid-cols-4">
            <Field label="Property type" value={filters.kind} onChange={set("kind")} options={KIND_OPTIONS}
              icon={<ChevronDown className="size-4.5" />} />
            <Field label="Locality in Patna" value={filters.locality} onChange={set("locality")} options={LOCALITY_OPTIONS}
              icon={<MapPin className="size-4.5" />} />
            <Field label="Budget range" value={filters.budget} onChange={set("budget")} options={BUDGET_OPTIONS}
              icon={<Banknote className="size-4.5" />} />
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-champagne text-xs font-bold uppercase tracking-wider text-charcoal shadow-[0_4px_14px_rgba(184,149,71,0.25)] transition-all hover:bg-champagne-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal cursor-pointer"
              >
                <Search aria-hidden className="size-4.5" />
                Find Properties
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
