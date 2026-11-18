import { MessageCircle, Phone, Store } from "lucide-react";
import { company as COMPANY } from "../../data/companyData";
import InterestForm from "../InterestForm";

export default function EnquirySection() {
  return (
    <section id="enquiry" className="w-full scroll-mt-28 border-t border-gray-100 bg-gray-50/70 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-champagne-deep">Let&apos;s connect</span>
            <h2 className="font-display text-[28px] font-semibold leading-9 tracking-tight text-charcoal md:text-[40px] md:leading-12">
              Let&apos;s Find the Right Property for You.
            </h2>
            <p className="text-base leading-7 text-stone-muted md:text-lg">
              Tell us what you&apos;re looking for. Our advisors will curate matching options across Patna and
              arrange visits.
            </p>

            <div className="flex flex-col gap-4 pt-4">
              <a href={COMPANY?.phones?.[0]?.tel} className="flex items-center gap-4 rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm transition-colors hover:border-champagne/40">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-amber-100 bg-amber-50 text-champagne-deep">
                  <Phone aria-hidden className="size-6" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase text-stone-muted">Direct advisory desk</span>
                  <span className="font-display text-[22px] font-semibold text-charcoal">{COMPANY?.phones?.[0]?.display}</span>
                </span>
              </a>

              <a href={COMPANY?.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm transition-colors hover:border-emerald-300">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 text-emerald-700">
                  <MessageCircle aria-hidden className="size-6" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase text-stone-muted">Instant WhatsApp support</span>
                  <span className="text-[15px] font-bold text-charcoal">Chat with a property advisor</span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm">
                <span className="mt-0.5 flex size-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-charcoal">
                  <Store aria-hidden className="size-6" />
                </span>
                <address className="flex flex-col not-italic">
                  <span className="text-[11px] font-bold uppercase text-stone-muted">Patna corporate office</span>
                  <span className="mt-0.5 text-[13px] leading-relaxed text-charcoal">{COMPANY?.address}</span>
                  <span className="mt-1 text-[11px] text-stone-muted">Office hours: {COMPANY?.officeHours}</span>
                </address>
              </div>
            </div>
          </div>

          {/* Existing form keeps its validation and submit states. Restyle it separately. */}
          <div className="p-4 md:p-6 lg:col-span-7 lg:p-8">
            <InterestForm />
          </div>
        </div>
      </div>
    </section>
  );
}
