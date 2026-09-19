import { Photo } from "@/components/Photo";
import { services } from "@/lib/content";

function ServiceImages({
  images,
}: {
  images: (typeof services.groups)[number]["items"][number]["images"];
}) {
  if (images.length === 1) {
    const image = images[0];
    return (
      <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-[min(28rem,52vw)]">
        <Photo
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 55vw, 100vw"
          className="object-cover"
          style={{ objectPosition: image.position ?? "50% 50%" }}
        />
      </div>
    );
  }

  return (
    <div className="grid h-[min(24rem,70vw)] grid-cols-[1.35fr_1fr] gap-2 md:h-[min(28rem,52vw)]">
      {images.slice(0, 2).map((image) => (
        <div key={image.src} className="relative min-h-0 overflow-hidden">
          <Photo
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 28vw, 50vw"
            className="object-cover"
            style={{ objectPosition: image.position ?? "50% 50%" }}
          />
        </div>
      ))}
    </div>
  );
}

export function Services() {
  return (
    <section id="tjanster" className="bg-cream py-16 md:py-20">
      <div className="container-page">
        <div className="mb-12 grid items-end gap-6 md:mb-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <span className="label">{services.label}</span>
            <h2 className="section-title">
              {services.title}
              <br />
              {services.titleLine2}
            </h2>
          </div>
          <p className="max-w-[34rem] text-[1.02rem] leading-[1.7] text-ink-soft md:col-span-5 md:col-start-8 md:pb-1">
            {services.lead}
          </p>
        </div>

        <div className="space-y-20">
          {services.groups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-8 font-serif text-[1.85rem] leading-tight text-ink">
                {group.title}
              </h3>
              <div className="space-y-14 md:space-y-16">
                {group.items.map((item, i) => {
                  const reverse = i % 2 === 1;
                  return (
                    <article
                      key={item.title}
                      className="grid items-center gap-6 md:grid-cols-12 md:gap-12"
                    >
                      <figure
                        className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}
                      >
                        <ServiceImages images={item.images} />
                      </figure>
                      <div className="md:col-span-5">
                        <h4 className="font-serif text-[1.45rem] leading-snug text-ink">
                          {item.title}
                        </h4>
                        <p className="mt-3 text-[0.95rem] leading-[1.7] text-ink-soft">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
