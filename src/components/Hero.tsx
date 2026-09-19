import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="grid md:min-h-[calc(88svh-4.5rem)] md:grid-cols-[minmax(0,11fr)_minmax(0,9fr)]">
      <div className="flex md:items-start">
        <div className="w-full px-6 py-16 sm:px-8 md:px-10 md:pt-[clamp(5.5rem,13svh,8rem)] md:pb-20 lg:pl-[max(2.5rem,calc((100vw-1100px)/2+2.5rem))] lg:pr-16">
          <p className="mb-5 text-[0.95rem] text-accent">{hero.kicker}</p>
          <h1 className="mb-6 max-w-[13ch] font-serif text-[clamp(2.6rem,6vw,5.2rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink">
            {hero.title}
          </h1>
          <p className="mb-9 max-w-[34ch] text-[1.05rem] leading-[1.65] text-ink-soft xl:text-[1.08rem]">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#kontakt" className="btn-primary">
              Begär offert
            </a>
            <a href="#projekt" className="btn-ghost px-5">
              Se projekt
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-[50svh] min-h-[22rem] max-h-[30rem] overflow-hidden bg-cream md:h-auto md:min-h-0 md:max-h-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-malare-tak.webp"
          alt="Målare som rollar ett tak under renovering"
          loading="eager"
          decoding="async"
          className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 brightness-[1.08] saturate-[0.88] [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] mix-blend-multiply md:right-0 md:left-auto md:translate-x-0 md:[mask-image:linear-gradient(to_right,transparent_0%,black_22%)]"
        />
      </div>
    </section>
  );
}
