import { Mail } from "pixelarticons/react";
import { SectionHeading } from "./SectionHeading";
import { SocialLinks } from "./SocialLinks";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading label="contact" title="Contact" id="contact" />

      <div className="pixel-border pixel-shadow mt-10 bg-[color:var(--color-surface)] p-8 text-center sm:p-16">
        <p className="mx-auto max-w-xl text-base leading-relaxed text-[color:var(--color-muted)]">
          Open to internship opportunities, research collaborations, and
          student-org partnerships. Email is the fastest way to reach me.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="pixel-border pixel-shadow-hover pixel-press mt-8 inline-flex items-center gap-2 bg-[color:var(--nes-light-green)] px-6 py-2 font-mono text-sm font-bold text-[color:var(--nes-black)] transition-none"
        >
          <Mail width={16} height={16} />
          {site.email}
        </a>

        <div className="mt-8 flex justify-center">
          <SocialLinks iconSize={22} />
        </div>
      </div>
    </section>
  );
}
