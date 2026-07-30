"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";

// Distance (px) over which the header eases from transparent to fully solid —
// short enough that the frosted quality starts appearing shortly after the
// user begins scrolling, long enough that it still reads as a gradual fade.
const FADE_DISTANCE = 450;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 = top of hero, 1 = fully solid
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const isHome = pathname === "/";
  const lightText = isHome && scrollProgress < 0.5;

  // On the home page, the header floats transparent over the hero and
  // continuously solidifies/frosts as the user scrolls. Every other page
  // never has a hero, so this is a no-op there (scrollProgress stays 0 and
  // the static solid classes below are used instead).
  useEffect(() => {
    if (!isHome) return;

    let rafId = 0;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrollProgress(Math.min(window.scrollY / FADE_DISTANCE, 1));
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isHome]);

  // Close mobile menu on scroll or tap outside
  useEffect(() => {
    if (!mobileOpen) return;

    const close = () => setMobileOpen(false);

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        close();
      }
    };

    window.addEventListener("scroll", close, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", close);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Full-bleed darkness behind the floating nav so it pops over the
          hero, strongest at top, fading out as the pill solidifies. */}
      {isHome && (
        <div
          className="fixed top-0 inset-x-0 z-30 h-48 md:h-64 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"
          style={{ opacity: 1 - scrollProgress }}
        />
      )}

      {/* Floating rounded nav — the bubble itself spills a bit wider than the
          content margin, but its internal padding (below) still lines the
          logo/links text up exactly with the text column on the page. */}
      <div className="fixed top-3 md:top-5 inset-x-0 z-40 max-w-7xl mx-auto px-2 md:px-20">
        <header
          ref={headerRef}
          className="relative rounded-2xl overflow-hidden"
        >
          <div
            className="absolute top-0 inset-x-0 h-14 md:h-16 bg-off-white/70 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg"
            style={isHome ? { opacity: scrollProgress } : undefined}
          />
          <nav className="relative z-10 px-3 md:px-12 h-14 md:h-16 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className={`text-xl md:text-3xl font-semibold hover:text-[#CFA90F] transition-colors duration-300 ${
                lightText ? "text-white" : "text-gray-900"
              }`}
              data-cursor-hover
            >
              Sabrina Feld
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm tracking-wide transition-colors duration-300 hover:text-[#CFA90F] link-underline ${
                      isActive ? "text-[#CFA90F]" : lightText ? "text-white" : "text-gray-900"
                    }`}
                    data-cursor-hover
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide px-4 py-2 bg-gray-900 text-off-white rounded-sm hover:bg-buttercup hover:text-gray-900 transition-all duration-200"
                data-cursor-hover
              >
                Resume
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden relative w-6 h-5 flex flex-col justify-between"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-cursor-hover
            >
              <span
                className={`block h-0.5 w-full transition-all duration-300 origin-center ${
                  lightText ? "bg-white" : "bg-gray-900"
                } ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  lightText ? "bg-white" : "bg-gray-900"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 origin-center ${
                  lightText ? "bg-white" : "bg-gray-900"
                } ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
              />
            </button>
          </nav>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-off-white/70 backdrop-blur-md border-t border-white/40 overflow-hidden"
              >
                <div className="px-5 py-6 flex flex-col gap-5">
                  {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-base transition-colors duration-200 hover:text-[#CFA90F] ${
                          isActive ? "text-[#CFA90F]" : "text-gray-900"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-900 hover:text-[#CFA90F] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Resume
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>
    </>
  );
}
