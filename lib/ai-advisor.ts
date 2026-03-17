export const AI_ADVISOR_EVENT = "sgold:ask-ai";

export type AiAdvisorLaunchPayload = {
  prompt: string;
  focus?: string;
  goal?: string;
  budget?: string;
  context?: string;
};

export function dispatchAiAdvisorPrompt(payload: string | AiAdvisorLaunchPayload) {
  if (typeof window === "undefined") return;

  const detail = typeof payload === "string" ? { prompt: payload } : payload;

  window.dispatchEvent(
    new CustomEvent(AI_ADVISOR_EVENT, {
      detail,
    }),
  );
}
