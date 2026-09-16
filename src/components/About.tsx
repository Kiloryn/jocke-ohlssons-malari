import Image from "next/image";
import { about, site } from "@/lib/content";

export function About() {
  return (
    <section id="om" className="bg-cream py-[5.5rem]">
      <div className="container-page">
        <div className="max-w-[640px]">
          <span className="label">{about.label}</span>
          <h2 className="section-title">
            {about.title}
            <br />
            {about.titleLine2}
          </h2>
          <div className="my-6 space-y-4 text-ink-soft leading-[1.75]">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {about.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-accent-light px-[0.9rem] py-[0.35rem] text-[0.78rem] font-medium text-accent-dark"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <figure className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2px] border border-[var(--color-border)] bg-accent-light sm:aspect-[2.3/1] sm:min-h-[220px]">
          <Image
            src={site.teamPhoto.src}
            alt={site.teamPhoto.alt}
            fill
            sizes="(min-width: 1100px) 1100px, 100vw"
            className="object-cover"
            style={{ objectPosition: site.teamPhoto.position }}
          />
        </figure>
      </div>
    </section>
  );
}
