"use client";

import { Sparkles } from "lucide-react";

import { useSiteLanguage } from "@/components/language-provider";
import { dispatchAiAdvisorPrompt } from "@/lib/ai-advisor";

type AskAiButtonProps = {
  prompt: string;
  context?: string;
  focus?: string;
  label?: string;
  className?: string;
};

export function AskAiButton({
  prompt,
  context,
  focus,
  label,
  className = "inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-primary transition hover:border-gold/40 hover:shadow-gold",
}: AskAiButtonProps) {
  const { language } = useSiteLanguage();
  const resolvedLabel = label ?? (language === "zh" ? "询问 AI 这一部分" : "Ask AI about this");

  return (
    <button
      type="button"
      onClick={() => {
        dispatchAiAdvisorPrompt({ prompt, context, focus });
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className={className}
    >
      <Sparkles className="h-4 w-4" />
      {resolvedLabel}
    </button>
  );
}
