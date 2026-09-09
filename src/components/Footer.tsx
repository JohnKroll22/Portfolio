import { site } from "@/data/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t-2 border-[color:var(--color-border)] bg-[color:var(--color-bg)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-10">
        <p className="font-mono text-xs text-[color:var(--color-muted)]">
          © {new Date().getFullYear()} {site.name}
        </p>
        <SocialLinks iconSize={18} />
      </div>
    </footer>
  );
}
