import { Building2, Heart, Home, Layers } from "lucide-react";
import { services } from "@/lib/content";

const icons = {
  home: Home,
  building: Building2,
  layers: Layers,
  heart: Heart,
} as const;

export function Services() {
  return (
    <section id="tjanster" className="bg-white py-[5.5rem]">
      <div className="container-page">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <span className="label">{services.label}</span>
            <h2 className="section-title">
              {services.title}
              <br />
              {services.titleLine2}
            </h2>
          </div>
          <p className="max-w-[360px] text-[0.95rem] text-ink-soft">
            {services.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 border border-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4 [&>div]:border-b [&>div]:border-[var(--color-border)] sm:[&>div:nth-child(odd)]:border-r lg:[&>div]:border-b-0 lg:[&>div:not(:last-child)]:border-r [&>div:last-child]:border-b-0 sm:[&>div:nth-last-child(-n+2)]:border-b-0 lg:[&>div]:border-b-0">
          {services.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.title}
                className="group p-9 transition-colors hover:bg-cream focus-within:bg-cream"
              >
                <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-accent-light transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5 stroke-accent" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-[0.95rem] font-medium">{item.title}</h3>
                <p className="text-[0.85rem] leading-[1.6] text-ink-soft">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
