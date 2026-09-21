import { process } from "@/lib/content";

export function Process() {
  return (
    <section className="border-t border-[var(--color-border)] bg-white py-[5.5rem]">
      <div className="container-page">
        <span className="label">{process.label}</span>
        <h2 className="section-title max-w-[16ch]">
          {process.title}{" "}
          <br />
          {process.titleLine2}
        </h2>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {process.steps.map((step, i) => (
            <li
              key={step.step}
              className={`lg:px-6 lg:first:pl-0 lg:last:pr-0 ${
                i > 0 ? "lg:border-l lg:border-[var(--color-border)]" : ""
              }`}
            >
              <span className="font-serif text-[1.35rem] text-accent">
                {i + 1}
              </span>
              <h3 className="mt-3 text-[1.02rem] font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-[1.65] text-ink-soft">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
