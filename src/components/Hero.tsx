import { Image as ImageIcon } from "lucide-react";
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

      <div className="container-page relative min-h-[91vh] py-24 pt-32 md:py-28 md:pt-36">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
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

          {/* Draft “image zone” (real photos added later) */}
          <div className="hidden md:col-span-5 md:flex md:justify-end">
            <div
              className="placeholder-frame relative h-[520px] w-full max-w-[420px] overflow-hidden"
              role="img"
              aria-label="Projektfoto kommer"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-accent/10"
                aria-hidden
              />
              <ImageIcon
                className="relative h-10 w-10 stroke-accent opacity-45"
                strokeWidth={1.3}
                aria-hidden
              />
              <span className="placeholder-caption relative">Projektfoto kommer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
