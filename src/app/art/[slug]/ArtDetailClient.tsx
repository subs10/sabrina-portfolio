"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import ImageGallery from "@/components/ui/ImageGallery";
import type { ArtPiece } from "@/data/art";

interface Props {
  piece: ArtPiece;
}

export default function ArtDetailClient({ piece }: Props) {
  return (
    <article className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Back link */}
        <FadeIn>
          <Link
            href="/art"
            className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors mb-8 inline-block"
            data-cursor-hover
          >
            &larr; All Art
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-3">
            {piece.title}
          </h1>
          <p className="text-sm text-gray-500 italic mb-2">
            {piece.medium}, {piece.dimensions}, {piece.year}
          </p>
          {piece.exhibition && (
            <p className="text-sm text-gray-400 mb-8">
              Exhibited: {piece.exhibition}
            </p>
          )}
        </FadeIn>

        {/* Image Gallery */}
        <FadeIn delay={0.2}>
          <div className="mb-12">
            <ImageGallery images={piece.images} alt={piece.title} />
          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.3}>
          <div className="max-w-3xl">
            {piece.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>
        </FadeIn>

        {/* Navigation */}
        <FadeIn delay={0.4}>
          <div className="border-t border-gray-100 pt-8 mt-12">
            <Link
              href="/art"
              className="text-sm text-gray-500 hover:text-buttercup-dark transition-colors"
              data-cursor-hover
            >
              &larr; Back to Gallery
            </Link>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
