"use client";

import { useState } from "react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { contact, site } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error" | "notConfigured";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    contact?: string;
    msg?: string;
  }>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const contactField = String(data.get("contact") ?? "").trim();
    const msg = String(data.get("msg") ?? "").trim();
    const companyWebsite = String(data.get("companyWebsite") ?? "").trim();

    const nextErrors: typeof fieldErrors = {};
    if (!name) nextErrors.name = "Fyll i ditt namn.";
    if (!contactField) nextErrors.contact = "Fyll i telefon eller e-post.";
    if (!msg) nextErrors.msg = "Skriv en kort beskrivning.";

    if (Object.keys(nextErrors).length) {
      setFieldErrors(nextErrors);
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact: contactField,
          msg,
          companyWebsite,
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      if (res.status === 501) {
        setStatus("notConfigured");
        return;
      }

      setStatus("error");
      setError("Något gick fel. Ring oss så hjälper vi dig direkt.");
    } catch {
      setStatus("error");
      setError("Något gick fel. Ring oss så hjälper vi dig direkt.");
    }
  }

  return (
    <section
      id="kontakt"
      className="border-t border-[var(--color-border)] bg-cream py-[5.5rem]"
    >
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
                  className="flex items-center justify-between border-b border-[var(--color-border)] py-4 first:border-t"
                >
                  <span className="text-[0.8rem] uppercase tracking-wider text-ink-soft">
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
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* Honeypot field (anti-spam). Must remain empty. */}
              <div className="hidden" aria-hidden>
                <label htmlFor="companyWebsite">Webbplats</label>
                <input
                  id="companyWebsite"
                  name="companyWebsite"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

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
                  autoComplete="name"
                  required
                  placeholder="Ditt namn"
                  aria-invalid={Boolean(fieldErrors.name)}
                  className="rounded-[2px] border border-[var(--color-border)] bg-white px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors focus:border-accent aria-[invalid=true]:border-red-400"
                  disabled={status === "sending"}
                />
                {fieldErrors.name && (
                  <p className="text-[0.82rem] text-red-600">{fieldErrors.name}</p>
                )}
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
                  autoComplete="tel"
                  required
                  placeholder="Hur vi når dig"
                  aria-invalid={Boolean(fieldErrors.contact)}
                  className="rounded-[2px] border border-[var(--color-border)] bg-white px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors focus:border-accent aria-[invalid=true]:border-red-400"
                  disabled={status === "sending"}
                />
                {fieldErrors.contact && (
                  <p className="text-[0.82rem] text-red-600">
                    {fieldErrors.contact}
                  </p>
                )}
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
                  required
                  placeholder="Beskriv ditt projekt kort — typ av jobb, ungefär var och när…"
                  aria-invalid={Boolean(fieldErrors.msg)}
                  className="min-h-[120px] resize-y rounded-[2px] border border-[var(--color-border)] bg-white px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors focus:border-accent aria-[invalid=true]:border-red-400"
                  disabled={status === "sending"}
                />
                {fieldErrors.msg && (
                  <p className="text-[0.82rem] text-red-600">{fieldErrors.msg}</p>
                )}
              </div>
              <button
                type="submit"
                className="btn-primary self-start disabled:cursor-not-allowed disabled:opacity-70"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Skickar…" : "Skicka förfrågan"}
              </button>

              {status === "success" && (
                <p
                  role="status"
                  className="rounded-[2px] border border-accent/20 bg-accent-light px-4 py-3 text-[0.85rem] text-accent-dark"
                >
                  Tack! Vi återkommer inom ett arbetsdygn. Om det är bråttom:{" "}
                  <a href={site.phoneHref} className="font-medium underline">
                    {site.phone}
                  </a>
                  .
                </p>
              )}

              {status === "notConfigured" && (
                <p
                  role="status"
                  className="rounded-[2px] border border-accent/20 bg-accent-light px-4 py-3 text-[0.85rem] text-accent-dark"
                >
                  {contact.formNotice}{" "}
                  <a href={site.phoneHref} className="font-medium underline">
                    {site.phone}
                  </a>
                </p>
              )}

              {status === "error" && error && (
                <p
                  role="status"
                  className="rounded-[2px] border border-red-200 bg-red-50 px-4 py-3 text-[0.85rem] text-red-700"
                >
                  {error}{" "}
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
