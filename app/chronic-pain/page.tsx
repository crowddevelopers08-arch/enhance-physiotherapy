import type { Metadata } from "next";
import ChronicPainHero from "../../components/ChronicPain-lp/ChronicPainHero";
import TeamSection from "@/components/ChronicPain-lp/whychoosseus";
import TeamSectioned from "@/components/ChronicPain-lp/third-component";
import ChronicPainConditions from "@/components/ChronicPain-lp/conditions-component";
import ServicesSection from "@/components/ChronicPain-lp/ServicesSection";
import ChronicPainAbout from "@/components/ChronicPain-lp/about-component";
import CareOptions from "@/components/ChronicPain-lp/care-options-component";
import FaqSection from "@/components/ChronicPain-lp/FaqSection";
import FinalCtaSection from "@/components/ChronicPain-lp/FinalCtaSection";
import ChronicPainRoadmap from "@/components/ChronicPain-lp/roadmap-component";
import ChronicPainFormModal from "@/components/ChronicPain-lp/ChronicPainFormModal";
import Footer from "@/components/ChronicPain-lp/Footer";

export const metadata: Metadata = {
  title: "Chronic Pain Treatment | Enhance Physiotherapy & Wellness",
  description: "Relief from chronic pain and stiffness with personalised physiotherapy care.",
};

export default function ChronicPainPage() {
  return (
    <main className="flex flex-1 flex-col bg-white ">
      <ChronicPainHero />
      <TeamSection />
      <TeamSectioned />
      <ChronicPainConditions />
      <ServicesSection />
      <ChronicPainRoadmap />
      <ChronicPainAbout />
      <CareOptions />
      <FaqSection />
      <FinalCtaSection />
        <Footer />
      <ChronicPainFormModal />
    </main>
  );
}
