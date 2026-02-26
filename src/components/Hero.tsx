import Image from "next/image";

const Hero = () => {
    return (
        <div className="w-full max-h-screen relative">
            <div className="w-full h-full absolute top-0 left-0 -z-10">
                <img
                    src="/Hero_Banner.webp"
                    alt="Hero Banner Image"
                    className="w-full h-screen object-cover"
                />
                <div className="w-full h-screen absolute top-0 left-0 bg-black/60 z-0"></div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center z-10 absolute mt-76">
                <h1 className="max-w-5xl text-4xl sm:text-6xl md:text-6xl font-bold text-white text-center">
                    Curating Patna's <br/>
                    <span className="text-gold">Premier Living Spaces...</span>
                </h1>
                <p className="text-white text-center max-w-3xl px-4 mt-4 text-lg sm:text-xl">
                    Redefining the landscape of urban living. Discover an exclusive portfolio of premium apartments, 
                    strategic land investments,  and future-ready infrastructure  tailored to build your tomorrow, today.
                </p>
                <div className="max-w-3xl mt-4 inline-flex items-center gap-8">
                    <button type="button"
                        className="bg-brand text-black font-semibold px-6 py-3 rounded-md mt-8 hover:bg-brand/90 transition-colors cursor-pointer"
                    >
                        Explore Township
                    </button>
                    <button type="button"
                        className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-md mt-8 hover:bg-white hover:text-black transition-colors cursor-pointer"
                    >
                        Our Expertise
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;