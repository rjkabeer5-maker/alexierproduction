import { useState } from "react";
import microdrama from "@/assets/microdrama-poster.jpeg";
import fiction from "@/assets/svc-fiction.jpg";
import branded from "@/assets/svc-branded.jpg";
import corporate from "@/assets/svc-corporate.jpg";
import tvc from "@/assets/svc-tvc.jpg";
import podcast from "@/assets/svc-podcast.jpg";
import dubbing from "@/assets/svc-dubbing.jpg";
import ai from "@/assets/svc-ai.jpg";
import vfx from "@/assets/svc-vfx.jpg";
import production from "@/assets/svc-production.jpg";
import training from "@/assets/svc-training.jpg";

type Service = {
  id: string;
  title: string;
  short: string;
  long: string;
  image: string;
  number: string;
};

const services: Service[] = [
  { id: "microdrama", number: "01", title: "High Engagement Microdrama", short: "Emotional storytelling, cinematic execution.", long: "End-to-end full production with emotional storytelling and cinematic execution. We craft vertical microdramas optimised for digital-first audiences with binge-worthy hooks, premium production value and platform-native delivery.", image: microdrama },
  { id: "fiction", number: "02", title: "Fiction Web Series", short: "Pre-production to post — fully handled.", long: "Complete pre-production, production, and post-production for fiction series. Writers' rooms, casting, direction, cinematography, edit, color, sound and delivery — under one roof.", image: fiction },
  { id: "branded", number: "03", title: "Branded Content", short: "Stories for brands & campaigns.", long: "Impactful storytelling content for brands, social platforms, and campaigns. Performance-driven creative paired with cinematic craft.", image: branded },
  { id: "corporate", number: "04", title: "Corporate Films & Events", short: "Polished corporate storytelling.", long: "Polished corporate storytelling, leadership videos, employee stories, AGM coverage, product launches and event films.", image: corporate },
  { id: "tvc", number: "05", title: "TV Commercials & Digital Films", short: "TVCs for broadcast & digital.", long: "High-quality TVCs and premium digital content for broadcast and online platforms. Concept to final delivery.", image: tvc },
  { id: "podcast", number: "06", title: "Podcast Production", short: "Studio + on-location capture.", long: "Professional in-studio and on-location podcast shoots with audio/video capture, editing, and packaging tuned for YouTube, Spotify and social cuts.", image: podcast },
  { id: "dubbing", number: "07", title: "Dubbing & Localization", short: "Multi-language voice & lip-sync.", long: "High-engagement dubbing and localization in multiple languages. Cast, direction, ADR, mixing — Netflix & Prime grade quality.", image: dubbing },
  { id: "ai", number: "08", title: "AI Next-Generation Content", short: "AI films, ads & cinematic shorts.", long: "AI videos, AI ads, AI short films, AI web shows, cinematic AI storytelling — built with the newest generative tools.", image: ai },
  { id: "vfx", number: "09", title: "Animation & VFX", short: "2D / 3D, anime, music videos.", long: "2D/3D animation, anime visuals, cartoon production, music videos, and premium VFX production.", image: vfx },
  { id: "production", number: "10", title: "Full Spectrum Video Production", short: "Everything, end-to-end.", long: "Comprehensive video production covering fiction, branded content, events, podcasts, and digital storytelling.", image: production },
  { id: "training", number: "11", title: "Training & Internship", short: "Industry-grade learning.", long: "Industry internships and practical learning opportunities across creative and production roles.", image: training },
];

export function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-secondary/40 to-ivory" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[80%] bg-cinematic blur-3xl opacity-50" />

      <div className="relative container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block text-xs uppercase tracking-[0.5em] text-gold-deep mb-4">— What We Do —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-coffee">Services Built for</span>{" "}
            <span className="text-gradient-gold">Cinematic Impact</span>
          </h2>
          <p className="mt-6 text-coffee/70 max-w-2xl mx-auto text-lg">
            Eleven craft verticals. One uncompromising standard. Click any service to dive into its world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const isActive = active === s.id;
            return (
              <article
                key={s.id}
                onClick={() => setActive(isActive ? null : s.id)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 shadow-cinematic ${
                  isActive ? "lg:col-span-3 md:col-span-2 row-span-2 min-h-[560px]" : "min-h-[420px] hover:-translate-y-2"
                }`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/95 via-coffee/50 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/30 rounded-2xl group-hover:ring-gold/80 transition" />

                <div className="relative h-full p-8 flex flex-col justify-end text-ivory">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-gradient-gold text-2xl font-bold">{s.number}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mt-3 text-shadow-cinema">{s.title}</h3>
                  <p className="mt-2 text-ivory/80">{s.short}</p>

                  {isActive && (
                    <div className="mt-8 grid lg:grid-cols-2 gap-8 animate-fade-up">
                      <div className="space-y-4">
                        <p className="text-lg text-ivory/90 leading-relaxed">{s.long}</p>
                        <ul className="grid grid-cols-2 gap-3 text-sm">
                          {["Concept", "Pre-Prod", "Production", "Post & VFX", "Sound Design", "Delivery"].map((t) => (
                            <li key={t} className="flex items-center gap-2 text-ivory/85">
                              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {t}
                            </li>
                          ))}
                        </ul>
                        <a href="#contact" className="inline-flex mt-4 items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-coffee font-semibold text-sm uppercase tracking-wider shadow-gold">
                          Start a Project →
                        </a>
                      </div>
                      <div className="relative aspect-video rounded-xl overflow-hidden gold-border-dark">
                        <img src={s.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-coffee/40 flex items-center justify-center">
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold text-coffee text-2xl shadow-glow animate-glow-pulse">▶</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {!isActive && (
                    <div className="mt-6 inline-flex items-center gap-2 text-gold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition">
                      Explore <span>→</span>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
