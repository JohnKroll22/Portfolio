import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#09090b",
          color: "#e4e4e7",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#4ade80", fontSize: 28 }}>
          $ whoami
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            marginTop: 24,
            letterSpacing: "-0.02em",
          }}
        >
          &gt; hi, I&apos;m &lt;{site.name}/&gt;
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#a1a1aa",
            marginTop: 24,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#22d3ee",
            marginTop: 40,
          }}
        >
          {site.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
