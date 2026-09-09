"use client";

import { useState } from "react";
import { ExternalLink } from "pixelarticons/react";
import { PixelWindow } from "./PixelWindow";

function LinkedinGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

type Props = {
  url: string;
};

export function LinkedinButton({ url }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const handle = url.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "in/");

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
        aria-label="LinkedIn"
        className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-transparent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--color-fg)] transition-none hover:text-[color:var(--color-accent)]"
      >
        <LinkedinGlyph size={14} />
        LinkedIn
      </button>

      <PixelWindow
        open={open}
        onClose={() => setOpen(false)}
        title="linkedin.exe"
        variant="warp"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
          &gt; professional network
        </p>

        <div className="pixel-border pixel-shadow-accent mt-4 flex items-center gap-2 bg-[color:var(--nes-white)] px-3 py-3">
          <LinkedinGlyph size={16} />
          <span className="w-full truncate font-mono text-sm text-[color:var(--nes-black)]">
            {handle}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-[color:var(--nes-blue)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--nes-black)] transition-none"
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
