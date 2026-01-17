import Hero from "@/components/home/Hero";
import QuickSearch from "@/components/home/QuickSearch";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import BrandBar from "@/components/home/BrandBar";
import Features from "@/components/home/Features";
import Gallery from "@/components/home/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <QuickSearch />
      <BrandBar />
      <FeaturedDestinations />
      <Gallery />
      <Features />

      {/* Additional sections like 'Testimonials' can be added here */}
    </div>
  );
}
