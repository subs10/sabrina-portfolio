"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ArtPiece } from "@/data/art";

interface ArtCardProps {
  piece: ArtPiece;
  index: number;
}

export default function ArtCard({ piece, index }: ArtCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/art/${piece.slug}`}
        className="group block"
        data-cursor-hover
      >
        <div className="relative overflow-hidden rounded-sm">
          <div className="aspect-[3/4] relative">
            <Image
              src={piece.coverImage}
              alt={piece.title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Yellow glow overlay on hover */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                boxShadow: "inset 0 0 40px rgba(245, 197, 24, 0.15)",
                border: "2px solid transparent",
              }}
            />
            <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-buttercup/40 rounded-sm" />
          </div>
        </div>
        <div className="mt-3 space-y-1">
          <h3 className="text-sm font-medium text-gray-900 transition-colors duration-200 group-hover:text-buttercup-dark">
            {piece.title}
          </h3>
          <p className="text-xs text-gray-500">
            {piece.medium}, {piece.year}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
