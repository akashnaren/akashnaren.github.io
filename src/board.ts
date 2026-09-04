import { pickLine } from "./content.ts";

const IDLE_MS = 1400;
const SWAP_MS = 160;

function rowsIn(board: HTMLElement): HTMLButtonElement[] {
  return [...board.querySelectorAll<HTMLButtonElement>(":scope .row")];
}

function prefersQuiet(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function bindCrewBoard(): void {
  const board = document.querySelector<HTMLElement>(".board");
  if (!board) return;

  const briefNode = board.querySelector<HTMLElement>(".brief");
  if (!briefNode) return;
  const brief: HTMLElement = briefNode;

  const rows = rowsIn(board);
  if (rows.length === 0) return;

  const cycleMs = Number(board.dataset.cycle ?? "3000");
  let pointerArmed = false;
  let userHeld = false;
  let cycleTimer = 0;
  let idleTimer = 0;
  let briefTimer = 0;

  function paintBrief(row: HTMLButtonElement | null, fromUser: boolean): void {
    const name = brief.querySelector<HTMLElement>(".brief-name");
    const copy = brief.querySelector<HTMLElement>(".brief-copy");
    if (!name || !copy) return;

    const nextName = row ? (row.dataset.name ?? "") : pickLine;
    const nextCopy = row ? (row.dataset.blurb ?? "") : "";
    brief.setAttribute("aria-live", fromUser ? "polite" : "off");
    brief.classList.toggle("is-open", Boolean(row));

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

  function select(id: string | null, syncHash = false, fromUser = false): void {
    const row = id ? (rows.find((item) => item.dataset.seat === id) ?? null) : null;
    for (const item of rows) {
      const on = item === row;
      item.classList.toggle("is-on", on);
      item.setAttribute("aria-pressed", on ? "true" : "false");
    }
    paintBrief(row, fromUser);
    if (syncHash) {
      const next = row ? `#${row.dataset.seat ?? ""}` : `${location.pathname}${location.search}`;
      history.replaceState(null, "", next);
    }
  }

  function stopCycle(): void {
    window.clearInterval(cycleTimer);
    cycleTimer = 0;
  }

  function startCycle(): void {
    stopCycle();
    if (prefersQuiet()) return;
    if (!Number.isFinite(cycleMs) || cycleMs <= 0) return;
    cycleTimer = window.setInterval(() => {
      if (userHeld) return;
      const current = rows.findIndex((item) => item.classList.contains("is-on"));
      const next = current < 0 ? 0 : (current + 1) % rows.length;
      select(rows[next]?.dataset.seat ?? null);
    }, cycleMs);
  }

  function hold(row: HTMLButtonElement): void {
    userHeld = true;
    window.clearTimeout(idleTimer);
    stopCycle();
    select(row.dataset.seat ?? null, false, true);
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
    const row = (event.target as HTMLElement | null)?.closest<HTMLButtonElement>(".row");
    if (!row || !board.contains(row)) return;
    select(row.dataset.seat ?? null, true, true);
  });

  for (const row of rows) {
    row.addEventListener("pointerenter", () => {
      hold(row);
    });
    row.addEventListener("pointerleave", () => {
      release();
    });
  }

  board.addEventListener("focusin", (event) => {
    const row = (event.target as HTMLElement | null)?.closest<HTMLButtonElement>(".row");
    if (!row || !board.contains(row)) return;
    hold(row);
  });

  board.addEventListener("focusout", (event) => {
    const next = event.relatedTarget;
    if (next instanceof Node && board.contains(next)) {
      const row = (next as HTMLElement).closest(".row");
      if (row && board.contains(row)) return;
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
    if (!(active instanceof HTMLButtonElement) || !active.classList.contains("row")) {
      return;
    }
    const index = rows.indexOf(active);
    if (index < 0) return;

    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (index + 1) % rows.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index - 1 + rows.length) % rows.length;
    } else return;

    if (next === index) return;
    event.preventDefault();
    rows[next]?.focus();
  });

  const fromHash = location.hash.replace(/^#/, "");
  const hashed = fromHash && rows.some((row) => row.dataset.seat === fromHash);
  const current = rows.find((row) => row.classList.contains("is-on"));
  const startId = hashed
    ? fromHash
    : (current?.dataset.seat ?? rows[0]?.dataset.seat ?? null);
  select(startId, false);
  startCycle();
}
