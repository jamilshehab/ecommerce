export async function createSubscribe(email: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/subscribes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: { email },
      }),
    },
  );

  if (!res.ok) {
    throw new Error("Subscribe failed");
  }

  return res.json();
}
