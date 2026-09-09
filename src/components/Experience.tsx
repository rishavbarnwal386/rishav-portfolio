import { Briefcase, CheckCircle2 } from "lucide-react";

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
}

const experience: ExperienceEntry[] = [
  {
    role: "Senior Associate QA",
    company: "OrangeMantra Pvt Ltd",
    period: "Apr 2026 – Present",
    current: true,
    points: [
      "Owned functional, regression, integration, smoke, sanity, and compatibility testing across web and mobile applications, ensuring critical workflows met release requirements.",
      "Managed the complete defect lifecycle using JIRA and GitLab, from identification and prioritization through retesting and closure.",
      "Executed API testing with Postman to validate service integrations ahead of release.",
      "Ran performance checks using Lighthouse to flag regressions in speed and stability.",
      "Leveraged AI-assisted workflows for test case generation, requirement analysis, and defect investigation to improve QA planning efficiency.",
    ],
  },
  {
    role: "QA Engineer",
    company: "Tec-Sense Innovations Pvt Ltd",
    period: "Apr 2025 – Jan 2026",
    points: [
      "Executed functional, regression, and API testing across web and mobile workflows, validating critical business scenarios and service integrations.",
      "Managed defects end-to-end using JIRA and GitLab, coordinating retesting cycles with developers ahead of releases.",
      "Applied Agile/Scrum practices throughout the STLC to support consistent, on-schedule delivery.",
    ],
  },
  {
    role: "Software Test Engineer",
    company: "Qualimatrix Technology Pvt Ltd (Contract-Based Project)",
    period: "Sep 2024 – Dec 2024",
    points: [
      "Owned functional and regression testing for a contract engagement, validating core workflows ahead of each release cycle.",
      "Investigated edge cases through exploratory and compatibility testing to surface risks outside scripted test cases.",
      "Documented and tracked defects to closure, coordinating with developers on fixes and retests.",
    ],
  },
  {
    role: "Jr Software Tester",
    company: "Testwell Technology Pvt Ltd",
    period: "Feb 2022 – May 2024",
    points: [
      "Built foundational QA skills across manual, API, and mobile testing, using Postman and BrowserStack for cross-device validation.",
      "Designed and executed test cases under senior guidance, contributing to defect lifecycle management.",
      "Supported smoke, sanity, and regression testing within Agile/Scrum delivery cycles.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        <div className="reveal mb-10 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Briefcase size={19} />
          </span>
          <h2 className="text-2xl font-extrabold text-text sm:text-3xl">Experience</h2>
        </div>

        <ol className="relative pl-8">
          {/* animated connecting line */}
          <div className="reveal-line absolute left-0 top-2 bottom-2 w-0.5 bg-border" />

          {experience.map((item, i) => (
            <li
              key={i}
              className="reveal relative mb-10 last:mb-0"
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              <span
                className={`reveal-dot absolute -left-[41px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border-4 border-bg ${
                  item.current ? "bg-primary animate-live-pulse" : "bg-primary/50"
                }`}
                style={{ transitionDelay: `${i * 140 + 150}ms` }}
              />

              <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-md sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-text">{item.role}</h3>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-0.5 text-[11px] font-semibold text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success animate-live-pulse" />
                      Currently working
                    </span>
                  )}
                  <span className="ml-auto text-sm font-semibold text-primary">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-muted">{item.company}</p>
                <ul className="mt-4 space-y-2.5">
                  {item.points.map((point, j) => (
                    <li
                      key={point}
                      className="reveal flex gap-2.5 text-sm leading-relaxed text-muted"
                      style={{ transitionDelay: `${i * 140 + 250 + j * 90}ms` }}
                    >
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
