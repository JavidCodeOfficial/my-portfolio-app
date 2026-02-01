"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/contants";
import ElectricBorder from "../ElectricBorder";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-[60vh] flex items-center justify-center"
    >
      <div className="px-4 sm:px-6 lg:px-16 py-16 space-y-16">
        {/* Header */}
        <div className="flex items-center justify-center">
          <motion.div {...fadeUp()} className="max-w-2xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              نمونه کارها
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              از ایده تا پیاده‌سازی نهایی؛ نمونه‌هایی از پروژه‌هایی با معماری
              تمیز و اجرای دقیق.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project card */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              {...fadeUp({ delay: index * 0.1 })}
              className="p-[3px] overflow-hidden rounded-xl"
            >
              <ElectricBorder
                color="#7df9ff"
                speed={0.5}
                chaos={0.05}
                borderRadius={20}
              >
                <ProjectCard {...project} />
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
