"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import Tag from "@/components/ui/Tag";
import WireframeStudy from "@/components/ui/WireframeStudy";
import SupportingImage from "@/components/ui/SupportingImage";
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

function ProjectNavRow({ prevItem, nextItem }: { prevItem: NavItem | null; nextItem: NavItem | null }) {
  return (
    <div className="flex justify-between items-center">
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
    </div>
  );
}

function parseStatParts(stat: string): { number: string; label: string } {
  const match = stat.match(/^([\d,]+(?:\s*[–\-]\s*[\d,]+)?\+?(?:\s*(?:hrs?|days?))?)\s+(.+)$/);
  if (match) return { number: match[1], label: match[2] };
  return { number: stat, label: "" };
}

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
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
                  <div key={i} className="p-5 bg-gray-100 rounded-sm border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      <HighlightedText text={body.trim()} />
                    </p>
                  </div>
                );
              }
              return (
                <div key={i} className="p-5 bg-gray-100 rounded-sm border border-gray-200">
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

  const coverMedia = (
    <>
      {/* Cover image — skip for YouTube, video, and imagesOnly projects, use dual layout for images[] */}
      {isImagesOnly ? null : hasYoutube ? null : project.videoUrl ? null : hasDualImages ? (
        <FadeIn>
          <div className="grid grid-cols-2 gap-4 mb-12">
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
        <FadeIn>
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-12">
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
        <FadeIn>
          <div className="mb-12">
            <div className="relative aspect-video rounded-sm overflow-hidden">
              <iframe
                src={project.youtubeUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </FadeIn>
      )}

      {/* Video embed (non-YouTube) — skip for YouTube projects */}
      {project.videoUrl && !hasYoutube && (
        <FadeIn>
          <div className="mb-12">
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
    </>
  );

  return (
    <article>
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-5 md:px-24 pt-8 md:pt-10">
        <FadeIn>
          <Link
            href="/projects"
            className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors mb-8 inline-block"
            data-cursor-hover
          >
            &larr; All Projects
          </Link>
        </FadeIn>
      </div>

      {/* Top block: image, title, meta (role / type / year), summary, stats, overview */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 md:px-24">
          {coverMedia}

          <FadeIn>
            <h1 className="text-2xl md:text-5xl font-light text-gray-900 mb-3">
              {project.title}
            </h1>
            <p className="text-sm text-gray-500 tracking-wide uppercase mb-4">
              {project.year}
              {project.organization && ` • ${project.organization}`}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.categories.map((category) => (
                <Tag key={category} label={category} />
              ))}
            </div>

            <div className="mb-8 border-t border-b border-gray-100 divide-y divide-gray-100 text-sm">
              <div className="flex gap-6 py-3">
                <span className="w-20 shrink-0 text-xs uppercase tracking-wide text-gray-400">Role</span>
                <span className="text-gray-600">{project.roleTitle}</span>
              </div>
              {project.tags.length > 0 && (
                <div className="flex gap-6 py-3">
                  <span className="w-20 shrink-0 text-xs uppercase tracking-wide text-gray-400">Skills</span>
                  <span className="text-gray-600">{project.tags.map(capitalize).join(", ")}</span>
                </div>
              )}
            </div>

            {project.summaryLine && (
              <blockquote className="border-l-2 border-buttercup/50 pl-6 py-2 text-gray-700 leading-relaxed mb-8">
                <RichText text={project.summaryLine} />
              </blockquote>
            )}
          </FadeIn>

          {!isCarousel && !isImagesOnly && cs.stats && (
            <FadeIn>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {cs.stats.map((stat) => {
                  const { number, label } = parseStatParts(stat);
                  return (
                    <div
                      key={stat}
                      className="text-center py-6 px-4 bg-gray-100 rounded-sm border border-gray-200 relative overflow-hidden"
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

          {!isCarousel && !isImagesOnly && (
            <FadeIn>
              <div>
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
                  Project Overview
                </h2>
                {cs.overview.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">
                    <RichText text={para} />
                  </p>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Images-only layout */}
      {isImagesOnly && (
        <section className="bg-gray-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-5 md:px-24 space-y-6">
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
        </section>
      )}

      {isCarousel && (
        <section className="bg-gray-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-5 md:px-24">
            <CarouselLayout project={project} />
          </div>
        </section>
      )}

      {!isImagesOnly && !isCarousel && (
        <>
          {/* My Role / What I Built */}
          <section className="bg-gray-100 py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-5 md:px-24">
              <FadeIn>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
                    {cs.bulletRoleDetails ? "What I Built" : "My Contribution"}
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
            </div>
          </section>

          {/* Defining the Problem */}
          <section className="bg-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-5 md:px-24">
              <FadeIn>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
                    Defining the Problem
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
            </div>
          </section>

          {/* Approach */}
          <section className="bg-gray-100 py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-5 md:px-24">
              <FadeIn>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
                    Approach
                  </h2>
                  <div className="space-y-6">
                    {cs.approach.split("\n\n").map((para, i) => {
                      const boldMatch = para.match(/^\*\*(.+?)\*\*\s*/);
                      const paragraph = boldMatch ? (
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">{boldMatch[1]}</h4>
                          <p className="text-gray-600 leading-relaxed">
                            <RichText text={para.slice(boldMatch[0].length)} />
                          </p>
                        </div>
                      ) : (
                        <p className="text-gray-600 leading-relaxed text-lg">
                          <RichText text={para} />
                        </p>
                      );
                      return (
                        <Fragment key={i}>
                          {paragraph}
                          {project.wireframeStudyImages && i === 1 && (
                            <WireframeStudy images={project.wireframeStudyImages} />
                          )}
                          {project.approachImage && i === project.approachImage.afterParagraph && (
                            <SupportingImage
                              src={project.approachImage.src}
                              alt={project.approachImage.alt}
                              width={project.approachImage.width}
                              height={project.approachImage.height}
                              caption={project.approachImage.caption}
                            />
                          )}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>

              {/* Secondary image — only for non-dual-image projects */}
              {project.secondaryImage && !hasDualImages && (
                <FadeIn>
                  <div className="relative aspect-[16/9] rounded-sm overflow-hidden mt-8">
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
            </div>
          </section>

          {/* Impact */}
          <section className="bg-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-5 md:px-24">
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
                          <div key={i} className="p-5 bg-gray-100 rounded-sm border border-gray-200">
                            <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                              <HighlightedText text={body.trim()} />
                            </p>
                          </div>
                        );
                      }
                      return (
                        <div key={i} className="p-5 bg-gray-100 rounded-sm border border-gray-200">
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
            </div>
          </section>

          {/* Key Learnings + Related Skills */}
          <section className="bg-gray-100 py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-5 md:px-24 space-y-14">
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
          </section>
        </>
      )}

      {/* Bottom nav */}
      <div className="max-w-4xl mx-auto px-5 md:px-24 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-100 pt-8"
        >
          <ProjectNavRow prevItem={prevItem} nextItem={nextItem} />
        </motion.div>
      </div>
    </article>
  );
}
