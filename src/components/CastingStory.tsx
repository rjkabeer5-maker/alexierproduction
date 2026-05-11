import krishna from "@/assets/krishna-casting.jpeg";
import { Particles } from "./Particles";

export function CastingStory() {
  return (
    <section id="casting" className="relative py-32 overflow-hidden bg-gradient-champagne">
      <div className="absolute inset-0 bg-cinematic-light opacity-50" />
      <Particles count={20} />
      <div className="absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-gradient-gold opacity-15 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-gold rounded-3xl blur-3xl opacity-30 animate-glow-pulse" />
            <div className="relative rounded-3xl overflow-hidden gold-border shadow-cinematic group">
              <img
                src={krishna}
                alt="Saurabh Raj Jain cast as Krishna"
                className="w-full aspect-[3/4] object-cover transition-transform duration-[2.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <div className="text-xs uppercase tracking-[0.4em] text-gold-soft">Now Casting</div>
                <div className="font-display text-3xl mt-1">Saurabh Raj Jain as Krishna</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— A New Story Begins —</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-coffee leading-tight">
              Celebrating A <span className="text-gradient-gold">New Story</span>
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-coffee/80 leading-relaxed">
              <span className="text-gradient-gold font-semibold">Alexier Music</span> proudly casts
              <span className="text-gradient-gold font-semibold"> Saurabh Raj Jain</span> as Krishna in our
              first devotional bhajan project — a cinematic offering crafted with reverence, emotion and divine artistry.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl glass-light gold-border-glow">
                <div className="text-xs uppercase tracking-[0.3em] text-gold-deep">Genre</div>
                <div className="font-display text-xl text-coffee mt-1">Devotional Cinema</div>
              </div>
              <div className="p-5 rounded-2xl glass-light gold-border-glow">
                <div className="text-xs uppercase tracking-[0.3em] text-gold-deep">Studio</div>
                <div className="font-display text-xl text-coffee mt-1">Alexier Music</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
