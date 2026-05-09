const reviews = [
  { name: "Priya Shah", role: "Marketing Head, Aurum", quote: "Alexier transformed our brand story into pure cinema. The craft is uncompromising." },
  { name: "Dr. Mehta", role: "CEO, NovaTech India", quote: "Their corporate films felt like Netflix originals. Our team was floored." },
  { name: "Rahul K.", role: "OTT Producer", quote: "The dubbing quality matched the best in the industry. Reliable and brilliant." },
];

export function Reviews() {
  return (
    <section className="relative py-28 bg-ivory overflow-hidden">
      <div className="absolute inset-0 bg-cinematic opacity-20" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Client Love —</div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-coffee">
            Voices of <span className="text-gradient-gold">Trust</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <article key={r.name} className="relative p-10 rounded-2xl glass-light shadow-cinematic hover:shadow-glow transition">
              <div className="font-display text-6xl text-gradient-gold leading-none">"</div>
              <p className="text-coffee/85 text-lg leading-relaxed -mt-4">{r.quote}</p>
              <div className="mt-6 pt-6 border-t border-gold/30">
                <div className="font-display text-xl text-coffee">{r.name}</div>
                <div className="text-sm text-coffee/60 uppercase tracking-widest">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
