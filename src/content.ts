export type Link = {
  readonly href: string;
  readonly label: string;
};

export type Phrase = string | Link;

export type Paragraph = readonly Phrase[];

export const name = "Akash Premkumar";
export const description =
  "Engineer at Tesla in Redwood City. CS and Math, UC San Diego.";
export const url = "https://akashnaren.github.io/";
export const themeColor = "#0a0a0a";

export const role = {
  prefix: "engineer @ ",
  company: { href: "https://www.tesla.com/", label: "tesla" } satisfies Link,
};

export const body: readonly Paragraph[] = [
  ["I live in Redwood City."],
  [
    "At ",
    { href: "https://www.tesla.com/", label: "Tesla" },
    " I work on diagnostics, telemetry, and data analysis for service engineering.",
  ],
  [
    "Previously I worked on vehicle engineering: bill of materials, full stack applications, ",
    { href: "https://www.tesla.com/robotaxi", label: "robotaxi" },
    ", ",
    { href: "https://www.tesla.com/AI", label: "optimus" },
    ", and ",
    { href: "https://grok.com", label: "grok" },
    " integrations.",
  ],
  [
    "I interned at ",
    { href: "https://www.rtx.com/raytheon", label: "Raytheon" },
    " on an avionics networking test suite.",
  ],
  [
    "I was a project engineer on NASA L’SPACE. I did ",
    {
      href: "https://asanchez.ucsd.edu/research/reactive-flows/",
      label: "fire-whirl research",
    },
    " at UC San Diego, and studied CS and Math there.",
  ],
  [
    "Feel free to reach out to me on ",
    { href: "https://github.com/akashnaren", label: "github" },
    ", ",
    {
      href: "https://www.linkedin.com/in/akash-premkumar-39826b1b7/",
      label: "linkedin",
    },
    ", ",
    { href: "https://x.com/akashpn", label: "x" },
    ", ",
    { href: "https://cursor.com/@akashpn", label: "cursor" },
    ", or ",
    { href: "mailto:apn@agentmail.to", label: "agentmail" },
    ".",
  ],
  [
    "this site is managed by ",
    { href: "https://x.ai/bot", label: "grok bot" },
    ".",
  ],
];

export function isLink(part: Phrase): part is Link {
  return typeof part === "object";
}
