import { ExternalLink } from "pixelarticons/react";
import type { Project } from "@/data/projects";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56C20.21 21.4 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="pixel-border pixel-shadow-hover group flex flex-col border-t-4 border-t-[color:var(--nes-light-green)] bg-[color:var(--color-surface)] p-6 transition-none">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-mono text-lg font-semibold text-[color:var(--color-fg)]">
          {project.title}
        </h3>
        <div className="flex items-center gap-4 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="text-[color:var(--color-muted)] transition-none hover:text-[color:var(--color-accent)]"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-[color:var(--color-muted)] transition-none hover:text-[color:var(--color-accent)]"
            >
              <ExternalLink width={18} height={18} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="border-2 border-[color:var(--color-border)] bg-[color:var(--color-surface-2)] px-2 py-1 font-mono text-xs text-[color:var(--color-muted)]"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
