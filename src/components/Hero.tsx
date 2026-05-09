import hero from "@/assets/hero-studio.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden cinematic-overlay film-grain">
      <img
        src={hero}
        alt="Alexier Productions cinematic studio"
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/20 to-ivory/85" />
      <div className="absolute inset-0 bg-cinematic-light opacity-80" />

      {/* cinematic light streaks */}
      <span className="light-streak" style={{ top: "22%", animationDelay: "0s" }} />
      <span className="light-streak" style={{ top: "55%", animationDelay: "3s", animationDuration: "12s" }} />
      <span className="light-streak" style={{ top: "78%", animationDelay: "6s", animationDuration: "10s" }} />

      {/* floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: 0,
            animationDuration: `${10 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full glass-light animate-fade-up shadow-luxe">
          <span className="h-2 w-2 rounded-full bg-gold animate-glow-pulse" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold-deep">A World-Class Production House</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] text-shadow-soft animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="block text-coffee">Crafting Stories</span>
          <span className="block text-gradient-gold">That Connect</span>
          <span className="block text-coffee">& Engage</span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-coffee/80 font-light tracking-wide animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Premium Microdrama • Fiction • AI Content • Dubbing • Full Spectrum Production
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#services"
            className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-gold text-coffee font-semibold uppercase tracking-widest text-sm shadow-gold hover:shadow-glow transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Explore Services</span>
            <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100" />
          </a>
          <a
            href="#showreel"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full glass-light text-coffee font-semibold uppercase tracking-widest text-sm hover:bg-gold/15 transition shadow-luxe"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-gold text-coffee">▶</span>
            Watch Showreel
          </a>
        </div>

        {/* subtitle bar */}
        <div className="mt-20 mx-auto inline-block px-8 py-3 rounded-full glass-light text-coffee text-sm tracking-wide animate-fade-up shadow-luxe" style={{ animationDelay: "0.8s" }}>
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
