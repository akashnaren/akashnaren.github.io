import { pickLine } from "./content.ts";

const IDLE_MS = 1400;
const SWAP_MS = 160;

function facesIn(board: HTMLElement): HTMLButtonElement[] {
  return [...board.querySelectorAll<HTMLButtonElement>(":scope .face")];
}

function prefersQuiet(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function shortestAim(from: number, to: number): number {
  const raw = ((to - from) % 360) + 360;
  const wrapped = raw % 360;
  const delta = wrapped > 180 ? wrapped - 360 : wrapped;
  return from + delta;
}

export function bindCrewBoard(): void {
  const board = document.querySelector<HTMLElement>(".board");
  if (!board) return;

  const briefNode = board.querySelector<HTMLElement>(".brief");
  const skyNode = board.querySelector<HTMLElement>(".crew-sky");
  if (!briefNode || !skyNode) return;
  const brief: HTMLElement = briefNode;
  const sky: HTMLElement = skyNode;

  const faces = facesIn(board);
  if (faces.length === 0) return;

  const cycleMs = Number(board.dataset.cycle ?? "3000");
  let pointerArmed = false;
  let userHeld = false;
  let cycleTimer = 0;
  let idleTimer = 0;
  let briefTimer = 0;
  let aimDeg = 0;

  function paintBrief(face: HTMLButtonElement | null, fromUser: boolean): void {
    const name = brief.querySelector<HTMLElement>(".brief-name");
    const copy = brief.querySelector<HTMLElement>(".brief-copy");
    if (!name || !copy) return;

    const nextName = face ? (face.dataset.name ?? "") : pickLine;
    const nextCopy = face ? (face.dataset.blurb ?? "") : "";
    brief.setAttribute("aria-live", fromUser ? "polite" : "off");
    brief.classList.toggle("is-open", Boolean(face));

    if (name.textContent === nextName && copy.textContent === nextCopy) return;

    const apply = (): void => {
      name.textContent = nextName;
      copy.textContent = nextCopy;
      brief.classList.remove("is-swap");
    };

    window.clearTimeout(briefTimer);
    if (prefersQuiet()) {
      apply();
      return;
    }

    brief.classList.add("is-swap");
    briefTimer = window.setTimeout(apply, SWAP_MS);
  }

  function paintAim(face: HTMLButtonElement | null): void {
    const index = face ? Math.max(0, faces.indexOf(face)) : 0;
    const target = index * 40;
    aimDeg = shortestAim(aimDeg, target);
    sky.style.setProperty("--aim", `${String(aimDeg)}deg`);
    sky.classList.toggle("is-lit", Boolean(face));
  }

  function select(id: string | null, syncHash = false, fromUser = false): void {
    const face = id ? (faces.find((item) => item.dataset.seat === id) ?? null) : null;
    for (const item of faces) {
      const on = item === face;
      item.classList.toggle("is-on", on);
      item.setAttribute("aria-pressed", on ? "true" : "false");
    }
    paintBrief(face, fromUser);
    paintAim(face);
    if (syncHash) {
      const next = face ? `#${face.dataset.seat ?? ""}` : `${location.pathname}${location.search}`;
      history.replaceState(null, "", next);
    }
  }

  function stopCycle(): void {
    window.clearInterval(cycleTimer);
    cycleTimer = 0;
  }

  function startCycle(): void {
    stopCycle();
    if (!Number.isFinite(cycleMs) || cycleMs <= 0) return;
    cycleTimer = window.setInterval(() => {
      if (userHeld) return;
      const current = faces.findIndex((item) => item.classList.contains("is-on"));
      const next = current < 0 ? 0 : (current + 1) % faces.length;
      select(faces[next]?.dataset.seat ?? null);
    }, cycleMs);
  }

  function hold(face: HTMLButtonElement): void {
    userHeld = true;
    window.clearTimeout(idleTimer);
    stopCycle();
    select(face.dataset.seat ?? null, false, true);
  }

  function release(): void {
    userHeld = false;
    window.clearTimeout(idleTimer);
    idleTimer = window.setTimeout(() => {
      if (!userHeld) startCycle();
    }, IDLE_MS);
  }

  board.addEventListener("pointerdown", () => {
    pointerArmed = true;
  });

  board.addEventListener("click", (event) => {
    pointerArmed = false;
    const face = (event.target as HTMLElement | null)?.closest<HTMLButtonElement>(".face");
    if (!face || !board.contains(face)) return;
    select(face.dataset.seat ?? null, true, true);
  });

  for (const face of faces) {
    face.addEventListener("pointerenter", () => {
      hold(face);
    });
    face.addEventListener("pointerleave", () => {
      release();
    });
  }

  board.addEventListener("focusin", (event) => {
    const face = (event.target as HTMLElement | null)?.closest<HTMLButtonElement>(".face");
    if (!face || !board.contains(face)) return;
    hold(face);
  });

  board.addEventListener("focusout", (event) => {
    const next = event.relatedTarget;
    if (next instanceof Node && board.contains(next)) {
      const face = (next as HTMLElement).closest(".face");
      if (face && board.contains(face)) return;
    }
    if (pointerArmed) return;
    release();
  });

  board.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      (document.activeElement as HTMLElement | null)?.blur();
      release();
      return;
    }

    const active = document.activeElement;
    if (!(active instanceof HTMLButtonElement) || !active.classList.contains("face")) {
      return;
    }
    const index = faces.indexOf(active);
    if (index < 0) return;

    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (index + 1) % faces.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index - 1 + faces.length) % faces.length;
    } else return;

    if (next === index) return;
    event.preventDefault();
    faces[next]?.focus();
  });

  const fromHash = location.hash.replace(/^#/, "");
  const hashed = fromHash && faces.some((face) => face.dataset.seat === fromHash);
  const current = faces.find((face) => face.classList.contains("is-on"));
  const startId = hashed
    ? fromHash
    : (current?.dataset.seat ?? faces[0]?.dataset.seat ?? null);
  const startFace = startId ? (faces.find((item) => item.dataset.seat === startId) ?? null) : null;
  aimDeg = startFace ? Math.max(0, faces.indexOf(startFace)) * 40 : 0;
  select(startId, false);
  startCycle();
}
