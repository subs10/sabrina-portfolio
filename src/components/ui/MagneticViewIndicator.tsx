"use client";

import { useRef, useEffect, useCallback, useState, type ReactNode } from "react";

interface MagneticViewIndicatorProps {
  children: ReactNode;
}

const LERP_FACTOR = 0.15;

export default function MagneticViewIndicator({ children }: MagneticViewIndicatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hoverVisible, setHoverVisible] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  const animate = useCallback(() => {
    const circle = circleRef.current;
    if (!circle) return;

    currentPos.current.x += (mousePos.current.x - currentPos.current.x) * LERP_FACTOR;
    currentPos.current.y += (mousePos.current.y - currentPos.current.y) * LERP_FACTOR;

    circle.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px) translate(-50%, -50%) scale(${isHovered.current ? 1 : 0})`;

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseEnter = (e: MouseEvent) => {
      isHovered.current = true;
      setHoverVisible(true);
      // Jump to initial position to avoid animating from corner
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mousePos.current = { x, y };
      currentPos.current = { x, y };
    };

    const handleMouseLeave = () => {
      isHovered.current = false;
      setHoverVisible(false);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isTouchDevice, animate]);

  if (isTouchDevice) {
    return <>{children}</>;
  }

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {children}
      <div
        ref={circleRef}
        aria-hidden="true"
        className={`absolute top-0 left-0 w-16 h-16 rounded-full bg-buttercup flex items-center justify-center pointer-events-none z-10 transition-opacity duration-200 ${
          hoverVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: "translate(-50%, -50%) scale(0)",
          willChange: "transform",
        }}
      >
        <span className="text-sm font-semibold text-gray-900">View</span>
      </div>
    </div>
  );
}
