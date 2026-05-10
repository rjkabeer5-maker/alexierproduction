import commercial from "@/assets/bts-commercial.jpeg";
import videoproduction from "@/assets/bts-videoproduction.jpeg";
import onlocation from "@/assets/bts-onlocation.jpeg";
import camera from "@/assets/studio-camera.jpg";
import edit from "@/assets/studio-edit.jpg";
import stage from "@/assets/studio-stage.jpg";

const shots = [
  { img: commercial, title: "Commercial Shoot", tag: "Studio • Lighting Setup", span: "lg:col-span-2 lg:row-span-2" },
  { img: videoproduction, title: "Fiction Set", tag: "On-Set • Direction", span: "" },
  { img: onlocation, title: "On Location", tag: "Mumbai • Crane Shot", span: "lg:col-span-2" },
  { img: camera, title: "Cinema Cameras", tag: "ARRI • RED • Sony", span: "" },
  { img: stage, title: "Sound Stage", tag: "10,000 sq.ft Cyc", span: "" },
  { img: edit, title: "Color & Edit Suite", tag: "DaVinci • Avid", span: "lg:col-span-2" },
];

export function BehindTheScenes() {
  return (
    <section id="bts" className="relative py-32 bg-gradient-cream overflow-hidden">
      <div className="absolute inset-0 bg-cinematic-light opacity-50" />
      <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-gold opacity-15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-gold opacity-15 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.5em] text-gold-deep mb-4">— Inside the Frame —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight text-coffee">
            Behind <span className="text-gradient-gold">the Scenes</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-coffee/75 text-lg">
            Real moments from real productions — the craft, the chaos, the cinema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[260px]">
          {shots.map((s, i) => (
            <article
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl shadow-luxe gold-border-glow ${s.span}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.8s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-coffee/20 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/30 group-hover:ring-gold/80 rounded-2xl transition" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-ivory">
                <div className="text-[10px] uppercase tracking-[0.4em] text-gold-soft">{s.tag}</div>
                <h3 className="font-display text-2xl font-bold mt-1 text-shadow-cinema">{s.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
