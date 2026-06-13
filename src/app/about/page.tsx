import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className="bg-white py-24 px-6 lg:px-20" aria-labelledby="about-heading">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <div className="space-y-6">
                    <h2 
                        id="about-heading" 
                        className="text-sm font-bold tracking-wider text-brand uppercase"
                    >
                        About Downtown Realtyj
                    </h2>
                    
                    <p className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                        Setting the standard as the <span className="text-brand">best real estate company in Patna Bihar.</span>
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                        At Downtown Realtyj Private Limited, we don't just develop properties; we build communities. We understand that finding the perfect plot or home is a monumental decision. That is why we have dedicated ourselves to bringing transparency, modern design, and world-class amenities to the <strong className="font-semibold text-gray-800">Bihar real estate</strong> landscape.
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                        When evaluating <strong className="font-semibold text-gray-800">real estate companies in Patna</strong>, investors and families look for trust and tangible results. With landmark township and apartment projects, we deliver on our promise of exceptional living spaces. Our focus is on strategic locations, sustainable development, and securing your financial future.
                    </p>

                    <div className="pt-4">
                        <a 
                            href="/projects" 
                            className="inline-block bg-brand text-black font-semibold py-3 px-8 rounded-md shadow-md hover:bg-brand/90 transition-colors duration-300"
                        >
                            Explore Our Projects
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative h-100px lg:h-125 w-full rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src="/project_image.webp"
                        alt="Downtown Realtyj is one of the best real estate company in Patna Bihar developing modern townships and apartments"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;