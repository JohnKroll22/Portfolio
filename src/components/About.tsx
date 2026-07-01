import { SectionHeading } from "./SectionHeading";
import { site } from "@/data/site";

export function About() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <SectionHeading label="about" title="about_me()" id="about" />

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_2fr]">
        <div className="flex justify-center md:justify-start">
          <div
            aria-hidden="true"
            className="flex h-40 w-40 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] font-mono text-4xl text-[color:var(--color-accent)]"
          >
            {site.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)}
          </div>
        </div>

        <div className="space-y-4 text-base leading-relaxed text-[color:var(--color-muted)]">
          <p>
            I&apos;m a Computer Science student at {site.university}, based in{" "}
            {site.location}. I love building things that people actually use —
            especially at the seam between well-designed frontends and
            thoughtful backends.
          </p>
          <p>
            Recent focus areas: full-stack web apps, developer tooling, and
            small AI-adjacent side projects. I ship placeholder code, then keep
            iterating until it feels right. I&apos;m currently looking for
            internship and new-grad opportunities.
          </p>
          <p className="font-mono text-sm text-[color:var(--color-accent)]">
            <span aria-hidden="true">$&nbsp;</span>echo &quot;always
            learning&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
