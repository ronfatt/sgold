const advisorForm = document.getElementById("advisor-form");
const advisorOutput = document.getElementById("advisor-output");
const quickPrompts = document.getElementById("quick-prompts");

const goalMap = {
  learn: {
    title: "先建立系统理解路径",
    action: "建议你先从“核心机制 + 收益模型 + 风险说明”三段开始，看懂系统如何运作，再决定是否参与。",
  },
  yield: {
    title: "先看适合你的收益参与结构",
    action: "建议你优先关注收益来源、分配规则与复投机制，确认自己能接受的参与节奏和规则边界。",
  },
  node: {
    title: "先评估你是否适合节点路线",
    action: "建议你先盘点资源组织力、团队基础与长期协同能力，再对照节点等级选择入场策略。",
  },
};

const riskMap = {
  low: "你的风险偏好偏稳健，更适合从基础参与路径或学习型路径进入，不建议一开始就追求高层级扩张。",
  mid: "你的风险偏好较平衡，可以在理解规则后逐步增加参与权重，同时保留试错空间。",
  high: "你的风险偏好偏高增长，适合关注扩张模型、裂变结构与节点机会，但仍需重视规则和波动风险。",
};

const budgetMap = {
  starter: "当前处于起步阶段，建议优先完成认知、体验顾问流程，并建立最小参与单位。",
  growth: "当前处于成长阶段，适合配置更清晰的参与节奏，并观察是否进入推荐与节点辅助结构。",
  advanced: "当前处于进阶布局阶段，可以结合节点路径、生态协作和 AI 管理工具做更完整规划。",
};

const quickPromptAnswers = {
  "什么是算力？":
    "算力在这里更接近“参与权重”，它决定你在系统收益分配中的系数，不是实体机器性能。",
  "系统怎么产生收益？":
    "主要来自交易活动、支付手续费、波动中的策略空间，以及流量场景带来的系统收入。",
  "我适合做节点吗？":
    "如果你有组织力、资源整合能力、愿意长期做团队协同，节点路径会更适合；如果还在了解系统，先走基础路径更稳。",
};

function renderAdvisorResult(title, body) {
  advisorOutput.innerHTML = `
    <p class="ai-output-label">AI 输出</p>
    <h4>${title}</h4>
    <p>${body}</p>
  `;
}

if (advisorForm) {
  advisorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(advisorForm);
    const goal = formData.get("goal");
    const risk = formData.get("risk");
    const budget = formData.get("budget");

    const goalText = goalMap[goal];
    const riskText = riskMap[risk];
    const budgetText = budgetMap[budget];

    const message = `${goalText.action} ${riskText} ${budgetText} 如果你后续接入真实大模型，这里可以进一步输出个人化 FAQ、参与建议、节点评估和跟进话术。`;
    renderAdvisorResult(goalText.title, message);
  });
}

if (quickPrompts) {
  quickPrompts.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) return;

    const prompt = target.dataset.prompt;
    if (!prompt || !quickPromptAnswers[prompt]) return;

    renderAdvisorResult(prompt, quickPromptAnswers[prompt]);
  });
}
