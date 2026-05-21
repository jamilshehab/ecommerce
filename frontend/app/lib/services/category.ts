import { API_URL, fetchAPI } from "../API";

type CategoryResponse = {
  data: any[];
};

export async function getCategories() {
  const data = await fetchAPI<CategoryResponse>("/api/categories?populate=*", {
    next: { revalidate: 60 },
  });

  return data.data;
}
