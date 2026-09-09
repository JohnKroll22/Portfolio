"use client";

import { useState } from "react";
import { Mail } from "pixelarticons/react";
import { PixelWindow } from "./PixelWindow";

type Props = {
  email: string;
};

export function EmailButton({ email }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      const input = document.getElementById("email-address-field") as
        | HTMLInputElement
        | null;
      input?.select();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Email"
        className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-transparent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--color-fg)] transition-none hover:text-[color:var(--color-accent)]"
      >
        <Mail width={14} height={14} />
        Email
      </button>

      <PixelWindow
        open={open}
        onClose={() => setOpen(false)}
        title="contact.exe"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
          &gt; reach me at
        </p>

        <div className="pixel-border pixel-shadow-accent mt-4 flex items-center gap-2 bg-[color:var(--nes-white)] px-3 py-3">
          <Mail
            width={16}
            height={16}
            className="shrink-0 text-[color:var(--nes-black)]"
          />
          <input
            id="email-address-field"
            readOnly
            value={email}
            onFocus={(e) => e.currentTarget.select()}
            className="w-full bg-transparent font-mono text-sm text-[color:var(--nes-black)] outline-none"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copy}
            className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-[color:var(--nes-light-green)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--nes-black)] transition-none"
          >
            {copied ? "Copied!" : "Copy address"}
          </button>
          <a
            href={`mailto:${email}`}
            className="pixel-border pixel-shadow-hover pixel-press inline-flex items-center gap-2 bg-transparent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--color-fg)] transition-none hover:text-[color:var(--color-accent)]"
          >
            Open in mail app
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
