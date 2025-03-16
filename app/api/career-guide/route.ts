import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { structuredOutput } = await req.json(); // This is the output from the first Gemini API

    if (!structuredOutput) {
      return NextResponse.json({ error: "No structured output provided." }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
      Based on the following structured career data, generate a detailed career guide including:
      - An overview of the career path
      - Responsibilities at each stage
      - Skills required for transitions
      - Potential challenges and growth opportunities

      Structured Career Data:
      ${JSON.stringify(structuredOutput, null, 2)}

      Provide a well-structured and easy-to-read guide.
      No emojis or stylings.
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json({ careerGuide: responseText });
  } catch (error) {
    console.error("Error generating career guide:", error);
    return NextResponse.json({ error: "Failed to generate career guide" }, { status: 500 });
  }
}
