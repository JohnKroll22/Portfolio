import { site } from "@/data/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)]/60 bg-[color:var(--color-bg)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-[color:var(--color-muted)]">
          <span className="text-[color:var(--color-accent)]">//</span> built
          with Next.js & Tailwind · © {new Date().getFullYear()} {site.name}
        </p>
        <SocialLinks iconSize={18} />
      </div>
    </footer>
  );
}
