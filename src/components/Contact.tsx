import { Mail } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SocialLinks } from "./SocialLinks";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <SectionHeading label="contact" title="get_in_touch()" id="contact" />

      <div className="mt-10 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 text-center sm:p-12">
        <p className="mx-auto max-w-xl text-base leading-relaxed text-[color:var(--color-muted)]">
          Open to internships, new-grad roles, collaborations, and interesting
          conversations. The fastest way to reach me is email.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-accent)] px-6 py-3 font-mono text-sm font-medium text-[color:var(--color-bg)] transition-colors hover:bg-[color:var(--color-accent-2)]"
        >
          <Mail size={16} />
          {site.email}
        </a>

        <div className="mt-8 flex justify-center">
          <SocialLinks iconSize={22} />
        </div>
      </div>
    </section>
  );
}
