"use client";

import { useEffect } from "react";
import ProductsGrid from "@/app/components/products/ProductGrid";
import { useProductStore } from "@/app/hooks/useProduct";
import Link from "next/link";
import { useHydrateProductList } from "@/app/hooks/useHydrateProducts";
type Props = {
  initialProducts: any[];
};

const FeaturedProductsClient = ({ initialProducts }: Props) => {
  useHydrateProductList(initialProducts);

  // ✅ always read from Zustand (single source of truth)
  const hydratedProducts = useProductStore((state) => state.products);

  return (
    <section className="bg-secondary py-20">
      <ProductsGrid products={hydratedProducts} />

      <div className="">
        <div className="flex items-center justify-center mt-16">
          <Link
            href="/shop"
            className="border px-5 py-3 rounded-4xl border-black text-black hover:bg-black hover:text-white transition inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsClient;
