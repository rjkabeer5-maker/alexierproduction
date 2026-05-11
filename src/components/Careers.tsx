const roles = [
  { title: "Creative Director", type: "Mumbai · Full-time", desc: "Lead the vision behind our microdrama and fiction slate." },
  { title: "Senior Editor", type: "Noida · Full-time", desc: "Cut emotion-first stories with cinematic precision." },
  { title: "Sound Designer", type: "Mumbai · Hybrid", desc: "Sculpt cinematic audio for OTT and dubbing projects." },
  { title: "Localization Producer", type: "Remote · India", desc: "Manage multi-language adaptation across 8+ languages." },
  { title: "DOP / Cinematographer", type: "Pan India · Project" , desc: "Shoot premium TVCs and OTT originals." },
  { title: "Production Manager", type: "Toronto · Full-time", desc: "Run cross-border productions out of our Canada office." },
];

export function Careers() {
  return (
    <section id="careers" className="relative py-32 overflow-hidden bg-ivory">
      <div className="absolute inset-0 bg-cinematic-light opacity-30" />
      <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-gradient-gold opacity-10 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Join The Studio —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee">
            Careers At <span className="text-gradient-gold">Alexier</span>
          </h2>
          <p className="mt-6 text-coffee/70 max-w-2xl mx-auto text-lg">
            Join a team shaping the future of cinematic storytelling and localization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r, i) => (
            <article
              key={r.title}
              className="group relative p-8 rounded-3xl glass-light gold-border-glow shadow-luxe hover:shadow-glow transition-all duration-700 hover:-translate-y-2"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="text-xs uppercase tracking-[0.35em] text-gold-deep">{r.type}</div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold text-coffee">{r.title}</h3>
              <p className="mt-4 text-coffee/70 leading-relaxed">{r.desc}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gold-deep group-hover:gap-4 transition-all">
                Apply <span>→</span>
              </a>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
