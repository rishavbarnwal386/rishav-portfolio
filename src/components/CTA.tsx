import { Send, Mail, Link2 } from "lucide-react";
import { socials, contactEmail } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const iconMap = { linkedin: LinkedinIcon, github: GithubIcon, mail: Mail, link: Link2 };

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-10 sm:px-8 lg:px-10">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-border bg-surface px-8 py-14 shadow-sm sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/15" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-accent-warm/10" />

        <div className="relative max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            Let&apos;s talk about quality
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-text sm:text-4xl">
            Have a role or project that needs a quality-focused QA partner?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Open to QA opportunities, product discussions, and professional
            collaborations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-bg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              <Send size={16} />
              Get In Touch
            </a>

            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.icon === "mail" ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-text transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
