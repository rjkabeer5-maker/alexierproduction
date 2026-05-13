import { useEffect, useRef, useState } from "react";

/**
 * Soft cinematic ambient pad generated with Web Audio API.
 * Auto-starts on first user interaction (browsers block silent autoplay-with-sound).
 * A floating mute/unmute control is always visible.
 */
export function IntroMusic() {
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const nodesRef = useRef<OscillatorNode[]>([]);

  const start = () => {
    if (started || typeof window === "undefined") return;
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    // Cinematic chord: A2, E3, A3, C#4 (A major-ish pad)
    const freqs = [110, 164.81, 220, 277.18];
    const oscs: OscillatorNode[] = [];
    freqs.forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = i % 2 === 0 ? "sine" : "triangle";
      o.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = 0.18 / freqs.length;
      // gentle LFO for shimmer
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.1 + i * 0.07;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 0.04;
      lfo.connect(lfoGain).connect(g.gain);
      lfo.start();
      o.connect(g).connect(master);
      o.start();
      oscs.push(o);
    });

    // Soft fade in
    master.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 3);

    ctxRef.current = ctx;
    masterRef.current = master;
    nodesRef.current = oscs;
    setStarted(true);
  };

  useEffect(() => {
    const onFirst = () => {
      start();
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
    };
    window.addEventListener("pointerdown", onFirst, { once: true });
    window.addEventListener("keydown", onFirst, { once: true });
    return () => {
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
      try {
        nodesRef.current.forEach((o) => o.stop());
        ctxRef.current?.close();
      } catch {}
    };
  }, []);

  const toggle = () => {
    if (!started) start();
    const next = !muted;
    setMuted(next);
    const m = masterRef.current;
    const ctx = ctxRef.current;
    if (m && ctx) {
      m.gain.cancelScheduledValues(ctx.currentTime);
      m.gain.linearRampToValueAtTime(next ? 0 : 0.25, ctx.currentTime + 0.4);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={muted ? "Unmute background music" : "Mute background music"}
      className="fixed bottom-6 right-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full glass-light gold-border-glow shadow-luxe hover:shadow-glow text-gold-deep hover:text-coffee transition"
    >
      {muted ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </button>
  );
}
