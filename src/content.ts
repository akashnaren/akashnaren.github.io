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
  "Akash Premkumar. Tesla vehicle service and vehicle engineering, Raytheon avionics networking, NASA L’SPACE, and the Multiscale Flow Physics Lab at UC San Diego.";
export const url = "https://akashnaren.github.io/";
export const themeColor = "#fffff8";

export const workHeading = "Work";

export const workLines: readonly Paragraph[] = [
  [
    { href: "https://www.tesla.com/", label: "Tesla" },
    " — Vehicle Service",
  ],
  [
    { href: "https://www.tesla.com/", label: "Tesla" },
    " — Vehicle Engineering",
  ],
  [
    { href: "https://www.rtx.com/raytheon", label: "Raytheon" },
    " — Avionics Networking Test Suite",
  ],
  [
    { href: "https://www.lspace.asu.edu/", label: "NASA L’SPACE" },
    " — Workforce Program",
  ],
];

export const profilesHeading = "Profiles";

export const mailHeading = "Mail";

export const researchHeading = "Research";

export const projectsHeading = "Projects";

/** Lab line on the landing page. */
export const researchLines: readonly Paragraph[] = [
  [
    {
      href: "https://asanchez.ucsd.edu/",
      label: "Multiscale Flow Physics Lab, UC San Diego",
    },
  ],
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

export const collectionTitle = "personal agents collection";

export const botTitle = "personal agents collection · Akash Premkumar";

export const botUrl = "https://akashnaren.github.io/bot";

export const botDescription = "The personal agents collection behind akashnaren.github.io.";

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
    blurb: "i ship quiet diffs that compile clean.",
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
    blurb: "i check the math twice.",
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
  "Multiscale Flow Physics Lab, UC San Diego, OpenPi, and Agent-Native UI.";

export const piPaperHref = "/research/pi-0.2-high/paper.pdf";

export const piPaperTitle = "Raspberry Pi Inference Mesh";

export type ListedWork = {
  readonly id: string;
  readonly title: string;
  readonly href?: string;
  /** Extra links after the title. */
  readonly links?: readonly Link[];
};

export const researchEntries: readonly ListedWork[] = [
  {
    id: "openpi",
    title: "OpenPi",
    href: "https://seller-hotels-stay-role.trycloudflare.com/",
  },
  {
    id: "agent-native-ui",
    title: "Agent-Native UI",
    href: "/research/agent-native-ui/paper.pdf",
  },
];

export const projectLinks: readonly Link[] = [
  {
    href: "https://temporal-buddies5.vercel.app/",
    label: "Temporal",
  },
  {
    href: "https://meetlavalamp.com",
    label: "Lavalamp",
  },
];

export const managedBy: Paragraph = [
  "this site is managed by ",
  { href: "/bot", label: "grok bot" },
  ".",
];

/** Small footer cue on the landing page. Points at the collection on this page. */
export const homeManagedBy: Paragraph = [
  "Managed by ",
  { href: "#bot", label: "Grok Bot" },
];

export const personalMail = {
  address: "akashnaren@gmail.com",
  href: "mailto:akashnaren@gmail.com",
  label: "email",
} as const;

export const agentInbox = {
  address: "akashnaren@mail.grokbot.com",
  href: "mailto:akashnaren@mail.grokbot.com",
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

