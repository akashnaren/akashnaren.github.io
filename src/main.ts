import { essayMetaFrom, parseArticle } from "./article.ts";
import { bindCrewBoard } from "./board.ts";
import { isBotPath, isEssayPath, isResearchPath } from "./content.ts";
import { fitStage } from "./fit.ts";
import {
  applyDocumentMeta,
  botMeta,
  homeMeta,
  renderBot,
  renderEssay,
  renderResearch,
  renderSite,
  researchMeta,
} from "./render.ts";
import articleSource from "../content/research/agent-native-ui.md?raw";

function mount(): void {
  const bot = isBotPath(location.pathname);
  const essay = isEssayPath(location.pathname);
  const research = isResearchPath(location.pathname);
  const root = document.getElementById("holder");
  if (!root) return;

  const paintedBot = root.classList.contains("profile");
  const paintedEssay = root.classList.contains("essay");
  const paintedResearch = root.classList.contains("research");
  const paintedHome = Boolean(root.querySelector(".sky"));
  const essayDoc = essay ? parseArticle(articleSource) : null;
  if (essay && !paintedEssay && essayDoc) {
    root.outerHTML = renderEssay(essayDoc);
  } else if (bot && !paintedBot) {
    root.outerHTML = renderBot();
  } else if (research && !paintedResearch) {
    root.outerHTML = renderResearch();
  } else if (!bot && !essay && !research && !paintedHome) {
    root.outerHTML = renderSite();
  }

  applyDocumentMeta(
    essay && essayDoc
      ? essayMetaFrom(essayDoc)
      : bot
        ? botMeta
        : research
          ? researchMeta
          : homeMeta,
  );
}

mount();
bindCrewBoard();
fitStage();

window.addEventListener("resize", fitStage);
window.visualViewport?.addEventListener("resize", fitStage);
