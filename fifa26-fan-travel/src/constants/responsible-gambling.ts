/** Static responsible-gambling copy — replace or extend per counsel / operator requirements. */

export const RG = {
  ageDisclaimerUS: "21+ only. Gambling problem? Call 1-800-GAMBLER (1-800-426-2537).",
  ncpg: {
    label: "National Council on Problem Gambling (US)",
    phone: "1-800-522-4700",
    url: "https://www.ncpgambling.org/",
  },
  canada: {
    label: "ConnexOntario (example — use your province’s helpline in production)",
    phone: "1-866-531-2600",
    url: "https://www.connexontario.ca/",
  },
  mexico: {
    label: "Seek local support (e.g. state health services)",
    phone: "",
    url: "https://www.gob.mx/conadic",
  },
  general:
    "If you or someone you know has a gambling problem, help is available. Wagers are void where prohibited. Terms apply to any promotional offer.",
} as const;
