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
    " — ",
    { href: "https://service.tesla.com/en-US/", label: "Vehicle Service" },
  ],
  [
    { href: "https://www.tesla.com/", label: "Tesla" },
    " — ",
    { href: "https://www.tesla.com/SI", label: "Vehicle Engineering" },
  ],
  [
    { href: "https://www.rtx.com/raytheon", label: "Raytheon" },
    " — ",
    {
      href: "https://www.aim-online.com/products-overview/tutorials/afdx-arinc664p7-tutorial/",
      label: "Avionics Networking Test Suite",
    },
  ],
  [
    { href: "https://www.lspace.asu.edu/", label: "NASA L’SPACE" },
    " — ",
    {
      href: "https://drive.google.com/drive/folders/1vi1vVKHAKptMqXB0_mmw7QkfCC6d8Wc_?usp=sharing",
      label: "Proposals, Preliminary Design Review",
    },
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
    " — ",
    { href: "/fire-whirls-poster.jpg", label: "Research" },
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
  [{ href: "https://meetlavalamp.com", label: "Lavalamp" }],
  [{ href: "https://rpi-pi4.taild6c87d.ts.net/", label: "OpenPi" }],
  [{ href: "https://github.com/akashnaren/interface-compiler", label: "Interface Compiler" }],
];

export const personalMail = {
  address: "akashnaren@gmail.com",
  href: "mailto:akashnaren@gmail.com",
} as const;

export function isLink(part: Phrase): part is Link {
  return typeof part === "object";
}

