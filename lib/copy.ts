import type { SiteLanguage } from "@/components/language-provider";
import {
  assetHubCategories,
  assetHubItems,
  ctaLinks,
  downloadCenterFeatured,
  downloadCenterItems,
  ecosystemGroups,
  faqItems,
  footerSignals,
  heroSummary,
  mediaItems,
  metrics,
  nodeCards,
  officialLinkGroups,
  processFlow,
  revenueCards,
  revenueMix,
  roadmap,
  whatIsCards,
  whyNowCards,
  architectureCards,
} from "@/lib/site-data";

export const copy = {
  brandSubline: {
    en: "Digital Asset Infrastructure",
    zh: "数字资产基础设施",
  },
  nav: {
    overview: { en: "Overview", zh: "概览" },
    whatIs: { en: "What is S-Gold", zh: "什么是 S-Gold" },
    whyNow: { en: "Why Now", zh: "为什么是现在" },
    architecture: { en: "Architecture", zh: "系统架构" },
    revenue: { en: "Revenue", zh: "收益模型" },
    ai: { en: "AI Advisor", zh: "AI 顾问" },
    faq: { en: "FAQ", zh: "常见问题" },
  },
  hero: {
    eyebrow: {
      en: "Premium Digital Asset Infrastructure",
      zh: "高端数字资产基础设施",
    },
    title: {
      en: "S-Gold makes assets more than something you hold. It turns them into structured participation and growth.",
      zh: "S-Gold 让资产不只是被持有，而是能够参与并产生结构化增长。",
    },
    description: {
      en: "A system that connects assets, participation, and distribution, with real-time explanation and guidance from an integrated AI advisor.",
      zh: "一个把资产、参与与分配连接起来的系统，并由集成式 AI 顾问实时解释与引导。",
    },
    punchline: {
      en: "Understand the system first, then decide whether to participate.",
      zh: "先理解系统，再决定是否参与。",
    },
    askAiNow: {
      en: "Ask AI Advisor",
      zh: "问 AI 顾问",
    },
    aiConsole: {
      en: "AI Advisor",
      zh: "AI 顾问",
    },
    heroConsoleSub: {
      en: "Ask before you go deeper into the system",
      zh: "在继续了解系统前，先直接提问",
    },
    aiActive: {
      en: "Live",
      zh: "在线",
    },
  },
  sections: {
    download: {
      eyebrow: { en: "Download Center", zh: "资料下载中心" },
      title: {
        en: "Official materials should read like premium institutional documentation.",
        zh: "官方资料应该像高端机构文档，而不是普通文件列表。",
      },
      description: {
        en: "A featured document card leads the section, while secondary files stay compact, categorized, and easy to scan.",
        zh: "这里用一张重点资料卡作为主入口，下方配合分类清晰、易于浏览的次资料卡片。",
      },
    },
    whatIs: {
      eyebrow: { en: "What is S-Gold", zh: "什么是 S-Gold" },
      title: {
        en: "A premium operating narrative for digital asset infrastructure.",
        zh: "一个面向数字资产基础设施的高端系统叙事。",
      },
      description: {
        en: "This section explains S-Gold like a boardroom presentation: what it is, why it exists, and how it defines productive participation. Every part of the system can also be explained in real time by the integrated AI advisor.",
        zh: "这一部分会像董事会汇报一样解释 S-Gold：它是什么、为什么存在、以及它如何定义可持续参与。系统的每一部分也都可以由 AI 顾问实时解释。",
      },
    },
    whyNow: {
      eyebrow: { en: "Why Now", zh: "为什么是现在" },
      title: {
        en: "The timing works because passive assets and old financial rails no longer explain the future.",
        zh: "之所以是现在，是因为被动资产和旧金融通道已经无法解释未来。",
      },
      description: {
        en: "This section educates the visitor instead of selling too early, creating the institutional logic for why this system needs to exist. Understanding the system matters more than entering early, which is why AI guidance is built in.",
        zh: "这一部分先完成教育，而不是急着转化，帮助用户理解为什么这个系统有存在必要。理解系统，比提早进入更重要，这也是我们内置 AI 引导的原因。",
      },
    },
    architecture: {
      eyebrow: { en: "System Architecture", zh: "系统架构" },
      title: {
        en: "Three coordinated engines define the S-Gold system.",
        zh: "S-Gold 系统由三大协同引擎构成。",
      },
      description: {
        en: "Each engine has a distinct role in making the model legible to investors and scalable for future product extensions.",
        zh: "每个引擎都有明确职责，既帮助投资人理解系统，也为未来产品延展保留扩展空间。",
      },
    },
    coreLogic: {
      eyebrow: { en: "Core Logic", zh: "核心逻辑" },
      title: {
        en: "A five-step process makes the model understandable.",
        zh: "用五个步骤，把系统逻辑讲清楚。",
      },
      description: {
        en: "The flow is intentionally simple and legible, using horizontal progression instead of dense technical diagrams.",
        zh: "这里故意采用简单、可读的流程表达，而不是密密麻麻的技术图。",
      },
    },
    revenue: {
      eyebrow: { en: "Revenue Model", zh: "收益模型" },
      title: {
        en: "Revenue is framed as system activity, not promise-driven speculation.",
        zh: "收益被定义为系统运作结果，而不是承诺式投机叙事。",
      },
      description: {
        en: "This block pairs cards, a minimal chart, and one explanation panel so the economics feel premium and readable.",
        zh: "这一部分通过卡片、简洁图表和解释面板组合，让收益逻辑看起来清晰、克制且可信。",
      },
    },
    growth: {
      eyebrow: { en: "Fission / Growth Model", zh: "裂变 / 增长模型" },
      title: {
        en: "Growth is shown as an elegant network tree, not a noisy recruitment chart.",
        zh: "增长结构被表达为优雅的网络树，而不是嘈杂的拉人图。",
      },
      description: {
        en: "The tree is intentionally restrained to keep it premium while still visualizing compounding structure. The structure is readable by both humans and AI systems.",
        zh: "这棵增长树保持克制与高级感，同时也足够清晰地展示网络扩张结构。无论是人还是 AI，都能读懂它。",
      },
    },
    faq: {
      eyebrow: { en: "FAQ", zh: "常见问题" },
      title: {
        en: "Common questions should feel curated, not overloaded.",
        zh: "常见问题应该经过筛选，而不是堆满一页。",
      },
      description: {
        en: "Still unsure? Ask the AI instead of browsing. The accordion remains for quick scanning, but the advisor is the faster decision path.",
        zh: "如果你还不确定，不如直接问 AI，而不是继续翻页面。FAQ 适合快速扫读，但顾问更适合帮助你做决定。",
      },
      askAi: {
        en: "Ask AI Advisor",
        zh: "询问 AI 顾问",
      },
    },
    cta: {
      eyebrow: { en: "Call to Action", zh: "下一步行动" },
      title: {
        en: "Understand the system. Then decide your role.",
        zh: "先理解系统，再决定你的角色。",
      },
      description: {
        en: "S-Gold already includes an AI advisor that explains, guides, and simulates participation paths for different visitor types.",
        zh: "S-Gold 已经内置 AI 顾问，可以为不同类型用户提供解释、路径建议与参与模拟。",
      },
      askAi: { en: "Ask AI Advisor", zh: "询问 AI 顾问" },
      explore: { en: "Explore the Model", zh: "查看系统模型" },
    },
  },
} as const;

