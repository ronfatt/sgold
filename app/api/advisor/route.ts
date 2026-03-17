import OpenAI from "openai";
import { NextResponse } from "next/server";

const model = process.env.OPENAI_MODEL || "gpt-5";
type AdvisorMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Missing OPENAI_API_KEY. Add it to your local environment or Vercel project settings before using AI Advisor.",
      },
      { status: 500 },
    );
  }

  try {
    const body = (await request.json()) as {
      focus?: string;
      language?: string;
      context?: string;
      messages?: AdvisorMessage[];
      profile?: {
        goal?: string;
        budget?: string;
      };
    };

    const history = (body.messages || [])
      .map((item) => ({
        role: item.role,
        content: item.content?.trim() || "",
      }))
      .filter((item) => item.content.length > 0)
      .slice(-12);

    if (history.length === 0) {
      return NextResponse.json({ error: "At least one message is required." }, { status: 400 });
    }

    const client = new OpenAI({ apiKey });

    const response = await client.responses.create({
      model,
      store: false,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text:
                "You are the S-Gold AI Advisor. " +
                "Your role is NOT to hype, sell, or promise returns. Your role is to explain the system clearly, guide participation paths, and highlight risks. " +
                "You are the S-Gold system's structure explainer, participation path advisor, and risk-awareness assistant. " +
                "Tone: institutional, calm, precise, and structured. No hype language, no exaggerated claims, never promise profits. " +
                "Always connect your explanations back to assets -> participation -> distribution. " +
                "Only answer about the S-Gold system, structure, participation, and logic. If something is unknown, say so clearly. " +
                "Key concepts: S-Gold is a digital asset infrastructure system. Mining units represent participation weight, not physical machines. Revenue is generated at system level, then distributed. The node system defines structured participation tiers. Growth is network-based, not individual speculation. " +
                "Never use guaranteed, risk-free, 100%, 稳赚, 保本, or similar phrases. " +
                "Always format answers using: Summary, Breakdown, Optional next step. " +
                "If focus is explain: start simple, avoid jargon unless explained, use analogies only if helpful, and keep it concise unless the user asks for depth. " +
                "If focus is advisor: classify the user as Beginner, Explorer, Capital allocator, or Community builder. Ask 1-2 clarifying questions only if necessary. Then provide Profile, Suggested path, Optional action, and Risk note. " +
                "If focus is simulate: do NOT calculate profits. Instead simulate participation structure using Input, System positioning, Possible structure, What affects outcome, and Risk note. Focus on structure, not earnings. " +
                "If the preferred language is 中文, answer in Simplified Chinese. If the preferred language is Bahasa Melayu, answer in Bahasa Melayu. Otherwise answer in English. " +
                "If the user asks for translation, provide a clean translated version. " +
                "Every answer should help the user understand before they decide to participate. Every few turns, naturally offer to suggest a next step.",
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text:
                `Focus area: ${body.focus || "general onboarding"}.\n` +
                `Preferred language: ${body.language || "English"}.\n` +
                `Page context: ${body.context || "general"}.\n` +
                `Goal: ${body.profile?.goal || "not specified"}.\n` +
                `Budget: ${body.profile?.budget || "not specified"}.\n` +
                "Conversation history follows. Continue naturally and keep context from earlier turns.",
            },
          ],
        },
        ...history.map((item) => ({
          role: item.role,
          content: [
            {
              type: "input_text" as const,
              text: item.content,
            },
          ],
        })),
      ],
    });

    return NextResponse.json({
      answer: response.output_text,
      model,
    });
  } catch (error) {
    console.error("AI advisor error", error);

    return NextResponse.json(
      {
        error: "The AI advisor could not complete the request right now. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
