export function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-1 font-mono text-sm text-[color:var(--color-fg)] transition-colors hover:border-[color:var(--color-accent)]/60 hover:text-[color:var(--color-accent)]">
      {children}
    </span>
  );
}
