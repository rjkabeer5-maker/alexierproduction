const sponsors = ["SAMSUNG", "LG", "TATA", "HIMALAYA", "DAINIK BHASKAR", "NETFLIX", "PRIME VIDEO", "SONY", "ZEE5", "JIO STUDIOS"];

export function Sponsors() {
  const list = [...sponsors, ...sponsors];
  return (
    <section id="brands" className="relative py-24 bg-ivory overflow-hidden border-y border-gold/30">
      <div className="absolute inset-0 bg-cinematic-light opacity-30" />
      <div className="container mx-auto px-6 mb-12 text-center relative">
        <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Trusted By —</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-coffee">
          Brands & <span className="text-gradient-gold">Collaborators</span>
        </h2>
        <p className="mt-5 text-coffee/65 max-w-2xl mx-auto">
          From global enterprises to India's biggest OTT platforms — we craft stories the world's best brands trust.
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex gap-20 animate-marquee w-max">
          {list.map((s, i) => (
            <div key={i} className="group flex items-center gap-4 whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-gold animate-glow-pulse" />
              <span className="font-display text-3xl md:text-5xl font-bold tracking-[0.15em] text-coffee/40 group-hover:text-gradient-gold transition-all duration-700">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
