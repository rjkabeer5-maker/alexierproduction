import mumbai from "@/assets/mumbai-cityscape.jpeg";
import dop from "@/assets/dop-kunal.jpeg";
import bts from "@/assets/bts-onlocation.jpeg";

const cities = ["Toronto", "Dubai", "Berlin", "Bangkok", "London", "Singapore"];

export function OutOfCountry() {
  return (
    <section id="global" className="relative py-32 overflow-hidden bg-gradient-cream">
      <div className="absolute inset-0 bg-cinematic-light opacity-40" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Global Production —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee">
            Out Of Country <span className="text-gradient-gold">Shoots</span>
          </h2>
          <p className="mt-6 text-coffee/70 max-w-2xl mx-auto text-lg">
            From Mumbai to Toronto — cinematic stories crafted across continents with world-class production crews.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:row-span-2 relative rounded-3xl overflow-hidden gold-border-glow shadow-cinematic group min-h-[480px]">
            <img src={mumbai} alt="Mumbai whispers" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2.5s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee via-coffee/40 to-transparent" />
            <div className="absolute bottom-0 p-8 text-ivory">
              <div className="text-xs uppercase tracking-[0.4em] text-gold-soft">Mumbai Whispers</div>
              <div className="font-display text-4xl mt-2">The City That Never Sleeps</div>
              <p className="mt-3 text-ivory/75 text-sm leading-relaxed">Marine Drive nights. Cinematic Bombay diaries.</p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden gold-border-glow shadow-cinematic group min-h-[230px]">
            <img src={dop} alt="On-set DOP" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2.5s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/85 to-transparent" />
            <div className="absolute bottom-0 p-6 text-ivory">
              <div className="text-xs uppercase tracking-[0.4em] text-gold-soft">TVC Production</div>
              <div className="font-display text-2xl mt-1">ARRI · Leica Summilux-C</div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden gold-border-glow shadow-cinematic group min-h-[230px]">
            <img src={bts} alt="On location" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2.5s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/85 to-transparent" />
            <div className="absolute bottom-0 p-6 text-ivory">
              <div className="text-xs uppercase tracking-[0.4em] text-gold-soft">On Location</div>
              <div className="font-display text-2xl mt-1">Studio Floor · India</div>
            </div>
          </div>

          <div className="lg:col-span-2 p-8 rounded-3xl glass-light gold-border-glow shadow-luxe">
            <div className="text-xs uppercase tracking-[0.4em] text-gold-deep mb-4">Production Cities</div>
            <div className="flex flex-wrap gap-3">
              {cities.map((c) => (
                <span key={c} className="px-5 py-2 rounded-full bg-ivory/60 border border-gold/40 text-coffee font-display text-lg hover:bg-gradient-gold hover:text-coffee transition shadow-luxe">
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-6 text-coffee/70 leading-relaxed">
              Local crews, international cinematographers and a global production pipeline — wherever the story takes us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
