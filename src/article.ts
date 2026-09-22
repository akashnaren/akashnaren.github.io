import { essayUrl, fishbowlUrl } from "./content.ts";

export const paperHref = "/research/agent-native-ui/paper.pdf";

export const paperTitle =
  "The Interface Is a Variable: Measuring the Cost and Reliability of Purpose-Built UI Representations for LLM Agents";

export const fishbowlPaperHref = "/research/fishbowl/paper.pdf";

export const fishbowlPaperTitle =
  "Fishbowl: An Event-Log Truthful Multi-Agent Office on a Raspberry Pi";

export const flowHref = "/research/fishbowl/flow.pdf";

export const flowTitle = "Fishbowl on a Raspberry Pi";

export function essayMetaFrom(): {
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly themeColor: string;
} {
  return {
    title: paperTitle,
    description: paperTitle,
    url: essayUrl,
    themeColor: "#ffffff",
  };
}

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
