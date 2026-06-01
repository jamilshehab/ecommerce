export async function createSubscribe(phone_number: string) {
  const response = await fetch("/api/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone_number,
    }),
  });

  if (!response.ok) {
    throw new Error("Subscribe failed");
  }

  return response.json();
}
