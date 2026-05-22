export function getStrapiImage(image?: string) {
  if (!image) return "/placeholder.jpg";

  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`;
}
