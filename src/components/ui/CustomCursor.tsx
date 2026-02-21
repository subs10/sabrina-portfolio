"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const handleMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
        glowRef.current.style.opacity = "1";
      }
    };

    const handleLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    const handleEnter = () => {
      if (glowRef.current) glowRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-30"
      style={{
        width: 220,
        height: 220,
        opacity: 0,
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(245,197,24,0.15) 0%, rgba(245,197,24,0.05) 40%, transparent 70%)",
        transition: "opacity 0.3s ease",
      }}
    />
  );
}
