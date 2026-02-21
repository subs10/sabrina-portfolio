"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "ArrowRight") lightboxNext();
        else if (e.key === "ArrowLeft") lightboxPrev();
        else if (e.key === "Escape") setLightboxOpen(false);
      } else {
        if (e.key === "ArrowRight") goNext();
        else if (e.key === "ArrowLeft") goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, lightboxNext, lightboxPrev, lightboxOpen]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [lightboxOpen]);

  return (
    <>
      {/* ===== MOBILE: vertical stack — all images visible ===== */}
      <div className="md:hidden space-y-3 -mx-5">
        {images.map((src, i) => (
          <div
            key={src}
            className="relative w-full rounded-none overflow-hidden"
          >
            <Image
              src={src}
              alt={`${alt} - ${i + 1}`}
              width={1200}
              height={900}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
        ))}
        {images.length > 1 && (
          <p className="text-center text-sm text-gray-400 px-5">
            {images.length} images
          </p>
        )}
      </div>

      {/* ===== DESKTOP: carousel with thumbnails ===== */}
      <div className="hidden md:block">
        {/* Main image display */}
        <div className="flex justify-center">
          <div className="relative w-full max-h-[80vh] aspect-[4/3] rounded-sm overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
                style={{ willChange: "opacity" }}
              >
                <Image
                  src={images[currentIndex]}
                  alt={`${alt} - ${currentIndex + 1}`}
                  fill
                  className="object-contain bg-gray-50"
                  sizes="700px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Three-zone click: left=prev, center=expand, right=next */}
            {images.length > 1 ? (
              <>
                <button
                  className="absolute left-0 top-0 w-1/3 h-full z-10 cursor-gallery-prev"
                  onClick={goPrev}
                  aria-label="Previous image"
                />
                <button
                  className="absolute left-1/3 top-0 w-1/3 h-full z-10 cursor-gallery-zoom"
                  onClick={() => openLightbox(currentIndex)}
                  aria-label="Expand image"
                />
                <button
                  className="absolute right-0 top-0 w-1/3 h-full z-10 cursor-gallery-next"
                  onClick={goNext}
                  aria-label="Next image"
                />
              </>
            ) : (
              <button
                className="absolute inset-0 z-10 cursor-gallery-zoom"
                onClick={() => openLightbox(0)}
                aria-label="Expand image"
              />
            )}

            {/* Subtle side arrows */}
            {images.length > 1 && (
              <>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 z-[5] pointer-events-none text-gray-400/50">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 z-[5] pointer-events-none text-gray-400/50">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-1.5 mt-3 justify-center flex-wrap">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setCurrentIndex(i)}
                className={`relative flex-shrink-0 w-10 h-10 rounded-sm overflow-hidden transition-all duration-200 ${
                  i === currentIndex
                    ? "ring-2 ring-buttercup opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`${alt} thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </button>
            ))}
          </div>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <p className="text-center text-sm text-gray-400 mt-1.5">
            {currentIndex + 1} / {images.length}
          </p>
        )}
      </div>

      {/* ===== LIGHTBOX (shared between mobile & desktop) ===== */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90"
            onClick={() => setLightboxOpen(false)}
          >
            {/* X close button */}
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 text-white/60 hover:text-white transition-colors"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {images.length > 1 && (
              <>
                <button
                  className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-20 transition-colors w-10 h-10 md:w-auto md:h-auto rounded-full md:rounded-none bg-white/10 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none flex items-center justify-center md:block md:text-4xl"
                  onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="hidden md:inline">&lsaquo;</span>
                </button>
                <button
                  className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-20 transition-colors w-10 h-10 md:w-auto md:h-auto rounded-full md:rounded-none bg-white/10 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none flex items-center justify-center md:block md:text-4xl"
                  onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="hidden md:inline">&rsaquo;</span>
                </button>
              </>
            )}

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 m-4 md:m-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={`${alt} - ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
            {images.length > 1 && (
              <p className="absolute bottom-4 left-0 right-0 text-center text-white/50 text-sm z-20">
                {lightboxIndex + 1} / {images.length}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
