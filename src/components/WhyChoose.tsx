import { Particles } from "./Particles";

const items = [
  { icon: "🎬", title: "Cinematic Microdrama Production", desc: "Vertical-first storytelling crafted with feature-film grade emotion and binge-worthy hooks." },
  { icon: "🎙️", title: "Netflix-Style Dubbing & Localization", desc: "Streaming-grade ADR, mixing and direction across 8+ languages with cultural fidelity." },
  { icon: "🎞️", title: "End-to-End Production Pipeline", desc: "Concept, script, shoot, edit, color, sound and delivery — under one cinematic roof." },
  { icon: "💛", title: "Emotion-Driven Storytelling", desc: "Every frame engineered to make audiences feel — not just watch." },
  { icon: "⚡", title: "Fast Turnaround Workflow", desc: "Agile production sprints that ship premium content on broadcast-grade timelines." },
  { icon: "🌐", title: "Multi-Language Production Support", desc: "Native crews, voice talent and localization desks for global, India-first content." },
];

export function WhyChoose() {
  return (
    <section id="why" className="relative py-32 overflow-hidden bg-gradient-cream">
      <div className="absolute inset-0 bg-cinematic-light opacity-40" />
      <Particles count={14} />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Why Clients Choose Alexier —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee leading-tight">
            Built for <span className="text-gradient-gold">Cinema.</span>
            <br />
            Engineered for <span className="text-gradient-gold">Scale.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="group relative p-10 rounded-3xl glass-light gold-border-glow shadow-luxe hover:shadow-glow transition-all duration-700 hover:-translate-y-2"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-gold opacity-0 group-hover:opacity-[0.07] transition duration-700 pointer-events-none" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-gold-soft text-3xl shadow-gold mb-6 group-hover:scale-110 transition duration-500">
                  {it.icon}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-coffee leading-snug">
                  {it.title}
                </h3>
                <p className="mt-4 text-coffee/70 leading-relaxed">{it.desc}</p>
                <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-700" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
