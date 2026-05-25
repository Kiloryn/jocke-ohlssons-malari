"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/content";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-[100] flex items-center justify-between px-6 py-4 backdrop-blur-md transition-all duration-300 md:px-10 bg-cream/90 ${
          scrolled ? "shadow-sm border-b border-[var(--color-border)]" : ""
        }`}
      >
        <a
          href="#"
          className="font-serif text-[1.05rem] font-semibold tracking-[0.01em] text-ink"
        >
          {site.name}
        </a>

        <ul className="hidden list-none gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-[0.02em] text-ink-soft transition-colors hover:text-ink"
              >
{link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={site.phoneHref} className="nav-cta hidden sm:inline-block">
            {site.phone}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-[2px] text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[90] transition-opacity duration-300 backdrop-blur-sm bg-ink/30 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden
        onClick={() => setMenuOpen(false)}
      />

      <nav
        id="mobile-menu"
        className={`fixed right-0 top-0 z-[95] flex h-full w-[min(100%,280px)] flex-col gap-1 bg-cream px-6 pb-8 pt-20 shadow-xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="border-b border-[var(--color-border)] py-4 text-lg text-ink"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className="mt-auto">
          <a
            href={site.phoneHref}
            className="btn-primary mt-6 text-center"
            onClick={() => setMenuOpen(false)}
          >
            {site.phone}
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-sm text-accent hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            {site.instagramHandle}
          </a>
        </div>
      </nav>
    </>
  );
}