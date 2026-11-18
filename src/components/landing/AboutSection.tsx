import Link from "next/link";
import { Award, Building2 } from "lucide-react";
import { company as COMPANY } from "../../data/companyData";

export default function AboutSection() {
  return (
    <section className="w-full border-y border-gray-100 bg-gray-50/70 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <span className="w-fit rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-stone-muted">
              Corporate heritage
            </span>
            <h2 className="font-display text-[28px] font-semibold leading-9 tracking-tight text-charcoal md:text-[40px] md:leading-12">
              Helping Patna Homebuyers Find the Right Property.
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-muted">
              Headquartered at Leeds Tower, Rupaspur, Bailey Road, {COMPANY.legalName} focuses on Bihar&apos;s
              planned urban development. We act as a channel and sales partner for regional developers and
              also deal in well-located land parcels in Patna.
            </p>
            <p className="flex items-center gap-2 text-[13px] text-stone-muted">
              <Building2 aria-hidden className="size-5 text-champagne-deep" />
              Leeds Tower, Rupaspur
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-gray-200/80 bg-white p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)] lg:p-10">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                <span className="rounded bg-gray-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Downtown developments
                </span>
                {/* VERIFY launch timing before publishing */}
                <span className="rounded bg-gray-100 px-2.5 py-0.5 text-[11px] font-bold text-stone-muted">Launching Q4 2026</span>
              </div>
              <h3 className="mb-3 font-display text-[28px] font-semibold leading-9 text-charcoal">
                Signature Residences for Patna&apos;s Next Era
              </h3>
              <p className="mb-6 text-[15px] leading-relaxed text-stone-muted">
                Alongside our partner projects, Downtown Realtyj is preparing its own plotted and high-rise
                developments in Patna.
              </p>
              <div className="mb-8 flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <Award aria-hidden className="size-6 shrink-0 text-champagne-deep" />
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-charcoal">Priority access</span>
                  <span className="text-[11px] text-stone-muted">Register early to receive the preliminary project brief.</span>
                </div>
              </div>
              <Link
                href="#enquiry"
                className="block w-full rounded-lg bg-gray-900 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-champagne hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
              >
                Register Interest
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
