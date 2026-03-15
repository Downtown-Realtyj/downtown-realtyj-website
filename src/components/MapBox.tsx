"use client";

import { useEffect, useRef, useState } from "react";
import { googleMapsLink } from "./footer/constant";

const MapBox = () => {
    const [shouldLoad, setShouldLoad] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px" }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video lg:aspect-square rounded-2xl overflow-hidden mb-8 border border-brand group shadow-sm bg-midnight/50"
        >
        {shouldLoad ? (
            <iframe
                title="Downtown Realtyj Office - Top Real Estate Developer in Patna"
                src={googleMapsLink}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(90%) invert(95%)" }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="animate-in fade-in duration-700"
            />
        ) : (
            <div className="w-full h-full flex items-center justify-center bg-white/5 animate-pulse">
                <p className="text-brand/50 text-xs font-mono uppercase tracking-tighter">Initializing Map...</p>
            </div>
        )}
        </div>
    );
};

export default MapBox;