"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import ImageGallery from "@/components/ui/ImageGallery";
import type { ArtPiece } from "@/data/art";

interface NavItem {
  slug: string;
  title: string;
}

interface Props {
  piece: ArtPiece;
  prevItem: NavItem | null;
  nextItem: NavItem | null;
}

export default function ArtDetailClient({ piece, prevItem, nextItem }: Props) {
  return (
    <article className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-5 md:px-20">
        {/* Back link */}
        <FadeIn>
          <Link
            href="/art"
            className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors mb-6 inline-block"
            data-cursor-hover
          >
            &larr; All Art
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.1}>
          <h1 className="text-2xl md:text-5xl font-light text-gray-900 mb-8 md:mb-12">
            {piece.title}
          </h1>
        </FadeIn>

        {/* Image Gallery — centered */}
        <FadeIn delay={0.2}>
          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-3xl">
              <ImageGallery images={piece.images} alt={piece.title} />
            </div>
          </div>
        </FadeIn>

        {/* Medium / Dimensions / Year + Exhibition — left justified */}
        <FadeIn delay={0.25}>
          <div className="mb-8">
            <p className="text-base text-gray-700 font-bold">
              {piece.medium}, {piece.dimensions}, {piece.year}
            </p>
            {piece.exhibition && (
              <p className="text-sm text-gray-500 mt-1">
                Exhibited: {piece.exhibition}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.3}>
          <div>
            {piece.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>
        </FadeIn>

        {/* Navigation */}
        <FadeIn delay={0.4}>
          <div className="border-t border-gray-100 pt-8 mt-12 flex justify-between items-center">
            <div className="w-1/3">
              {prevItem && (
                <Link
                  href={`/art/${prevItem.slug}`}
                  className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors"
                  data-cursor-hover
                >
                  &larr; Previous
                </Link>
              )}
            </div>
            <div className="w-1/3 text-center">
              <Link
                href="/art"
                className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors"
                data-cursor-hover
              >
                All Art
              </Link>
            </div>
            <div className="w-1/3 text-right">
              {nextItem && (
                <Link
                  href={`/art/${nextItem.slug}`}
                  className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors"
                  data-cursor-hover
                >
                  Next &rarr;
                </Link>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
