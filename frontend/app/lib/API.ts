import "server-only";

type FetchOptions = RequestInit & {
  next?: {
    revalidate?: number;
  };
};

function getToken() {
  return process.env.STRAPI_TOKEN || "";
}

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_STRAPI_URL || "";
}

export async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { next, ...rest } = options;

  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

  const url = `${getBaseUrl()}/api${cleanEndpoint}`;

  const token = getToken();

  const res = await fetch(url, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(rest.headers || {}),
    },
    next,
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(text);
  }

  return JSON.parse(text);
}
