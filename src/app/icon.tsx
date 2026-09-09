import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// NES palette
const BG = "#1d2b53"; // NES dark blue — reads well against most tab backgrounds
const FG = "#00e436"; // NES light green — the accent, high contrast on blue
const BORDER = "#ff004d"; // NES red — chunky 2px border
const ACCENT = "#ffec27"; // NES yellow — corner accent block

// 5x7 pixel-font glyphs for "J" and "K".
// 1 = lit pixel, 0 = background. Row-major, top-to-bottom.
const J: number[][] = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0],
];

const K: number[][] = [
  [1, 0, 0, 0, 1],
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0],
  [1, 0, 0, 1, 0],
  [1, 0, 0, 0, 1],
];

// Build a 32x32 pixel grid.
// - Border: 2px of BORDER on each edge
// - Corner accent: 2x2 ACCENT square at top-right (inside border)
// - Letters: J at (x=10, y=12), K at (x=17, y=12) → 5+2+5=12 wide, centered
function buildGrid(): string[][] {
  const N = 32;
  const grid: string[][] = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => BG)
  );

  // 2px border
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (x < 2 || x >= N - 2 || y < 2 || y >= N - 2) {
        grid[y][x] = BORDER;
      }
    }
  }

  // 2x2 corner accent block at top-right, just inside the border
  for (let y = 2; y < 4; y++) {
    for (let x = N - 4; x < N - 2; x++) {
      grid[y][x] = ACCENT;
    }
  }

  // Draw a glyph into the grid at (originX, originY)
  const drawGlyph = (glyph: number[][], originX: number, originY: number) => {
    for (let gy = 0; gy < glyph.length; gy++) {
      for (let gx = 0; gx < glyph[gy].length; gx++) {
        if (glyph[gy][gx]) {
          grid[originY + gy][originX + gx] = FG;
        }
      }
    }
  };

  // J at x=10, K at x=17 (2px gap between). Both start at y=12 (centered vertically).
  drawGlyph(J, 10, 12);
  drawGlyph(K, 17, 12);

  return grid;
}

export default function Icon() {
  const grid = buildGrid();
  const PX = 1; // 1 CSS pixel per grid cell; canvas is exactly 32x32

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BG,
        }}
      >
        {grid.map((row, y) => (
          <div
            key={y}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: PX,
            }}
          >
            {row.map((color, x) => (
              <div
                key={x}
                style={{
                  width: PX,
                  height: PX,
                  background: color,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    ),
    { ...size }
  );
}
