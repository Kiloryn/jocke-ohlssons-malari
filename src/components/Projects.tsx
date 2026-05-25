import { projects } from "@/lib/content";

const spanClasses = {
  large: "md:col-span-7 md:row-span-6",
  medium: "md:col-span-5 md:row-span-4",
  small: "md:col-span-2 md:row-span-4",
  wide: "md:col-span-8 md:row-span-4",
} as const;

type Placeholder = (typeof projects.placeholders)[number];

function getLayoutClass(index: number): string {
  if (index === 0) return spanClasses.large;
  if (index === 1) return spanClasses.medium;
  if (index === 2 || index === 3) return spanClasses.small;
  if (index === 4) return "md:col-span-4 md:row-span-4";
  return spanClasses.wide;
}

function getResponsiveSpan(index: number): string {
  if (index === 0 || index === 5) return "sm:col-span-2";
  return "";
}

function ProjectCard({
  item,
  layoutClass,
  responsiveSpan,
}: {
  item: Placeholder;
  layoutClass: string;
  responsiveSpan: string;
}) {
  return (
    <article
      className={`group relative min-h-[140px] overflow-hidden rounded-[2px] border border-white/[0.08] bg-white/[0.07] transition-colors hover:border-white/15 md:min-h-0 ${layoutClass} ${responsiveSpan}`}
    >
      {/* Ersätts med next/image: className="absolute inset-0 h-full w-full object-cover" */}
      <div
        className="absolute inset-0 bg-white/[0.04] transition-colors duration-500 group-hover:bg-white/[0.08]"
        aria-hidden
      />

      <div className="relative flex h-full min-h-[140px] items-end p-4 transition-transform duration-500 ease-out group-hover:scale-[1.02] md:min-h-0">
        <span className="text-sm font-medium text-white/85">
          {item.label}
          <span className="mt-0.5 block text-[0.8rem] font-normal text-white/40">
            Bild kommer
          </span>
        </span>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projekt" className="bg-ink py-[5.5rem]">
      <div className="container-page">
        <span className="label text-accent-muted">{projects.label}</span>
        <h2 className="section-title text-white">{projects.title}</h2>
        <p className="mb-12 mt-4 text-[0.9rem] text-white/50">{projects.lead}</p>

        <div className="grid auto-rows-[60px] grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-12">
          {projects.placeholders.map((item, i) => (
            <ProjectCard
              key={`${item.label}-${i}`}
              item={item}
              layoutClass={getLayoutClass(i)}
              responsiveSpan={getResponsiveSpan(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
