/**
 * Super Mario Bros. 1-1 pixel-art sprites (pure inline SVG).
 *
 * Each sprite is drawn on a small integer grid and rendered with
 * `shapeRendering="crispEdges"` + `imageRendering: pixelated` so the pixels
 * stay hard-edged at any size. They are decorative only (aria-hidden) and are
 * consumed exclusively by the Hero backdrop.
 */

type SpriteProps = {
  className?: string;
  style?: React.CSSProperties;
};

const base: React.CSSProperties = { imageRendering: "pixelated" };

/** Classic golden "?" block with corner rivets. 16×16 grid. */
export function QuestionBlock({ className, style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      style={{ ...base, ...style }}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect width="16" height="16" fill="#000" />
      <rect x="1" y="1" width="14" height="14" fill="#f8b800" />
      {/* 3D shading on the bottom + right edges */}
      <rect x="1" y="13" width="14" height="2" fill="#d47800" />
      <rect x="13" y="1" width="2" height="14" fill="#d47800" />
      {/* corner rivets */}
      <rect x="2" y="2" width="1" height="1" fill="#000" />
      <rect x="13" y="2" width="1" height="1" fill="#000" />
      <rect x="2" y="13" width="1" height="1" fill="#000" />
      <rect x="13" y="13" width="1" height="1" fill="#000" />
      {/* the "?" glyph */}
      <rect x="5" y="3" width="6" height="2" fill="#fff" />
      <rect x="4" y="4" width="2" height="2" fill="#fff" />
      <rect x="9" y="4" width="2" height="4" fill="#fff" />
      <rect x="7" y="7" width="2" height="2" fill="#fff" />
      <rect x="7" y="9" width="2" height="2" fill="#fff" />
      <rect x="7" y="12" width="2" height="2" fill="#fff" />
    </svg>
  );
}

/** Offset brick block. 16×16 grid; black background reads as mortar. */
export function BrickBlock({ className, style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      style={{ ...base, ...style }}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect width="16" height="16" fill="#000" />
      {/* top course (two bricks) */}
      <rect x="1" y="1" width="6" height="6" fill="#c05018" />
      <rect x="8" y="1" width="7" height="6" fill="#c05018" />
      {/* bottom course, offset (three brick fragments) */}
      <rect x="1" y="8" width="3" height="7" fill="#c05018" />
      <rect x="5" y="8" width="6" height="7" fill="#c05018" />
      <rect x="12" y="8" width="3" height="7" fill="#c05018" />
      {/* top highlight on each brick */}
      <rect x="1" y="1" width="6" height="1" fill="#e0783a" />
      <rect x="8" y="1" width="7" height="1" fill="#e0783a" />
      <rect x="1" y="8" width="3" height="1" fill="#e0783a" />
      <rect x="5" y="8" width="6" height="1" fill="#e0783a" />
      <rect x="12" y="8" width="3" height="1" fill="#e0783a" />
    </svg>
  );
}

/** Super Mushroom power-up. 8×8 "big pixel" grid (2px cells in a 16 viewBox). */
export function Mushroom({ className, style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      style={{ ...base, ...style }}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* red cap */}
      <rect x="4" y="0" width="8" height="2" fill="#e02020" />
      <rect x="2" y="2" width="12" height="2" fill="#e02020" />
      <rect x="0" y="4" width="16" height="2" fill="#e02020" />
      <rect x="0" y="6" width="16" height="2" fill="#e02020" />
      {/* white cap spots */}
      <rect x="2" y="4" width="2" height="2" fill="#fff" />
      <rect x="12" y="4" width="2" height="2" fill="#fff" />
      {/* cream stem / face */}
      <rect x="2" y="8" width="12" height="2" fill="#f8e0c0" />
      <rect x="2" y="10" width="12" height="2" fill="#f8e0c0" />
      <rect x="2" y="12" width="12" height="2" fill="#f8e0c0" />
      <rect x="4" y="14" width="8" height="2" fill="#f8e0c0" />
      {/* eyes */}
      <rect x="4" y="10" width="2" height="2" fill="#000" />
      <rect x="10" y="10" width="2" height="2" fill="#000" />
    </svg>
  );
}

