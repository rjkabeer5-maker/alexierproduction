import { createFileRoute } from "@tanstack/react-router";
import { IntroOverlay } from "@/components/IntroOverlay";
import { IntroMusic } from "@/components/IntroMusic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyChoose } from "@/components/WhyChoose";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Stats } from "@/components/Stats";
import { ViralProjects } from "@/components/ViralProjects";
import { Workflow } from "@/components/Workflow";
import { MicrodramaShowcase } from "@/components/MicrodramaShowcase";

import { OriginalFiction } from "@/components/OriginalFiction";
import { CastingStory } from "@/components/CastingStory";
import { Studio } from "@/components/Studio";
import { BehindTheScenes } from "@/components/BehindTheScenes";
import { OutOfCountry } from "@/components/OutOfCountry";
import { Founder } from "@/components/Founder";
import { Awards } from "@/components/Awards";
import { Reviews } from "@/components/Reviews";
import { Music } from "@/components/Music";
import { Sponsors } from "@/components/Sponsors";
import { Invitation } from "@/components/Invitation";
import { Careers } from "@/components/Careers";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexier Productions — India's Premium OTT Partner" },
      { name: "description", content: "Cinema-level emotion. Digital-first storytelling. Premium microdrama, OTT fiction, dubbing & localization across 8+ languages with offices in India and Canada." },
      { property: "og:title", content: "Alexier Productions — India's Premium OTT Partner" },
      { property: "og:description", content: "From script to screen — fully managed. Premium OTT production, microdrama and localization." },
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
      <Projects />
      <Stats />
      <WhyChoose />
      <Services />
      <ViralProjects />
      <OriginalFiction />
      <MicrodramaShowcase />
      <CastingStory />
      <About />
      <Workflow />
      <Studio />
      <BehindTheScenes />
      <OutOfCountry />
      <Founder />
      <Awards />
      <Sponsors />
      <Reviews />
      <Music />
      <Invitation />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}
