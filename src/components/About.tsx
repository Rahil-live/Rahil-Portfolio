import { Check } from "lucide-react";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="section-pad" aria-labelledby="about-heading">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="section-eyebrow mb-3">About</p>
          <h2 id="about-heading" className="section-title">
            Engineer who ships production products
          </h2>
          <div className="mt-6 space-y-4">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="section-copy">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {(
              [
                ["Frontend", profile.strengths.frontend],
                ["Mobile", profile.strengths.mobile],
                ["AI / Full Product", profile.strengths.ai],
              ] as const
            ).map(([label, items]) => (
              <div key={label} className="card-surface p-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
                  {label}
                </p>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface p-6 sm:p-8">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            What I Build
          </h3>
          <ul className="mt-5 space-y-3">
            {profile.whatIBuild.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--muted)]">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Check size={12} aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
