import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/contants";
function ProjectsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-16 py-16 space-y-16">
        {/* Header */}
        <div className="flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              نمونه کارها
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              از ایده تا پیاده‌سازی نهایی؛ نمونه‌هایی از پروژه‌هایی با معماری
              تمیز و اجرای دقیق.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project card */}
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
