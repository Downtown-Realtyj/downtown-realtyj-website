'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

import { navLinks } from "./utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const pathname = usePathname();
    console.log(pathname);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const homePageNavColor = pathname === '/' ? 'bg-transparent' : 'bg-black/40 backdrop-blur-md border-b border-white/10 shadow-sm';

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 h-4 z-40 backdrop-blur-md transition-opacity duration-300 
                ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />

            <nav className={`w-full h-16 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-32 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'md:max-w-6xl md:mx-auto md:top-4 md:left-2 md:right-2 md:rounded-xl bg-black/40 backdrop-blur-md border-b border-white/10 shadow-sm' 
                    : homePageNavColor
            }`}>
                {/* Logo and Brand */}
                <div className="inline-flex items-center gap-1 sm:gap-2 shrink-0">
                    <Image src="/logo.png" width={32} height={32} alt="Downtown Realty Logo" className="sm:w-10 sm:h-10" draggable="false"/>
                    <Link href="/" className="text-base sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">
                        Downtown{' '}
                        <span className="text-brand">Realtyj</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:inline-flex justify-start items-center gap-2">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            className="text-white text-sm md:text-base font-medium mx-2 md:mx-4 transition-colors hover:text-brand"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 text-white hover:text-brand transition-colors cursor-pointer"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="max-h-max fixed inset-0 top-16 z-40 bg-gold/90 backdrop-blur-md md:hidden">
                    <div className="flex flex-col space-y-4 px-4 py-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className="text-black text-base font-medium py-2 px-4 rounded-md hover:bg-brand/20 hover:text-brand transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;