export function t(language: SiteLanguage, value: { en: string; zh: string }) {
  return value[language];
}

export function getLocalizedMetrics(language: SiteLanguage) {
  if (language === "en") return metrics;

  return [
    { value: "3", label: "系统引擎", note: "资产、金融与消费三层协同" },
    { value: "4", label: "节点层级", note: "为资本方与团队设计的结构化参与体系" },
    { value: "24/7", label: "知识层", note: "机构级叙事与引导持续在线" },
  ];
}

export function getLocalizedHeroSummary(language: SiteLanguage) {
  if (language === "en") return heroSummary;
  return [
    "高端深色机构风展示站",
    "可复用的 JSON 驱动信息架构",
    "内置 AI 顾问，可解释、引导并模拟参与路径",
  ];
}

export function getLocalizedCtaLinks(language: SiteLanguage) {
  if (language === "en") return ctaLinks;
  return ctaLinks.map((item, index) => ({
    ...item,
    label: index === 0 ? "查看系统模型" : "申请访问",
  }));
}

export function getLocalizedWhatIsCards(language: SiteLanguage) {
  if (language === "en") return whatIsCards;
  return [
    {
      ...whatIsCards[0],
      title: "数字资产基础设施",
      description: "S-Gold 把资产定义为可运作的基础设施输入，而不是被动持有物，并用统一系统连接所有权、参与与分配。",
    },
    {
      ...whatIsCards[1],
      title: "机构级叙事清晰度",
      description: "整个模型像知识库一样被组织，让投资人、合作方和团队长在判断机会前，先看懂系统逻辑。",
    },
    {
      ...whatIsCards[2],
      title: "参与驱动的经济结构",
      description: "系统围绕角色、参与权重与规则化分配构建，而不是依靠情绪化炒作叙事推动。",
    },
  ];
}

