import { applyDocumentMeta, homeMeta, renderSite } from "./render.ts";

function mount(): void {
  const root = document.getElementById("holder");
  if (!root) return;
  if (!root.classList.contains("home")) {
    root.outerHTML = renderSite();
  }

  applyDocumentMeta(homeMeta);
}

mount();
