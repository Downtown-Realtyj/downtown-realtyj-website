import Link from 'next/link';
import { ArrowRight, Map } from 'lucide-react';

const FeaturedProperty = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-midnight relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div
            className="absolute inset-0"
            style={{
                backgroundImage: 'radial-gradient(#c9a84c 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }}
            ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
                {/* Left: Content */}
                <div
                    className="space-y-6 sm:space-y-8"
                >
                    <div>
                    <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase block mb-2 sm:mb-4">
                        Featured Project
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-2 sm:mb-4">
                        Shridi Sai City
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gold font-light italic">
                        A Premium Residential Township
                    </p>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    A thoughtfully planned residential township offering prime plots
                    with future-ready infrastructure, nestled in a rapidly developing
                    corridor of Patna. Spanning more than 5500 sq ft, it's designed for those
                    who envision a life of comfort and connectivity.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                    {[
                        'Prime Plots',
                        'Future-Ready Infrastructure',
                        'Rapid Development Zone',
                    ].map((tag, i) => (
                        <span
                        key={i}
                        className="px-3 sm:px-4 py-2 border border-gold/30 rounded-full text-slate-300 text-xs sm:text-sm cursor-default"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>

                    <div className="pt-2 sm:pt-4">
                        <Link
                            href="/shridi-sai-city"
                            className="inline-flex group items-center justify-center sm:justify-start gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 border border-gold text-gold hover:bg-gold hover:text-midnight transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm font-bold rounded-sm"
                        >
                            Explore Full Details
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Right: Visual */}
                <div
                    className="relative mt-8 md:mt-0"
                >
                    <div className="aspect-video sm:aspect-square md:aspect-4/3 bg-slate-800 rounded-sm border border-white/10 relative overflow-hidden group shadow-2xl">
                    {/* Stylized Plot Layout */}
                    <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center">
                        <div className="w-full h-full border-2 border-gold/20 grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 relative">
                        {/* Road lines */}
                        <div className="absolute top-1/2 left-0 w-full h-1 sm:h-2 bg-slate-700/50 -translate-y-1/2 border-y border-gold/10"></div>
                        <div className="absolute left-1/2 top-0 h-full w-1 sm:w-2 bg-slate-700/50 -translate-x-1/2 border-x border-gold/10"></div>

                        {/* Plots */}
                        {Array.from({
                            length: 12,
                        }).map((_, i) => (
                            <div
                            key={i}
                            className="border border-gold/40 bg-slate-700/30 hover:bg-gold/20 transition-colors duration-500 relative group/plot"
                            >
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/plot:opacity-100 transition-opacity">
                                <span className="text-gold text-xs">PLOT {i + 1}</span>
                            </div>
                            </div>
                        ))}
                        </div>

                        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-midnight/90 backdrop-blur px-2 sm:px-3 md:px-4 py-1 sm:py-2 border border-gold/30 flex items-center gap-2 rounded-sm">
                        <Map className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                        <span className="text-white text-xs tracking-wider">
                            MASTER PLAN
                        </span>
                        </div>
                    </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-gold/30"></div>
                    <div className="hidden sm:block absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-gold/30"></div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeaturedProperty;