import logo from "@/assets/alexier-logo.jpeg";

export function Footer() {
  return (
    <footer className="relative bg-gradient-champagne text-coffee border-t border-gold/30 py-14 overflow-hidden">
      <div className="absolute inset-0 bg-cinematic-light opacity-40 pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[40rem] rounded-full bg-gradient-gold opacity-15 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 relative flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="logo-halo logo-shine inline-flex animate-logo-float h-16 w-16">
            <img src={logo} alt="Alexier" className="logo-transparent h-full w-full object-contain" />
          </span>
          <div>
            <div className="font-display text-xl text-gradient-gold font-bold">Alexier Productions</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-coffee/60">India's Premium OTT Partner</div>
          </div>
        </div>
        <div className="text-sm text-coffee/60">
          © 2021 Alexier Productions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