export function getLocalizedWhyNowCards(language: SiteLanguage) {
  if (language === "en") return whyNowCards;
  return [
    {
      ...whyNowCards[0],
      title: "静态资产正在失去效率",
      description: "当资产无法参与现金流、结算与生态使用时，仅仅持有会不断削弱其战略价值。",
    },
    {
      ...whyNowCards[1],
      title: "金融通道正在重构",
      description: "数字支付网络、RWA 与可编程结算正在形成一套新的底层参与基础设施。",
    },
    {
      ...whyNowCards[2],
      title: "消费与使用决定留存",
      description: "真正能长期存在的系统，必须把资本、用户和真实使用场景连接成一个闭环。",
    },
  ];
}

export function getLocalizedArchitectureCards(language: SiteLanguage) {
  if (language === "en") return architectureCards;
  return [
    {
      ...architectureCards[0],
      eyebrow: "资产引擎",
      title: "资产引擎",
      description: "把资产映射成可参与、可分配、可持续运作的数字化单位，形成系统价值锚点。",
    },
    {
      ...architectureCards[1],
      eyebrow: "金融与支付",
      title: "金融与支付引擎",
      description: "承接交易流、支付清算、手续费与流动性逻辑，让系统能连接真实经济活动。",
    },
    {
      ...architectureCards[2],
      eyebrow: "消费层",
      title: "娱乐与消费引擎",
      description: "通过内容、消费与用户参与行为，建立持续导入需求和留存的增长飞轮。",
    },
  ];
}

export function getLocalizedProcessFlow(language: SiteLanguage) {
  if (language === "en") return processFlow;
  return ["进入资格", "参与权重", "系统运作", "收益形成", "规则分配"];
}

export function getLocalizedRevenueCards(language: SiteLanguage) {
  if (language === "en") return revenueCards;
  return [
    {
      ...revenueCards[0],
      title: "交易型收益",
      description: "交易、兑换与流通行为构成系统收益来源之一。",
    },
    {
      ...revenueCards[1],
      title: "支付与结算手续费",
      description: "跨系统流转、服务层与支付通道可形成持续的费用型收益。",
    },
    {
      ...revenueCards[2],
      title: "消费与生态需求",
      description: "消费场景与生态使用行为会强化留存，也会带来真实需求驱动。",
    },
  ];
}

export function getLocalizedRevenueMix(language: SiteLanguage) {
  if (language === "en") return revenueMix;
  return [
    { label: "交易流收益", value: 38 },
    { label: "结算手续费", value: 27 },
    { label: "消费需求收益", value: 21 },
    { label: "复投与系统循环", value: 14 },
  ];
}

