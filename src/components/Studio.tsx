import edit from "@/assets/studio-edit.jpg";
import camera from "@/assets/studio-camera.jpg";
import stage from "@/assets/studio-stage.jpg";
import podcast from "@/assets/svc-podcast.jpg";
import dubbing from "@/assets/svc-dubbing.jpg";
import production from "@/assets/svc-production.jpg";

const spaces = [
  { title: "Sound Stage", img: stage, desc: "10,000 sq.ft cyc with full grid lighting." },
  { title: "Color & Edit Suites", img: edit, desc: "Davinci Resolve, Avid, ProTools — calibrated." },
  { title: "Cinema Cameras", img: camera, desc: "ARRI, RED, Sony Venice on-demand." },
  { title: "Podcast Studio", img: podcast, desc: "Acoustically treated 4-mic setup." },
  { title: "Dubbing Booth", img: dubbing, desc: "ADR, foley, Dolby-grade mixing." },
  { title: "Production Floor", img: production, desc: "Crew, gear, art dept — all in-house." },
];

export function Studio() {
  return (
    <section id="studio" className="relative py-32 bg-gradient-cream text-coffee overflow-hidden">
      <div className="absolute inset-0 bg-cinematic-light opacity-50" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[80%] bg-gradient-gold opacity-10 blur-3xl rounded-full" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Our Studio Space —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee">
            Where <span className="text-gradient-gold">Magic</span> Gets Made
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((s) => (
            <article key={s.title} className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-luxe gold-border-glow">
              <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee via-coffee/30 to-transparent" />
              <div className="absolute bottom-0 p-7 text-ivory">
                <h3 className="font-display text-3xl font-bold text-shadow-cinema">{s.title}</h3>
                <p className="text-ivory/85 mt-1 text-sm">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
