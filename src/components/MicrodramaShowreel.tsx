import poster from "@/assets/microdrama-poster.jpeg";
import microShowreel from "@/assets/microdrama-showreel.mp4";
import { VideoShowreel } from "./Projects";

export function MicrodramaShowreel() {
  return (
    <section id="microdrama-showreel" className="relative py-32 bg-gradient-champagne overflow-hidden">
      <div className="absolute inset-0 bg-cinematic-light opacity-50" />
      <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-gold opacity-20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-gold opacity-20 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Vertical Cinema —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee">
            Microdrama <span className="text-gradient-gold">Showreel</span>
          </h2>
          <p className="mt-5 text-coffee/65 max-w-2xl mx-auto text-lg">
            Bite-sized cinematic worlds. Engineered for mobile, made for emotion.
          </p>
        </div>

        <VideoShowreel
          src={microShowreel}
          poster={poster}
          label="Microdrama Showreel"
          eyebrow="— Now Streaming —"
          description="A glimpse into Alexier's vertical microdrama universe."
        />
      </div>
    </section>
  );
}
