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
                <div className="w-full h-screen absolute top-0 left-0 bg-black/45 z-0"></div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center z-10 absolute">
                <h1 className="w-full text-4xl sm:text-6xl md:text-6xl font-bold text-white text-center mt-100">
                    Curating Patna's <br/>
                    <span className="text-gold">Premier Living Spaces...</span>
                </h1>
            </div>
        </div>
    );
};

export default Hero;