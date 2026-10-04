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
  "Tesla — Vehicle Service (Internal Tooling, Diagnostics, Telemetry, Data Analysis). Tesla — Vehicle Engineering (Part Data Hub, Cybercab + Robotaxi Program, Grok Integrations). Raytheon — Avionics Networking Test Suite. NASA L’SPACE — asteroid preliminary design review, terrain mapping identification proposal. Multiscale Flow Physics Lab, UC San Diego, and independent work.";
export const url = "https://akashnaren.github.io/";
export const themeColor = "#0a0a0a";

export const workHeading = "Work";

export const workLines: readonly Paragraph[] = [
  [
    { href: "https://www.tesla.com/", label: "Tesla" },
    " — Vehicle Service (Internal Tooling, Diagnostics, Telemetry, Data Analysis)",
  ],
  [
    { href: "https://www.tesla.com/", label: "Tesla" },
    " — Vehicle Engineering (Part Data Hub, ",
    { href: "https://www.tesla.com/robotaxi", label: "Cybercab + Robotaxi Program" },
    ", ",
    { href: "https://grok.com", label: "Grok" },
    " Integrations)",
  ],
  [
    { href: "https://www.rtx.com/raytheon", label: "Raytheon" },
    " — Avionics Networking Test Suite",
  ],
  [
    { href: "https://www.lspace.asu.edu/", label: "NASA L’SPACE" },
    " — asteroid preliminary design review, terrain mapping identification proposal",
  ],
];

export const profilesHeading = "Profiles";

export const mailHeading = "Mail";

export const researchHeading = "Research";

/** Landing lines only. Topic blurbs stay on /research. */
export const researchLines: readonly Paragraph[] = [
  [
    {
      href: "https://asanchez.ucsd.edu/research/reactive-flows/",
      label: "Multiscale Flow Physics Lab, UC San Diego",
    },
  ],
  [{ href: "/research", label: "Independent work" }],
];

export const contact: readonly Contact[] = [
  {
    href: "https://github.com/akashnaren",
    label: "GitHub",
    mark: "/marks/github.svg",
  },
  {
    href: "https://www.linkedin.com/in/akash-premkumar-39826b1b7/",
    label: "LinkedIn",
    mark: "/marks/linkedin.svg",
  },
  {
    href: "https://x.com/akashpn",
    label: "X",
    mark: "/marks/x.svg",
  },
  {
    href: "https://cursor.com/@akashpn",
    label: "Cursor",
    mark: "/marks/cursor.svg",
  },
  {
    href: "https://huggingface.co/akashnaren",
    label: "Hugging Face",
    mark: "/marks/huggingface.svg",
  },
  {
    href: "https://www.kaggle.com/akashpnaren",
    label: "Kaggle",
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
  "/fleet/11.png",
  "/fleet/12.png",
  "/fleet/13.png",
  "/fleet/14.png",
] as const;

export const collectionTitle = "grok bot collection";

export const botTitle = "grok bot collection";

export const botUrl = "https://akashnaren.github.io/bot";

export const botDescription = "grok bot collection";

export type Seat = {
  readonly id: string;
  readonly name: string;
  readonly face: (typeof fleetMarks)[number];
  readonly blurb: string;
};

/** Public seats only. Faces map 01–14 in this order. Never add Job Assistant, Startup Advisor, or Travel Assistant. */
export const seats: readonly Seat[] = [
  {
    id: "profile-lead",
    name: "profile lead",
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
    id: "executive-secretary",
    name: "executive secretary",
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
  {
    id: "imagine-engineer",
    name: "imagine engineer",
    face: "/fleet/11.png",
    blurb: "i turn big ideas into something you can build.",
  },
  {
    id: "social-lead",
    name: "social lead",
    face: "/fleet/12.png",
    blurb: "i find the events worth showing up for.",
  },
  {
    id: "storage-engineer",
    name: "storage engineer",
    face: "/fleet/13.png",
    blurb: "i keep the disk honest.",
  },
  {
    id: "triage-engineer",
    name: "triage engineer",
    face: "/fleet/14.png",
    blurb: "i sort what lands first.",
  },
];

export const researchPath = "/research";

export const researchTitle = "Research";

export const researchUrl = "https://akashnaren.github.io/research";

export const researchDescription =
  "Local language-model chat on a Raspberry Pi mesh, structured views for agent interfaces, ARC-AGI and hallucination, and entity resolution across fragmented records.";

export type ThreadFigure = "mesh" | "protocol" | "axes" | "gaps";

export const piPaperHref = "/research/pi-0.2-high/paper.pdf";

export const piPaperTitle = "Raspberry Pi Inference Mesh";

export type Thread = {
  readonly id: string;
  readonly title: string;
  readonly figure: ThreadFigure;
  readonly abstract: string;
  readonly href?: string;
  readonly external?: boolean;
  /** Links listed under the thread title and abstract. */
  readonly links?: readonly Link[];
};

export const threads: readonly Thread[] = [
  {
    id: "pi-0-2-high",
    title: piPaperTitle,
    figure: "mesh",
    abstract:
      "I am running local language-model chat on a Raspberry Pi mesh.",
    href: piPaperHref,
    links: [
      {
        href: "http://100.100.197.18:18080/",
        label: "Pi GPT 1.0",
      },
    ],
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
    title: "Entity Resolution Across Fragmented Records",
    figure: "gaps",
    abstract:
      "I am looking at how to reason over fragmented records and link events to the right address over time.",
    links: [
      {
        href: "https://temporal-buddies5.vercel.app/",
        label: "Temporal",
      },
    ],
  },
];

export const managedBy: Paragraph = [
  "this site is managed by ",
  { href: "/bot", label: "grok bot" },
  ".",
];

/** Home only. /bot and /research keep the quieter managedBy line. */
export const homeManagedBy: Paragraph = [
  "Managed by ",
  { href: "/bot", label: "Grok Bot" },
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

