import { fishbowlMetaFrom, paperHref } from "./article.ts";
import {
  isBotPath,
  isEssayPath,
  isFishbowlPath,
  isResearchPath,
} from "./content.ts";
import {
  applyDocumentMeta,
  botMeta,
  homeMeta,
  renderBot,
  renderFishbowl,
  renderResearch,
  renderSite,
  researchMeta,
} from "./render.ts";

function mount(): void {
  if (isEssayPath(location.pathname)) {
    location.replace(paperHref);
    return;
  }

  const bot = isBotPath(location.pathname);
  const fishbowl = isFishbowlPath(location.pathname);
  const research = isResearchPath(location.pathname);
  const root = document.getElementById("holder");
  if (!root) return;

  const paintedBot = root.classList.contains("profile");
  const paintedEssay = root.classList.contains("essay");
  const paintedResearch = root.classList.contains("research");
  const paintedHome = Boolean(root.querySelector(".bio"));
  if (fishbowl && !paintedEssay) {
    root.outerHTML = renderFishbowl();
  } else if (bot && !paintedBot) {
    root.outerHTML = renderBot();
  } else if (research && !paintedResearch) {
    root.outerHTML = renderResearch();
  } else if (!bot && !fishbowl && !research && !paintedHome) {
    root.outerHTML = renderSite();
  }

  applyDocumentMeta(
    fishbowl ? fishbowlMetaFrom() : bot ? botMeta : research ? researchMeta : homeMeta,
  );
}

mount();
