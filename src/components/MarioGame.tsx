"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Play, Close } from "pixelarticons/react";
import { Mario, QuestionBlock } from "./MarioSprites";

type Section = { label: string; href: string };

const SECTIONS: Section[] = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

// --- World constants (px, seconds) --------------------------------------
const GROUND = 64; // ground strip height
const MARIO = 48; // mario sprite size
const BLOCK = 48; // ? block size
const BLOCK_Y = 140; // height of a block's BOTTOM edge above the floor
const SPEED = 230; // horizontal px/s
const GRAVITY = 2100; // px/s^2
const JUMP_V = 780; // initial jump velocity px/s (apex ~145px, clears blocks)
const NAV_DELAY = 220; // ms between block hit and navigation (lets the bump show)

const JUMP_KEYS = ["ArrowUp", "Space", "KeyW"];
const LEFT_KEYS = ["ArrowLeft", "KeyA"];
const RIGHT_KEYS = ["ArrowRight", "KeyD"];

function Game({ onExit }: { onExit: () => void }) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const marioRef = useRef<HTMLDivElement>(null);

  // Mutable physics state (kept in refs so the rAF loop never re-renders).
  const x = useRef(48);
  const y = useRef(0); // feet height above the floor
  const vy = useRef(0);
  const facing = useRef(1); // 1 = right, -1 = left
  const onGround = useRef(true);
  const size = useRef({ w: 0, h: 0 });
  const keys = useRef<Set<string>>(new Set());
  const navigating = useRef(false);

  const [bumping, setBumping] = useState<number | null>(null);

  // Prefetch every destination so hitting a block navigates instantly.
  useEffect(() => {
    SECTIONS.forEach((s) => router.prefetch(s.href));
  }, [router]);

  // Track the play-area size.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      size.current = { w: r.width, h: r.height };
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const blockLeft = useCallback((i: number) => {
    const w = size.current.w;
    return (w * (i + 0.5)) / SECTIONS.length - BLOCK / 2;
  }, []);

  const hitBlock = useCallback(
    (i: number) => {
      if (navigating.current) return;
      navigating.current = true;
      setBumping(i);
      window.setTimeout(() => router.push(SECTIONS[i].href), NAV_DELAY);
    },
    [router],
  );

  // Input.
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onExit();
        return;
      }
      if (
        JUMP_KEYS.includes(e.code) ||
        LEFT_KEYS.includes(e.code) ||
        RIGHT_KEYS.includes(e.code)
      ) {
        e.preventDefault();
      }
      if (navigating.current) return;
      keys.current.add(e.code);
      // Jump on the keydown edge so a held key gives one jump.
      if (JUMP_KEYS.includes(e.code) && onGround.current) {
        vy.current = JUMP_V;
        onGround.current = false;
      }
    };
    const up = (e: KeyboardEvent) => keys.current.delete(e.code);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [onExit]);

  // Physics + render loop.
  useEffect(() => {
    let raf = 0;
    let last = 0;
    const step = (t: number) => {
      raf = requestAnimationFrame(step);
      if (!last) last = t;
      const dt = Math.min((t - last) / 1000, 0.05);
      last = t;

      let w = size.current.w;
      if (!w && containerRef.current) {
        const r = containerRef.current.getBoundingClientRect();
        w = r.width;
        size.current = { w, h: r.height };
      }
      if (!w) return;

      const held = keys.current;
      const moving = navigating.current
        ? 0
        : (RIGHT_KEYS.some((k) => held.has(k)) ? 1 : 0) -
          (LEFT_KEYS.some((k) => held.has(k)) ? 1 : 0);

      // Horizontal
      if (moving !== 0) {
        x.current += moving * SPEED * dt;
        facing.current = moving > 0 ? 1 : -1;
      }
      x.current = Math.max(0, Math.min(w - MARIO, x.current));

      // Vertical
      const prevHeadY = y.current + MARIO;
      vy.current -= GRAVITY * dt;
      y.current += vy.current * dt;
      if (y.current <= 0) {
        y.current = 0;
        vy.current = 0;
        onGround.current = true;
      }
      const headY = y.current + MARIO;

      // Block collision (hit from below while rising)
      if (!navigating.current && vy.current > 0 && prevHeadY < BLOCK_Y && headY >= BLOCK_Y) {
        for (let i = 0; i < SECTIONS.length; i++) {
          const bx = blockLeft(i);
          if (x.current + MARIO > bx && x.current < bx + BLOCK) {
            y.current = BLOCK_Y - MARIO;
            vy.current = -120;
            hitBlock(i);
            break;
          }
        }
      }

      // Render (positioned from the bottom so no container-height needed)
      const m = marioRef.current;
      if (m) {
        m.style.bottom = `${GROUND + y.current}px`;
        m.style.transform = `translateX(${x.current}px) scaleX(${facing.current})`;
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [blockLeft, hitBlock]);

  // Clear the bump highlight shortly after it fires.
  useEffect(() => {
    if (bumping === null) return;
    const id = window.setTimeout(() => setBumping(null), 300);
    return () => window.clearTimeout(id);
  }, [bumping]);

  return (
    <div
      ref={containerRef}
      className="mario-scene absolute inset-0 z-20 overflow-hidden"
      role="application"
      aria-label="Mario navigation game"
    >
      {/* ambient clouds */}
      <span
        className="mario-cloud mario-cloud--drift"
        style={{ top: "12%", left: "10%", "--cloud-scale": "1.4", "--drift-duration": "42s" } as React.CSSProperties}
      />
      <span
        className="mario-cloud mario-cloud--drift"
        style={{ top: "24%", left: "-20%", "--cloud-scale": "1.1", "--drift-duration": "56s" } as React.CSSProperties}
      />

      {/* hills */}
      <span className="mario-hill" style={{ left: "-60px" }} />
      <span className="mario-hill mario-hill--sm" style={{ right: "12%" }} />

      {/* navigation blocks + labels */}
      {SECTIONS.map((s, i) => (
        <span
          key={s.href}
          className="absolute"
          style={{
            left: `${((i + 0.5) / SECTIONS.length) * 100}%`,
            bottom: `${GROUND + BLOCK_Y}px`,
            transform: "translateX(-50%)",
          }}
        >
          <QuestionBlock
            className={`mario-sprite block h-12 w-12 ${bumping === i ? "mario-block-bump" : ""}`}
          />
          <span className="mario-game-label absolute left-1/2 top-full mt-2 -translate-x-1/2">
            {s.label}
          </span>
        </span>
      ))}

      {/* Mario */}
      <div
        ref={marioRef}
        className="mario-sprite absolute left-0 will-change-transform"
        style={{ width: MARIO, height: MARIO, bottom: GROUND, transformOrigin: "center" }}
      >
        <Mario className="h-full w-full" />
      </div>

      {/* ground */}
      <span className="mario-ground" />

      {/* HUD */}
      <button
        type="button"
        onClick={onExit}
        className="pixel-border pixel-press absolute right-4 top-4 z-30 inline-flex items-center gap-2 bg-[color:var(--nes-white)] px-3 py-1.5 font-mono text-xs font-bold text-[color:var(--nes-black)]"
      >
        <Close width={14} height={14} />
        Exit
      </button>
      <div className="mario-game-hint absolute bottom-3 left-1/2 z-30 -translate-x-1/2">
        ← → move · ↑ / Space jump · Esc exit
      </div>
    </div>
  );
}

export function GameMode() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      {!playing ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="pixel-border pixel-shadow-hover pixel-press absolute right-4 top-4 z-20 hidden items-center gap-2 bg-[color:var(--nes-yellow)] px-4 py-2 font-mono text-xs font-bold text-[color:var(--nes-black)] md:inline-flex"
        >
          <Play width={16} height={16} />
          Play mode
        </button>
      ) : (
        <Game onExit={() => setPlaying(false)} />
      )}
    </>
  );
}
