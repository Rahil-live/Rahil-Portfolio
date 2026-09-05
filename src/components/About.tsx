import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="section-pad" aria-labelledby="about-heading">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="section-eyebrow mb-3">01 — About</p>
          <h2 id="about-heading" className="section-title">
            Engineer who ships production products
          </h2>
        </div>

        <div>
          <div className="space-y-4 border-l-2 border-[var(--accent)] pl-6">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="section-copy max-w-none">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {(
              [
                ["Frontend", profile.strengths.frontend],
                ["Mobile", profile.strengths.mobile],
                ["AI / Full Product", profile.strengths.ai],
              ] as const
            ).map(([label, items]) => (
              <div key={label}>
                <p className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--accent)]">
                  {label}
                </p>
                <p className="mt-2 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {items.join(" · ")}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground">
              What I Build
            </h3>
            <ul className="mt-5 columns-1 gap-8 sm:columns-2">
              {profile.whatIBuild.map((item, index) => (
                <li
                  key={item}
                  className="mb-3 break-inside-avoid border-b border-[var(--border)] pb-3 text-base text-[var(--muted)] md:text-lg"
                >
                  <span className="mr-3 font-mono text-sm text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
