"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

type Props = {
  file: string;
};

export function PdfViewer({ file }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="pixel-fade pixel-border pixel-shadow mt-8 bg-[color:var(--color-surface)]">
      {/* Chrome header — fake window / arcade cabinet strip */}
      <div className="flex items-center justify-between gap-3 border-b-2 border-[color:var(--color-fg)] bg-[color:var(--color-surface-2)] px-3 py-2">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-3 w-3 border-2 border-[color:var(--color-fg)] bg-[color:var(--nes-red)]"
          />
          <span
            aria-hidden="true"
            className="h-3 w-3 border-2 border-[color:var(--color-fg)] bg-[color:var(--nes-yellow)]"
          />
          <span
            aria-hidden="true"
            className="h-3 w-3 border-2 border-[color:var(--color-fg)] bg-[color:var(--nes-light-green)]"
          />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
          resume.pdf
        </p>
        <p className="font-mono text-xs text-[color:var(--color-accent)]">
          {numPages > 0 ? `${numPages} page${numPages > 1 ? "s" : ""}` : "…"}
        </p>
      </div>

      {/* CRT screen area — dark surround, scanlines, pixel-inset PDF */}
      <div
        ref={containerRef}
        className="scanlines relative bg-[color:var(--color-bg)] p-4 sm:p-6"
      >
        {/* Corner "LED" indicators */}
        <span
          aria-hidden="true"
          className="absolute left-2 top-2 h-2 w-2 bg-[color:var(--color-accent)] pixel-glow"
        />
        <span
          aria-hidden="true"
          className="absolute right-2 top-2 h-2 w-2 bg-[color:var(--nes-blue)]"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-2 h-2 w-2 bg-[color:var(--nes-pink)]"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-2 right-2 h-2 w-2 bg-[color:var(--nes-yellow)]"
        />

        <div className="pixel-border pixel-shadow-accent mx-auto bg-[color:var(--nes-white)]">
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div className="flex h-[80vh] items-center justify-center font-mono text-sm text-[color:var(--nes-black)]">
                <span className="text-[color:var(--nes-black)]">
                  Loading resume
                </span>
                <span className="cursor-blink ml-1 text-[color:var(--nes-black)]">
                  _
                </span>
              </div>
            }
            error={
              <div className="flex h-[80vh] flex-wrap items-center justify-center gap-1 px-4 text-center font-mono text-sm text-[color:var(--nes-black)]">
                Failed to load resume.
                <a
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Open in a new tab
                </a>
                .
              </div>
            }
          >
            {Array.from({ length: numPages }, (_, i) => (
              <div
                key={`page_${i + 1}`}
                className={
                  i > 0
                    ? "border-t-2 border-dashed border-[color:var(--nes-black)]"
                    : ""
                }
              >
                <Page
                  pageNumber={i + 1}
                  width={width > 0 ? Math.max(width - 48, 260) : undefined}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </div>
            ))}
          </Document>
        </div>
      </div>

      {/* Footer status bar */}
      <div className="flex items-center justify-between gap-3 border-t-2 border-[color:var(--color-fg)] bg-[color:var(--color-surface-2)] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
        <span>
          <span className="text-[color:var(--color-accent)]">●</span> ready
        </span>
        <span className="hidden sm:inline">press download to save</span>
        <span>pdf · a4</span>
      </div>
    </div>
  );
}
