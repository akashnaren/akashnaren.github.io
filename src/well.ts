const PAGE = 10 / 255;

function clamp(value: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, value));
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function mix(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function hash(i: number, salt: number): number {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453123;
  return x - Math.floor(x);
}

/** Horizon size in CSS px: scales with the art band, capped so desktop stays quiet. */
function holeLayout(cssW: number, cssH: number): {
  cx: number;
  cy: number;
  rs: number;
} {
  const pad = Math.max(20, Math.min(36, cssH * 0.14));
  const innerW = Math.max(24, cssW - pad * 2);
  const innerH = Math.max(24, cssH - pad * 2);
  let rs = clamp(innerH * 0.34, 34, 52);
  rs = Math.min(rs, innerW / 3.6, innerH / 2.55);
  return {
    cx: cssW * 0.5,
    cy: cssH * 0.5,
    rs,
  };
}

function paintStars(
  data: Uint8ClampedArray,
  dw: number,
  dh: number,
  dpr: number,
  cx: number,
  cy: number,
  rs: number,
  cssW: number,
  cssH: number,
): void {
  const count = Math.round(Math.min(36, Math.max(14, (cssW * cssH) / 16000)));
  for (let i = 0; i < count; i += 1) {
    const x = hash(i, 1) * cssW;
    const y = hash(i, 2) * cssH;
    if (Math.hypot(x - cx, y - cy) < rs * 1.85) continue;
    const px = Math.round(x * dpr);
    const py = Math.round(y * dpr);
    if (px < 0 || py < 0 || px >= dw || py >= dh) continue;
    const a = 0.14 + hash(i, 4) * 0.28;
    const i4 = (py * dw + px) * 4;
    data[i4] = Math.round(mix(data[i4] / 255, 0.88, a) * 255);
    data[i4 + 1] = Math.round(mix(data[i4 + 1] / 255, 0.88, a) * 255);
    data[i4 + 2] = Math.round(mix(data[i4 + 2] / 255, 0.85, a) * 255);
  }
}

function paintHorizon(
  ctx: CanvasRenderingContext2D,
  cssW: number,
  cssH: number,
  dpr: number,
): void {
  const dw = Math.max(1, Math.floor(cssW * dpr));
  const dh = Math.max(1, Math.floor(cssH * dpr));
  const { cx, cy, rs } = holeLayout(cssW, cssH);
  const img = ctx.createImageData(dw, dh);
  const data = img.data;
  const a = rs * 2.05;
  const b = rs * 0.5;

  for (let y = 0; y < dh; y += 1) {
    const py = (y + 0.5) / dpr - cy;
    for (let x = 0; x < dw; x += 1) {
      const px = (x + 0.5) / dpr - cx;
      const r = Math.hypot(px, py);
      const phi = Math.atan2(py, px);
      const ell = (px * px) / (a * a) + (py * py) / (b * b);
      const band = smoothstep(1.14, 0.68, ell) * smoothstep(0.045, 0.17, ell);
      const near = Math.pow(
        clamp(1.2 * rs / Math.max(Math.hypot(px, py / 0.52), 1.2 * rs), 0, 1),
        0.75,
      );
      const rim = Math.pow(clamp(Math.abs(px) / (a * 0.9), 0, 1), 1.25);
      const cr = mix(0.55, 0.9, clamp(0.3 + near * 0.35 + rim * 0.2, 0, 1));
      const cg = mix(0.22, 0.42, clamp(0.2 + near * 0.28 + rim * 0.12, 0, 1));
      const cb = mix(0.06, 0.14, clamp(near * 0.18, 0, 1));

      const dbright = band * (0.28 + 0.18 * near) * (0.5 + 0.28 * rim);
      const wrap = Math.exp(-(((r - rs * 1.15) / (rs * 0.32)) ** 2));
      const polar = Math.pow(Math.abs(py) / Math.max(r, 1e-4), 1.12);
      const wrapAmt = wrap * (0.18 + 0.7 * polar) * 0.42;
      const wrap2 = Math.exp(-(((r - rs * 1.38) / (rs * 0.22)) ** 2));
      const wrap2Amt = wrap2 * Math.pow(Math.abs(Math.sin(phi)), 1.3) * 0.18;
      const pring = Math.exp(-(((r - rs * 1.034) / (rs * 0.032)) ** 2)) * 0.28;
      const inner =
        Math.exp(-(((r - rs * 0.8) / (rs * 0.028)) ** 2)) *
        smoothstep(0.22, -0.04, py / rs) *
        0.22;
      const glow = Math.exp(-((r / (rs * 2.5)) ** 2)) * 0.04;

      const pinch = 0.42 + 0.58 * clamp(Math.abs(px) / (rs * 1.5), 0, 1);
      const front =
        band * (1 - smoothstep(b * pinch * 0.72, b * pinch * 1.1, Math.abs(py)));
      const hz = smoothstep(rs * 1.016, rs * 0.88, r);

      let rr = PAGE + glow * 0.95;
      let gg = PAGE + glow * 0.4;
      let bb = PAGE + glow * 0.1;
      rr += cr * dbright + 0.9 * wrapAmt + 0.82 * wrap2Amt + pring * 0.85;
      gg += cg * dbright + 0.48 * wrapAmt + 0.42 * wrap2Amt + pring * 0.58;
      bb += cb * dbright + 0.14 * wrapAmt + 0.12 * wrap2Amt + pring * 0.26;

      const cover = hz * (1 - clamp(front * 1.45, 0, 1));
      rr = mix(rr, 0, cover);
      gg = mix(gg, 0, cover);
      bb = mix(bb, 0, cover);
      rr += inner * hz;
      gg += inner * 0.72 * hz;
      bb += inner * 0.38 * hz;

      const i = (y * dw + x) * 4;
      data[i] = Math.round(clamp(rr, 0, 1) * 255);
      data[i + 1] = Math.round(clamp(gg, 0, 1) * 255);
      data[i + 2] = Math.round(clamp(bb, 0, 1) * 255);
      data[i + 3] = 255;
    }
  }

  paintStars(data, dw, dh, dpr, cx, cy, rs, cssW, cssH);
  ctx.putImageData(img, 0, 0);
}

export function mountWell(): void {
  const host = document.querySelector<HTMLElement>(".well");
  const canvas = document.querySelector<HTMLCanvasElement>(".well-canvas");
  if (!host || !canvas) return;

  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return;

  const paint = (): void => {
    const rect = host.getBoundingClientRect();
    const cssW = Math.max(1, Math.floor(rect.width));
    const cssH = Math.max(1, Math.floor(rect.height));
    const dpr = 2;
    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    paintHorizon(ctx, cssW, cssH, dpr);
  };

  paint();
  window.addEventListener("resize", paint);
  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(paint).observe(host);
  }
}
