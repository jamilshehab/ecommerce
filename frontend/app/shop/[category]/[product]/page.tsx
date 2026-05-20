import Breadcrumb from "@/app/components/common/BreadCrumb";
import ProductDetails from "@/app/components/products/ProductDetails";
import { getProductBySlug } from "@/app/lib/services/products";

export default async function Page({ params }: any) {
  const { product , category } = await params;

  const productData = await getProductBySlug(product);

  if (!productData) {
    return <div className="py-20 text-center">Product not found</div>;
  }

  return (
    <main className="">
      <Breadcrumb
        items={[
          {
            label: "Shop",
            href: "/shop",
          },
          {
            label: category,
            href: `/shop/${category}`,
          },
          {
            label: productData.title,
          },
        ]}
      />
      <ProductDetails product={productData} />
    </main>
  );
}
