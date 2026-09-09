type Props = {
  label: string;
  title: string;
  id?: string;
};

export function SectionHeading({ label, title, id }: Props) {
  return (
    <div id={id} className="pixel-fade scroll-mt-20 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
        {label}
      </p>
      <h1 className="font-pixel mt-4 text-5xl leading-none tracking-wide text-[color:var(--color-fg)] sm:text-6xl md:text-7xl">
        {title}
      </h1>
      <div className="mx-auto mt-4 h-[3px] w-16 bg-[color:var(--color-accent)]" />
    </div>
  );
}
