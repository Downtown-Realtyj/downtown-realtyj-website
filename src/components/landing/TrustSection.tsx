import { CheckCircle2, ExternalLink, ScrollText, BadgeCheck } from "lucide-react";
import { TRUST_POINTS } from "../../data/landing";
import { company as COMPANY } from "../../data/companyData";

export default function TrustSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] md:p-8 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                <BadgeCheck aria-hidden className="size-4 text-emerald-600" /> Regulatory integrity
              </span>
              <h2 className="font-display text-[28px] font-semibold leading-9 tracking-tight text-charcoal md:text-[40px] md:leading-12">
                Your Property Decision Deserves Absolute Clarity.
              </h2>
              <p className="text-[15px] leading-relaxed text-stone-muted">
                Real estate is a lifetime milestone. Downtown Realtyj works within Bihar RERA guidelines to
                remove ambiguity, undisclosed charges and title surprises.
              </p>
              <ul className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                {TRUST_POINTS.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[13px] text-charcoal">
                    <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a
                  href={COMPANY?.rera?.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-charcoal transition-colors hover:bg-gray-100"
                >
                  Verify on Bihar RERA portal
                  <ExternalLink aria-hidden className="size-3.75" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200/80 bg-gray-50 p-8 text-center lg:col-span-5">
              <span className="mb-4 flex size-20 items-center justify-center rounded-full border border-gray-200/60 bg-white text-emerald-700 shadow-sm">
                <ScrollText aria-hidden className="size-11" />
              </span>
              <h3 className="mb-1 font-display text-[22px] font-semibold text-charcoal">Agent credentials</h3>
              <p className="mb-4 text-[11px] uppercase tracking-widest text-stone-muted">Bihar RERA</p>
              {COMPANY?.rera?.agentNumber && (
                <div className="mb-4 w-full rounded-xl border border-gray-200/70 bg-white p-4 shadow-sm">
                  <span className="block text-[11px] uppercase text-stone-muted">Registered certificate no.</span>
                  <span className="select-all text-[13px] font-bold text-charcoal">{COMPANY?.rera?.agentNumber}</span>
                </div>
              )}
              <p className="text-[11px] leading-relaxed text-stone-muted">
                {COMPANY.legalName} is a sales and marketing advisory firm, not a builder or promoter.
                Please verify all project credentials on the official Bihar RERA portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
