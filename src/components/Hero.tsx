import { ArrowDownRight } from "lucide-react";
import { profile } from "@/data/profile";

const [firstName, lastName] = profile.name.split(" ");

const focusAreas = [
  { n: "01", label: "Frontend" },
  { n: "02", label: "Mobile" },
  { n: "03", label: "AI Products" },
] as const;

const stackStrip = [
  "Angular",
  "Ionic",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AI / RAG",
  "Capacitor",
  "REST APIs",
];

const socials = [
  { href: profile.github, label: "GitHub", external: true },
  { href: profile.linkedin, label: "LinkedIn", external: true },
  { href: `mailto:${profile.email}`, label: "Email", external: false },
] as const;

export function Hero() {
  const marquee = [...stackStrip, ...stackStrip];

  return (
    <section
      id="home"
      className="hero relative flex min-h-[100svh] flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="grid min-w-0 flex-1 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative flex min-w-0 flex-col justify-between px-[clamp(1.5rem,5vw,4.5rem)] py-12 sm:py-16 lg:py-14">
          <div className="fade-up flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--muted-dim)]">
              {profile.location}
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {socials.map(({ href, label, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="my-12 lg:my-0">
            <h1
              id="hero-heading"
              className="font-[family-name:var(--font-display)] font-extrabold leading-[0.86] tracking-[-0.055em] text-foreground"
            >
              <span className="hero-name-line block max-w-full text-[clamp(2.75rem,12vw,7.75rem)]">
                {firstName}
              </span>
              <span
                className="hero-name-line block max-w-full text-[clamp(2.75rem,12vw,7.75rem)]"
                style={{ animationDelay: "90ms" }}
              >
                {lastName}
                <span className="text-[var(--accent)]">.</span>
              </span>
            </h1>

            <div
              className="reveal-line mt-7 h-1.5 w-28 origin-left bg-[var(--accent)] sm:w-40"
              aria-hidden="true"
            />

            <p
              className="fade-up mt-7 max-w-[36rem] text-xl font-medium tracking-tight text-[var(--ink-soft)] sm:text-2xl md:text-[1.8rem] md:leading-snug"
              style={{ animationDelay: "160ms" }}
            >
              {profile.headline}
            </p>
            <p
              className="fade-up mt-4 max-w-[32rem] text-lg leading-relaxed text-[var(--muted)] md:text-xl"
              style={{ animationDelay: "220ms" }}
            >
              Mobile App &amp; Frontend Developer with 5+ years shipping
              production products.
            </p>

            <div
              className="fade-up mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "280ms" }}
            >
              <a href="#projects" className="btn-primary">
                View My Work
                <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          <a
            href="#about"
            className="fade-up hidden w-fit items-center gap-3 font-mono text-sm uppercase tracking-[0.16em] text-[var(--muted-dim)] transition-colors hover:text-foreground lg:inline-flex"
            style={{ animationDelay: "340ms" }}
          >
            <span
              className="hero-scroll-line inline-block h-10 w-px bg-[var(--border-strong)]"
              aria-hidden="true"
            />
            Scroll
          </a>
        </div>

        <div className="hero-plane relative flex min-h-[26rem] min-w-0 flex-col overflow-hidden bg-[var(--hero-plane)] text-[var(--hero-plane-text)] sm:min-h-[30rem] lg:min-h-full">
          <div
            className="hero-plane-slash absolute -left-16 top-0 h-[58%] w-[70%] skew-x-[-18deg] bg-[var(--accent)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(12,18,32,0.95),transparent)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-between px-[clamp(1.5rem,5vw,3.5rem)] py-10 sm:py-12 lg:py-14">
            <ul className="space-y-3">
              {focusAreas.map((item, index) => (
                <li
                  key={item.label}
                  className="fade-up flex items-baseline gap-4 border-b border-white/15 pb-3"
                  style={{ animationDelay: `${180 + index * 80}ms` }}
                >
                  <span className="font-mono text-sm text-white/45">
                    {item.n}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight sm:text-2xl">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <div>
              <p
                className="hero-watermark select-none font-[family-name:var(--font-display)] text-[clamp(5.5rem,16vw,11rem)] font-extrabold leading-[0.8] tracking-[-0.08em] text-white/[0.08]"
                aria-hidden="true"
              >
                RB
              </p>
              <p className="mt-5 max-w-[18rem] font-[family-name:var(--font-display)] text-[clamp(1.45rem,2.3vw,1.9rem)] font-bold leading-tight tracking-[-0.03em]">
                Build products that ship.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-stack-bar relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface)]"
        aria-label="Core technologies"
      >
        <div className="hero-marquee flex w-max gap-0 py-3.5 md:py-4">
          {marquee.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="flex items-center font-mono text-sm uppercase tracking-[0.16em] text-[var(--muted)] md:text-base"
            >
              <span className="px-5 md:px-7">{tech}</span>
              <span className="text-[var(--accent)]" aria-hidden="true">
                /
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
