"use client";

import { useEffect } from "react";
import { useProductStore } from "@/app/hooks/useProduct";
import { Product } from "@/app/types";

export function useHydrateProductList(products: Product[]) {
  const setProducts = useProductStore((state) => state.setProducts);

  useEffect(() => {
    if (!products?.length) return;

    setProducts(products);
  }, [products, setProducts]);
}
