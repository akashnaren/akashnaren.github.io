const PAGE = [10 / 255, 10 / 255, 10 / 255] as const;

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

function holeLayout(width: number, height: number): {
  cx: number;
  cy: number;
  rs: number;
} {
  const portrait = height > width * 1.05;
  return {
    cx: width * (portrait ? 0.5 : 0.56),
    cy: height * (portrait ? 0.78 : 0.72),
    rs: Math.min(width, height) * (portrait ? 0.145 : 0.168),
  };
}

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_res;
uniform float u_time;

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float stars(vec2 uv) {
  float s = 0.0;
  for (int k = 0; k < 3; k++) {
    float scale = 52.0 + float(k) * 38.0;
    vec2 id = floor(uv * scale);
    vec2 f = fract(uv * scale) - 0.5;
    float n = hash21(id + float(k) * 19.0);
    if (n > 0.972) {
      float d = length(f);
      s += smoothstep(0.055, 0.0, d) * (0.3 + 0.7 * hash21(id + 4.2));
    }
  }
  return s;
}

void main() {
  vec2 res = u_res;
  vec2 uv = (gl_FragCoord.xy - 0.5 * res) / min(res.x, res.y);
  float portrait = step(res.x * 1.05, res.y);

  vec2 hole = mix(vec2(0.10, -0.24), vec2(0.0, -0.30), portrait);
  float rs = mix(0.168, 0.142, portrait);
  vec2 p = uv - hole;
  float r = length(p);
  float phi = atan(p.y, p.x);
  float spin = u_time * 0.07;

  float warp = 0.78 * rs / max(r, 0.016);
  float shear = smoothstep(rs * 4.0, rs * 1.12, r);
  float ang = phi + shear * shear * 0.62;
  vec2 lensed = hole + vec2(cos(ang), sin(ang)) * (r * (1.0 + warp * 0.55));

  vec3 col = vec3(0.0392157);
  col += vec3(0.76, 0.76, 0.72) * stars(lensed) * mix(1.0, 0.12, shear);

  float flatten = 0.27;
  vec2 dsk = vec2(p.x, p.y / flatten);
  float rho = length(dsk);
  float rIn = rs * 1.68;
  float rOut = rs * 5.55;
  float annulus = smoothstep(rIn, rIn + rs * 0.14, rho) * smoothstep(rOut, rOut - rs * 1.05, rho);
  annulus *= smoothstep(rs * 0.96, rs * 1.12, r);

  float far = smoothstep(-rs * 0.02, rs * 0.28, p.y);
  float occluded = far * (1.0 - smoothstep(rs * 1.02, rs * 1.7, abs(p.x)));
  annulus *= 1.0 - occluded * 0.94;

  float dphi = atan(dsk.y, dsk.x) + spin;
  float spiral = 0.6 + 0.4 * sin(dphi * 3.0 + log(max(rho, 0.03)) * 7.2 - spin * 1.8);
  float approach = clamp(0.5 - p.x / (rs * 3.15), 0.0, 1.0);
  float temp = pow(clamp(rIn / max(rho, rIn), 0.0, 1.0), 0.62);

  vec3 hot = vec3(1.0, 0.96, 0.86);
  vec3 warm = vec3(1.0, 0.5, 0.12);
  vec3 red = vec3(0.4, 0.055, 0.018);
  vec3 dcol = mix(red, warm, clamp(temp * 1.35, 0.0, 1.0));
  dcol = mix(dcol, hot, pow(approach, 1.2) * (0.4 + 0.6 * temp));

  float dbright = annulus * spiral * (0.3 + 1.5 * pow(approach, 1.05)) * (0.42 + 0.72 * temp);
  col += dcol * dbright * 0.84;

  float isco = smoothstep(rIn + rs * 0.5, rIn, rho) * annulus;
  col += mix(warm, hot, approach) * isco * 0.5;

  float wrapR = rs * 1.36;
  float wrap = exp(-pow((r - wrapR) / (rs * 0.155), 2.0));
  float polar = pow(abs(p.y) / max(r, 1e-4), 1.65);
  wrap *= 0.2 + 1.5 * polar;
  wrap *= 0.36 + 1.18 * approach;
  col += mix(red, hot, pow(approach, 0.88)) * wrap * 0.98;

  float wrap2 = exp(-pow((r - rs * 1.82) / (rs * 0.2), 2.0));
  wrap2 *= pow(abs(sin(phi)), 2.15);
  wrap2 *= 0.22 + 0.95 * approach;
  col += mix(warm, hot, approach) * wrap2 * 0.4;

  float pring = exp(-pow((r - rs * 1.07) / (rs * 0.026), 2.0));
  col += vec3(1.0, 0.8, 0.52) * pring * (0.5 + 0.55 * approach);

  float hz = smoothstep(rs * 1.03, rs * 0.88, r);
  col = mix(col, vec3(0.0), hz);

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function glUsable(): boolean {
  const probe = document.createElement("canvas");
  const gl = probe.getContext("webgl", { alpha: false });
  if (!gl) return false;
  return Boolean(compile(gl, gl.VERTEX_SHADER, VERT) && compile(gl, gl.FRAGMENT_SHADER, FRAG));
}

function mountGL(canvas: HTMLCanvasElement): ((time: number) => void) | null {
  if (!glUsable()) return null;
  const gl = canvas.getContext("webgl", {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: true,
  });
  if (!gl) return null;

  const vs = compile(gl, gl.VERTEX_SHADER, VERT);
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.bindAttribLocation(program, 0, "a_pos");
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
  gl.useProgram(program);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  const uRes = gl.getUniformLocation(program, "u_res");
  const uTime = gl.getUniformLocation(program, "u_time");
  if (!uRes || !uTime) return null;

  const paint = (time: number): void => {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(PAGE[0], PAGE[1], PAGE[2], 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, time);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  return paint;
}

function seedStars(width: number, height: number): Star[] {
  const count = Math.round(Math.min(130, Math.max(48, (width * height) / 14000)));
  return Array.from({ length: count }, (_, i) => ({
    x: hash(i, 1),
    y: hash(i, 2),
    r: 0.35 + hash(i, 3) * 1.05,
    a: 0.2 + hash(i, 4) * 0.5,
    phase: hash(i, 5) * Math.PI * 2,
  }));
}

function paint2D(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  stars: readonly Star[],
  time: number,
  animate: boolean,
): void {
  const { cx, cy, rs } = holeLayout(width, height);
  const spin = animate ? time * 0.07 : 0.2;
  const approachX = cx - rs * 1.15;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(0, 0, width, height);

  for (const star of stars) {
    let x = star.x * width;
    let y = star.y * height;
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.hypot(dx, dy);
    const influence = Math.max(0, 1 - dist / (rs * 4.1));
    const angle = Math.atan2(dy, dx) + influence * influence * 0.64;
    const pull = 1 - influence * 0.28;
    x = cx + Math.cos(angle) * dist * pull;
    y = cy + Math.sin(angle) * dist * pull;
    if (dist < rs * 1.05) continue;
    const stretch = 1 + influence * 2.2;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.atan2(y - cy, x - cx) + Math.PI / 2);
    ctx.fillStyle = `rgba(220,220,214,${star.a * (1 - influence * 0.55)})`;
    ctx.beginPath();
    ctx.ellipse(0, 0, star.r * stretch, star.r * (1 - influence * 0.48), 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  const glow = ctx.createRadialGradient(cx, cy, rs * 0.4, cx, cy, rs * 4.4);
  glow.addColorStop(0, "rgba(255,120,30,0.1)");
  glow.addColorStop(0.35, "rgba(255,90,16,0.04)");
  glow.addColorStop(1, "rgba(10,10,10,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  const rx = rs * 5.4;
  const ry = rs * 1.46;
  const rIn = 0.32;

  ctx.save();
  ctx.beginPath();
  ctx.ellipse(cx, cy + rs * 0.02, rx, ry, 0, 0, Math.PI * 2);
  ctx.ellipse(cx, cy + rs * 0.02, rx * rIn, ry * rIn, 0, 0, Math.PI * 2);
  ctx.clip("evenodd");

  const doppler = ctx.createLinearGradient(cx - rx, cy, cx + rx, cy);
  doppler.addColorStop(0, "rgba(255,246,220,0.92)");
  doppler.addColorStop(0.22, "rgba(255,176,72,0.82)");
  doppler.addColorStop(0.5, "rgba(230,92,18,0.52)");
  doppler.addColorStop(0.78, "rgba(140,28,8,0.32)");
  doppler.addColorStop(1, "rgba(72,10,6,0.18)");
  ctx.fillStyle = doppler;
  ctx.fillRect(cx - rx, cy - ry, rx * 2, ry * 2);

  ctx.globalCompositeOperation = "lighter";
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(spin * 0.35);
  ctx.scale(1, 0.27);
  for (let i = 0; i < 5; i += 1) {
    const ring = rs * (1.95 + i * 0.62);
    ctx.strokeStyle = `rgba(255,210,140,${0.08 + i * 0.015})`;
    ctx.lineWidth = rs * 0.16;
    ctx.beginPath();
    ctx.arc(0, 0, ring, spin + i * 0.7, spin + i * 0.7 + Math.PI * 1.15);
    ctx.stroke();
  }
  ctx.restore();
  ctx.restore();

  const hideFar = ctx.createRadialGradient(cx, cy - rs * 0.15, rs * 0.2, cx, cy - rs * 0.2, rs * 1.15);
  hideFar.addColorStop(0, "#0a0a0a");
  hideFar.addColorStop(0.72, "rgba(10,10,10,0.92)");
  hideFar.addColorStop(1, "rgba(10,10,10,0)");
  ctx.fillStyle = hideFar;
  ctx.beginPath();
  ctx.ellipse(cx, cy - rs * 0.05, rs * 1.2, rs * 0.95, 0, Math.PI, 0);
  ctx.fill();

  const wrapGrad = ctx.createLinearGradient(approachX, cy, cx + rs * 1.4, cy);
  wrapGrad.addColorStop(0, "rgba(255,244,214,0.9)");
  wrapGrad.addColorStop(0.45, "rgba(255,150,48,0.55)");
  wrapGrad.addColorStop(1, "rgba(120,22,8,0.22)");

  ctx.strokeStyle = wrapGrad;
  ctx.lineCap = "round";
  ctx.lineWidth = rs * 0.2;
  ctx.beginPath();
  ctx.arc(cx, cy, rs * 1.36, Math.PI + 0.28, -0.28);
  ctx.stroke();
  ctx.lineWidth = rs * 0.17;
  ctx.beginPath();
  ctx.arc(cx, cy, rs * 1.36, 0.28, Math.PI - 0.28);
  ctx.stroke();

  ctx.lineWidth = rs * 0.1;
  ctx.strokeStyle = "rgba(255,200,120,0.28)";
  ctx.beginPath();
  ctx.arc(cx, cy, rs * 1.78, Math.PI + 0.55, -0.55);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, rs * 1.78, 0.55, Math.PI - 0.55);
  ctx.stroke();

  const horizon = ctx.createRadialGradient(cx, cy, rs * 0.2, cx, cy, rs);
  horizon.addColorStop(0, "#000000");
  horizon.addColorStop(0.82, "#000000");
  horizon.addColorStop(1, "rgba(0,0,0,0.15)");
  ctx.fillStyle = horizon;
  ctx.beginPath();
  ctx.arc(cx, cy, rs, 0, Math.PI * 2);
  ctx.fill();

  const ring = ctx.createLinearGradient(cx - rs, cy, cx + rs, cy);
  ring.addColorStop(0, "rgba(255,236,200,0.85)");
  ring.addColorStop(0.5, "rgba(255,150,50,0.45)");
  ring.addColorStop(1, "rgba(180,40,12,0.28)");
  ctx.strokeStyle = ring;
  ctx.lineWidth = Math.max(1.4, rs * 0.045);
  ctx.beginPath();
  ctx.arc(cx, cy, rs * 1.07, 0, Math.PI * 2);
  ctx.stroke();
}

export function mountWell(): void {
  const canvas = document.querySelector<HTMLCanvasElement>(".well-canvas");
  if (!canvas) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let width = 0;
  let height = 0;
  let dpr = 1;
  let stars: Star[] = [];
  let frame = 0;
  let live = false;
  let glPaint: ((time: number) => void) | null = null;
  let ctx2d: CanvasRenderingContext2D | null = null;

  const resize = (): void => {
    width = Math.max(1, Math.floor(window.innerWidth));
    height = Math.max(1, Math.floor(window.innerHeight));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    stars = seedStars(width, height);
  };

  const paint = (now: number, animate: boolean): void => {
    const time = now * 0.001;
    if (glPaint) {
      glPaint(animate ? time : 1.4);
      return;
    }
    if (!ctx2d) return;
    ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    paint2D(ctx2d, width, height, stars, time, animate);
  };

  const tick = (now: number): void => {
    paint(now, true);
    frame = requestAnimationFrame(tick);
  };

  const stop = (): void => {
    live = false;
    cancelAnimationFrame(frame);
  };

  const start = (): void => {
    resize();
    if (!glPaint && !ctx2d) {
      glPaint = mountGL(canvas);
      if (!glPaint) {
        ctx2d = canvas.getContext("2d", { alpha: false });
      }
    }
    paint(prefersReducedMotion() ? 1400 : performance.now(), !prefersReducedMotion());
    if (prefersReducedMotion()) {
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
      cancelAnimationFrame(frame);
      live = false;
      return;
    }
    start();
  });
}
