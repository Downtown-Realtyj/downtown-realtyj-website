'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from 'lucide-react';

import { navLinks } from "./utils";
import { company } from "../../data/companyData";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        if (!isMobileMenuOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMobileMenuOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isMobileMenuOpen]);

    const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

    const homePageNavColor = pathname === '/' ? 'bg-transparent' : 'bg-black/40 backdrop-blur-md border-b border-white/10 shadow-sm';

    return (
        <>
            <div
                aria-hidden="true"
                className={`fixed top-0 left-0 right-0 h-4 z-40 backdrop-blur-md transition-opacity duration-300
                ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />

            <nav
                aria-label="Main"
                className={`w-full h-16 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-32 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled || isMobileMenuOpen
                        ? 'md:max-w-6xl md:mx-auto md:top-4 md:left-2 md:right-2 md:rounded-xl bg-black/70 backdrop-blur-md border-b border-white/10 shadow-sm'
                        : homePageNavColor
                }`}
            >
                {/* Logo and Brand */}
                <Link href="/" className="inline-flex items-center gap-1 sm:gap-2 shrink-0">
                    <Image src="/logo.png" width={45} height={45} alt="" draggable="false" />
                    <span className="text-base sm:text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">
                        Downtown <span className="text-brand">Realtyj</span>
                        <span className="sr-only"> – home</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex justify-start items-center gap-2">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                aria-current={isActive(link.href) ? 'page' : undefined}
                                className={`text-base md:text-lg font-medium mx-2 md:mx-4 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                                    isActive(link.href) ? 'text-brand' : 'text-white'
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    className="md:hidden p-3 -mr-3 text-white hover:text-brand transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-brand"
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="fixed inset-0 top-16 z-40 bg-midnight/95 backdrop-blur-md md:hidden overflow-y-auto">
                    <ul className="flex flex-col gap-1 px-4 py-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-current={isActive(link.href) ? 'page' : undefined}
                                    className={`block text-lg font-medium py-3 px-4 rounded-md transition-colors hover:bg-brand/20 ${
                                        isActive(link.href) ? 'text-brand bg-brand/10' : 'text-gold'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4">
                            <a
                                href={`tel:${company?.phones?.[0]?.tel}`}
                                className="flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-midnight"
                            >
                                <Phone className="h-5 w-5" aria-hidden="true" />
                                Call {company?.phones?.[0]?.display}
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;