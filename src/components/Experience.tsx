import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad"
      aria-labelledby="experience-heading"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="section-eyebrow mb-3">Experience</p>
          <h2 id="experience-heading" className="section-title">
            Professional timeline
          </h2>
          <p className="section-copy mt-4">
            Production mobile and frontend engineering across business platforms,
            with ownership of UI systems, API integration and release quality.
          </p>
        </div>

        <ol className="relative mt-12 space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[var(--border)] md:before:left-[15px]">
          {experience.map((item) => (
            <li key={item.company} className="relative pl-10 md:pl-12">
              <span
                className="absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-[var(--accent)] bg-[var(--background)] md:h-8 md:w-8"
                aria-hidden="true"
              />
              <article className="card-surface p-5 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--accent)]">{item.role}</p>
                  </div>
                  <p className="font-mono text-xs text-[var(--muted-dim)] sm:text-right">
                    {item.period}
                  </p>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.location}</p>
                {item.application ? (
                  <p className="mt-3 text-sm text-foreground">
                    Application:{" "}
                    <span className="font-medium text-[var(--accent)]">
                      {item.application}
                    </span>
                  </p>
                ) : null}
                <ul className="mt-4 space-y-2.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2.5 text-sm leading-relaxed text-[var(--muted)]"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
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
