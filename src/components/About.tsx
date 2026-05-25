import { User } from "lucide-react";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="om" className="bg-cream py-[5.5rem]">
      <div className="container-page">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <span className="label">{about.label}</span>
            <h2 className="section-title">
              {about.title}
              <br />
              {about.titleLine2}
            </h2>
            <div className="my-6 space-y-4 text-ink-soft leading-[1.75]">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {about.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-accent-light px-[0.9rem] py-[0.35rem] text-[0.78rem] font-medium text-accent-dark"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div
            className="flex h-[280px] flex-col items-center justify-center gap-2 rounded-[2px] border border-accent/10 bg-accent-light shadow-sm md:h-[440px]"
            role="img"
            aria-label={about.photoPlaceholder}
          >
            <User className="h-9 w-9 stroke-accent opacity-50" strokeWidth={1.2} />
            <span className="text-[0.8rem] text-accent opacity-60">
              {about.photoPlaceholder}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
