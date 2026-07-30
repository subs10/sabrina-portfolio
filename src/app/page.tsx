"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import ArtCard from "@/components/ui/ArtCard";
import InteractiveText from "@/components/ui/InteractiveText";
import { projects } from "@/data/projects";
import { artPieces } from "@/data/art";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredArt = artPieces.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative -mt-[68px] md:-mt-[84px] min-h-[94svh] md:min-h-screen flex flex-col overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/art/fragments/1.jpg"
          alt="Fragments: September 28 - November 9, Sabrina Feld thesis artwork"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 md:from-black/80 md:via-black/40 md:to-black/15" />

        {/* Hero content — pushed to bottom */}
        <div className="relative z-10 mt-auto px-5 md:px-32 pb-32 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <InteractiveText
              text="HI, I'M SABRINA"
              className="text-[13vw] md:text-[10vw] font-bold text-white leading-[0.9] tracking-tight"
            />
          </motion.div>

          {/* Bio — integrated into hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 md:mt-8 max-w-full md:max-w-[75vw] space-y-4 ml-0.5"
          >
            <p className="text-base md:text-xl text-white/95 leading-relaxed">
              I&rsquo;m a senior at{" "}
              <a
                href="https://www.scrippscollege.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-buttercup transition-colors underline decoration-white/40 underline-offset-2"
                data-cursor-hover
              >
                Scripps College
              </a>{" "}
              studying{" "}
              <a
                href="https://catalog.scrippscollege.edu/preview_entity.php?catoid=35&ent_oid=2597&returnto=4490"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-buttercup transition-colors underline decoration-white/40 underline-offset-2"
                data-cursor-hover
              >
                science, technology, &amp; society (STS)
              </a>{" "}
              and{" "}
              <a
                href="https://catalog.scrippscollege.edu/preview_entity.php?catoid=35&ent_oid=2548&returnto=4490"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-buttercup transition-colors underline decoration-white/40 underline-offset-2"
                data-cursor-hover
              >
                fine arts
              </a>{" "}
              in a dual degree. My work bridges art, technology, and design,
              working between disciplines to push ideas toward new potential.
            </p>
            <p className="text-base md:text-xl text-white/95">
              Would love to connect!
            </p>
            <div className="pt-1">
              <Button
                href="/contact"
                variant="outline"
                className="!border-white/50 !text-white hover:!bg-buttercup hover:!border-buttercup hover:!text-gray-900"
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview — 3-up cards */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-32">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">
              Projects
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
            {featuredProjects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.1}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block focus-visible:ring-2 focus-visible:ring-buttercup focus-visible:outline-none rounded-sm"
                  data-cursor-hover
                >
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="text-lg font-medium text-white flex items-center gap-1.5">
                        {project.title}
                        <svg className="w-4 h-4 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </h3>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="text-center mt-12">
              <Button href="/projects" variant="outline">
                View All Projects
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Art Preview */}
      <section className="py-12 md:py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-5 md:px-32">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">
              Art
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredArt.map((piece, i) => (
              <ArtCard key={piece.slug} piece={piece} index={i} compact />
            ))}
          </div>

          <FadeIn>
            <div className="text-center mt-12">
              <Button href="/art" variant="outline">
                View All Art
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
