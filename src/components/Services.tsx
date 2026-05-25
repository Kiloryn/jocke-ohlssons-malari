import { Building2, Heart, Home, Layers } from "lucide-react";
import { services } from "@/lib/content";

const icons = {
  home: Home,
  building: Building2,
  layers: Layers,
  heart: Heart,
} as const;

type ServiceItem = (typeof services.items)[number];

function ServiceCard({ item }: { item: ServiceItem }) {
  const Icon = icons[item.icon];

  return (
    <article className="group flex h-full flex-col bg-white p-9 transition-colors hover:bg-cream focus-within:bg-cream">
      <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-accent-light transition-transform group-hover:scale-105">
        <Icon className="h-5 w-5 stroke-accent" strokeWidth={1.5} aria-hidden />
      </div>
      <h3 className="mb-2 text-[0.95rem] font-medium text-ink">{item.title}</h3>
      <p className="text-[0.85rem] leading-[1.6] text-ink-soft">
        {item.description}
      </p>
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

        <div
          className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {services.items.map((item) => (
            <div key={item.title} role="listitem" className="min-h-0">
              <ServiceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
