import hero from "@/assets/hero-studio.jpg";
import alexierVideo from "@/assets/alexier.mp4";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden cinematic-overlay film-grain">
      <video
        src={alexierVideo}
        poster={hero}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
      />
      <div className="absolute inset-0 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/20 to-ivory/85" />
      <div className="absolute inset-0 bg-cinematic-light opacity-80" />

      {/* cinematic light streaks */}
      <span className="light-streak" style={{ top: "22%", animationDelay: "0s" }} />
      <span className="light-streak" style={{ top: "55%", animationDelay: "3s", animationDuration: "12s" }} />
      <span className="light-streak" style={{ top: "78%", animationDelay: "6s", animationDuration: "10s" }} />

      {/* floating golden particles */}
      <Particles count={28} />

      {/* Pop-up animated badge at top */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 animate-scale-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
        <div className="px-6 py-2.5 rounded-full glass-light gold-border-glow shadow-luxe">
          <span className="text-xs sm:text-sm uppercase tracking-[0.35em] text-gradient-gold font-semibold whitespace-nowrap">
            A World-Class Productions Company
          </span>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-16">
        <div className="mb-6 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          <span className="font-display text-sm sm:text-base md:text-lg tracking-[0.45em] uppercase text-gradient-gold">
            Alexier Productions
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.98] text-shadow-soft animate-fade-up" style={{ animationDelay: "0.35s" }}>
          <span className="block text-coffee">Welcome to a</span>
          <span className="block text-gradient-gold">World-Class Productions Company</span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-2xl text-coffee/80 font-light tracking-wide animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Cinema-Level Emotion. <span className="text-gold-deep font-medium">Digital-First Storytelling.</span>
        </p>
        <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-coffee/65 italic animate-fade-up" style={{ animationDelay: "0.6s" }}>
          From Script To Screen — Fully Managed.
        </p>

        {/* Audience growth highlight */}
        <p className="mt-4 text-xs sm:text-sm uppercase tracking-[0.4em] text-gold-deep/80 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          ✦ Reaching Audiences of 25M+ ✦
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#showreel"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-gold text-coffee font-semibold uppercase tracking-widest text-sm shadow-gold hover:shadow-glow transition-all duration-500 overflow-hidden"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coffee/15 text-coffee">▶</span>
            <span className="relative z-10">Experience The Showreel</span>
            <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full glass-light text-coffee font-semibold uppercase tracking-widest text-sm hover:bg-gold/15 transition shadow-luxe"
          >
            Start Your Project
            <span className="text-gold-deep">→</span>
          </a>
        </div>

        {/* subtitle bar */}
        <div className="mt-20 mx-auto inline-block px-8 py-3 rounded-full glass-light text-coffee text-sm tracking-wide animate-fade-up shadow-luxe" style={{ animationDelay: "1s" }}>
          “Every frame is a feeling. Every story is cinema.”
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-deep/80">
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
