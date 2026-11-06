export type Link = {
  readonly href: string;
  readonly label: string;
};

export type AspectGroup = {
  readonly kind: "aspects";
  readonly role: string;
  readonly aspects: readonly Link[];
};

export type Phrase = string | Link | AspectGroup;

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
    " — ",
    {
      kind: "aspects",
      role: "Vehicle Service",
      aspects: [
        { href: "https://www.tesla.com/careers/vehicle-software", label: "Software" },
        { href: "https://service.tesla.com/en-US/", label: "Service" },
        { href: "https://parts.tesla.com/en-US/landingpage", label: "Parts" },
      ],
    },
  ],
  [
    { href: "https://www.tesla.com/", label: "Tesla" },
    " — ",
    {
      kind: "aspects",
      role: "Vehicle Engineering",
      aspects: [
        { href: "https://www.tesla.com/SI", label: "SI" },
        { href: "https://www.tesla.com/manufacturing", label: "Manufacturing" },
        { href: "https://www.tesla.com/robotaxi", label: "Robotaxi" },
      ],
    },
  ],
  [
    { href: "https://www.rtx.com/raytheon", label: "Raytheon" },
    " — ",
    {
      kind: "aspects",
      role: "Avionics Networking Test Suite",
      aspects: [
        {
          href: "https://www.rtx.com/collinsaerospace/what-we-do/industries/military-and-defense/avionics#gdpr",
          label: "Avionics",
        },
      ],
    },
  ],
];

export const profilesHeading = "Profiles";

export const mailHeading = "Mail";

export const researchHeading = "Research";

export const projectsHeading = "Projects";

export const researchLines: readonly Paragraph[] = [
  [
    { href: "https://www.lspace.asu.edu/", label: "NASA L’SPACE" },
    " — ",
    {
      kind: "aspects",
      role: "Terrain Identification, Asteroid Mapping",
      aspects: [
        {
          href: "https://drive.google.com/file/d/1_4rUkE6szP9zwGZnvw2Pxn4_UPHdr7fI/view?usp=sharing",
          label: "PDR",
        },
        {
          href: "https://drive.google.com/file/d/1ggGNBfAx8vliZn4ClRC5ZWsN55CeIcLg/view?usp=sharing",
          label: "Proposal",
        },
      ],
    },
  ],
  [
    {
      href: "https://asanchez.ucsd.edu/",
      label: "Multiscale Flow Physics Lab, UC San Diego",
    },
    " — ",
    {
      kind: "aspects",
      role: "Fire Whirls",
      aspects: [{ href: "/fire-whirls-poster.jpg", label: "Poster" }],
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

export const projectLinks: readonly Paragraph[] = [
  [{ href: "https://meetlavalamp.com", label: "LavaLamp" }],
  [{ href: "https://rpi-pi4.taild6c87d.ts.net/", label: "OpenPi" }],
];

export const personalMail = {
  address: "akashnaren@gmail.com",
  href: "mailto:akashnaren@gmail.com",
} as const;

export function isLink(part: Phrase): part is Link {
  return typeof part === "object" && "href" in part;
}

