import camera from "@/assets/studio-camera.jpg";

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-gradient-champagne text-coffee">
      <div className="absolute inset-0 bg-cinematic-light opacity-60" />
      <div className="absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-gradient-gold opacity-15 blur-3xl" />
      <div className="container mx-auto px-6 relative grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-gold rounded-3xl blur-2xl opacity-25 animate-glow-pulse" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden gold-border-glow shadow-luxe">
            <img src={camera} alt="Studio" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/85 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-ivory">
              <div className="text-xs uppercase tracking-[0.4em] text-gold-soft mb-2">Since 2015</div>
              <div className="font-display text-3xl">A Decade of Storycraft</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-4">— About Alexier —</div>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight text-coffee">
            We Build <span className="text-gradient-gold">Worlds</span> the Audience Can't Look Away From.
          </h2>
          <p className="mt-8 text-lg text-coffee/75 leading-relaxed">
            Alexier Productions is a premium cinematic content and production studio focused on microdrama, fiction web series,
            dubbing, branded storytelling, AI content, podcasts, and full-spectrum video production for modern digital audiences.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "200+", v: "Satisfied Clients" },
              { k: "6+", v: "Years of Craft" },
              { k: "11", v: "Service Verticals" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl glass-light p-6 text-center hover:shadow-glow transition shadow-luxe">
                <div className="text-4xl font-display font-bold text-gradient-gold">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-coffee/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
