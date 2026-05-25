import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent-light/80 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        aria-hidden
      />

      <div className="container-page relative flex min-h-[91vh] flex-col justify-center py-24 pt-32 md:py-28 md:pt-36">
        <p className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent">
          {hero.label}
        </p>
        <h1 className="mb-7 max-w-[780px] font-serif text-[clamp(3.2rem,7vw,6rem)] font-normal leading-[1.08] tracking-[-0.025em] text-ink">
          {hero.title}
          <br />
          <em className="text-accent">{hero.titleEmphasis}</em>
          {hero.titleSuffix}
        </h1>
        <p className="mb-10 max-w-[540px] text-[1.1rem] leading-[1.65] text-ink-soft">
          {hero.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#kontakt" className="btn-primary">
            Begär offert
          </a>
          <a href="#projekt" className="btn-ghost">
            Se projekt →
          </a>
        </div>
        <ul className="mt-12 flex max-w-[540px] flex-wrap gap-x-6 gap-y-2 border-t border-[var(--color-border)] pt-8">
          {hero.stats.map((stat) => (
            <li
              key={stat}
              className="text-[0.78rem] font-medium uppercase tracking-[0.12em] text-ink-soft"
            >
              {stat}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
