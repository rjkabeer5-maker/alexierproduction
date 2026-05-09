const sponsors = ["NETFLIX", "PRIME", "SONY", "ZEE5", "JIO STUDIOS", "T-SERIES", "DHARMA", "YASHRAJ", "RED CHILLIES", "VICE"];

export function Sponsors() {
  const list = [...sponsors, ...sponsors];
  return (
    <section className="relative py-20 bg-gradient-champagne overflow-hidden border-y border-gold/30">
      <div className="absolute inset-0 bg-cinematic-light opacity-40" />
      <div className="container mx-auto px-6 mb-10 text-center relative">
        <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Trusted By —</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-coffee">
          Partners & <span className="text-gradient-gold">Collaborators</span>
        </h2>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex gap-16 animate-marquee w-max">
          {list.map((s, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-gold animate-glow-pulse" />
              <span className="font-display text-3xl md:text-4xl font-bold text-gradient-gold tracking-widest">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
