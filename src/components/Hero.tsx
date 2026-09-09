import { FileText, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10">
        {/* Left column */}
        <div className="reveal order-2 lg:order-1">
          <span className="inline-flex items-center rounded-full bg-primary-dark px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-bg">
            Senior Associate QA
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] tracking-tight text-text sm:text-5xl lg:text-5xl xl:text-6xl">
            Driving <span className="text-primary">quality</span> from
            requirement to release.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Senior QA professional with 4+ years of experience across web,
            mobile, and API testing. I turn complex requirements into
            effective test strategies, uncover product risks early, and help
            teams deliver reliable, release-ready software.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-bg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:text-bg hover:shadow-xl hover:shadow-primary/25"
            >
              <Briefcase size={16} />
              Let&apos;s Connect
            </a>
            <a
              href="/resume-rishav-kumar.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border-2 border-border-strong bg-transparent px-6 py-3.5 text-sm font-semibold text-text transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface-2"
            >
              <FileText size={16} />
              Download CV
            </a>
          </div>
        </div>

        {/* Right column: circular teal accent + professional headshot */}
        <div className="reveal order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px]">
            {/* decorative teal ring, offset behind the photo */}
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-full bg-primary/25" />
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-primary/10" />

            <img
              src="/rishav-professional.jpg"
              alt="Rishav Kumar, Senior Associate QA"
              className="relative z-10 aspect-square w-full rounded-full border-4 border-surface object-cover shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
              width={900}
              height={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
