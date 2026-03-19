"use client";

import { useEffect, useRef, useState } from "react";

interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

const counters: CounterItem[] = [
  { value: 5, suffix: "+", label: "Years of Excellence" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Safety Record" },
  { value: 10, suffix: "+", label: "Trusted Partners" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function CounterSection() {
  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {counters.map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent md:text-5xl lg:text-6xl">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </div>
              <p className="mt-2 text-sm tracking-wide text-white/70 uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
