"use client";

import { useEffect } from "react";
import ProductsGrid from "@/app/components/products/ProductGrid";
import { useProductStore } from "@/app/hooks/useProduct";
import Link from "next/link";
type Props = {
  initialProducts: any[];
};

const FeaturedProductsClient = ({ initialProducts }: Props) => {
  const setProducts = useProductStore((state) => state.setProducts);
  const products = useProductStore((state) => state.products);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);

  return (
    <section className="bg-secondary py-20">
      <ProductsGrid products={products} />

      <div className="">
        <div className="flex items-center justify-center mt-16">
          <Link
            href="/shop"
            className="text-lg font-medium text-black hover:underline"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsClient;
