"use client";

import { LoaderCircle, SendHorizonal, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useSiteLanguage } from "@/components/language-provider";
import { AI_ADVISOR_EVENT, dispatchAiAdvisorPrompt } from "@/lib/ai-advisor";

export function HeroAiPanel() {
  const [message, setMessage] = useState("");
  const { language } = useSiteLanguage();
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const answerRef = useRef<HTMLDivElement | null>(null);

  const localized = language === "zh"
    ? {
        title: "AI 顾问",
        subtitle: "你可以问：",
        questions: ["这个系统是怎么运作的？", "收益是怎么来的？", "我适合参与吗？"],
        placeholder: "输入你的问题...",
        ask: "提问",
        quick1: "什么是 S-Gold？",
        quick2: "收益逻辑是什么？",
        quick3: "我该怎么开始？",
        initial:
          "先提一个问题，我会直接用简洁的方式解释系统、参与路径或风险提示。",
        error: "AI 顾问暂时无法响应，请稍后再试。",
        responseTitle: "回答",
      }
    : {
        title: "AI Advisor",
        subtitle: "You can ask:",
        questions: [
          "How does this system work?",
          "Where does revenue come from?",
          "Am I a fit to participate?",
        ],
        placeholder: "Ask your question...",
        ask: "Ask",
        quick1: "What is S-Gold?",
        quick2: "How does revenue work?",
        quick3: "How should I start?",
        initial:
          "Ask one question to get a simple explanation, participation guidance, or a clear risk note.",
        error: "The AI advisor could not respond right now. Please try again.",
        responseTitle: "Response",
      };

  async function ask(prompt: string, focus = "explain") {
    const nextPrompt = prompt.trim();
    if (!nextPrompt) return;

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: nextPrompt }],
          focus,
          language: language === "zh" ? "中文" : "English",
          context: "hero",
        }),
      });

      const data = (await response.json()) as { answer?: string; error?: string };

      if (!response.ok || !data.answer) {
        throw new Error(data.error || localized.error);
      }

      setAnswer(data.answer);
      setMessage("");
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : localized.error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    function onPrompt(event: Event) {
      const customEvent = event as CustomEvent<{ prompt?: string; focus?: string }>;
      const prompt = customEvent.detail?.prompt?.trim();
      if (!prompt) return;
      void ask(prompt, customEvent.detail?.focus ?? "explain");
    }

    window.addEventListener(AI_ADVISOR_EVENT, onPrompt);
    return () => window.removeEventListener(AI_ADVISOR_EVENT, onPrompt);
  }, [language, localized.error]);

  useEffect(() => {
    answerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [answer, error, loading]);

  function handleQuickAsk(prompt: string, focus = "explain") {
    dispatchAiAdvisorPrompt({ prompt, focus, context: "hero" });
  }

  return (
    <div className="absolute inset-x-4 top-24 bottom-6 mx-auto flex max-w-xl flex-col gap-4 overflow-hidden rounded-[32px] bg-background/82 px-5 py-5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(214,185,138,0.18),0_28px_100px_rgba(214,185,138,0.18)] md:inset-x-6 md:top-28 md:bottom-8 md:px-6 md:py-6">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/12 shadow-[0_0_24px_rgba(214,185,138,0.22)]">
          <Sparkles className="h-4 w-4 text-gold" />
        </div>
        <div>
          <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.24em] text-gold">{localized.title}</p>
          <p className="text-sm text-secondaryText">{localized.subtitle}</p>
        </div>
      </div>

      {!answer && !loading && !error ? (
        <ul className="space-y-2 text-sm leading-7 text-secondaryText">
          {localized.questions.map((question) => (
            <li key={question}>- {question}</li>
          ))}
        </ul>
      ) : null}

      <div className="flex gap-2">
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={localized.placeholder}
          className="min-w-0 flex-1 rounded-full bg-secondary/90 px-4 py-3 text-sm text-primary outline-none ring-1 ring-white/8 placeholder:text-muted focus:ring-gold/30"
        />
        <button
          type="button"
          onClick={() => void ask(message)}
          className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-highlight to-darkGold px-4 text-sm font-medium text-background shadow-gold disabled:opacity-70"
          disabled={loading}
        >
          {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <span>{localized.ask}</span>}
          {!loading ? <SendHorizonal className="ml-2 h-4 w-4" /> : null}
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[24px] bg-white/[0.03] px-4 py-4 ring-1 ring-white/8">
        <p className="mb-3 font-[var(--font-inter)] text-xs uppercase tracking-[0.24em] text-gold">{localized.responseTitle}</p>
        <div
          ref={answerRef}
          className="hero-ai-scroll min-h-[180px] flex-1 overflow-y-auto pr-2 text-sm leading-7 text-secondaryText"
        >
          {error ? (
            <p className="text-[rgb(240,180,180)]">{error}</p>
          ) : (
            <p className="whitespace-pre-line break-words">{answer || localized.initial}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => handleQuickAsk(localized.quick1, "explain")}
          className="rounded-full bg-white/[0.04] px-4 py-2 text-sm text-secondaryText transition hover:bg-gold/10 hover:text-primary"
        >
          {localized.quick1}
        </button>
        <button
          type="button"
          onClick={() => handleQuickAsk(localized.quick2, "explain")}
          className="rounded-full bg-white/[0.04] px-4 py-2 text-sm text-secondaryText transition hover:bg-gold/10 hover:text-primary"
        >
          {localized.quick2}
        </button>
        <button
          type="button"
          onClick={() => handleQuickAsk(localized.quick3, "advisor")}
          className="rounded-full bg-white/[0.04] px-4 py-2 text-sm text-secondaryText transition hover:bg-gold/10 hover:text-primary"
        >
          {localized.quick3}
        </button>
      </div>
    </div>
  );
}
