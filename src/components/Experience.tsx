import { SectionHeading } from "./SectionHeading";
import { experience, awards } from "@/data/experience";

export function Experience() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <SectionHeading label="experience" title="git log --oneline" id="experience" />

      <ol className="mt-10 space-y-8 border-l border-[color:var(--color-border)] pl-6">
        {experience.map((item, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[27px] top-2 h-3 w-3 rounded-full border-2 border-[color:var(--color-accent)] bg-[color:var(--color-bg)]"
            />
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="font-mono text-lg font-semibold text-[color:var(--color-fg)]">
                {item.role}{" "}
                <span className="text-[color:var(--color-accent)]">@</span>{" "}
                {item.org}
              </h3>
              <p className="font-mono text-xs text-[color:var(--color-muted)]">
                {item.dates}
                {item.location ? ` · ${item.location}` : ""}
              </p>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-[color:var(--color-muted)]">
              {item.bullets.map((b, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-[color:var(--color-accent)]">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-16">
        <h3 className="font-mono text-sm text-[color:var(--color-accent-2)]">
          <span aria-hidden="true"># </span>awards &amp; accolades
        </h3>
        <ul className="mt-4 space-y-2">
          {awards.map((a, i) => (
            <li
              key={i}
              className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[color:var(--color-border)]/60 pb-2 font-mono text-sm"
            >
              <span className="text-[color:var(--color-fg)]">
                <span className="text-[color:var(--color-accent)]">★</span>{" "}
                {a.title} — {a.org}
              </span>
              <span className="text-[color:var(--color-muted)]">{a.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
