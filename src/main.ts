import {
  isPiPaperPath,
  isResearchPath,
  piPaperHref,
} from "./content.ts";
import { applyDocumentMeta, homeMeta, renderSite } from "./render.ts";

function mount(): void {
  if (isPiPaperPath(location.pathname)) {
    location.replace(piPaperHref);
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
