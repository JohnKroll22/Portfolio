export function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="pixel-border pixel-shadow inline-block bg-[color:var(--color-surface)] px-2 py-1 font-mono text-sm text-[color:var(--color-fg)] transition-none hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]">
      {children}
    </span>
  );
}
