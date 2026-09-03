const PAGE = "#0a0a0a";
const PERIOD = 7;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

/** Idle envelope like the grok-bot glance: rest, a look, rest. */
function idle(time: number): { glow: number; glance: number } {
  const u = ((time % PERIOD) + PERIOD) % PERIOD / PERIOD;
  let glow = 0;
  let glance = 0;

  if (u >= 0.18 && u < 0.34) {
    const k = easeInOut((u - 0.18) / 0.16);
    const tri = k < 0.5 ? k * 2 : (1 - k) * 2;
    glow = easeInOut(tri);
    glance = 0.22 * k;
  } else if (u >= 0.34 && u < 0.5) {
    glow = 0.12 * (1 - easeInOut((u - 0.34) / 0.16));
    glance = 0.22 * (1 - easeInOut((u - 0.34) / 0.16));
  } else if (u >= 0.52 && u < 0.68) {
    const k = easeInOut((u - 0.52) / 0.16);
    const tri = k < 0.5 ? k * 2 : (1 - k) * 2;
    glow = 0.85 * easeInOut(tri);
    glance = -0.18 * k;
  } else if (u >= 0.68 && u < 0.82) {
    glow = 0.1 * (1 - easeInOut((u - 0.68) / 0.14));
    glance = -0.18 * (1 - easeInOut((u - 0.68) / 0.14));
  }

  return { glow, glance };
}

function holeLayout(width: number, height: number): {
  cx: number;
  cy: number;
  rs: number;
} {
  const pad = Math.max(28, Math.min(48, height * 0.16));
  const innerH = Math.max(24, height - pad * 2);
  const innerW = Math.max(24, width - pad * 2);
  const rs = Math.min(innerW, innerH) * 0.34;
  return {
    cx: width * 0.5,
    cy: pad + innerH * 0.52,
    rs,
  };
}

function paint(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  animate: boolean,
): void {
  ctx.fillStyle = PAGE;
  ctx.fillRect(0, 0, width, height);

  const { cx, cy, rs } = holeLayout(width, height);
  const { glow, glance } = animate ? idle(time) : { glow: 0, glance: 0 };

  const disk = ctx.createRadialGradient(cx, cy, rs * 0.15, cx, cy, rs);
  disk.addColorStop(0, "#000000");
  disk.addColorStop(0.84, "#000000");
  disk.addColorStop(1, "rgba(0,0,0,0.45)");
  ctx.fillStyle = disk;
  ctx.beginPath();
  ctx.arc(cx, cy, rs, 0, Math.PI * 2);
  ctx.fill();

  const ringR = rs * 1.04;
  const ringAlpha = 0.14 + glow * 0.12;
  ctx.strokeStyle = `rgba(255,107,0,${ringAlpha})`;
  ctx.lineWidth = Math.max(1.1, rs * 0.026);
  ctx.beginPath();
  ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
  ctx.stroke();

  if (glow > 0.04) {
    ctx.save();
    ctx.strokeStyle = `rgba(255,107,0,${0.16 + glow * 0.22})`;
    ctx.lineWidth = Math.max(1.15, rs * 0.03);
    ctx.lineCap = "round";
    const start = -Math.PI * 0.12 + glance;
    ctx.beginPath();
    ctx.arc(cx, cy, ringR, start, start + Math.PI * 0.42);
    ctx.stroke();
    ctx.restore();
  }

  const orbit = rs * 1.22;
  const drift = animate ? time * 0.045 : 1.15;
  const ang = drift + glance * 0.35;
  const px = cx + Math.cos(ang) * orbit;
  const py = cy + Math.sin(ang) * orbit * 0.28;
  const tangent = ang + Math.PI / 2;
  const len = Math.max(2.4, rs * 0.055);

  ctx.save();
  ctx.translate(px, py);
  ctx.rotate(tangent);
  ctx.strokeStyle = `rgba(255, 236, 214, ${0.28 + glow * 0.18})`;
  ctx.lineWidth = 1;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(-len, 0.55);
  ctx.lineTo(0, -0.7);
  ctx.lineTo(len, 0.55);
  ctx.stroke();
  ctx.restore();
}

export function mountWell(): void {
  const host = document.querySelector<HTMLElement>(".well");
  const canvas = document.querySelector<HTMLCanvasElement>(".well-canvas");
  if (!host || !canvas) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let frame = 0;
  let live = false;

  const resize = (): void => {
    const rect = host.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = (now: number, animate: boolean): void => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    paint(ctx, width, height, now * 0.001, animate);
  };

  const tick = (now: number): void => {
    draw(now, true);
    frame = requestAnimationFrame(tick);
  };

  const stop = (): void => {
    live = false;
    cancelAnimationFrame(frame);
  };

  const start = (): void => {
    resize();
    const still = prefersReducedMotion();
    draw(still ? 0 : performance.now(), !still);
    if (still) {
      stop();
      return;
    }
    if (!live) {
      live = true;
      frame = requestAnimationFrame(tick);
    }
  };

  start();

  motion.addEventListener("change", () => {
    cancelAnimationFrame(frame);
    live = false;
    start();
  });
  window.addEventListener("resize", start);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
      return;
    }
    start();
  });
  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(() => {
      resize();
      draw(live ? performance.now() : 0, live && !prefersReducedMotion());
    }).observe(host);
  }
}
