import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Building2, Headset } from "lucide-react";
import { HERO_STATS, type Project } from "../../data/landing";

interface LandingHeroProps {
  featured: Project;
  image?: string | null;
}

export default function LandingHero({ featured, image = null }: LandingHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-8 pt-24 lg:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-stone-muted shadow-sm">
          <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-600 motion-safe:animate-pulse" />
          Authorized real estate advisory • Patna, Bihar
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <h1 className="font-display text-[34px] font-semibold leading-10 tracking-tight text-charcoal md:text-5xl md:leading-[1.15] xl:text-[56px] xl:leading-17">
              Find a Home That Feels Right.{" "}
              <span className="font-normal italic text-champagne-deep">At the Builder&apos;s Price.</span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-stone-muted md:text-lg">
              Discover residential projects and plots from our developer partners in Patna. Compare
              properties, explore verified locations, and get complete advisory throughout your
              home-buying journey.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#featured-projects"
                className="inline-flex items-center justify-center rounded-lg bg-champagne px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-charcoal shadow-[0_4px_14px_rgba(184,149,71,0.28)] transition-all duration-200 hover:bg-champagne-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
              >
                Explore Properties
              </Link>
              <Link
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-charcoal shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
              >
                <Headset aria-hidden className="size-4.5 text-champagne-deep" />
                Talk to a Home Advisor
              </Link>
            </div>

            <dl className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-6">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-stone-muted">
                    {s.label}
                  </dt>
                  <dd className="font-display text-2xl font-bold text-charcoal md:text-[28px]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-100 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.12)]">
              {image ? (
                <Image
                  src={image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
                  <Building2 aria-hidden className="size-16 text-gray-300" />
                </div>
              )}
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-xl border border-white/60 bg-white/95 p-4 shadow-lg backdrop-blur-md md:inset-x-6 md:bottom-6 md:p-5">
                <div className="flex min-w-0 flex-col">
                  <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    <BadgeCheck aria-hidden className="size-3.75" /> Featured partner project
                  </span>
                  <span className="mt-0.5 truncate font-display text-lg font-semibold text-charcoal md:text-[22px]">
                    {featured.name}
                  </span>
                  <span className="truncate text-[13px] text-stone-muted">By {featured.developer}</span>
                </div>
                <div className="shrink-0 text-right">
                  <span className="block text-[11px] font-semibold uppercase text-stone-muted">Builder price</span>
                  <span className="text-sm font-bold text-charcoal">{featured.priceLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}