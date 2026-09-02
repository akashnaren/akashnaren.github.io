import { fitStage } from "./fit.ts";
import { renderSite } from "./render.ts";
import { mountWell } from "./well.ts";

const root = document.getElementById("holder");
if (root) {
  root.outerHTML = renderSite();
}

fitStage();
mountWell();

window.addEventListener("resize", fitStage);
window.visualViewport?.addEventListener("resize", fitStage);
