"use client";

import FadeIn from "@/components/ui/FadeIn";
import ArtCard from "@/components/ui/ArtCard";
import { artPieces } from "@/data/art";

export default function ArtClient() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Art
          </h1>
          <p className="text-lg text-gray-500 mb-16 max-w-2xl">
            Explorations across monotype, watercolor, ceramics, screen print,
            cyanotype, lithography, and drawing.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artPieces.map((piece, i) => (
            <ArtCard key={piece.slug} piece={piece} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
