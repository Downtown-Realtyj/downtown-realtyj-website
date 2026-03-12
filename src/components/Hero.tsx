import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Hero = () => {
    return (
        <div className="w-full h-screen relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/Hero_Banner.webp"
                    alt="Hero Banner Image"
                    fill
                    priority
                    quality={65} 
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="relative w-full flex-1 flex flex-col items-center justify-center z-10 px-3 xs:px-4 sm:px-6 md:px-8">
                <h1 className="max-w-5xl text-lg xs:text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
                    Redefining the Skyline:<br/>
                    <span className="text-gold">Premier Luxury Living & Land Portfolio</span>
                </h1>
                <p className="max-w-4xl text-white text-center px-1 xs:px-2 sm:px-4 mt-4 xs:mt-5 sm:mt-6 text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
                    Where architectural excellence meets strategic growth, we bring a new standard of urban sophistication to the heart of Patna. 
                    Discover a handpicked collection of future-ready infrastructure, ranging from elite luxury apartments to high-growth land acquisitions, meticulously designed for those who refuse to settle for the ordinary.
                    Experience the Downtown difference in every square foot as we redefine premium residential spaces and secure property investments across the city.
                </p>

                <div className="absolute bottom-8 xs:bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 flex justify-center">
                    <ChevronDown strokeWidth={2} className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-brand animate-bounce-y" />
                </div>
            </div>
        </div>
    );
};

export default Hero;