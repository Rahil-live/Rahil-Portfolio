import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GithubIcon } from "@/components/icons";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${profile.name}`,
      description: project.description,
      url: `${profile.siteUrl}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="section-pad pt-10">
        <div className="container-page max-w-4xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to projects
          </Link>

          <header className="mt-6">
            <p className="section-eyebrow mb-3">{project.category}</p>
            <h1 className="section-title">{project.title}</h1>
            <p className="mt-2 text-lg text-[var(--accent)]">{project.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Live Project
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
              ) : null}
            </div>
          </header>

          <section className="mt-10 space-y-8">
            <div className="card-surface p-6">
              <h2 className="text-base font-semibold text-foreground">Overview</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {project.overview ?? project.description}
              </p>
            </div>

            {project.problem ? (
              <div className="card-surface p-6">
                <h2 className="text-base font-semibold text-foreground">Problem</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {project.problem}
                </p>
              </div>
            ) : null}

            {project.solution ? (
              <div className="card-surface p-6">
                <h2 className="text-base font-semibold text-foreground">Solution</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {project.solution}
                </p>
              </div>
            ) : null}

            {project.architecture ? (
              <div className="card-surface p-6">
                <h2 className="text-base font-semibold text-foreground">
                  Architecture
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {project.architecture}
                </p>
              </div>
            ) : null}

            {project.stats ? (
              <div className="card-surface p-6">
                <h2 className="text-base font-semibold text-foreground">
                  Architecture scale
                </h2>
                <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-[var(--border)] bg-[rgba(7,11,20,0.55)] p-4"
                    >
                      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted-dim)]">
                        {stat.label}
                      </dt>
                      <dd className="mt-1 text-2xl font-semibold text-foreground">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}

            <div className="card-surface p-6">
              <h2 className="text-base font-semibold text-foreground">
                Technology stack
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="badge">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface p-6">
              <h2 className="text-base font-semibold text-foreground">
                Key features
              </h2>
              <ul className="mt-4 space-y-2.5">
                {project.highlights.map((highlight) => (
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
            </div>

            {project.engineeringDecisions?.length ? (
              <div className="card-surface p-6">
                <h2 className="text-base font-semibold text-foreground">
                  Engineering decisions
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {project.engineeringDecisions.map((decision) => (
                    <li
                      key={decision}
                      className="flex gap-2.5 text-sm leading-relaxed text-[var(--muted)]"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                        aria-hidden="true"
                      />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
