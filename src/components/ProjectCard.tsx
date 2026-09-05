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
        "group grid gap-4 py-7 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.55)] md:grid-cols-[1fr_1.2fr_auto] md:items-start md:gap-8",
        className,
      )}
    >
      <div>
        <p className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--accent)]">
          {project.category}
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1 text-base text-[var(--muted)]">{project.subtitle}</p>
      </div>

      <div>
        <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <li key={tech} className="badge">
              {tech}
            </li>
          ))}
          {project.technologies.length > 5 ? (
            <li className="badge">+{project.technologies.length - 5}</li>
          ) : null}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4 md:flex-col md:items-end md:gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-base font-semibold text-foreground transition-colors hover:text-[var(--accent)]"
        >
          Details
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-base font-medium text-[var(--muted)] transition-colors hover:text-foreground"
          >
            Live
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
