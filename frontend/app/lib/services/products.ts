import { API_URL } from "../API";

export async function getFeaturedProducts(limit = 3) {
  const res = await fetch(
    `${API_URL}/api/products` +
      `?filters[isFeatured][$eq]=true` +
      `&populate[main_image]=true` +
      `&populate[category]=true` +
      `&pagination[limit]=${limit}` +
      `&sort=createdAt:desc`,
    { next: { revalidate: 60 } },
  );

  const data = await res.json();
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

  const res = await fetch(`${API_URL}/api/products?${params}`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return {
    products: data.data ?? [],
    pageCount: data.meta?.pagination?.pageCount ?? 1,
  };
}

export async function getProductBySlug(slug: string) {
  const res = await fetch(
    `${API_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 60 } },
  );

  const data = await res.json();

  return data.data?.[0] || null;
}
