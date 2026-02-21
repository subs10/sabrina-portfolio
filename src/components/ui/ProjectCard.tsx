"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import Tag from "./Tag";
import MagneticViewIndicator from "./MagneticViewIndicator";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(20px)",
        transition: `opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${index * 0.08}s, transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${index * 0.08}s`,
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block focus-visible:ring-2 focus-visible:ring-buttercup focus-visible:outline-none rounded-sm"
        data-cursor-hover
      >
        <MagneticViewIndicator>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-sm">
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-buttercup/0 transition-colors duration-300 group-hover:bg-buttercup/5" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500 tracking-wide uppercase">
                {project.category} {project.organization && `• ${project.organization}`} • {project.year}
              </p>
              <h3 className="text-3xl md:text-4xl font-medium text-gray-900 transition-colors duration-200 group-hover:text-buttercup-dark">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors duration-200 group-hover:text-buttercup-dark">
                  Learn More
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </MagneticViewIndicator>
      </Link>
    </div>
  );
}
