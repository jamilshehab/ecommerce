import { fetchAPI } from "../API";

export async function getCategories() {
  const data = await fetchAPI<any>("/categories?populate=*", {
    next: { revalidate: 60 },
  });

  return data.data;
}
