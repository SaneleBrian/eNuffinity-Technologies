import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 w-full">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PricingSection />
        <TechStackSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