export function getLocalizedNodeCards(language: SiteLanguage) {
  if (language === "en") return nodeCards;
  return [
    { ...nodeCards[0], title: "小节点", description: "适合建立基础团队与初步教育传播路径的入门节点。", eyebrow: "10% 参考区间" },
    { ...nodeCards[1], title: "中节点", description: "适合正在形成区域增长与结构化引导体系的组织者。", eyebrow: "20% 参考区间" },
    { ...nodeCards[2], title: "大节点", description: "适合具备较强资源组织能力与资本协调能力的核心参与者。", eyebrow: "30% 参考区间" },
    { ...nodeCards[3], title: "超级节点", description: "适合战略共建、生态联动和长期扩张协作的高层级参与方。", eyebrow: "40% 参考区间" },
  ];
}

export function getLocalizedEcosystemGroups(language: SiteLanguage) {
  if (language === "en") return ecosystemGroups;
  return [
    { title: "区块链基础设施", logos: ["资产登记", "智能规则", "金库层", "链上分析"] },
    { title: "金融与支付", logos: ["结算枢纽", "合作钱包", "商户支付通道", "手续费引擎"] },
    { title: "娱乐与需求层", logos: ["社区媒体", "数字商业", "游戏循环", "消费应用"] },
  ];
}

export function getLocalizedRoadmap(language: SiteLanguage) {
  if (language === "en") return roadmap;
  return roadmap.map((item, index) => ({
    ...item,
    title:
      index === 0
        ? "基础搭建"
        : index === 1
          ? "激活层上线"
          : index === 2
            ? "区域扩张"
            : "生态闭环",
    status:
      item.status === "LIVE" ? "已上线" : item.status === "IN PROGRESS" ? "进行中" : "规划中",
    points:
      index === 0
        ? ["核心展示框架完成", "机构级叙事与信息架构建立", "初步节点与收益逻辑对齐"]
        : index === 1
          ? ["AI 顾问与引导系统上线", "系统入口与官方资源开放", "早期合作与社群触点开始建立"]
          : index === 2
            ? ["优先市场的节点扩张", "本地化传播与内容包发布", "更广泛的金融与支付场景推进"]
            : ["消费与娱乐需求层扩展", "生态仪表盘与策略报告整合", "资产、金融与使用场景形成闭环"],
  }));
}

export function getLocalizedFaqItems(language: SiteLanguage) {
  if (language === "en") return faqItems;
  return [
    {
      question: "一句话说，S-Gold 是什么？",
      answer: "S-Gold 是一个把资产定义为可参与、可运作系统输入的高端数字资产基础设施模型，而不是单纯的被动持有概念。",
    },
    {
      question: "它是那种炒作型币圈页面吗？",
      answer: "不是。这个站点刻意用更机构化、知识库式的方式来展示项目，而不是靠情绪化营销推动判断。",
    },
    {
      question: "系统里的收益逻辑来自哪里？",
      answer: "这里强调的是系统层面的交易流、支付结算与消费需求，而不是单一叙事或固定承诺。",
    },
    {
      question: "节点体系适合谁？",
      answer: "节点体系更适合有组织能力、团队能力、资源整合能力，或希望在结构中承担更高层级角色的人。",
    },
  ];
}

export function getLocalizedFooterSignals(language: SiteLanguage) {
  if (language === "en") return footerSignals;
  return [
    { ...footerSignals[0], label: "知识优先" },
    { ...footerSignals[1], label: "面向投资人" },
    { ...footerSignals[2], label: "基础设施驱动" },
  ];
}

export function getLocalizedDownloadCenter(language: SiteLanguage) {
  if (language === "en") {
    return {
      featured: downloadCenterFeatured,
      items: downloadCenterItems,
      labels: { featured: "Featured file", brief: "Institutional brief", view: "View", download: "Download" },
    };
  }

  return {
    featured: {
      ...downloadCenterFeatured,
      title: "S-Gold 机构白皮书",
      description: "以更机构化的方式总结项目叙事、系统结构、收益逻辑与长期基础设施定位。",
      tag: "白皮书",
    },
    items: [
      { ...downloadCenterItems[0], title: "系统机制简报", description: "用于董事会或合作方沟通的系统逻辑、参与设计与角色说明。", tag: "机制说明" },
      { ...downloadCenterItems[1], title: "生态总览演示稿", description: "用一份视觉演示稿串联区块链、金融与消费层。", tag: "生态" },
      { ...downloadCenterItems[2], title: "品牌资产包", description: "官方 Logo、深色视觉模板与对外传播图形资产集合。", tag: "视觉资产" },
    ],
    labels: { featured: "重点资料", brief: "机构简报", view: "查看", download: "下载" },
  };
}

