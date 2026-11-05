import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import OfferSection from "@/components/OfferSection";
import FeaturedFurniture from "@/components/FeaturedFurniture";
import CustomFurnitureSection from "@/components/CustomFurnitureSection";
import OurProjects from "@/components/OurProjects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col antialiased relative">
      {/* Fixed/Sticky Top Navbar */}
      <Navbar />

      {/* Hero Showcase Section with Carousel */}
      <Hero />

      {/* Main Content Sections Wrapper */}
      <div className="relative z-10 bg-white">
        {/* Shop By Category & Custom Vision Section */}
        <CategorySection />

        {/* Special Offers Section */}
        <OfferSection />

        {/* Our Featured Furniture Section */}
        <FeaturedFurniture />

        {/* Custom Furniture Showcase Section */}
        <CustomFurnitureSection />

        {/* Our Projects Showcase Section */}
        <OurProjects />
      </div>

      {/* Modern Contact Section */}
      <div className="relative z-10 bg-white">
        <ContactSection />
      </div>

      {/* Modern Footer Section (Elevated Layer Sliding Over Contact on Scroll) */}
      <Footer />
    </main>
  );
}
