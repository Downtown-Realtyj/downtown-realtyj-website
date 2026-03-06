import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

import { footerLinks, quickLinks } from './constant';

const Footer = () => {
    return (
        <footer
            className="bg-midnight border-t border-brand text-white pt-20 pb-10"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <Image src="/logo.png" width={40} height={40} alt="Downtown Realty Logo" />
                            <span className="font-display text-2xl font-bold">
                                Downtown <span className="text-brand">Realtyj</span>
                            </span>
                        </div>
                        <p className="text-sandstone/70 text-sm leading-relaxed">
                            Curating premier living spaces with a focus on future-ready
                            infrastructure and sustainable development.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-brand font-bold uppercase tracking-wider text-sm mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sandstone/70 hover:text-gold transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-brand font-bold uppercase tracking-wider text-sm mb-6">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sandstone/70 text-sm">
                                <MapPin className="w-5 h-5 text-brand shrink-0" />
                                <span>3rd Floor, Leeds Tower, Rupaspur,<br/>Bailey Road, Patna, Bihar (801503)</span>
                            </li>
                            <li className="flex items-center gap-3 text-sandstone/70 text-sm">
                                <Phone className="w-5 h-5 text-brand shrink-0" />
                                <span>+91 90318 45014, +91 90318 45005</span>
                            </li>
                            <li className="flex items-center gap-3 text-sandstone/70 text-sm">
                                <Mail className="w-5 h-5 text-brand shrink-0" />
                                <a href="mailto:info@downtownrealtyj.com" className="hover:text-gold transition-colors">info@downtownrealtyj.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-sandstone/70 text-sm">
                                <Calendar className="w-5 h-5 text-brand shrink-0" />
                                <span>10 AM - 7 PM<br />Open On Sunday</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-brand font-bold uppercase tracking-wider text-sm mb-6">
                            Follow Us
                        </h4>
                        <div className="flex gap-4">
                            {footerLinks.map((obj, i) => (
                                <a
                                    key={obj.title}
                                    href={obj.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all duration-300"
                                >
                                    <obj.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-sandstone/50 text-xs">
                        © {new Date().getFullYear()} Downtown Realtyj Private Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;