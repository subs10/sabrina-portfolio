"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      {/* Grid */}
      <div className={`grid gap-4 ${images.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative cursor-pointer group"
            onClick={() => setSelectedIndex(i)}
            data-cursor-hover
          >
            <div className={`relative ${images.length === 1 ? "aspect-auto" : "aspect-[4/3]"}`}>
              <Image
                src={src}
                alt={`${alt} - ${i + 1}`}
                fill={images.length > 1}
                width={images.length === 1 ? 1200 : undefined}
                height={images.length === 1 ? 800 : undefined}
                className={`${images.length > 1 ? "object-cover" : "w-full h-auto"} rounded-sm transition-all duration-300 group-hover:shadow-lg`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-buttercup/30 rounded-sm" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={() => setSelectedIndex(null)}
            style={{ cursor: "auto" }}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-buttercup text-3xl z-10 transition-colors"
              onClick={() => setSelectedIndex(null)}
              style={{ cursor: "none" }}
            >
              &times;
            </button>

            {/* Nav arrows */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-buttercup text-4xl z-10 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
                  }}
                  style={{ cursor: "none" }}
                >
                  &lsaquo;
                </button>
                <button
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-buttercup text-4xl z-10 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((selectedIndex + 1) % images.length);
                  }}
                  style={{ cursor: "none" }}
                >
                  &rsaquo;
                </button>
              </>
            )}

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt={`${alt} - ${selectedIndex + 1}`}
                width={1600}
                height={1200}
                className="w-full h-auto max-h-[85vh] object-contain rounded-sm"
              />
              <p className="text-center text-white/50 text-sm mt-4">
                {selectedIndex + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
