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
  "Structured views for agent interfaces, ARC-AGI and hallucination, and entity investigation across fragmented records.";

export const researchLinkLabel = "Research";

export type ThreadFigure = "protocol" | "axes" | "gaps";

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

export function isEssayPath(pathname: string): boolean {
  const path = pathname.split(/[?#]/, 1)[0] ?? "";
  return (
    /\/research\/agent-native-ui\/?$/.test(path) ||
    /\/research\/agent-native-ui\/index\.html$/.test(path)
  );
}

export const rackCue = "Pi 0.2 High";

export const rackStatusPath = "/research/rack/status.json";

/** Client poll so Pages can pick up an overwritten status.json without a rebuild. */
export const rackPollMs = 45_000;

/** Hide cpu/mem when the last sample is older than this. */
export const rackHeartbeatStaleMs = 10 * 60 * 1000;

export type RackBayState =
  | "active"
  | "exploring"
  | "dry-run"
  | "private"
  | "reserved"
  | "empty";

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

export const rackBayOrder = ["bay-1", "bay-2", "bay-3"] as const;

export const rackPublicLabels: Readonly<Record<string, { readonly name: string; readonly href: string | null }>> = {
  "bay-1": { name: "mesh", href: null },
  "bay-2": { name: "Qwen mesh", href: null },
  "bay-3": { name: "pi2", href: null },
};

const rackBayAliases: Readonly<Record<string, string>> = {
  "bay-1": "bay-1",
  bay1: "bay-1",
  "1": "bay-1",
  "bay-2": "bay-2",
  bay2: "bay-2",
  "2": "bay-2",
  "bay-3": "bay-3",
  bay3: "bay-3",
  "3": "bay-3",
};

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

export function rackBayId(value: string): string | null {
  const key = value.trim().toLowerCase().replace(/[\s_]/g, "");
  return rackBayAliases[key] ?? null;
}

export function isPrivateHost(value: string): boolean {
  return (
    /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/.test(value) ||
    /\.ts\.net\b/i.test(value) ||
    /\.local\b/i.test(value) ||
    /tailscale/i.test(value)
  );
}

function cleanRackText(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim();
  if (text.length === 0 || isPrivateHost(text)) return null;
  return text;
}

/** Live heartbeats must not put retired project names or essay URLs back on the page. */
function publicRackCopy(value: string | null): string | null {
  if (!value) return null;
  if (/fishbowl|minishop|meridian/i.test(value)) return null;
  if (/\/research\/fishbowl\//i.test(value)) return null;
  return value;
}

function isHardwareName(name: string, publicName: string): boolean {
  const n = name.trim().toLowerCase();
  if (n === publicName.trim().toLowerCase()) return false;
  return /^(r(?:aspberry)?(?:\s*pi)?\s*\d*)$/i.test(n) || /^pi\s*\d+$/i.test(n);
}

function readRackBayState(value: unknown, occupiedHint: boolean): RackBayState {
  if (typeof value === "string" && (rackBayStates as readonly string[]).includes(value)) {
    return value as RackBayState;
  }
  return occupiedHint ? "active" : "empty";
}

function collectRackBays(bays: unknown): Map<string, Record<string, unknown>> | null {
  if (bays == null) return null;
  const found = new Map<string, Record<string, unknown>>();
  if (Array.isArray(bays)) {
    for (const item of bays) {
      if (item == null || typeof item !== "object") continue;
      const raw = item as Record<string, unknown>;
      const id = typeof raw.id === "string" ? rackBayId(raw.id) : null;
      if (id) found.set(id, raw);
    }
    return found;
  }
  if (typeof bays !== "object") return null;
  for (const [key, item] of Object.entries(bays as Record<string, unknown>)) {
    const id = rackBayId(key);
    if (!id || item == null || typeof item !== "object") continue;
    found.set(id, item as Record<string, unknown>);
  }
  return found;
}

function mergeRackBay(
  id: string,
  raw: Record<string, unknown> | undefined,
  baked: RackBay | undefined,
): RackBay {
  if (!raw) {
    return baked ?? { id, name: null, role: null, state: "empty", href: null };
  }
  const incomingName = cleanRackText(raw.name);
  const incomingRole = cleanRackText(raw.role);
  const incomingNote = publicRackCopy(cleanRackText(raw.note));
  const incomingHref = publicRackCopy(cleanRackText(raw.href));
  const occupiedHint = Boolean(
    incomingName ||
      incomingRole ||
      typeof raw.cpu === "number" ||
      typeof raw.mem === "number" ||
      typeof raw.heartbeat === "string",
  );
  const state = readRackBayState(raw.state, occupiedHint);
  const publicLabel = rackPublicLabels[id];
  let role = incomingRole ?? (state === "empty" ? null : (baked?.role ?? null));
  let name: string | null = publicRackCopy(incomingName);
  if (state === "empty" && !incomingName) {
    name = null;
  } else if (publicLabel) {
    name = publicLabel.name;
    if (incomingName && isHardwareName(incomingName, publicLabel.name) && !incomingRole) {
      role = incomingName;
    }
  }
  const href = state === "empty" ? null : (incomingHref ?? publicLabel?.href ?? baked?.href ?? null);
  const bakedNote = publicRackCopy(baked?.note ?? null);
  return {
    id,
    name,
    role: publicRackCopy(role),
    state,
    note: incomingNote ?? bakedNote,
    href,
    cpu: typeof raw.cpu === "number" && Number.isFinite(raw.cpu) ? raw.cpu : undefined,
    mem: typeof raw.mem === "number" && Number.isFinite(raw.mem) ? raw.mem : undefined,
    heartbeat: typeof raw.heartbeat === "string" ? raw.heartbeat : undefined,
  };
}

export function readRackStatus(value: unknown): RackStatus | null {
  if (value == null || typeof value !== "object") return null;
  const raw = value as Record<string, unknown>;
  const incoming = collectRackBays(raw.bays);
  if (!incoming) return null;
  const bakedById = new Map(rackStatus.bays.map((bay) => [bay.id, bay]));
  const bays = rackBayOrder.map((id) => mergeRackBay(id, incoming.get(id), bakedById.get(id)));
  return {
    updated: typeof raw.updated === "string" ? raw.updated : null,
    bays,
  };
}
