import { Photo } from "@/components/Photo";
import { about, site } from "@/lib/content";

export function About() {
  return (
    <section id="om" className="bg-cream py-[5.5rem]">
      <div className="container-page grid items-center gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <span className="label">{about.label}</span>
            <h2 className="section-title">
              {about.title}{" "}
              <br />
              {about.titleLine2}
            </h2>
          <div className="mt-6 space-y-4 text-[0.98rem] leading-[1.75] text-ink-soft">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <figure className="relative aspect-[16/10] overflow-hidden md:col-span-7 md:min-h-[22rem]">
          <Photo
            src={site.teamPhoto.src}
            alt={site.teamPhoto.alt}
            fill
            sizes="(min-width: 1100px) 640px, 100vw"
            className="object-cover"
            style={{ objectPosition: site.teamPhoto.position }}
          />
        </figure>
      </div>
    </section>
  );
}
