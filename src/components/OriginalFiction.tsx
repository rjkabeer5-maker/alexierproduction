import series from "@/assets/web-series.jpeg";
import { Particles } from "./Particles";

export function OriginalFiction() {
  return (
    <section id="original" className="relative py-32 overflow-hidden bg-coffee text-ivory">
      <img src={series} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 animate-kenburns" />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee/80 via-coffee/70 to-coffee" />
      <div className="absolute inset-0 bg-cinematic opacity-60" />
      <Particles count={24} />

      <div className="container mx-auto px-6 relative text-center">
        <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-ivory/10 backdrop-blur-xl border border-gold/40">
          <span className="h-2 w-2 rounded-full bg-gold animate-glow-pulse" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold-soft">Premiering January 2027</span>
        </div>

        <h2 className="font-display text-5xl md:text-8xl font-bold leading-[0.95] text-shadow-cinema">
          <span className="block text-ivory">Alexier Original</span>
          <span className="block text-gradient-gold mt-2">Indian Fiction Series</span>
        </h2>

        <p className="mt-8 text-xl md:text-2xl text-ivory/80 max-w-3xl mx-auto font-light">
          Launching <span className="text-gold-soft font-medium">January 2027</span> on
          <span className="text-gold-soft font-medium"> Amazon Prime Video.</span>
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <span className="px-6 py-2 rounded-full bg-ivory/10 backdrop-blur-xl border border-gold/40 text-sm uppercase tracking-[0.3em] text-gold-soft">
            Cinematic Drama
          </span>
          <span className="px-6 py-2 rounded-full bg-ivory/10 backdrop-blur-xl border border-gold/40 text-sm uppercase tracking-[0.3em] text-gold-soft">
            8 Episodes
          </span>
          <span className="px-6 py-2 rounded-full bg-ivory/10 backdrop-blur-xl border border-gold/40 text-sm uppercase tracking-[0.3em] text-gold-soft">
            India Original
          </span>
        </div>

        <div className="mt-12 inline-block">
          <div className="font-display text-xs tracking-[0.5em] text-gold-soft uppercase">Streaming Soon On</div>
          <div className="mt-2 font-display text-4xl text-gradient-gold font-bold">PRIME VIDEO</div>
        </div>
      </div>
    </section>
  );
}
