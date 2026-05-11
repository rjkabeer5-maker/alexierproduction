import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "M+", label: "Audience Reach" },
  { value: 250, suffix: "Hr+", label: "Production Hours" },
  { value: 25, suffix: "+", label: "Verticals · US" },
  { value: 7, suffix: "+", label: "Verticals · India" },
  { value: 8, suffix: "+", label: "Languages" },
  { value: 11, suffix: "", label: "Production Pipelines" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1800;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-display text-6xl md:text-7xl font-bold text-gradient-gold">
      {n}
      {suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-24 bg-gradient-cream text-coffee overflow-hidden">
      <div className="absolute inset-0 bg-cinematic-light opacity-50" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Audience & Scale —</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-coffee">
            Built At <span className="text-gradient-gold">Global Scale</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative text-center p-8 rounded-2xl glass-light gold-border-glow shadow-luxe hover:shadow-glow transition group"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.35em] text-coffee/70">
                {s.label}
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-gold opacity-0 group-hover:opacity-10 transition pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
