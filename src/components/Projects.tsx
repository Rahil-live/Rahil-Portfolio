"use client";

import { useMemo, useState } from "react";
import {
  projects,
  type ProjectCategory,
  getFeaturedProject,
} from "@/data/projects";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "Frontend",
  "Mobile",
  "Full Stack",
  "AI",
];

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const featured = getFeaturedProject();
  const showFeatured = Boolean(
    featured && (active === "All" || active === featured.category),
  );

  const filtered = useMemo(() => {
    const list =
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active);

    if (showFeatured && featured) {
      return list.filter((project) => project.slug !== featured.slug);
    }

    return list;
  }, [active, featured, showFeatured]);

  return (
    <section
      id="projects"
      className="section-pad bg-[rgba(11,18,32,0.45)]"
      aria-labelledby="projects-heading"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="section-eyebrow mb-3">Projects</p>
          <h2 id="projects-heading" className="section-title">
            Selected products & live deployments
          </h2>
          <p className="section-copy mt-4">
            Independently built and professionally shipped applications across
            web, mobile-adjacent workflows and AI-powered products.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={cn(
                "cursor-pointer rounded-lg border px-3.5 py-2 text-sm transition-all duration-200",
                active === filter
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--border-strong)] hover:text-foreground",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {showFeatured && featured ? (
          <div className="mt-10 transition-opacity duration-300">
            <FeaturedProject project={featured} />
          </div>
        ) : null}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filtered.length === 0 && !(showFeatured && featured) ? (
          <p className="mt-10 text-sm text-[var(--muted)]">
            No projects in this category yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
