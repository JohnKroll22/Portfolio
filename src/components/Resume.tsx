import { Download, FileText } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/data/site";

export function Resume() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <SectionHeading label="resume" title="cat resume.pdf" id="resume" />

      <div className="mt-10 flex flex-col gap-6 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <FileText
            size={32}
            className="text-[color:var(--color-accent)]"
            strokeWidth={1.5}
          />
          <div>
            <h3 className="font-mono text-lg font-semibold text-[color:var(--color-fg)]">
              resume.pdf
            </h3>
            <p className="mt-1 text-sm text-[color:var(--color-muted)]">
              Latest version — updated {new Date().getFullYear()}. Includes
              experience, projects, education, and skills.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[color:var(--color-border)] px-4 py-2 font-mono text-sm text-[color:var(--color-fg)] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
          >
            view
          </a>
          <a
            href={site.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md bg-[color:var(--color-accent)] px-4 py-2 font-mono text-sm font-medium text-[color:var(--color-bg)] transition-colors hover:bg-[color:var(--color-accent-2)]"
          >
            <Download size={16} />
            download
          </a>
        </div>
      </div>
    </section>
  );
}
