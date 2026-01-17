import Image from "next/image";

const GalleryPage = () => {
    const images = [
        { src: "/images/hero/desktop.png", alt: "Mountain Valley Sunrise", span: "lg:col-span-2 lg:row-span-2" },
        { src: "/images/gallery/kedarnath_dham__1.jpeg", alt: "Spiritual Kedarnath", span: "" },
        { src: "/images/gallery/badrinath_dham__0.jpeg", alt: "Divine Badrinath", span: "" },
        { src: "/images/gallery/varanasi__0.png", alt: "Ganga Aarti in Varanasi", span: "lg:col-span-2" },
        { src: "/images/gallery/pushkar__0.png", alt: "Desert Sunset near Pushkar", span: "" },
        { src: "/images/gallery/manali__1.jpeg", alt: "Snowy Manali", span: "" },
        { src: "/images/gallery/spiti__1.jpeg", alt: "Rugged Spiti Valley", span: "" },
        { src: "/images/gallery/shimla__0.png", alt: "Heritage Shimla Ridge", span: "" },
        { src: "/images/gallery/srinagar__0.png", alt: "Peaceful Dal Lake Shikara", span: "lg:col-span-2" },
        { src: "/images/gallery/rishikesh__0.png", alt: "Laxman Jhula at Sunset", span: "lg:col-span-2" },
        { src: "/images/gallery/jaipur__0.png", alt: "Vibrant Hawa Mahal Street", span: "" },
        { src: "/images/gallery/leh_ladakh__0.png", alt: "Serene Pangong Lake", span: "" },
        { src: "/images/gallery/chakrata__1.png", alt: "Misty Chakrata Heights", span: "lg:row-span-2" },
        { src: "/images/gallery/zanskar__0.png", alt: "Zanskar River Confluence", span: "" },
        { src: "/images/gallery/kasol_tosh__2.jpeg", alt: "Kasol Valleys", span: "" },
        { src: "/images/gallery/udaipur_rajasthan__0.jpeg", alt: "Royal Udaipur", span: "" },
        { src: "/images/gallery/jaisalmer_rajasthan__2.jpeg", alt: "Golden Jaisalmer Desert", span: "lg:col-span-2" },
        { src: "/images/gallery/auli_joshimath__1.jpeg", alt: "Auli Slopes", span: "" },
        { src: "/images/gallery/jibhi__0.jpeg", alt: "Hidden Gem of Jibhi", span: "" },
        { src: "/images/gallery/mcleodganj_bir_billing__0.jpeg", alt: "Paragliding in Bir Billing", span: "" },
        { src: "/images/lifestyle/trail.png", alt: "Himalayan Trail", span: "lg:col-span-2" },
        { src: "/images/lifestyle/rishikesh_rafting.png", alt: "Adrenaline in Rishikesh", span: "" },
        { src: "/images/lifestyle/leh_bikes.png", alt: "Biking in Ladakh", span: "" },
        { src: "/images/lifestyle/village.png", alt: "Authentic Village Street", span: "" },
        { src: "/images/lifestyle/camp.png", alt: "Tented Camp Night", span: "lg:col-span-2" },
        { src: "/images/lifestyle/stream.png", alt: "Pure Mountain Stream", span: "" },
        { src: "/images/lifestyle/monastery.png", alt: "Peaceful Monastery Flags", span: "" },
        { src: "/images/gallery/udaipur_rajasthan__1.jpeg", alt: "Udaipur City Palace", span: "" },
    ];

    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-heading mb-6">Visual <span className="text-brand-teal">Stories</span></h1>
                    <p className="text-xl font-body text-brand-dark/70 max-w-2xl mx-auto">
                        A glimpse into the breathtaking landscapes and authentic moments we experience on our journeys.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] grid-flow-dense">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`relative overflow-hidden rounded-3xl group shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in ${img.span}`}
                            style={{ animationDelay: `${0.1 * idx}s` }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-white font-heading font-bold text-lg">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-brand-sand/20 rounded-3xl p-12 text-center border border-brand-sand/50 animate-fade-in">
                    <p className="text-brand-dark/40 font-heading font-bold uppercase tracking-widest mb-4">AI Enhanced Experiences</p>
                    <h3 className="text-2xl font-heading mb-4 italic">"Nature captured, stories retold."</h3>
                    <p className="text-brand-dark/70 font-body max-w-xl mx-auto">
                        Some visuals are AI-enhanced to better represent the dream-like atmosphere of the North Indian mountains at golden hour.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
