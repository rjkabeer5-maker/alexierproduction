import logo from "@/assets/alexier-logo.jpeg";

export function Footer() {
  return (
    <footer className="relative bg-coffee text-ivory border-t border-gold/20 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Alexier" className="h-12 w-12 rounded-full ring-2 ring-gold/60" />
          <div>
            <div className="font-display text-xl text-gradient-gold font-bold">Alexier Productions</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">Crafting Stories That Connect</div>
          </div>
        </div>
        <div className="text-sm text-ivory/60">
          © {new Date().getFullYear()} Alexier Productions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
