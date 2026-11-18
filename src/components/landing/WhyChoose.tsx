import { WHY_CHOOSE } from "../../data/landing";
import SectionHeader from "./SectionHeader";

const TONES = {
  emerald: { icon: "bg-emerald-50 border border-emerald-100 text-emerald-700", note: "bg-emerald-50/60 border-emerald-100/60 text-emerald-800" },
  gold: { icon: "bg-amber-50 border border-amber-100 text-champagne-deep", note: "bg-amber-50/60 border-amber-100/60 text-champagne-deep" },
  neutral: { icon: "bg-gray-100 text-charcoal", note: "bg-gray-50 border-gray-100 text-charcoal" },
} as const;

export default function WhyChoose() {
  return (
    <section className="w-full border-y border-gray-100 bg-gray-50/70 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <SectionHeader
          eyebrow="Institutional advisory"
          title="A Better Way to Find Your Next Home."
          description="We combine statutory RERA compliance, trusted builder relationships and ground-level property vetting so you can decide with confidence in Patna."
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map(({ icon: Icon, title, body, note, tone }) => (
            <li
              key={title}
              className="flex flex-col justify-between rounded-xl border border-gray-200/70 bg-white p-7 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-lg"
            >
              <div>
                <span className={`mb-6 flex size-12 items-center justify-center rounded-lg ${TONES[tone].icon}`}>
                  <Icon aria-hidden className="size-6" />
                </span>
                <h3 className="mb-3 font-display text-[22px] font-semibold leading-7.5 text-charcoal">{title}</h3>
                <p className="text-[13px] leading-relaxed text-stone-muted">{body}</p>
              </div>
              <p className={`mt-6 rounded-lg border p-3 text-[11px] font-semibold ${TONES[tone].note}`}>{note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
