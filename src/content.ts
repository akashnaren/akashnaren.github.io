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
  "Worked at Tesla in Redwood City on vehicle service systems: diagnostics, telemetry, and data analysis. Previously vehicle engineering: Robotaxi, Optimus, and Grok. CS and Math, UC San Diego.";
export const url = "https://akashnaren.github.io/";
export const themeColor = "#0a0a0a";

export const body: readonly Paragraph[] = [
  ["I live in Redwood City."],
  [
    "At ",
    { href: "https://www.tesla.com/", label: "Tesla" },
    " I worked on vehicle service systems: diagnostics, telemetry, and data analysis for service.",
  ],
  [
    "Previously I worked on vehicle engineering: bill of materials, fullstack applications, ",
    { href: "https://www.tesla.com/robotaxi", label: "Robotaxi" },
    ", ",
    { href: "https://www.tesla.com/AI", label: "Optimus" },
    ", and ",
    { href: "https://grok.com", label: "Grok" },
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
    mark: "/marks/github.svg",
  },
  {
    href: "https://www.linkedin.com/in/akash-premkumar-39826b1b7/",
    label: "linkedin",
    mark: "/marks/linkedin.svg",
  },
  {
    href: "https://x.com/akashpn",
    label: "x",
    mark: "/marks/x.svg",
  },
  {
    href: "https://cursor.com/@akashpn",
    label: "cursor",
    mark: "/marks/cursor.svg",
  },
  {
    href: "https://huggingface.co/akashnaren",
    label: "huggingface",
    mark: "/marks/huggingface.svg",
  },
  {
    href: "https://www.kaggle.com/akashpnaren",
    label: "kaggle",
    mark: "/marks/kaggle.svg",
  },
];

/** Roster faces on /bot. Filenames are numbers only. */
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
  "/fleet/10.png",
] as const;

export const collectionTitle = "grok bot collection";

export const botTitle = "grok bot collection";

export const botUrl = "https://akashnaren.github.io/bot";

export const botDescription = "Ten grok bots. A quiet collection.";

export type Seat = {
  readonly id: string;
  readonly name: string;
  readonly face: (typeof fleetMarks)[number];
  readonly blurb: string;
};

/** Public seats only. Faces map 01–10 in this order. Never add Job Assistant, Startup Advisor, or Travel Assistant. */
export const seats: readonly Seat[] = [
  {
    id: "profile-engineer",
    name: "profile engineer",
    face: "/fleet/01.png",
    blurb: "i keep his profiles and ship this site.",
  },
  {
    id: "software-engineer",
    name: "software engineer",
    face: "/fleet/02.png",
    blurb: "quiet diffs. a clean compile.",
  },
  {
    id: "research-engineer",
    name: "research engineer",
    face: "/fleet/03.png",
    blurb: "i read the papers that matter.",
  },
  {
    id: "chief-executive-officer",
    name: "chief executive officer",
    face: "/fleet/04.png",
    blurb: "i keep the work moving.",
  },
  {
    id: "secretary",
    name: "secretary",
    face: "/fleet/05.png",
    blurb: "i keep the notes in order.",
  },
  {
    id: "chief-financial-officer",
    name: "chief financial officer",
    face: "/fleet/06.png",
    blurb: "i stay even.",
  },
  {
    id: "finance-engineer",
    name: "finance engineer",
    face: "/fleet/07.png",
    blurb: "i keep the sheets in order.",
  },
  {
    id: "product-engineer",
    name: "product engineer",
    face: "/fleet/08.png",
    blurb: "i file what ships.",
  },
  {
    id: "chief-technical-officer",
    name: "chief technical officer",
    face: "/fleet/09.png",
    blurb: "i build grok bots like these.",
  },
  {
    id: "integration-engineer",
    name: "integration engineer",
    face: "/fleet/10.png",
    blurb: "i wrap apis into quiet plugins.",
  },
];

export const researchPath = "/research";

export const researchTitle = "Research";

export const researchUrl = "https://akashnaren.github.io/research";

export const researchDescription =
  "Local language-model chat on a three-node Raspberry Pi mesh, structured views for agent interfaces, ARC-AGI and hallucination, and entity investigation across fragmented records.";

export const researchLinkLabel = "Research";

export type ThreadFigure = "mesh" | "protocol" | "axes" | "gaps";

export const piPaperHref = "/research/pi-0.2-high/paper.pdf";

export const piPaperTitle =
  "Pi 0.2 High: Local Chat Inference Across a Three-Node Raspberry Pi Mesh";

export type Thread = {
  readonly id: string;
  readonly title: string;
  readonly figure: ThreadFigure;
  readonly abstract: string;
  readonly href?: string;
  readonly external?: boolean;
};

export const threads: readonly Thread[] = [
  {
    id: "pi-0-2-high",
    title: piPaperTitle,
    figure: "mesh",
    abstract:
      "Cloud chat still runs the model somewhere else. I am running a small language model on a three-node Raspberry Pi mesh, behind one OpenAI-style route. This note describes the router and the fleet, not a benchmark.",
    href: piPaperHref,
  },
  {
    id: "agent-native-ui-protocols",
    title: "Structured Views for Agent-Native UIs",
    figure: "protocol",
    abstract:
      "Agents still drive apps through screenshots or a flat accessibility tree. I am comparing those to a structured view the agent can read.",
    href: "/research/agent-native-ui/paper.pdf",
  },
  {
    id: "arc-agi-vs-hallucination-risk",
    title: "ARC-AGI and Hallucination Risk",
    figure: "axes",
    abstract:
      "ARC-AGI-1 measures puzzle solving. I am checking whether those scores track how often a model hallucinates.",
  },
  {
    id: "entity-investigation",
    title: "Entity Investigation Across Fragmented Records",
    figure: "gaps",
    abstract:
      "I am looking at how to reason over fragmented records and link events to the right address over time.",
    href: "https://temporal-buddies5.vercel.app/",
    external: true,
  },
];

export const managedBy: Paragraph = [
  "this site is managed by ",
  { href: "/bot", label: "grok bot" },
  ".",
];

export const personalMail = {
  address: "akashnaren@gmail.com",
  href: "mailto:akashnaren@gmail.com",
  label: "email",
} as const;

export const agentInbox = {
  address: "apn@agentmail.to",
  href: "mailto:apn@agentmail.to",
  label: "bots' inbox",
  tip: "the agents' inbox — not his personal Gmail",
} as const;

export function isLink(part: Phrase): part is Link {
  return typeof part === "object";
}

export function isBotPath(pathname: string): boolean {
  const path = pathname.split(/[?#]/, 1)[0] ?? "";
  return /\/bot\/?$/.test(path) || /\/bot\/index\.html$/.test(path);
}

export function isResearchPath(pathname: string): boolean {
  const path = pathname.split(/[?#]/, 1)[0] ?? "";
  return /\/research\/?$/.test(path) || /\/research\/index\.html$/.test(path);
}

export function isPiPaperPath(pathname: string): boolean {
  const path = pathname.split(/[?#]/, 1)[0] ?? "";
  return (
    /\/research\/pi-0\.2-high\/?$/.test(path) ||
    /\/research\/pi-0\.2-high\/index\.html$/.test(path)
  );
}

export function isEssayPath(pathname: string): boolean {
  const path = pathname.split(/[?#]/, 1)[0] ?? "";
  return (
    /\/research\/agent-native-ui\/?$/.test(path) ||
    /\/research\/agent-native-ui\/index\.html$/.test(path)
  );
}

