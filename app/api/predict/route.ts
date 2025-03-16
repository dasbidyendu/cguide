import { NextResponse } from "next/server";

const FLASK_API_URL = "https://your-flask-api.onrender.com/predict"; // Replace with your Flask API URL

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(FLASK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch prediction");
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
