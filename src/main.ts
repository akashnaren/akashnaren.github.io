import { bindCrewBoard } from "./board.ts";
import { isBotPath, isResearchPath } from "./content.ts";
import { fitStage } from "./fit.ts";
import {
  applyDocumentMeta,
  botMeta,
  homeMeta,
  renderBot,
  renderResearch,
  renderSite,
  researchMeta,
} from "./render.ts";

function mount(): void {
  const bot = isBotPath(location.pathname);
  const research = isResearchPath(location.pathname);
  const root = document.getElementById("holder");
  if (!root) return;

  const paintedBot = root.classList.contains("profile");
  const paintedResearch = root.classList.contains("research");
  const paintedHome = Boolean(root.querySelector(".sky"));
  if (bot && !paintedBot) {
    root.outerHTML = renderBot();
  } else if (research && !paintedResearch) {
    root.outerHTML = renderResearch();
  } else if (!bot && !research && !paintedHome) {
    root.outerHTML = renderSite();
  }

  applyDocumentMeta(bot ? botMeta : research ? researchMeta : homeMeta);
}

mount();
bindCrewBoard();
fitStage();

window.addEventListener("resize", fitStage);
window.visualViewport?.addEventListener("resize", fitStage);
