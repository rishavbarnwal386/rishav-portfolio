import About from "./About";
import Skills from "./Skills";

export default function AboutSkillsSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div id="skills" className="scroll-mt-24 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <About />
          <Skills />
        </div>
      </div>
    </section>
  );
}
