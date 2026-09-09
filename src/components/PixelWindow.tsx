"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Close, Minus, Expand } from "pixelarticons/react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  variant?: "boot" | "terminal" | "warp" | "item-get" | "pixel-assemble";
};

type WindowState = "normal" | "minimized" | "maximized";

const VARIANT_CLASS: Record<NonNullable<Props["variant"]>, string> = {
  boot: "nes-boot",
  terminal: "nes-terminal",
  warp: "nes-warp",
  "item-get": "nes-item-get",
  "pixel-assemble": "nes-pixel-assemble",
};

const PIXEL_COLORS = [
  "#00e436", // light green
  "#29adff", // blue
  "#ffec27", // yellow
  "#ff77a8", // pink
  "#ffa300", // orange
  "#fff1e8", // white
];

const GRID_COLS = 60;
const GRID_ROWS = 40;
const PIXEL_DURATION = 2200; // ms — per-cell fly/hold/fade lifetime
const MAX_DELAY = 0; // ms — no stagger, all pixels start together

function seededRand(seed: number) {
  let t = seed;
  return () => {
    t = (t * 9301 + 49297) % 233280;
    return t / 233280;
  };
}

type Cell = {
  fromX: number;
  fromY: number;
  delay: number;
  color: string;
};

function PixelCanvas({ seed }: { seed: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellsRef = useRef<Cell[]>([]);
  const rafRef = useRef<number>(0);

  // Build the cells once per open (seed change).
  if (cellsRef.current.length === 0 || (cellsRef.current as unknown as { seed?: number }).seed !== seed) {
    const rand = seededRand(seed || 1);
    const cells: Cell[] = new Array(GRID_COLS * GRID_ROWS);
    for (let i = 0; i < cells.length; i++) {
      cells[i] = {
        fromX: (rand() - 0.5) * 900,
        fromY: (rand() - 0.5) * 900,
        delay: Math.floor(rand() * MAX_DELAY),
        color: PIXEL_COLORS[Math.floor(rand() * PIXEL_COLORS.length)],
      };
    }
    cellsRef.current = cells;
    (cellsRef.current as unknown as { seed?: number }).seed = seed;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const start = performance.now();

    const draw = (now: number) => {
      if (cancelled) return;
      const cssWidth = canvas.clientWidth;
      const cssHeight = canvas.clientHeight;
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      const cellW = cssWidth / GRID_COLS;
      const cellH = cssHeight / GRID_ROWS;
      const cells = cellsRef.current;
      const elapsed = now - start;

      let anyVisible = false;

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const t = elapsed - cell.delay;
        if (t < 0) continue; // hasn't started yet
        const p = t / PIXEL_DURATION;
        if (p >= 1) continue; // finished — invisible

        anyVisible = true;

        // Ease: fly-in during 0..0.7, hold 0.7..0.85, fade out 0.85..1
        let ox = 0;
        let oy = 0;
        let alpha = 1;

        if (p < 0.7) {
          const k = p / 0.7;
          // Ease-out (fast approach, slow settle) — quadratic
          const eased = 1 - (1 - k) * (1 - k);
          ox = cell.fromX * (1 - eased);
          oy = cell.fromY * (1 - eased);
          // Fade in fast — visible almost immediately, no dead zone at the start
          alpha = k < 0.05 ? k / 0.05 : 1;
        } else if (p < 0.85) {
          // Hold in place at full opacity
          ox = 0;
          oy = 0;
          alpha = 1;
        } else {
          // Fade out (window reveals underneath)
          const k = (p - 0.85) / 0.15;
          alpha = 1 - k;
        }

        const col = i % GRID_COLS;
        const row = Math.floor(i / GRID_COLS);
        const x = col * cellW + ox;
        const y = row * cellH + oy;

        ctx.globalAlpha = alpha;
        ctx.fillStyle = cell.color;
        // Floor + ceil to keep sharp pixel edges without seams
        ctx.fillRect(Math.floor(x), Math.floor(y), Math.ceil(cellW) + 1, Math.ceil(cellH) + 1);
      }

      ctx.globalAlpha = 1;

      if (anyVisible || elapsed < PIXEL_DURATION + MAX_DELAY) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [seed]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    >
      <canvas ref={canvasRef} className="crisp-edges block h-full w-full" />
    </div>
  );
}

export function PixelWindow({
  open,
  onClose,
  title,
  children,
  variant = "boot",
}: Props) {
  const [windowState, setWindowState] = useState<WindowState>("normal");
  const [openKey, setOpenKey] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      setWindowState("normal");
      return;
    }
    setOpenKey((k) => k + 1);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const isMinimized = windowState === "minimized";
  const isMaximized = windowState === "maximized";
  const isNormal = !isMinimized && !isMaximized;

  const containerClass = isMinimized
    ? "fixed bottom-4 left-4 z-[100]"
    : isMaximized
      ? "fixed inset-0 z-[100] flex items-stretch justify-stretch"
      : "fixed inset-0 z-[100] flex items-center justify-center px-6";

  const windowClass = isMaximized
    ? "pixel-border relative flex h-full w-full flex-col bg-[color:var(--color-surface)]"
    : isMinimized
      ? "pixel-border pixel-shadow relative bg-[color:var(--color-surface)]"
      : "pixel-border pixel-shadow relative w-full max-w-md bg-[color:var(--color-surface)]";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pixel-window-title"
      className={containerClass}
    >
      {/* Backdrop */}
      {!isMinimized ? (
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="nes-backdrop absolute inset-0 bg-[color:var(--nes-black)]/70"
        />
      ) : null}

      {/* Outer animator — owns the transform. Keyed on openKey so the
          animation replays every time the dialog opens. */}
      <div
        key={openKey}
        className={isNormal ? `${VARIANT_CLASS[variant]} relative` : "relative"}
      >
        <div className={windowClass}>
          {/* CRT flash overlay — only for the boot variant */}
          {isNormal && variant === "boot" ? (
            <span
              aria-hidden="true"
              className="nes-flash pointer-events-none absolute inset-0 z-10 bg-[color:var(--nes-white)]"
            />
          ) : null}

          {/* Pixel-assemble overlay — canvas-driven for zero DOM overhead */}
          {isNormal && variant === "pixel-assemble" ? (
            <PixelCanvas seed={openKey} />
          ) : null}

          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b-2 border-[color:var(--color-fg)] bg-[color:var(--color-surface-2)] px-3 py-2">
            <div className="group/controls flex items-center gap-2">
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                title="Close"
                className="pixel-press relative flex h-4 w-4 items-center justify-center border-2 border-[color:var(--color-fg)] bg-[color:var(--nes-red)] text-[color:var(--nes-black)] transition-none hover:brightness-110"
              >
                <Close
                  width={10}
                  height={10}
                  className="opacity-0 group-hover/controls:opacity-100"
                />
              </button>
              <button
                type="button"
                onClick={() =>
                  setWindowState((s) =>
                    s === "minimized" ? "normal" : "minimized",
                  )
                }
                aria-label={isMinimized ? "Restore" : "Minimize"}
                title={isMinimized ? "Restore" : "Minimize"}
                className="pixel-press relative flex h-4 w-4 items-center justify-center border-2 border-[color:var(--color-fg)] bg-[color:var(--nes-yellow)] text-[color:var(--nes-black)] transition-none hover:brightness-110"
              >
                <Minus
                  width={10}
                  height={10}
                  className="opacity-0 group-hover/controls:opacity-100"
                />
              </button>
              <button
                type="button"
                onClick={() =>
                  setWindowState((s) =>
                    s === "maximized" ? "normal" : "maximized",
                  )
                }
                aria-label={isMaximized ? "Restore" : "Maximize"}
                title={isMaximized ? "Restore" : "Maximize"}
                className="pixel-press relative flex h-4 w-4 items-center justify-center border-2 border-[color:var(--color-fg)] bg-[color:var(--nes-light-green)] text-[color:var(--nes-black)] transition-none hover:brightness-110"
              >
                <Expand
                  width={10}
                  height={10}
                  className="opacity-0 group-hover/controls:opacity-100"
                />
              </button>
            </div>
            <p
              id="pixel-window-title"
              className="font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]"
            >
              {title}
            </p>
            <div className="w-[60px]" aria-hidden="true" />
          </div>

          {/* Body */}
          {!isMinimized ? (
            <div
              className={
                isMaximized
                  ? "scanlines flex flex-1 items-center justify-center bg-[color:var(--color-bg)] px-6 py-8"
                  : "scanlines bg-[color:var(--color-bg)] px-6 py-8"
              }
            >
              <div className={isMaximized ? "w-full max-w-xl" : ""}>
                {children}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
