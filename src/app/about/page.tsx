import Image from 'next/image';
import { Target, Eye } from "lucide-react";

const AboutSection = () => {
    return (
        <section className="bg-white py-24 px-6 lg:px-20" aria-labelledby="about-heading">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <div>
                        <h2 
                            id="about-heading" 
                            className="text-3xl lg:text-4xl font-bold tracking-normal text-black leading-tight"
                        >
                            Our Story
                        </h2>

                        <div className='text-brand w-20 h-2 bg-brand' />
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Owning property is more than just a transaction, it brings an enduring sense of belonging and serves as the bedrock for your family’s future. As a premier real estate firm in Patna, Downtown Realtyj Pvt Ltd believes that turning your dreams of property ownership into absolute reality is our greatest achievement.
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Operating from our corporate headquarters on Bailey Road, Patna, we have established ourselves as one of the most reliable and a trusted real estate company across Bihar, with a growing footprint across Delhi NCR. We bridge the gap between traditional asset acquisition and modern development standards, ensuring that every transaction is seamless, compliant, and legally secure.
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
                <div className="relative h-100 lg:h-125 w-full rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src="/project_image.webp"
                        alt="Downtown Realtyj is one of the best real estate company in Patna Bihar developing modern townships and apartments"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12">
                <div className="w-full mx-auto grid md:grid-row-2 gap-8">                    
                    <div className="relative h-100 lg:h-125 w-full rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src="/vision_placeholder_image.webp"
                            alt="Our Vision"
                            fill
                            className="object-cover opacity-80"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-black/20" />
                    </div>

                    <div className="w-full flex flex-col items-center justify-center">
                        <h2 className='text-3xl lg:text-4xl font-semibold tracking-normal leading-tight'>Our Commitment &amp; Future Outlook</h2>
                        <div className='text-brand w-sm h-2 bg-brand' />
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative w-full p-8 rounded-lg shadow-sm space-y-4 overflow-hidden group">
                            <div className="absolute -top-2 -right-2 text-brand opacity-25 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                                <Target size={180} strokeWidth={1} />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-brand">Our Mission</h3>
                            <p className="text-gray-700">
                                At Downtown Realtyj, we believe in building more than just structures, <span className='font-semibold'> we build security, lifestyle fulfillment, and long-term prosperity into every square foot we develop.</span> As an emerging name in the Bihar's real estate landscape, our mission is clear; to engineer spaces that do not just meet specifications but far exceed client expectations.
                            </p>
                            <p className="text-gray-700">
                                By prioritizing flawless construction, strict legal adherence, and meticulous community planning, we aim to deliver absolute peace of mind and smiles to the faces of everyone who invests in our properties. <span className='font-semibold'>Whether we're curating premier commercial projects, residential plots, or premium flats </span> across the growing Patna and Delhi NCR, our goal remains unwavering- to infuse every development with a deep sense of purpose, turning every single piece of land into a place where families can thrive for generations.
                            </p>
                        </div>
                        <div className="relative w-full p-8 rounded-lg shadow-sm space-y-4 overflow-hidden group">
                            <div className="absolute -top-4 -right-2 text-brand opacity-25 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                                <Eye size={200} strokeWidth={1} />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-brand">Our Vision</h3>
                            <p className="text-gray-700">
                                We see our role as much larger than just drawing boundary lines or casting concrete walls; we are here to craft lasting stories and <span className='font-semibold'>establish an immovable foundation of regional trust and corporate integrity.</span> Our vision is to elevate the urban housing standards across Bihar, scaling new heights to turn the foundational dreams of our clients, local landowners, and stakeholders into reality.
                            </p>
                            <p className="text-gray-700">
                                We have emerged as one of a leading and authentic real estate developer in Patna by prioritizing construction excellence, absolute transparency in clear-title land parcels, and timely delivery. <span className='font-semibold'>Whether you are looking for a commercial asset or a residential plot to build your legacy, Downtown Realtyj is committed to long-term value creation.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;