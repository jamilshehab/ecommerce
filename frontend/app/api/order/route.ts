import { fetchAPI } from "@/app/lib/API";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = await fetchAPI("/api/orders", {
      method: "POST",
      body: JSON.stringify({ data: body }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Order failed" }, { status: 500 });
  }
}
