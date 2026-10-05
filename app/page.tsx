import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/whychoosseus";
import ProcessSteps from "../components/ProcessSteps";
import AboutSection from "../components/AboutSection";
import AboutClinicSection from "../components/AboutClinicSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import FinalCtaSection from "../components/FinalCtaSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSteps />
      <AboutSection />
      <AboutClinicSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
