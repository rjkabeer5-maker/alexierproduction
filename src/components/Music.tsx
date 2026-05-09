import music from "@/assets/music-launch.jpg";

export function Music() {
  return (
    <section id="music" className="relative py-32 overflow-hidden">
      <img src={music} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/85 via-ivory/40 to-ivory/95" />
      <div className="absolute inset-0 bg-cinematic-light opacity-80" />

      <div className="relative container mx-auto px-6 text-center text-coffee">
        <div className="inline-block px-5 py-2 rounded-full glass-light shadow-luxe mb-6 text-xs uppercase tracking-[0.5em] text-gold-deep">— Coming Soon —</div>
        <h2 className="font-display text-5xl md:text-8xl font-bold leading-tight text-shadow-soft">
          <span className="text-coffee">Launching Soon</span> <br />
          <span className="text-gradient-gold">Alexier Music</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-coffee/80">
          A new label born from cinema. Original soundtracks, music videos, and emotional anthems.
        </p>

        {/* visualizer */}
        <div className="mt-14 flex items-end justify-center gap-1.5 h-32 max-w-2xl mx-auto">
          {Array.from({ length: 56 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 bg-gradient-gold rounded-full animate-wave"
              style={{
                height: `${20 + Math.random() * 80}%`,
                animationDelay: `${i * 0.05}s`,
                animationDuration: `${0.8 + Math.random() * 0.8}s`,
              }}
            />
          ))}
        </div>

        <div className="mt-12">
          <a href="#contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-gold text-coffee font-semibold uppercase tracking-widest text-sm shadow-gold hover:shadow-glow transition">
            Get Notified
          </a>
        </div>
      </div>
    </section>
  );
}
