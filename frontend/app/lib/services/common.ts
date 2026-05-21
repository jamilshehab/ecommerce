const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export function getStrapiImage(path?: string) {
  if (!path) return "/placeholder.jpg";

  if (path.startsWith("https")) return path;

  if (!API_URL) return "/placeholder.jpg";

  return new URL(path, API_URL).toString();
}
