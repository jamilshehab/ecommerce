"use client";

import { useEffect, useRef } from "react";
import { useProductStore } from "@/app/hooks/useProduct";
import { Product } from "@/app/types";

export function useHydrateProductList(products: Product[]) {
  const setProducts = useProductStore((state) => state.setProducts);

  // ✅ prevents hydration from resetting Zustand repeatedly
  const hydrated = useRef(false);

  useEffect(() => {
    // no products
    if (!products?.length) return;

    // already hydrated once
    if (hydrated.current) return;

    // hydrate Zustand ONCE
    setProducts(products);

    hydrated.current = true;
  }, [products, setProducts]);
}
