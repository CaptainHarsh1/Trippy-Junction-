"use client";

const BrandBar = () => {
    const brands = [
        "Himalayan Explorers",
        "Eco-Travel India",
        "Peak Adventure",
        "Mountain Trails",
        "Safe Journey",
    ];

    return (
        <div className="bg-brand-bg py-12 border-b border-brand-sand/30 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <p className="text-center text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-brand-dark/30 mb-8">
                    Trusted by over 500+ Local Partners
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
                    {brands.map((brand, i) => (
                        <span key={i} className="text-xl md:text-2xl font-heading font-black tracking-tighter hover:text-brand-teal transition-colors cursor-default">
                            {brand.toUpperCase()}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandBar;
