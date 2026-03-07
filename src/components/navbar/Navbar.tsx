'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "./utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 h-4 z-40 backdrop-blur-md transition-opacity duration-300 
                ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />

            <nav className={`w-full h-16 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-32 fixed top-0 left-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'max-w-6xl sm:mx-auto top-2 sm:top-4 left-2 right-2 rounded-xl bg-black/40 backdrop-blur-md border-b border-white/10 shadow-sm' 
                    : 'max-w-full bg-black/40 top-0 left-0 right-0 backdrop-blur-md border-b border-white/10 shadow-sm'
            }`}>
                <div className="inline-flex items-center gap-2">
                    <Image src="/logo.png" width={40} height={40} alt="Downtown Realty Logo" />
                    <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
                        Downtown{' '}
                        <span className="text-brand">Realtyj</span>
                    </Link>
                </div>
                <div className="hidden md:inline-flex justify-start items-center">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-white text-sm md:text-base font-medium mx-2 md:mx-4 transition-colors hover:text-brand">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;