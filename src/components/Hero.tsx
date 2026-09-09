import Link from "next/link";
import { ArrowRight } from "pixelarticons/react";
import { site } from "@/data/site";
import { EmailButton } from "./EmailButton";
import { GithubButton } from "./GithubButton";
import { LinkedinButton } from "./LinkedinButton";
import { ResumeButton } from "./ResumeButton";
import { BrickBlock, Goomba, Mushroom, QuestionBlock } from "./MarioSprites";
import { GameMode } from "./MarioGame";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-6"
    >
      {/* Super Mario Bros. 1-1 backdrop (pure CSS pixel art) */}
      <div
        aria-hidden="true"
        className="mario-scene pointer-events-none absolute inset-0"
      >
        {/* Drifting pixel clouds */}
        <span
          className="mario-cloud mario-cloud--drift"
          style={
            {
              top: "12%",
              left: "8%",
              "--cloud-scale": "1.6",
              "--drift-duration": "38s",
            } as React.CSSProperties
          }
        />
        <span
          className="mario-cloud mario-cloud--drift"
          style={
            {
              top: "22%",
              left: "-15%",
              "--cloud-scale": "1.1",
              "--drift-duration": "52s",
            } as React.CSSProperties
          }
        />
        <span
          className="mario-cloud mario-cloud--drift"
          style={
            {
              top: "6%",
              left: "45%",
              "--cloud-scale": "1.9",
              "--drift-duration": "45s",
            } as React.CSSProperties
          }
        />

        {/* Floating ? blocks in the sky */}
        <QuestionBlock className="mario-sprite mario-bob absolute hidden h-11 w-11 sm:block" style={{ top: "30%", right: "12%" }} />
        <QuestionBlock
          className="mario-sprite mario-bob absolute hidden h-11 w-11 sm:block"
          style={{ top: "46%", right: "26%", animationDelay: "0.8s" }}
        />

        {/* Brick + ? block platform with a Super Mushroom popping out on top.
            Sits above the far-right bush (clear of it, not overlapping). */}
        <span
          className="mario-platform hidden md:flex"
          style={{ right: "6%", bottom: "200px" }}
        >
          <BrickBlock className="mario-sprite h-11 w-11" />
          <QuestionBlock className="mario-sprite h-11 w-11" />
          <BrickBlock className="mario-sprite h-11 w-11" />
          <QuestionBlock className="mario-sprite h-11 w-11" />
          <BrickBlock className="mario-sprite h-11 w-11" />
          <Mushroom
            className="mario-sprite mario-bob absolute left-1/2 h-10 w-10"
            style={{ bottom: "44px", transform: "translateX(-50%)" }}
          />
        </span>

        {/* Goomba patrolling the ground */}
        <Goomba
          className="mario-sprite mario-goomba-walk absolute h-11 w-11"
          style={{ bottom: "58px", right: "38%" }}
        />

        {/* A second goomba that pops out from behind the far-right bush */}
        <Goomba
          className="mario-sprite mario-goomba-popout absolute h-11 w-11"
          style={{ bottom: "58px", right: "20%" }}
        />

        {/* Green hills along the horizon */}
        <span className="mario-hill" style={{ left: "-40px" }} />
        <span className="mario-hill mario-hill--sm" style={{ left: "40%" }} />
        <span className="mario-hill" style={{ right: "8%" }} />

        {/* Faint techy grid layered over the sky */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Brick ground strip */}
        <span className="mario-ground" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl lg:px-4">
        <h1
          className="font-pixel text-5xl leading-tight tracking-tight text-[color:var(--nes-white)] sm:text-6xl md:text-7xl"
          style={{
            textShadow:
              "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
          }}
        >
          {site.name}
        </h1>

        <p
          className="mt-4 font-mono text-base font-bold text-[color:var(--nes-white)] sm:text-lg"
          style={{ textShadow: "2px 2px 0 #000" }}
        >
          {site.role} · {site.university}
        </p>

        <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-[color:var(--nes-dark)] sm:text-lg">
          {site.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-6">
          <Link
            href="/experience"
            className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-[color:var(--nes-light-green)] px-6 py-2 font-mono text-sm font-bold text-[color:var(--nes-black)] transition-none"
          >
            View experience
            <ArrowRight width={16} height={16} />
          </Link>
          <ResumeButton fileUrl={site.resumeUrl} />
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <EmailButton email={site.email} />
          {site.socials.github ? (
            <GithubButton url={site.socials.github} />
          ) : null}
          {site.socials.linkedin ? (
            <LinkedinButton url={site.socials.linkedin} />
          ) : null}
        </div>
      </div>

      {/* Interactive "game mode" overlay + launcher (desktop only) */}
      <GameMode />
    </section>
  );
}
