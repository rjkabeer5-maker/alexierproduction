const socials = [
  { name: "Instagram", icon: "IG" },
  { name: "YouTube", icon: "YT" },
  { name: "LinkedIn", icon: "IN" },
  { name: "Facebook", icon: "FB" },
  { name: "X", icon: "X" },
  { name: "WhatsApp", icon: "WA" },
];

const locations = [
  {
    city: "Mumbai",
    addr: "EXPRESS ZONE, B-812 Western Express Hwy, Malad East, near Oberoi Mall, Goregaon East, Mumbai, Maharashtra 400063",
  },
  {
    city: "Noida (HQ)",
    addr: "3rd Floor, Defence Enclave Business, Sector 44, Noida, Pin 201303",
  },
  {
    city: "Delhi",
    addr: "332A Basement, Gali No 6, West Guru Angad Nagar, Laxmi Nagar, East Delhi — near Nirman Vihar Metro Station",
  },
  {
    city: "Toronto · Canada",
    addr: "Yash Raj Films Canada INC. · 55 York Street, Suite 401, Toronto, ON M5J 1R7, Canada · +1 416-749-3586",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-gradient-champagne text-coffee">
      <div className="absolute inset-0 bg-cinematic-light opacity-60" />
      <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-gradient-gold opacity-20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-gradient-gold opacity-20 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.5em] text-gold-deep mb-3">— Let's Create —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-coffee">
            Tell Us Your <span className="text-gradient-gold">Story</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative p-10 rounded-3xl glass-light gold-border-glow shadow-luxe"
          >
            <div className="absolute -inset-1 bg-gradient-gold opacity-15 blur-2xl rounded-3xl -z-10" />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" />
              <Field label="Email" type="email" />
              <Field label="Phone" />
              <Field label="Project Type" />
            </div>
            <div className="mt-5">
              <label className="block text-xs uppercase tracking-[0.3em] text-gold-deep mb-2">Your Vision</label>
              <textarea rows={5} className="w-full bg-ivory/70 border border-gold/40 focus:border-gold focus:shadow-glow outline-none rounded-xl px-4 py-3 text-coffee placeholder:text-coffee/40 transition" placeholder="Tell us about the world you want to build..." />
            </div>
            <button type="submit" className="mt-6 w-full inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-gold text-coffee font-semibold uppercase tracking-widest text-sm shadow-gold hover:shadow-glow transition">
              Send Message →
            </button>
          </form>

          {/* details */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl glass-light gold-border-glow shadow-luxe">
              <div className="text-xs uppercase tracking-[0.4em] text-gold-deep mb-4">Reach Out</div>
              <div className="space-y-2 text-lg">
                <a href="tel:+916260633198" className="block text-coffee hover:text-gradient-gold transition">India · +91 6260 633 198</a>
                <a href="tel:+14167493586" className="block text-coffee hover:text-gradient-gold transition">Canada · +1 416-749-3586</a>
                <a href="mailto:kabeer@alexierproductions.com" className="block text-coffee hover:text-gradient-gold transition">kabeer@alexierproductions.com</a>
                <a href="mailto:Main@alexierproduction.com" className="block text-coffee hover:text-gradient-gold transition">Main@alexierproduction.com</a>
                <a href="mailto:Usinfo@alexierproduction.in" className="block text-coffee hover:text-gradient-gold transition">Usinfo@alexierproduction.in</a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {locations.map((l) => (
                <div key={l.city} className="p-6 rounded-2xl glass-light gold-border-glow shadow-luxe hover:shadow-glow transition">
                  <div className="font-display text-2xl text-gradient-gold">{l.city}</div>
                  <p className="text-coffee/75 text-sm mt-2 leading-relaxed">{l.addr}</p>
                </div>
              ))}
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-gold-deep mb-4">Follow the Journey</div>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    aria-label={s.name}
                    className="group flex h-14 w-14 items-center justify-center rounded-full glass-light hover:bg-gradient-gold text-gold-deep hover:text-coffee font-bold transition shadow-luxe hover:shadow-glow animate-glow-pulse"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.3em] text-gold-deep mb-2">{label}</label>
      <input
        type={type}
        className="w-full bg-ivory/70 border border-gold/40 focus:border-gold focus:shadow-glow outline-none rounded-xl px-4 py-3 text-coffee placeholder:text-coffee/40 transition"
        placeholder={`Your ${label.toLowerCase()}`}
      />
    </div>
  );
}
