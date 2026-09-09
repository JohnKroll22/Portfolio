import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading label="projects" title="Projects" id="projects" />

      {projects.length === 0 ? (
        <div className="pixel-border mt-10 bg-[color:var(--color-surface)] p-8 text-center">
          <p className="font-mono text-sm text-[color:var(--color-muted)]">
            Projects coming soon. In the meantime, see my{" "}
            <a
              href="/resume"
              className="text-[color:var(--color-accent)] hover:underline"
            >
              resume
            </a>{" "}
            for research and coursework.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </section>
  );
}
