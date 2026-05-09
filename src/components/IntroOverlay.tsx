import { useEffect, useState } from "react";
import logo from "@/assets/alexier-logo.jpeg";

export function IntroOverlay() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 4400);
    return () => clearTimeout(t);
  }, []);
  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-champagne overflow-hidden animate-intro-fade-out">
      {/* soft light streaks */}
      <div className="absolute inset-0 bg-cinematic-light opacity-90" />
      <div className="absolute left-1/4 top-1/4 h-[34rem] w-[34rem] rounded-full bg-cinematic-light blur-3xl animate-lens-flare" />
      <div className="absolute right-1/4 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-cinematic-light blur-3xl animate-lens-flare" style={{ animationDelay: "1s" }} />

      {/* gold sparks */}
      {Array.from({ length: 36 }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-10px`,
            animationDuration: `${5 + Math.random() * 7}s`,
            animationDelay: `${Math.random() * 3}s`,
            transform: `scale(${0.4 + Math.random() * 1.6})`,
          }}
        />
      ))}

      {/* logo - transparent, no box */}
      <div className="relative animate-intro-zoom logo-shine">
        <img
          src={logo}
          alt="Alexier Productions"
          className="logo-transparent h-[46vmin] w-[46vmin] max-h-[520px] max-w-[520px] object-contain"
        />
      </div>

      {/* huge cinematic title */}
      <div className="absolute bottom-[14%] left-0 right-0 text-center animate-fade-up" style={{ animationDelay: "1.4s" }}>
        <div className="font-display text-5xl md:text-7xl font-bold text-gradient-gold text-shadow-soft tracking-wide">
          Alexier Productions
        </div>
        <div className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.6em] text-coffee/70">
          Crafting Stories • Cinematic Excellence
        </div>
      </div>
    </div>
  );
}
