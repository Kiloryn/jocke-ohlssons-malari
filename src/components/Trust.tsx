import { Leaf, MapPin, Shield } from "lucide-react";
import { trust } from "@/lib/content";

const trustIcons = [Shield, MapPin, Leaf];

export function Trust() {
  return (
    <section className="bg-cream py-[5.5rem]">
      <div className="container-page">
        <span className="label">{trust.label}</span>
        <h2 className="section-title">{trust.title}</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trust.items.map((item, i) => {
            const Icon = trustIcons[i];
            return (
              <article
                key={item.title}
                className="rounded-[2px] border border-[var(--color-border)] bg-white p-8"
              >
                <Icon className="mb-4 h-6 w-6 stroke-accent" strokeWidth={1.5} />
                <h3 className="text-[0.95rem] font-medium">{item.title}</h3>
                <p className="mt-2 text-[0.85rem] leading-[1.6] text-ink-soft">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
