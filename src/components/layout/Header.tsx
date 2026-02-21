"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

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
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-40 bg-off-white/70 backdrop-blur-md border-b border-white/40">
      <nav className="max-w-7xl mx-auto px-5 md:px-20 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-3xl font-semibold text-gray-900 hover:text-buttercup transition-colors duration-200"
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
                className={`text-sm tracking-wide transition-colors duration-200 hover:text-buttercup link-underline ${
                  isActive ? "text-buttercup" : "text-gray-900"
                }`}
                data-cursor-hover
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/resume.pdf"
            target="_blank"
            className="text-sm tracking-wide px-4 py-2 border border-gray-900 text-gray-900 rounded-sm hover:bg-buttercup hover:border-buttercup transition-all duration-200"
            data-cursor-hover
          >
            Resume
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-6 h-5 flex flex-col justify-between"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-cursor-hover
        >
          <span
            className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 origin-center ${
              mobileOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
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
                    className={`text-base transition-colors duration-200 hover:text-buttercup ${
                      isActive ? "text-buttercup" : "text-gray-900"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/resume.pdf"
                target="_blank"
                className="text-base text-gray-900 hover:text-buttercup transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