export function getLocalizedAssetHub(language: SiteLanguage) {
  if (language === "en") {
    return {
      categories: assetHubCategories,
      items: assetHubItems,
      labels: { download: "Download", preview: "Preview", copy: "Copy Link", all: "All" },
    };
  }

  return {
    categories: ["全部", "海报", "品牌", "活动物料", "办公视觉"],
    items: [
      { ...assetHubItems[0], title: "高端发布海报", category: "海报" },
      { ...assetHubItems[1], title: "深色品牌封面", category: "品牌" },
      { ...assetHubItems[2], title: "节点说明背景板", category: "活动物料" },
      { ...assetHubItems[3], title: "大厅屏幕视觉", category: "办公视觉" },
      { ...assetHubItems[4], title: "投资人单页简介", category: "品牌" },
      { ...assetHubItems[5], title: "区域见面会海报", category: "海报" },
    ],
    labels: { download: "下载", preview: "预览", copy: "复制链接", all: "全部" },
  };
}

export function getLocalizedOfficialLinks(language: SiteLanguage) {
  if (language === "en") return officialLinkGroups;
  return [
    {
      title: "官网入口",
      items: [
        { ...officialLinkGroups[0].items[0], title: "主展示站", description: "面向公众的机构级落地页与核心叙事入口。" },
        { ...officialLinkGroups[0].items[1], title: "访问申请", description: "为合作方、用户和生态参与者准备的主要转化入口。" },
      ],
    },
    {
      title: "资料文档",
      items: [
        { ...officialLinkGroups[1].items[0], title: "白皮书", description: "系统基础逻辑、机制解释与战略定位文档。" },
        { ...officialLinkGroups[1].items[1], title: "路线图简报", description: "用于查看当前阶段与后续扩张逻辑的官方说明。" },
      ],
    },
    {
      title: "社群与传播",
      items: [
        { ...officialLinkGroups[2].items[0], title: "社群资源", description: "对外传播可复用的活动物料、视觉资产与公共资料。" },
        { ...officialLinkGroups[2].items[1], title: "媒体矩阵", description: "第三方声音、KOL 覆盖与社会证明入口。" },
      ],
    },
  ];
}

export function getLocalizedMediaItems(language: SiteLanguage) {
  if (language === "en") return mediaItems;
  return [
    { ...mediaItems[0], role: "宏观与 Web3 评论者", tag: "已认证", metric: "24.8 万关注", excerpt: "S-Gold 更像是在呈现一套数字资产操作系统，而不是普通代币推广页，这种表达方式更少见也更强。" },
    { ...mediaItems[1], role: "机构增长写作者", tag: "媒体", metric: "9.1 万关注", excerpt: "这个站点最强的地方是结构感。它更像给战略层看的，而不是做短期情绪刺激。" },
    { ...mediaItems[2], role: "基础设施型 KOL", tag: "影响者", metric: "41.2 万浏览", excerpt: "它最特别的是试图把资产、结算和消费需求放进同一个干净的系统叙事里。" },
    { ...mediaItems[3], role: "数字金融分析师", tag: "已认证", metric: "3.7 万订阅", excerpt: "这种深色知识库风格，让项目比一般交易所式页面更显可信。" },
    { ...mediaItems[4], role: "社群增长策略顾问", tag: "影响者", metric: "17.9 万关注", excerpt: "如果后续搭配真实工具和持续资源，这套叙事在区域扩张上会很顺。" },
    { ...mediaItems[5], role: "Web3 媒体编辑部", tag: "媒体", metric: "已专题报道", excerpt: "S-Gold 的表达重点是受控扩张、节点清晰度和机构可读性，而不是投机激进叙事。" },
  ];
}
