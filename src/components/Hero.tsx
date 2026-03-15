import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Hero = () => {
    return (
        <div className="w-full min-h-dvh relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 -z-10 bg-black">
                <Image
                    src="/Hero_Banner.webp"
                    alt="Hero Banner Image"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            
            <div className="relative w-full flex-1 flex flex-col items-center justify-center z-10 px-4 sm:px-6 md:px-12 py-20">
                <h1 className="max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight drop-shadow-md">
                    Redefining the Skyline:<br/>
                    <span className="text-gold">Premier Luxury Living & Land Portfolio</span>
                </h1>
                
                <p className="max-w-4xl text-gray-200 text-center mt-6 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-sm">
                    Where architectural excellence meets strategic growth, we bring a new standard of urban sophistication to the heart of Patna. 
                    Discover a handpicked collection of future-ready infrastructure, ranging from elite luxury apartments to high-growth land acquisitions, meticulously designed for those who refuse to settle for the ordinary.
                    Experience the Downtown difference in every square foot as we redefine premium residential spaces and secure property investments across the city.
                </p>

                <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex justify-center">
                    <ChevronDown strokeWidth={2} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-brand animate-bounce" />
                </div>
            </div>
        </div>
    );
};

export default Hero;