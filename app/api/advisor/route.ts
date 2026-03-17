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
      messages?: AdvisorMessage[];
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
                "You are the AI Advisor for S-Gold, a premium digital asset infrastructure presentation website. " +
                "Your job is to explain the project's structure clearly and professionally to prospective users, partners, and investors. " +
                "Speak like a premium sales consultant and strategic business advisor: warm, confident, consultative, persuasive, but never pushy. " +
                "Focus on helping the user understand fit, positioning, next steps, and strategic value. " +
                "Always sound concise, premium, and institutionally credible. " +
                "Never promise returns, never give illegal financial advice, and explicitly avoid guaranteed-profit language. " +
                "You may explain the Asset Engine, Finance & Payment Engine, Entertainment & Consumption Engine, revenue model, growth model, node system, and ecosystem. " +
                "If the preferred language is 中文, answer in Simplified Chinese. If the preferred language is Bahasa Melayu, answer in Bahasa Melayu. Otherwise answer in English. " +
                "If the user asks for translation, provide a clean translated version. " +
                "When useful, end with a practical next step or recommended action. Keep answers under 220 words unless the user asks for depth.",
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
