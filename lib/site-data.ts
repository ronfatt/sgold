import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  Coins,
  Cpu,
  Gem,
  Globe2,
  Landmark,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = { id: string; label: string };
export type CardItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
  eyebrow?: string;
};

export const navItems: NavItem[] = [
  { id: "hero", label: "Overview" },
  { id: "what-is", label: "What is S-Gold" },
  { id: "why-now", label: "Why Now" },
  { id: "architecture", label: "Architecture" },
  { id: "revenue", label: "Revenue" },
  { id: "faq", label: "FAQ" },
];

export const metrics = [
  { value: "3", label: "System engines", note: "Asset, finance, and consumption layers" },
  { value: "4", label: "Node tiers", note: "Structured participation for capital and teams" },
  { value: "24/7", label: "Knowledge layer", note: "Institutional-grade narrative and onboarding" },
];

export const whatIsCards: CardItem[] = [
  {
    title: "Digital asset infrastructure",
    description:
      "S-Gold positions assets as productive infrastructure, connecting ownership, participation, and distribution under one operating system.",
    icon: Building2,
  },
  {
    title: "Institutional narrative clarity",
    description:
      "The model is presented like a knowledge library, so investors, partners, and community leaders can understand the logic before they evaluate the opportunity.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Participation-driven economics",
    description:
      "The system is framed around roles, weighted participation, and rule-based distribution rather than speculative messaging.",
    icon: ShieldCheck,
  },
];

export const whyNowCards: CardItem[] = [
  {
    title: "Idle assets underperform",
    description:
      "Static holdings lose strategic value when they do not participate in active cash-flow, settlement, or ecosystem usage.",
    icon: Gem,
  },
  {
    title: "Financial rails are changing",
    description:
      "Digital payment networks, tokenized assets, and programmable settlement create a new base layer for participation models.",
    icon: Banknote,
  },
  {
    title: "Consumption drives retention",
    description:
      "The systems that win long term are the ones that connect capital, users, and real-world or entertainment usage into one loop.",
    icon: Globe2,
  },
];

export const architectureCards: CardItem[] = [
  {
    eyebrow: "Asset Engine",
    title: "Asset Engine",
    description:
      "Transforms holdings into productive digital units and defines the system’s value anchor through structured participation logic.",
    icon: Landmark,
  },
  {
    eyebrow: "Finance & Payment",
    title: "Finance & Payment Engine",
    description:
      "Handles transaction flows, payment settlement, fees, and liquidity behavior so the model can connect to real economic activity.",
    icon: Wallet,
  },
  {
    eyebrow: "Consumption Layer",
    title: "Entertainment & Consumption Engine",
    description:
      "Introduces user behavior, content, spending, and engagement loops that support growth beyond a purely financial story.",
    icon: Sparkles,
  },
];

export const processFlow = [
  "Entry qualification",
  "Weighted participation",
  "System operation",
  "Revenue realization",
  "Rule-based distribution",
];

export const revenueCards: CardItem[] = [
  {
    title: "Transaction revenue",
    description:
      "Activity from trading, conversion, and marketplace movement forms one layer of system income.",
    icon: CircleDollarSign,
  },
  {
    title: "Payment and settlement fees",
    description:
      "Cross-system transfers, service layers, and payment rails create recurring fee-based economics.",
    icon: Coins,
  },
  {
    title: "Consumption and ecosystem demand",
    description:
      "Usage inside entertainment, community, and digital consumption scenarios strengthens retention and monetization.",
    icon: Layers3,
  },
];

export const revenueMix = [
  { label: "Transaction flows", value: 38 },
  { label: "Settlement fees", value: 27 },
  { label: "Consumption demand", value: 21 },
  { label: "Reinvestment cycle", value: 14 },
];

export const growthNodes = [
  { level: 0, label: "Core" },
  { level: 1, label: "4-way expansion" },
  { level: 2, label: "16 network cells" },
  { level: 3, label: "64 growth surfaces" },
];

export const nodeCards = [
  {
    title: "Small Node",
    description: "Entry level node for focused operators building initial team and educational presence.",
    eyebrow: "10% reference band",
  },
  {
    title: "Medium Node",
    description: "Designed for organizers creating regional momentum and structured onboarding systems.",
    eyebrow: "20% reference band",
  },
  {
    title: "Large Node",
    description: "For experienced capital allocators and community leaders managing substantial growth paths.",
    eyebrow: "30% reference band",
  },
  {
    title: "Super Node",
    description: "Strategic co-builder tier for top-level coordination, ecosystem influence, and long-term expansion.",
    eyebrow: "40% reference band",
  },
];

export const ecosystemGroups = [
  {
    title: "Blockchain Infrastructure",
    logos: ["Asset Registry", "Smart Rules", "Treasury Layer", "Chain Analytics"],
  },
  {
    title: "Finance & Payments",
    logos: ["Settlement Hub", "Partner Wallets", "Merchant Rails", "Fee Engine"],
  },
  {
    title: "Entertainment & Demand",
    logos: ["Community Media", "Digital Commerce", "Game Loop", "Consumer Apps"],
  },
];

export const roadmap = [
  { phase: "Phase 1", title: "Foundation", description: "Narrative, architecture, and base participation model." },
  { phase: "Phase 2", title: "Activation", description: "Core system launch with revenue logic and onboarding structure." },
  { phase: "Phase 3", title: "Expansion", description: "Regional node growth and broader payment or demand scenarios." },
  { phase: "Phase 4", title: "Integration", description: "Full ecosystem loop connecting asset, payment, and consumption." },
];

export const faqItems = [
  {
    question: "What is S-Gold in one sentence?",
    answer:
      "S-Gold is a premium digital asset infrastructure concept that frames assets as productive system inputs rather than passive holdings.",
  },
  {
    question: "Is this a speculative meme-style crypto page?",
    answer:
      "No. The design and content structure intentionally present S-Gold as an investor-facing knowledge platform with institutional clarity.",
  },
  {
    question: "Where does the system’s revenue logic come from?",
    answer:
      "The model references transaction flows, payment settlement, and consumption activity as the key drivers of system-level monetization.",
  },
  {
    question: "Who is the node system for?",
    answer:
      "The node framework is aimed at organizers, partners, and larger participants who need clear operational tiers and incentive context.",
  },
];

export const languageOptions = ["EN", "中文", "BM"];

export const ctaLinks = [
  { label: "Explore the Model", href: "#what-is", icon: ArrowRight },
  { label: "Request Access", href: "#footer-cta", icon: Cpu },
];

export const heroSummary = [
  "Premium dark-theme institutional presentation",
  "Reusable JSON-driven information architecture",
  "Built for future AI advisory and investor onboarding",
];

export const footerSignals = [
  { label: "Knowledge-first", icon: Network },
  { label: "Investor-facing", icon: BriefcaseBusiness },
  { label: "Infrastructure-led", icon: Building2 },
];
