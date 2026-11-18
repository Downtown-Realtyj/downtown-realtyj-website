"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Building2, MapPin } from "lucide-react";
import { BUDGET_OPTIONS, PROJECTS, type Project } from "../../data/landing";
import { useFinder } from "./FinderContext";
import SectionHeader from "./SectionHeader";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]">
      <div>
        <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
              <Building2 aria-hidden className="size-12 text-gray-300" />
            </div>
          )}
          <div className="absolute left-4 top-4 flex flex-col items-start gap-1.5">
            <span className="rounded bg-gray-900/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
              {project.tag}
            </span>
            <span className="rounded border border-champagne/20 bg-white/95 px-2.5 py-0.5 text-[11px] font-bold text-champagne-deep backdrop-blur">
              {project.status}
            </span>
          </div>
          {project.reraNumber && (
            <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded bg-gray-900/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
              <BadgeCheck aria-hidden className="size-3.5 text-emerald-400" /> RERA registered
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4 p-6">
          <div>
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-[22px] font-semibold leading-7 text-charcoal">{project.name}</h3>
              <span className="shrink-0 text-xs font-bold text-emerald-700">{project.priceLabel}</span>
            </div>
            <p className="mt-1 flex items-center gap-1 text-[13px] text-stone-muted">
              <MapPin aria-hidden className="size-4 shrink-0 text-champagne-deep" />
              {project.localityLabel}
            </p>
          </div>

          <dl className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-gray-50 p-3.5 text-[13px] text-stone-muted">
            {[
              ["Developer", project.developer],
              ["Configuration", project.configuration],
              [project.highlight.label, project.highlight.value],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4">
                <dt>{k}:</dt>
                <dd className="text-right font-medium text-charcoal">{v}</dd>
              </div>
            ))}
          </dl>

          {project.reraNumber && (
            <p className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-[11px]">
              <span className="text-stone-muted">Bihar RERA Reg. No:</span>
              <span className="ml-2 truncate font-bold text-emerald-700">{project.reraNumber}</span>
            </p>
          )}
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href="#enquiry"
          className="flex h-11 w-full items-center justify-center rounded-lg bg-champagne text-[11px] font-bold uppercase tracking-wider text-charcoal shadow-sm transition-colors hover:bg-champagne-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
        >
          Book Site Visit
        </Link>
      </div>
    </article>
  );
}

export default function FeaturedProperties() {
  const { filters, reset } = useFinder();
  const budget = BUDGET_OPTIONS.find((b) => b.value === filters.budget)!;

  const results = PROJECTS.filter(
    (p) =>
      (filters.kind === "all" || p.kind === filters.kind) &&
      (filters.locality === "all" || p.locality === filters.locality) &&
      p.priceFromLakh >= budget.min &&
      p.priceFromLakh < budget.max,
  );

  return (
    <section id="featured-projects" className="w-full scroll-mt-28 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <SectionHeader
          split
          eyebrow="Curated inventory"
          title="Explore Properties in Patna"
          description="Carefully presented residential projects from our developer partners."
        />

        <div aria-live="polite">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {results.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
              <p className="font-display text-xl text-charcoal">No projects match these filters yet.</p>
              <p className="mt-2 text-[15px] text-stone-muted">
                Our advisors may have unlisted options — tell us what you need.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-charcoal hover:bg-gray-50"
                >
                  Clear filters
                </button>
                <Link
                  href="#enquiry"
                  className="rounded-lg bg-champagne px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-charcoal hover:bg-champagne-hover"
                >
                  Ask an advisor
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
