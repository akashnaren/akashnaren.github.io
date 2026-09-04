import { pickLine } from "./content.ts";

function facesIn(board: HTMLElement): HTMLButtonElement[] {
  return [...board.querySelectorAll<HTMLButtonElement>(":scope .face")];
}

function paintBrief(
  brief: HTMLElement,
  face: HTMLButtonElement | null,
): void {
  const name = brief.querySelector<HTMLElement>(".brief-name");
  const copy = brief.querySelector<HTMLElement>(".brief-copy");
  const open = Boolean(face);

  brief.classList.toggle("is-open", open);
  if (name) name.textContent = open ? (face?.dataset.name ?? "") : pickLine;
  if (copy) copy.textContent = open ? (face?.dataset.blurb ?? "") : "";
}

function markHash(id: string | null): void {
  const next = id ? `#${id}` : `${location.pathname}${location.search}`;
  history.replaceState(null, "", next);
}

export function bindCrewBoard(): void {
  const board = document.querySelector<HTMLElement>(".board");
  if (!board) return;

  const brief = board.querySelector<HTMLElement>(".brief");
  if (!brief) return;

  const faces = facesIn(board);

  function select(id: string | null, syncHash = true): void {
    const face = id ? (faces.find((item) => item.dataset.seat === id) ?? null) : null;
    for (const item of faces) {
      const on = item === face;
      item.classList.toggle("is-on", on);
      item.setAttribute("aria-pressed", on ? "true" : "false");
    }
    paintBrief(brief!, face);
    if (syncHash) markHash(face?.dataset.seat ?? null);
  }

  board.addEventListener("click", (event) => {
    const face = (event.target as HTMLElement | null)?.closest<HTMLButtonElement>(".face");
    if (!face || !board.contains(face)) return;
    const id = face.dataset.seat ?? null;
    select(face.classList.contains("is-on") ? null : id);
  });

  board.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      select(null);
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
      next = Math.min(faces.length - 1, index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = Math.max(0, index - 1);
    } else return;

    if (next === index) return;
    event.preventDefault();
    faces[next]?.focus();
  });

  const fromHash = location.hash.replace(/^#/, "");
  if (fromHash && faces.some((face) => face.dataset.seat === fromHash)) {
    select(fromHash, false);
  }
}
