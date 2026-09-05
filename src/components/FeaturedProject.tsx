import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="overflow-hidden border border-[var(--border)] bg-[var(--hero-plane)] text-[var(--hero-plane-text)]">
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="font-mono text-sm uppercase tracking-[0.16em] text-[var(--accent)]">
          Featured Project
        </p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h3 className="font-[family-name:var(--font-display)] text-[clamp(2.1rem,3.5vw,3.1rem)] font-bold tracking-[-0.04em]">
              {project.title}
            </h3>
            <p className="mt-2 text-lg text-[rgba(244,247,250,0.7)] sm:text-xl">
              {project.subtitle}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[rgba(244,247,250,0.65)] sm:text-lg">
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
          <dl className="mt-8 grid grid-cols-2 gap-px bg-[rgba(244,247,250,0.12)] sm:grid-cols-4">
            {project.stats.map((stat) => (
              <div key={stat.label} className="bg-[var(--hero-plane)] p-4">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-[rgba(244,247,250,0.45)] md:text-sm">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight md:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>

      <div className="grid gap-8 border-t border-[rgba(244,247,250,0.12)] p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div>
          <h4 className="font-mono text-sm uppercase tracking-[0.14em] text-[rgba(244,247,250,0.5)]">
            Highlights
          </h4>
          <ul className="mt-4 space-y-2.5">
            {project.highlights.slice(0, 8).map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-base leading-relaxed text-[rgba(244,247,250,0.72)]"
              >
                <span
                  className="mt-2 h-px w-4 shrink-0 bg-[var(--accent)]"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`/projects/${project.slug}`}
            className="mt-5 inline-flex items-center gap-1.5 text-base font-semibold text-[var(--accent)] hover:text-[#ff6b5a]"
          >
            Full project details
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div>
          <h4 className="font-mono text-sm uppercase tracking-[0.14em] text-[rgba(244,247,250,0.5)]">
            Stack
          </h4>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="border border-[rgba(244,247,250,0.2)] px-2.5 py-1 text-sm text-[rgba(244,247,250,0.8)]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
