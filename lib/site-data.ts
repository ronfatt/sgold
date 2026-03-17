import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  CircleDollarSign,
  Coins,
  Cpu,
  Download,
  FileBadge2,
  FileImage,
  FileText,
  Gem,
  Globe2,
  Images,
  Landmark,
  Layers3,
  Link2,
  MessageCircleMore,
  Network,
  Newspaper,
  PenTool,
  PlayCircle,
  Presentation,
  RadioTower,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
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
export type DownloadItem = {
  title: string;
  description: string;
  size: string;
  tag: string;
  gradient: string;
};
export type RoadmapPhase = {
  phase: string;
  title: string;
  status: "LIVE" | "IN PROGRESS" | "PLANNED";
  points: string[];
};
export type AssetHubItem = {
  title: string;
  size: string;
  type: string;
  category: string;
  gradient: string;
};
export type OfficialLinkGroup = {
  title: string;
  items: {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
  }[];
};
export type MediaItem = {
  name: string;
  role: string;
  platform: string;
  tag: string;
  metric: string;
  excerpt: string;
};

export const navItems: NavItem[] = [
  { id: "hero", label: "Overview" },
  { id: "what-is", label: "What is S-Gold" },
  { id: "why-now", label: "Why Now" },
  { id: "architecture", label: "Architecture" },
  { id: "revenue", label: "Revenue" },
  { id: "ai-advisor", label: "AI Advisor" },
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
  {
    phase: "2025 Q4",
    title: "Foundation Buildout",
    status: "LIVE",
    points: [
      "Core presentation framework completed",
      "Premium investor-facing information architecture",
      "Initial node and revenue narrative aligned",
    ],
  },
  {
    phase: "2026 Q1",
    title: "Activation Layer",
    status: "IN PROGRESS",
    points: [
      "AI advisor and onboarding guidance online",
      "System access flow and official resources published",
      "Early partner and community touchpoints launched",
    ],
  },
  {
    phase: "2026 Q2",
    title: "Regional Expansion",
    status: "PLANNED",
    points: [
      "Node program growth across priority markets",
      "Localized communication and content packs",
      "Broader finance and payment scenario rollout",
    ],
  },
  {
    phase: "2026 Q3",
    title: "Ecosystem Loop",
    status: "PLANNED",
    points: [
      "Consumption and entertainment demand layer expansion",
      "Integrated ecosystem dashboard and strategic reporting",
      "Closed-loop positioning across asset, finance, and usage",
    ],
  },
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

export const downloadCenterFeatured: DownloadItem = {
  title: "S-Gold Institutional Whitepaper",
  description:
    "A premium overview of the project narrative, system structure, economic logic, and long-term infrastructure thesis.",
  size: "18.4 MB",
  tag: "Whitepaper",
  gradient: "from-[#2a2419] via-[#18130f] to-[#0d0d0e]",
};

export const downloadCenterItems: DownloadItem[] = [
  {
    title: "System Mechanism Brief",
    description: "Boardroom-ready explanation of system logic, participation design, and operating roles.",
    size: "6.2 MB",
    tag: "Mechanism",
    gradient: "from-[#2b241b] to-[#141518]",
  },
  {
    title: "Ecosystem Overview Deck",
    description: "Cross-category summary of blockchain, finance, and consumption layers in one visual deck.",
    size: "8.7 MB",
    tag: "Ecosystem",
    gradient: "from-[#15181d] to-[#251d15]",
  },
  {
    title: "Brand Asset Pack",
    description: "Official logotypes, dark-theme layouts, and brand visual assets for community and partner use.",
    size: "12.1 MB",
    tag: "Visual Assets",
    gradient: "from-[#17161a] to-[#302517]",
  },
];

export const assetHubCategories = ["All", "Posters", "Branding", "Event Materials", "Office Visuals"];

export const assetHubItems: AssetHubItem[] = [
  { title: "Premium Launch Poster", size: "4.6 MB", type: "PNG", category: "Posters", gradient: "from-[#2b2116] to-[#121316]" },
  { title: "Dark Brand Cover", size: "2.8 MB", type: "AI", category: "Branding", gradient: "from-[#111418] to-[#2a1e14]" },
  { title: "Node Brief Backdrop", size: "7.4 MB", type: "PSD", category: "Event Materials", gradient: "from-[#201913] to-[#101114]" },
  { title: "Lobby Screen Visual", size: "5.2 MB", type: "PNG", category: "Office Visuals", gradient: "from-[#17181c] to-[#2d2317]" },
  { title: "Investor One-Pager", size: "1.9 MB", type: "PDF", category: "Branding", gradient: "from-[#15161a] to-[#221b14]" },
  { title: "Regional Meetup Poster", size: "3.1 MB", type: "PNG", category: "Posters", gradient: "from-[#2d2417] to-[#101215]" },
];

export const officialLinkGroups: OfficialLinkGroup[] = [
  {
    title: "Website",
    items: [
      {
        title: "Main Presentation",
        description: "Public-facing institutional landing page and high-level narrative entry point.",
        href: "#hero",
        icon: Globe2,
      },
      {
        title: "Access Request",
        description: "Primary conversion path for interested partners, users, and ecosystem collaborators.",
        href: "#footer-cta",
        icon: ArrowRight,
      },
    ],
  },
  {
    title: "Docs",
    items: [
      {
        title: "Whitepaper",
        description: "Foundational thesis, mechanism explanation, and strategic positioning material.",
        href: "#download-center",
        icon: FileText,
      },
      {
        title: "Roadmap Brief",
        description: "Current stage visibility and forward expansion logic for internal and external stakeholders.",
        href: "#roadmap",
        icon: CalendarRange,
      },
    ],
  },
  {
    title: "Social & Community",
    items: [
      {
        title: "Community Resources",
        description: "Reusable campaign materials, visual assets, and public distribution files.",
        href: "#asset-hub",
        icon: RadioTower,
      },
      {
        title: "Media Matrix",
        description: "Third-party voice layer, KOL coverage, and social proof for external validation.",
        href: "#kol-media",
        icon: Users,
      },
    ],
  },
];

export const mediaItems: MediaItem[] = [
  {
    name: "Aiden Cole",
    role: "Macro & Web3 Commentator",
    platform: "X / Twitter",
    tag: "Verified",
    metric: "248K followers",
    excerpt: "S-Gold is presenting itself less like a token campaign and more like a digital asset operating narrative. That framing is unusual and stronger.",
  },
  {
    name: "Mira Tan",
    role: "Institutional Growth Writer",
    platform: "LinkedIn",
    tag: "Media",
    metric: "91K followers",
    excerpt: "The strongest part of the site is its structure. It feels designed for strategic review, not short-term hype cycles.",
  },
  {
    name: "Leo Han",
    role: "Crypto Infrastructure KOL",
    platform: "X / Twitter",
    tag: "Influencer",
    metric: "412K views",
    excerpt: "What stands out is the attempt to connect assets, settlement, and consumption under one clean system story.",
  },
  {
    name: "Nadia Reyes",
    role: "Digital Finance Analyst",
    platform: "Newsletter",
    tag: "Verified",
    metric: "37K subscribers",
    excerpt: "The premium dark-library style gives the project more credibility than the usual exchange-like landing page patterns.",
  },
  {
    name: "Kai Mercer",
    role: "Community Strategy Lead",
    platform: "X / Twitter",
    tag: "Influencer",
    metric: "179K followers",
    excerpt: "If this narrative is paired with real operational tools and consistent resources, it can scale cleanly across regions and teams.",
  },
  {
    name: "Sora Media",
    role: "Web3 Media Desk",
    platform: "Media Brief",
    tag: "Media",
    metric: "Featured coverage",
    excerpt: "S-Gold’s presentation emphasizes controlled expansion, node clarity, and institutional readability rather than speculative aggression.",
  },
];

export const downloadCategoryIcons = {
  Whitepaper: FileText,
  Mechanism: FileBadge2,
  Ecosystem: Shield,
  "Visual Assets": FileImage,
};

export const assetCategoryIcons = {
  Posters: Presentation,
  Branding: PenTool,
  "Event Materials": Newspaper,
  "Office Visuals": Images,
};

export const advisorFocusOptions = [
  { label: "General onboarding", value: "general onboarding" },
  { label: "Investor explanation", value: "investor explanation" },
  { label: "Node qualification", value: "node qualification" },
  { label: "Revenue model clarity", value: "revenue model clarity" },
];

export const advisorPromptSuggestions = {
  English: [
    "Explain S-Gold in simple terms for a new visitor.",
    "How should I present the node system to a strategic partner?",
    "What makes the revenue model different from a hype token page?",
    "Translate the project positioning into Chinese.",
  ],
  中文: [
    "请用适合新用户的方式解释 S-Gold 是什么。",
    "如果我要向合作方介绍节点体系，应该怎么说？",
    "这个项目和普通炒作型币圈页面有什么不同？",
    "请把项目定位整理成一段中文商务介绍。",
  ],
  "Bahasa Melayu": [
    "Terangkan S-Gold dengan mudah untuk pengguna baharu.",
    "Bagaimana saya patut jelaskan sistem node kepada rakan strategik?",
    "Apa bezanya model ini dengan halaman kripto yang terlalu hype?",
    "Tolong terjemahkan positioning projek ini ke Bahasa Melayu.",
  ],
};
