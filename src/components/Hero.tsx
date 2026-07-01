import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-6"
    >
      {/* Subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="mx-auto w-full max-w-5xl">
        <p className="font-mono text-sm text-[color:var(--color-accent)]">
          <span aria-hidden="true">$&nbsp;</span>whoami
        </p>

        <h1 className="mt-4 font-mono text-4xl font-bold tracking-tight text-[color:var(--color-fg)] sm:text-5xl md:text-6xl">
          <span className="text-[color:var(--color-muted)]">&gt;&nbsp;</span>hi,
          I&apos;m{" "}
          <span className="text-gradient">
            &lt;{site.name}/&gt;
          </span>
          <span className="cursor-blink ml-1 inline-block h-[0.9em] w-[0.5ch] translate-y-1 bg-[color:var(--color-accent)] align-middle" />
        </h1>

        <p className="mt-6 max-w-2xl font-mono text-base text-[color:var(--color-muted)] sm:text-lg">
          {site.tagline} · {site.university}
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
          {site.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-[color:var(--color-accent)] px-5 py-2.5 font-mono text-sm font-medium text-[color:var(--color-bg)] transition-colors hover:bg-[color:var(--color-accent-2)]"
          >
            view projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <a
            href={site.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border border-[color:var(--color-border)] bg-transparent px-5 py-2.5 font-mono text-sm font-medium text-[color:var(--color-fg)] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
          >
            <Download size={16} />
            download resume
          </a>
        </div>
      </div>
    </section>
  );
}
