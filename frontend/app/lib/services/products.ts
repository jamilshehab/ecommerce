import { fetchAPI } from "../API";

export async function getFeaturedProducts(limit = 3) {
  const res = await fetchAPI<any>(
    `/products?filters[isFeatured][$eq]=true&populate[main_image]=true&populate[category]=true&pagination[limit]=${limit}&sort=createdAt:desc`,
    {
      cache: "no-store",
    },
  );

  return res.data;
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

  const data = await fetchAPI<any>(`/products?${params.toString()}`, {
    cache: "no-store",
  });

  return {
    products: data.data ?? [],
    pageCount: data.meta?.pagination?.pageCount ?? 1,
  };
}

export async function getProductBySlug(slug: string) {
  const data = await fetchAPI<any>(
    `/products?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    },
  );

  return data.data?.[0] || null;
}

export async function getFeaturedProductsNew() {
  const res = await fetchAPI<any>(
    `/products?filters[isFeatured][$eq]=true&populate[main_image]=true&populate[category]=true&sort=createdAt:desc`,
    {
      cache: "no-store",
    },
  );

  return {
    products: res.data ?? [],
  };
}
