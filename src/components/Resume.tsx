import { Download, ExternalLink } from "pixelarticons/react";
import { SectionHeading } from "./SectionHeading";
import { ResumeViewer } from "./ResumeViewer";
import { site } from "@/data/site";

export function Resume() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading label="resume" title="Resume" id="resume" />

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-sm text-[color:var(--color-muted)]">
          Education, leadership, research, and work experience.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 px-4 py-2 font-mono text-sm font-bold text-[color:var(--color-fg)] transition-none hover:text-[color:var(--color-accent)]"
          >
            <ExternalLink width={16} height={16} />
            Open in new tab
          </a>
          <a
            href={site.resumeUrl}
            download
            className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-[color:var(--nes-light-green)] px-4 py-2 font-mono text-sm font-bold text-[color:var(--nes-black)] transition-none"
          >
            <Download width={16} height={16} />
            Download
          </a>
        </div>
      </div>

      <ResumeViewer file={site.resumeUrl} />
    </section>
  );
}
