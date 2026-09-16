import { Droplets, Hammer, Zap } from "lucide-react";
import { turnkey } from "@/lib/content";

const icons = [Hammer, Zap, Droplets] as const;

export function Turnkey() {
  return (
    <section className="border-y border-[var(--color-border)] bg-cream py-[4.5rem]">
      <div className="container-page">
        <span className="label">{turnkey.label}</span>
        <h2 className="section-title max-w-[18ch]">{turnkey.title}</h2>
        <p className="mt-4 max-w-[540px] text-[0.95rem] leading-[1.65] text-ink-soft">
          {turnkey.lead}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {turnkey.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li
                key={item.title}
                className="rounded-[2px] border border-[var(--color-border)] bg-white p-6"
              >
                <Icon
                  className="mb-3 h-5 w-5 stroke-accent"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="text-[0.95rem] font-medium text-ink">{item.title}</p>
                <p className="mt-1 text-[0.85rem] leading-[1.55] text-ink-soft">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
