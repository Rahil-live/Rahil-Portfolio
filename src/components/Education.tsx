import { ExternalLink } from "lucide-react";
import { certifications, education } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      className="section-pad"
      aria-labelledby="education-heading"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="section-eyebrow mb-3">05 — Education</p>
          <h2 id="education-heading" className="section-title">
            Education & learning
          </h2>
        </div>

        <div className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {education.map((item) => (
            <article
              key={item.degree}
              className="grid gap-3 py-6 md:grid-cols-[12rem_1fr] md:gap-10"
            >
              <p className="font-mono text-sm text-[var(--muted-dim)] md:text-base">
                {item.period}
              </p>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground">
                  {item.degree}
                </h3>
                <p className="mt-2 text-base text-[var(--muted)] md:text-lg">
                  {item.institution}
                </p>
                <p className="mt-1 text-base text-[var(--muted-dim)]">
                  {item.affiliation}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-foreground md:text-2xl">
            Learning & Certifications
          </h3>
          <div className="mt-4 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {certifications.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-base text-[var(--muted)]">
                    {item.period} · {item.status}
                  </p>
                </div>
                <a
                  href={item.folderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary shrink-0"
                >
                  View Certificate Folder
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
