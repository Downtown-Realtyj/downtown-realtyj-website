import Link from "next/link";
import Image from "next/image";

import { navLinks } from "./utils";

const Navbar = () => {
    return (
        <nav className="w-full h-16 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-32 bg-transparent fixed top-0 left-0 z-50">
            <div className="inline-flex items-center gap-2">
                <Image src="/logo.png" width={40} height={40} alt="Downtown Realty Logo" />
                <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
                    Downtown{' '}
                    <span className="text-brand">Realtyj</span>
                </Link>
            </div>
            <div className="hidden md:inline-flex justify-start items-center">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-white text-sm md:text-base font-medium mx-2 md:mx-4">
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;