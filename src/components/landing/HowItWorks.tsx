import { Phone } from "lucide-react";
import { STEPS } from "../../data/landing";
import { company as COMPANY } from "../../data/companyData";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <SectionHeader
          align="center"
          eyebrow="Simplified home buying"
          title="How It Works"
          description="A structured four-step roadmap designed to protect your capital and streamline your journey."
        />

        <ol className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s?.title}
              className="flex flex-col rounded-xl border border-gray-200/80 bg-white p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] transition-colors hover:border-champagne/40"
            >
              <span aria-hidden className="mb-4 font-display text-[40px] font-bold leading-none text-champagne/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 font-display text-[22px] font-semibold leading-7.5 text-charcoal">{s?.title}</h3>
              <p className="text-[13px] leading-relaxed text-stone-muted">{s?.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-gray-200/70 bg-gray-50 p-6 sm:flex-row lg:p-8">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-champagne text-charcoal shadow-sm">
              <Phone aria-hidden className="size-6" />
            </span>
            <div>
              <h3 className="font-display text-[22px] font-semibold leading-7.5 text-charcoal">
                Need clarity on an ongoing Patna project?
              </h3>
              <p className="text-[13px] text-stone-muted">
                Our Patna advisory desk can help you check project details against Bihar RERA records.
              </p>
            </div>
          </div>
          <a
            href={COMPANY?.phones?.[0]?.tel}
            className="shrink-0 rounded-lg bg-gray-900 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-champagne hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
          >
            Call Advisory Desk
          </a>
        </div>
      </div>
    </section>
  );
}
