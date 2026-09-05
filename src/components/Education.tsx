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
        <div className="max-w-2xl">
          <p className="section-eyebrow mb-3">Education</p>
          <h2 id="education-heading" className="section-title">
            Education & learning
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {education.map((item) => (
            <article key={item.degree} className="card-surface p-5 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {item.degree}
                </h3>
                <p className="font-mono text-xs text-[var(--muted-dim)]">
                  {item.period}
                </p>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)]">{item.institution}</p>
              <p className="mt-1 text-sm text-[var(--muted-dim)]">
                {item.affiliation}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            Learning & Certifications
          </h3>
          <div className="mt-4 grid gap-4">
            {certifications.map((item) => (
              <article
                key={item.title}
                className="card-surface flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
              >
                <div>
                  <h4 className="text-base font-medium text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {item.period} · {item.status}
                  </p>
                </div>
                <a
                  href={item.folderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary shrink-0 text-sm"
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
