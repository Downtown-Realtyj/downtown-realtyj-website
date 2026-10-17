import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

import MapBox from '../MapBox';
import { company } from '../../data/companyData';
import { footerLinks, quickLinks } from './constant';

const headingClass = "text-brand font-bold uppercase tracking-wider text-sm md:text-base mb-6";
const bodyText = "text-gold/80 text-sm md:text-base";

const Footer = () => {
    return (
        <footer className="bg-midnight border-t border-brand text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image src="/logo.png" width={45} height={45} alt="" />
                            <span className="text-2xl md:text-3xl font-bold">
                                Downtown <span className="text-brand">Realtyj</span>
                            </span>
                        </div>
                        <p className={`${bodyText} leading-relaxed`}>
                            Your goto destination for premier residential and commercial
                            projects in Patna, with a focus on future-ready infrastructure.
                        </p>

                        <div className="space-y-2">
                            <a
                                href={company?.rera?.portalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-sm text-brand font-semibold hover:text-gold transition-colors"
                            >
                                RERA: {company?.rera?.agentNumber}
                                <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                        </div>

                        {/* Social */}
                        <div>
                            <h2 className="text-brand text-base font-semibold mb-4">Follow Us On:</h2>
                            <ul className="flex gap-4">
                                {footerLinks.map((obj) => (
                                    <li key={obj.title}>
                                        <a
                                            href={obj.link}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            aria-label={`${obj.label} (opens in a new tab)`}
                                            className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all duration-300"
                                        >
                                            <obj.icon className="w-4 h-4" aria-hidden="true" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <nav aria-label="Footer">
                        <h2 className={headingClass}>Quick Links</h2>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className={`${bodyText} hover:text-gold transition-colors`}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h2 className={headingClass}>Contact Us</h2>
                        <ul className="w-full space-y-4">
                            <li className={`flex items-center gap-2 ${bodyText}`}>
                                <MapPin className="w-5 h-5 text-brand shrink-0" aria-hidden="true" />
                                <address className="not-italic">{company?.address}</address>
                            </li>
                            <li className={`flex items-center gap-2 ${bodyText}`}>
                                <Phone className="w-5 h-5 text-brand shrink-0" aria-hidden="true" />
                                <span>
                                    {company?.phones.map((p, i) => (
                                        <span key={p?.tel}>
                                            {i > 0 && ", "}
                                            <a href={`tel:${p?.tel}`} className="hover:text-gold transition-colors text-nowrap">{p?.display}</a>
                                        </span>
                                    ))}
                                </span>
                            </li>
                            <li className={`flex items-center gap-2 ${bodyText}`}>
                                <Mail className="w-5 h-5 text-brand shrink-0" aria-hidden="true" />
                                <a href={`mailto:${company?.email}`} className="hover:text-gold transition-colors break-all">{company?.email}</a>
                            </li>
                            <li className={`flex items-center gap-2 ${bodyText}`}>
                                <Calendar className="w-5 h-5 text-brand shrink-0" aria-hidden="true" />
                                <span>Office hours: {company?.officeHours}</span>
                            </li>
                        </ul>
                    </div>

                    <MapBox />
                </div>

                <div className="pt-8 border-t border-white/10 space-y-4">
                    {/* <p className="text-gold/60 text-xs leading-relaxed">
                        {company?.name} is a RERA registered real estate agent and markets the projects listed on this site on
                        behalf of their developers. Project details, prices and availability are supplied by the developers and
                        may change. Please verify each project&apos;s RERA registration before booking.
                    </p> */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center text-center">
                        <p className="text-gold/60 text-xs md:text-sm">
                            © {new Date().getFullYear()} {company?.legalName}. All rights reserved.
                        </p>
                        <div className="text-xs md:text-sm">
                            <Link href="/privacy-policy" className="text-gold/60 hover:text-gold transition-colors mx-2">
                                Privacy Policy
                            </Link>
                            <Link href="/sitemap.xml" className="text-gold/60 hover:text-gold transition-colors mx-2">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;