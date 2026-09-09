"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(
  () => import("./PdfViewer").then((m) => m.PdfViewer),
  {
    ssr: false,
    loading: () => (
      <div className="pixel-border pixel-shadow mt-8 bg-[color:var(--color-surface)]">
        <div className="flex items-center justify-between gap-3 border-b-2 border-[color:var(--color-fg)] bg-[color:var(--color-surface-2)] px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 border-2 border-[color:var(--color-fg)] bg-[color:var(--nes-red)]" />
            <span className="h-3 w-3 border-2 border-[color:var(--color-fg)] bg-[color:var(--nes-yellow)]" />
            <span className="h-3 w-3 border-2 border-[color:var(--color-fg)] bg-[color:var(--nes-light-green)]" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
            resume.pdf
          </p>
          <p className="font-mono text-xs text-[color:var(--color-accent)]">…</p>
        </div>
        <div className="scanlines flex h-[80vh] items-center justify-center bg-[color:var(--color-bg)] font-mono text-sm text-[color:var(--color-accent)]">
          Loading resume
          <span className="cursor-blink ml-1">_</span>
        </div>
      </div>
    ),
  },
);

export function ResumeViewer({ file }: { file: string }) {
  return <PdfViewer file={file} />;
}
