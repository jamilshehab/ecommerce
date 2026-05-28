"use client";

import { useEffect, useRef } from "react";
import { useProductStore } from "@/app/hooks/useProduct";
import { Product } from "@/app/types";

export function useHydrateProduct(product: Product) {
  const updateProduct = useProductStore((state) => state.updateProduct);

  // ✅ hydrate only once
  const hydrated = useRef(false);

  useEffect(() => {
    if (!product) return;

    // already hydrated
    if (hydrated.current) return;

    updateProduct(product);

    hydrated.current = true;
  }, [product, updateProduct]);
}
