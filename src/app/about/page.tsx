import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="pt-32 pb-24 bg-brand-bg min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20 animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-heading mb-8">About <span className="text-brand-teal">Trippy Junction</span></h1>
                        <p className="text-xl font-body text-brand-dark/70 leading-relaxed">
                            We are a team of passionate explorers dedicated to uncovering the hidden gems across India.
                            Our mission is to provide soulful, sustainable, and soulful travel experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
                            <Image
                                src="/images/lifestyle/monastery.png"
                                alt="Our Vision"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            <h2 className="text-4xl font-heading text-brand-dark">Our Values</h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-heading font-bold text-brand-teal">🌿 Eco-Friendly Travel</h4>
                                    <p className="text-brand-dark/70 font-body">We prioritize low-impact travel, minimize waste, and support local ecosystems.</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-heading font-bold text-brand-teal">🏘️ Supporting Communities</h4>
                                    <p className="text-brand-dark/70 font-body">Every trip involves local guides and stays at authentic homestays to benefit mountain communities.</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-heading font-bold text-brand-teal">🛡️ Safety & Quality</h4>
                                    <p className="text-brand-dark/70 font-body">Your safety is our priority. We provide vetted transport and expert group leaders for every batch.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-12 border border-brand-sand/50 shadow-sm text-center">
                        <h2 className="text-3xl font-heading mb-6">Join the Tribe</h2>
                        <p className="text-brand-dark/60 font-body mb-8 max-w-2xl mx-auto">
                            Ready to see India like never before? Follow our journey and be part of a community that loves adventure.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <span className="text-4xl">🏔️</span>
                            <span className="text-4xl">🏔️</span>
                            <span className="text-4xl">🏔️</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
