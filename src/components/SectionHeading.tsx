type Props = {
  label: string;
  title: string;
  id: string;
};

export function SectionHeading({ label, title, id }: Props) {
  return (
    <div id={id} className="scroll-mt-20">
      <p className="font-mono text-sm text-[color:var(--color-accent)]">
        <span aria-hidden="true">## </span>
        {label}
      </p>
      <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-[color:var(--color-accent)]/60" />
    </div>
  );
}
