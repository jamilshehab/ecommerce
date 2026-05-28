"use client";

import { useEffect } from "react";
import { useProductStore } from "@/app/hooks/useProduct";
import { Product } from "@/app/types";

export function useHydrateProduct(product: Product) {
  const updateProduct = useProductStore((state) => state.updateProduct);

  useEffect(() => {
    if (!product) return;

    // ALWAYS sync latest server data into store
    updateProduct(product);
  }, [product, updateProduct]);
}
