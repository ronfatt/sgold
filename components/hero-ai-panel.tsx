"use client";

import { BarChart3, BriefcaseBusiness, CircleHelp, SendHorizonal, Sparkles } from "lucide-react";
import { useState } from "react";

import { dispatchAiAdvisorPrompt } from "@/lib/ai-advisor";

const modes = [
  { label: "Explain", value: "explain", icon: CircleHelp },
  { label: "Advisor", value: "advisor", icon: BriefcaseBusiness },
  { label: "Simulate", value: "simulate", icon: BarChart3 },
];

export function HeroAiPanel() {
  const [message, setMessage] = useState("");
  const [focus, setFocus] = useState("explain");
  const [goal, setGoal] = useState("");
  const [budget, setBudget] = useState("");

  function ask(prompt: string) {
    if (!prompt.trim()) return;
    dispatchAiAdvisorPrompt({
      prompt,
      focus,
      goal,
      budget,
      context: "hero",
    });
    document.getElementById("ai-advisor")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMessage("");
  }

  return (
    <div className="absolute inset-x-0 top-1/2 mx-auto max-w-lg -translate-y-1/2 space-y-4 rounded-[28px] border border-gold/20 bg-background/78 px-6 py-5 backdrop-blur-md shadow-gold">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 bg-gold/10">
          <Sparkles className="h-4 w-4 text-gold" />
        </div>
        <div>
          <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.24em] text-gold">AI Advisor</p>
          <p className="text-sm text-secondaryText">Explain, guide, or simulate participation paths from the Hero.</p>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        {modes.map((mode) => {
          const Icon = mode.icon;
          return (
          <button
            key={mode.value}
            type="button"
            onClick={() => setFocus(mode.value)}
            className={`flex items-center justify-center gap-2 rounded-full px-3 py-2 text-xs transition ${
              focus === mode.value
                ? "border border-gold/30 bg-gold/10 text-primary"
                : "border border-white/10 bg-white/[0.03] text-secondaryText hover:border-gold/25 hover:text-primary"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {mode.label}
          </button>
        )})}
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <input
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
          placeholder="Goal: learn / evaluate / partner"
          className="min-w-0 rounded-full border border-white/10 bg-secondary px-4 py-3 text-sm text-primary outline-none placeholder:text-muted"
        />
        <input
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
          placeholder="Budget: starter / mid / strategic"
          className="min-w-0 rounded-full border border-white/10 bg-secondary px-4 py-3 text-sm text-primary outline-none placeholder:text-muted"
        />
      </div>

      <div className="flex gap-2">
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={
            focus === "simulate"
              ? "Example: I have a mid budget and want to evaluate node fit."
              : focus === "advisor"
                ? "Example: What should I review first?"
                : "Ask about the system..."
          }
          className="min-w-0 flex-1 rounded-full border border-white/10 bg-secondary px-4 py-3 text-sm text-primary outline-none placeholder:text-muted"
        />
        <button
          type="button"
          onClick={() => ask(message)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-highlight to-darkGold text-background shadow-gold"
        >
          <SendHorizonal className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() =>
            ask(
              focus === "simulate"
                ? "Simulate a participation path for me based on my goal and budget, and include a risk note."
                : focus === "advisor"
                  ? "Recommend what I should review next and what role may fit me best."
                  : "Explain S-Gold in simple terms with clear next steps.",
            )
          }
          className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-primary"
        >
          {focus === "simulate" ? "Run simulation" : focus === "advisor" ? "Get recommendation" : "Explain now"}
        </button>
        <button
          type="button"
          onClick={() => ask("Translate the S-Gold positioning into Chinese.")}
          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-secondaryText"
        >
          中文翻译
        </button>
      </div>
    </div>
  );
}
