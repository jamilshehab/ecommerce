import { fetchAPI } from "../API";

export async function getFeaturedProducts(limit = 3) {
  const data = await fetchAPI<any>(
    `/api/products?filters[isFeatured][$eq]=true&populate[main_image]=true&populate[category]=true&pagination[limit]=${limit}&sort=createdAt:desc`,
    {
      next: { revalidate: 60 },
    },
  );

  return data.data;
}

export async function getProductsByCategory(
  slug: string,
  page = 1,
  pageSize = 8,
  sort = "createdAt:desc",
) {
  const params = new URLSearchParams({
    "filters[category][slug][$eq]": slug,
    "pagination[page]": String(page),
    "pagination[pageSize]": String(pageSize),
    sort,
    populate: "*",
  });

  const data = await fetchAPI<any>(`/api/products?${params.toString()}`, {
    next: { revalidate: 60 },
  });

  return {
    products: data.data ?? [],
    pageCount: data.meta?.pagination?.pageCount ?? 1,
  };
}

export async function getProductBySlug(slug: string) {
  const data = await fetchAPI<any>(
    `/api/products?filters[slug][$eq]=${slug}&populate=*`,
    {
      next: { revalidate: 60 },
    },
  );
 
  return data.data?.[0] || null;
}
