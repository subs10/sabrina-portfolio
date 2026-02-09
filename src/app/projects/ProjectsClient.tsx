"use client";

import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsClient() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Past Projects
          </h1>
          <p className="text-lg text-gray-500 mb-16 max-w-2xl">
            Product management, design, visual storytelling, and creative work
            across startups and academia.
          </p>
        </FadeIn>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <div key={project.slug}>
              <ProjectCard project={project} index={i} />
              {i < projects.length - 1 && (
                <div className="border-t border-gray-100 mt-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
