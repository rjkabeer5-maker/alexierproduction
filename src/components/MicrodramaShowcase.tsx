import poster from "@/assets/microdrama-poster.jpeg";
import microVideo from "@/assets/micro.mp4";

const titles = [
  { name: "Billionaire's Unexpected Love", tags: "Love • Betrayal • Destiny", eps: "100+" },
  { name: "Falling For My Enemy", tags: "Hate • Passion • Redemption", eps: "80+" },
  { name: "A Mother's Sacrifice", tags: "Family • Love • Strength", eps: "90+" },
  { name: "Revenge Beyond Heartbreak", tags: "Pain • Revenge • Power", eps: "100+" },
  { name: "The Royal Promise", tags: "Honor • Love • Loyalty", eps: "80+" },
  { name: "The CEO's Secret Obsession", tags: "Secrets • Obsession • Love", eps: "90+" },
  { name: "Campus Diaries", tags: "Friendship • Dreams • First Love", eps: "60+" },
];

export function MicrodramaShowcase() {
  return (
    <section id="microdrama" className="relative py-32 bg-gradient-champagne text-coffee overflow-hidden">
      <div className="absolute inset-0 bg-cinematic-light opacity-60" />
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-gradient-gold opacity-20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-gradient-gold opacity-20 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.5em] text-gold-deep mb-4">— Alexier Microdrama —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight text-coffee">
            Multiple Stories. <br />
            <span className="text-gradient-gold">Endless Emotions.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-coffee/75 text-lg">
            Vertical microdramas that stay with you. Cinematic, fast-paced & made for mobile.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Poster */}
          <div className="lg:col-span-2 relative group">
            <div className="absolute -inset-6 bg-gradient-gold rounded-3xl blur-2xl opacity-30 animate-glow-pulse" />
            <div className="relative rounded-3xl overflow-hidden gold-border-glow shadow-luxe">
              <img
                src={poster}
                alt="Alexier Microdrama — Multiple Stories. Endless Emotions."
                className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Titles list */}
          <div className="lg:col-span-3 space-y-4">
            {titles.map((t, i) => (
              <article
                key={t.name}
                className="group relative flex items-center justify-between gap-4 p-6 rounded-2xl glass-light hover:shadow-glow transition-all duration-500 shadow-luxe"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-5 min-w-0">
                  <span className="font-display text-3xl text-gradient-gold font-bold w-12 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl md:text-2xl font-bold truncate text-coffee">{t.name}</h3>
                    <div className="text-xs uppercase tracking-[0.3em] text-gold-deep mt-1 truncate">{t.tags}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 text-xs uppercase tracking-widest text-gold-deep">
                    <span className="text-gold">▶</span> {t.eps} Episodes
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-coffee shadow-gold opacity-90 group-hover:opacity-100 group-hover:scale-110 transition">
                    →
                  </span>
                </div>
              </article>
            ))}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
              {[
                { i: "📱", t: "Vertical Stories" },
                { i: "⚡", t: "Fast-Paced" },
                { i: "▶", t: "New Episodes" },
                { i: "★", t: "Alexier Music" },
              ].map((f) => (
                <div key={f.t} className="text-center p-4 rounded-xl glass-light">
                  <div className="text-gradient-gold text-2xl mb-1">{f.i}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-coffee/70">{f.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
