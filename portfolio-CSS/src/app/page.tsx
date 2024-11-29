import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import AchievementsSection from "@/components/AchievementsSection";
import EmailSection from "@/components/EmailSection";

export default function Home() {
  return (
    <main className="main-container">
      <Navbar />
      <div> 
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

