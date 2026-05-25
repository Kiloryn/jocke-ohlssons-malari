"use client";

import { useState } from "react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { contact, site } from "@/lib/content";

export function Contact() {
  const [notice, setNotice] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNotice(true);
  }

  return (
    <section id="kontakt" className="bg-white py-[5.5rem]">
      <div className="container-page">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <span className="label">{contact.label}</span>
            <h2 className="section-title">
              {contact.title}
              <br />
              {contact.titleLine2}
            </h2>
            <p className="my-4 mb-10 text-[0.95rem] text-ink-soft">{contact.lead}</p>

            <div className="flex flex-col">
              {contact.rows.map((row) => (
                <div
                  key={row.key}
                  className="flex items-center justify-between border-b border-[var(--color-border)] py-[1.1rem] first:border-t"
                >
                  <span className="text-[0.72rem] uppercase tracking-[0.12em] text-ink-soft">
                    {row.key}
                  </span>
                  {"href" in row && row.href ? (
                    <a
                      href={row.href}
                      className="flex items-center gap-2 text-[0.9rem] font-medium text-ink hover:text-accent"
                      target={row.key === "Instagram" ? "_blank" : undefined}
                      rel={
                        row.key === "Instagram"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {row.key === "Instagram" && (
                        <InstagramIcon className="h-4 w-4" />
                      )}
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-[0.9rem] font-medium">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <form className="flex flex-col gap-[1.1rem] pt-2" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-[0.75rem] uppercase tracking-[0.08em] text-ink-soft"
                >
                  Namn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ditt namn"
                  className="rounded-[2px] border border-[var(--color-border)] bg-cream px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors focus:border-accent"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-field"
                  className="text-[0.75rem] uppercase tracking-[0.08em] text-ink-soft"
                >
                  Telefon eller e-post
                </label>
                <input
                  type="text"
                  id="contact-field"
                  name="contact"
                  placeholder="Hur vi når dig"
                  className="rounded-[2px] border border-[var(--color-border)] bg-cream px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors focus:border-accent"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="msg"
                  className="text-[0.75rem] uppercase tracking-[0.08em] text-ink-soft"
                >
                  Vad gäller det?
                </label>
                <textarea
                  id="msg"
                  name="msg"
                  placeholder="Beskriv ditt projekt kort — typ av jobb, ungefär var och när…"
                  className="min-h-[120px] resize-y rounded-[2px] border border-[var(--color-border)] bg-cream px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors focus:border-accent"
                />
              </div>
              <button type="submit" className="btn-primary mt-2 self-start">
                Skicka förfrågan
              </button>
              {notice && (
                <p
                  role="status"
                  className="rounded border border-accent/20 bg-accent-light px-4 py-3 text-[0.85rem] text-accent-dark"
                >
                  {contact.formNotice}{" "}
                  <a href={site.phoneHref} className="font-medium underline">
                    {site.phone}
                  </a>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
