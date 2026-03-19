"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface VideoSectionProps {
  headline?: string;
  subtext?: string;
}

export default function VideoSection({
  headline = "Excellence in Every Beam",
  subtext = "Watch our team deliver precision steel erection with an unwavering commitment to safety and quality.",
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/steel-erection.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/services/Modolith-Image-102-1024x1024.jpg"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="animate-fade-in-up text-sm font-semibold tracking-widest text-accent uppercase">
          See Us in Action
        </p>
        <h2 className="font-[family-name:var(--font-heading)] animate-fade-in-up-delay mt-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          {headline}
        </h2>
        <p className="animate-fade-in-up-delay-2 mt-4 max-w-2xl text-lg text-white/80">
          {subtext}
        </p>
        <button
          onClick={togglePlay}
          className="btn-interact mt-8 flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:border-accent hover:bg-accent/20"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <>
              <Pause className="h-5 w-5" /> Pause
            </>
          ) : (
            <>
              <Play className="h-5 w-5" /> Play
            </>
          )}
        </button>
      </div>
    </section>
  );
}
