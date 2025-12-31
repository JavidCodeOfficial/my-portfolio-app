import HeroSection from "@/components/sections/HeroSection";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

function PublicPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-16">
      <HeroSection />
      <ScrollDownArrow />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

export default PublicPage;
