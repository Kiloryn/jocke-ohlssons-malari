import { process } from "@/lib/content";

export function Process() {
  return (
    <section className="border-t border-[var(--color-border)] bg-white py-[5.5rem]">
      <div className="container-page">
        <span className="label">{process.label}</span>
        <h2 className="section-title">
          {process.title}
          <br />
          {process.titleLine2}
        </h2>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step) => (
            <li key={step.step} className="border-t border-[var(--color-border)] pt-6">
              <span className="font-serif text-2xl text-accent/40">{step.step}</span>
              <h3 className="mt-3 text-[0.95rem] font-medium">{step.title}</h3>
              <p className="mt-2 text-[0.85rem] leading-[1.6] text-ink-soft">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
