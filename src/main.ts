import { paperHref } from "./article.ts";
import {
  isBotPath,
  isEssayPath,
  isPiPaperPath,
  isResearchPath,
  piPaperHref,
} from "./content.ts";
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
  if (isEssayPath(location.pathname)) {
    location.replace(paperHref);
    return;
  }
  if (isPiPaperPath(location.pathname)) {
    location.replace(piPaperHref);
    return;
  }

  const bot = isBotPath(location.pathname);
  const research = isResearchPath(location.pathname);
  const root = document.getElementById("holder");
  if (!root) return;

  const paintedBot = root.classList.contains("profile");
  const paintedResearch = root.classList.contains("research");
  const paintedHome = Boolean(root.querySelector(".bio"));
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
