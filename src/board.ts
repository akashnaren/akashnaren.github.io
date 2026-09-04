const COLS = 3;

function tilesIn(board: HTMLElement): HTMLButtonElement[] {
  return [...board.querySelectorAll<HTMLButtonElement>(":scope .tile")];
}

function paintBrief(
  brief: HTMLElement,
  tile: HTMLButtonElement | null,
): void {
  const hint = brief.querySelector<HTMLElement>(".brief-hint");
  const name = brief.querySelector<HTMLElement>(".brief-name");
  const copy = brief.querySelector<HTMLElement>(".brief-copy");
  const open = Boolean(tile);

  brief.classList.toggle("is-open", open);
  if (hint) hint.hidden = open;
  if (name) name.textContent = open ? (tile?.dataset.name ?? "") : "";
  if (copy) copy.textContent = open ? (tile?.dataset.blurb ?? "") : "";
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

  const tiles = tilesIn(board);

  function select(id: string | null, syncHash = true): void {
    const tile = id ? (tiles.find((item) => item.dataset.seat === id) ?? null) : null;
    for (const item of tiles) {
      const on = item === tile;
      item.classList.toggle("is-on", on);
      item.setAttribute("aria-pressed", on ? "true" : "false");
    }
    paintBrief(brief!, tile);
    if (syncHash) markHash(tile?.dataset.seat ?? null);
  }

  board.addEventListener("click", (event) => {
    const tile = (event.target as HTMLElement | null)?.closest<HTMLButtonElement>(".tile");
    if (!tile || !board.contains(tile)) return;
    const id = tile.dataset.seat ?? null;
    select(tile.classList.contains("is-on") ? null : id);
  });

  board.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      select(null);
      return;
    }

    const active = document.activeElement;
    if (!(active instanceof HTMLButtonElement) || !active.classList.contains("tile")) {
      return;
    }
    const index = tiles.indexOf(active);
    if (index < 0) return;

    let next = index;
    if (event.key === "ArrowRight") next = Math.min(tiles.length - 1, index + 1);
    else if (event.key === "ArrowLeft") next = Math.max(0, index - 1);
    else if (event.key === "ArrowDown") next = Math.min(tiles.length - 1, index + COLS);
    else if (event.key === "ArrowUp") next = Math.max(0, index - COLS);
    else return;

    if (next === index) return;
    event.preventDefault();
    tiles[next]?.focus();
  });

  const fromHash = location.hash.replace(/^#/, "");
  if (fromHash && tiles.some((tile) => tile.dataset.seat === fromHash)) {
    select(fromHash, false);
  }
}
