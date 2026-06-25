import Image from 'next/image';
import { Target, Eye } from "lucide-react";

import { core_tower_image, vision_placeholder_image } from '../../utils/constants';

const AboutSection = () => {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-20" aria-labelledby="about-heading">
            {/* Top Section: Our Story Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                    <div className="space-y-2">
                        <h2 
                            id="about-heading" 
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-normal text-black leading-tight"
                        >
                            Our Story
                        </h2>
                        <div className='w-20 h-1 bg-brand' />
                    </div>
                    
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        Owning property is more than just a transaction, it brings an enduring sense of belonging and serves as the bedrock for your family’s future. As a premier real estate firm in Patna, Downtown Realtyj Pvt Ltd believes that turning your dreams of property ownership into absolute reality is our greatest achievement.
                    </p>
                    
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        Operating from our corporate headquarters on Bailey Road, Patna, we have established ourselves as one of the most reliable and a trusted real estate company across Bihar, with a growing footprint across Delhi NCR. We bridge the gap between traditional asset acquisition and modern development standards, ensuring that every transaction is seamless, compliant, and legally secure.
                    </p>

                    <div className="pt-2">
                        <a 
                            href="/projects" 
                            className="inline-block text-center bg-brand text-black font-semibold py-3 px-8 rounded-md shadow-md hover:bg-brand/90 transition-colors duration-300 w-full sm:w-auto"
                        >
                            Explore Our Projects
                        </a>
                    </div>
                </div>

                {/* Main Image Container */}
                <div className="relative h-64 sm:h-96 lg:h-125 w-full rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2">
                    <Image
                        src={core_tower_image}
                        alt="Downtown Realtyj's Core Tower Project Image"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 sm:mt-24 flex flex-col gap-10">
                <div className="relative h-48 sm:h-72 lg:h-100 w-full rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src={vision_placeholder_image}
                        alt="Our Vision"
                        fill
                        className="object-cover opacity-90"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Section Header */}
                <div className="w-full flex flex-col items-center justify-center text-center px-4">
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-normal leading-tight max-w-2xl'>
                        Our Commitment &amp; Future Outlook
                    </h2>
                    <div className='mt-3 w-24 h-1 bg-brand' />
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div className="relative w-full p-6 sm:p-8 bg-gray-50 border border-gray-100 rounded-xl shadow-sm space-y-4 overflow-hidden group">
                        <div className="absolute -top-6 -right-6 text-brand opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500 hidden sm:block">
                            <Target size={140} strokeWidth={1} />
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand">Our Mission</h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            At Downtown Realtyj, we believe in building more than just structures, <span className='font-semibold'>we build security, lifestyle fulfillment, and long-term prosperity into every square foot we develop.</span> As an emerging name in the Bihar's real estate landscape, our mission is clear; to engineer spaces that do not just meet specifications but far exceed client expectations.
                        </p>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            By prioritizing flawless construction, strict legal adherence, and meticulous community planning, we aim to deliver absolute peace of mind and smiles to the faces of everyone who invests in our properties. <span className='font-semibold'>Whether we're curating premier commercial projects, residential plots, or premium flats </span> across the growing Patna and Delhi NCR, our goal remains unwavering—to infuse every development with a deep sense of purpose, turning every single piece of land into a place where families can thrive for generations.
                        </p>
                    </div>

                    <div className="relative w-full p-6 sm:p-8 bg-gray-50 border border-gray-100 rounded-xl shadow-sm space-y-4 overflow-hidden group">
                        <div className="absolute -top-8 -right-6 text-brand opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500 hidden sm:block">
                            <Eye size={160} strokeWidth={1} />
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand">Our Vision</h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            We see our role as much larger than just drawing boundary lines or casting concrete walls; we are here to craft lasting stories and <span className='font-semibold'>establish an immovable foundation of regional trust and corporate integrity.</span> Our vision is to elevate the urban housing standards across Bihar, scaling new heights to turn the foundational dreams of our clients, local landowners, and stakeholders into reality.
                        </p>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            We have emerged as one of a leading and authentic real estate developer in Patna by prioritizing construction excellence, absolute transparency in clear-title land parcels, and timely delivery. <span className='font-semibold'>Whether you are looking for a commercial asset or a residential plot to build your legacy, Downtown Realtyj is committed to long-term value creation.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;