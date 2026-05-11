const steps = [
  { n: "01", title: "Development", desc: "Concept, research & story architecture." },
  { n: "02", title: "Writing", desc: "Scripting, dialogue & emotional beat mapping." },
  { n: "03", title: "Production", desc: "Cinematic shoot with premium crew & gear." },
  { n: "04", title: "Post Production", desc: "Edit, color, VFX & sound design." },
  { n: "05", title: "Localization", desc: "Multi-language dubbing & adaptation." },
  { n: "06", title: "Final Delivery", desc: "Platform-ready masters & distribution." },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative py-32 overflow-hidden bg-ivory">
      <div className="absolute inset-0 bg-cinematic-light opacity-30" />
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-gold opacity-10 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Our Cinematic Pipeline —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee">
            From Spark to <span className="text-gradient-gold">Screen</span>
          </h2>
          <p className="mt-6 text-coffee/70 max-w-2xl mx-auto text-lg">
            Six precision-crafted stages. One uncompromising standard of cinematic excellence.
          </p>
        </div>

        <div className="relative">
          {/* glowing connecting line - desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-soft to-transparent blur-sm animate-shimmer" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="group relative text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative mx-auto h-32 w-32 rounded-full glass-light gold-border-glow shadow-luxe flex items-center justify-center group-hover:shadow-glow transition duration-700">
                  <div className="absolute inset-2 rounded-full bg-gradient-gold-soft opacity-50 group-hover:opacity-100 transition duration-700" />
                  <span className="relative font-display text-3xl font-bold text-gradient-gold">{s.n}</span>
                </div>
                <h3 className="mt-6 font-display text-xl md:text-2xl font-bold text-coffee">{s.title}</h3>
                <p className="mt-2 text-sm text-coffee/65 leading-relaxed px-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
