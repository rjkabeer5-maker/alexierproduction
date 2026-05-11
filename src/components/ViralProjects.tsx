import brand from "@/assets/brand-content.jpeg";
import dop from "@/assets/dop-kunal.jpeg";
import studio from "@/assets/studio-vibe.jpeg";
import series from "@/assets/web-series.jpeg";

const items = [
  { title: "Mumbai Whispers", category: "Microdrama", views: "42M+", img: brand },
  { title: "Voices of India", category: "Localization", views: "28M+", img: studio },
  { title: "The Last Frame", category: "Web Series", views: "19M+", img: series },
  { title: "Aurum Campaign", category: "Brand TVC", views: "12M+", img: dop },
];

export function ViralProjects() {
  return (
    <section id="viral" className="relative py-32 overflow-hidden bg-ivory">
      <div className="absolute inset-0 bg-cinematic-light opacity-30" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Engagement Engine —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee">
            Our Viral <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="mt-6 text-coffee/70 max-w-2xl mx-auto text-lg">
            Stories engineered to travel — content built for retention, virality and cultural conversation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <article key={it.title} className="group relative overflow-hidden rounded-3xl aspect-[3/4] gold-border-glow shadow-cinematic" style={{ animationDelay: `${i * 80}ms` }}>
              <img src={it.img} alt={it.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee via-coffee/30 to-transparent" />
              <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gradient-gold text-coffee text-xs font-bold tracking-widest shadow-glow">
                {it.views} VIEWS
              </div>
              <div className="absolute bottom-0 p-6 text-ivory">
                <div className="text-[10px] uppercase tracking-[0.4em] text-gold-soft">{it.category}</div>
                <h3 className="font-display text-2xl font-bold mt-2">{it.title}</h3>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-gold-soft opacity-0 group-hover:opacity-100 transition">
                  Watch reel <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
