import { Photo } from "@/components/Photo";
import {
  services,
  type ServiceFrame,
  type ServiceImage,
  type ServiceItem,
} from "@/lib/content";

type ServiceGroup = (typeof services.groups)[number];

function frameItem(group: ServiceGroup, frame: ServiceFrame) {
  const item = group.items.find((entry) => entry.frame === frame);
  if (!item) {
    throw new Error(`Saknar bildram ${frame} i ${group.id}`);
  }
  return item;
}

function Frame({
  image,
  className,
  sizes,
}: {
  image: ServiceImage;
  className: string;
  sizes: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Photo
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: image.position ?? "50% 50%" }}
      />
    </div>
  );
}

function ServiceCopy({
  item,
  className,
}: {
  item: ServiceItem;
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="font-serif text-[1.35rem] leading-snug text-ink">
        {item.title}
      </h4>
      <p className="mt-2 max-w-[40ch] text-[0.95rem] leading-[1.7] text-ink-soft">
        {item.description}
      </p>
    </div>
  );
}

function IndoorSpread({ group }: { group: ServiceGroup }) {
  const lead = frameItem(group, "lead");
  const pair = frameItem(group, "pair");
  const wide = frameItem(group, "wide");
  const small = frameItem(group, "small");
  const [top, bottom] = pair.images;

  return (
    <div className="container-page border-t border-[var(--color-border)] pt-10 md:pt-14">
      <h3 className="font-serif text-[1.65rem] leading-none text-ink md:text-[1.85rem]">
        {group.title}
      </h3>
      <div className="mt-4 md:mt-5 md:grid md:grid-cols-12 md:gap-2">
        <Frame
          image={lead.images[0]}
          sizes="(min-width: 768px) 58vw, 100vw"
          className="aspect-[4/5] md:col-span-7 md:col-start-1 md:row-span-2 md:row-start-1 md:aspect-auto md:h-full"
        />
        <ServiceCopy
          item={lead}
          className="mt-4 mb-10 md:col-span-6 md:col-start-1 md:row-start-4 md:mb-0 md:mt-0 md:pr-8 md:pt-10"
        />

        <div className="grid grid-cols-2 gap-2 md:contents">
          <Frame
            image={top}
            sizes="(min-width: 768px) 38vw, 50vw"
            className="aspect-square md:col-span-5 md:col-start-8 md:row-start-1"
          />
          <Frame
            image={bottom}
            sizes="(min-width: 768px) 38vw, 50vw"
            className="aspect-square md:col-span-5 md:col-start-8 md:row-start-2"
          />
        </div>
        <ServiceCopy
          item={pair}
          className="mt-4 mb-10 md:col-span-6 md:col-start-7 md:row-start-4 md:mb-0 md:mt-0 md:pl-2 md:pt-10"
        />

        <Frame
          image={wide.images[0]}
          sizes="(min-width: 768px) 58vw, 100vw"
          className="aspect-[3/2] md:col-span-7 md:col-start-1 md:row-start-3"
        />
        <ServiceCopy
          item={wide}
          className="mt-4 mb-10 md:col-span-6 md:col-start-1 md:row-start-5 md:mb-0 md:mt-0 md:pr-8 md:pt-8"
        />

        <Frame
          image={small.images[0]}
          sizes="(min-width: 768px) 38vw, 100vw"
          className="aspect-[16/10] md:col-span-5 md:col-start-8 md:row-start-3 md:aspect-auto md:h-full"
        />
        <ServiceCopy
          item={small}
          className="mt-4 md:col-span-6 md:col-start-7 md:row-start-5 md:mt-0 md:pl-2 md:pt-8"
        />
      </div>
    </div>
  );
}

function OutdoorSpread({ group }: { group: ServiceGroup }) {
  const lead = frameItem(group, "lead");
  const side = frameItem(group, "small");

  return (
    <div className="container-page border-t border-[var(--color-border)] pt-10 md:pt-14">
      <h3 className="font-serif text-[1.65rem] leading-none text-ink md:text-[1.85rem]">
        {group.title}
      </h3>
      <div className="mt-4 md:mt-5 md:grid md:grid-cols-12 md:gap-2">
        <Frame
          image={lead.images[0]}
          sizes="(min-width: 768px) 64vw, 100vw"
          className="aspect-[16/9] md:col-span-8 md:col-start-1 md:row-start-1 md:aspect-[2/1]"
        />
        <ServiceCopy
          item={lead}
          className="mt-4 mb-10 md:col-span-6 md:col-start-1 md:row-start-2 md:mb-0 md:mt-0 md:pr-8 md:pt-10"
        />
        <Frame
          image={side.images[0]}
          sizes="(min-width: 768px) 32vw, 100vw"
          className="aspect-[4/3] md:col-span-4 md:col-start-9 md:row-start-1 md:aspect-auto md:h-full"
        />
        <ServiceCopy
          item={side}
          className="mt-4 md:col-span-6 md:col-start-7 md:row-start-2 md:mt-0 md:pl-2 md:pt-10"
        />
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="tjanster" className="overflow-x-clip bg-cream py-16 md:py-20">
      <div className="container-page mb-8 grid items-end gap-6 md:mb-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <span className="label">{services.label}</span>
          <h2 className="section-title">
            {services.title} <br />
            {services.titleLine2}
          </h2>
        </div>
        <p className="max-w-[34rem] text-[1.02rem] leading-[1.7] text-ink-soft md:col-span-5 md:col-start-8 md:pb-1">
          {services.lead}
        </p>
      </div>

      <div className="space-y-14 md:space-y-20">
        {services.groups.map((group) =>
          group.id === "inomhus" ? (
            <IndoorSpread key={group.id} group={group} />
          ) : (
            <OutdoorSpread key={group.id} group={group} />
          ),
        )}
      </div>
    </section>
  );
}
