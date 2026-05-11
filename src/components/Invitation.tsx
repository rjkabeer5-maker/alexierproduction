import { Particles } from "./Particles";

export function Invitation() {
  return (
    <section id="invitation" className="relative py-32 overflow-hidden bg-gradient-champagne">
      <div className="absolute inset-0 bg-cinematic-light opacity-60" />
      <Particles count={26} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-gradient-gold opacity-15 blur-3xl animate-glow-pulse" />

      <div className="container mx-auto px-6 relative text-center">
        <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-4">— An Invitation —</div>
        <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee leading-tight max-w-5xl mx-auto">
          Let's Build The <span className="text-gradient-gold">Next Big Story</span> Together
        </h2>
        <p className="mt-8 text-xl md:text-2xl text-coffee/75 max-w-3xl mx-auto font-light leading-relaxed">
          Whether it's a microdrama, an OTT series or a global brand campaign — bring us your vision and we'll engineer the emotion.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-gold text-coffee font-semibold uppercase tracking-widest text-sm shadow-gold hover:shadow-glow transition-all duration-500 overflow-hidden">
            <span className="relative z-10">Start a Project</span>
            <span className="relative z-10 text-lg">→</span>
            <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100" />
          </a>
          <a href="#showreel" className="inline-flex items-center gap-3 px-12 py-5 rounded-full glass-light text-coffee font-semibold uppercase tracking-widest text-sm hover:bg-gold/15 transition shadow-luxe">
            Watch The Showreel
          </a>
        </div>
      </div>
    </section>
  );
}
