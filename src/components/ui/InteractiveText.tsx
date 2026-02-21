"use client";

import { useRef, useEffect, useState } from "react";

interface InteractiveTextProps {
  text: string;
  className?: string;
}

const INFLUENCE_RADIUS = 180;
const MAX_DISPLACEMENT = 6;
const LERP_FACTOR = 0.12;

export default function InteractiveText({ text, className = "" }: InteractiveTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const mousePos = useRef({ x: -9999, y: -9999 });
  const displacements = useRef<{ x: number; y: number }[]>([]);
  const glowValues = useRef<number[]>([]);
  const rafId = useRef<number>(0);
  const shimmerDone = useRef(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  const chars = text.split("");

  // Initialize displacement arrays on first render
  if (displacements.current.length !== chars.length) {
    displacements.current = chars.map(() => ({ x: 0, y: 0 }));
    glowValues.current = chars.map(() => 0);
  }

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setIsCoarsePointer(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsCoarsePointer(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isCoarsePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      shimmerDone.current = true; // cancel shimmer once real mouse moves in
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Shimmer: a ghost cursor sweeps across a few letters after load
    const shimmerStartTime = performance.now() + 1800; // start after 1.8s
    const shimmerDuration = 1200; // sweep over 1.2s
    // Pick a character near the middle to sweep through
    const shimmerTargetIdx = Math.floor(chars.length * 0.6);

    const animate = (now: number) => {
      const allChars = charRefs.current;
      const mouse = { ...mousePos.current };

      // Shimmer logic: simulate a ghost cursor moving over the target letter
      if (!shimmerDone.current && now > shimmerStartTime) {
        const elapsed = now - shimmerStartTime;
        const progress = Math.min(elapsed / shimmerDuration, 1);

        if (progress < 1) {
          const targetEl = allChars[shimmerTargetIdx];
          if (targetEl) {
            const rect = targetEl.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            // Ease in-out: cursor approaches then retreats
            const ease = Math.sin(progress * Math.PI);
            const approach = 40 + (1 - ease) * 180; // distance: starts far, gets close, pulls away
            mouse.x = cx - approach;
            mouse.y = cy;
            // Only apply shimmer if real cursor hasn't moved
            if (mousePos.current.x < -5000) {
              mousePos.current = { x: mouse.x, y: mouse.y };
            }
          }
        } else {
          shimmerDone.current = true;
          // Reset ghost cursor far away
          if (mousePos.current.x > -5000) {
            mousePos.current = { x: -9999, y: -9999 };
          }
        }
      }

      for (let i = 0; i < allChars.length; i++) {
        const el = allChars[i];
        if (!el) continue;

        const cur = displacements.current[i];
        const rect = el.getBoundingClientRect();
        // Subtract current displacement to get rest position
        const cx = rect.left + rect.width / 2 - cur.x;
        const cy = rect.top + rect.height / 2 - cur.y;

        const dx = cx - mouse.x;
        const dy = cy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = 0;
        let targetY = 0;
        let targetGlow = 0;

        if (dist < INFLUENCE_RADIUS && dist > 0) {
          const t = 1 - dist / INFLUENCE_RADIUS;
          const force = t * t * MAX_DISPLACEMENT;
          const angle = Math.atan2(dy, dx);
          targetX = Math.cos(angle) * force;
          targetY = Math.sin(angle) * force;
          targetGlow = t;
        }

        // Smooth interpolation
        cur.x += (targetX - cur.x) * LERP_FACTOR;
        cur.y += (targetY - cur.y) * LERP_FACTOR;
        glowValues.current[i] += (targetGlow - glowValues.current[i]) * 0.15;

        if (Math.abs(cur.x) < 0.02 && Math.abs(cur.y) < 0.02 && targetX === 0) {
          cur.x = 0;
          cur.y = 0;
        }

        el.style.transform = `translate(${cur.x}px, ${cur.y}px)`;

        const glow = glowValues.current[i];
        if (glow > 0.01) {
          const blur = glow * 25;
          const opacity = glow * 0.85;
          el.style.textShadow = `0 0 ${blur}px rgba(245, 197, 24, ${opacity}), 0 0 ${blur * 2.5}px rgba(245, 197, 24, ${opacity * 0.3})`;
        } else {
          el.style.textShadow = "none";
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isCoarsePointer, chars.length]);

  if (isCoarsePointer) {
    return <h1 className={className}>{text}</h1>;
  }

  return (
    <h1 ref={containerRef} className={className} aria-label={text}>
      {chars.map((char, i) => (
        <span
          key={i}
          ref={(el) => { charRefs.current[i] = el; }}
          className={`inline-block will-change-transform ${char === " " ? "" : ""}`}
          style={{ textShadow: "none" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
