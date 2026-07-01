import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <SectionHeading label="projects" title="things_i_built" id="projects" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
