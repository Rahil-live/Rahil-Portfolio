import { profile } from "@/data/profile";

export function CredibilityBar() {
  return (
    <section
      aria-label="Credibility highlights"
      className="border-y border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="container-page flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between md:gap-8 md:py-7">
        <p className="font-mono text-sm uppercase tracking-[0.16em] text-[var(--muted-dim)]">
          Snapshot
        </p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {profile.credibility.map((item) => (
            <li
              key={item}
              className="text-base font-medium tracking-tight text-foreground md:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
