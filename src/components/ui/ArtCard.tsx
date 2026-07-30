"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import type { ArtPiece } from "@/data/art";

interface ArtCardProps {
  piece: ArtPiece;
  index: number;
  compact?: boolean;
}

export default function ArtCard({ piece, index, compact = false }: ArtCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(20px)",
        transition: `opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${index * 0.08}s, transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${index * 0.08}s`,
      }}
    >
      <Link
        href={`/art/${piece.slug}`}
        className="group block"
        data-cursor-hover
      >
        <div className="relative overflow-hidden rounded-sm">
          <div className="aspect-[4/5] relative">
            <Image
              src={piece.coverImage}
              alt={piece.title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {compact ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-medium text-white flex items-center gap-1.5">
                    {piece.title}
                    <svg className="w-4 h-4 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </h3>
                </div>
              </>
            ) : (
              <>
                {/* Yellow glow overlay on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow: "inset 0 0 40px rgba(245, 197, 24, 0.15)",
                    border: "2px solid transparent",
                  }}
                />
                <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-buttercup/40 rounded-sm" />
              </>
            )}
          </div>
        </div>
        {!compact && (
          <div className="mt-3 space-y-1">
            <h3 className="text-sm font-medium text-gray-900 transition-colors duration-200 group-hover:text-buttercup-dark flex items-center gap-1.5">
              {piece.title}
              <svg className="w-3.5 h-3.5 text-gray-400 shrink-0 transition-all duration-300 group-hover:text-buttercup group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </h3>
            <p className="text-xs text-gray-500">
              {piece.medium}, {piece.year}
            </p>
          </div>
        )}
      </Link>
    </div>
  );
}
