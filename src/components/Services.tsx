import Image from "next/image";
import { services } from "@/lib/content";

function ServiceCard({
  title,
  description,
  images,
}: (typeof services.groups)[number]["items"][number]) {
  return (
    <article className="flex h-full flex-col overflow-hidden bg-white">
      <div
        className={`relative grid overflow-hidden ${
          images.length > 1 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {images.map((image) => (
          <div key={image.src} className="relative aspect-[4/3]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: image.position ?? "50% 50%" }}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <h4 className="mb-2 text-[0.95rem] font-medium text-ink">{title}</h4>
        <p className="text-[0.85rem] leading-[1.6] text-ink-soft">{description}</p>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="tjanster" className="bg-white py-[5.5rem]">
      <div className="container-page">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="min-w-0 shrink-0">
            <span className="label">{services.label}</span>
            <h2 className="section-title">
              {services.title}
              <br />
              {services.titleLine2}
            </h2>
          </div>
          <p className="max-w-[360px] text-[0.95rem] leading-[1.65] text-ink-soft sm:pt-[1.85rem]">
            {services.lead}
          </p>
        </div>

        <div className="space-y-12">
          {services.groups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-5 font-serif text-[1.35rem] text-ink">
                {group.title}
              </h3>
              <div
                className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2"
                role="list"
              >
                {group.items.map((item) => (
                  <div key={item.title} role="listitem" className="min-h-0">
                    <ServiceCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
