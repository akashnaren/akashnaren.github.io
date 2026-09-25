import { fishbowlUrl } from "./content.ts";

export const paperHref = "/research/agent-native-ui/paper.pdf";

export const paperTitle =
  "The Interface Is a Variable: Measuring the Cost and Reliability of Purpose-Built UI Representations for LLM Agents";

export const fishbowlPaperHref = "/research/fishbowl/paper.pdf";

export const fishbowlPaperTitle =
  "Fishbowl: An Event-Log Truthful Multi-Agent Office on a Raspberry Pi";

export const flowHref = "/research/fishbowl/flow.pdf";

export const meshHref = "/research/fishbowl/mesh-architecture.pdf";

// Product renders belong in paper.pdf: rack-hero-render, rack-front-render,
// rack-top-render from /workspace/state/profile-ideas/pi-paper-photos/.
// Run scripts/embed-fishbowl-renders.py when that set is on disk. No studio crops, no P2S.

export function fishbowlMetaFrom(): {
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly themeColor: string;
} {
  return {
    title: fishbowlPaperTitle,
    description: fishbowlPaperTitle,
    url: fishbowlUrl,
    themeColor: "#ffffff",
  };
}
