import ProductsGrid from "@/app/components/products/ProductGrid";
import { getFeaturedProducts } from "@/app/lib/services/products";
import Link from "next/link";

const FeaturedProducts = async () => {
  const products = await getFeaturedProducts(3);
  return (
    <section className="bg-secondary py-20">
      <ProductsGrid products={products} />

      <div className="">
        <div className="flex items-center justify-center mt-16">
          <Link
            href="/shop"
            className="text-lg font-medium text-black hover:underline"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
