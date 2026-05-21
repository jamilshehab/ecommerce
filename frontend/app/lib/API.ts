export const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
export const API_TOKEN = process.env.STRAPI_API_TOKEN;

type FetchOptions = RequestInit & {
  next?: {
    revalidate?: number;
  };
};

export async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit & { next?: { revalidate?: number } } = {},
): Promise<T> {
  const { next, ...rest } = options;

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
      ...(rest.headers || {}),
    },
    next,
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("API ERROR:", error);
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}
