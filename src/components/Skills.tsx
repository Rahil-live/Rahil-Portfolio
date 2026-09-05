import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="section-pad bg-[var(--surface)]"
      aria-labelledby="skills-heading"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="section-eyebrow mb-3">02 — Skills</p>
          <h2 id="skills-heading" className="section-title">
            Technical toolkit
          </h2>
          <p className="section-copy mt-4">
            Frontend and mobile engineering first, with hands-on experience across
            APIs, data, AI/RAG and production delivery.
          </p>
        </div>

        <div className="mt-12 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="grid gap-4 py-6 md:grid-cols-[14rem_1fr] md:gap-10 md:py-7"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-foreground md:text-2xl">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="badge">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
