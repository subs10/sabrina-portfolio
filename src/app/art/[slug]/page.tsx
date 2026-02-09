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
  const piece = artPieces.find((p) => p.slug === slug);

  if (!piece) {
    notFound();
  }

  return <ArtDetailClient piece={piece} />;
}
