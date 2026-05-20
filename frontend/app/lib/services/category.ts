import { API_URL } from "../API";

export async function getCategories() {
  const res = await fetch(`${API_URL}/api/categories?populate=*`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data.data;
}
