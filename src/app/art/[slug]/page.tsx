import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { artPieces } from "@/data/art";
import ArtDetailClient from "./ArtDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return artPieces.map((piece) => ({
    slug: piece.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const piece = artPieces.find((p) => p.slug === slug);
  if (!piece) return {};

  return {
    title: piece.title,
    description: `${piece.medium}, ${piece.dimensions}, ${piece.year}. ${piece.description.slice(0, 155)}...`,
  };
}

export default async function ArtDetailPage({ params }: Props) {
  const { slug } = await params;
  const index = artPieces.findIndex((p) => p.slug === slug);

  if (index === -1) {
    notFound();
  }

  const piece = artPieces[index];
  const prevPiece = index > 0 ? { slug: artPieces[index - 1].slug, title: artPieces[index - 1].title } : null;
  const nextPiece = index < artPieces.length - 1 ? { slug: artPieces[index + 1].slug, title: artPieces[index + 1].title } : null;

  return <ArtDetailClient piece={piece} prevItem={prevPiece} nextItem={nextPiece} />;
}
