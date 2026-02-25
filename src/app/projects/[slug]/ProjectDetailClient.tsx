"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

interface NavItem {
  slug: string;
  title: string;
}

interface Props {
  project: Project;
  prevItem: NavItem | null;
  nextItem: NavItem | null;
}

function parseStatParts(stat: string): { number: string; label: string } {
  const match = stat.match(/^([\d,]+(?:\s*[–\-]\s*[\d,]+)?\+?(?:\s*(?:hrs?|days?))?)\s+(.+)$/);
  if (match) return { number: match[1], label: match[2] };
  return { number: stat, label: "" };
}

/** Renders **bold** and [text](url) markdown within text */
function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="text-gray-900 font-semibold">{part.slice(2, -2)}</strong>;
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          return (
            <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-2 hover:text-buttercup transition-colors">
              {linkMatch[1]}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

/** Highlights numbers and key phrases within text */
function HighlightedText({ text }: { text: string }) {
  // Bold numbers like "6-week", "$99 billion", "20+", "100+", "50+", "2-week", percentages
  const parts = text.split(/(\b\d[\d,]*\+?(?:\s*[-–]\s*\d[\d,]*\+?)?\s*(?:week|month|year|day|hour|percent|%|billion|million|thousand|people|attendees|artists|pages|hours|customers|teams|users|deals)s?\b|\$\d[\d,.]*\s*(?:billion|million|thousand)?)/gi);

  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 1) {
          return <strong key={i} className="text-gray-900 font-semibold">{part}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function CarouselLayout({ project }: { project: Project }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = project.slides!;
  const slide = slides[slideIndex];

  return (
    <div className="space-y-14">
      <FadeIn>
        <div>
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
            Project Overview
          </h2>
          {project.caseStudy.overview.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4 text-lg">
              <HighlightedText text={para} />
            </p>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100">
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">
                {slideIndex + 1} / {slides.length}
              </p>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                {slide.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-buttercup hover:border-buttercup hover:text-gray-900 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setSlideIndex((prev) => (prev + 1) % slides.length)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-buttercup hover:border-buttercup hover:text-gray-900 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </FadeIn>

      {/* Challenge */}
      <FadeIn>
        <div>
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
            The Challenge
          </h2>
          {project.caseStudy.challenge.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4 text-lg">
              <HighlightedText text={para} />
            </p>
          ))}
        </div>
      </FadeIn>

      {/* Impact */}
      <FadeIn>
        <div>
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
            Impact &amp; Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.caseStudy.impact.map((item, i) => {
              const colonIndex = item.indexOf(":");
              if (colonIndex > -1) {
                const title = item.slice(0, colonIndex);
                const body = item.slice(colonIndex + 1);
                return (
                  <div key={i} className="p-5 bg-gray-100 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      <HighlightedText text={body.trim()} />
                    </p>
                  </div>
                );
              }
              return (
                <div key={i} className="p-5 bg-gray-100 rounded-lg border border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    <HighlightedText text={item} />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Key Learnings */}
      <FadeIn>
        <div>
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
            Key Learnings
          </h2>
          <div className="space-y-6">
            {project.caseStudy.learnings.split("\n\n").map((para, i) => {
              const colonIndex = para.indexOf(":");
              if (colonIndex > -1 && colonIndex < 40) {
                const title = para.slice(0, colonIndex);
                const body = para.slice(colonIndex + 1);
                return (
                  <div key={i}>
                    <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      <HighlightedText text={body.trim()} />
                    </p>
                  </div>
                );
              }
              return (
                <p key={i} className="text-gray-600 leading-relaxed">
                  <HighlightedText text={para} />
                </p>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Related Skills */}
      <FadeIn>
        <div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
            Related Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.caseStudy.relatedSkills.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default function ProjectDetailClient({ project, prevItem, nextItem }: Props) {
  const cs = project.caseStudy;
  const isCarousel = !!project.slides;
  const isImagesOnly = !!project.imagesOnly;
  const hasYoutube = !!project.youtubeUrl;
  const hasDualImages = !!project.images && project.images.length >= 2 && !isImagesOnly;

  return (
    <article className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 md:px-12">
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
            {project.organization && ` • ${project.organization}`} •{" "}
            {project.year}
          </p>
          <h1 className="text-2xl md:text-5xl font-light text-gray-900 mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </FadeIn>

        {/* Cover image — skip for YouTube and imagesOnly projects, use dual layout for images[] */}
        {isImagesOnly ? null : hasYoutube ? null : hasDualImages ? (
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4 mb-16">
              {project.images!.map((img, i) => (
                <div key={i} className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 400px"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        ) : (
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
        )}

        {/* YouTube embed */}
        {hasYoutube && (
          <FadeIn delay={0.25}>
            <div className="mb-16">
              <div className="relative aspect-video rounded-sm overflow-hidden">
                <iframe
                  src={project.youtubeUrl}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </FadeIn>
        )}

        {/* Video embed (non-YouTube) — skip for YouTube projects */}
        {project.videoUrl && !hasYoutube && (
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

        {/* Images-only layout */}
        {isImagesOnly ? (
          <div className="space-y-6">
            {project.images?.map((img, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative rounded-sm overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    width={1200}
                    height={900}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        ) : isCarousel ? (
          <CarouselLayout project={project} />
        ) : (
          /* Standard Case Study Content */
          <div className="space-y-14">
            {/* Stats if any — styled cards, placed first for impact */}
            {cs.stats && (
              <FadeIn>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cs.stats.map((stat) => {
                    const { number, label } = parseStatParts(stat);
                    return (
                      <div
                        key={stat}
                        className="text-center py-6 px-4 bg-gray-100 rounded-lg border border-gray-200 relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-buttercup" />
                        {label ? (
                          <>
                            <p className="text-3xl font-bold text-buttercup-dark mb-1">{number}</p>
                            <p className="text-sm text-gray-600">{label}</p>
                          </>
                        ) : (
                          <p className="text-lg font-medium text-gray-900">{stat}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </FadeIn>
            )}

            {/* Overview */}
            <FadeIn>
              <div>
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
                  Project Overview
                </h2>
                {cs.overview.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4 text-lg">
                    <RichText text={para} />
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* My Role / What I Built */}
            <FadeIn>
              <div>
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
                  {cs.bulletRoleDetails ? "What I Built" : "My Role"}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg font-medium"><RichText text={cs.role} /></p>
                {cs.bulletRoleDetails ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                    {cs.roleDetails.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-gray-600">
                        <span className="mt-[7px] w-2 h-2 rounded-full bg-buttercup flex-shrink-0" />
                        <span className="text-base leading-snug"><RichText text={detail} /></span>
                      </div>
                    ))}
                  </div>
                ) : (
                <div className="space-y-5">
                  {cs.roleDetails.map((detail, i) => {
                    const colonIndex = detail.indexOf(":");
                    if (colonIndex > -1) {
                      const title = detail.slice(0, colonIndex);
                      const body = detail.slice(colonIndex + 1);
                      return (
                        <div key={i} className="pl-5 border-l-2 border-gray-200 py-3 pr-5">
                          <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                          <p className="text-gray-600 leading-relaxed">
                            <HighlightedText text={body.trim()} />
                          </p>
                        </div>
                      );
                    }
                    return (
                      <div key={i} className="pl-5 border-l-2 border-gray-200 py-3 pr-5">
                        <p className="text-gray-600 leading-relaxed">
                          <HighlightedText text={detail} />
                        </p>
                      </div>
                    );
                  })}
                </div>
                )}
              </div>
            </FadeIn>

            {/* The Challenge */}
            <FadeIn>
              <div>
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
                  The Challenge
                </h2>
                <div className="space-y-6">
                  {cs.challenge.split("\n\n").map((para, i) => {
                    const boldMatch = para.match(/^\*\*(.+?)\*\*\s*/);
                    if (boldMatch) {
                      const heading = boldMatch[1];
                      const body = para.slice(boldMatch[0].length);
                      return (
                        <div key={i}>
                          <h4 className="font-bold text-gray-900 mb-2">{heading}</h4>
                          <p className="text-gray-600 leading-relaxed">
                            <RichText text={body} />
                          </p>
                        </div>
                      );
                    }
                    return (
                      <p key={i} className="text-gray-600 leading-relaxed text-lg">
                        <RichText text={para} />
                      </p>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            {/* Approach */}
            <FadeIn>
              <div>
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
                  Approach
                </h2>
                <div className="space-y-6">
                  {cs.approach.split("\n\n").map((para, i) => {
                    const boldMatch = para.match(/^\*\*(.+?)\*\*\s*/);
                    if (boldMatch) {
                      const heading = boldMatch[1];
                      const body = para.slice(boldMatch[0].length);
                      return (
                        <div key={i}>
                          <h4 className="font-bold text-gray-900 mb-2">{heading}</h4>
                          <p className="text-gray-600 leading-relaxed">
                            <RichText text={body} />
                          </p>
                        </div>
                      );
                    }
                    return (
                      <p key={i} className="text-gray-600 leading-relaxed text-lg">
                        <RichText text={para} />
                      </p>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            {/* Secondary image — only for non-dual-image projects */}
            {project.secondaryImage && !hasDualImages && (
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
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
                  Impact &amp; Outcomes
                </h2>
                {cs.listImpact ? (
                  <div className="space-y-5">
                    {cs.impact.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-buttercup flex-shrink-0" />
                        <p className="text-gray-600 leading-relaxed">
                          <RichText text={item} />
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cs.impact.map((item, i) => {
                    const colonIndex = item.indexOf(":");
                    if (colonIndex > -1) {
                      const title = item.slice(0, colonIndex);
                      const body = item.slice(colonIndex + 1);
                      return (
                        <div key={i} className="p-5 bg-gray-100 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            <HighlightedText text={body.trim()} />
                          </p>
                        </div>
                      );
                    }
                    return (
                      <div key={i} className="p-5 bg-gray-100 rounded-lg border border-gray-200">
                        <p className="text-gray-600 leading-relaxed">
                          <HighlightedText text={item} />
                        </p>
                      </div>
                    );
                  })}
                </div>
                )}
              </div>
            </FadeIn>

            {/* Key Learnings */}
            {!project.hideLearnings && (
            <FadeIn>
              <div>
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
                  Key Learnings
                </h2>
                <div className="space-y-6">
                  {cs.learnings.split("\n\n").map((para, i) => {
                    const colonIndex = para.indexOf(":");
                    if (colonIndex > -1 && colonIndex < 40) {
                      const title = para.slice(0, colonIndex);
                      const body = para.slice(colonIndex + 1);
                      return (
                        <div key={i}>
                          <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
                          <p className="text-gray-600 leading-relaxed">
                            <HighlightedText text={body.trim()} />
                          </p>
                        </div>
                      );
                    }
                    return (
                      <p key={i} className="text-gray-600 leading-relaxed">
                        <HighlightedText text={para} />
                      </p>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
            )}

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
          </div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-100 pt-8 mt-12 flex justify-between items-center"
        >
          <div className="w-1/3">
            {prevItem && (
              <Link
                href={`/projects/${prevItem.slug}`}
                className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors"
                data-cursor-hover
              >
                &larr; Previous
              </Link>
            )}
          </div>
          <div className="w-1/3 text-center">
            <Link
              href="/projects"
              className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors"
              data-cursor-hover
            >
              All Projects
            </Link>
          </div>
          <div className="w-1/3 text-right">
            {nextItem && (
              <Link
                href={`/projects/${nextItem.slug}`}
                className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors"
                data-cursor-hover
              >
                Next &rarr;
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </article>
  );
}
