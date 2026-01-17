"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const QuickSearch = () => {
    const [destination, setDestination] = useState("");
    const [month, setMonth] = useState("");

    return (
        <div className="container mx-auto px-4 md:px-8 -mt-20 relative z-40">
            <div className="glass-card rounded-[2rem] md:rounded-full p-2 shadow-2xl flex flex-col md:flex-row items-center gap-2 border border-white/40 max-w-5xl mx-auto backdrop-blur-xl">

                {/* Destination */}
                <div className="flex-1 w-full flex items-center px-8 py-4 md:py-3 hover:bg-white/40 rounded-full transition-colors group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 group-hover:bg-brand-teal group-hover:text-white transition-all">
                        <span className="text-lg">📍</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] uppercase font-bold text-brand-dark/40 tracking-widest mb-0.5 whitespace-nowrap">Location</p>
                        <input
                            type="text"
                            placeholder="Where next?"
                            className="w-full bg-transparent border-none focus:outline-none text-brand-dark font-heading font-bold placeholder:text-brand-dark/30 text-sm"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                </div>

                <div className="hidden md:block w-px h-10 bg-brand-dark/10" />

                {/* Month */}
                <div className="flex-1 w-full flex items-center px-8 py-4 md:py-3 hover:bg-white/40 rounded-full transition-colors group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 group-hover:bg-brand-teal group-hover:text-white transition-all">
                        <span className="text-lg">📅</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] uppercase font-bold text-brand-dark/40 tracking-widest mb-0.5 whitespace-nowrap">When</p>
                        <select
                            className="w-full bg-transparent border-none focus:outline-none text-brand-dark font-heading font-bold text-sm"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                        >
                            <option value="">Select Month</option>
                            <option value="mar">Mar / Apr</option>
                            <option value="may">May / Jun</option>
                            <option value="sep">Sep / Oct</option>
                        </select>
                    </div>
                </div>

                <div className="hidden md:block w-px h-10 bg-brand-dark/10" />

                {/* Travelers */}
                <div className="flex-1 w-full flex items-center px-8 py-4 md:py-3 hover:bg-white/40 rounded-full transition-colors group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 group-hover:bg-brand-teal group-hover:text-white transition-all">
                        <span className="text-lg">👥</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] uppercase font-bold text-brand-dark/40 tracking-widest mb-0.5 whitespace-nowrap">Guests</p>
                        <select className="w-full bg-transparent border-none focus:outline-none text-brand-dark font-heading font-bold text-sm">
                            <option>1-2 Adults</option>
                            <option>Small Group</option>
                            <option>Family</option>
                        </select>
                    </div>
                </div>

                {/* Search CTA */}
                <div className="p-1 w-full md:w-auto">
                    <button className="w-full md:w-auto bg-brand-teal hover:bg-cta text-white px-10 py-5 md:py-4 rounded-full font-heading font-black shadow-lg shadow-brand-teal/30 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95">
                        Search <span>→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickSearch;
