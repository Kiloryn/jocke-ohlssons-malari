import { projects } from "@/lib/content";

type Placeholder = (typeof projects.placeholders)[number];

function ProjectCard({ item }: { item: Placeholder }) {
  return (
    <article
      className={`group relative min-h-[140px] overflow-hidden rounded-[2px] border border-white/[0.08] bg-white/[0.07] transition-colors hover:border-white/15 md:min-h-0 ${item.gridSpan.md} ${item.gridSpan.sm ?? ""}`}
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
            <ProjectCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
