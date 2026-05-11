import { useEffect, useState } from "react";

export function Particles({ count = 18, className = "" }: { count?: number; className?: string }) {
  const [items, setItems] = useState<Array<{ left: number; dur: number; delay: number; scale: number }>>([]);

  useEffect(() => {
    setItems(
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        dur: 8 + Math.random() * 8,
        delay: Math.random() * 5,
        scale: 0.5 + Math.random() * 1.4,
      }))
    );
  }, [count]);

  return (
    <>
      {items.map((p, i) => (
        <span
          key={i}
          className={`particle ${className}`}
          style={{
            left: `${p.left}%`,
            bottom: 0,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            transform: `scale(${p.scale})`,
          }}
        />
      ))}
    </>
  );
}
