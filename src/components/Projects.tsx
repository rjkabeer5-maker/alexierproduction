import showreel1 from "@/assets/showreel-1.jpg";
import showreel2 from "@/assets/showreel-2.jpg";
import filmVideo from "@/assets/film.mp4";
import microdrama from "@/assets/svc-microdrama.jpg";
import fiction from "@/assets/svc-fiction.jpg";
import ai from "@/assets/svc-ai.jpg";
import dubbing from "@/assets/svc-dubbing.jpg";
import branded from "@/assets/svc-branded.jpg";
import corporate from "@/assets/svc-corporate.jpg";
import podcast from "@/assets/svc-podcast.jpg";
import vfx from "@/assets/svc-vfx.jpg";

const projects = [
  { title: "Whispers of Mumbai", category: "Microdrama", img: microdrama },
  { title: "The Last Frame", category: "Web Series", img: fiction },
  { title: "Synthetic Dreams", category: "AI Films", img: ai },
  { title: "Voices Across Borders", category: "Dubbing", img: dubbing },
  { title: "Aurum Campaign", category: "Brand Ads", img: branded },
  { title: "Boardroom Stories", category: "Corporate", img: corporate },
  { title: "Mic Drop Sessions", category: "Podcasts", img: podcast },
  { title: "Neon Anthem", category: "Music Videos", img: vfx },
];

function VideoShowcase({ src, poster, label, id }: { src: string; poster: string; label: string; id?: string }) {
  return (
    <div id={id} className="relative rounded-3xl overflow-hidden shadow-luxe gold-border-glow group">
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full aspect-[21/9] object-cover transition-transform duration-[2s] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-coffee/85 via-coffee/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-ivory">
        <div className="text-xs uppercase tracking-[0.5em] text-gold-soft">— Featured Reel —</div>
        <h3 className="font-display text-4xl md:text-6xl font-bold mt-2 text-shadow-cinema">{label}</h3>
      </div>
    </div>
  );
}

function Showcase({ img, label }: { img: string; label: string }) {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-luxe gold-border-glow group">
      <img src={img} alt={label} className="w-full aspect-[21/9] object-cover transition-transform duration-[2s] group-hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-coffee/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-ivory">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-gold text-coffee text-3xl shadow-glow animate-glow-pulse mb-6">▶</span>
        <div className="text-xs uppercase tracking-[0.5em] text-gold-soft">— Featured Reel —</div>
        <h3 className="font-display text-4xl md:text-6xl font-bold mt-2 text-shadow-cinema">{label}</h3>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-gradient-cream overflow-hidden">
      <div className="absolute inset-0 bg-cinematic-light opacity-40" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Our Work —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
        </div>

        <Showcase img={showreel1} label="Showreel 2025" />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-cinematic cursor-pointer"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee via-coffee/40 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/30 rounded-2xl group-hover:ring-gold/80 transition" />
              <div className="absolute bottom-0 p-6 text-ivory">
                <div className="text-[10px] uppercase tracking-[0.4em] text-gold">{p.category}</div>
                <h3 className="font-display text-2xl font-bold mt-1">{p.title}</h3>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-gold-soft opacity-0 group-hover:opacity-100 transition">
                  Watch trailer <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <Showcase img={showreel2} label="Brand Films Reel" />
        </div>
      </div>
    </section>
  );
}
