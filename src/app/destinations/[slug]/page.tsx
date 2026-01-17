import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import Button from "@/components/ui/Button";
import BookingButton from "@/components/booking/BookingButton";

export default async function DestinationDetail({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const dest = destinations.find((d) => d.slug === slug);

    if (!dest) return <div>Destination not found</div>;

    return (
        <div className="bg-brand-bg">
            {/* Hero Header */}
            <section className="relative h-[60vh] w-full">
                <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <p className="text-sm font-heading font-bold uppercase tracking-widest mb-4 animate-fade-in">
                            {dest.state} • {dest.duration}
                        </p>
                        <h1 className="text-6xl md:text-8xl font-heading mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            {dest.name}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Left Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <div className="prose prose-lg max-w-none font-body text-brand-dark/80">
                                <h2 className="text-3xl font-heading text-brand-dark">About the Journey</h2>
                                <p>{dest.description}</p>
                                <p>
                                    Experience the soul of {dest.name} through our carefully curated itineraries.
                                    Whether you're looking for high-octane adventure or a peaceful retreat in nature,
                                    Trippy Junction ensures a seamless and low-impact travel experience.
                                </p>
                            </div>

                            {/* Highlights & Inclusions */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-brand-sand/30">
                                <div>
                                    <h3 className="text-xl font-heading mb-6 flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center mr-3 text-brand-teal text-sm">✨</span>
                                        Trip Highlights
                                    </h3>
                                    <ul className="space-y-3">
                                        {dest.highlights?.map((h, i) => (
                                            <li key={i} className="flex items-start text-brand-dark/70 font-body">
                                                <span className="text-brand-teal mr-3 mt-1 text-[10px]">●</span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading mb-6 flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center mr-3 text-brand-teal text-sm">🎒</span>
                                        What's Included
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {dest.inclusions?.map((inc, i) => (
                                            <span key={i} className="px-4 py-2 bg-brand-sand/20 rounded-xl text-sm font-body text-brand-dark/80 border border-brand-sand/50">
                                                {inc}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Itinerary Placeholder */}
                            <div className="bg-white rounded-3xl p-8 border border-brand-sand/50 shadow-sm">
                                <h3 className="text-2xl font-heading mb-8">Sample Itinerary (3 Nights / 4 Days)</h3>
                                <div className="space-y-6">
                                    {[1, 2, 3, 4].map((day) => (
                                        <div key={day} className="flex gap-6">
                                            <div className="w-12 h-12 rounded-full bg-brand-sand/50 flex items-center justify-center font-heading font-bold text-brand-teal flex-shrink-0">
                                                {day}
                                            </div>
                                            <div>
                                                <h4 className="font-heading font-bold text-lg">Day {day}: Exploration Begins</h4>
                                                <p className="text-brand-dark/60 text-sm font-body">Detailed day-by-day plan including pickups, meals, and major checkpoints.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sticky Booking Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 bg-white rounded-3xl p-8 border border-brand-sand/50 shadow-xl">
                                <div className="mb-8">
                                    <p className="text-brand-dark/40 uppercase text-xs font-bold tracking-widest mb-2">Package Starts At</p>
                                    <p className="text-4xl font-heading font-black text-brand-teal">{dest.price} <span className="text-sm font-body font-normal text-brand-dark/40">/ person</span></p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center py-3 border-b border-brand-sand/30">
                                        <span className="text-brand-dark/60 font-body">Duration</span>
                                        <span className="font-heading font-bold">{dest.duration}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-brand-sand/30">
                                        <span className="text-brand-dark/60 font-body">Difficulty</span>
                                        <span className="font-heading font-bold text-brand-green">{dest.difficulty}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-brand-dark/60 font-body">Next Batch</span>
                                        <span className="font-heading font-bold text-cta">Coming Soon</span>
                                    </div>
                                </div>

                                <BookingButton
                                    packageName={dest.name}
                                    size="lg"
                                    className="w-full mb-4"
                                />

                                <Button variant="outline" size="lg" className="w-full">
                                    Download Itinerary
                                </Button>

                                <p className="text-center text-[10px] text-brand-dark/30 mt-6 uppercase tracking-widest font-bold">
                                    Free Cancellation up to 15 days before trip
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
