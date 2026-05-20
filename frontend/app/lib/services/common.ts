import { API_URL } from "../API";

export function getStrapiImage(path?: string) {
  if (!path) return "/placeholder.jpg";
  return `${API_URL}${path}`;
}
