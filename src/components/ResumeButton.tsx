"use client";

import { useState } from "react";
import { Download, ExternalLink, FileText } from "pixelarticons/react";
import { PixelWindow } from "./PixelWindow";

type Props = {
  fileUrl: string;
};

export function ResumeButton({ fileUrl }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-transparent px-6 py-2 font-mono text-sm font-bold text-[color:var(--color-fg)] transition-none hover:text-[color:var(--color-accent)]"
      >
        <Download width={16} height={16} />
        Download resume
      </button>

      <PixelWindow
        open={open}
        onClose={() => setOpen(false)}
        title="resume.exe"
        variant="pixel-assemble"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
          &gt; select action
        </p>

        <div className="pixel-border pixel-shadow-accent mt-4 flex items-center gap-2 bg-[color:var(--nes-white)] px-3 py-3">
          <FileText
            width={16}
            height={16}
            className="shrink-0 text-[color:var(--nes-black)]"
          />
          <span className="w-full truncate font-mono text-sm text-[color:var(--nes-black)]">
            resume.pdf
          </span>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--nes-dark-gray)]">
            pdf · a4
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={fileUrl}
            download
            className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-[color:var(--nes-light-green)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--nes-black)] transition-none"
          >
            <Download width={14} height={14} />
            Download
          </a>
          <a
            href="/resume"
            className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-transparent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--color-fg)] transition-none hover:text-[color:var(--color-accent)]"
          >
            <ExternalLink width={14} height={14} />
            Preview in-browser
          </a>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
          <span className="text-[color:var(--color-accent)]">●</span> press esc
          to close
        </p>
      </PixelWindow>
    </>
  );
}
