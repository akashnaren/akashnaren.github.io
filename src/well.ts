function clamp(value: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, value));
}

function hash(i: number, salt: number): number {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453123;
  return x - Math.floor(x);
}

/** Match the CSS well-hole: centered in the band, fully inset so the disk is not cropped. */
export function holeLayout(cssW: number, cssH: number): {
  cx: number;
  cy: number;
  rs: number;
} {
  const hole = Math.min(cssH * 0.58, cssW * 0.7);
  return {
    cx: cssW * 0.5,
    cy: cssH * 0.5,
    rs: hole / 2,
  };
}

function paintStars(
  ctx: CanvasRenderingContext2D,
  cssW: number,
  cssH: number,
  cx: number,
  cy: number,
  rs: number,
): void {
  const count = Math.round(clamp((cssW * cssH) / 14000, 16, 40));
  for (let i = 0; i < count; i += 1) {
    let x = hash(i, 1) * cssW;
    let y = hash(i, 2) * cssH;
    let dx = x - cx;
    let dy = y - cy;
    let d = Math.hypot(dx, dy);
    if (d < rs * 1.08) continue;

    if (d < rs * 2.15) {
      const pull = ((rs * 2.15 - d) / (rs * 1.07)) ** 2;
      const bend = pull * rs * 0.16;
      x += (dx / d) * bend;
      y += (dy / d) * bend;
      dx = x - cx;
      dy = y - cy;
      d = Math.hypot(dx, dy);
      if (d < rs * 1.06) continue;
    }

    const a = 0.16 + hash(i, 4) * 0.32;
    const near = clamp((rs * 2.05 - d) / (rs * 0.95), 0, 1);
    const stretch = near * near * 1.8;
    const nx = dx / d;
    const ny = dy / d;
    const tx = -ny;
    const ty = nx;
    const rad = 0.55 + hash(i, 5) * 0.55;
    const along = rad + stretch * rad;
    const across = Math.max(0.45, rad * (1 - stretch * 0.35));

    ctx.save();
    ctx.translate(x, y);
    ctx.transform(tx * along, ty * along, nx * across, ny * across, 0, 0);
    ctx.fillStyle = `rgba(250, 250, 247, ${a})`;
    ctx.beginPath();
    ctx.arc(0, 0, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function paintHorizon(
  ctx: CanvasRenderingContext2D,
  cssW: number,
  cssH: number,
): void {
  ctx.clearRect(0, 0, cssW, cssH);
  const { cx, cy, rs } = holeLayout(cssW, cssH);
  paintStars(ctx, cssW, cssH, cx, cy, rs);
}

export function mountWell(): void {
  const host = document.querySelector<HTMLElement>(".well");
  const canvas = document.querySelector<HTMLCanvasElement>(".well-canvas");
  if (!host || !canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  const paint = (): void => {
    const rect = host.getBoundingClientRect();
    const cssW = Math.max(1, Math.floor(rect.width));
    const cssH = Math.max(1, Math.floor(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    paintHorizon(ctx, cssW, cssH);
  };

  paint();
  window.addEventListener("resize", paint);
  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(paint).observe(host);
  }
}
