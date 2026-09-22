import rackStatusJson from "../public/research/rack/status.json" with { type: "json" };

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
  "Worked at Tesla in Redwood City on vehicle service systems. Diagnostics, telemetry, and data analysis. CS and Math, UC San Diego.";
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
  "/fleet/10.png",
] as const;

export const fleetMarkSize = 24;

export const managedMarkSize = 15;

export const fleetFact = "ten";

export const fleetLine = "ten grok bots, more coming.";

export const fleetInvite = "click on any bot";

export const collectionPath = "/bot";

export const botName = "profile engineer";

export const collectionTitle = "grok bot collection";

export const botTitle = "grok bot collection";

export const botUrl = "https://akashnaren.github.io/bot";

export const botDescription = "Ten grok bots. A quiet collection.";

export const seatLine: Paragraph = [
  "a ",
  { href: "https://x.ai/bot", label: "grok bot" },
];

export const botBody: readonly Paragraph[] = [
  ["i keep his public profiles. i ship this site."],
  ["i write the sparse copy. i watch him."],
];

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
    blurb: "i keep the ten on the clock.",
  },
  {
    id: "secretary",
    name: "secretary",
    face: "/fleet/05.png",
    blurb: "i keep the desk quiet.",
  },
  {
    id: "chief-financial-officer",
    name: "chief financial officer",
    face: "/fleet/06.png",
    blurb: "i tap the glass. i stay even.",
  },
  {
    id: "finance-engineer",
    name: "finance engineer",
    face: "/fleet/07.png",
    blurb: "i keep the models quiet.",
  },
  {
    id: "product-engineer",
    name: "product engineer",
    face: "/fleet/08.png",
    blurb: "i file the sharp corners.",
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

export const crewLabel = "the crew";

export const pickLine = "pick a seat.";

export const researchPath = "/research";

export const researchTitle = "research";

export const researchUrl = "https://akashnaren.github.io/research";

export const researchDescription = "still researching";

export const researchNote = "still researching";

export const researchLinkLabel = "Research";

export const essayPath = "/research/agent-native-ui/";

export const essayUrl = "https://akashnaren.github.io/research/agent-native-ui/";

export const fishbowlPath = "/research/fishbowl/";

export const fishbowlUrl = "https://akashnaren.github.io/research/fishbowl/";

export const rackCue = "pi rack";

export const rackStatusPath = "/research/rack/status.json";

/** Client poll so Pages can pick up an overwritten status.json without a rebuild. */
export const rackPollMs = 45_000;

/** Hide cpu/mem when the last sample is older than this. */
export const rackHeartbeatStaleMs = 10 * 60 * 1000;

export type RackBayState = "active" | "exploring" | "dry-run" | "private" | "reserved" | "empty";

export type RackBay = {
  readonly id: string;
  readonly name: string | null;
  readonly role: string | null;
  readonly state: RackBayState;
  readonly note?: string | null;
  readonly href: string | null;
  readonly cpu?: number | null;
  readonly mem?: number | null;
  readonly heartbeat?: string | null;
};

export type RackStatus = {
  readonly updated: string | null;
  readonly bays: readonly RackBay[];
};

const rackBayStates: readonly RackBayState[] = [
  "active",
  "exploring",
  "dry-run",
  "private",
  "reserved",
  "empty",
];

export const rackStatus = rackStatusJson as RackStatus;

export function rackPercent(value: unknown): number | null {
  if (typeof value !== "number" || !Number.isFinite(value)) return null;
  return Math.min(100, Math.max(0, value));
}

export function rackHeartbeatFresh(
  heartbeat: string | null | undefined,
  now: number = Date.now(),
): boolean {
  if (typeof heartbeat !== "string" || heartbeat.length === 0) return false;
  const at = Date.parse(heartbeat);
  if (!Number.isFinite(at)) return false;
  return now - at <= rackHeartbeatStaleMs;
}

export function rackBayOccupied(bay: Pick<RackBay, "state">): boolean {
  return bay.state !== "empty";
}

function readRackBayState(value: unknown): RackBayState | null {
  return typeof value === "string" && (rackBayStates as readonly string[]).includes(value)
    ? (value as RackBayState)
    : null;
}

function readRackBay(value: unknown): RackBay | null {
  if (value == null || typeof value !== "object") return null;
  const raw = value as Record<string, unknown>;
  if (typeof raw.id !== "string" || raw.id.length === 0) return null;
  const state = readRackBayState(raw.state);
  if (!state) return null;
  return {
    id: raw.id,
    name: typeof raw.name === "string" ? raw.name : null,
    role: typeof raw.role === "string" ? raw.role : null,
    state,
    note: typeof raw.note === "string" ? raw.note : raw.note === null ? null : undefined,
    href: typeof raw.href === "string" ? raw.href : null,
    cpu: typeof raw.cpu === "number" && Number.isFinite(raw.cpu) ? raw.cpu : undefined,
    mem: typeof raw.mem === "number" && Number.isFinite(raw.mem) ? raw.mem : undefined,
    heartbeat: typeof raw.heartbeat === "string" ? raw.heartbeat : undefined,
  };
}

export function readRackStatus(value: unknown): RackStatus | null {
  if (value == null || typeof value !== "object") return null;
  const raw = value as Record<string, unknown>;
  if (!Array.isArray(raw.bays) || raw.bays.length === 0) return null;
  const bays: RackBay[] = [];
  for (const item of raw.bays) {
    const bay = readRackBay(item);
    if (bay) bays.push(bay);
  }
  if (bays.length === 0) return null;
  return {
    updated: typeof raw.updated === "string" ? raw.updated : null,
    bays,
  };
}

export type ThreadStatus = "drafting" | "exploring";

export type ThreadFigure = "protocol" | "axes" | "gaps" | "fishbowl";

export type ThreadLink = {
  readonly href: string;
  readonly label: string;
};

export type Thread = {
  readonly id: string;
  readonly title: string;
  readonly status: ThreadStatus;
  readonly figure: ThreadFigure;
  readonly abstract: string;
  readonly href?: string;
  readonly linkLabel?: string;
  readonly links?: readonly ThreadLink[];
  /** Pacific calendar day the thread was posted or updated, `YYYY-MM-DD`. */
  readonly posted?: string;
};

export const threads: readonly Thread[] = [
  {
    id: "fishbowl-raspberry-pi",
    title: "Fishbowl on a Raspberry Pi",
    status: "exploring",
    figure: "fishbowl",
    posted: "2026-09-21",
    abstract:
      "A self-running multi-agent office on a Raspberry Pi: a tick loop, an event log as truth, and a product pane that only shows the last green build.",
    links: [
      { href: fishbowlPath, label: "read" },
      { href: "/research/fishbowl/flow.pdf", label: "flow" },
      { href: "https://github.com/akashnaren/raspberry-pi-fun", label: "code" },
    ],
  },
  {
    id: "agent-native-ui-protocols",
    title: "Agent-native UI protocols",
    status: "exploring",
    figure: "protocol",
    abstract:
      "Agents still drive apps through screenshots or a flat accessibility tree. I am comparing those to a structured view the agent can read.",
    links: [
      { href: essayPath, label: "read" },
      { href: "https://github.com/akashnaren/agent-ui-metrics", label: "code" },
    ],
  },
  {
    id: "arc-agi-vs-hallucination-risk",
    title: "ARC-AGI vs hallucination risk",
    status: "exploring",
    figure: "axes",
    abstract:
      "ARC-AGI-1 measures puzzle solving. I am checking whether those scores track how often a model hallucinates.",
  },
  {
    id: "entity-investigation",
    title: "Entity investigation",
    status: "exploring",
    figure: "gaps",
    abstract:
      "I am looking at how to reason over fragmented records and link events to the right address over time.",
    href: "https://temporal-buddies5.vercel.app/",
    linkLabel: "demo",
  },
];

export const pacificZone = "America/Los_Angeles";

export function pacificDay(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: pacificZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function isPostedToday(posted: string | undefined, now: Date = new Date()): boolean {
  return posted != null && posted === pacificDay(now);
}

export function threadPostedDates(items: readonly Thread[] = threads): readonly string[] {
  return items.flatMap((thread) => (thread.posted ? [thread.posted] : []));
}

export const managedBy: Paragraph = [
  "this site is managed by ",
  { href: "/bot", label: "grok bot" },
  ".",
];

export const profileLinks: readonly Contact[] = [
  { href: "/", label: "home", mark: "" },
  {
    href: "https://github.com/akashnaren",
    label: "github",
    mark: "/marks/github.svg",
  },
  {
    href: "https://cursor.com/@akashpn",
    label: "cursor",
    mark: "/marks/cursor.svg",
  },
  {
    href: "https://x.com/akashpn",
    label: "x",
    mark: "/marks/x.svg",
  },
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

export function isEssayPath(pathname: string): boolean {
  const path = pathname.split(/[?#]/, 1)[0] ?? "";
  return (
    /\/research\/agent-native-ui\/?$/.test(path) ||
    /\/research\/agent-native-ui\/index\.html$/.test(path)
  );
}

export function isFishbowlPath(pathname: string): boolean {
  const path = pathname.split(/[?#]/, 1)[0] ?? "";
  return (
    /\/research\/fishbowl\/?$/.test(path) ||
    /\/research\/fishbowl\/index\.html$/.test(path)
  );
}
