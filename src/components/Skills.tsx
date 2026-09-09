import { SectionHeading } from "./SectionHeading";
import { SkillBadge } from "./SkillBadge";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading label="skills" title="Skills" id="skills" />

      <div className="mt-10 space-y-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent-2)]">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <SkillBadge key={s}>{s}</SkillBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
