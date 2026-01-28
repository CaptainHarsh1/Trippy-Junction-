import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-brand-sand/30 pt-16 pb-8 border-t border-brand-sand/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="relative h-12 w-40">
                            <Image
                                src="/images/logo.png"
                                alt="Trippy Junction Logo"
                                fill
                                className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <p className="text-brand-dark/70 font-body">
                            Eco-friendly travel adventures across India. Discover the hidden gems of Himachal, Uttarakhand, Rajasthan, and beyond with low-impact, sustainable tours.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/share/1KHLwKahb5/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center hover:bg-cta transition-colors shadow-lg shadow-brand-teal/20"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/trippy_junction_?igsh=bWwzc3FhajE4ZXVx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center hover:bg-cta transition-colors shadow-lg shadow-brand-teal/20"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-heading mb-6">Quick Links</h4>
                        <ul className="space-y-4 font-body">
                            <li><Link href="/destinations" className="text-brand-dark/70 hover:text-brand-teal">Destinations</Link></li>
                            <li><Link href="/packages" className="text-brand-dark/70 hover:text-brand-teal">Tour Packages</Link></li>
                            <li><Link href="/gallery" className="text-brand-dark/70 hover:text-brand-teal">Photo Gallery</Link></li>
                            <li><Link href="/about" className="text-brand-dark/70 hover:text-brand-teal">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-xl font-heading mb-6">Contact Us</h4>
                        <ul className="space-y-4 font-body text-brand-dark/70 text-sm">
                            <li className="flex items-start space-x-3">
                                <span className="text-brand-teal mt-1">📍</span>
                                <div>
                                    <p className="font-bold mb-1">Head Office</p>
                                    <p>Jawaharlal Nehru Marg, Opposite Stadium, Raj Ghat, New Delhi – 110002</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-brand-teal">📞</span>
                                <a href="tel:+918448950928" className="hover:text-brand-teal">+91 84489 50928</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-brand-teal">✉️</span>
                                <a href="mailto:travel@trippyjunction.com" className="hover:text-brand-teal">travel@trippyjunction.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xl font-heading mb-6">Newsletter</h4>
                        <p className="text-sm font-body text-brand-dark/70 mb-4">Get the latest travel tips and package updates.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 px-4 py-2 rounded-l-full bg-white border border-brand-sand/50 focus:outline-none focus:border-brand-teal text-sm"
                            />
                            <button className="px-6 py-2 rounded-r-full bg-brand-teal text-white text-sm font-heading hover:bg-cta">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-brand-dark/10 pt-8 flex flex-col md:row items-center justify-between text-xs text-brand-dark/50 font-body">
                    <p>© 2026 Trippy Junction. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-brand-teal">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-brand-teal">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
