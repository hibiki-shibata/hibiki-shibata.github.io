import { colors } from "./data/colors";
import Nav from "./components/layout/Nav";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import TerminalInfo from "./components/sections/TerminalInfo";
import Experiences from "./components/sections/Experiences";
import Projects from "./components/sections/Projects";
import Educations from "./components/sections/Educations";
import Languages from "./components/sections/Languages";
import Hobbies from "./components/sections/Hobbies";
import Footer from "./components/layout/Footer";
import ContactWidget from "./components/layout/ContactWidget";
import Socials from "./components/sections/Socials";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');`;

export default function App() {
  return (
    <div style={{ background: colors.bg, color: colors.text, fontFamily: "'Inter', sans-serif" }} className="min-h-screen w-full">
      <style>{`
        ${FONT_IMPORT}
        @keyframes blink { 50% { opacity: 0; } }
        html { scroll-behavior: smooth; }
        ::selection { background: ${colors.accent}; color: ${colors.bgAlt}; }
      `}</style>

      {/* Nav */}
      <Nav />

      <header className="max-w-5xl mx-auto px-6 pt-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Hero */}
        <Hero />
        {/* <Terminal_ /> */}
        <TerminalInfo />
      </header>
        <Socials/>

      <section id="skills" className="max-w-5xl mx-auto px-6 py-14">
        {/* Skills */}
        <Skills />
      </section>

      <section id="experience" className="max-w-5xl mx-auto px-6 py-15">
        {/* Experience */}
        <Experiences />
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-6 py-14">
        {/* Projects */}
        <Projects />
      </section>

      <section id="education" className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-5">
        {/* Education + Languages */}
        <Educations />
        <Languages />
      </section>

      {/* Hobbies */}
      <section id="hobies" className="max-w-5xl mx-auto px-6 py-14">
        <Hobbies />
      </section>

      {/* Footer / Contact */}
      <Footer />
      <ContactWidget />
    </div>
  );
}