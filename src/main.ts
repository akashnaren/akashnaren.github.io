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
}

mount();
