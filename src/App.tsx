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

// const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');`;

export default function App() {
  return (
    <div style={{ background: colors.bg, color: colors.text, fontFamily: "'Inter', sans-serif" }} >
      <Nav />
      <header className="max-w-5xl mx-auto px-6 pt-16 grid md:grid-cols-2 gap-10 items-center card-shine-effect">
        <Hero />
        <TerminalInfo />
      </header>

      <section id="socials" className="pt-15 pb-21">
        <Socials />
      </section>

      <section id="skills" className="max-w-5xl mx-auto px-6 py-14">
        <Skills />
      </section>

      <section id="experience" className="max-w-5xl mx-auto px-6 py-15">
        <Experiences />
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-6 py-14">
        <Projects />
      </section>

      <section id="education" className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-5">
        <Educations />
        <Languages />
      </section>

      <section id="hobies" className="max-w-5xl mx-auto px-6 py-14">
        <Hobbies />
      </section>

      <Footer />
      <ContactWidget />
    </div>
  );
}