import { projects } from "@/lib/content";

const spanClasses = {
  large: "md:col-span-7 md:row-span-6",
  medium: "md:col-span-5 md:row-span-4",
  small: "md:col-span-2 md:row-span-4",
  wide: "md:col-span-8 md:row-span-4",
} as const;

export function Projects() {
  return (
    <section id="projekt" className="bg-ink py-[5.5rem]">
      <div className="container-page">
        <span className="label text-accent-muted">{projects.label}</span>
        <h2 className="section-title text-white">{projects.title}</h2>
        <p className="mb-12 mt-4 text-[0.9rem] text-white/50">{projects.lead}</p>

        <div className="grid auto-rows-[60px] grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-12">
          {projects.placeholders.map((item, i) => {
            const layout =
              i === 0
                ? spanClasses.large
                : i === 1
                  ? spanClasses.medium
                  : i === 2 || i === 3
                    ? spanClasses.small
                    : i === 4
                      ? "md:col-span-4 md:row-span-4"
                      : spanClasses.wide;

            return (
              <div
                key={`${item.label}-${i}`}
                className={`flex min-h-[140px] items-end rounded-[3px] border border-white/[0.08] bg-white/[0.07] p-4 text-[0.75rem] text-white/25 transition-colors hover:bg-white/10 md:min-h-0 ${layout} ${
                  i === 0 ? "sm:col-span-2" : ""
                } ${i === 5 ? "sm:col-span-2" : ""}`}
              >
                <span>
                  {item.label}
                  <span className="block text-white/15">Bild kommer</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
