export const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
export const API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_STRAPI_URL is not defined");
}

type FetchOptions = RequestInit & {
  next?: {
    revalidate?: number;
  };
};

export async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { next, ...rest } = options;

  const res = await fetch(
    `${API_URL}${endpoint.startsWith("/") ? endpoint : "/" + endpoint}`,
    {
      ...rest,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
        ...(rest.headers || {}),
      },
      next,
    },
  );

  if (!res.ok) {
    const error = await res.text();
    console.error("API ERROR:", error);
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}
