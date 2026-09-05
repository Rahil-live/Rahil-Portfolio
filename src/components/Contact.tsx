import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad bg-[rgba(11,18,32,0.45)]"
      aria-labelledby="contact-heading"
    >
      <div className="container-page">
        <div className="card-surface relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <div
            className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.16),transparent_70%)]"
            aria-hidden="true"
          />
          <div className="relative max-w-2xl">
            <p className="section-eyebrow mb-3">Contact</p>
            <h2 id="contact-heading" className="section-title">
              Let&apos;s build something useful.
            </h2>
            <p className="section-copy mt-4">
              I&apos;m open to opportunities involving frontend, mobile,
              full-stack and AI-powered application development.
            </p>

            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${profile.email}`}
                className="block text-lg font-medium text-[var(--accent)] hover:text-[#6ee7b7]"
              >
                {profile.email}
              </a>
              <a
                href={profile.phoneHref}
                className="block text-base text-[var(--muted)] hover:text-foreground"
              >
                {profile.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <Mail size={16} aria-hidden="true" />
                Email Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
