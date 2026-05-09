import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 6, suffix: "+", label: "Years of Excellence" },
  { value: 11, suffix: "", label: "Craft Verticals" },
  { value: 500, suffix: "+", label: "Stories Crafted" },
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
