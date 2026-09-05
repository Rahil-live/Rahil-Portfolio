import { profile } from "@/data/profile";

export function CredibilityBar() {
  return (
    <section
      aria-label="Credibility highlights"
      className="border-y border-[var(--border)] bg-[rgba(11,18,32,0.8)]"
    >
      <div className="container-page grid grid-cols-2 gap-px bg-[var(--border)] md:grid-cols-4">
        {profile.credibility.map((item) => (
          <div
            key={item}
            className="bg-[var(--background)] px-4 py-5 text-center sm:px-6 sm:py-6"
          >
            <p className="text-sm font-medium tracking-tight text-foreground sm:text-base">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
