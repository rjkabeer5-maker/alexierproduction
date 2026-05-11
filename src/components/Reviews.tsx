const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Executive Producer · Toronto",
    region: "International",
    quote:
      "Working with Alexier on our cross-border production was effortless. Their crew matched the standards of any top-tier North American studio — sharp, creative and incredibly responsive across time zones.",
  },
  {
    name: "Marcus Reinhardt",
    role: "Creative Director · Berlin",
    region: "International",
    quote:
      "Alexier delivered a German-localized cut that felt native — not translated. The emotional fidelity, mixing and ADR direction was streaming-grade. They are now our default Indian partner.",
  },
  {
    name: "Lisa Chen",
    role: "Head of Content · Singapore",
    region: "International",
    quote:
      "Their microdrama format cracked retention for our APAC audience. Cinematic visual language, smart hooks, and a production pipeline that actually ships on time.",
  },
  {
    name: "Priya Shah",
    role: "Marketing Head · Aurum",
    region: "India",
    quote:
      "Alexier transformed our brand story into pure cinema. From script to color grade, the craft was uncompromising. The campaign outperformed every benchmark we set internally.",
  },
  {
    name: "Dr. Mehta",
    role: "CEO · NovaTech India",
    region: "India",
    quote:
      "Their corporate films felt like Netflix originals. The team understood our audience deeply and translated complex tech into emotional, watchable storytelling. Our leadership was floored.",
  },
  {
    name: "Rahul Kapoor",
    role: "OTT Producer · Mumbai",
    region: "India",
    quote:
      "The dubbing and localization workflow at Alexier matches the best in the industry. Reliable, creative and obsessive about quality — exactly what an OTT slate demands.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-32 bg-gradient-cream overflow-hidden">
      <div className="absolute inset-0 bg-cinematic-light opacity-40" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Voices of Trust —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee">
            What Clients <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="mt-6 text-coffee/70 max-w-2xl mx-auto text-lg">
            International producers and India's biggest brands — sharing their experience with the Alexier studio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className="group relative p-10 rounded-3xl glass-light gold-border-glow shadow-luxe hover:shadow-glow transition-all duration-700 hover:-translate-y-2"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-gold/15 text-gold-deep">
                {r.region}
              </div>
              <div className="font-display text-7xl text-gradient-gold leading-none">"</div>
              <p className="text-coffee/85 text-lg leading-relaxed -mt-6 italic">{r.quote}</p>
              <div className="mt-8 pt-6 border-t border-gold/30">
                <div className="font-display text-xl text-coffee">{r.name}</div>
                <div className="text-xs text-coffee/60 uppercase tracking-[0.3em] mt-1">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
