"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/content";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-[5.5rem]">
      <div className="container-page md:grid md:grid-cols-12 md:gap-16 md:items-start">
        <div className="md:col-span-4">
          <span className="label">{faq.label}</span>
          <h2 className="section-title">{faq.title}</h2>
        </div>

        <div className="mt-12 md:mt-0 md:col-span-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-[0.95rem] font-medium text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {item.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink-soft transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[0.9rem] leading-[1.65] text-ink-soft">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}