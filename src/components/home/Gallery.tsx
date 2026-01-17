"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
    { src: "/images/gallery/kasol_tosh__2.jpeg", alt: "Kasol Tosh", title: "Kasol Valleys" },
    { src: "/images/gallery/kedarnath_dham__1.jpeg", alt: "Kedarnath Dham", title: "Spiritual Kedarnath" },
    { src: "/images/gallery/badrinath_dham__0.jpeg", alt: "Badrinath Dham", title: "Divine Badrinath" },
    { src: "/images/gallery/chitkul_kalpa_1.jpeg", alt: "Chitkul Kalpa", title: "Sanguine Chitkul" },
    { src: "/images/gallery/manali__1.jpeg", alt: "Manali", title: "Snowy Manali" },
    { src: "/images/gallery/spiti__1.jpeg", alt: "Spiti Valley", title: "Rugged Spiti" },
    { src: "/images/gallery/udaipur_rajasthan__0.jpeg", alt: "Udaipur", title: "Royal Udaipur" },
    { src: "/images/gallery/jaisalmer_rajasthan__2.jpeg", alt: "Jaisalmer", title: "Golden Jaisalmer" },
    { src: "/images/gallery/auli_joshimath__1.jpeg", alt: "Auli", title: "Auli Slopes" },
    { src: "/images/gallery/rishikesh__0.png", alt: "Rishikesh", title: "Laxman Jhula at Sunset" },
    { src: "/images/gallery/leh_ladakh__0.png", alt: "Leh Ladakh", title: "Serene Pangong Lake" },
    { src: "/images/gallery/chakrata__1.png", alt: "Chakrata Hills", title: "Misty Chakrata Heights" },
    { src: "/images/gallery/jibhi__0.jpeg", alt: "Jibhi", title: "Hidden Gem of Jibhi" },
    { src: "/images/gallery/mcleodganj_bir_billing__0.jpeg", alt: "Bir Billing", title: "Paragliding Capital" },
    { src: "/images/gallery/chakrata__0.jpeg", alt: "Chakrata", title: "Peaceful Chakrata" },
    { src: "/images/lifestyle/trail.png", alt: "Himalayan Trail", title: "Trek to Tranquility" },
    { src: "/images/lifestyle/rishikesh_rafting.png", alt: "River Rafting", title: "Adrenaline in Rishikesh" },
    { src: "/images/lifestyle/leh_bikes.png", alt: "Leh Bike Trip", title: "Biking in the Clouds" },
];

export default function Gallery() {
    return (
        <section className="py-20 bg-brand-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-brand-dark mb-4">Travel Gallery</h2>
                    <p className="text-brand-dark/70 max-w-2xl mx-auto">
                        Glimpses of the breathtaking landscapes and cultural heritage from our recent trips.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium text-lg">{image.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