/** Goomba — the little brown "mushroom guy". 8×8 big-pixel grid. */
export function Goomba({ className, style }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      style={{ ...base, ...style }}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* brown head */}
      <rect x="4" y="0" width="8" height="2" fill="#9c4a00" />
      <rect x="2" y="2" width="12" height="2" fill="#9c4a00" />
      <rect x="0" y="4" width="16" height="2" fill="#9c4a00" />
      {/* eye row (white) with brow gap */}
      <rect x="0" y="6" width="2" height="2" fill="#9c4a00" />
      <rect x="2" y="6" width="4" height="2" fill="#fff" />
      <rect x="6" y="6" width="4" height="2" fill="#9c4a00" />
      <rect x="10" y="6" width="4" height="2" fill="#fff" />
      <rect x="14" y="6" width="2" height="2" fill="#9c4a00" />
      {/* pupils + tan cheeks */}
      <rect x="0" y="8" width="2" height="2" fill="#e8a860" />
      <rect x="2" y="8" width="2" height="2" fill="#fff" />
      <rect x="4" y="8" width="2" height="2" fill="#000" />
      <rect x="6" y="8" width="4" height="2" fill="#e8a860" />
      <rect x="10" y="8" width="2" height="2" fill="#000" />
      <rect x="12" y="8" width="2" height="2" fill="#fff" />
      <rect x="14" y="8" width="2" height="2" fill="#e8a860" />
      {/* tan face + frown */}
      <rect x="0" y="10" width="16" height="2" fill="#e8a860" />
      <rect x="0" y="12" width="6" height="2" fill="#e8a860" />
      <rect x="6" y="12" width="4" height="2" fill="#000" />
      <rect x="10" y="12" width="6" height="2" fill="#e8a860" />
      {/* feet */}
      <rect x="2" y="14" width="4" height="2" fill="#5a2c08" />
      <rect x="10" y="14" width="4" height="2" fill="#5a2c08" />
    </svg>
  );
}

/** Small Mario, facing right. 16×16 grid; flip horizontally for left. */
export function Mario({ className, style }: SpriteProps) {
  const R = "#e22020"; // red cap / shirt
  const S = "#f7b079"; // skin
  const H = "#5c2c0c"; // hair / shoes
  const V = "#2a4cd0"; // overalls
  const K = "#000"; // eye
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      style={{ ...base, ...style }}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* cap */}
      <rect x="5" y="0" width="5" height="1" fill={R} />
      <rect x="4" y="1" width="8" height="1" fill={R} />
      {/* face */}
      <rect x="4" y="2" width="3" height="1" fill={H} />
      <rect x="7" y="2" width="3" height="1" fill={S} />
      <rect x="10" y="2" width="1" height="1" fill={K} />
      <rect x="3" y="3" width="1" height="1" fill={H} />
      <rect x="4" y="3" width="1" height="1" fill={S} />
      <rect x="5" y="3" width="1" height="1" fill={H} />
      <rect x="6" y="3" width="4" height="1" fill={S} />
      <rect x="10" y="3" width="1" height="1" fill={K} />
      <rect x="3" y="4" width="1" height="1" fill={H} />
      <rect x="4" y="4" width="1" height="1" fill={S} />
      <rect x="5" y="4" width="2" height="1" fill={H} />
      <rect x="7" y="4" width="4" height="1" fill={S} />
      <rect x="11" y="4" width="1" height="1" fill={K} />
      <rect x="3" y="5" width="2" height="1" fill={H} />
      <rect x="5" y="5" width="4" height="1" fill={S} />
      <rect x="9" y="5" width="3" height="1" fill={K} />
      <rect x="5" y="6" width="6" height="1" fill={S} />
      {/* shirt + arms */}
      <rect x="3" y="7" width="3" height="1" fill={R} />
      <rect x="6" y="7" width="1" height="1" fill={V} />
      <rect x="7" y="7" width="3" height="1" fill={R} />
      <rect x="2" y="8" width="4" height="1" fill={R} />
      <rect x="6" y="8" width="1" height="1" fill={V} />
      <rect x="7" y="8" width="4" height="1" fill={R} />
      <rect x="1" y="9" width="5" height="1" fill={R} />
      <rect x="6" y="9" width="2" height="1" fill={V} />
      <rect x="8" y="9" width="4" height="1" fill={R} />
      {/* hands + overalls */}
      <rect x="1" y="10" width="2" height="1" fill={S} />
      <rect x="3" y="10" width="2" height="1" fill={R} />
      <rect x="5" y="10" width="4" height="1" fill={V} />
      <rect x="9" y="10" width="2" height="1" fill={R} />
      <rect x="11" y="10" width="2" height="1" fill={S} />
      <rect x="1" y="11" width="3" height="1" fill={S} />
      <rect x="4" y="11" width="6" height="1" fill={V} />
      <rect x="10" y="11" width="3" height="1" fill={S} />
      <rect x="2" y="12" width="1" height="1" fill={S} />
      <rect x="3" y="12" width="8" height="1" fill={V} />
      <rect x="11" y="12" width="1" height="1" fill={S} />
      <rect x="2" y="13" width="3" height="1" fill={V} />
      <rect x="8" y="13" width="3" height="1" fill={V} />
      {/* shoes */}
      <rect x="1" y="14" width="3" height="1" fill={H} />
      <rect x="9" y="14" width="3" height="1" fill={H} />
      <rect x="1" y="15" width="3" height="1" fill={H} />
      <rect x="9" y="15" width="3" height="1" fill={H} />
    </svg>
  );
}
