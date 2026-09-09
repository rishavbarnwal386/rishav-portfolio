import { ExternalLink } from "lucide-react";
import type { Project } from "../data/content";

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const { icon: Icon, iconBg, title, subtitle, description, tags, link } = project;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="reveal group block rounded-3xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-border-strong hover:shadow-lg"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${iconBg}`}>
          <Icon size={26} />
        </div>
        <ExternalLink
          size={18}
          className="mt-1 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100"
        />
      </div>

      <h3 className="mt-5 text-lg font-bold text-text">{title}</h3>
      <p className="mt-0.5 text-sm font-medium text-muted">{subtitle}</p>

      <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
