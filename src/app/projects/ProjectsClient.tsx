"use client";

import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsClient() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        <FadeIn>
          <h1 className="text-3xl md:text-7xl font-light text-gray-900 mb-10 md:mb-16">
            Past Projects
          </h1>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <div key={project.slug}>
              <ProjectCard project={project} index={i} />
              {i < projects.length - 1 && (
                <div className="border-t border-gray-100 mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
