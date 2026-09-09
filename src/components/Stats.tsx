import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-2 max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className="reveal flex flex-col items-start gap-3 rounded-3xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-md sm:p-6"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-12 sm:w-12">
              <Icon size={22} />
            </span>
            <span className="text-2xl font-extrabold text-text sm:text-3xl">
              {value}
            </span>
            <span className="text-xs font-medium text-muted sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
