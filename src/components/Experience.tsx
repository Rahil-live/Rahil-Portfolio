import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad"
      aria-labelledby="experience-heading"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="section-eyebrow mb-3">03 — Experience</p>
          <h2 id="experience-heading" className="section-title">
            Professional timeline
          </h2>
          <p className="section-copy mt-4">
            Production mobile and frontend engineering across business platforms,
            with ownership of UI systems, API integration and release quality.
          </p>
        </div>

        <ol className="mt-12 space-y-0">
          {experience.map((item, index) => (
            <li
              key={item.company}
              className="grid gap-4 border-t border-[var(--border)] py-8 md:grid-cols-[10rem_1fr] md:gap-10 lg:grid-cols-[12rem_1fr]"
            >
              <div>
                <p className="font-mono text-sm text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-mono text-sm leading-relaxed text-[var(--muted-dim)]">
                  {item.period}
                </p>
              </div>
              <article>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {item.company}
                  </h3>
                  <p className="text-base text-[var(--muted)]">{item.location}</p>
                </div>
                <p className="mt-2 text-lg font-medium text-[var(--accent)]">
                  {item.role}
                </p>
                {item.application ? (
                  <p className="mt-3 text-base text-[var(--muted)]">
                    Application:{" "}
                    <span className="font-medium text-foreground">
                      {item.application}
                    </span>
                  </p>
                ) : null}
                <ul className="mt-5 space-y-2.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-base leading-relaxed text-[var(--muted)]"
                    >
                      <span
                        className="mt-2 h-px w-4 shrink-0 bg-[var(--accent)]"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
