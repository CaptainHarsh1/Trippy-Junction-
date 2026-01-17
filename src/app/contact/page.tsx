import Button from "@/components/ui/Button";

const ContactPage = () => {
    const pickups = [
        "Delhi (Majnu Ka Tilla / ISBT)",
        "Panipat Toll (Highway)",
        "Kurukshetra Highway",
        "Ambala Railway Station (Outer)",
        "Chandigarh (Suhana Gurudwara)"
    ];

    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
                    <div className="animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-heading mb-8">Get in <span className="text-brand-teal">Touch.</span></h1>
                        <p className="text-xl font-body text-brand-dark/70 mb-12">
                            Have a custom itinerary in mind? Or want to join our next batch? Drop us a message or find us at our pickup points.
                        </p>

                        <div className="space-y-8 mb-16">
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl">📞</span>
                                <div>
                                    <p className="font-heading font-bold text-brand-dark">+91 84489 50928</p>
                                    <p className="text-sm text-brand-dark/40 uppercase font-bold tracking-widest">Phone / WhatsApp</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl">✉️</span>
                                <div>
                                    <p className="font-heading font-bold text-brand-dark">trippyjunctiontravel@gmail.com</p>
                                    <p className="text-sm text-brand-dark/40 uppercase font-bold tracking-widest">Official Email</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Follow */}
                        <div className="mb-16">
                            <p className="text-xs font-heading font-bold text-brand-dark/40 uppercase tracking-[0.2em] mb-6">Follow Our Journey</p>
                            <div className="flex space-x-5">
                                <a
                                    href="https://www.facebook.com/share/1KHLwKahb5/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-2xl bg-white border border-brand-sand/50 text-brand-dark flex items-center gap-3 hover:border-brand-teal hover:text-brand-teal transition-all group shadow-sm"
                                >
                                    <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                    </svg>
                                    <span className="font-heading font-bold text-sm">Facebook</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/trippy_junction_?igsh=bWwzc3FhajE4ZXVx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-2xl bg-white border border-brand-sand/50 text-brand-dark flex items-center gap-3 hover:border-brand-teal hover:text-brand-teal transition-all group shadow-sm"
                                >
                                    <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    <span className="font-heading font-bold text-sm">Instagram</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-brand-sand/50 shadow-sm mb-8">
                            <h3 className="text-2xl font-heading mb-6">Standard Pickup Points</h3>
                            <ul className="space-y-4">
                                {pickups.map((point, idx) => (
                                    <li key={idx} className="flex items-center space-x-3 font-body text-brand-dark/70">
                                        <span className="text-brand-teal">📍</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Payment QR Code */}
                        <div className="bg-brand-dark text-white rounded-3xl p-8 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-brand-teal/20 transition-colors" />
                            <h3 className="text-2xl font-heading mb-2">Quick Payment</h3>
                            <p className="text-white/60 text-sm mb-8 font-body">Scan the QR code below for instant bookings and balance payments via any UPI app.</p>

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="bg-white p-3 rounded-2xl w-48 h-48 flex-shrink-0">
                                    <img
                                        src="/images/qr_payment_v2.png"
                                        alt="Payment QR"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">📱</div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Supported Apps</p>
                                            <p className="font-heading font-medium">PhonePe, GPay, Paytm, BHIM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">🛡️</div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Security</p>
                                            <p className="font-heading font-medium">Secure UPI Interface</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-brand-sand/30 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <h2 className="text-3xl font-heading mb-8 text-brand-dark">Send an Inquiry</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-heading font-bold text-brand-dark/40 mb-2 uppercase tracking-widest">Full Name</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-sand/50" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-xs font-heading font-bold text-brand-dark/40 mb-2 uppercase tracking-widest">Phone Number</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-sand/50" placeholder="+91" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-heading font-bold text-brand-dark/40 mb-2 uppercase tracking-widest">Desired Destination</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-sand/50">
                                    <option>Manali</option>
                                    <option>Chopta</option>
                                    <option>Spiti Valley</option>
                                    <option>Custom / Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-heading font-bold text-brand-dark/40 mb-2 uppercase tracking-widest">Message</label>
                                <textarea className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-brand-sand/50 h-32" placeholder="Tell us about your travel plans..."></textarea>
                            </div>
                            <Button variant="primary" size="lg" className="w-full">
                                Submit Inquiry
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
