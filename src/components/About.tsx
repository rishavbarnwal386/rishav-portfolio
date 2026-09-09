import { User } from "lucide-react";
import { aboutFeatures } from "../data/content";

export default function About() {
  return (
    <div className="reveal rounded-3xl border border-border bg-surface p-7 shadow-sm sm:p-9">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <User size={19} />
        </span>
        <h2 className="text-xl font-extrabold text-text sm:text-2xl">About Me</h2>
      </div>

      <p className="text-[15px] leading-relaxed text-muted sm:text-base">
        I&apos;m a QA professional with 4+ years of experience testing web,
        mobile, and API-based products. My work spans the full QA
        lifecycle&mdash;understanding requirements, designing test scenarios,
        executing functional and regression cycles, and managing defects
        through to closure.
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
        Beyond test execution, I focus on identifying product risks early and
        validating that releases are stable before they reach users. I work
        closely with developers and product teams throughout the SDLC to keep
        quality a shared responsibility, not a final checkpoint.
      </p>

      <div className="mt-7 grid grid-cols-2 gap-5 border-t border-border pt-6 sm:grid-cols-4">
        {aboutFeatures.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-success-soft text-success">
              <Icon size={19} />
            </span>
            <span className="text-xs font-semibold text-muted sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
