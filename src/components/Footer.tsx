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
    <footer className="border-t border-[var(--border)] bg-[rgba(7,11,20,0.95)]">
      <div className="container-page py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border-strong)] bg-[var(--card)] font-mono text-xs text-[var(--accent)]"
                aria-hidden="true"
              >
                {profile.brand}
              </span>
              <p className="font-semibold tracking-tight text-foreground">
                {profile.name}
              </p>
            </div>
            <p className="mt-3 text-sm text-[var(--muted)]">{profile.title}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-dim)]">
              Navigation
            </p>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-dim)]">
              Contact
            </p>
            <div className="mt-3 space-y-2 text-sm">
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

        <p className="mt-10 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted-dim)]">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
