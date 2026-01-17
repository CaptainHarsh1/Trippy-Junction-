import { destinations } from "@/data/destinations";
import BookingButton from "@/components/booking/BookingButton";
import Link from "next/link";

const PackagesPage = () => {
    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-5xl md:text-6xl font-heading mb-6">Our Tour <span className="text-brand-teal">Packages</span></h1>
                    <p className="text-xl font-body text-brand-dark/70">
                        Exclusive itineraries designed for explorers who seek more than just a destination.
                        All our packages include transport from major pickup points.
                    </p>
                </div>

                <div className="space-y-12">
                    {destinations.map((dest) => (
                        <div
                            key={dest.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-sand/50 flex flex-col md:flex-row group min-h-[400px]"
                        >
                            {/* Image */}
                            <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-6 left-6 flex space-x-2">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-heading font-bold text-brand-dark uppercase tracking-wider shadow-sm">
                                        {dest.difficulty}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-[10px] font-heading font-bold text-brand-teal uppercase tracking-widest mb-1">{dest.state}</p>
                                            <h3 className="text-3xl font-heading text-brand-dark leading-tight">{dest.name} Adventure</h3>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-3xl font-heading font-black text-brand-dark">{dest.price}</p>
                                            <p className="text-[10px] text-brand-dark/40 uppercase font-bold tracking-tighter">Per Person</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-6 text-sm text-brand-dark/70 font-body mb-6 pb-6 border-b border-brand-sand/30">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-brand-teal">🕒</span>
                                            <span>{dest.duration}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-brand-teal">📍</span>
                                            <span>{dest.state}, India</span>
                                        </div>
                                    </div>

                                    {/* Highlights & Inclusions - Filling the space */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                        <div>
                                            <h4 className="text-[10px] uppercase font-heading font-bold text-brand-dark/40 tracking-wider mb-3">Trip Highlights</h4>
                                            <ul className="space-y-2">
                                                {dest.highlights?.map((h, i) => (
                                                    <li key={i} className="flex items-center text-sm font-body text-brand-dark/80">
                                                        <span className="w-1.5 h-1.5 bg-brand-teal rounded-full mr-2 shrink-0" />
                                                        {h}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] uppercase font-heading font-bold text-brand-dark/40 tracking-wider mb-3">What's Included</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {dest.inclusions?.map((inc, i) => (
                                                    <span key={i} className="px-2.5 py-1 bg-brand-sand/30 rounded-md text-[11px] font-body text-brand-dark/70">
                                                        {inc}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href={`/destinations/${dest.slug}`} className="flex-1">
                                        <button className="w-full py-4 rounded-xl border-2 border-brand-teal text-brand-teal font-heading font-bold hover:bg-brand-teal hover:text-white transition-all text-sm uppercase tracking-wide">
                                            View Itinerary
                                        </button>
                                    </Link>
                                    <BookingButton
                                        packageName={dest.name}
                                        className="flex-1"
                                        size="lg"
                                    >
                                        Quick Enquire
                                    </BookingButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PackagesPage;
