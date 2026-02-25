import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full h-16 flex items-center justify-between px-32 bg-transparent fixed top-0 left-0 z-50">
            <div className="">
                <Link href="/" className="text-2xl font-bold text-white">
                    Downtown{' '}
                    <span className="text-brand">Realty</span>
                </Link>
            </div>
            <div className="inline-flex justify-start items-center">
                <Link href="/" className="text-white text-base font-medium mx-4">
                    Home
                </Link>
                <Link href="/services" className="text-white text-base font-medium mx-4">
                    Services
                </Link>
                <Link href="/about" className="text-white text-base font-medium mx-4">
                    About
                </Link>
                <Link href="/blogs" className="text-white text-base font-medium mx-4">
                    Blogs
                </Link>
                <Link href="/contact" className="text-white text-base font-medium mx-4">
                    Contact Us
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;