import type { Metadata } from "next";
import PostSurgeryHero from "@/components/surgery-post-lp/PostSurgeryHero";
import TeamSection from "@/components/surgery-post-lp/whychoosseus";
import TeamSectioned from "@/components/surgery-post-lp/third-component";
import ChronicPainConditions from "@/components/surgery-post-lp/conditions-component";
import ServicesSection from "@/components/surgery-post-lp/ServicesSection";
import ChronicPainAbout from "@/components/surgery-post-lp/about-component";
import CareOptions from "@/components/surgery-post-lp/care-options-component";
import FaqSection from "@/components/surgery-post-lp/FaqSection";
import FinalCtaSection from "@/components/surgery-post-lp/FinalCtaSection";
import PostSurgeryTimeline from "@/components/surgery-post-lp/timeline-component";
import PostSurgeryFormModal from "@/components/surgery-post-lp/PostSurgeryFormModal";
import Footer from "@/components/surgery-post-lp/Footer";

export const metadata: Metadata = {
  title: "Post-Surgery Physiotherapy | Enhance Physiotherapy & Wellness",
  description:
    "Advanced post-surgery rehabilitation with personalised physiotherapy plans and expert care.",
};

export default function PostSurgeryPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <PostSurgeryHero />
      <TeamSection />
      <ServicesSection />
      <ChronicPainConditions />
      <PostSurgeryTimeline />
      <TeamSectioned />
      <ChronicPainAbout />
      {/* <CareOptions /> */}
      <FaqSection />
      <FinalCtaSection />
      <Footer />
      <PostSurgeryFormModal />
    </main>
  );
}
