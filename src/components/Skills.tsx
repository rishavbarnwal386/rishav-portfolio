import { Settings } from "lucide-react";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <div className="reveal rounded-3xl border border-border bg-surface p-7 shadow-sm sm:p-9">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Settings size={19} />
        </span>
        <h2 className="text-xl font-extrabold text-text sm:text-2xl">
          Technical Skills
        </h2>
      </div>

      <div className="space-y-5">
        {skillGroups.map(({ category, items }) => (
          <div key={category}>
            <p className="mb-2.5 text-xs font-bold uppercase tracking-wide text-primary">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-full bg-surface-2 px-3.5 py-1.5 text-sm font-medium text-text/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-bg hover:shadow-md hover:shadow-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
