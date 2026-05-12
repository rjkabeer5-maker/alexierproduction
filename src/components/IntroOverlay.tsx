import { useEffect, useState } from "react";
import logo from "@/assets/alexier-logo.jpeg";
import { Particles } from "./Particles";

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
      <Particles count={36} />

      {/* logo - warm halo, transparent, metallic shine */}
      <div className="relative animate-intro-zoom animate-logo-float">
        <span className="logo-halo logo-shine">
          <img
            src={logo}
            alt="Alexier Productions"
            className="logo-transparent h-[42vmin] w-[42vmin] max-h-[480px] max-w-[480px] object-contain"
          />
        </span>
      </div>

      {/* huge cinematic title */}
      <div className="absolute bottom-[14%] left-0 right-0 text-center animate-fade-up" style={{ animationDelay: "1.4s" }}>
        <div className="font-display text-5xl md:text-7xl font-bold text-gradient-gold text-shadow-soft tracking-wide">
          Alexier Productions
        </div>
      </div>
    </div>
  );
}
