/*import Link from "next/link";
import { ChevronDown } from "lucide-react";
import CldImage from "./CldImage";
import RERABadge from "./ReraBadge";

const Hero = () => {
    return (
        <section aria-labelledby="hero-heading" className="w-full min-h-dvh relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 -z-10 bg-black">
                <CldImage
                    src="project-aerial-closeup_qbu7l3"
                    alt=""
                    fill
                    preload
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            <div className="relative w-full flex-1 flex flex-col items-center justify-center z-10 px-4 sm:px-6 md:px-12 pt-28 pb-24">
                <RERABadge className="mb-6" />

                <h1 id="hero-heading" className="max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight drop-shadow-md">
                    Redefining the Skyline,{" "}
                    <span className="text-gold">Elite Residential &amp; Commercial Spaces.</span>
                </h1>

                <p className="max-w-3xl text-gray-200 text-center mt-6 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-sm">
                    Discover future-ready projects and high-growth land investments across Patna.
                    We market and sell RERA-registered projects on behalf of leading developers,
                    and guide you from first visit to booking.
                </p>

                <div className="w-full max-w-xl mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-4 px-4">
                    <Link
                        href="/projects"
                        className="w-full sm:w-auto text-center bg-gold hover:bg-gold/80 text-slate-950 font-semibold px-8 py-3.5 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Explore Projects
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto text-center border-2 border-white hover:border-gold hover:text-gold text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-lg backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Talk to an Advisor
                    </Link>
                </div>

                <div aria-hidden="true" className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex justify-center motion-safe:animate-bounce">
                    <ChevronDown strokeWidth={2} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-brand" />
                </div>
            </div>
        </section>
    );
};

export default Hero;*/

import Link from "next/link";
import { Phone } from "lucide-react";
import CldImage from "./CldImage";
import RERABadge from "./ReraBadge";
import { company } from "../data/companyData";

// Edit these three steps if your process differs.
const steps = [
    {
        title: "Explore projects",
        text: "Browse ongoing, upcoming and ready-to-move projects from our partner developers.",
    },
    {
        title: "Visit the site",
        text: "Speak to an advisor and arrange a site visit at a time that suits you.",
    },
    {
        title: "Book with support",
        text: "We stay with you from shortlisting through to booking.",
    },
];

const Hero = () => {
    const phone = company?.phones[0];

    return (
        <section aria-labelledby="hero-heading" className="w-full min-h-dvh relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 -z-10 bg-black">
                {/* Decorative background: the heading and copy carry the meaning */}
                <CldImage
                    src="project-aerial-closeup_qbu7l3"
                    alt=""
                    fill
                    preload
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/75"></div>
            </div>

            <div className="relative w-full flex-1 flex flex-col items-center justify-center z-10 px-4 sm:px-6 md:px-12 pt-28 pb-12 md:pb-16">
                <h1 id="hero-heading" className="max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight drop-shadow-md">
                    Buy your property in Patna{" "}
                    <span className="text-gold">through a RERA registered partner.</span>
                </h1>

                <p className="max-w-3xl text-gray-200 text-center mt-6 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-sm">
                    {company?.name} markets and sells residential and commercial projects on behalf of
                    developers. We help you compare projects, visit them, and book with confidence.
                </p>

                <div className="w-full max-w-xl mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-4 px-4">
                    <Link
                        href="/projects"
                        className="w-full sm:w-auto text-center bg-gold hover:bg-gold/80 text-slate-950 font-semibold px-8 py-3.5 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto text-center border-2 border-white hover:border-gold hover:text-gold text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-lg backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Book a Site Visit
                    </Link>
                </div>

                <ol aria-label="How we work" className="mt-12 grid w-full max-w-5xl gap-4 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <li key={step.title} className="flex gap-4 rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                            <span
                                aria-hidden="true"
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-midnight"
                            >
                                {i + 1}
                            </span>
                            <div>
                                <h2 className="text-base font-semibold text-white">{step.title}</h2>
                                <p className="mt-1 text-sm text-gray-200">{step.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Hero;