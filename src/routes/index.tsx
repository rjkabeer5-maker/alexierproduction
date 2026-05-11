import { createFileRoute } from "@tanstack/react-router";
import { IntroOverlay } from "@/components/IntroOverlay";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyChoose } from "@/components/WhyChoose";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Workflow } from "@/components/Workflow";
import { Studio } from "@/components/Studio";
import { MicrodramaShowcase } from "@/components/MicrodramaShowcase";
import { BehindTheScenes } from "@/components/BehindTheScenes";
import { Founder } from "@/components/Founder";
import { Stats } from "@/components/Stats";
import { Reviews } from "@/components/Reviews";
import { Music } from "@/components/Music";
import { Sponsors } from "@/components/Sponsors";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexier Productions — Cinematic Storytelling Studio" },
      { name: "description", content: "Premium microdrama, fiction, AI content, dubbing & full-spectrum cinematic production. Crafting stories that connect & engage." },
      { property: "og:title", content: "Alexier Productions — Cinematic Storytelling Studio" },
      { property: "og:description", content: "Premium microdrama, fiction, AI content, dubbing & full-spectrum cinematic production." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-ivory text-coffee overflow-x-hidden">
      <IntroOverlay />
      <Navbar />
      <Hero />
      <WhyChoose />
      <Services />
      <About />
      <Projects />
      <Stats />
      <Workflow />
      <MicrodramaShowcase />
      <Studio />
      <BehindTheScenes />
      <Founder />
      <Reviews />
      <Music />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  );
}
