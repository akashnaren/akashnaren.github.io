import { paperHref } from "./article.ts";
import {
  isBotPath,
  isEssayPath,
  isPiPaperPath,
  isResearchPath,
  piPaperHref,
} from "./content.ts";
import { applyDocumentMeta, homeMeta, renderSite } from "./render.ts";

function mount(): void {
  if (isEssayPath(location.pathname)) {
    location.replace(paperHref);
    return;
  }
  if (isPiPaperPath(location.pathname)) {
    location.replace(piPaperHref);
    return;
  }
  if (isBotPath(location.pathname)) {
    location.replace("/#bot");
    return;
  }
  if (isResearchPath(location.pathname)) {
    location.replace("/#research");
    return;
  }

  const root = document.getElementById("holder");
  if (!root) return;
  if (!root.classList.contains("home")) {
    root.outerHTML = renderSite();
  }

  applyDocumentMeta(homeMeta);
  bindSeatTips();
}

function bindSeatTips(): void {
  const rows = document.querySelectorAll<HTMLElement>(".collection .row");
  if (rows.length === 0) return;
  const close = () => {
    for (const row of rows) row.classList.remove("is-open");
  };
  for (const row of rows) {
    row.addEventListener("pointerup", (event) => {
      if (event.pointerType === "mouse") return;
      const open = row.classList.contains("is-open");
      close();
      if (!open) row.classList.add("is-open");
    });
  }
  document.addEventListener("pointerup", (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest(".collection .row")) return;
    close();
  });
}

mount();
