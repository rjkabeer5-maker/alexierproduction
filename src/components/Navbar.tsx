import { useEffect, useState } from "react";
import logo from "@/assets/alexier-logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#studio", label: "Studio" },
  { href: "#founder", label: "Founder" },
  { href: "#music", label: "Music" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 bg-ivory/85 backdrop-blur-xl border-b border-gold/30 shadow-cinematic" : "py-4 bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Alexier"
            className="h-14 w-14 object-contain"
          />
          <div className="leading-none">
            <div className="text-gradient-gold font-display text-xl font-bold tracking-wide">Alexier</div>
            <div className={`text-[10px] uppercase tracking-[0.3em] ${scrolled ? "text-coffee/70" : "text-ivory/90"}`}>Productions</div>
          </div>
        </a>
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm uppercase tracking-widest hover:text-gradient-gold transition relative group ${scrolled ? "text-coffee/85" : "text-ivory"}`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-gold group-hover:w-full transition-all duration-500" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-gold text-coffee font-semibold text-sm uppercase tracking-wider shadow-gold hover:shadow-glow transition-all"
        >
          Hire Us
        </a>
        <button
          onClick={() => setOpen((s) => !s)}
          className={`lg:hidden text-3xl ${scrolled ? "text-coffee" : "text-gold"}`}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden bg-ivory/95 backdrop-blur-xl border-t border-gold/30 shadow-cinematic">
          <ul className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block text-coffee uppercase tracking-widest text-sm py-2">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
