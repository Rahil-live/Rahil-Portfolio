import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "card-surface group flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-strong)] sm:p-6",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--accent)]">
            {project.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{project.subtitle}</p>
        </div>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live project`}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
          >
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        ) : null}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 6).map((tech) => (
          <li key={tech} className="badge">
            {tech}
          </li>
        ))}
        {project.technologies.length > 6 ? (
          <li className="badge">+{project.technologies.length - 6}</li>
        ) : null}
      </ul>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[#6ee7b7]"
        >
          View details
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] transition-colors hover:text-foreground"
          >
            Live project
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
