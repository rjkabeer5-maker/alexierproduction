import { useState } from "react";
import showreel1 from "@/assets/showreel-1.jpg";
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

export function VideoShowreel({
  src,
  poster,
  label,
  id,
  eyebrow = "— Experience The Storytelling —",
  description = "Emotion engineered for engagement, retention and impact.",
}: {
  src: string;
  poster?: string;
  label: string;
  id?: string;
  eyebrow?: string;
  description?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        id={id}
        onClick={() => setOpen(true)}
        className="relative rounded-[2rem] overflow-hidden shadow-cinematic gold-border-glow group cursor-pointer animate-fade-up"
      >
        <div className="absolute -inset-3 bg-gradient-gold opacity-30 blur-3xl rounded-[2.5rem] animate-glow-pulse pointer-events-none" />
        <div className="relative">
          <video
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            className="w-full aspect-[16/9] object-cover transition-transform duration-[2s] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee/85 via-coffee/20 to-coffee/30 pointer-events-none film-grain" />

          <span className="light-streak" style={{ top: "30%" }} />
          <span className="light-streak" style={{ top: "65%", animationDelay: "4s" }} />

          {/* central play button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-gold/40 blur-2xl animate-glow-pulse" />
              <span className="relative flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full bg-gradient-gold text-coffee text-3xl md:text-4xl shadow-glow ring-4 ring-ivory/30 group-hover:scale-110 transition-transform duration-500">
                ▶
              </span>
            </div>
          </div>

          <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-coffee/40 backdrop-blur-xl border border-gold/40 text-ivory text-xs uppercase tracking-[0.35em]">
            <span className="h-2 w-2 rounded-full bg-gold animate-glow-pulse" /> Click To Play
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 text-ivory">
            <div className="text-xs uppercase tracking-[0.5em] text-gold-soft">{eyebrow}</div>
            <h3 className="font-display text-4xl md:text-7xl font-bold mt-3 text-shadow-cinema leading-tight">{label}</h3>
            <p className="mt-3 text-ivory/75 max-w-2xl text-sm md:text-base">{description}</p>
          </div>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-coffee/95 backdrop-blur-2xl animate-fade-up p-4"
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-gradient-gold text-coffee text-xl shadow-glow z-10"
          >
            ✕
          </button>
          <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden gold-border-glow shadow-cinematic" onClick={(e) => e.stopPropagation()}>
            <video
              src={src}
              poster={poster}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      )}
    </>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-gradient-cream overflow-hidden">
      <div className="absolute inset-0 bg-cinematic-light opacity-40" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Showreel —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee">
            Experience The <span className="text-gradient-gold">Storytelling</span>
          </h2>
          <p className="mt-5 text-coffee/65 max-w-2xl mx-auto text-lg">Emotion engineered for engagement, retention and impact.</p>
        </div>

        <VideoShowreel id="showreel" src={filmVideo} poster={showreel1} label="Production House Showreel" />

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
      </div>
    </section>
  );
}
