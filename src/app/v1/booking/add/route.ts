import { NextResponse } from "next/server";

export async function GET() {
  console.log("FETCHING");

  const res = await fetch(
    "https://api.cal.com/v1/event-types/?apiKey=cal_live_c9986ad96eb2d7d26d5b6a491c96cc83",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log("🚀 ~ file: route.ts:15 ~ GET ~ res:", res);
  const data = await res.json();

  return NextResponse.json({ data });
}
