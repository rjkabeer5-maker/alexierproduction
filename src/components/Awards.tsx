import { Particles } from "./Particles";

const awards = [
  { year: "2021", title: "Creative Production Award", body: "For pioneering vertical microdrama craft in India." },
  { year: "2021", title: "Best Storytelling Award", body: "Recognized for emotionally engineered narratives." },
  { year: "2023", title: "Best Creative Producer Award", body: "Awarded to Founder Ankit Jain (Kabeer)." },
  { year: "2024", title: "Excellence in Cinematic Production", body: "For broadcast-grade cinematic execution." },
  { year: "2024", title: "Global Creative Vision Award", body: "Honoring international storytelling impact." },
];

export function Awards() {
  return (
    <section id="awards" className="relative py-32 overflow-hidden bg-ivory">
      <div className="absolute inset-0 bg-cinematic-light opacity-40" />
      <Particles count={16} />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-gradient-gold opacity-10 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Industry Recognition —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee">
            Awards & <span className="text-gradient-gold">Honors</span>
          </h2>
          <p className="mt-6 text-coffee/70 max-w-2xl mx-auto text-lg">
            A decade of cinematic excellence — celebrated by the global creative industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {awards.map((a, i) => (
            <article
              key={a.title}
              className="group relative p-10 rounded-3xl glass-light gold-border-glow shadow-luxe hover:shadow-glow transition-all duration-700 hover:-translate-y-2"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-6 right-6 text-5xl drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] group-hover:scale-110 transition duration-500">🏆</div>
              <div className="text-xs uppercase tracking-[0.4em] text-gold-deep">{a.year}</div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold text-coffee leading-snug">
                {a.title}
              </h3>
              <p className="mt-4 text-coffee/70 leading-relaxed">{a.body}</p>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
