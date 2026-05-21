import { API_URL, fetchAPI } from "../API";

export async function createSubscribe(email: string) {
  return fetchAPI("/api/subscribes", {
    method: "POST",
    body: JSON.stringify({
      data: {
        email,
      },
    }),
  });
}
