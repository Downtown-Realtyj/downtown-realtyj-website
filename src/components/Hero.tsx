import { ChevronDown } from "lucide-react";

const Hero = () => {
    return (
        <div className="w-full h-screen relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <img
                    src="/Hero_Banner.webp"
                    alt="Hero Banner Image"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative w-full h-full flex flex-col items-center justify-center z-10 px-4 sm:px-6">
                <h1 className="max-w-5xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
                    Curating Patna's <br/>
                    <span className="text-gold">Premier Living Spaces...</span>
                </h1>
                <p className="text-white text-center max-w-3xl px-2 sm:px-4 mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
                    Redefining the landscape of urban living. Discover an exclusive portfolio of premium apartments, 
                    strategic land investments,  and future-ready infrastructure  tailored to build your tomorrow, today.
                </p>
                <div className="max-w-3xl mt-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full md:w-auto">
                    <button type="button"
                        className="w-full md:w-auto bg-brand text-black font-semibold px-6 py-3 rounded-md mt-8 hover:bg-brand/90 transition-colors cursor-pointer"
                    >
                        Explore Township
                    </button>
                    <button type="button"
                        className="w-full md:w-auto bg-black/50 border border-white text-white font-semibold px-6 py-3 rounded-md mt-8 hover:bg-white hover:text-black transition-colors cursor-pointer"
                    >
                        Our Expertise
                    </button>
                </div>
                <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center">
                    <ChevronDown size={32} strokeWidth={2} className="text-brand animate-bounce-y sm:w-10 sm:h-10" />
                </div>
            </div>
        </div>
    );
};

export default Hero;