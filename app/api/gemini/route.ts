import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function POST(req: Request) {
  try {
    const { input } = await req.json();

    // Initialize Gemini Pro model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Generate response with structured output
    const result = await model.generateContent({
      contents: [{
        role: "user", parts: [{
          text: `Provide a structured JSON output for a career path based on a person's skills. The JSON should contain 'Job Title', 'Role', and 'Careergraph' in Mermaid.js format. Example: {\"Job Title\": \"Machine Learning Engineer\", \"Role\": \"Software Engineer\", \"Careergraph\": \"graph TD; A[Machine Learning Engineer] -->|Can specialize| B[AI Researcher]; A -->|Can transition to| C[Data Scientist];\"}.Do not use newline character.I want only one career path as response .Replace commas with \,. The chart must have all possible learning materials required for each possible path .The output must me a single object not an array.
           , to prevent parse errors.Make absolutely sure these errors don't come Expecting 'SQE', 'DOUBLECIRCLEEND', 'PE', '-)', 'STADIUMEND', 'SUBROUTINEEND', 'PIPE', 'CYLINDEREND', 'DIAMOND_STOP', 'TAGEND', 'TRAPEND', 'INVTRAPEND', 'UNICODE_TEXT', 'TEXT', 'TAGSTART', got 'PS' .**Use alphanumeric node IDs** (avoid special characters in IDs).**Each transition (-->) must include learning materials**.Do not Use brackets at all.Fix all parse errors that might happen when im using mermaidjs to render this. needed for the next step.,Now, generate a structured response for a software developer with ${input}`
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json", // Ensures structured JSON output
      },
    });

    const response = await result.response.text();

    return NextResponse.json({ output: JSON.parse(response) });
  } catch (error) {
      console.log(error);
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
