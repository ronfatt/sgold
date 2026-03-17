"use client";

import { Globe2, LoaderCircle, MessageSquareText, RotateCcw, SendHorizonal, Sparkles } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { advisorFocusOptions, advisorPromptSuggestions } from "@/lib/site-data";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

type AdvisorState = {
  error: string;
  loading: boolean;
};

export function AiAdvisor() {
  const [message, setMessage] = useState("");
  const [focus, setFocus] = useState(advisorFocusOptions[0]?.value ?? "general onboarding");
  const [language, setLanguage] = useState("English");
  const listRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<AdvisorState>({
    error: "",
    loading: false,
  });
  const [history, setHistory] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Welcome to S-Gold AI Advisor. I can help you explain the project to a visitor, an investor, or a node candidate. Ask me about positioning, system logic, revenue framing, or next-step recommendations.",
    },
  ]);

  const copy = useMemo(() => {
    const byLanguage = {
      English: {
        title: "S-Gold AI Advisor",
        subtitle: "Live OpenAI-backed consultation layer",
        focus: "Conversation focus",
        language: "Language",
        response: "Conversation",
        placeholder:
          "Ask how the system works, who nodes are for, how to pitch S-Gold, or request a Chinese translation.",
        submit: "Ask Advisor",
        sending: "Sending",
        reset: "Reset",
        bestUseCases: "Best use cases",
        guardrail: "Guardrail",
        intro:
          "Use AI Advisor to explain the system, qualify interest, answer investor questions, and guide the next step like a polished sales consultant.",
        introMessage:
          "Welcome to S-Gold AI Advisor. I can help you explain the project to a visitor, an investor, or a node candidate. Ask me about positioning, system logic, revenue framing, or next-step recommendations.",
        online: "Online",
        empty: "Enter a question to talk with the AI advisor.",
      },
      中文: {
        title: "S-Gold AI 顾问",
        subtitle: "已接入 OpenAI 的实时顾问层",
        focus: "对话重点",
        language: "回答语言",
        response: "对话记录",
        placeholder: "你可以问系统怎么运作、节点适合谁、怎么对外介绍 S-Gold，或直接要求中文解释。",
        submit: "发送提问",
        sending: "发送中",
        reset: "清空对话",
        bestUseCases: "适合场景",
        guardrail: "顾问边界",
        intro:
          "AI 顾问会以更像商务顾问/销售顾问的方式帮助你解释项目、判断客户兴趣、回答投资人问题，并推进下一步动作。",
        introMessage:
          "欢迎来到 S-Gold AI 顾问。我可以帮你用更专业的方式解释项目，适合新用户、合作方、节点候选人或投资人沟通。你可以直接问我：这个项目适合谁、怎么介绍、系统逻辑是什么。",
        online: "在线",
        empty: "请输入你的问题后再发送。",
      },
      "Bahasa Melayu": {
        title: "Penasihat AI S-Gold",
        subtitle: "Lapisan konsultasi masa nyata berasaskan OpenAI",
        focus: "Fokus perbualan",
        language: "Bahasa jawapan",
        response: "Sejarah perbualan",
        placeholder:
          "Tanya bagaimana sistem berfungsi, siapa sesuai untuk node, cara memperkenalkan S-Gold, atau minta terjemahan.",
        submit: "Tanya Advisor",
        sending: "Menghantar",
        reset: "Kosongkan",
        bestUseCases: "Kegunaan terbaik",
        guardrail: "Had peranan",
        intro:
          "AI Advisor membantu menerangkan sistem, menilai minat pengguna, menjawab soalan pelabur, dan membimbing langkah seterusnya dengan nada konsultatif premium.",
        introMessage:
          "Selamat datang ke S-Gold AI Advisor. Saya boleh bantu anda menerangkan projek ini kepada pelawat baharu, rakan kongsi, calon node, atau pelabur.",
        online: "Dalam talian",
        empty: "Masukkan soalan dahulu sebelum menghantar.",
      },
    };

    return byLanguage[language as keyof typeof byLanguage] ?? byLanguage.English;
  }, [language]);

  useEffect(() => {
    setHistory([
      {
        role: "assistant",
        content: copy.introMessage,
      },
    ]);
  }, [copy.introMessage]);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history, state.loading]);

  async function submitQuestion(nextMessage?: string) {
    const prompt = (nextMessage ?? message).trim();

    if (!prompt) {
      setState((current) => ({
        ...current,
        error: copy.empty,
      }));
      return;
    }

    const nextHistory = [...history, { role: "user" as const, content: prompt }];
    setHistory(nextHistory);
    setMessage("");
    setState((current) => ({ ...current, loading: true, error: "" }));

    try {
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextHistory,
          focus,
          language,
        }),
      });

      const data = (await response.json()) as { answer?: string; error?: string };

      if (!response.ok || !data.answer) {
        throw new Error(data.error || "The advisor request failed.");
      }

      setHistory((current) => [...current, { role: "assistant", content: data.answer! }]);
      setState({
        error: "",
        loading: false,
      });
    } catch (error) {
      const fallback = error instanceof Error ? error.message : "The advisor request failed.";
      setHistory((current) => current.slice(0, -1));
      setMessage(prompt);
      setState((current) => ({
        ...current,
        error: fallback,
        loading: false,
      }));
    }
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
      <article className="glass-panel rounded-card border border-border p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.24em] text-gold">AI Layer</p>
            <h3 className="mt-4 font-[var(--font-inter)] text-3xl font-semibold tracking-[-0.04em] text-primary">
              A real advisor, not a decorative chatbot.
            </h3>
          </div>
          <Sparkles className="h-8 w-8 text-highlight" />
        </div>
        <p className="mt-6 text-base leading-8 text-muted">
          {copy.intro}
        </p>

        <div className="mt-8 space-y-4">
          <div className="rounded-[20px] border border-white/8 bg-white/[0.03] p-4">
            <p className="font-[var(--font-inter)] text-sm text-secondaryText">{copy.bestUseCases}</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
              <li>{language === "中文" ? "新用户快速解释" : language === "Bahasa Melayu" ? "Penerangan untuk pengguna baharu" : "New visitor onboarding"}</li>
              <li>{language === "中文" ? "投资人或合作方沟通辅助" : language === "Bahasa Melayu" ? "Sokongan penerangan pelabur" : "Investor-facing explanation support"}</li>
              <li>{language === "中文" ? "节点资格与路径建议" : language === "Bahasa Melayu" ? "Panduan kelayakan node" : "Node qualification guidance"}</li>
              <li>{language === "中文" ? "人工接待前的 FAQ 分流" : language === "Bahasa Melayu" ? "Automasi FAQ sebelum handoff manusia" : "FAQ automation before human handoff"}</li>
            </ul>
          </div>
          <div className="rounded-[20px] border border-gold/15 bg-gold/5 p-4">
            <p className="font-[var(--font-inter)] text-sm text-highlight">{copy.guardrail}</p>
            <p className="mt-2 text-sm leading-7 text-secondaryText">
              {language === "中文"
                ? "顾问会尽量用清晰、偏商务顾问的方式沟通，但不会承诺收益，也不会使用保本保赚式表达。"
                : language === "Bahasa Melayu"
                  ? "Pembantu ini akan menerangkan dengan jelas tanpa menjanjikan pulangan atau menggunakan bahasa keuntungan terjamin."
                  : "The assistant is instructed to explain clearly without promising returns or giving guaranteed-profit language."}
            </p>
          </div>
        </div>
      </article>

      <article className="glass-panel rounded-card border border-border p-6 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/20 bg-gold/10">
              <MessageSquareText className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="font-[var(--font-inter)] text-lg font-medium text-primary">{copy.title}</p>
              <p className="text-sm text-muted">{copy.subtitle}</p>
            </div>
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-secondaryText">
            {copy.online}
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm text-secondaryText">{copy.focus}</span>
            <select
              value={focus}
              onChange={(event) => setFocus(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-secondary px-4 py-3 text-sm text-primary outline-none transition focus:border-gold/40"
            >
              {advisorFocusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2">
            <span className="text-sm text-secondaryText">{copy.language}</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-secondary px-4 py-3 text-sm text-primary outline-none transition focus:border-gold/40"
            >
              <option>English</option>
              <option>中文</option>
              <option>Bahasa Melayu</option>
            </select>
          </label>
        </div>

        <div ref={listRef} className="mt-5 max-h-[420px] space-y-4 overflow-y-auto rounded-[24px] border border-white/8 bg-black/20 p-5">
          <p className="font-[var(--font-inter)] text-xs uppercase tracking-[0.24em] text-gold">{copy.response}</p>
          {history.map((item, index) => (
            <div
              key={`${item.role}-${index}`}
              className={`max-w-[88%] rounded-[22px] px-4 py-4 text-sm leading-7 ${
                item.role === "assistant"
                  ? "border border-gold/15 bg-gold/6 text-secondaryText"
                  : "ml-auto border border-white/10 bg-white/[0.05] text-primary"
              }`}
            >
              <p className="mb-2 font-[var(--font-inter)] text-xs uppercase tracking-[0.22em] text-gold/90">
                {item.role === "assistant"
                  ? language === "中文"
                    ? "顾问"
                    : language === "Bahasa Melayu"
                      ? "Penasihat"
                      : "Advisor"
                  : language === "中文"
                    ? "你"
                    : language === "Bahasa Melayu"
                      ? "Anda"
                      : "You"}
              </p>
              <p className="whitespace-pre-wrap">{item.content}</p>
            </div>
          ))}
          {state.loading ? (
            <div className="max-w-[88%] rounded-[22px] border border-gold/15 bg-gold/6 px-4 py-4 text-sm leading-7 text-secondaryText">
              <p className="mb-2 font-[var(--font-inter)] text-xs uppercase tracking-[0.22em] text-gold/90">
                {language === "中文" ? "顾问" : language === "Bahasa Melayu" ? "Penasihat" : "Advisor"}
              </p>
              <p>{language === "中文" ? "正在整理建议..." : language === "Bahasa Melayu" ? "Sedang menyusun jawapan..." : "Thinking through your request..."}</p>
            </div>
          ) : null}
          {state.error ? <p className="mt-4 text-sm text-rose-300">{state.error}</p> : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {advisorPromptSuggestions[language as keyof typeof advisorPromptSuggestions]?.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => {
                setMessage(suggestion);
                void submitQuestion(suggestion);
              }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-secondaryText transition hover:border-gold/25 hover:text-primary"
            >
              {suggestion}
            </button>
          )) ?? null}
        </div>

        <div className="mt-5 flex flex-col gap-3 md:flex-row">
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={copy.placeholder}
            className="min-h-28 flex-1 rounded-[24px] border border-white/10 bg-secondary px-4 py-4 text-sm leading-7 text-primary outline-none transition placeholder:text-muted focus:border-gold/40"
          />
          <div className="flex gap-3 md:self-end">
            <button
              type="button"
              onClick={() => {
                setHistory([{ role: "assistant", content: copy.introMessage }]);
                setState({ error: "", loading: false });
                setMessage("");
              }}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 font-[var(--font-inter)] text-sm font-medium text-secondaryText"
            >
              <RotateCcw className="h-4 w-4" />
              {copy.reset}
            </button>
            <button
              type="button"
              onClick={() => void submitQuestion()}
              disabled={state.loading}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-highlight to-darkGold px-6 font-[var(--font-inter)] text-sm font-medium text-background shadow-gold disabled:cursor-not-allowed disabled:opacity-70"
            >
              {state.loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <SendHorizonal className="h-4 w-4" />}
              {state.loading ? copy.sending : copy.submit}
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-muted">
          <Globe2 className="h-4 w-4 text-gold" />
          {language === "中文"
            ? "支持中文、English、Bahasa Melayu 连续对话。"
            : language === "Bahasa Melayu"
              ? "Menyokong sejarah perbualan dalam 中文, English, dan Bahasa Melayu."
              : "Supports multi-turn conversation in English, 中文, and Bahasa Melayu."}
        </div>
      </article>
    </div>
  );
}
