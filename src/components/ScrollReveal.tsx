"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  direction?: "up" | "left" | "right" | "scale";
}

export default function ScrollReveal({
  children,
  className = "",
  stagger = false,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass =
    direction === "left"
      ? "scroll-reveal-left"
      : direction === "right"
        ? "scroll-reveal-right"
        : direction === "scale"
          ? "scroll-reveal-scale"
          : "scroll-reveal";

  return (
    <div
      ref={ref}
      className={`${dirClass} ${stagger ? "stagger-children" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
