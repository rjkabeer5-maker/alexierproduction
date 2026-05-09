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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-dark overflow-hidden animate-intro-fade-out">
      {/* lens flares */}
      <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-cinematic animate-lens-flare" />
      <div className="absolute right-1/4 bottom-1/3 h-[28rem] w-[28rem] rounded-full bg-cinematic animate-lens-flare" style={{ animationDelay: "1s" }} />

      {/* particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-10px`,
            animationDuration: `${6 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 3}s`,
            transform: `scale(${0.5 + Math.random() * 1.5})`,
          }}
        />
      ))}

      {/* logo */}
      <div className="relative animate-intro-zoom">
        <div className="absolute inset-0 -z-10 rounded-full bg-cinematic blur-3xl scale-150" />
        <img
          src={logo}
          alt="Alexier Productions"
          className="h-[60vmin] w-[60vmin] max-h-[640px] max-w-[640px] object-contain drop-shadow-[0_0_60px_rgba(212,175,55,0.6)]"
        />
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.5em] text-gold-soft/70 animate-fade-up" style={{ animationDelay: "2s" }}>
        Crafting Stories • Cinematic Excellence
      </div>
    </div>
  );
}
