export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  status: string;
  role: string;
  tech: string[];
  capabilities: string[];
  challenge: string;
  architecture: string;
  outcome: string;
  x: number;
  y: number;
  tier: "core" | "primary" | "secondary";
};

export const projects: Project[] = [
  {
    slug: "devad",
    title: "DevAD",
    eyebrow: "Developer intelligence",
    summary: "A workbench for understanding unfamiliar codebases as connected systems.",
    description:
      "DevAD is a Windows desktop developer-intelligence platform for understanding, investigating, documenting, diagnosing, observing, and recovering unfamiliar or incomplete C#/.NET codebases.",
    status: "Active build",
    role: "Flagship system",
    tech: ["C#", ".NET 10", "WinForms", "Roslyn", "SQLite"],
    capabilities: ["Codebase Explorer", "Logic Flow", "Atlas", "Live Runtime", "Recovery diagnostics", "Dossier"],
    challenge:
      "Large codebases expose files easily but rarely explain how behavior, intent, and runtime evidence fit together.",
    architecture:
      "Static analysis, persistent investigation workspaces, non-destructive runtime instrumentation, evidence tracking, and reviewed host generation remain distinct systems joined by shared code identities.",
    outcome:
      "A developer-analysis environment designed to make complex software navigable without pretending uncertain conclusions are facts.",
    x: 50,
    y: 45,
    tier: "core",
  },
  {
    slug: "unisyn",
    title: "UniSyn",
    eyebrow: "Universal parsing",
    summary: "A language-aware engine that translates between software languages using a Universal Code Model.",
    description:
      "UniSyn detects and parses source, builds an evidence-backed Universal Code Model, applies compatibility and loss policy, and emits supported target languages without hiding unresolved meaning.",
    status: "Hardened prototype",
    role: "Translation engine",
    tech: ["C#", ".NET", "Roslyn", "Parser adapters", "Compatibility matrix"],
    capabilities: ["Language detection", "Evidence graph", "Universal Code Model", "Compatibility policy", "Directed emission", "Loss accounting"],
    challenge:
      "Syntax translation is easy to fake and difficult to trust when languages express different capabilities and semantics.",
    architecture:
      "Language readers project evidenced structure into a common UCM. Universal Decipher confirms evidence, the Structure Director normalizes it, and mandatory writers enforce compatibility, provenance, and loss reporting.",
    outcome:
      "A reusable parsing engine that other applications can ask for structure and translation without surrendering evidence boundaries.",
    x: 21,
    y: 27,
    tier: "primary",
  },
  {
    slug: "trash-bandit",
    title: "Trash Bandit",
    eyebrow: "File recovery utility",
    summary: "A better Windows recycle bin with recoverable-file scanning and drive health.",
    description: "Trash Bandit combines everyday deleted-file review with deeper recovery scanning, recovery-status guidance, safe restoration, and basic drive-health visibility.",
    status: "Functional application", role: "Desktop utility",
    tech: ["C#", ".NET 10", "WPF", "Windows storage APIs"],
    capabilities: ["Recycle bin", "Recovery scan", "Recovery status", "Safe restore", "Drive health"],
    challenge: "Windows separates ordinary recycle-bin use, deeper file recovery, and drive awareness into disconnected experiences.",
    architecture: "Everyday deletion management, deeper scanning, restoration, and drive health remain separate modes inside one understandable recovery workflow.",
    outcome: "A polished utility demonstrating focused desktop UX and safety-aware recovery design.",
    x: 68, y: 70, tier: "secondary",
  },
  {
    slug: "omni-timer",
    title: "OmniTimer",
    eyebrow: "Desktop time utility",
    summary: "A timer and alarm scheduler with a persistent, customizable desktop overlay.",
    description: "OmniTimer combines fast timer controls, flexible alarms, custom sounds and media, missed-alarm policies, and a translucent always-visible widget.",
    status: "Functional application", role: "Desktop utility",
    tech: ["C#", ".NET", "Windows desktop", "System tray", "Media APIs"],
    capabilities: ["Quick timers", "Recurring alarms", "Custom media", "Missed-alarm policy", "Overlay widget", "Opacity and color controls"],
    challenge: "Standard timers disappear into full applications or notifications when the user needs persistent, glanceable awareness.",
    architecture: "Timer, alarm scheduling, sound policy, persistence, and the compact overlay are separated while sharing one time-state model.",
    outcome: "A distinctive utility showing how a small interaction problem can justify a purpose-built interface.",
    x: 82, y: 58, tier: "secondary",
  },
  {
    slug: "vendor-price-recovery",
    title: "Vendor Price Recovery",
    eyebrow: "Purchasing intelligence",
    summary: "A desktop tool for recovering pricing knowledge from inconsistent purchasing records.",
    description:
      "Vendor Price Recovery imports purchasing data, normalizes vendor history, and helps a business find the price evidence it already owns.",
    status: "Portfolio build",
    role: "Business application",
    tech: ["C#", ".NET", "Desktop UI", "Data import", "Reporting"],
    capabilities: ["Vendor comparison", "Import workflow", "Price history", "Evidence export"],
    challenge:
      "Useful purchasing history often exists across disconnected files, inconsistent names, and records that were never designed for comparison.",
    architecture:
      "Import, normalization, comparison, and export are separated so new data sources can be added without rewriting the decision layer.",
    outcome:
      "A user-first intelligence tool that turns historical purchases into understandable recovery opportunities.",
    x: 78,
    y: 28,
    tier: "primary",
  },
  {
    slug: "nomad",
    title: "Nomad",
    eyebrow: "Portable workspace architecture",
    summary: "A system concept for carrying your computing identity and workspace between machines.",
    description:
      "Nomad explores how a portable drive can prepare, protect, and continue a user’s workspace without rebuilding or permanently modifying the host computer.",
    status: "Architecture in development",
    role: "Systems research",
    tech: ["Linux pre-OS", "Windows", "Identity manifests", "Session overlay", "Security monitoring"],
    capabilities: ["Steward identity", "Sentinel security", "Session overlay", "Host-image strategy"],
    challenge:
      "Portable computing usually recreates an entire machine instead of understanding and adapting the machine already present.",
    architecture:
      "A pre-OS preparation layer, identity steward, dual sentinels, and temporary session overlay separate continuity from host ownership.",
    outcome:
      "A developing architecture guided by one rule: understand the host first, then introduce only what continuity proves necessary.",
    x: 28,
    y: 73,
    tier: "secondary",
  },
];

export const connections = [
  { from: "devad", to: "unisyn", behavior: "semantic-flow" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
