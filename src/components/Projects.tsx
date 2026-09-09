import { ArrowRight, Layers } from "lucide-react";
import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-surface-2/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="reveal mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Layers size={19} />
            </span>
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              Featured Projects
            </h2>
          </div>
          <a
            href="https://linktr.ee/rishav0020"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform hover:translate-x-0.5"
          >
            View All Projects on Linktree
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard project={project} key={project.title} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
