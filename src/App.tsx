import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutSkillsSection from "./components/AboutSkillsSection";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AboutSkillsSection />
        <Projects />
        <Experience />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
