'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Headset } from 'lucide-react';

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

    const phone = company?.phones?.[0];

    // Always a light surface: the landing hero and inner pages no longer sit under a dark, transparent bar.
    const barSurface =
        isScrolled || isMobileMenuOpen
            ? 'md:max-w-6xl md:mx-auto md:top-4 md:left-2 md:right-2 md:rounded-xl bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-100';

    return (
        <>
            <div
                aria-hidden="true"
                className={`fixed top-0 left-0 right-0 h-4 z-40 backdrop-blur-md transition-opacity duration-300
                ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />

            <nav
                aria-label="Main"
                className={`w-full h-16 flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-12 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${barSurface}`}
            >
                {/* Logo and Brand */}
                <Link href="/" className="inline-flex items-center gap-2 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">
                    <Image src="/logo.png" width={40} height={40} alt="" draggable="false" />
                    <span className="flex flex-col leading-none">
                        <span className="font-display text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-charcoal whitespace-nowrap">
                            Downtown <span className="text-champagne-deep">Realtyj</span>
                            <span className="sr-only"> – home</span>
                        </span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                aria-current={isActive(link.href) ? 'page' : undefined}
                                className={`py-1 text-xs font-bold uppercase tracking-wide border-b-2 transition-colors hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne ${
                                    isActive(link.href)
                                        ? 'text-charcoal border-champagne'
                                        : 'text-stone-muted border-transparent'
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2 shrink-0">
                    {/* Desktop CTA — /#enquiry works from every page */}
                    <Link
                        href="/#enquiry"
                        className="hidden lg:inline-flex items-center justify-center gap-2 rounded-lg bg-champagne px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal shadow-[0_4px_14px_rgba(184,149,71,0.25)] transition-all hover:bg-champagne-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
                    >
                        <Headset className="h-4 w-4" aria-hidden="true" />
                        Talk to an Advisor
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="md:hidden p-3 -mr-3 text-charcoal hover:text-champagne-deep transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-champagne"
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="fixed inset-0 top-16 z-40 bg-white/98 backdrop-blur-md md:hidden overflow-y-auto">
                    <ul className="flex flex-col gap-1 px-4 py-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-current={isActive(link.href) ? 'page' : undefined}
                                    className={`block text-lg font-medium py-3 px-4 rounded-md transition-colors hover:bg-gray-100 ${
                                        isActive(link.href)
                                            ? 'text-charcoal bg-amber-50 border-l-2 border-champagne'
                                            : 'text-stone-muted'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4 flex flex-col gap-3">
                            <Link
                                href="/#enquiry"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 rounded-lg bg-champagne px-6 py-3.5 text-base font-semibold text-charcoal"
                            >
                                <Headset className="h-5 w-5" aria-hidden="true" />
                                Talk to an Advisor
                            </Link>
                            {phone?.tel && (
                                <a
                                    href={`tel:${phone.tel}`}
                                    className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3.5 text-base font-semibold text-charcoal"
                                >
                                    <Phone className="h-5 w-5 text-champagne-deep" aria-hidden="true" />
                                    Call {phone.display}
                                </a>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;