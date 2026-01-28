"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import Button from "@/components/ui/Button";

const DestinationsPage = () => {
    const [filter, setFilter] = useState<string>("All");

    const states = ["All", "Himachal", "Uttarakhand", "Rajasthan", "Spiti"];

    const filteredDestinations = filter === "All"
        ? destinations
        : destinations.filter(d => d.state === filter);

    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl mb-16 animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-heading mb-6">Explore <span className="text-brand-teal">India</span></h1>
                    <p className="text-xl font-body text-brand-dark/70">
                        From the high-altitude deserts of Spiti to the royal palaces of Rajasthan and beyond, discover our curated trails across India.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    {states.map((state) => (
                        <button
                            key={state}
                            onClick={() => setFilter(state)}
                            className={`px-8 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${filter === state
                                ? "bg-brand-teal text-white shadow-lg shadow-brand-teal/20"
                                : "bg-white text-brand-dark hover:bg-brand-sand border border-brand-sand/50"
                                }`}
                        >
                            {state}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDestinations.map((dest, idx) => (
                        <div
                            key={dest.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in"
                            style={{ animationDelay: `${0.1 * idx}s` }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-4 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="font-heading font-bold text-lg">{dest.duration}</p>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-heading text-brand-dark">{dest.name}</h3>
                                    <span className="text-brand-teal font-heading font-black">{dest.price}</span>
                                </div>
                                <p className="text-brand-dark/60 font-body mb-8 line-clamp-2">
                                    {dest.description}
                                </p>
                                <div className="flex items-center justify-between border-t border-brand-sand/30 pt-6">
                                    <span className="text-xs font-heading font-bold uppercase tracking-widest text-brand-dark/30">
                                        Difficulty: <span className="text-brand-green">{dest.difficulty}</span>
                                    </span>
                                    <Link href={`/destinations/${dest.slug}`}>
                                        <Button variant="ghost" className="group/btn">
                                            View Package <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DestinationsPage;
