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
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-gradient-dark text-ivory">
      <div className="absolute inset-0 bg-cinematic opacity-50" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.5em] text-gold mb-3">— Let's Create —</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold">
            Tell Us Your <span className="text-gradient-gold">Story</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative p-10 rounded-3xl glass shadow-cinematic"
          >
            <div className="absolute -inset-1 bg-gradient-gold opacity-20 blur-2xl rounded-3xl -z-10" />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" />
              <Field label="Email" type="email" />
              <Field label="Phone" />
              <Field label="Project Type" />
            </div>
            <div className="mt-5">
              <label className="block text-xs uppercase tracking-[0.3em] text-gold-soft mb-2">Your Vision</label>
              <textarea rows={5} className="w-full bg-coffee/40 border border-gold/30 focus:border-gold focus:shadow-glow outline-none rounded-xl px-4 py-3 text-ivory placeholder:text-ivory/40 transition" placeholder="Tell us about the world you want to build..." />
            </div>
            <button type="submit" className="mt-6 w-full inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-gold text-coffee font-semibold uppercase tracking-widest text-sm shadow-gold hover:shadow-glow transition">
              Send Message →
            </button>
          </form>

          {/* details */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl glass">
              <div className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Reach Out</div>
              <div className="space-y-2 text-lg">
                <a href="tel:+916260633198" className="block hover:text-gradient-gold transition">+91 6260 633 198</a>
                <a href="mailto:Alexierceo@gmail.com" className="block hover:text-gradient-gold transition">Alexierceo@gmail.com</a>
                <a href="mailto:Main@alexierproduction.com" className="block hover:text-gradient-gold transition">Main@alexierproduction.com</a>
              </div>
            </div>

            <div className="grid gap-4">
              {locations.map((l) => (
                <div key={l.city} className="p-6 rounded-2xl gold-border-dark hover:shadow-glow transition">
                  <div className="font-display text-2xl text-gradient-gold">{l.city}</div>
                  <p className="text-ivory/75 text-sm mt-2 leading-relaxed">{l.addr}</p>
                </div>
              ))}
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Follow the Journey</div>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    aria-label={s.name}
                    className="group flex h-14 w-14 items-center justify-center rounded-full glass hover:bg-gradient-gold hover:text-coffee text-gold font-bold transition shadow-cinematic hover:shadow-glow"
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
      <label className="block text-xs uppercase tracking-[0.3em] text-gold-soft mb-2">{label}</label>
      <input
        type={type}
        className="w-full bg-coffee/40 border border-gold/30 focus:border-gold focus:shadow-glow outline-none rounded-xl px-4 py-3 text-ivory placeholder:text-ivory/40 transition"
        placeholder={`Your ${label.toLowerCase()}`}
      />
    </div>
  );
}
