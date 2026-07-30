"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";
import CategoryFilter from "@/components/ui/CategoryFilter";
import { projects } from "@/data/projects";

const CATEGORIES = ["Design", "Product Management", "Marketing"];

function ProjectsGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // The URL is the single source of truth for the active filter, so a
  // shared/bookmarked link like /projects/?category=Design opens pre-filtered.
  const urlCategory = searchParams.get("category");
  const active = urlCategory && CATEGORIES.includes(urlCategory) ? urlCategory : "All";

  const handleChange = (category: string) => {
    const url = category === "All" ? "/projects/" : `/projects/?category=${encodeURIComponent(category)}`;
    router.replace(url, { scroll: false });
  };

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <>
      <FadeIn>
        <CategoryFilter categories={CATEGORIES} active={active} onChange={handleChange} />
      </FadeIn>

      <div className="space-y-6">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </>
  );
}

export default function ProjectsClient() {
  return (
    <section className="pt-8 md:pt-16 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-5 md:px-32">
        <FadeIn>
          <h1 className="text-3xl md:text-7xl font-light text-gray-900 mb-6 md:mb-8">
            Past Projects
          </h1>
        </FadeIn>

        <Suspense fallback={null}>
          <ProjectsGrid />
        </Suspense>
      </div>
    </section>
  );
}
