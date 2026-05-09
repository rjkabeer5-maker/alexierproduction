import camera from "@/assets/studio-camera.jpg";

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-gradient-dark text-ivory">
      <div className="absolute inset-0 bg-cinematic opacity-50" />
      <div className="container mx-auto px-6 relative grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-gold rounded-3xl blur-2xl opacity-30 animate-glow-pulse" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden gold-border-dark shadow-cinematic">
            <img src={camera} alt="Studio" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-xs uppercase tracking-[0.4em] text-gold-soft mb-2">Since 2015</div>
              <div className="font-display text-3xl">A Decade of Storycraft</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.5em] text-gold mb-4">— About Alexier —</div>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
            We Build <span className="text-gradient-gold">Worlds</span> the Audience Can't Look Away From.
          </h2>
          <p className="mt-8 text-lg text-ivory/80 leading-relaxed">
            Alexier Productions is a content and production studio crafting stories that connect and engage. We specialize in
            high-engagement micro drama, fiction web series, branded content, dubbing, AI storytelling, and complete video production
            for digital-first audiences.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "200+", v: "Satisfied Clients" },
              { k: "6+", v: "Years of Craft" },
              { k: "11", v: "Service Verticals" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl glass p-6 text-center hover:shadow-glow transition">
                <div className="text-4xl font-display font-bold text-gradient-gold">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-ivory/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
