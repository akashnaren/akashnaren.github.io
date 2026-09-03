import { fitStage } from "./fit.ts";
import { renderSite } from "./render.ts";

const root = document.getElementById("holder");
if (root && !root.querySelector(".sky")) {
  root.outerHTML = renderSite();
}

fitStage();

window.addEventListener("resize", fitStage);
window.visualViewport?.addEventListener("resize", fitStage);
