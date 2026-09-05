import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  showPhone?: boolean;
  size?: "sm" | "md";
};

const iconSize = {
  sm: 16,
  md: 18,
} as const;

export function SocialLinks({
  className,
  showPhone = false,
  size = "md",
}: SocialLinksProps) {
  const links = [
    {
      href: profile.github,
      label: "GitHub",
      icon: GithubIcon,
      external: true,
    },
    {
      href: profile.linkedin,
      label: "LinkedIn",
      icon: LinkedinIcon,
      external: true,
    },
    {
      href: `mailto:${profile.email}`,
      label: "Email",
      icon: Mail,
      external: false,
    },
    ...(showPhone
      ? [
          {
            href: profile.phoneHref,
            label: "Phone",
            icon: Phone,
            external: false,
          },
        ]
      : []),
  ];

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map(({ href, label, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <Icon size={iconSize[size]} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
