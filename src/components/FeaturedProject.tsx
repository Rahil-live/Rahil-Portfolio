import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="card-surface overflow-hidden">
      <div className="border-b border-[var(--border)] bg-[linear-gradient(135deg,rgba(52,211,153,0.08),rgba(56,189,248,0.04)_45%,transparent)] p-6 sm:p-8 lg:p-10">
        <p className="section-eyebrow mb-3">Featured Project</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.03em] text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 text-base text-[var(--accent)] sm:text-lg">
              {project.subtitle}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {project.description}
            </p>
          </div>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              Visit DhandaMart
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>

        {project.stats ? (
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--border)] bg-[rgba(7,11,20,0.55)] p-4"
              >
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted-dim)]">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
            Highlights
          </h4>
          <ul className="mt-4 space-y-2.5">
            {project.highlights.slice(0, 8).map((highlight) => (
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
          <Link
            href={`/projects/${project.slug}`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[#6ee7b7]"
          >
            Full project details
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
            Stack
          </h4>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="badge">
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-[var(--muted-dim)]">
            Railway and Vercel are part of this project&apos;s deployment
            architecture, not dependencies of this portfolio.
          </p>
        </div>
      </div>
    </article>
  );
}
