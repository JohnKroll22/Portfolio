export function TerminalPrompt({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[color:var(--color-accent)]">
      <span aria-hidden="true">$&nbsp;</span>
      {children}
    </span>
  );
}
