"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const nav = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#resume", label: "resume" },
  { href: "#contact", label: "contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)]/60 bg-[color:var(--color-bg)]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm text-[color:var(--color-fg)] hover:text-[color:var(--color-accent)]"
        >
          <span className="text-[color:var(--color-accent)]">~/</span>
          {site.name.toLowerCase().replace(/\s+/g, "-")}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-sm text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-accent)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          className="text-[color:var(--color-fg)] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-[color:var(--color-border)]/60 bg-[color:var(--color-bg)] px-6 py-4 md:hidden">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
