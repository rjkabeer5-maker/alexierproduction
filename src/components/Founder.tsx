import founder from "@/assets/founder-ankit.jpeg";

const timeline = [
  { y: "2015", t: "The Journey Begins", d: "Started in entertainment with a passion for sound and story." },
  { y: "2016–18", t: "Radio Years", d: "RJ and Sr. Managing Head — mastering voice & audience." },
  { y: "2019", t: "Netflix & Prime Dubbing", d: "Connected with global OTT through premium dubbing work." },
  { y: "2020", t: "CEO at Premix Production", d: "Led strategic growth across television, films & web shows." },
  { y: "2022", t: "Brand Storytelling", d: "Corporate films for Indian and German enterprises." },
  { y: "Today", t: "Alexier Productions", d: "A full-spectrum content house powering cinematic stories." },
];

export function Founder() {
  return (
    <section id="founder" className="relative py-32 overflow-hidden bg-ivory">
      <div className="absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gradient-gold opacity-10 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Meet The Founder —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee">
            Ankit Jain <span className="text-gradient-gold">(Kabeer)</span>
          </h2>
          <p className="mt-4 text-coffee/70 max-w-2xl mx-auto">Founder & Creative Force behind Alexier Productions.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-6 bg-gradient-gold rounded-3xl blur-2xl opacity-30 animate-glow-pulse" />
            <div className="relative rounded-3xl overflow-hidden gold-border shadow-cinematic">
              <img src={founder} alt="Ankit Jain Kabeer — Founder of Alexier Productions" className="w-full h-full object-cover object-top aspect-[3/4]" />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <div className="text-xs uppercase tracking-[0.4em] text-gold-soft">Founder • CEO</div>
                <div className="font-display text-3xl mt-1">Crafting Emotion in Every Frame</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.4em] text-gold-deep mb-4">— The Story —</div>
            <p className="font-display text-2xl md:text-3xl text-coffee leading-relaxed first-letter:font-bold first-letter:text-6xl first-letter:mr-2 first-letter:float-left first-letter:text-gradient-gold">
              Ankit Jain, known creatively as <span className="text-gradient-gold font-semibold">Kabeer</span>, is the visionary founder and creative force behind Alexier Productions. His journey began in 2015 in the world of entertainment, evolving through years as an RJ and Senior Managing Head in radio, where he mastered the art of voice and audience connection. By 2019, he had stepped into premium dubbing for Netflix and Amazon Prime, bridging stories across languages and cultures. As CEO of Premix Production from 2020, he led ambitious work across television, films, and web shows, before crafting cinematic brand narratives for Indian and German enterprises. Today, through Alexier Productions, Kabeer channels a decade of storytelling instinct into a full-spectrum content house — building emotion, artistry, and cinematic excellence into every frame.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
