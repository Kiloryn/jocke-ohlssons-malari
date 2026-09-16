"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { projects, type ProjectItem } from "@/lib/content";

function ProjectCard({
  item,
  onOpen,
}: {
  item: ProjectItem;
  onOpen?: (trigger: HTMLButtonElement) => void;
}) {
  const isClickable = Boolean(item.imageSrc && onOpen);

  return (
    <button
      type="button"
      className={`group relative min-h-[180px] overflow-hidden rounded-[2px] border border-white/[0.08] bg-white/[0.07] text-left transition-colors hover:border-white/15 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-muted sm:min-h-[160px] md:min-h-0 ${item.gridSpan.md} ${item.gridSpan.sm ?? ""}`}
      onClick={(event) => onOpen?.(event.currentTarget)}
      disabled={!isClickable}
      aria-label={
        isClickable ? `Öppna bild: ${item.alt ?? item.label}` : undefined
      }
    >
      {item.imageSrc ? (
        <>
          <Image
            src={item.imageSrc}
            alt={item.alt ?? item.label}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:transform-none"
            style={{ objectPosition: item.position ?? "50% 50%" }}
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/15 to-transparent"
            aria-hidden
          />
          <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/[0.06]" aria-hidden />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-white/[0.04] transition-colors duration-500 group-hover:bg-white/[0.08]"
          aria-hidden
        />
      )}

      <div className="relative flex h-full min-h-[140px] items-end p-4 transition-transform duration-500 ease-out group-hover:scale-[1.02] md:min-h-0">
        <span className="text-sm font-medium text-white/85">{item.label}</span>
      </div>
    </button>
  );
}

export function Projects() {
  const items = projects.placeholders as unknown as ProjectItem[];
  const [active, setActive] = useState<ProjectItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  function openLightbox(item: ProjectItem, trigger: HTMLButtonElement) {
    lastTriggerRef.current = trigger;
    setActive(item);
    requestAnimationFrame(() => setLightboxOpen(true));
  }

  function closeLightbox() {
    setLightboxOpen(false);
    window.setTimeout(() => {
      setActive(null);
      lastTriggerRef.current?.focus();
    }, 180);
  }

  useEffect(() => {
    if (!active) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
        window.setTimeout(() => {
          setActive(null);
          lastTriggerRef.current?.focus();
        }, 180);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="projekt" className="bg-ink py-[5.5rem]">
      <div className="container-page">
        <span className="label text-accent-muted">{projects.label}</span>
        <h2 className="section-title text-white">{projects.title}</h2>
        <p className="mb-12 mt-4 text-[0.9rem] text-white/50">{projects.lead}</p>

        <div className="grid grid-cols-1 gap-2 auto-rows-[180px] sm:grid-cols-2 sm:auto-rows-[160px] md:grid-cols-12 md:auto-rows-[60px]">
          {items.map((item, i) => (
            <ProjectCard
              key={i}
              item={item}
              onOpen={
                item.imageSrc
                  ? (trigger) => openLightbox(item, trigger)
                  : undefined
              }
            />
          ))}
        </div>
      </div>

      {active?.imageSrc && (
        <div
          className={`fixed inset-0 z-[200] flex items-center justify-center px-4 py-6 backdrop-blur-sm transition-opacity duration-200 ease-out motion-reduce:transition-none ${
            lightboxOpen ? "bg-ink/85 opacity-100" : "bg-ink/85 opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt ?? active.label}
          onClick={closeLightbox}
        >
          <div
            ref={dialogRef}
            className={`relative w-full max-w-[1100px] overflow-hidden border border-white/15 bg-ink shadow-2xl transition-all duration-200 ease-out motion-reduce:transition-none ${
              lightboxOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-2 scale-[0.985] opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-[2px] bg-white/10 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Stäng"
              onClick={closeLightbox}
              ref={closeButtonRef}
            >
              <X size={18} />
            </button>

            <div className="relative h-[min(65vh,28rem)] min-h-[220px] w-full bg-black/10 sm:h-[70vh] sm:min-h-[320px]">
              <Image
                src={active.imageSrc}
                alt={active.alt ?? active.label}
                fill
                sizes="100vw"
                className={`object-contain transition-transform duration-300 ease-out motion-reduce:transition-none ${
                  lightboxOpen ? "scale-100" : "scale-[1.02]"
                }`}
                priority={false}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
