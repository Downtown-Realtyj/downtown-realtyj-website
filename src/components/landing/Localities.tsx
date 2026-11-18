import { LOCALITIES } from "../../data/landing";
import SectionHeader from "./SectionHeader";

export default function Localities() {
  return (
    <section className="w-full border-y border-gray-100 bg-gray-50/70 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <SectionHeader
          split
          eyebrow="Growth corridors"
          title="Find Your Home in the Right Neighbourhood"
          description="Explore micro-markets across Patna with strong transit links, healthcare and educational hubs."
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {LOCALITIES.map(({ icon: Icon, name, badge, body, count }) => (
            <li
              key={name}
              className="flex flex-col justify-between rounded-2xl border border-gray-200/70 bg-white p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-lg"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-full bg-gray-100 text-charcoal">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <span className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-[11px] font-bold text-stone-muted">
                    {badge}
                  </span>
                </div>
                <h3 className="font-display text-[22px] font-semibold leading-7.5 text-charcoal">{name}</h3>
                <p className="mt-2 text-[13px] leading-5 text-stone-muted">{body}</p>
              </div>
              <p className="mt-6 flex justify-between rounded-lg border border-gray-100 bg-gray-50 p-3 text-[11px]">
                <span className="text-stone-muted">Available projects:</span>
                <span className="font-bold text-charcoal">{count}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
