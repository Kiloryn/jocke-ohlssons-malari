import { Photo } from "@/components/Photo";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-no-repeat opacity-[0.18]"
        style={{
          backgroundImage: "url(/Hero-color-background.webp)",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
        }}
        aria-hidden
      />
      <div className="container-page relative py-16 pt-20 md:min-h-[91vh] md:py-28 md:pt-36">
        <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-12">
          <div className="md:col-span-7">
            <p className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent md:mb-6">
              {hero.label}
            </p>
            <h1 className="mb-5 max-w-[780px] font-serif text-[clamp(2.55rem,9vw,6rem)] font-normal leading-[1.08] tracking-[-0.025em] text-ink md:mb-7">
              {hero.title}
              <br />
              <em className="text-accent">{hero.titleEmphasis}</em>{hero.titleSuffix}
            </h1>
            <p className="mb-8 max-w-[540px] text-[1.05rem] leading-[1.65] text-ink-soft md:mb-10 md:text-[1.1rem]">
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <a href="#kontakt" className="btn-primary">
                Begär offert
              </a>
              <a href="#projekt" className="btn-ghost px-5 md:px-8">
                Se projekt →
              </a>
            </div>
            <ul className="mt-8 flex max-w-[540px] flex-wrap gap-x-5 gap-y-2 border-t border-[var(--color-border)] pt-6 md:mt-12 md:gap-x-6 md:pt-8">
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

          <div className="md:col-span-5 md:flex md:justify-end">
            <div className="relative h-[280px] w-full max-w-[520px] overflow-hidden rounded-[2px] border border-[var(--color-border)] shadow-sm sm:h-[360px] md:h-[520px]">
              <Photo
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
