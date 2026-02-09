"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  const cs = project.caseStudy;

  return (
    <article className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Back link */}
        <FadeIn>
          <Link
            href="/projects"
            className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors mb-8 inline-block"
            data-cursor-hover
          >
            &larr; All Projects
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.1}>
          <p className="text-sm text-gray-500 tracking-wide uppercase mb-3">
            {project.category}
            {project.organization && ` \u00b7 ${project.organization}`} \u00b7{" "}
            {project.year}
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </FadeIn>

        {/* Cover image */}
        <FadeIn delay={0.2}>
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-16">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </FadeIn>

        {/* Video embed if exists */}
        {project.videoUrl && (
          <FadeIn delay={0.25}>
            <div className="mb-16">
              <video
                controls
                className="w-full rounded-sm"
                poster={project.coverImage}
              >
                <source src={project.videoUrl} type="video/mp4" />
              </video>
            </div>
          </FadeIn>
        )}

        {/* Case Study Content */}
        <div className="space-y-12">
          {/* Overview */}
          <FadeIn>
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                Project Overview
              </h2>
              {cs.overview.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* My Role */}
          <FadeIn>
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                My Role
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{cs.role}</p>
              <div className="space-y-4">
                {cs.roleDetails.map((detail, i) => {
                  const colonIndex = detail.indexOf(":");
                  if (colonIndex > -1) {
                    const title = detail.slice(0, colonIndex);
                    const body = detail.slice(colonIndex + 1);
                    return (
                      <div key={i} className="pl-4 border-l-2 border-buttercup/30">
                        <p className="text-gray-600 leading-relaxed">
                          <strong className="text-gray-900">{title}:</strong>
                          {body}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="text-gray-600 leading-relaxed pl-4 border-l-2 border-buttercup/30">
                      {detail}
                    </p>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* The Challenge */}
          <FadeIn>
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                The Challenge
              </h2>
              {cs.challenge.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* Approach */}
          <FadeIn>
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                Approach
              </h2>
              {cs.approach.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* Secondary image */}
          {project.secondaryImage && (
            <FadeIn>
              <div className="relative aspect-[16/9] rounded-sm overflow-hidden">
                <Image
                  src={project.secondaryImage}
                  alt={`${project.title} - additional view`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </FadeIn>
          )}

          {/* Impact */}
          <FadeIn>
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                Impact & Outcomes
              </h2>
              <div className="space-y-3">
                {cs.impact.map((item, i) => {
                  const colonIndex = item.indexOf(":");
                  if (colonIndex > -1) {
                    const title = item.slice(0, colonIndex);
                    const body = item.slice(colonIndex + 1);
                    return (
                      <p key={i} className="text-gray-600 leading-relaxed">
                        <strong className="text-gray-900">{title}:</strong>
                        {body}
                      </p>
                    );
                  }
                  return (
                    <p key={i} className="text-gray-600 leading-relaxed">
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Stats if any */}
          {cs.stats && (
            <FadeIn>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cs.stats.map((stat) => (
                  <div
                    key={stat}
                    className="text-center py-6 bg-gray-50 rounded-sm"
                  >
                    <p className="text-lg font-medium text-gray-900">{stat}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Key Learnings */}
          <FadeIn>
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                Key Learnings
              </h2>
              {cs.learnings.split("\n\n").map((para, i) => {
                const colonIndex = para.indexOf(":");
                if (colonIndex > -1 && colonIndex < 40) {
                  const title = para.slice(0, colonIndex);
                  const body = para.slice(colonIndex + 1);
                  return (
                    <p key={i} className="text-gray-600 leading-relaxed mb-4">
                      <strong className="text-gray-900">{title}:</strong>
                      {body}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">
                    {para}
                  </p>
                );
              })}
            </div>
          </FadeIn>

          {/* Related Skills */}
          <FadeIn>
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                Related Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {cs.relatedSkills.map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gray-100 pt-8 flex justify-between items-center"
          >
            <Link
              href="/projects"
              className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors"
              data-cursor-hover
            >
              &larr; All Projects
            </Link>
            <Button href="/contact" variant="outline">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
