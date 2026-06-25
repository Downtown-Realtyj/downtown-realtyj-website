import Image from "next/image";
import { ChevronDown } from "lucide-react";
import CldImage from "./CldImage";

const Hero = () => {
    return (
        <div className="w-full min-h-dvh relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 -z-10 bg-black">
                <CldImage
                    src="project-aerial-closeup_qbu7l3"
                    alt="Core Ultrawdie Tower Image"
                    fill
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            
            <div className="relative w-full flex-1 flex flex-col items-center justify-center z-10 px-4 sm:px-6 md:px-12 py-20">
                <h1 className="max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight drop-shadow-md">
                    Redefining the Skyline, &nbsp;
                    <span className="text-gold">Elite Residential & Commercial Spaces.</span>
                </h1>
                
                <p className="max-w-3xl text-gray-200 text-center mt-6 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-sm">
                    Discover future-ready infrastructure and high-growth land investments across Patna. 
                    From premium township plots to elite residential spaces, Downtown Realtyj delivers 
                    unmatched legal transparency and construction excellence.
                </p>

                <div className="w-full max-w-md mt-10 flex flex-col sm:flex-row items-center justify-center gap-12 px-4">
                    <a
                        href="/projects" 
                        className="w-full sm:w-auto text-center bg-gold hover:bg-gold/80 text-slate-950 font-semibold px-8 py-3.5 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-lg"
                    >
                        Explore Projects
                    </a>
                    <a
                        href="/about" 
                        className="w-full sm:w-auto text-center border-2 border-white hover:border-gold hover:text-gold text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-lg backdrop-blur-sm"
                    >
                        Our Story
                    </a>
                </div>

                <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex justify-center">
                    <ChevronDown strokeWidth={2} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-brand animate-bounce" />
                </div>
            </div>
        </div>
    );
};

export default Hero;