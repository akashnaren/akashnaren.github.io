export type Link = {
  readonly href: string;
  readonly label: string;
};

export type Phrase = string | Link;

export type Paragraph = readonly Phrase[];

export type Contact = Link & {
  readonly mark: string;
};

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
];

export const contact: readonly Contact[] = [
  {
    href: "https://github.com/akashnaren",
    label: "github",
    mark: "/marks/github.ico",
  },
  {
    href: "https://www.linkedin.com/in/akash-premkumar-39826b1b7/",
    label: "linkedin",
    mark: "/marks/linkedin.ico",
  },
  {
    href: "https://x.com/akashpn",
    label: "x",
    mark: "/marks/x.ico",
  },
  {
    href: "https://cursor.com/@akashpn",
    label: "cursor",
    mark: "/marks/cursor.svg",
  },
];

/** Unlabeled sidebar faces. Filenames are numbers only. */
export const fleetMarks = [
  "/fleet/01.png",
  "/fleet/02.png",
  "/fleet/03.png",
  "/fleet/04.png",
  "/fleet/05.png",
  "/fleet/06.png",
  "/fleet/07.png",
  "/fleet/08.png",
  "/fleet/09.png",
] as const;

export const fleetMarkSize = 24;

export const managedMark = {
  src: "/fleet/05.png",
  width: 14,
  height: 14,
} as const;

export const fleetLine = "nine grok bots keep this page.";

export const managedBy: Paragraph = [
  "this site is managed by ",
  { href: "https://x.ai/bot", label: "grok bot" },
  ".",
];

export const agentInbox = {
  address: "apn@agentmail.to",
  href: "mailto:apn@agentmail.to",
} as const;

export const agentNote: Paragraph = [
  "Write my grok bots at ",
  { href: agentInbox.href, label: agentInbox.address },
  " — that’s their inbox, not mine.",
];

export function isLink(part: Phrase): part is Link {
  return typeof part === "object";
}
