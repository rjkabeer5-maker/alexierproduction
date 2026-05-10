import logo from "@/assets/alexier-logo.jpeg";

export function Footer() {
  return (
    <footer className="relative bg-gradient-champagne text-coffee border-t border-gold/30 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="logo-shine inline-block animate-logo-float">
            <img src={logo} alt="Alexier" className="logo-transparent h-14 w-14 object-contain" />
          </span>
          <div>
            <div className="font-display text-xl text-gradient-gold font-bold">Alexier Productions</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-coffee/60">Crafting Stories That Connect</div>
          </div>
        </div>
        <div className="text-sm text-coffee/60">
          © {new Date().getFullYear()} Alexier Productions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
