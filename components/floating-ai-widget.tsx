"use client";

import { MessageSquareText, SendHorizonal, Sparkles, X } from "lucide-react";
import { useState } from "react";

import { dispatchAiAdvisorPrompt } from "@/lib/ai-advisor";

const quickPrompts = [
  "Explain S-Gold in simple terms",
  "How does revenue work?",
  "Is this risky?",
];

export function FloatingAiWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function ask(prompt: string) {
    dispatchAiAdvisorPrompt(prompt);
    document.getElementById("ai-advisor")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
    setMessage("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div className="glass-panel w-[min(92vw,380px)] rounded-[28px] border border-gold/20 p-4 shadow-gold">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 bg-gold/10">
                <MessageSquareText className="h-4 w-4 text-gold" />
              </div>
              <div>
                <p className="font-[var(--font-inter)] text-sm font-medium text-primary">AI Advisor</p>
                <p className="text-xs text-muted">Ask the system before you participate.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-secondaryText"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => ask(prompt)}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-secondaryText transition hover:border-gold/25 hover:text-primary"
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask AI about the model..."
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
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-background/85 px-5 py-3 text-sm font-medium text-primary shadow-gold backdrop-blur-xl"
      >
        <Sparkles className="h-4 w-4 text-gold" />
        AI Advisor
      </button>
    </div>
  );
}
