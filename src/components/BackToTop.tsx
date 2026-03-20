"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);

  const updateProgress = useCallback(() => {
    const path = pathRef.current;
    if (!path) return;

    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / docHeight;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
      updateProgress();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateProgress]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      onClick={scrollToTop}
      className={`progress-wrap cursor-pointer ${visible ? "active-progress" : ""}`}
    >
      <svg className="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          ref={pathRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-accent">
        <ArrowUp className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}
