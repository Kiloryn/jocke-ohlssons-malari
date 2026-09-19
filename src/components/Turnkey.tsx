import { turnkey } from "@/lib/content";

export function Turnkey() {
  return (
    <section className="border-y border-[var(--color-border)] bg-white py-12 md:py-14">
      <div className="container-page md:grid md:grid-cols-12 md:items-end md:gap-12">
        <div className="md:col-span-5">
          <h2 className="font-serif text-[1.7rem] leading-[1.2] text-ink md:text-[1.9rem]">
            {turnkey.title}
          </h2>
          <p className="mt-3 max-w-[42ch] text-[0.95rem] leading-[1.65] text-ink-soft">
            {turnkey.lead}
          </p>
        </div>
        <ul className="mt-8 flex flex-col gap-4 md:col-span-7 md:mt-0 md:flex-row md:gap-10">
          {turnkey.items.map((item) => (
            <li key={item.title}>
              <p className="font-serif text-[1.15rem] text-ink">{item.title}</p>
              <p className="mt-1 text-[0.88rem] leading-[1.55] text-ink-soft">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
