import { NextResponse } from "next/server";
import { fetchAPI } from "@/app/lib/API";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data = await fetchAPI<any>("/api/subscribes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          phone_number: body.phone_number,
        },
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Subscription failed" },
      { status: 500 },
    );
  }
}
