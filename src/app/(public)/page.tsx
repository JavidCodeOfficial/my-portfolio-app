import HeroSection from "@/components/sections/HeroSection";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/contact/ContactSection";

function PublicPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-16">
      <HeroSection />
      <ScrollDownArrow />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

export default PublicPage;
