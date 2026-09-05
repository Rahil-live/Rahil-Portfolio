import Link from "next/link";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/SocialLinks";

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="container-page py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-foreground">
              {profile.name.split(" ")[0]}
              <span className="text-[var(--accent)]">.</span>
            </p>
            <p className="mt-3 text-base text-[var(--muted)]">{profile.title}</p>
          </div>

          <div>
            <p className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--muted-dim)]">
              Navigation
            </p>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-[var(--muted)] transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--muted-dim)]">
              Contact
            </p>
            <div className="mt-3 space-y-2 text-base">
              <a
                href={profile.phoneHref}
                className="block text-[var(--muted)] hover:text-foreground"
              >
                {profile.phone}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="block text-[var(--muted)] hover:text-foreground"
              >
                {profile.email}
              </a>
            </div>
            <div className="mt-4">
              <SocialLinks showPhone size="sm" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <p className="text-base text-[var(--muted-dim)]">
            © 2026 {profile.name}. All rights reserved.
          </p>
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--muted-dim)]">
              Built with
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-base text-[var(--muted)]">
              <li>Next.js 16</li>
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
