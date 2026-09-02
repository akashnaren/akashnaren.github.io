type Star = {
  readonly x: number;
  readonly y: number;
  readonly r: number;
  readonly a: number;
  readonly phase: number;
};

function hash(i: number, salt: number): number {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453123;
  return x - Math.floor(x);
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function mountWell(): void {
  const host = document.querySelector<HTMLElement>(".well");
  const canvas = document.querySelector<HTMLCanvasElement>(".well-canvas");
  if (!host || !canvas) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let stars: Star[] = [];
  let frame = 0;
  let live = false;

  const seedStars = (): void => {
    const count = Math.round(Math.min(110, Math.max(40, (width * height) / 12000)));
    stars = Array.from({ length: count }, (_, i) => ({
      x: hash(i, 1),
      y: hash(i, 2),
      r: 0.4 + hash(i, 3) * 1.15,
      a: 0.22 + hash(i, 4) * 0.48,
      phase: hash(i, 5) * Math.PI * 2,
    }));
  };

  const resize = (): void => {
    const rect = host.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    seedStars();
  };

  const hole = () => {
    const radius = Math.min(width, height) * 0.34;
    return {
      cx: width * 0.5,
      cy: height * 0.5,
      radius,
    };
  };

  const drawAccretion = (
    context: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    radius: number,
    time: number,
    animate: boolean,
  ): void => {
    context.save();
    context.translate(cx, cy);
    context.rotate(animate ? time * 0.07 : 0.18);
    context.scale(1.18, 0.3);

    for (let i = 0; i < 7; i += 1) {
      const ring = radius * (1.06 + i * 0.15);
      const start = (animate ? time * 0.32 : 0.4) + i * 0.5;
      context.strokeStyle = `rgba(255,107,0,${0.05 + i * 0.014})`;
      context.lineWidth = radius * (0.12 - i * 0.008);
      context.beginPath();
      context.arc(0, 0, ring, start, start + Math.PI * 1.2);
      context.stroke();
    }

    context.restore();
  };

  const drawStars = (
    context: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    radius: number,
    time: number,
    animate: boolean,
  ): void => {
    for (const star of stars) {
      let x = star.x * width;
      let y = star.y * height;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.hypot(dx, dy);
      const influence = Math.max(0, 1 - dist / (radius * 3.6));
      const angle = Math.atan2(dy, dx) + influence * influence * 0.62;
      const pull = 1 - influence * 0.3;
      x = cx + Math.cos(angle) * dist * pull;
      y = cy + Math.sin(angle) * dist * pull;

      if (animate && influence > 0.12) {
        const ingest = (time * 0.018 + star.phase) % 1;
        const fall = 1 - ingest * influence * 0.42;
        x = cx + (x - cx) * fall;
        y = cy + (y - cy) * fall;
      }

      const stretch = 1 + influence * 2.4;
      context.save();
      context.translate(x, y);
      context.rotate(Math.atan2(y - cy, x - cx) + Math.PI / 2);
      context.fillStyle = `rgba(226,226,220,${star.a * (1 - influence * 0.45)})`;
      context.beginPath();
      context.ellipse(0, 0, star.r * stretch, star.r * (1 - influence * 0.5), 0, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }
  };

  const paint = (now: number, animate: boolean): void => {
    const time = now * 0.001;
    const { cx, cy, radius } = hole();
    const pulse = animate ? Math.sin(time * 0.55) * 0.08 : 0;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    drawStars(ctx, cx, cy, radius, time, animate);
    drawAccretion(ctx, cx, cy, radius, time, animate);

    const shadow = ctx.createRadialGradient(cx, cy, radius * 0.15, cx, cy, radius * 1.55);
    shadow.addColorStop(0, "rgba(0,0,0,1)");
    shadow.addColorStop(0.46, "rgba(0,0,0,0.94)");
    shadow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = shadow;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 1.55, 0, Math.PI * 2);
    ctx.fill();

    const disk = ctx.createRadialGradient(cx, cy, radius * 0.08, cx, cy, radius);
    disk.addColorStop(0, "#000000");
    disk.addColorStop(0.78, "#000000");
    disk.addColorStop(1, "rgba(0,0,0,0.15)");
    ctx.fillStyle = disk;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();

    const ringR = radius * (1.08 + pulse * 0.04);
    ctx.strokeStyle = `rgba(255,107,0,${0.34 + pulse * 0.14})`;
    ctx.lineWidth = Math.max(1.25, radius * 0.042);
    ctx.beginPath();
    ctx.ellipse(cx, cy + radius * 0.04, ringR * 1.08, ringR * 0.32, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = `rgba(255,180,90,${0.16 + pulse * 0.08})`;
    ctx.lineWidth = 1.15;
    ctx.beginPath();
    ctx.ellipse(cx, cy + radius * 0.04, ringR * 1.02, ringR * 0.27, 0, 0, Math.PI * 2);
    ctx.stroke();
  };

  const tick = (now: number): void => {
    paint(now, true);
    frame = requestAnimationFrame(tick);
  };

  const stop = (): void => {
    live = false;
    cancelAnimationFrame(frame);
    host.classList.remove("well-live");
  };

  const start = (): void => {
    resize();
    if (prefersReducedMotion()) {
      stop();
      return;
    }
    host.classList.add("well-live");
    if (!live) {
      live = true;
      frame = requestAnimationFrame(tick);
    }
  };

  start();

  const onMotion = (): void => {
    cancelAnimationFrame(frame);
    live = false;
    start();
  };

  motion.addEventListener("change", onMotion);
  window.addEventListener("resize", start);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(frame);
      live = false;
      return;
    }
    start();
  });

  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(() => {
      resize();
      if (!live && prefersReducedMotion()) return;
    }).observe(host);
  }
}
