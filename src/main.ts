import { isBotPath } from "./content.ts";
import { fitStage } from "./fit.ts";
import {
  applyDocumentMeta,
  botMeta,
  homeMeta,
  renderBot,
  renderSite,
} from "./render.ts";

function mount(): void {
  const bot = isBotPath(location.pathname);
  const root = document.getElementById("holder");
  if (!root) return;

  const paintedBot = root.classList.contains("fleet");
  const paintedHome = Boolean(root.querySelector(".sky"));
  if (bot && !paintedBot) {
    root.outerHTML = renderBot();
  } else if (!bot && !paintedHome) {
    root.outerHTML = renderSite();
  }

  applyDocumentMeta(bot ? botMeta : homeMeta);
}

mount();
fitStage();

window.addEventListener("resize", fitStage);
window.visualViewport?.addEventListener("resize", fitStage);
