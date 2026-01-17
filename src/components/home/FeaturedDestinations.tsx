"use client";

import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import Button from "@/components/ui/Button";

const FeaturedDestinations = () => {
    const featured = destinations.filter(d => d.featured);

    return (
        <section className="py-24 bg-brand-bg">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading mb-4">Featured <span className="text-brand-teal">Escapes</span></h2>
                        <p className="text-brand-dark/60 font-body max-w-xl text-lg">
                            Handpicked destinations that offer the perfect blend of adventure and tranquility.
                        </p>
                    </div>
                    <Link href="/destinations" className="hidden md:block">
                        <Button variant="outline">View All Destinations</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((dest, idx) => (
                        <div
                            key={dest.id}
                            className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:-translate-y-2 transition-all duration-500 animate-fade-in"
                            style={{ animationDelay: `${0.1 * idx}s` }}
                        >
                            {/* Image Container */}
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-heading font-bold text-brand-teal uppercase tracking-wider">
                                    {dest.state}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-heading text-brand-dark">{dest.name}</h3>
                                    <div className="text-right">
                                        <span className="block text-brand-teal font-heading font-bold">{dest.price}</span>
                                        <span className="text-[10px] text-brand-dark/40 uppercase">Starting Price</span>
                                    </div>
                                </div>

                                <p className="text-brand-dark/70 font-body text-sm mb-6 line-clamp-2">
                                    {dest.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-brand-sand/30">
                                    <div className="flex space-x-4 text-xs font-body text-brand-dark/50">
                                        <span className="flex items-center">🕒 {dest.duration}</span>
                                        <span className="flex items-center">⛰️ {dest.difficulty}</span>
                                    </div>
                                    <Link href={`/destinations/${dest.slug}`}>
                                        <span className="text-brand-teal font-heading font-bold text-sm hover:underline">
                                            Explore →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/destinations">
                        <Button variant="outline" className="w-full">View All Destinations</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedDestinations;
