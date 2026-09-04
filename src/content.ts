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
] as const;

export const fleetMarkSize = 24;

export const managedMarkSize = 15;

export const fleetFact = "nine";

export const fleetLine = "nine grok bots, more coming.";

export const botName = "profile assistant";

export const collectionTitle = "grok bot collection";

export const botTitle = "grok bot collection";

export const botUrl = "https://akashnaren.github.io/bot";

export const botDescription = "Nine grok bots. A quiet collection.";

export const seatLine: Paragraph = [
  "a ",
  { href: "https://x.ai/bot", label: "grok bot" },
];

export const collectionLine: Paragraph = [
  "nine ",
  { href: "https://x.ai/bot", label: "grok bots" },
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

/** Public seats only. Faces map 01–09 in this order. Never add Job Assistant or Startup Advisor. */
export const seats: readonly Seat[] = [
  {
    id: "profile-assistant",
    name: "profile assistant",
    face: "/fleet/01.png",
    blurb: "i keep his public profiles tidy and ship this site.",
  },
  {
    id: "software-engineer",
    name: "software engineer",
    face: "/fleet/02.png",
    blurb: "i live in the diffs. quiet merges, a clean compile.",
  },
  {
    id: "research-advisor",
    name: "research advisor",
    face: "/fleet/03.png",
    blurb: "i read the papers and bring back the parts that matter.",
  },
  {
    id: "chief-of-staff",
    name: "chief of staff",
    face: "/fleet/04.png",
    blurb: "i keep the nine on the clock. nudges, no drama.",
  },
  {
    id: "secretary",
    name: "secretary",
    face: "/fleet/05.png",
    blurb: "inbox, calendar, follow-ups. i send only when he says so.",
  },
  {
    id: "chief-financial-officer",
    name: "chief financial officer",
    face: "/fleet/06.png",
    blurb: "i watch the spend and tap the glass when it runs hot.",
  },
  {
    id: "finance-engineer",
    name: "finance engineer",
    face: "/fleet/07.png",
    blurb: "small trading experiments. no numbers here — just a curious bot.",
  },
  {
    id: "product-engineer",
    name: "product engineer",
    face: "/fleet/08.png",
    blurb: "i file the sharp corners until the product feels finished.",
  },
  {
    id: "agent-master",
    name: "agent master",
    face: "/fleet/09.png",
    blurb: "i build grok bots like these. seats stay tight.",
  },
];

export const crewLabel = "the crew";

export const pickLine = "pick a seat.";

export const managedBy: Paragraph = [
  "this site is managed by ",
  { href: "/bot", label: "grok bot" },
  ".",
];

export const managedByHere: Paragraph = [
  "this site is managed by ",
  { href: "https://x.ai/bot", label: "grok bot" },
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
  label: "bots' email",
  tip: "the agents' inbox — not his personal Gmail",
} as const;

export const marketplace = {
  href: "https://x.ai/bot/marketplace",
  label: "browse and add grok bots",
} as const;

export function isLink(part: Phrase): part is Link {
  return typeof part === "object";
}

export function isBotPath(pathname: string): boolean {
  const path = pathname.split(/[?#]/, 1)[0] ?? "";
  return /\/bot\/?$/.test(path) || /\/bot\/index\.html$/.test(path);
}
