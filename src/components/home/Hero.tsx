"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const Hero = () => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center bg-brand-dark">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-100 ease-out"
                style={{
                    backgroundImage: `url('/images/hero/ultra_premium_himalayan_hero_final.png')`,
                    transform: `translateY(${offsetY * 0.3}px) scale(1.1)`,
                }}
            >
                <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 to-transparent md:from-brand-dark/40" />
            </div>

            <div className="container mx-auto px-4 md:px-8 z-10 pb-20">
                <div className="max-w-3xl animate-fade-in text-white">
                    {/* Social Proof Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-brand-teal bg-brand-teal/20" />
                            ))}
                        </div>
                        <span className="text-xs font-heading font-bold uppercase tracking-widest text-white/80">
                            Exploring with 5,000+ souls
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-heading mb-8 leading-[0.9] tracking-tight">
                        Where Peaks Whisper <br />
                        <span className="text-brand-teal italic font-light">& Deserts Bloom.</span>
                    </h1>

                    <p className="text-lg md:text-2xl font-body mb-10 text-white/80 leading-relaxed max-w-2xl">
                        Uncover the raw beauty of the Himalayas and the timeless majesty of Rajasthan. Your extraordinary adventure begins here.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Button variant="primary" size="lg" className="w-full sm:w-auto px-12 py-6 text-lg">
                            Explore Packages <span>→</span>
                        </Button>
                        <div className="flex items-center gap-4 px-6">
                            <div className="flex text-brand-teal text-xl">★★★★★</div>
                            <span className="text-sm font-heading font-bold text-white/60">4.9/5 TrustScore</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Down Arrow */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
                <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
