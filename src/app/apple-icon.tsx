import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// NES palette — same choices as icon.tsx for visual consistency
const BG = "#1d2b53"; // NES dark blue
const FG = "#00e436"; // NES light green
const BORDER = "#ff004d"; // NES red
const ACCENT = "#ffec27"; // NES yellow

// Same 5x7 glyphs as the favicon, upscaled.
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

// We render the same 32x32 logical grid, upscaled to 180x180.
// 180 / 32 ≈ 5.625 → use CSS percentages so each cell is width/height = 100/32%.
// The result is crisp because ImageResponse rasterizes at target size and we
// hint `imageRendering: pixelated` on the container.
function buildGrid(): string[][] {
  const N = 32;
  const grid: string[][] = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => BG)
  );

  // 2-cell (chunky at 180px) border
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (x < 2 || x >= N - 2 || y < 2 || y >= N - 2) {
        grid[y][x] = BORDER;
      }
    }
  }

  // Corner accent block, top-right, just inside the border
  for (let y = 2; y < 4; y++) {
    for (let x = N - 4; x < N - 2; x++) {
      grid[y][x] = ACCENT;
    }
  }

  const drawGlyph = (glyph: number[][], originX: number, originY: number) => {
    for (let gy = 0; gy < glyph.length; gy++) {
      for (let gx = 0; gx < glyph[gy].length; gx++) {
        if (glyph[gy][gx]) {
          grid[originY + gy][originX + gx] = FG;
        }
      }
    }
  };

  drawGlyph(J, 10, 12);
  drawGlyph(K, 17, 12);

  return grid;
}

export default function AppleIcon() {
  const grid = buildGrid();
  const cellSize = size.width / 32; // 5.625 px per logical cell

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
              height: cellSize,
            }}
          >
            {row.map((color, x) => (
              <div
                key={x}
                style={{
                  width: cellSize,
                  height: cellSize,
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
