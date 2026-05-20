import { API_URL } from "../API";

export const createSubscribe = async (email: string) => {
  const res = await fetch(`${API_URL}/api/subscribes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        email,
      },
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to subscribe");
  }

  return res.json();
};
