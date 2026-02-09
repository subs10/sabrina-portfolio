"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Tag from "./Tag";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block"
        data-cursor-hover
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            isEven ? "" : "lg:direction-rtl"
          }`}
        >
          {/* Image */}
          <div className={`relative overflow-hidden rounded-sm ${isEven ? "" : "lg:order-2"}`}>
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
          <div className={`space-y-4 ${isEven ? "" : "lg:order-1"}`}>
            <p className="text-sm text-gray-500 tracking-wide uppercase">
              {project.category} {project.organization && `\u00b7 ${project.organization}`} \u00b7 {project.year}
            </p>
            <h3 className="text-2xl font-medium text-gray-900 transition-colors duration-200 group-hover:text-buttercup-dark">
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
            <p className="text-sm font-medium text-gray-900 pt-2 transition-colors duration-200 group-hover:text-buttercup-dark">
              Learn More &rarr;
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
