import AboutVisionMain from "@/components/AboutVisionMain/AboutVisionMain";
import Navbar from "@/components/common/Navbar/Navbar";
import AboutSection from "@/components/sections/About/AboutSection";
import AboutVisionMissionSection from "@/components/sections/AboutVisionMission/AboutVisionMissionSection";
import ApprovalsSection from "@/components/sections/Approvals/ApprovalsSection";
import ClientsSection from "@/components/sections/Clients/ClientsSection";
import ClientsResultsSection from "@/components/sections/ClientsResults/ClientsResultsSection";
import CTASection from "@/components/sections/CTA/CTASection";
import FAQSection from "@/components/sections/FAQ/FAQSection";
import Footer from "@/components/sections/Footer/Footer";
import HeroSection from "@/components/sections/Hero/HeroSection";
import PartnershipSection from "@/components/sections/Partnership/PartnershipSection";
import ProjectsSection from "@/components/sections/Projects/ProjectsSection";
import ProjectsApprovalsSection from "@/components/sections/ProjectsApprovals/ProjectsApprovalsSection";
import ResultsSection from "@/components/sections/Results/ResultsSection";
import ServicesSection from "@/components/sections/Service/ServiceSection";
import VisionSection from "@/components/sections/Vision/VisionSection";
import styles from './page.module.css'

export default function HomePage() {
  return (
    <main className={styles.section}>
      <Navbar/>
      <HeroSection />
      {/* <AboutVisionMain/> */}
      <AboutSection />
      <VisionSection />
      <ServicesSection />
      <ClientsResultsSection />
      <ProjectsApprovalsSection/>
      <PartnershipSection />
      <CTASection />
      <FAQSection />
      <Footer/>
    </main>
  );
}
