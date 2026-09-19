import { site } from "@/lib/content";

export function CtaBand() {
  return (
    <section className="border-y border-[var(--color-border)] bg-accent-light">
      <div className="container-page flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
        <div>
          <h2 className="font-serif text-[1.75rem] leading-[1.15] text-ink md:text-[2rem]">
            Nyfiken på vad ditt projekt skulle kosta?
          </h2>
          <p className="mt-2 max-w-[46ch] text-[0.95rem] leading-[1.6] text-ink-soft">
            Berätta kort om jobbet — vi återkommer inom ett arbetsdygn.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <a href="#kontakt" className="btn-primary">
            Begär offert
          </a>
          <a href={site.phoneHref} className="btn-ghost">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
