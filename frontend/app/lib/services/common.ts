export function getStrapiImage(image?: any) {
  if (!image?.url) return "/placeholder.jpg";

  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`;
}
