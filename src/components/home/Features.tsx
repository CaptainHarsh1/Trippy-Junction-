"use client";

const Features = () => {
    const features = [
        {
            icon: "🏔️",
            title: "Expert Local Guides",
            desc: "Native storytellers who know every secret trail and hidden monastery."
        },
        {
            icon: "🌿",
            title: "Eco-Conscious Travel",
            desc: "Minimizing our footprint while maximizing your connection with nature."
        },
        {
            icon: "🏘️",
            title: "Authentic Stays",
            desc: "Handpicked homestays that support local families and mountain cultures."
        },
        {
            icon: "🛡️",
            title: "Safety First",
            desc: "Verified transport and high-quality gear for every adventurous mile."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full -ml-48 -mb-48 blur-3xl" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-xs font-heading font-bold text-brand-teal uppercase tracking-[0.3em] mb-4">
                        The Trippy Difference
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-heading text-brand-dark leading-tight">
                        Why travelers choose <span className="italic font-light">Trippy Junction.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="group animate-fade-in"
                            style={{ animationDelay: `${0.2 * i}s` }}
                        >
                            <div className="w-16 h-16 rounded-3xl bg-brand-bg flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-brand-teal/10 transition-all duration-500">
                                {f.icon}
                            </div>
                            <h4 className="text-xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-teal transition-colors">
                                {f.title}
                            </h4>
                            <p className="font-body text-brand-dark/60 leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
