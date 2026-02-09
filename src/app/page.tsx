"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import ArtCard from "@/components/ui/ArtCard";
import { projects } from "@/data/projects";
import { artPieces } from "@/data/art";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const featuredArt = artPieces.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-5xl md:text-7xl font-light text-gray-900 leading-tight mb-6"
              >
                Hello! I&rsquo;m{" "}
                <span className="font-medium">Sabrina.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="space-y-4 mb-8"
              >
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  I&rsquo;m a senior at{" "}
                  <a
                    href="https://www.scrippscollege.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-buttercup-dark transition-colors underline decoration-buttercup/40 underline-offset-2"
                    data-cursor-hover
                  >
                    Scripps College
                  </a>{" "}
                  studying{" "}
                  <a
                    href="https://catalog.scrippscollege.edu/preview_entity.php?catoid=35&ent_oid=2597&returnto=4490"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-buttercup-dark transition-colors underline decoration-buttercup/40 underline-offset-2"
                    data-cursor-hover
                  >
                    science, technology, &amp; society (STS)
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://catalog.scrippscollege.edu/preview_entity.php?catoid=35&ent_oid=2548&returnto=4490"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-buttercup-dark transition-colors underline decoration-buttercup/40 underline-offset-2"
                    data-cursor-hover
                  >
                    fine arts
                  </a>{" "}
                  in a dual degree. I&rsquo;m excited to pursue opportunities that
                  engage my love for technology, creative practice, and thoughtful
                  problem-solving.
                </p>
                <p className="text-lg text-gray-600">
                  Would love to connect!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button href="/contact" variant="primary">
                  Contact Me
                </Button>
              </motion.div>
            </div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden">
                <Image
                  src="/images/art/fragments/1.jpg"
                  alt="Fragments: September 28 - November 9, Sabrina Feld thesis artwork"
                  fill
                  className="object-cover"
                  priority
                  sizes="50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                Projects
              </h2>
              <Link
                href="/projects"
                className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors"
                data-cursor-hover
              >
                View All &rarr;
              </Link>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Art Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                Art
              </h2>
              <Link
                href="/art"
                className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors"
                data-cursor-hover
              >
                View All &rarr;
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArt.map((piece, i) => (
              <ArtCard key={piece.slug} piece={piece} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
