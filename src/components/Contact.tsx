import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad bg-[var(--hero-plane)] text-[var(--hero-plane-text)]"
      aria-labelledby="contact-heading"
    >
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.16em] text-[var(--accent)]">
            06 — Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.25rem,4.2vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em]"
          >
            Let&apos;s build something useful.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[rgba(244,247,250,0.68)] md:text-xl">
            Open to frontend, mobile, full-stack and AI-powered application work.
          </p>
        </div>

        <div>
          <a
            href={`mailto:${profile.email}`}
            className="block break-all font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--accent)] transition-colors hover:text-[#ff6b5a] sm:text-3xl"
          >
            {profile.email}
          </a>
          <a
            href={profile.phoneHref}
            className="mt-3 block text-lg text-[rgba(244,247,250,0.7)] transition-colors hover:text-[var(--hero-plane-text)]"
          >
            {profile.phone}
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={16} aria-hidden="true" />
              Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[rgba(244,247,250,0.35)] px-[1.5rem] py-[0.95rem] text-base font-semibold text-[var(--hero-plane-text)] transition-colors hover:bg-[var(--hero-plane-text)] hover:text-[var(--hero-plane)]"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[rgba(244,247,250,0.35)] px-[1.5rem] py-[0.95rem] text-base font-semibold text-[var(--hero-plane-text)] transition-colors hover:bg-[var(--hero-plane-text)] hover:text-[var(--hero-plane)]"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
