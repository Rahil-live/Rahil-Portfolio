"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-[var(--border)] bg-[rgba(232,237,242,0.92)] backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        className="container-page flex h-[4.25rem] items-center justify-between gap-4 md:h-[4.5rem]"
        aria-label="Primary"
      >
        <Link
          href="/#home"
          className="font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight text-foreground md:text-[1.35rem]"
        >
          {profile.name.split(" ")[0]}
          <span className="text-[var(--accent)]">.</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 text-base text-[var(--muted)] transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="btn-primary hidden px-4 py-2.5 text-base sm:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-[var(--border)] text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        id={menuId}
        className={cn(
          "border-t border-[var(--border)] bg-[var(--background)] lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="block px-3 py-3.5 text-lg text-[var(--muted)] transition-colors hover:bg-[var(--accent-soft)] hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={`mailto:${profile.email}`}
              onClick={closeMenu}
              className="btn-primary w-full"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
