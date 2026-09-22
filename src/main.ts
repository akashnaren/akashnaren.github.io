import { essayMetaFrom, fishbowlMetaFrom } from "./article.ts";
import { bindCrewBoard } from "./board.ts";
import { bindLiveRack } from "./rack.ts";
import { isBotPath, isEssayPath, isFishbowlPath, isResearchPath, pacificDay } from "./content.ts";
import { fitStage } from "./fit.ts";
import {
  applyDocumentMeta,
  botMeta,
  homeMeta,
  renderBot,
  renderEssay,
  renderFishbowl,
  renderResearch,
  renderSite,
  researchMeta,
} from "./render.ts";

function revealFresh(root: ParentNode = document): void {
  const today = pacificDay();
  for (const mark of root.querySelectorAll<HTMLElement>("[data-posted]")) {
    const dates = (mark.getAttribute("data-posted") ?? "").split(/\s+/).filter(Boolean);
    mark.hidden = !dates.includes(today);
  }
}

function mount(): void {
  const bot = isBotPath(location.pathname);
  const essay = isEssayPath(location.pathname);
  const fishbowl = isFishbowlPath(location.pathname);
  const research = isResearchPath(location.pathname);
  const root = document.getElementById("holder");
  if (!root) return;

  const paintedBot = root.classList.contains("profile");
  const paintedEssay = root.classList.contains("essay");
  const paintedResearch = root.classList.contains("research");
  const paintedHome = Boolean(root.querySelector(".sky"));
  if (essay && !paintedEssay) {
    root.outerHTML = renderEssay();
  } else if (fishbowl && !paintedEssay) {
    root.outerHTML = renderFishbowl();
  } else if (bot && !paintedBot) {
    root.outerHTML = renderBot();
  } else if (research && !paintedResearch) {
    root.outerHTML = renderResearch();
  } else if (!bot && !essay && !fishbowl && !research && !paintedHome) {
    root.outerHTML = renderSite();
  }

  applyDocumentMeta(
    essay
      ? essayMetaFrom()
      : fishbowl
        ? fishbowlMetaFrom()
        : bot
          ? botMeta
          : research
            ? researchMeta
            : homeMeta,
  );
}

mount();
revealFresh();
bindCrewBoard();
bindLiveRack();
fitStage();

window.addEventListener("resize", fitStage);
window.visualViewport?.addEventListener("resize", fitStage);
