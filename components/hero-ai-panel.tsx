"use client";

import { SendHorizonal, Sparkles } from "lucide-react";
import { useState } from "react";

import { useSiteLanguage } from "@/components/language-provider";
import { dispatchAiAdvisorPrompt } from "@/lib/ai-advisor";

export function HeroAiPanel() {
  const [message, setMessage] = useState("");
  const { language } = useSiteLanguage();

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
      };

  function ask(prompt: string, focus = "explain") {
    if (!prompt.trim()) return;
    dispatchAiAdvisorPrompt({
      prompt,
      focus,
      context: "hero",
    });
    document.getElementById("ai-advisor")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMessage("");
  }

  return (
    <div className="absolute inset-x-0 top-1/2 mx-auto max-w-lg -translate-y-1/2 space-y-5 rounded-[32px] bg-background/78 px-6 py-6 backdrop-blur-xl shadow-[0_0_0_1px_rgba(214,185,138,0.18),0_28px_100px_rgba(214,185,138,0.18)]">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/12 shadow-[0_0_24px_rgba(214,185,138,0.22)]">
          <Sparkles className="h-4 w-4 text-gold" />
        </div>
        <div>
          <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.24em] text-gold">{localized.title}</p>
          <p className="text-sm text-secondaryText">{localized.subtitle}</p>
        </div>
      </div>

      <ul className="space-y-2 text-sm leading-7 text-secondaryText">
        {localized.questions.map((question) => (
          <li key={question}>- {question}</li>
        ))}
      </ul>

      <div className="flex gap-2">
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={localized.placeholder}
          className="min-w-0 flex-1 rounded-full bg-secondary/90 px-4 py-3 text-sm text-primary outline-none ring-1 ring-white/8 placeholder:text-muted focus:ring-gold/30"
        />
        <button
          type="button"
          onClick={() => ask(message)}
          className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-highlight to-darkGold px-4 text-sm font-medium text-background shadow-gold"
        >
          <span>{localized.ask}</span>
          <SendHorizonal className="ml-2 h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => ask(localized.quick1, "explain")}
          className="rounded-full bg-white/[0.04] px-4 py-2 text-sm text-secondaryText transition hover:bg-gold/10 hover:text-primary"
        >
          {localized.quick1}
        </button>
        <button
          type="button"
          onClick={() => ask(localized.quick2, "explain")}
          className="rounded-full bg-white/[0.04] px-4 py-2 text-sm text-secondaryText transition hover:bg-gold/10 hover:text-primary"
        >
          {localized.quick2}
        </button>
        <button
          type="button"
          onClick={() => ask(localized.quick3, "advisor")}
          className="rounded-full bg-white/[0.04] px-4 py-2 text-sm text-secondaryText transition hover:bg-gold/10 hover:text-primary"
        >
          {localized.quick3}
        </button>
      </div>
    </div>
  );
}
