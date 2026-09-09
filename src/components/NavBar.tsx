"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Close } from "pixelarticons/react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[color:var(--color-border)] bg-[color:var(--color-bg)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="font-mono text-sm text-[color:var(--color-fg)] transition-none hover:text-[color:var(--color-accent)]"
        >
          {site.name}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative font-mono text-sm transition-none hover:text-[color:var(--color-accent)]",
                    active
                      ? "text-[color:var(--color-accent)] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[color:var(--color-accent)]"
                      : "text-[color:var(--color-muted)]",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          aria-label="Toggle menu"
          className="pixel-border p-2 text-[color:var(--color-fg)] transition-none hover:text-[color:var(--color-accent)] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close width={22} height={22} /> : <Menu width={22} height={22} />}
        </button>
      </nav>

      {open && (
        <ul className="border-t-2 border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-6 py-4 md:hidden">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-2 font-mono text-sm transition-none hover:text-[color:var(--color-accent)]",
                    active
                      ? "text-[color:var(--color-accent)]"
                      : "text-[color:var(--color-muted)]",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
