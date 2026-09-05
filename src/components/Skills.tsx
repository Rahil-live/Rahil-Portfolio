import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-[rgba(11,18,32,0.45)]" aria-labelledby="skills-heading">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="section-eyebrow mb-3">Skills</p>
          <h2 id="skills-heading" className="section-title">
            Technical toolkit
          </h2>
          <p className="section-copy mt-4">
            Frontend and mobile engineering first, with hands-on experience across
            APIs, data, AI/RAG and production delivery.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="card-surface p-5 sm:p-6">
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
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
