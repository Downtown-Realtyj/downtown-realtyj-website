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

                        {/* Social */}
                        <div>
                            <h4 className="text-brand font-bold uppercase tracking-wider text-sm mb-6">
                                Follow Us On
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
                                        <obj.icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
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
                                <span>90318 45014, 90318 45005</span>
                            </li>
                            <li className="flex items-center gap-3 text-sandstone/70 text-sm">
                                <Mail className="w-5 h-5 text-brand shrink-0" />
                                <a href="mailto:info@downtownrealtyj.com" className="hover:text-gold transition-colors">info@downtownrealtyj.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-sandstone/70 text-sm">
                                <Calendar className="w-5 h-5 text-brand shrink-0" />
                                <span>Office Hours: 10 AM - 7 PM<br />Open On Sunday</span>
                            </li>
                        </ul>
                    </div>

                    <div className="relative w-full aspect-video lg:aspect-square rounded-2xl overflow-hidden mb-8 border border-brand group shadow-sm">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8759537331084!2d85.0595149746839!3d25.609037914897872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed572adcdd512d%3A0xff647e3d145eb40e!2sLeeds%20Tower!5e0!3m2!1sen!2sin!4v1772866900749!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border:0, filter: 'grayscale(100%) invert(90%)' }} 
                                allowFullScreen
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
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