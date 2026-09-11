import { essayUrl } from "./content.ts";

export const paperHref = "/research/agent-native-ui/paper.pdf";

export const paperTitle =
  "The Interface Is a Variable: Measuring the Cost and Reliability of Purpose-Built UI Representations for LLM Agents";

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
