import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/data/site";

export function About() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading label="about" title="About" id="about" />

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_2fr]">
        <div className="flex justify-center md:justify-start">
          <div className="pixel-border pixel-shadow-accent crisp-edges relative aspect-[4/5] w-full max-w-[280px] overflow-hidden bg-[color:var(--color-surface)]">
            <Image
              src="/about-photo.jpg"
              alt={`${site.name} and friends`}
              fill
              sizes="(min-width: 768px) 280px, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        <div className="space-y-4 text-base leading-relaxed text-[color:var(--color-muted)]">
          <p>
            I&apos;m a Computer Science major and Data Science minor in the
            Honors Program at Temple University, based in Philadelphia. I
            expect to graduate in May 2028.
          </p>
          <p>
            I lead a Human-Computer Interaction research team studying user
            interfaces for Generative AI applications, focused on accessibility
            and usability. I also help run OwlHacks and Temple&apos;s ACM
            chapter, and play for the Men&apos;s Club Soccer team.
          </p>
          <p>
            I&apos;m looking for software engineering internships where I can
            work on real products with strong engineering culture. Reach me at{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-[color:var(--color-accent)] hover:underline"
            >
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
