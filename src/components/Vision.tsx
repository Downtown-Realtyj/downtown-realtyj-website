import Image from "next/image";

const Vision = () => {

  return (
    <section id="vision" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div
                    className="relative animate-fade-in-scale"
                >
                    <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/director-image.webp"
                            alt="Director"
                            width={800}
                            height={1000}
                            loading="lazy"
                            decoding="async"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-gold text-black p-8 rounded-xl shadow-xl max-w-xs">
                    <p className="italic text-lg md:text-xl mb-4">
                        "We are not just building houses; we are building a legacy for Bihar."
                    </p>
                    <p className="font-bold text-sm md:text-base uppercase tracking-widest">— Director</p>
                    </div>
                </div>
            
                <div>
                    <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-4">
                        Our Story & Commitment
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                        A Vision Rooted in Patna's Soil
                    </h3>
                    <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed">
                        <p>
                            Downtown Realtyj Private Limited was born from a simple realization: Patna deserves world-class urban spaces built on a foundation of absolute trust.
                        </p>
                        <p>
                            As a local firm, our focus is exclusively on Bihar's development. We understand the landscape, the culture, and the aspirations of our people.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Vision;