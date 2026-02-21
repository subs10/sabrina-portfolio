"use client";

import FadeIn from "@/components/ui/FadeIn";
import ArtCard from "@/components/ui/ArtCard";
import { artPieces } from "@/data/art";

export default function ArtClient() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        <FadeIn>
          <h1 className="text-3xl md:text-7xl font-light text-gray-900 mb-10 md:mb-16">
            Art
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artPieces.map((piece, i) => (
            <ArtCard key={piece.slug} piece={piece} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
