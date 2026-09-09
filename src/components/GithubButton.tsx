"use client";

import { useState } from "react";
import { ExternalLink } from "pixelarticons/react";
import { PixelWindow } from "./PixelWindow";

function GithubGlyph({ size = 16 }: { size?: number }) {
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

type Props = {
  url: string;
};

export function GithubButton({ url }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const handle = url.replace(/^https?:\/\/(www\.)?github\.com\//, "@");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="GitHub"
        className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-transparent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--color-fg)] transition-none hover:text-[color:var(--color-accent)]"
      >
        <GithubGlyph size={14} />
        GitHub
      </button>

      <PixelWindow
        open={open}
        onClose={() => setOpen(false)}
        title="github.exe"
        variant="terminal"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
          &gt; source code lives here
        </p>

        <div className="pixel-border pixel-shadow-accent mt-4 flex items-center gap-2 bg-[color:var(--nes-white)] px-3 py-3">
          <GithubGlyph size={16} />
          <span className="w-full truncate font-mono text-sm text-[color:var(--nes-black)]">
            {handle}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-[color:var(--nes-light-green)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--nes-black)] transition-none"
          >
            <ExternalLink width={14} height={14} />
            Open profile
          </a>
          <button
            type="button"
            onClick={copy}
            className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-transparent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--color-fg)] transition-none hover:text-[color:var(--color-accent)]"
          >
            {copied ? "Copied!" : "Copy URL"}
          </button>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
          <span className="text-[color:var(--color-accent)]">●</span> press esc
          to close
        </p>
      </PixelWindow>
    </>
  );
}
